import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { JOTFORM_ID } from '../constants';
import { useLanguage } from '../LanguageContext';
import { ClipboardList } from 'lucide-react';

export const BookingPage: React.FC = () => {
  const { t } = useLanguage();
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-dark mb-4">{t.booking.title}</h1>
            <p className="text-gray-600">
              {t.booking.subtitle}
            </p>
          </div>
          
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 h-[800px] relative">
             {!isIframeLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 z-10">
                   <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
                   <p className="text-gray-500">Loading booking form...</p>
                </div>
             )}
             <iframe
               id="JotFormIFrame-230000000000000"
               title="Luggage Storage Booking"
               onLoad={() => setIsIframeLoaded(true)}
               src={`https://form.jotform.com/${JOTFORM_ID}`}
               allow="geolocation; microphone; camera"
               className="w-full h-full border-none"
               scrolling="yes"
             >
             </iframe>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};