import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { SHOP_INFO } from '../data/shopInfo';
import { MapPin, Navigation, Phone, Train, Bus, Copy, Check, ExternalLink } from 'lucide-react';

interface LocationSectionProps {
  currentLang: Language;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ currentLang }) => {
  const [copiedPlusCode, setCopiedPlusCode] = React.useState(false);
  const [copiedAddress, setCopiedAddress] = React.useState(false);
  const t = translations[currentLang];

  const handleCopyPlusCode = () => {
    navigator.clipboard.writeText(SHOP_INFO.plusCode);
    setCopiedPlusCode(true);
    setTimeout(() => setCopiedPlusCode(false), 2000);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(SHOP_INFO.addressFull);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  return (
    <section id="location" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#123329] border border-[#29483A] text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-3">
          <MapPin className="w-3.5 h-3.5" />
          <span>{currentLang === 'en' ? 'Nanded Landmark' : 'नांदेडचे मुख्य ठिकाण'}</span>
        </div>
        <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-[#F7F3E8] tracking-tight mb-4">
          {t.location.heading}
        </h2>
        <p className="text-base text-[#B9C6BE]">
          {t.location.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Confirmed Address & Travel Guidelines */}
        <div className="lg:col-span-6 flex flex-col justify-between bg-[#123329] border border-[#29483A] rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="space-y-6">
            {/* Address Block */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                  {t.location.addressLabel}
                </span>
                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1 text-[11px] text-[#B9C6BE] hover:text-[#F1D98A] transition-colors cursor-pointer"
                >
                  {copiedAddress ? <Check className="w-3 h-3 text-[#57C785]" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedAddress ? 'Copied' : 'Copy Address'}</span>
                </button>
              </div>
              <p className="font-playfair text-lg sm:text-xl font-bold text-[#F7F3E8] leading-snug">
                {currentLang === 'en' ? SHOP_INFO.addressFull : SHOP_INFO.addressMr}
              </p>
            </div>

            {/* Google Plus Code */}
            <div className="p-4 rounded-xl bg-[#0D2820] border border-[#29483A] flex items-center justify-between">
              <div>
                <span className="text-[11px] text-[#B9C6BE] uppercase tracking-wider block">
                  {t.location.plusCodeLabel}
                </span>
                <span className="font-mono text-base font-semibold text-[#F1D98A]">
                  {SHOP_INFO.plusCode}
                </span>
              </div>
              <button
                onClick={handleCopyPlusCode}
                className="px-3 py-1.5 rounded-lg bg-[#123329] hover:bg-[#1A4235] border border-[#29483A] text-xs font-medium text-[#F7F3E8] flex items-center gap-1.5 cursor-pointer"
              >
                {copiedPlusCode ? <Check className="w-3.5 h-3.5 text-[#57C785]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedPlusCode ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Transit Proximity Guide */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block mb-3">
                {t.location.transitLabel}
              </span>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-[#071C16] border border-[#29483A]">
                  <Train className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs text-[#F1D98A] block">
                      {currentLang === 'en' ? 'From Nanded Railway Station' : 'नांदेड रेल्वे स्थानकावरून'}
                    </strong>
                    <p className="text-xs text-[#B9C6BE] mt-0.5">
                      {t.location.railwayTip}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-[#071C16] border border-[#29483A]">
                  <Bus className="w-5 h-5 text-[#57C785] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs text-[#F1D98A] block">
                      {currentLang === 'en' ? 'From Nanded Bus Stand' : 'नांदेड बस स्टँडवरून'}
                    </strong>
                    <p className="text-xs text-[#B9C6BE] mt-0.5">
                      {t.location.busTip}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Phone Numbers */}
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block mb-2">
                {t.location.phoneLabel}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a
                  href={`tel:${SHOP_INFO.phonePrimary}`}
                  className="flex items-center gap-2 p-3 rounded-lg bg-[#071C16] border border-[#29483A] hover:border-[#D4AF37] text-xs font-bold text-[#F7F3E8] hover:text-[#F1D98A] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#57C785]" />
                  <span>{SHOP_INFO.phonePrimary}</span>
                </a>

                <a
                  href={`tel:${SHOP_INFO.phoneSecondary}`}
                  className="flex items-center gap-2 p-3 rounded-lg bg-[#071C16] border border-[#29483A] hover:border-[#D4AF37] text-xs font-bold text-[#F7F3E8] hover:text-[#F1D98A] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <span>{SHOP_INFO.phoneSecondary}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Directions Primary Button */}
          <div className="mt-8 pt-6 border-t border-[#29483A]">
            <a
              href={SHOP_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-[#D4AF37] hover:bg-[#F1D98A] text-[#071C16] font-bold text-sm tracking-wider uppercase transition-all shadow-[0_4px_20px_rgba(212,175,55,0.35)] hover:-translate-y-0.5"
            >
              <Navigation className="w-4 h-4" />
              <span>{t.location.getDirectionsBtn}</span>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Map Preview Card */}
        <div className="lg:col-span-6 flex flex-col bg-[#123329] border border-[#29483A] rounded-2xl overflow-hidden shadow-xl min-h-[380px]">
          {/* Top Bar */}
          <div className="px-5 py-3.5 bg-[#0D2820] border-b border-[#29483A] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#57C785] animate-pulse"></span>
              <span className="text-xs font-medium text-[#F7F3E8]">
                Nanded Landmark Location Map
              </span>
            </div>
            <a
              href={SHOP_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] text-[#F1D98A] hover:underline"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Real Map Iframe (OpenStreetMap embed focused on Nanded Railway Station / Bus Stand area) */}
          <div className="relative flex-1 w-full min-h-[320px] bg-[#071C16]">
            <iframe
              title="Yash Pan Shop Location in Nanded"
              width="100%"
              height="100%"
              style={{ minHeight: '340px', border: 0 }}
              loading="lazy"
              src="https://www.openstreetmap.org/export/embed.html?bbox=77.3050%2C19.1480%2C77.3300%2C19.1650&amp;layer=mapnik&amp;marker=19.1568%2C77.3175"
              className="filter contrast-105 brightness-95"
            ></iframe>

            {/* Custom Overlay Pin Box */}
            <div className="absolute bottom-4 left-4 right-4 bg-[#071C16]/95 backdrop-blur-md border border-[#D4AF37]/60 rounded-xl p-3.5 shadow-2xl flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="font-playfair text-sm font-bold text-[#F1D98A] truncate">
                  Yash Pan Shop (यश पान शॉप)
                </p>
                <p className="text-[11px] text-[#B9C6BE] truncate">
                  Shop No. 1, Bus Stand Road, Nanded 431601
                </p>
              </div>
              <a
                href={SHOP_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 px-3 py-1.5 rounded-lg bg-[#D4AF37] text-[#071C16] text-xs font-bold uppercase tracking-wider hover:bg-[#F1D98A] transition-colors"
              >
                Navigate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
