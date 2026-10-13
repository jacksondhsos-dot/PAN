import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { SHOP_INFO } from '../data/shopInfo';
import { Phone, MessageCircle, Send, CheckCircle2, MapPin } from 'lucide-react';

interface ContactSectionProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const [name, setName] = useState('');
  const [inquiryType, setInquiryType] = useState('menu');
  const [messageText, setMessageText] = useState('');
  const t = translations[currentLang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const typeLabel = inquiryType === 'party'
      ? 'Bulk / Event Paan Order'
      : inquiryType === 'timing'
      ? 'Shop Timings & Directions'
      : 'Paan Varieties & Pricing';

    const fullMessage = encodeURIComponent(
      `Hello Yash Pan Shop!\n\nName: ${name || 'Customer'}\nInquiry: ${typeLabel}\nDetails: ${messageText || 'I would like to inquire about your paan availability.'}`
    );

    window.open(`https://wa.me/${SHOP_INFO.whatsappPrimary}?text=${fullMessage}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#0D2820] border-t border-[#29483A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#123329] border border-[#29483A] text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-3">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>{currentLang === 'en' ? 'Direct Communication' : 'थेट संवाद'}</span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-[#F7F3E8] tracking-tight mb-4">
            {t.contact.heading}
          </h2>
          <p className="text-base text-[#B9C6BE]">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Call & WhatsApp Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Primary Phone Card */}
            <div className="p-6 rounded-2xl bg-[#123329] border border-[#29483A] hover:border-[#D4AF37]/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-[#071C16] border border-[#29483A] text-[#57C785]">
                  <Phone className="w-6 h-6 text-[#57C785]" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block">
                    {currentLang === 'en' ? 'Primary Phone Number' : 'मुख्य फोन नंबर'}
                  </span>
                  <a
                    href={`tel:${SHOP_INFO.phonePrimary}`}
                    className="font-playfair text-xl font-bold text-[#F7F3E8] hover:text-[#F1D98A] transition-colors"
                  >
                    {SHOP_INFO.phonePrimary}
                  </a>
                  <p className="text-xs text-[#B9C6BE] mt-0.5">
                    {currentLang === 'en' ? 'Tap to call directly' : 'थेट कॉल करण्यासाठी टॅप करा'}
                  </p>
                </div>
              </div>
            </div>

            {/* Alternate Phone Card */}
            <div className="p-6 rounded-2xl bg-[#123329] border border-[#29483A] hover:border-[#D4AF37]/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-[#071C16] border border-[#29483A] text-[#D4AF37]">
                  <Phone className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block">
                    {currentLang === 'en' ? 'Secondary Helpline' : 'पर्यायी फोन नंबर'}
                  </span>
                  <a
                    href={`tel:${SHOP_INFO.phoneSecondary}`}
                    className="font-playfair text-xl font-bold text-[#F7F3E8] hover:text-[#F1D98A] transition-colors"
                  >
                    {SHOP_INFO.phoneSecondary}
                  </a>
                  <p className="text-xs text-[#B9C6BE] mt-0.5">
                    {currentLang === 'en' ? 'Alternate contact number' : 'पर्यायी संपर्क क्रमांक'}
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-[#123329] border border-[#29483A] hover:border-[#25D366]/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-[#071C16] border border-[#29483A] text-[#25D366]">
                  <MessageCircle className="w-6 h-6 text-[#25D366]" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#25D366] block">
                    WhatsApp Chat
                  </span>
                  <p className="font-playfair text-lg font-bold text-[#F7F3E8]">
                    +91 89759 59679
                  </p>
                  <p className="text-xs text-[#B9C6BE] mt-0.5">
                    {currentLang === 'en' ? 'Instant inquiry & photo verification' : 'त्वरित विचारणा व माहिती'}
                  </p>
                </div>
              </div>
            </div>

            {/* Location Reminder */}
            <div className="p-4 rounded-xl bg-[#071C16] border border-[#29483A] flex items-center gap-3">
              <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
              <p className="text-xs text-[#B9C6BE]">
                {SHOP_INFO.addressShort}
              </p>
            </div>
          </div>

          {/* Right Column: WhatsApp Inquiry Form */}
          <div className="lg:col-span-7 bg-[#123329] border border-[#29483A] rounded-2xl p-6 sm:p-8 shadow-xl">
            <h3 className="font-playfair text-2xl font-bold text-[#F7F3E8] mb-2">
              {currentLang === 'en' ? 'Quick WhatsApp Inquiry' : 'त्वरित व्हॉट्सअ‍ॅप विचारणा'}
            </h3>
            <p className="text-xs sm:text-sm text-[#B9C6BE] mb-6">
              {currentLang === 'en'
                ? 'Fill this quick note to compose your request directly in WhatsApp.'
                : 'खालील माहिती भरा आणि थेट व्हॉट्सअ‍ॅपवर पाठवा.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#F1D98A] mb-1.5">
                  {t.contact.formName}
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={currentLang === 'en' ? 'Your name' : 'आपले नाव'}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#071C16] border border-[#29483A] text-sm text-[#F7F3E8] focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#F1D98A] mb-1.5">
                  {currentLang === 'en' ? 'Inquiry Category' : 'विचारणेचा प्रकार'}
                </label>
                <select
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#071C16] border border-[#29483A] text-sm text-[#F7F3E8] focus:outline-none focus:border-[#D4AF37]"
                >
                  <option value="menu">Paan Varieties & Current Prices (पानांचे प्रकार व दर)</option>
                  <option value="party">Party / Event Bulk Orders (कार्यक्रम किंवा मोठ्या ऑर्डर्स)</option>
                  <option value="timing">Shop Timings & Directions (वेळापत्रक व पत्ता)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#F1D98A] mb-1.5">
                  {t.contact.formQuery}
                </label>
                <textarea
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  rows={3}
                  placeholder={t.contact.formPlaceholder}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#071C16] border border-[#29483A] text-sm text-[#F7F3E8] placeholder-[#B9C6BE]/50 focus:outline-none focus:border-[#D4AF37] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-[#071C16] font-bold text-sm tracking-wider uppercase transition-all shadow-[0_4px_15px_rgba(37,211,102,0.3)] cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t.contact.sendWhatsApp}</span>
              </button>
            </form>

            <div className="mt-5 pt-4 border-t border-[#29483A] flex items-center justify-between text-xs text-[#B9C6BE]">
              <span>{t.contact.directCall}</span>
              <a
                href={`tel:${SHOP_INFO.phonePrimary}`}
                className="font-mono font-bold text-[#F1D98A] hover:underline"
              >
                {SHOP_INFO.phonePrimary}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
