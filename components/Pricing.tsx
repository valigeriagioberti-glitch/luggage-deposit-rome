import React from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { useBooking } from '../BookingContext';

export const Pricing: React.FC = () => {
  const { t } = useLanguage();
  const { expandIfMobile } = useBooking();

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">{t.pricing.title}</h2>
          <p className="text-gray-600">{t.pricing.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {t.pricing.items.map((option: any, index: number) => {
            const isPopular = index === 1; // Middle item is popular
            return (
              <div 
                key={index} 
                className={`relative flex flex-col rounded-2xl p-8 border-2 transition-transform hover:-translate-y-1 ${
                  isPopular 
                    ? 'border-primary bg-white shadow-xl z-10' 
                    : 'border-transparent bg-gray-50 hover:border-gray-200'
                }`}
              >
                {isPopular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-sm">
                    {t.pricing.popular}
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-700">{option.name}</h3>
                  <div className="mt-2 flex items-baseline">
                    <span className="text-sm text-gray-500 mr-1">{t.pricing.from}</span>
                    <span className="text-4xl font-extrabold text-dark">{option.price}</span>
                    <span className="ml-1 text-gray-500">{t.pricing.day}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {option.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <Check className="flex-shrink-0 h-5 w-5 text-primary mr-3" />
                      <span className="text-gray-600 text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#booking"
                  onClick={expandIfMobile}
                  className={`block w-full py-3 px-6 text-center rounded-xl font-bold transition-all ${
                    isPopular 
                      ? 'bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/30' 
                      : 'bg-white border-2 border-gray-200 text-dark hover:border-dark hover:bg-gray-50'
                  }`}
                >
                  {t.pricing.choose} {option.name}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};