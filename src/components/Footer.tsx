import React from 'react';
import { Logo } from './Logo';
import { Language } from '../types';
import { translations } from '../data/translations';
import { SHOP_INFO } from '../data/shopInfo';
import { Phone, MessageCircle, MapPin, CheckSquare, Heart } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
  onOpenOwnerChecklist: () => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onOpenOwnerChecklist }) => {
  const t = translations[currentLang];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#04100D] border-t border-[#29483A] text-[#B9C6BE] pt-16 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#29483A]">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="full" />
            <p className="font-playfair italic text-sm text-[#F1D98A]">
              "{t.hero.headline}"
            </p>
            <p className="text-xs sm:text-sm text-[#B9C6BE] leading-relaxed max-w-sm">
              {currentLang === 'en'
                ? 'Your local destination for classic and fusion paan varieties conveniently located along Bus Stand Road near Nanded Railway Station.'
                : 'नांदेड रेल्वे स्थानक आणि बस स्टँड जवळ अस्सल गोड व पारंपारिक पानांचे विश्वसनीय ठिकाण.'}
            </p>

            {/* Quick Contact Links */}
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={`tel:${SHOP_INFO.phonePrimary}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#123329] text-[#F1D98A] text-xs font-semibold hover:border-[#D4AF37] border border-[#29483A]"
              >
                <Phone className="w-3.5 h-3.5 text-[#57C785]" />
                <span>{SHOP_INFO.phonePrimary}</span>
              </a>

              <a
                href={`https://wa.me/${SHOP_INFO.whatsappPrimary}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#123329] text-[#25D366] text-xs font-semibold hover:border-[#25D366] border border-[#29483A]"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
              {currentLang === 'en' ? 'Quick Navigation' : 'जलद दुवे'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-[#F1D98A] transition-colors">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#F1D98A] transition-colors">
                  {t.nav.menu}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#F1D98A] transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#F1D98A] transition-colors">
                  {t.nav.reviews}
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#F1D98A] transition-colors">
                  {t.nav.location}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F1D98A] transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Address & Plus Code */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
              {currentLang === 'en' ? 'Storefront Location' : 'दुकान पत्ता'}
            </h4>
            <div className="text-xs leading-relaxed space-y-2">
              <p className="flex items-start gap-2 text-[#F7F3E8]">
                <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span>{SHOP_INFO.addressFull}</span>
              </p>
              <p className="text-[11px] text-[#B9C6BE]">
                Plus Code: <span className="font-mono text-[#F1D98A]">{SHOP_INFO.plusCode}</span>
              </p>
              <p className="text-[11px] text-[#B9C6BE]">
                Alternate Phone: <span className="font-mono text-[#F7F3E8]">{SHOP_INFO.phoneSecondary}</span>
              </p>
            </div>

            {/* Launch Checklist Button */}
            <div className="pt-2">
              <button
                onClick={onOpenOwnerChecklist}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#071C16] border border-[#D4AF37]/50 text-[#F1D98A] hover:bg-[#123329] text-xs font-medium transition-all cursor-pointer"
              >
                <CheckSquare className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{t.footer.ownerChecklist}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B9C6BE]">
          <p>
            © {currentYear} Yash Pan Shop (यश पान शॉप). {t.footer.rights}
          </p>
          <p className="text-[11px] text-[#B9C6BE]/80 text-center sm:text-right">
            {t.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
};
