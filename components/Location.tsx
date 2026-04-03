import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { GOOGLE_MAPS_EMBED_URL, GOOGLE_MAPS_PROFILE_URL, BUSINESS_INFO } from '../constants';
import { useLanguage } from '../LanguageContext';
import { motion } from 'motion/react';

export const Location: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="location" className="py-24 bg-background" itemScope itemType="https://schema.org/LocalBusiness">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark mb-4" itemProp="name">{t.location.title}</h2>
          <p className="text-gray-600 text-lg">{t.location.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 bg-dark text-white p-8 rounded-[2rem] flex flex-col justify-center space-y-8 h-auto lg:h-[400px] shadow-2xl relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
             <div className="relative z-10">
               <h3 className="text-2xl font-heading font-bold mb-8">{t.location.contactCard.title}</h3>
               <div className="space-y-6">
                 <div className="flex items-start gap-4" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                   <div className="bg-white/10 p-2.5 rounded-xl">
                     <MapPin className="text-primary flex-shrink-0" size={24} />
                   </div>
                   <div>
                     <p className="font-bold text-gray-200">{t.location.contactCard.addressLabel}</p>
                     <p className="text-gray-400 mt-1" itemProp="streetAddress">{BUSINESS_INFO.address}</p>
                     <meta itemProp="addressLocality" content="Rome" />
                     <meta itemProp="addressCountry" content="IT" />
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="bg-white/10 p-2.5 rounded-xl">
                     <Navigation className="text-primary flex-shrink-0" size={24} />
                   </div>
                   <div>
                     <p className="font-bold text-gray-200">{t.location.contactCard.directionsLabel}</p>
                     <p className="text-gray-400 mt-1">{t.location.contactCard.directionsText}</p>
                   </div>
                 </div>
               </div>
             </div>
             
             <a 
               href={GOOGLE_MAPS_PROFILE_URL}
               target="_blank"
               rel="noreferrer"
               className="relative z-10 w-full bg-primary text-white text-center py-4 rounded-xl font-bold hover:bg-primary-hover transition-all duration-300 shadow-md hover:shadow-glow hover:-translate-y-0.5"
               itemProp="url"
             >
               {t.location.contactCard.getDirectionsBtn}
             </a>
          </motion.div>

          {/* Map Iframe */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 rounded-[2rem] overflow-hidden shadow-soft bg-gray-100 relative h-[450px] lg:h-[400px] border border-gray-200"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};