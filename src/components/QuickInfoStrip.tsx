import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { SHOP_INFO } from '../data/shopInfo';
import { Train, PhoneCall, Clock } from 'lucide-react';

interface QuickInfoStripProps {
  currentLang: Language;
}

export const QuickInfoStrip: React.FC<QuickInfoStripProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section className="relative z-20 -mt-6 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#0D2820] border border-[#29483A] rounded-xl p-4 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        {/* Block 1: Location */}
        <div className="flex items-start gap-4 p-3 rounded-lg bg-[#123329]/60 border border-[#29483A]/60 hover:border-[#D4AF37]/50 transition-colors">
          <div className="p-3 rounded-lg bg-[#071C16] border border-[#29483A] text-[#D4AF37] flex-shrink-0">
            <Train className="w-5 h-5 text-[#D4AF37]" />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-xs font-semibold tracking-wider uppercase text-[#F1D98A] mb-1">
              {t.quickInfo.locationTitle}
            </h2>
            <p className="text-sm font-medium text-[#F7F3E8] leading-snug">
              {SHOP_INFO.landmark}
            </p>
            <p className="text-xs text-[#B9C6BE] mt-0.5">
              Bus Stand Road, Tanda Bar area, Nanded 431601
            </p>
          </div>
        </div>

        {/* Block 2: Contact */}
        <div className="flex items-start gap-4 p-3 rounded-lg bg-[#123329]/60 border border-[#29483A]/60 hover:border-[#D4AF37]/50 transition-colors">
          <div className="p-3 rounded-lg bg-[#071C16] border border-[#29483A] text-[#57C785] flex-shrink-0">
            <PhoneCall className="w-5 h-5 text-[#57C785]" />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-xs font-semibold tracking-wider uppercase text-[#F1D98A] mb-1">
              {t.quickInfo.contactTitle}
            </h2>
            <div className="flex flex-col space-y-0.5">
              <a
                href={`tel:${SHOP_INFO.phonePrimary}`}
                className="text-sm font-semibold text-[#F7F3E8] hover:text-[#F1D98A] transition-colors"
              >
                {SHOP_INFO.phonePrimary}
              </a>
              <a
                href={`tel:${SHOP_INFO.phoneSecondary}`}
                className="text-xs text-[#B9C6BE] hover:text-[#F1D98A] transition-colors"
              >
                Alt: {SHOP_INFO.phoneSecondary}
              </a>
            </div>
          </div>
        </div>

        {/* Block 3: Hours (Display note as per instructions) */}
        <div className="flex items-start gap-4 p-3 rounded-lg bg-[#123329]/60 border border-[#29483A]/60 hover:border-[#D4AF37]/50 transition-colors">
          <div className="p-3 rounded-lg bg-[#071C16] border border-[#29483A] text-[#F1D98A] flex-shrink-0">
            <Clock className="w-5 h-5 text-[#F1D98A]" />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-xs font-semibold tracking-wider uppercase text-[#F1D98A] mb-1">
              {t.quickInfo.hoursTitle}
            </h2>
            <p className="text-sm font-medium text-[#F7F3E8] leading-snug">
              Open for Commuters & Visitors
            </p>
            <p className="text-xs text-[#B9C6BE] mt-0.5 italic">
              {currentLang === 'en'
                ? 'Full schedule to be updated upon owner verification.'
                : 'दुकानदाराकडून वेळ निश्चित झाल्यावर संपूर्ण वेळापत्रक दिसेल.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
