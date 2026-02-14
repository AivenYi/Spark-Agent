// AI Providers Configuration

export type AIProvider = 'coze' | 'groq';

export const AI_CONFIG = {
  // Current active provider
  activeProvider: 'coze' as AIProvider, // Change this to 'coze' to switch back

  // Coze Configuration
  coze: {
    baseUrl: '/coze-api',
    apiKey: 'pat_wzHHIvDWDRusTxUzcWitRLrl6xoJRjrAiVNz0vWrdlgsTrzaD3jFoahCRtTGQMM0',
    botId: '7602737159652556838',
    userId: 'user_123',
  },

  // Groq Configuration
  groq: {
    baseUrl: '/groq-api',
    apiKey: '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',
    model: 'openai/gpt-oss-120b',
    temperature: 1,
    maxTokens: 8192,
  }
};
