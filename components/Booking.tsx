import React, { useEffect } from 'react';
import { JOTFORM_ID } from '../constants';
import { useLanguage } from '../LanguageContext';
import { useBooking } from '../BookingContext';
import { Maximize2, X } from 'lucide-react';

export const Booking: React.FC = () => {
  const { t } = useLanguage();
  const { isFullScreen, toggleFullScreen, setIsFullScreen } = useBooking();

  // Handle escape key to close full screen
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsFullScreen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [setIsFullScreen]);

  // Determine classes to avoid 'relative' vs 'fixed' conflict
  const sectionClasses = isFullScreen
    ? 'fixed inset-0 z-[9999] bg-white h-[100dvh] w-screen overflow-hidden'
    : 'relative py-20 bg-primary-light z-0 transition-all duration-300';

  return (
    <section 
      id="booking" 
      className={sectionClasses}
    >
      <div className={`h-full flex flex-col ${isFullScreen ? 'w-full p-0' : 'max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'}`}>
        
        {!isFullScreen && (
          <div className="text-center mb-12 flex-shrink-0">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">{t.booking.title}</h2>
            <p className="text-gray-600">
              {t.booking.subtitle}
            </p>
          </div>
        )}
        
        <div className={`bg-white shadow-2xl border border-gray-100 relative transition-all duration-300 flex-grow ${
          isFullScreen 
            ? 'w-full h-full rounded-none border-none' 
            : 'rounded-2xl w-full h-[650px] md:h-[800px] overflow-hidden'
        }`}>
           
           <button 
              onClick={(e) => {
                e.stopPropagation();
                toggleFullScreen();
              }}
              className={`absolute right-4 z-[100] bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg border border-gray-200 hover:bg-white hover:scale-105 hover:text-primary transition-all text-gray-700 ${
                isFullScreen ? 'top-4' : 'top-4'
              }`}
              title={isFullScreen ? "Close Full Screen" : "Open Full Screen"}
              aria-label={isFullScreen ? "Close Full Screen" : "Open Full Screen"}
           >
              {isFullScreen ? <X size={24} /> : <Maximize2 size={20} />}
           </button>

           <iframe
             id="JotFormIFrame"
             title="Luggage Storage Booking"
             src={`https://form.jotform.com/${JOTFORM_ID}`}
             allow="geolocation; microphone; camera"
             className="w-full h-full border-none block"
             scrolling="yes"
             style={{ minWidth: '100%' }}
           >
           </iframe>
        </div>
      </div>
    </section>
  );
};