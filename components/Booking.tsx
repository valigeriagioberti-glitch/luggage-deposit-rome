import React from 'react';
import { JOTFORM_ID } from '../constants';
import { useLanguage } from '../LanguageContext';

export const Booking: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="booking" className="py-20 bg-primary-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">{t.booking.title}</h2>
          <p className="text-gray-600">
            {t.booking.subtitle}
          </p>
        </div>
        
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl h-[600px] md:h-[700px] border border-gray-100">
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