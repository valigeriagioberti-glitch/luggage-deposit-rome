import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { GOOGLE_MAPS_EMBED_URL, GOOGLE_MAPS_PROFILE_URL, BUSINESS_INFO } from '../constants';
import { useLanguage } from '../LanguageContext';

export const Location: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">{t.location.title}</h2>
          <p className="text-gray-600">{t.location.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info Card */}
          <div className="lg:col-span-1 bg-dark text-white p-8 rounded-2xl flex flex-col justify-center space-y-8 h-auto lg:h-[350px]">
             <div>
               <h3 className="text-2xl font-bold mb-6">{t.location.contactCard.title}</h3>
               <div className="space-y-4">
                 <div className="flex items-start gap-4">
                   <MapPin className="text-primary flex-shrink-0" />
                   <div>
                     <p className="font-bold text-gray-200">{t.location.contactCard.addressLabel}</p>
                     <p className="text-gray-400">{BUSINESS_INFO.address}</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <Navigation className="text-primary flex-shrink-0" />
                   <div>
                     <p className="font-bold text-gray-200">{t.location.contactCard.directionsLabel}</p>
                     <p className="text-gray-400">{t.location.contactCard.directionsText}</p>
                   </div>
                 </div>
               </div>
             </div>
             
             <a 
               href={GOOGLE_MAPS_PROFILE_URL}
               target="_blank"
               rel="noreferrer"
               className="w-full bg-primary text-white text-center py-4 rounded-xl font-bold hover:bg-primary-hover transition-colors"
             >
               {t.location.contactCard.getDirectionsBtn}
             </a>
          </div>

          {/* Map Iframe */}
          {/* Mobile: h-[450px] (Tall), Desktop: h-[350px] (Compact) */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-lg bg-gray-100 relative h-[450px] lg:h-[350px]">
            <iframe 
              src={GOOGLE_MAPS_EMBED_URL}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Luggage Deposit Rome Map"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};