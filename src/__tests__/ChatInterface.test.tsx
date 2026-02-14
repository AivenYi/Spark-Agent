import '@testing-library/jest-dom';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ChatInterface from '../sections/ChatInterface';

// Mock scrollIntoView
window.HTMLElement.prototype.scrollIntoView = vi.fn();

// Mock Groq SDK
const { mockCreate } = vi.hoisted(() => {
  return { mockCreate: vi.fn() };
});

vi.mock('groq-sdk', () => {
  return {
    Groq: class {
      chat = {
        completions: {
          create: mockCreate
        }
      }
      constructor(options: any) {}
    }
  };
});

// Mock config
vi.mock('@/config/ai', () => ({
  AI_CONFIG: {
    activeProvider: 'groq',
    groq: {
      apiKey: 'test-key',
      baseUrl: '/groq-api',
      model: 'openai/gpt-oss-120b',
      temperature: 1,
      maxTokens: 1024
    },
    coze: {
      baseUrl: 'test',
      apiKey: 'test',
      botId: 'test',
      userId: 'test'
    }
  }
}));

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe('ChatInterface', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render welcome message', () => {
    render(<ChatInterface />);
    expect(screen.getByText(/小同志，你好/i)).toBeInTheDocument();
  });

  it('should try multiple fallback models when they fail', async () => {
    // 1. Primary call fails with 403
    mockCreate.mockRejectedValueOnce({
      status: 403,
      error: { message: 'Forbidden' },
      headers: { 'x-groq-request-id': 'req_1' }
    });

    // 2. First fallback (llama3-70b-8192) fails with 403
    mockCreate.mockRejectedValueOnce({
      status: 403,
      error: { message: 'Forbidden' },
      headers: { 'x-groq-request-id': 'req_2' }
    });

    // 3. Second fallback (mixtral-8x7b-32768) succeeds
    mockCreate.mockResolvedValueOnce({
      choices: [{
        message: { content: 'Fallback Success' }
      }]
    });

    render(<ChatInterface />);

    // Type input
    const input = screen.getByPlaceholderText('输入你想了解的红色故事...') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Test Message' } });
    
    // Find Send button
    const buttons = screen.getAllByRole('button');
    const sendButton = buttons.find(b => b.className.includes('bg-red-600') && !b.textContent?.includes('返回首页'));
    if (!sendButton) throw new Error('Send button not found');
    
    fireEvent.click(sendButton);

    await waitFor(() => {
      // Expect 3 calls
      expect(mockCreate).toHaveBeenCalledTimes(3);
      
      // 1. Primary
      expect(mockCreate).toHaveBeenNthCalledWith(1, expect.objectContaining({
        model: 'openai/gpt-oss-120b'
      }));
      
      // 2. First Fallback
      expect(mockCreate).toHaveBeenNthCalledWith(2, expect.objectContaining({
        model: 'llama3-70b-8192'
      }));

      // 3. Second Fallback
      expect(mockCreate).toHaveBeenNthCalledWith(3, expect.objectContaining({
        model: 'mixtral-8x7b-32768'
      }));
    });
  });
});
