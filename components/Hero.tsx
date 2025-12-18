import React from 'react';
import { Star, MapPin, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { GOOGLE_MAPS_PROFILE_URL, BOOKING_URL } from '../constants';
import { HeroIllustration } from './HeroIllustration';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mobile: Illustration centered above content */}
        <div className="md:hidden flex justify-center mb-8 w-full">
           <HeroIllustration className="w-64 h-auto max-w-full drop-shadow-md" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text & Trust */}
          <div className="flex flex-col items-start z-10 relative">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-light text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              {t.hero.openEveryDay}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight mb-6">
              {t.hero.titleStart} <span className="text-primary">{t.hero.titleEnd}</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
              <a 
                href={BOOKING_URL} 
                className="flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-hover transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                {t.hero.ctaBook}
              </a>
              <a 
                href="#location" 
                className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-200 transition-all"
              >
                {t.hero.ctaFind}
              </a>
            </div>

            {/* Trust Line */}
            <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-600">
              <a 
                href={GOOGLE_MAPS_PROFILE_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer"
              >
                <Star className="text-yellow-400 fill-current" size={18} />
                <span className="text-dark font-bold underline decoration-dotted">{t.hero.trust.rating}</span>
              </a>
              <span className="hidden sm:inline text-gray-300">•</span>
              <div className="flex items-center gap-1">
                <MapPin size={18} className="text-primary" />
                {t.hero.trust.distance}
              </div>
              <span className="hidden sm:inline text-gray-300">•</span>
              <div className="flex items-center gap-1">
                <CheckCircle2 size={18} className="text-primary" />
                {t.hero.trust.cancel}
              </div>
            </div>

            {/* Badges */}
            <div className="mt-8 flex flex-wrap gap-3">
               <span className="bg-gray-50 border border-gray-200 text-gray-700 px-3 py-1 rounded-md text-xs font-semibold">{t.hero.badges.price}</span>
               <span className="bg-gray-50 border border-gray-200 text-gray-700 px-3 py-1 rounded-md text-xs font-semibold">{t.hero.badges.security}</span>
            </div>
          </div>

          {/* Right Column: Illustration (Desktop) & Highlight Card */}
          <div className="relative">
             
             {/* Desktop Illustration - positioned behind the card */}
             <div className="hidden lg:block absolute -top-20 -right-16 w-[130%] h-[130%] z-0 pointer-events-none opacity-90">
                <HeroIllustration />
             </div>

             {/* Card */}
             <div className="relative z-10 bg-dark text-white p-8 rounded-3xl shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500 lg:mr-12 lg:mt-12">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-xl font-bold">{t.hero.card.title}</h3>
                    <div className="flex text-yellow-400 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <div className="bg-primary/20 p-2 rounded-lg">
                    <ShieldCheck className="text-primary" size={24} />
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-2 rounded-lg">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">{t.hero.card.distanceLabel}</p>
                      <p className="font-medium">{t.hero.card.distanceValue}</p>
                      <p className="text-sm text-gray-400">{t.hero.card.distanceSub}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                     <div className="bg-white/10 p-2 rounded-lg">
                      <Clock className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">{t.hero.card.hoursLabel}</p>
                      <p className="font-medium">{t.hero.card.hoursValue}</p>
                      <p className="text-sm text-gray-400">{t.hero.card.hoursSub}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                     <div className="bg-white/10 p-2 rounded-lg">
                      <ShieldCheck className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">{t.hero.card.securityLabel}</p>
                      <p className="font-medium">{t.hero.card.securityValue}</p>
                      <p className="text-sm text-gray-400">{t.hero.card.securitySub}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-xs text-center text-gray-400 mb-3">{t.hero.card.bookNote}</p>
                  <a 
                    href={BOOKING_URL} 
                    className="block w-full bg-white text-dark text-center py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors"
                  >
                    {t.hero.card.reserveBtn}
                  </a>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};