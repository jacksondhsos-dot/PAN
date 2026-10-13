import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Menu, X, MessageCircle, Phone, MapPin } from 'lucide-react';

interface NavbarProps {
  currentLang: Language;
  onToggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentLang, onToggleLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.menu, href: '#menu' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.reviews, href: '#reviews' },
    { label: t.nav.location, href: '#location' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const whatsappMessage = encodeURIComponent(
    currentLang === 'en'
      ? 'Hello Yash Pan Shop! I would like to inquire about your paan varieties and shop timings.'
      : 'नमस्कार यश पान शॉप! मला उपलब्ध पानांचे प्रकार आणि दुकानाच्या वेळेबद्दल विचारणा करायची आहे.'
  );

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#071C16]/95 backdrop-blur-md shadow-[0_4px_25px_rgba(0,0,0,0.6)] border-b border-[#29483A]'
          : 'bg-[#071C16]/80 backdrop-blur-sm border-b border-[#29483A]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded-lg p-1"
            aria-label="Yash Pan Shop Home"
          >
            <Logo variant="full" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-[#F7F3E8] hover:text-[#F1D98A] hover:bg-[#0D2820] transition-colors tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons (Desktop) */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Language Switch */}
            <button
              onClick={onToggleLang}
              className="px-3 py-1.5 rounded-full bg-[#123329] border border-[#29483A] text-xs font-medium text-[#F1D98A] hover:bg-[#1A4235] hover:border-[#D4AF37] transition-all cursor-pointer"
              title="Change Language"
            >
              {currentLang === 'en' ? 'मराठी भाषा' : 'English'}
            </button>

            {/* Direct Call */}
            <a
              href="tel:+918975959679"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-transparent border border-[#D4AF37]/80 text-[#F1D98A] hover:bg-[#D4AF37]/10 transition-colors text-xs font-semibold uppercase tracking-wider"
              aria-label="Call Yash Pan Shop"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{t.nav.callNow}</span>
            </a>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/918975959679?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-[#071C16] font-semibold text-xs transition-all shadow-[0_2px_12px_rgba(37,211,102,0.3)] hover:scale-[1.02] cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.nav.whatsapp}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <a
              href="tel:+918975959679"
              className="p-2 rounded-lg bg-[#123329] text-[#F1D98A] border border-[#29483A]"
              aria-label="Call shop"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#123329] text-[#F7F3E8] hover:text-[#D4AF37] border border-[#29483A] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D2820] border-b border-[#29483A] px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-2 mb-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="px-4 py-3 rounded-lg text-base font-medium text-[#F7F3E8] hover:bg-[#123329] hover:text-[#F1D98A] transition-colors border border-transparent hover:border-[#29483A]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-[#29483A] flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#B9C6BE]">Language / भाषा:</span>
              <button
                onClick={onToggleLang}
                className="px-3 py-1 rounded-full bg-[#123329] border border-[#D4AF37] text-xs font-medium text-[#F1D98A]"
              >
                {currentLang === 'en' ? 'मराठीत पहा' : 'Switch to English'}
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-1">
              <a
                href="tel:+918975959679"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg border border-[#D4AF37] text-[#F1D98A] bg-[#123329] text-xs font-bold"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Call Shop</span>
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Yash+Pan+Shop%2C+Shop+No+1%2C+Bus+Stand+Road%2C+Nanded%2C+Maharashtra+431601"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#D4AF37] text-[#071C16] text-xs font-bold"
              >
                <MapPin className="w-4 h-4" />
                <span>Directions</span>
              </a>
            </div>

            <a
              href={`https://wa.me/918975959679?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#25D366] text-[#071C16] font-bold text-sm shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t.nav.whatsapp}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
