import React from 'react';

interface HeroIllustrationProps {
  className?: string;
}

export const HeroIllustration: React.FC<HeroIllustrationProps> = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      role="img"
    >
      <defs>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="5" />
          <feOffset dx="0" dy="4" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.2" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="suitcaseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#16a34a" />
          <stop offset="100%" stopColor="#15803d" />
        </linearGradient>
      </defs>

      {/* Background Decorative Blob - Subtle */}
      <circle cx="250" cy="250" r="220" fill="#ecfdf5" opacity="0.6" />

      {/* Group: Luggage Scene */}
      <g transform="translate(40, 40)" filter="url(#shadow)">
        
        {/* Large Rolling Suitcase (Green) */}
        <g transform="translate(120, 50)">
          {/* Handle extended */}
          <path d="M60 0 H120 V50 H60 Z" fill="none" stroke="#374151" strokeWidth="8" />
          
          {/* Body */}
          <rect x="20" y="40" width="140" height="220" rx="16" fill="url(#suitcaseGradient)" />
          
          {/* Vertical Ribs */}
          <path d="M50 40 V260 M90 40 V260 M130 40 V260" stroke="#000" strokeOpacity="0.1" strokeWidth="2" />
          
          {/* Corner Guards */}
          <path d="M20 56 A 16 16 0 0 1 36 40 L 50 40 L 20 70 Z" fill="#ffffff" fillOpacity="0.2" />
          
          {/* Wheels */}
          <circle cx="45" cy="265" r="10" fill="#0f172a" />
          <circle cx="135" cy="265" r="10" fill="#0f172a" />
          
          {/* Tag */}
          <g transform="translate(140, 80) rotate(10)">
             <rect x="0" y="0" width="30" height="50" rx="4" fill="#0f172a" />
             <rect x="5" y="10" width="20" height="25" fill="white" />
             <circle cx="15" cy="5" r="2" fill="white" />
          </g>
        </g>

        {/* Backpack (Dark Blue) - In front */}
        <g transform="translate(20, 160)">
           {/* Body shape */}
           <path d="M30 20 C 30 -10, 110 -10, 110 20 L 120 130 C 120 145, 110 150, 70 150 C 30 150, 20 145, 20 130 Z" fill="#0f172a" />
           
           {/* Top Flap */}
           <path d="M30 30 C 30 10, 110 10, 110 30 L 110 60 C 110 70, 30 70, 30 60 Z" fill="#1e293b" />
           
           {/* Front Pocket */}
           <rect x="40" y="80" width="60" height="50" rx="8" fill="#334155" />
           
           {/* Straps/Details */}
           <rect x="65" y="90" width="10" height="10" rx="2" fill="#16a34a" />
        </g>

        {/* Small Carry-on / Duffel (Light) - Behind Backpack, Right side */}
        <g transform="translate(240, 190)">
           <rect x="0" y="0" width="120" height="80" rx="12" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="2"/>
           <path d="M40 0 V-20 C 40 -30, 80 -30, 80 -20 V 0" fill="none" stroke="#374151" strokeWidth="6" />
           <circle cx="60" cy="40" r="15" fill="#16a34a" opacity="0.2" />
        </g>

        {/* Location Pin Icon Floating */}
        <g transform="translate(300, 60)">
          <path d="M20 0 C 9 0 0 9 0 20 C 0 35 20 60 20 60 C 20 60 40 35 40 20 C 40 9 31 0 20 0 Z" fill="#16a34a" />
          <circle cx="20" cy="20" r="8" fill="white" />
        </g>
        
        {/* Decorative Elements */}
        <circle cx="340" cy="40" r="4" fill="#fbbf24" />
        <circle cx="10" cy="100" r="6" fill="#16a34a" opacity="0.5" />
        
      </g>
    </svg>
  );
};