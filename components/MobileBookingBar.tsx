import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import { BOOKING_URL } from '../constants';
import { motion, AnimatePresence } from 'motion/react';

export const MobileBookingBar: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the bar after scrolling past the hero section (approx 400px)
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 w-full z-40 md:hidden bg-white/90 backdrop-blur-md border-t border-gray-200 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] p-4 pb-safe"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">{t.hero.badges.price}</span>
              <span className="font-bold text-dark text-lg">€5.00 <span className="text-sm font-normal text-gray-500">/ day</span></span>
            </div>
            <a
              href={BOOKING_URL}
              className="flex-1 bg-primary text-white text-center py-3.5 rounded-xl font-bold hover:bg-primary-hover transition-colors shadow-glow"
            >
              {t.nav.bookNow}
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
