import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { BOOKING_URL } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'it' ? 'en' : 'it');
  };

  const navLinks = [
    { name: t.nav.howItWorks, href: '#how-it-works' },
    { name: t.nav.pricing, href: '#pricing' },
    { name: t.nav.reviews, href: '#reviews' },
    { name: t.nav.location, href: '#location' },
    { name: t.nav.faq, href: '#faq' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <a href="#" className="flex-shrink-0 flex items-center gap-2 md:gap-3 cursor-pointer overflow-hidden">
            <img 
              src="https://cdn.shopify.com/s/files/1/0753/8144/0861/files/cropped-Untitled-design-2025-09-11T094640.576_1.png?v=1765462614" 
              alt="Luggage Deposit Rome Logo" 
              width="40"
              height="40"
              className="h-8 md:h-10 w-auto object-contain flex-shrink-0" 
            />
            <div className="flex flex-col leading-[0.9] mt-0.5">
              <span className="font-extrabold text-sm md:text-base text-dark tracking-tighter uppercase">LUGGAGE DEPOSIT</span>
              <span className="font-bold text-[10px] md:text-xs text-red-800 tracking-[0.25em] uppercase">ROME</span>
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
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 px-3 py-1.5 rounded-full transition-all duration-200 hover:shadow-sm group"
              aria-label={language === 'it' ? "Switch to English" : "Passa all'italiano"}
            >
              <img 
                src={language === 'it' ? "https://flagcdn.com/w40/it.png" : "https://flagcdn.com/w40/gb.png"}
                alt={language === 'it' ? "Italy Flag" : "UK Flag"}
                width="20"
                height="15"
                className="w-5 h-auto rounded-sm shadow-sm"
              />
              <span className="font-bold text-sm text-gray-700 uppercase group-hover:text-primary transition-colors">
                {language}
              </span>
            </button>

            <a
              href={BOOKING_URL}
              className="bg-primary text-white px-5 py-2 rounded-lg font-semibold text-sm hover:bg-primary-hover transition-all shadow-md hover:shadow-lg"
            >
              {t.nav.bookNow}
            </a>
          </div>

          <div className="md:hidden flex items-center gap-3 flex-shrink-0">
             <button 
              onClick={toggleLanguage}
              className="flex-shrink-0 flex items-center gap-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 px-3 py-1.5 rounded-full transition-all duration-200"
            >
              <img 
                src={language === 'it' ? "https://flagcdn.com/w40/it.png" : "https://flagcdn.com/w40/gb.png"}
                alt={language === 'it' ? "Italy Flag" : "UK Flag"}
                width="20"
                height="15"
                className="w-5 h-auto rounded-sm flex-shrink-0"
              />
              <span className="font-bold text-sm text-gray-700 uppercase">
                {language}
              </span>
            </button>

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