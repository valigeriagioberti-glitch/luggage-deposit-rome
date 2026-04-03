import React from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { BOOKING_URL } from '../constants';
import { motion } from 'motion/react';

export const Pricing: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark mb-4">{t.pricing.title}</h2>
          <p className="text-gray-600 text-lg">{t.pricing.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {t.pricing.items.map((option: any, index: number) => {
            const isPopular = option.popular === true; 
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex flex-col rounded-[2rem] p-8 lg:p-10 transition-all duration-300 hover:-translate-y-2 ${
                  isPopular 
                    ? 'border-2 border-primary bg-white shadow-2xl z-10 scale-105 md:scale-110' 
                    : 'border border-gray-100 bg-background hover:shadow-xl'
                }`}
              >
                {isPopular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                    {t.pricing.popular}
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-xl font-heading font-bold text-gray-800">{option.name}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-sm text-gray-500 mr-1 font-medium">{t.pricing.from}</span>
                    <span className="text-5xl font-heading font-extrabold text-dark">{option.price}</span>
                    <span className="ml-1 text-gray-500 font-medium">{t.pricing.day}</span>
                  </div>
                </div>

                <ul className="space-y-5 mb-10 flex-1">
                  {option.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <div className="bg-primary-light p-1 rounded-full mr-3 mt-0.5">
                        <Check className="flex-shrink-0 h-4 w-4 text-primary" />
                      </div>
                      <span className="text-gray-600 text-sm font-medium leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={BOOKING_URL}
                  className={`block w-full py-4 px-6 text-center rounded-xl font-bold transition-all duration-300 ${
                    isPopular 
                      ? 'bg-primary text-white hover:bg-primary-hover shadow-glow hover:-translate-y-0.5' 
                      : 'bg-white border border-gray-200 text-dark hover:border-primary hover:text-primary hover:bg-primary-light'
                  }`}
                >
                  {t.pricing.choose} {option.name}
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};