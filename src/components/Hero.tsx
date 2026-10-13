import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { SHOP_INFO } from '../data/shopInfo';
import { Images } from '../assets/images';
import { Navigation, Phone, UtensilsCrossed, Sparkles, MapPin } from 'lucide-react';

interface HeroProps {
  currentLang: Language;
}

export const Hero: React.FC<HeroProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section id="home" className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Hero Image with Deep Emerald Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={Images.heroPaan}
          alt="Traditional fresh luxury Indian paan on emerald platter"
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.08] scale-105 transform transition-transform duration-1000"
        />
        {/* Gradients to ensure superior legibility and luxury atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071C16] via-[#071C16]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#071C16]/90 via-[#071C16]/60 to-[#071C16]/80"></div>
        {/* Subtle decorative leaf watermark pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        {/* Small Marathi Label Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#123329]/90 border border-[#D4AF37]/60 text-[#F1D98A] text-xs sm:text-sm font-semibold tracking-wider mb-6 shadow-[0_2px_15px_rgba(212,175,55,0.15)] animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="font-marathi">{t.hero.marathiBadge}</span>
          <span className="text-[#D4AF37] opacity-60">•</span>
          <span className="text-xs uppercase tracking-widest text-[#F7F3E8] font-inter">Nanded, Maharashtra</span>
        </div>

        {/* Main Brand Title */}
        <h1 className="font-playfair text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#F7F3E8] tracking-tight mb-4 leading-tight drop-shadow-md">
          {t.hero.brandName}
        </h1>

        {/* Headline */}
        <p className="font-playfair italic text-xl sm:text-2xl md:text-3xl text-[#F1D98A] font-medium mb-6 drop-shadow">
          "{t.hero.headline}"
        </p>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-[#B9C6BE] font-inter leading-relaxed mb-10">
          {t.hero.description}
        </p>

        {/* Proximity Pill */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#F1D98A] mb-8 font-medium">
          <MapPin className="w-4 h-4 text-[#D4AF37]" />
          <span>{SHOP_INFO.addressShort}</span>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-xl mx-auto">
          {/* Primary CTA: GET DIRECTIONS */}
          <a
            href={SHOP_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#D4AF37] hover:bg-[#F1D98A] text-[#071C16] font-bold text-sm tracking-wider uppercase transition-all shadow-[0_4px_20px_rgba(212,175,55,0.35)] hover:shadow-[0_6px_25px_rgba(241,217,138,0.45)] hover:-translate-y-0.5"
          >
            <Navigation className="w-4 h-4" />
            <span>{t.hero.getDirections}</span>
          </a>

          {/* Secondary CTA: EXPLORE MENU */}
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#123329]/80 hover:bg-[#123329] border border-[#D4AF37]/70 text-[#F1D98A] hover:text-white font-semibold text-sm tracking-wider uppercase transition-all hover:-translate-y-0.5"
          >
            <UtensilsCrossed className="w-4 h-4 text-[#D4AF37]" />
            <span>{t.hero.exploreMenu}</span>
          </a>

          {/* Third CTA: CALL NOW */}
          <a
            href={`tel:${SHOP_INFO.phonePrimary}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-transparent hover:bg-[#29483A]/40 border border-[#29483A] text-[#F7F3E8] hover:text-[#F1D98A] font-semibold text-sm tracking-wider uppercase transition-all"
          >
            <Phone className="w-4 h-4 text-[#57C785]" />
            <span>{t.hero.callNow}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
