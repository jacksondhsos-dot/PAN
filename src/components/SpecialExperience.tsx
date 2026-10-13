import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Images } from '../assets/images';
import { MapPin, PhoneCall, Train, Bus, HeartHandshake } from 'lucide-react';

interface SpecialExperienceProps {
  currentLang: Language;
}

export const SpecialExperience: React.FC<SpecialExperienceProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section className="py-20 bg-[#0D2820] border-y border-[#29483A] relative overflow-hidden">
      {/* Decorative background leaf accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#123329] filter blur-3xl opacity-40 pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#123329] filter blur-3xl opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Golden Border Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#D4AF37]/30 to-[#F1D98A]/10 rounded-2xl blur-lg opacity-70"></div>

              <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl bg-[#071C16]">
                <img
                  src={Images.shahiPaan}
                  alt="Yash Pan Shop traditional presentation"
                  className="w-full h-80 sm:h-96 object-cover filter brightness-90 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071C16] via-transparent to-transparent"></div>

                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#071C16]/90 backdrop-blur-md border border-[#29483A]">
                  <p className="font-playfair text-base font-bold text-[#F1D98A]">
                    Yash Pan Shop • नांदेड
                  </p>
                  <p className="text-xs text-[#B9C6BE] mt-0.5">
                    Shop No. 1, Bus Stand Road, near Railway Station
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-[#123329] border border-[#29483A] text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-4">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>{t.experience.badge}</span>
            </div>

            {/* Heading */}
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-[#F7F3E8] tracking-tight mb-5 leading-tight">
              {t.experience.heading}
            </h2>

            {/* Core copy adhering strictly to business realities */}
            <p className="text-base sm:text-lg text-[#F1D98A] font-inter leading-relaxed mb-8">
              {t.experience.copy}
            </p>

            {/* 3 Proximity Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-[#123329]/70 border border-[#29483A] hover:border-[#D4AF37]/50 transition-all">
                <div className="p-2 rounded-lg bg-[#071C16] w-fit mb-3 text-[#D4AF37]">
                  <Train className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-semibold text-[#F7F3E8] mb-1">
                  {t.experience.feature1Title}
                </h3>
                <p className="text-xs text-[#B9C6BE] leading-relaxed">
                  {t.experience.feature1Desc}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#123329]/70 border border-[#29483A] hover:border-[#D4AF37]/50 transition-all">
                <div className="p-2 rounded-lg bg-[#071C16] w-fit mb-3 text-[#D4AF37]">
                  <Bus className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-semibold text-[#F7F3E8] mb-1">
                  {t.experience.feature2Title}
                </h3>
                <p className="text-xs text-[#B9C6BE] leading-relaxed">
                  {t.experience.feature2Desc}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#123329]/70 border border-[#29483A] hover:border-[#D4AF37]/50 transition-all">
                <div className="p-2 rounded-lg bg-[#071C16] w-fit mb-3 text-[#D4AF37]">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-semibold text-[#F7F3E8] mb-1">
                  {t.experience.feature3Title}
                </h3>
                <p className="text-xs text-[#B9C6BE] leading-relaxed">
                  {t.experience.feature3Desc}
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#location"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#D4AF37] hover:bg-[#F1D98A] text-[#071C16] font-bold text-xs uppercase tracking-wider transition-all shadow-[0_4px_15px_rgba(212,175,55,0.3)] hover:-translate-y-0.5"
              >
                <MapPin className="w-4 h-4" />
                <span>{t.experience.findShop}</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-transparent hover:bg-[#123329] border border-[#29483A] hover:border-[#D4AF37] text-[#F7F3E8] font-semibold text-xs uppercase tracking-wider transition-all"
              >
                <PhoneCall className="w-4 h-4 text-[#D4AF37]" />
                <span>{t.experience.contactUs}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
