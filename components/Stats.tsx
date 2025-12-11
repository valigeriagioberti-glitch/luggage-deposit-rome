import React from 'react';
import { ShieldCheck, MapPin, Star, MessageCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Stats: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: <ShieldCheck size={20} />, text: t.stats.bags },
    { icon: <MapPin size={20} />, text: t.stats.distance },
    { icon: <Star size={20} />, text: t.stats.rating },
    { icon: <MessageCircle size={20} />, text: t.stats.support },
  ];

  return (
    <div className="bg-dark text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-3 text-sm md:text-base font-medium opacity-90 hover:opacity-100 transition-opacity">
              <span className="text-primary">{stat.icon}</span>
              <span>{stat.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};