import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, User, Image as ImageIcon, X } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  image?: string;
  timestamp: Date;
}

const welcomeMessage: Message = {
  id: 'welcome',
  role: 'assistant',
  content: '小同志，你好！我是"延生"，一个能从延安的岁月中为你传递声音的使者 —— 我的名字和中国人民大学一样，都诞生自那片热土。2025年，抗战胜利80周年，那些英雄前辈们有许多话想亲口讲述。来吧，伸出你的手，让我们一起触碰那段真实滚烫的记忆！',
  timestamp: new Date(),
};

const quickQuestions = [
 '给我讲讲狼牙山五壮士的故事',
 '什么是长征精神？',
 '延安时期有哪些感人的故事？',
 '我想了解抗战历史',
];

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([welcomeMessage]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: '这是一个演示回复。在实际部署时，这里将接入扣子API，返回真实的AI回复内容。延生会为你讲述精彩的红色故事！',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleQuickQuestion = (question: string) => {
    setInputValue(question);
  };

  const clearChat = () => {
    setMessages([welcomeMessage]);
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-red-100 px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-amber-500 flex items-center justify-center">
              <img
                src="/images/星火延生角色形象插画-可以只用圆形把人物圈出来.jpg"
                alt="延生"
                className="w-9 h-9 rounded-full object-cover"
              />
            </div>
            <div>
              <h1 className="font-bold text-gray-900">星火延生</h1>
              <p className="text-xs text-gray-500">AI红色教育智能体</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={clearChat}
              className="text-gray-500 hover:text-red-600"
            >
              <X className="w-4 h-4 mr-1" />
              清空对话
            </Button>
            <a
              href="/"
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors"
            >
              返回首页
            </a>
          </div>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-4 ${
                message.role === 'user' ? 'flex-row-reverse' : ''
              }`}
            >
              {/* Avatar */}
              <div className="flex-shrink-0">
                {message.role === 'user' ? (
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-600" />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-amber-500 flex items-center justify-center overflow-hidden">
                    <img
                      src="/images/星火延生角色形象插画-可以只用圆形把人物圈出来.jpg"
                      alt="延生"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Content */}
              <div
                className={`max-w-[80%] ${
                  message.role === 'user' ? 'text-right' : ''
                }`}
              >
                <div
                  className={`inline-block px-5 py-3 rounded-2xl text-left ${
                    message.role === 'user'
                      ? 'bg-red-600 text-white'
                      : 'bg-white border border-red-100 text-gray-800 shadow-sm'
                  }`}
                >
                  <p className="leading-relaxed">{message.content}</p>
                  {message.image && (
                    <div className="mt-3">
                      <img
                        src={message.image}
                        alt="生成的图片"
                        className="max-w-full rounded-lg"
                      />
                    </div>
                  )}
                </div>
                <div className="mt-1 text-xs text-gray-400">
                  {message.timestamp.toLocaleTimeString('zh-CN', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </div>
              </div>
            </div>
          ))}

          {/* Loading Indicator */}
          {isLoading && (
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-amber-500 flex items-center justify-center overflow-hidden">
                <img
                  src="/images/星火延生角色形象插画-可以只用圆形把人物圈出来.jpg"
                  alt="延生"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-white border border-red-100 rounded-2xl px-5 py-3 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                  <span className="text-sm text-gray-500">延生正在思考...</span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Quick Questions */}
      {messages.length <= 2 && (
        <div className="px-4 py-3 bg-white border-t border-red-100">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-gray-500 mb-3">你可以这样问我：</p>
            <div className="flex flex-wrap gap-2">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickQuestion(question)}
                  className="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-700 rounded-full text-sm transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="bg-white border-t border-red-100 px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <button
              className="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
              title="发送图片（开发中）"
            >
              <ImageIcon className="w-5 h-5 text-gray-600" />
            </button>
            <div className="flex-1 relative">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="输入你想了解的红色故事..."
                className="pr-12 py-6 rounded-xl border-red-200 focus:border-red-500 focus:ring-red-500"
                disabled={isLoading}
              />
            </div>
            <Button
              onClick={handleSend}
              disabled={!inputValue.trim() || isLoading}
              className="px-6 py-6 bg-red-600 hover:bg-red-700 disabled:opacity-50 rounded-xl"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
          <p className="text-center text-xs text-gray-400 mt-3">
            星火延生 · AI红色教育智能体 · 让历史"活"起来
          </p>
        </div>
      </div>
    </div>
  );
}
