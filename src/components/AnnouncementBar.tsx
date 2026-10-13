import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Sparkles, Globe2, PhoneCall } from 'lucide-react';

interface AnnouncementBarProps {
  currentLang: Language;
  onToggleLang: () => void;
  onOpenOwnerChecklist: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({
  currentLang,
  onToggleLang,
  onOpenOwnerChecklist,
}) => {
  const t = translations[currentLang];

  return (
    <aside aria-label="Announcement" className="bg-gradient-to-r from-[#04100D] via-[#0D2820] to-[#04100D] border-b border-[#29483A] text-xs text-[#F7F3E8] py-1.5 px-3 sm:px-6 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        {/* Left / Center Message */}
        <div className="flex items-center gap-2 overflow-hidden truncate">
          <span className="flex h-2 w-2 relative flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
          </span>
          <p className="truncate text-[11px] sm:text-xs font-medium tracking-wide">
            <Sparkles className="inline-block w-3 h-3 text-[#D4AF37] mr-1.5 -mt-0.5" />
            <span className="text-[#F1D98A] font-medium">{t.announcement}</span>
          </p>
        </div>

        {/* Right actions: Language Switcher & Owner checklist button */}
        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
          <a
            href="tel:+918975959679"
            className="hidden md:flex items-center gap-1 text-[#F1D98A] hover:text-white transition-colors"
          >
            <PhoneCall className="w-3 h-3 text-[#D4AF37]" />
            <span className="font-mono text-[11px]">+91 89759 59679</span>
          </a>

          {/* Language Toggle Button */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#123329] hover:bg-[#1A4235] border border-[#29483A] text-[#F7F3E8] hover:text-[#F1D98A] transition-all text-[11px] font-medium cursor-pointer"
            title="Toggle between English and Marathi (मराठी)"
          >
            <Globe2 className="w-3 h-3 text-[#D4AF37]" />
            <span>{currentLang === 'en' ? 'मराठी' : 'English'}</span>
          </button>

          {/* Owner verification shortcut badge */}
          <button
            onClick={onOpenOwnerChecklist}
            className="hidden lg:inline-flex text-[10px] text-[#B9C6BE] hover:text-[#D4AF37] underline underline-offset-2 transition-colors cursor-pointer"
          >
            {currentLang === 'en' ? 'Shop Verification' : 'दुकान पडताळणी'}
          </button>
        </div>
      </div>
    </aside>
  );
};
