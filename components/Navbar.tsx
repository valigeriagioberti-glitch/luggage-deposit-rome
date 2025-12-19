import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { BOOKING_URL } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'it' : 'en');
  };

  const navLinks = [
    { name: t.nav.howItWorks, href: '#how-it-works' },
    { name: t.nav.pricing, href: '#pricing' },
    { name: t.nav.reviews, href: '#reviews' },
    { name: t.nav.location, href: '#location' },
    { name: t.nav.faq, href: '#faq' },
  ];

  const LanguageToggle = () => (
    <div className="relative group">
      <button
        onClick={toggleLanguage}
        aria-label={language === 'en' ? 'Switch language to Italian' : 'Cambia lingua in inglese'}
        className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 px-4 h-9 rounded-full border border-gray-200 shadow-sm transition-all duration-200 active:scale-95 min-w-[52px]"
      >
        <span className="text-[12px] font-extrabold text-dark tracking-wider uppercase">
          {language}
        </span>
      </button>
      
      {/* Tooltip Hint - Desktop Only */}
      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-dark text-white text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 shadow-lg hidden md:block">
        {language === 'en' ? 'Switch to IT' : 'Passa a EN'}
      </div>
    </div>
  );

  return (
    <nav className="fixed w-full z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-8 md:gap-4">
          {/* Logo Section */}
          <a href="#" className="flex-shrink-0 flex items-center gap-2 md:gap-3 cursor-pointer overflow-hidden min-w-0">
            <img 
              src="https://cdn.shopify.com/s/files/1/0753/8144/0861/files/cropped-Untitled-design-2025-09-11T094640.576_1.png?v=1765462614&width=160&format=webp" 
              alt="Luggage Deposit Rome Logo" 
              width="40"
              height="40"
              loading="eager"
              fetchpriority="high"
              className="h-8 md:h-10 w-auto object-contain flex-shrink-0" 
            />
            <div className="flex flex-col truncate">
              <span className="font-[800] text-[13px] sm:text-[14px] md:text-[16px] leading-[14px] md:leading-[16px] text-dark tracking-tighter uppercase font-sans truncate">LUGGAGE DEPOSIT</span>
              <span className="font-[700] text-[10px] leading-[10px] text-red-800 tracking-[0.25em] uppercase font-sans">ROME</span>
            </div>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-primary font-medium text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <LanguageToggle />

            <a
              href={BOOKING_URL}
              className="bg-primary text-white px-5 py-2 rounded-lg font-semibold text-sm hover:bg-primary-hover transition-all shadow-md hover:shadow-lg"
            >
              {t.nav.bookNow}
            </a>
          </div>

          <div className="md:hidden flex items-center gap-3 flex-shrink-0">
            <LanguageToggle />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-dark focus:outline-none p-2 flex-shrink-0"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-green-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <a
              href={BOOKING_URL}
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-primary text-white px-3 py-3 rounded-md font-bold text-base shadow-sm"
            >
              {t.nav.bookStorage}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};