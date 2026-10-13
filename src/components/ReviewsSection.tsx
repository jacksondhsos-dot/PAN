import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { SHOP_INFO } from '../data/shopInfo';
import { Star, MessageCircle, ExternalLink, ShieldCheck, Heart, Send } from 'lucide-react';

interface ReviewsSectionProps {
  currentLang: Language;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ currentLang }) => {
  const [feedbackText, setFeedbackText] = useState('');
  const [feedbackSent, setFeedbackSent] = useState(false);
  const t = translations[currentLang];

  const handleSendFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackText.trim()) return;

    const message = encodeURIComponent(
      `Hello Yash Pan Shop! Here is my feedback/review: "${feedbackText.trim()}"`
    );
    window.open(`https://wa.me/${SHOP_INFO.whatsappPrimary}?text=${message}`, '_blank');
    setFeedbackSent(true);
  };

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#0D2820]/60 border-t border-[#29483A]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#123329] border border-[#29483A] text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-3">
            <Star className="w-3.5 h-3.5 fill-[#D4AF37]" />
            <span>{currentLang === 'en' ? 'Community Feedback' : 'ग्राहकांचे मत'}</span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-[#F7F3E8] tracking-tight mb-4">
            {t.reviews.heading}
          </h2>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-[#B9C6BE]">
            {t.reviews.disclaimer}
          </p>
        </div>

        {/* Authentic Customer Invitation Card */}
        <div className="bg-[#123329] border border-[#D4AF37]/40 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-40 h-40 bg-[#D4AF37]/5 rounded-full pointer-events-none"></div>

          {/* Star Icon cluster */}
          <div className="flex items-center justify-center gap-1 text-[#D4AF37] mb-5">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-5 h-5 fill-[#D4AF37]" />
            ))}
          </div>

          <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-[#F7F3E8] mb-3">
            "{t.reviews.invitationTitle}"
          </h3>

          <p className="max-w-xl mx-auto text-sm sm:text-base text-[#B9C6BE] mb-8 leading-relaxed">
            {t.reviews.invitationDesc}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            {/* Google Profile Search Link */}
            <a
              href={SHOP_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#D4AF37] hover:bg-[#F1D98A] text-[#071C16] font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              <span>{t.reviews.googleButton}</span>
            </a>

            {/* Direct WhatsApp Feedback Button */}
            <a
              href={`https://wa.me/${SHOP_INFO.whatsappPrimary}?text=${encodeURIComponent('Hello Yash Pan Shop! I would like to share my feedback on your paan and service.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-[#071C16] font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.reviews.shareFeedbackBtn}</span>
            </a>
          </div>

          {/* Interactive Direct Review Box */}
          <div className="max-w-lg mx-auto pt-6 border-t border-[#29483A]">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F1D98A] mb-3">
              {currentLang === 'en' ? 'Quick Message to the Shop Owner' : 'दुकानदाराला थेट संदेश पाठवा'}
            </h4>

            {feedbackSent ? (
              <div className="p-4 rounded-lg bg-[#071C16] border border-[#57C785] text-[#57C785] text-xs">
                {currentLang === 'en'
                  ? 'Thank you for your feedback! Opening WhatsApp message to Yash Pan Shop...'
                  : 'आपल्या अभिप्रायाबद्दल धन्यवाद! यश पान शॉपला व्हॉट्सअ‍ॅप संदेश पाठवला जात आहे...'}
              </div>
            ) : (
              <form onSubmit={handleSendFeedback} className="space-y-3">
                <textarea
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  placeholder={
                    currentLang === 'en'
                      ? 'Tell us about your experience (e.g. Which paan did you enjoy? Freshness, service...)'
                      : 'आपला अनुभव सांगा (उदा. तुम्हाला कोणते पान आवडले? ताजेपणा, सेवा...)'
                  }
                  rows={3}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#071C16] border border-[#29483A] text-sm text-[#F7F3E8] placeholder-[#B9C6BE]/60 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                />
                <button
                  type="submit"
                  disabled={!feedbackText.trim()}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#123329] hover:bg-[#1A4235] border border-[#D4AF37] text-[#F1D98A] font-semibold text-xs tracking-wide uppercase transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{currentLang === 'en' ? 'Send Feedback on WhatsApp' : 'व्हॉट्सअ‍ॅपवर अभिप्राय पाठवा'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Policy Compliance Note */}
          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-[#B9C6BE]">
            <ShieldCheck className="w-4 h-4 text-[#57C785]" />
            <span>
              {currentLang === 'en'
                ? 'Committed to 100% genuine reviews. No fabricated ratings.'
                : '१००% अस्सल व प्रामाणिक अभिप्रायाची ग्वाही.'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
