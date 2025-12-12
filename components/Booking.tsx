import React, { useEffect, useState } from 'react';
import { JOTFORM_ID } from '../constants';
import { useLanguage } from '../LanguageContext';
import { useBooking } from '../BookingContext';
import { Maximize2, X, ClipboardList } from 'lucide-react';

export const Booking: React.FC = () => {
  const { t } = useLanguage();
  const { isFullScreen, toggleFullScreen, setIsFullScreen } = useBooking();
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

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

  const loadForm = () => {
    setIsIframeLoaded(true);
    // If not full screen, maybe we don't force full screen, but let the user decide.
    // However, if they expand, we definitely load the form.
  };

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsIframeLoaded(true); // Load form if expanding
    toggleFullScreen();
  };

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
              onClick={handleToggle}
              className={`absolute right-4 z-[100] bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg border border-gray-200 hover:bg-white hover:scale-105 hover:text-primary transition-all text-gray-700 ${
                isFullScreen ? 'top-4' : 'top-4'
              }`}
              title={isFullScreen ? "Close Full Screen" : "Open Full Screen"}
              aria-label={isFullScreen ? "Close Full Screen" : "Open Full Screen"}
           >
              {isFullScreen ? <X size={24} /> : <Maximize2 size={20} />}
           </button>

           {isIframeLoaded ? (
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
           ) : (
             <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50 text-center p-6 space-y-6">
                <div className="bg-white p-6 rounded-full shadow-sm mb-2">
                  <ClipboardList className="w-16 h-16 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-dark max-w-md mx-auto">
                   {t.booking.loadForm || "Start Booking"}
                </h3>
                <p className="text-gray-500 max-w-sm mx-auto">
                   {t.booking.loadHint || "Click below to open the secure booking form."}
                </p>
                <button 
                  onClick={loadForm}
                  className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-hover transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  {t.booking.loadForm || "Start Booking"}
                </button>
             </div>
           )}
        </div>
      </div>
    </section>
  );
};