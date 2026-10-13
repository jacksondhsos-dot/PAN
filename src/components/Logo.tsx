import React from 'react';

interface LogoProps {
  variant?: 'full' | 'compact' | 'badge';
  className?: string;
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'full', className = '', showSubtitle = true }) => {
  if (variant === 'badge') {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-[0_4px_20px_rgba(212,175,55,0.25)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Gold Ring */}
          <circle cx="100" cy="100" r="95" stroke="#D4AF37" strokeWidth="2.5" strokeDasharray="6 3" opacity="0.8" />
          <circle cx="100" cy="100" r="90" stroke="#F1D98A" strokeWidth="1.5" />
          
          {/* Deep Emerald Background with Gradient */}
          <defs>
            <radialGradient id="emeraldGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#123329" />
              <stop offset="85%" stopColor="#071C16" />
              <stop offset="100%" stopColor="#04100D" />
            </radialGradient>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2B2" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#AA820A" />
            </linearGradient>
            <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2E7D32" />
              <stop offset="50%" stopColor="#1B5E20" />
              <stop offset="100%" stopColor="#0F3B14" />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="88" fill="url(#emeraldGrad)" />

          {/* Stylized Heart-Shaped Betel Leaf (Paan Patta) */}
          <g transform="translate(100, 88) scale(0.65)">
            <path
              d="M0 -65 C25 -45 55 -20 62 18 C68 55 35 78 0 95 C-35 78 -68 55 -62 18 C-55 -20 -25 -45 0 -65 Z"
              fill="url(#leafGrad)"
              stroke="url(#goldGrad)"
              strokeWidth="3"
            />
            {/* Center vein */}
            <path d="M0 -55 Q0 20 0 88" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" />
            {/* Side veins */}
            <path d="M0 -25 Q25 -10 45 5" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />
            <path d="M0 -25 Q-25 -10 -45 5" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />
            <path d="M0 5 Q28 20 48 40" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
            <path d="M0 5 Q-28 20 -48 40" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
            <path d="M0 35 Q20 50 35 65" stroke="#D4AF37" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
            <path d="M0 35 Q-20 50 -35 65" stroke="#D4AF37" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
            {/* Golden clove pin on top */}
            <circle cx="0" cy="-60" r="3.5" fill="#F1D98A" stroke="#AA820A" strokeWidth="1" />
          </g>

          {/* Curved Text YASH PAN SHOP on bottom or middle */}
          <text
            x="100"
            y="152"
            textAnchor="middle"
            fill="#F1D98A"
            fontSize="12"
            fontWeight="bold"
            letterSpacing="2.5"
            fontFamily="'Playfair Display', Georgia, serif"
          >
            YASH PAN SHOP
          </text>
          <text
            x="100"
            y="167"
            textAnchor="middle"
            fill="#D4AF37"
            fontSize="10"
            fontWeight="600"
            fontFamily="'Noto Sans Devanagari', sans-serif"
          >
            यश पान शॉप • नांदेड
          </text>
        </svg>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Icon Emblem */}
      <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF4BD" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#997300" />
            </linearGradient>
            <radialGradient id="logoBg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#123329" />
              <stop offset="100%" stopColor="#071C16" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="47" fill="url(#logoBg)" stroke="url(#logoGold)" strokeWidth="2" />
          {/* Betel Leaf */}
          <path
            d="M50 15 C66 32 84 50 80 72 C76 89 54 94 50 92 C46 94 24 89 20 72 C16 50 34 32 50 15 Z"
            fill="#1E5C3B"
            stroke="url(#logoGold)"
            strokeWidth="1.8"
          />
          {/* Veins */}
          <path d="M50 20 V88" stroke="#F1D98A" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M50 38 Q64 48 70 60" stroke="#D4AF37" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M50 38 Q36 48 30 60" stroke="#D4AF37" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M50 56 Q62 65 67 74" stroke="#D4AF37" strokeWidth="1" strokeLinecap="round" />
          <path d="M50 56 Q38 65 33 74" stroke="#D4AF37" strokeWidth="1" strokeLinecap="round" />
          {/* Decorative Clove Pin */}
          <circle cx="50" cy="20" r="2.5" fill="#FFF4BD" />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline gap-2">
          <span className="font-playfair text-lg sm:text-xl font-bold tracking-wide text-[#F7F3E8] leading-tight group-hover:text-[#F1D98A] transition-colors">
            YASH <span className="text-[#D4AF37]">PAN SHOP</span>
          </span>
        </div>
        {showSubtitle && (
          <div className="flex items-center gap-1.5 text-xs text-[#B9C6BE]">
            <span className="font-marathi font-medium text-[#D4AF37]">यश पान शॉप</span>
            <span className="text-[10px] text-[#29483A]">•</span>
            <span className="text-[11px] text-[#B9C6BE] tracking-wider uppercase">Nanded</span>
          </div>
        )}
      </div>
    </div>
  );
};
