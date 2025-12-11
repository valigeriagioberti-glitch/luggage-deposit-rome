import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { useLanguage } from '../LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src="https://cdn.shopify.com/s/files/1/0753/8144/0861/files/cropped-Untitled-design-2025-09-11T094640.576_1.png?v=1765462614" 
                alt="Luggage Deposit Rome Logo" 
                className="h-10 w-auto object-contain" 
              />
              <span className="font-bold text-xl">Luggage Deposit Rome</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              {t.footer.desc}
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg mb-4">{t.footer.contactTitle}</h4>
            <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
              <MapPin size={18} className="text-primary" />
              <span>{BUSINESS_INFO.address}</span>
            </div>
             <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
              <Phone size={18} className="text-primary" />
              <span>{BUSINESS_INFO.phone}</span>
            </div>
             <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
              <Mail size={18} className="text-primary" />
              <a href={`mailto:${BUSINESS_INFO.email}`}>{BUSINESS_INFO.email}</a>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg mb-4">{t.footer.linksTitle}</h4>
            <div className="flex flex-col space-y-2 text-gray-400">
               <a href="#booking" className="hover:text-primary transition-colors">{t.nav.bookNow}</a>
               <a href="#how-it-works" className="hover:text-primary transition-colors">{t.nav.howItWorks}</a>
               <a href="#pricing" className="hover:text-primary transition-colors">{t.nav.pricing}</a>
               <a href="#location" className="hover:text-primary transition-colors">{t.footer.findUs}</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Luggage Deposit Rome — {t.footer.rights}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white">{t.footer.privacy}</a>
             <a href="#" className="hover:text-white">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};