import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { getBookingUrl } from '../constants';

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
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsDropdownOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const languages = [
      { code: 'en', name: 'English', flag: '🇬🇧' },
      { code: 'it', name: 'Italiano', flag: '🇮🇹' }
    ];

    const currentLang = languages.find(l => l.code === language) || languages[0];

    return (
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className={`flex items-center gap-1.5 bg-white border border-gray-200 hover:bg-gray-50 transition-colors rounded-full px-3 py-1.5 shadow-sm ${isMobile ? 'w-full justify-center' : ''}`}
          aria-label="Select Language"
          aria-expanded={isDropdownOpen}
        >
          <span className="text-base leading-none">{currentLang.flag}</span>
          <svg 
            className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown Menu */}
        <div 
          className={`absolute top-full right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-200 origin-top-right z-50 ${
            isDropdownOpen 
              ? 'opacity-100 transform scale-100 pointer-events-auto' 
              : 'opacity-0 transform scale-95 pointer-events-none'
          }`}
        >
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  handleLanguageChange(lang.code as 'en' | 'it');
                  setIsDropdownOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 flex items-center justify-between transition-colors ${
                  language === lang.code 
                    ? 'bg-gray-50 text-gray-900' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-lg leading-none">{lang.flag}</span>
                  <span className={`text-sm ${language === lang.code ? 'font-semibold' : 'font-medium'}`}>
                    {lang.name}
                  </span>
                </div>
                {language === lang.code && (
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
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
              href={getBookingUrl(language)}
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
              href={getBookingUrl(language)}
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