import React from 'react';
import { ShieldCheck, Video, Umbrella, CreditCard } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { motion } from 'motion/react';

export const TrustBadges: React.FC = () => {
  const { t } = useLanguage();

  const badges = [
    {
      icon: <Video className="w-6 h-6 text-primary" />,
      title: t.hero.badges.security,
      desc: "24/7 Active Monitoring"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: "100% Secure",
      desc: "Staff always present"
    },
    {
      icon: <Umbrella className="w-6 h-6 text-primary" />,
      title: "Insured Storage",
      desc: "Up to €500 per bag"
    },
    {
      icon: <CreditCard className="w-6 h-6 text-primary" />,
      title: t.hero.badges.price,
      desc: "No hidden fees"
    }
  ];

  return (
    <div className="bg-white border-y border-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {badges.map((badge, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center space-y-2"
            >
              <div className="bg-primary-light p-3 rounded-2xl mb-2">
                {badge.icon}
              </div>
              <h4 className="font-heading font-bold text-dark text-sm md:text-base">{badge.title}</h4>
              <p className="text-xs md:text-sm text-gray-500">{badge.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
