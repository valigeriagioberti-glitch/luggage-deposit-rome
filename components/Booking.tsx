import React from 'react';
import { JOTFORM_ID } from '../constants';
import { useLanguage } from '../LanguageContext';
import { useBooking } from '../BookingContext';
import { Maximize2, Minimize2 } from 'lucide-react';

export const Booking: React.FC = () => {
  const { t } = useLanguage();
  const { isFullScreen, toggleFullScreen } = useBooking();

  return (
    <section 
      id="booking" 
      className={`transition-all duration-300 ${
        isFullScreen 
          ? 'fixed inset-0 z-[100] bg-white h-screen w-screen' 
          : 'py-20 bg-primary-light'
      }`}
    >
      <div className={`h-full ${isFullScreen ? 'w-full p-0' : 'max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'}`}>
        
        {!isFullScreen && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">{t.booking.title}</h2>
            <p className="text-gray-600">
              {t.booking.subtitle}
            </p>
          </div>
        )}
        
        <div className={`bg-white overflow-hidden shadow-2xl border border-gray-100 relative transition-all duration-300 ${
          isFullScreen 
            ? 'w-full h-full rounded-none border-none' 
            : 'rounded-2xl h-[600px] md:h-[700px]'
        }`}>
           
           <button 
              onClick={toggleFullScreen}
              className={`absolute right-4 z-20 bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-lg border border-gray-200 hover:bg-white hover:scale-105 hover:text-primary transition-all text-gray-700 ${
                isFullScreen ? 'top-4' : 'top-4'
              }`}
              title={isFullScreen ? "Exit Full Screen" : "Full Screen"}
           >
              {isFullScreen ? <Minimize2 size={24} /> : <Maximize2 size={20} />}
           </button>

           <iframe
             id="JotFormIFrame-230000000000000"
             title="Luggage Storage Booking"
             src={`https://form.jotform.com/${JOTFORM_ID}`}
             allow="geolocation; microphone; camera"
             className="w-full h-full border-none"
             scrolling="yes"
           >
           </iframe>
        </div>
      </div>
    </section>
  );
};