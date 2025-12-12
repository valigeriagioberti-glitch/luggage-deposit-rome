import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Phone, MessageSquare } from 'lucide-react';
import { getTravelAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';
import { useLanguage } from '../LanguageContext';
import { BUSINESS_INFO } from '../constants';

export const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language } = useLanguage();
  
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize with welcome message - update if language changes and chat hasn't started essentially
  useEffect(() => {
    if (messages.length === 0 || (messages.length === 1 && messages[0].role === 'model')) {
      setMessages([{ 
        role: 'model', 
        text: t.ai.initialMessage,
        timestamp: new Date() 
      }]);
    }
  }, [language, t.ai.initialMessage]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, showFallback]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userText = input;
    const userMessage: ChatMessage = {
      role: 'user',
      text: userText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setShowFallback(false);

    // Pass the current language to the service context indirectly
    const queryWithContext = `[User Language: ${language}] ${userText}`;
    
    let responseText = await getTravelAdvice(queryWithContext);
    
    // Check for fallback tag
    const fallbackTag = "[OFFER_HUMAN_HELP]";
    let shouldShowFallback = false;

    if (responseText.includes(fallbackTag)) {
      shouldShowFallback = true;
      responseText = responseText.replace(fallbackTag, '').trim();
    }

    const botMessage: ChatMessage = {
      role: 'model',
      text: responseText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMessage]);
    setIsLoading(false);
    setShowFallback(shouldShowFallback);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Chat Window */}
      <div className={`
        bg-white w-[90vw] sm:w-96 rounded-2xl shadow-2xl mb-4 border border-gray-200 overflow-hidden flex flex-col transition-all duration-300 origin-bottom-right
        ${isOpen ? 'scale-100 opacity-100 translate-y-0 pointer-events-auto' : 'scale-90 opacity-0 translate-y-8 pointer-events-none absolute'}
      `} style={{ height: '500px', maxHeight: '80vh' }}>
        
        {/* Header */}
        <div className="bg-primary p-4 flex justify-between items-center text-white shadow-sm">
          <div className="flex items-center gap-2">
            <div className="bg-white/20 p-1.5 rounded-full">
              <Bot size={20} className="text-white" />
            </div>
            <div>
              <span className="font-bold block text-sm leading-tight">Luggage Deposit Rome</span>
              <span className="text-[10px] text-green-100 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-300 rounded-full animate-pulse"></span>
                {t.ai.status}
              </span>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-primary text-white rounded-br-sm' 
                    : 'bg-white text-gray-800 border border-gray-200 rounded-bl-sm shadow-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white p-3 rounded-2xl border border-gray-200 rounded-bl-sm shadow-sm">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          )}

          {/* Fallback Options */}
          {showFallback && (
            <div className="flex flex-col gap-2 mt-2 animate-fade-in-up">
              <p className="text-xs text-center text-gray-500 mb-1">
                {t.ai.fallback}
              </p>
              <a 
                href="https://wa.me/393664530323" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-2 px-4 rounded-xl font-medium transition-colors shadow-sm"
              >
                <MessageSquare size={18} />
                {t.ai.whatsapp}
              </a>
              <a 
                href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
                className="flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 px-4 rounded-xl font-medium transition-colors shadow-sm"
              >
                <Phone size={18} />
                {t.ai.call}
              </a>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 border-t border-gray-100 bg-white">
          <div className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder={t.ai.placeholder}
              className="w-full border border-gray-200 bg-gray-50 rounded-full pl-4 pr-12 py-3 text-sm focus:outline-none focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary transition-all"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="absolute right-1.5 p-2 bg-primary text-white rounded-full hover:bg-primary-hover disabled:opacity-50 disabled:hover:bg-primary transition-colors shadow-sm"
            >
              <Send size={16} />
            </button>
          </div>
          {!process.env.API_KEY && (
            <p className="text-[10px] text-red-500 mt-2 text-center">{t.ai.apiMissing}</p>
          )}
        </div>
      </div>

      {/* Main Toggle Button (Replaces WhatsApp Button) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center justify-center p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105
          ${isOpen ? 'bg-gray-200 text-gray-600 rotate-90' : 'bg-primary text-white hover:bg-primary-hover'}
        `}
        aria-label="Toggle Support Chat"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
};