import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { BOOKING_URL } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  const toggleLanguage = (lang: 'en' | 'it') => {
    setLanguage(lang);
  };

  const navLinks = [
    { name: t.nav.howItWorks, href: '#how-it-works' },
    { name: t.nav.pricing, href: '#pricing' },
    { name: t.nav.reviews, href: '#reviews' },
    { name: t.nav.location, href: '#location' },
    { name: t.nav.faq, href: '#faq' },
  ];

  const LanguageToggle = () => (
    <div className="flex items-center bg-gray-100 p-1 rounded-full border border-gray-200 shadow-inner w-24 h-9">
      <button
        onClick={() => toggleLanguage('en')}
        className={`flex-1 h-full flex items-center justify-center rounded-full text-[11px] font-extrabold transition-all duration-200 ${
          language === 'en' 
            ? 'bg-white text-dark shadow-sm ring-1 ring-black/5' 
            : 'text-gray-400 hover:text-gray-600'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => toggleLanguage('it')}
        className={`flex-1 h-full flex items-center justify-center rounded-full text-[11px] font-extrabold transition-all duration-200 ${
          language === 'it' 
            ? 'bg-white text-dark shadow-sm ring-1 ring-black/5' 
            : 'text-gray-400 hover:text-gray-600'
        }`}
      >
        IT
      </button>
    </div>
  );

  return (
    <nav className="fixed w-full z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <a href="#" className="flex-shrink-0 flex items-center gap-2 md:gap-3 cursor-pointer overflow-hidden">
            <img 
              src="https://cdn.shopify.com/s/files/1/0753/8144/0861/files/cropped-Untitled-design-2025-09-11T094640.576_1.png?v=1765462614&width=160&format=webp" 
              alt="Luggage Deposit Rome Logo" 
              width="40"
              height="40"
              loading="eager"
              fetchpriority="high"
              className="h-8 md:h-10 w-auto object-contain flex-shrink-0" 
            />
            <div className="flex flex-col">
              <span className="font-[800] text-[16px] leading-[16px] text-dark tracking-tighter uppercase font-sans">LUGGAGE DEPOSIT</span>
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
            
            {/* Desktop Language Switcher */}
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