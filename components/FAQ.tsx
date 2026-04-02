import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const FAQ: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">{t.faq.title}</h2>
        </div>

        <div className="space-y-4">
          {t.faq.items.map((faq: any, index: number) => (
            <details key={index} className="group bg-gray-50 rounded-xl overflow-hidden transition-all duration-300 open:bg-white open:shadow-md border border-gray-100">
              <summary className="flex justify-between items-center p-6 cursor-pointer select-none">
                <h3 className="font-bold text-dark text-lg">{faq.q}</h3>
                <span className="transform transition-transform duration-300 group-open:rotate-180 text-primary">
                  <ChevronDown size={20} />
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};