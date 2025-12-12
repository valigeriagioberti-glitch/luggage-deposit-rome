
import React, { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { GOOGLE_MAPS_PROFILE_URL } from '../constants';

export const Reviews: React.FC = () => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth; // Scroll one full container width (approx 3 items)
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const getAvatarUrl = (name: string) => {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=16a34a&color=fff`;
  };

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Heading */}
        <div className="flex flex-col items-center justify-center text-center mb-12 w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4 text-center w-full">{t.reviews.title}</h2>
          <p className="text-gray-600 mb-6 max-w-2xl text-center w-full mx-auto">{t.reviews.subtitle}</p>
          
          <a 
            href={GOOGLE_MAPS_PROFILE_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-sm border border-gray-100 hover:shadow-md transition-all hover:scale-105 cursor-pointer mx-auto"
          >
            <span className="font-bold text-dark text-lg">4.8</span>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <span className="text-sm text-gray-500 font-medium">{t.reviews.googleReviews}</span>
          </a>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Navigation Buttons - Hidden on mobile, visible on hover/desktop */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 bg-white text-dark p-3 rounded-full shadow-lg border border-gray-100 hover:bg-primary hover:text-white transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0 hidden md:flex"
            aria-label="Previous reviews"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 bg-white text-dark p-3 rounded-full shadow-lg border border-gray-100 hover:bg-primary hover:text-white transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0 hidden md:flex"
            aria-label="Next reviews"
          >
            <ChevronRight size={24} />
          </button>

          {/* Scrollable Area */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Hide scrollbar for cleaner look
          >
            {t.reviews.list.map((review: any, index: number) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-[85vw] md:w-[calc(33.333%-16px)] snap-center"
              >
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full transition-all duration-300 hover:shadow-md text-left">
                  <div className="flex items-center mb-4">
                    <img 
                      src={getAvatarUrl(review.author)} 
                      alt={review.author} 
                      loading="lazy"
                      className="w-10 h-10 rounded-full mr-3 shadow-sm"
                    />
                    <div>
                      <h4 className="font-bold text-sm text-dark">{review.author}</h4>
                      <p className="text-xs text-gray-400">{review.date}</p>
                    </div>
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
                      alt="Google" 
                      loading="lazy"
                      className="w-5 h-5 ml-auto opacity-80" 
                    />
                  </div>
                  
                  <div className="flex text-yellow-400 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        fill="currentColor" 
                      />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed flex-1 italic">"{review.text}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile Swipe Hint */}
        <div className="md:hidden flex justify-center gap-2 mt-2">
            {[...Array(Math.min(t.reviews.list.length, 5))].map((_, i) => (
                <div key={i} className={`h-1.5 rounded-full ${i === 0 ? 'w-6 bg-primary' : 'w-1.5 bg-gray-300'}`}></div>
            ))}
        </div>
      </div>
    </section>
  );
};