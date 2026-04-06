
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language, LanguageContextType } from './types';
import { translations } from './translations';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Check URL path first (e.g., /it)
    const path = window.location.pathname;
    if (path === '/it' || path.startsWith('/it/')) return 'it';
    
    // Check query parameter (e.g., ?lang=it)
    const params = new URLSearchParams(window.location.search);
    const langParam = params.get('lang');
    if (langParam === 'it') return 'it';
    
    return 'en';
  });

  // Sync language if URL changes (optional but good for back/forward buttons)
  React.useEffect(() => {
    const handleUrlChange = () => {
      const path = window.location.pathname;
      const params = new URLSearchParams(window.location.search);
      const langParam = params.get('lang');
      
      if (path === '/it' || path.startsWith('/it/') || langParam === 'it') {
        setLanguage('it');
      } else if (path === '/en' || path.startsWith('/en/') || langParam === 'en') {
        setLanguage('en');
      }
    };

    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, []);

  const value = {
    language,
    setLanguage,
    t: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};