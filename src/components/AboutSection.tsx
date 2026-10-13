import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { SHOP_INFO } from '../data/shopInfo';
import { ShieldCheck, MapPin, Store, MessageSquareQuote } from 'lucide-react';

interface AboutSectionProps {
  currentLang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section id="about" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#123329] border border-[#29483A] rounded-2xl p-6 sm:p-10 lg:p-14 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Text Content */}
          <div className="lg:col-span-8">
            {/* Header */}
            <div className="mb-6">
              <span className="font-marathi text-sm text-[#D4AF37] font-semibold tracking-wide block mb-1">
                {t.about.subheading}
              </span>
              <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-[#F7F3E8] tracking-tight">
                {t.about.heading}
              </h2>
            </div>

            {/* Paragraphs - Honest and Authentic */}
            <div className="space-y-4 text-sm sm:text-base text-[#B9C6BE] font-inter leading-relaxed">
              <p>{t.about.description1}</p>
              <p>{t.about.description2}</p>
            </div>

            {/* Verification and Honesty Badge */}
            <div className="mt-8 p-4 rounded-xl bg-[#071C16] border border-[#29483A] flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#57C785] flex-shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-[#B9C6BE]">
                <strong className="text-[#F1D98A] block mb-0.5">
                  {currentLang === 'en' ? 'Verified Business Transparency' : 'अधिकृत व्यवसाय पारदर्शकता'}
                </strong>
                <p>{t.about.transparencyNote}</p>
              </div>
            </div>
          </div>

          {/* Side Info Card */}
          <div className="lg:col-span-4">
            <div className="p-6 rounded-xl bg-[#0D2820] border border-[#29483A] space-y-5">
              <div className="flex items-center gap-3 pb-4 border-b border-[#29483A]">
                <div className="p-2.5 rounded-lg bg-[#071C16] text-[#D4AF37] border border-[#29483A]">
                  <Store className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-playfair text-lg font-bold text-[#F7F3E8]">
                    Yash Pan Shop
                  </h3>
                  <p className="font-marathi text-xs text-[#D4AF37]">
                    यश पान शॉप
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div>
                  <span className="text-[#B9C6BE] block text-[11px] uppercase tracking-wider">
                    {currentLang === 'en' ? 'Location' : 'स्थान'}
                  </span>
                  <p className="text-[#F7F3E8] font-medium mt-0.5 flex items-start gap-1.5">
                    <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span>Shop No. 1, Bus Stand Road, near Railway Station, Nanded</span>
                  </p>
                </div>

                <div>
                  <span className="text-[#B9C6BE] block text-[11px] uppercase tracking-wider">
                    {currentLang === 'en' ? 'Plus Code' : 'गुगल प्लस कोड'}
                  </span>
                  <p className="font-mono text-[#F1D98A] mt-0.5">
                    {SHOP_INFO.plusCode}
                  </p>
                </div>

                <div>
                  <span className="text-[#B9C6BE] block text-[11px] uppercase tracking-wider">
                    {currentLang === 'en' ? 'Direct Contact' : 'थेट संपर्क'}
                  </span>
                  <a
                    href={`tel:${SHOP_INFO.phonePrimary}`}
                    className="text-[#57C785] font-semibold mt-0.5 block hover:underline"
                  >
                    {SHOP_INFO.phonePrimary}
                  </a>
                </div>
              </div>

              <a
                href={`https://wa.me/${SHOP_INFO.whatsappPrimary}?text=${encodeURIComponent('Hello Yash Pan Shop! I would like to inquire about your shop.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#123329] hover:bg-[#1A4235] border border-[#D4AF37] text-[#F1D98A] text-xs font-bold transition-all cursor-pointer"
              >
                <MessageSquareQuote className="w-4 h-4 text-[#D4AF37]" />
                <span>{currentLang === 'en' ? 'Direct Inquiry' : 'थेट विचारणा'}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
