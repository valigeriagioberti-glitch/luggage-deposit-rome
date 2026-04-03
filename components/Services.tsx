import React from 'react';
import { CalendarCheck, MapPin, Smile } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { motion } from 'motion/react';

export const Services: React.FC = () => {
  const { t } = useLanguage();

  const icons = [<CalendarCheck size={32} />, <MapPin size={32} />, <Smile size={32} />];

  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark mb-4">{t.services.title}</h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            {t.services.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {t.services.steps.map((step: any, index: number) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white p-8 lg:p-10 rounded-[2rem] shadow-soft border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-primary mb-8 bg-primary-light w-20 h-20 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 rotate-3 group-hover:rotate-0">
                {icons[index]}
              </div>
              <h3 className="text-xl font-heading font-bold text-dark mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};