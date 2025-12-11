import React from 'react';
import { CalendarCheck, MapPin, Smile } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Services: React.FC = () => {
  const { t } = useLanguage();

  const icons = [<CalendarCheck size={32} />, <MapPin size={32} />, <Smile size={32} />];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">{t.services.title}</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.services.steps.map((step: any, index: number) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="text-primary mb-6 bg-primary-light w-20 h-20 rounded-full flex items-center justify-center">
                {icons[index]}
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};