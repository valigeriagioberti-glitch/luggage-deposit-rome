import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { BOOKING_URL } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  const navLinks = [
    { name: t.nav.howItWorks, href: '#how-it-works' },
    { name: t.nav.pricing, href: '#pricing' },
    { name: t.nav.reviews, href: '#reviews' },
    { name: t.nav.location, href: '#location' },
    { name: t.nav.faq, href: '#faq' },
  ];

  const LanguageToggle = () => (
    <div className="flex items-center p-0.5 sm:p-1 bg-gray-100 rounded-full border border-gray-200 shadow-inner flex-shrink-0">
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 sm:px-3 py-1 text-[10px] sm:text-[11px] font-bold rounded-full transition-all duration-200 ${
          language === 'en'
            ? 'bg-white text-dark shadow-sm'
            : 'text-gray-500 hover:text-dark'
        }`}
      >
        GB
      </button>
      <button
        onClick={() => setLanguage('it')}
        className={`px-2 sm:px-3 py-1 text-[10px] sm:text-[11px] font-bold rounded-full transition-all duration-200 ${
          language === 'it'
            ? 'bg-white text-dark shadow-sm'
            : 'text-gray-500 hover:text-dark'
        }`}
      >
        IT
      </button>
    </div>
  );

  return (
    <nav className="fixed w-full z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-2 md:gap-8">
          {/* Logo Section */}
          <a href="#" className="flex-shrink flex items-center gap-2 md:gap-3 cursor-pointer overflow-hidden min-w-0">
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
              <span className="font-[800] text-[12px] min-[360px]:text-[14px] md:text-[16px] leading-[14px] md:leading-[16px] text-dark tracking-tighter uppercase font-sans truncate">
                LUGGAGE DEPOSIT
              </span>
              <span className="font-[700] text-[9px] min-[360px]:text-[10px] leading-[10px] text-red-800 tracking-[0.25em] uppercase font-sans">
                ROME
              </span>
            </div>
          </a>
          
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 flex-shrink-0">
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
              className="bg-primary text-white px-4 lg:px-5 py-2 rounded-lg font-semibold text-sm hover:bg-primary-hover transition-all shadow-md hover:shadow-lg"
            >
              {t.nav.bookNow}
            </a>
          </div>

          <div className="md:hidden flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
            <LanguageToggle />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-dark focus:outline-none p-1.5 sm:p-2 flex-shrink-0"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
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