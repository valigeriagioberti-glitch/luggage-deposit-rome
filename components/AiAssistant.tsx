import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { getTravelAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';
import { useLanguage } from '../LanguageContext';

export const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language } = useLanguage();
  
  // Initialize messages based on the current language when component mounts or language changes
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Update the initial message when language changes, but only if chat is empty
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{ role: 'model', text: t.ai.initialMessage, timestamp: new Date() }]);
    }
  }, [language, t, messages.length]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Pass the current language to the service context indirectly by appending instruction
    const queryWithContext = `[User Language: ${language}] ${userMessage.text}`;
    const responseText = await getTravelAdvice(queryWithContext);

    const botMessage: ChatMessage = {
      role: 'model',
      text: responseText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMessage]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-80 sm:w-96 rounded-2xl shadow-2xl mb-4 border border-gray-200 overflow-hidden flex flex-col animate-fade-in-up" style={{ height: '500px' }}>
          {/* Header */}
          <div className="bg-primary p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Bot size={20} />
              <span className="font-bold">Termini Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-primary-hover p-1 rounded transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    msg.role === 'user' 
                      ? 'bg-primary text-white rounded-br-none' 
                      : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-lg border border-gray-200 rounded-bl-none shadow-sm">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-100 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder={t.ai.placeholder}
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-primary text-white p-2 rounded-lg hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
            {!process.env.API_KEY && (
              <p className="text-[10px] text-red-500 mt-2 text-center">{t.ai.apiMissing}</p>
            )}
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary-hover transition-all hover:scale-110 flex items-center justify-center"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
};