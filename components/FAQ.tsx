import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { motion } from 'motion/react';

export const FAQ: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark mb-4">{t.faq.title}</h2>
        </motion.div>

        <div className="space-y-4">
          {t.faq.items.map((faq: any, index: number) => (
            <motion.details 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md border border-gray-100"
            >
              <summary className="flex justify-between items-center p-6 cursor-pointer select-none hover:bg-gray-50 transition-colors">
                <h3 className="font-heading font-bold text-dark text-lg pr-4">{faq.q}</h3>
                <span className="transform transition-transform duration-300 group-open:rotate-180 text-primary bg-primary-light p-1.5 rounded-full">
                  <ChevronDown size={20} />
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                {faq.a}
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
};