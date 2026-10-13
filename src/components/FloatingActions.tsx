import React from 'react';
import { Language } from '../types';
import { SHOP_INFO } from '../data/shopInfo';
import { Phone, MessageCircle, Navigation } from 'lucide-react';

interface FloatingActionsProps {
  currentLang: Language;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ currentLang }) => {
  const whatsappMsg = encodeURIComponent(
    currentLang === 'en'
      ? 'Hello Yash Pan Shop! I am near the railway/bus stand and want to inquire about paan.'
      : 'नमस्कार यश पान शॉप! मी रेल्वे/बस स्टँड जवळ आहे आणि मला पानाबद्दल विचारणा करायची आहे.'
  );

  return (
    <aside aria-label="Quick mobile contact actions" className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-[#071C16]/95 backdrop-blur-md border-t border-[#29483A] p-2.5 shadow-[0_-4px_25px_rgba(0,0,0,0.6)]">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href={`tel:${SHOP_INFO.phonePrimary}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#123329] border border-[#29483A] text-[#F7F3E8] active:bg-[#1A4235]"
        >
          <Phone className="w-4 h-4 text-[#57C785] mb-1" />
          <span className="text-[11px] font-bold uppercase tracking-wider">
            {currentLang === 'en' ? 'Call' : 'कॉल'}
          </span>
        </a>

        {/* Directions Button */}
        <a
          href={SHOP_INFO.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#D4AF37] text-[#071C16] active:bg-[#F1D98A]"
        >
          <Navigation className="w-4 h-4 mb-1" />
          <span className="text-[11px] font-bold uppercase tracking-wider">
            {currentLang === 'en' ? 'Navigate' : 'दिशानिर्देश'}
          </span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${SHOP_INFO.whatsappPrimary}?text=${whatsappMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#25D366] text-[#071C16] active:bg-[#20ba5a]"
        >
          <MessageCircle className="w-4 h-4 mb-1" />
          <span className="text-[11px] font-bold uppercase tracking-wider">
            WhatsApp
          </span>
        </a>
      </div>
    </aside>
  );
};
