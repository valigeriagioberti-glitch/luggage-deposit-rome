import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { BOOKING_URL } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/' || location.pathname === '/it' || location.pathname === '/en';
  const homePath = language === 'it' ? '/it' : '/';

  const handleLanguageChange = (newLang: 'en' | 'it') => {
    if (newLang === language) return;
    
    setLanguage(newLang);
    
    // If on a home-related path, switch between / and /it
    if (isHome) {
      navigate(newLang === 'it' ? '/it' : '/');
    }
    // For other pages (like blog), we could add prefixes later if needed
    // For now, we just update the context which updates the UI
  };

  const navLinks = [
    { name: t.nav.howItWorks, href: isHome ? '#how-it-works' : `${homePath}#how-it-works`, isHash: true },
    { name: t.nav.pricing, href: isHome ? '#pricing' : `${homePath}#pricing`, isHash: true },
    { name: t.nav.reviews, href: isHome ? '#reviews' : `${homePath}#reviews`, isHash: true },
    { name: t.nav.location, href: isHome ? '#location' : `${homePath}#location`, isHash: true },
    { name: t.nav.faq, href: isHome ? '#faq' : `${homePath}#faq`, isHash: true },
    { name: t.nav.blog, href: '/blog', isHash: false },
  ];

  const LanguageToggle = ({ isMobile = false }: { isMobile?: boolean }) => {
    if (isMobile) {
      // Mobile Rectangular Flag Toggle
      // Container: Soft rounded rectangle, lightweight and compact
      return (
        <div className="flex items-center p-1 bg-gray-100 rounded-md border border-gray-200 w-[74px] h-[38px] flex-shrink-0">
          <button
            onClick={() => handleLanguageChange('en')}
            className={`flex-1 h-full flex items-center justify-center rounded-sm transition-all duration-300 ${
              language === 'en'
                ? 'bg-white shadow-sm border border-gray-100'
                : 'bg-transparent'
            }`}
            aria-label="Switch to English"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" 
              alt="EN" 
              className={`w-5 h-auto rounded-[1px] object-cover transition-opacity duration-300 ${language === 'en' ? 'opacity-100' : 'opacity-40 grayscale-[0.2]'}`}
            />
          </button>
          <button
            onClick={() => handleLanguageChange('it')}
            className={`flex-1 h-full flex items-center justify-center rounded-sm transition-all duration-300 ${
              language === 'it'
                ? 'bg-white shadow-sm border border-gray-100'
                : 'bg-transparent'
            }`}
            aria-label="Passa all'italiano"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg" 
              alt="IT" 
              className={`w-5 h-auto rounded-[1px] object-cover transition-opacity duration-300 ${language === 'it' ? 'opacity-100' : 'opacity-40 grayscale-[0.2]'}`}
            />
          </button>
        </div>
      );
    }

    // Desktop Pill Toggle (Updated to use flags)
    return (
      <div className="flex items-center p-1 bg-gray-100 rounded-full border border-gray-200 shadow-inner flex-shrink-0">
        <button
          onClick={() => handleLanguageChange('en')}
          className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 ${
            language === 'en'
              ? 'bg-white shadow-sm'
              : 'hover:bg-gray-200'
          }`}
          aria-label="Switch to English"
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" 
            alt="EN" 
            className={`w-4 h-4 rounded-full object-cover transition-opacity duration-300 ${language === 'en' ? 'opacity-100' : 'opacity-40 grayscale-[0.2]'}`}
          />
        </button>
        <button
          onClick={() => handleLanguageChange('it')}
          className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 ${
            language === 'it'
              ? 'bg-white shadow-sm'
              : 'hover:bg-gray-200'
          }`}
          aria-label="Passa all'italiano"
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg" 
            alt="IT" 
            className={`w-4 h-4 rounded-full object-cover transition-opacity duration-300 ${language === 'it' ? 'opacity-100' : 'opacity-40 grayscale-[0.2]'}`}
          />
        </button>
      </div>
    );
  };

  return (
    <nav className="fixed w-full z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-16 gap-2 md:gap-8">
          {/* Logo Section */}
          <Link to="/" className="flex-shrink flex items-center gap-2.5 md:gap-3 cursor-pointer overflow-hidden min-w-0">
            <img 
              src="https://cdn.shopify.com/s/files/1/0753/8144/0861/files/cropped-Untitled-design-2025-09-11T094640.576_1.png?v=1765462614&width=160&format=webp" 
              alt="Luggage Deposit Rome Logo" 
              width="40"
              height="40"
              loading="eager"
              fetchPriority="high"
              className="h-11 md:h-10 w-auto object-contain flex-shrink-0" 
            />
            <div className="flex flex-col truncate">
              <span className="font-[800] text-[13px] min-[360px]:text-[15px] md:text-[16px] leading-[15px] md:leading-[16px] text-dark tracking-tighter uppercase font-sans truncate">
                LUGGAGE DEPOSIT
              </span>
              <span className="font-[700] text-[10px] min-[360px]:text-[11px] leading-[11px] text-red-800 tracking-[0.25em] uppercase font-sans">
                ROME
              </span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 flex-shrink-0">
            {navLinks.map((link) => (
              link.isHash ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-primary font-medium text-sm transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-medium text-sm transition-colors ${location.pathname.startsWith(link.href) ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}
                >
                  {link.name}
                </Link>
              )
            ))}
            
            <LanguageToggle />

            <a
              href={BOOKING_URL}
              className="bg-primary text-white px-4 lg:px-5 py-2 rounded-lg font-semibold text-sm hover:bg-primary-hover transition-all shadow-md hover:shadow-lg"
            >
              {t.nav.bookNow}
            </a>
          </div>

          {/* Mobile Action Group */}
          <div className="md:hidden flex items-center gap-4 flex-shrink-0">
            <LanguageToggle isMobile />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-dark focus:outline-none p-1.5 sm:p-2 flex-shrink-0"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              link.isHash ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-green-50 rounded-md"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 text-base font-medium rounded-md ${location.pathname.startsWith(link.href) ? 'text-primary bg-green-50' : 'text-gray-700 hover:text-primary hover:bg-green-50'}`}
                >
                  {link.name}
                </Link>
              )
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