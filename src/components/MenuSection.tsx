import React, { useState } from 'react';
import { MenuItem, MenuCategory, Language } from '../types';
import { MENU_ITEMS } from '../data/menuData';
import { translations } from '../data/translations';
import { SHOP_INFO } from '../data/shopInfo';
import { MessageCircle, CheckCircle, Info, Sparkles, X, Phone } from 'lucide-react';

interface MenuSectionProps {
  currentLang: Language;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ currentLang }) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const t = translations[currentLang];

  const categories: { key: MenuCategory; label: string }[] = [
    { key: 'all', label: t.menu.categories.all },
    { key: 'meetha', label: t.menu.categories.meetha },
    { key: 'sada', label: t.menu.categories.sada },
    { key: 'chocolate', label: t.menu.categories.chocolate },
    { key: 'special', label: t.menu.categories.special },
    { key: 'calcutta', label: t.menu.categories.calcutta },
  ];

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  const generateWhatsAppUrl = (item: MenuItem) => {
    const itemName = currentLang === 'en' ? item.nameEn : `${item.nameMr} (${item.nameEn})`;
    const text = encodeURIComponent(
      `Hello Yash Pan Shop! I would like to inquire about "${itemName}" availability and current price.`
    );
    return `https://wa.me/${SHOP_INFO.whatsappPrimary}?text=${text}`;
  };

  return (
    <section id="menu" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#123329] border border-[#29483A] text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{currentLang === 'en' ? 'Freshly Prepared' : 'ताजे व रुचकर'}</span>
        </div>
        <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-[#F7F3E8] tracking-tight mb-4">
          {t.menu.heading}
        </h2>
        <p className="text-base sm:text-lg text-[#F1D98A] font-medium mb-4">
          {t.menu.subtitle}
        </p>

        {/* Transparent Sample Pricing Notice */}
        <div className="flex items-start gap-3 p-3.5 rounded-lg bg-[#0D2820] border border-[#29483A] text-left text-xs sm:text-sm text-[#B9C6BE]">
          <Info className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-[#F1D98A] font-semibold">
              {currentLang === 'en' ? 'Authenticity Notice: ' : 'पारदर्शकता नोंद: '}
            </strong>
            {t.menu.disclaimer}
          </p>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap transition-all cursor-pointer ${
              activeCategory === cat.key
                ? 'bg-[#D4AF37] text-[#071C16] font-bold shadow-[0_2px_15px_rgba(212,175,55,0.3)]'
                : 'bg-[#0D2820] hover:bg-[#123329] text-[#B9C6BE] hover:text-[#F7F3E8] border border-[#29483A]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-16 bg-[#0D2820] rounded-xl border border-[#29483A] p-8">
          <p className="text-[#B9C6BE] text-base mb-4">{t.menu.emptyCategory}</p>
          <a
            href={`https://wa.me/${SHOP_INFO.whatsappPrimary}?text=${encodeURIComponent('Hello Yash Pan Shop! I want to ask about special paan preparations.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#25D366] text-[#071C16] font-bold text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{t.menu.askWhatsApp}</span>
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col bg-[#123329] border border-[#29483A] hover:border-[#D4AF37]/60 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)]"
            >
              {/* Image Container with Badges */}
              <div
                className="relative aspect-4/3 w-full overflow-hidden bg-[#071C16] cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <img
                  src={item.image}
                  alt={item.nameEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123329] via-transparent to-black/20 pointer-events-none"></div>

                {/* Status Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#071C16]/90 backdrop-blur-sm border border-[#57C785]/50 text-[#57C785] text-[11px] font-semibold">
                    <CheckCircle className="w-3 h-3" />
                    <span>{t.menu.available}</span>
                  </span>
                  {item.isPopular && (
                    <span className="px-2.5 py-1 rounded-full bg-[#D4AF37]/90 text-[#071C16] text-[11px] font-bold tracking-wider uppercase">
                      Popular
                    </span>
                  )}
                </div>

                {/* Sample Price Notice Badge */}
                <div className="absolute bottom-3 right-3">
                  <span className="inline-block px-2.5 py-1 rounded bg-[#071C16]/85 border border-[#29483A] text-[10px] text-[#B9C6BE]">
                    {t.menu.sampleTag}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Title & Marathi Title */}
                  <div className="mb-2">
                    <h3
                      onClick={() => setSelectedItem(item)}
                      className="font-playfair text-xl font-bold text-[#F7F3E8] group-hover:text-[#F1D98A] transition-colors cursor-pointer"
                    >
                      {item.nameEn}
                    </h3>
                    <p className="font-marathi text-sm text-[#D4AF37] font-medium">
                      {item.nameMr}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#B9C6BE] line-clamp-2 leading-relaxed mb-4">
                    {currentLang === 'en' ? item.descriptionEn : item.descriptionMr}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {(currentLang === 'en' ? item.tagsEn : item.tagsMr).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2 py-0.5 rounded bg-[#071C16] text-[#B9C6BE] border border-[#29483A]/60"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price and WhatsApp Action Footer */}
                <div className="pt-4 border-t border-[#29483A] flex items-center justify-between gap-3">
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs text-[#B9C6BE]">Est.</span>
                      <span className="font-playfair text-xl font-extrabold text-[#F1D98A]">
                        ₹{item.estimatedPrice}
                      </span>
                    </div>
                    <span className="block text-[10px] text-[#B9C6BE] italic">
                      {currentLang === 'en' ? item.priceNote : item.priceNoteMr}
                    </span>
                  </div>

                  {/* Ask on WhatsApp CTA */}
                  <a
                    href={generateWhatsAppUrl(item)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-[#071C16] text-xs font-bold transition-all shadow-[0_2px_10px_rgba(37,211,102,0.25)] flex-shrink-0 cursor-pointer"
                    title="Inquire about this paan on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{t.menu.askWhatsApp}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Item Detail Modal */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative bg-[#0D2820] border border-[#D4AF37]/50 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl p-6 sm:p-7 text-[#F7F3E8]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#123329] text-[#B9C6BE] hover:text-white border border-[#29483A] cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-16/9 rounded-xl overflow-hidden mb-5 bg-[#071C16]">
              <img
                src={selectedItem.image}
                alt={selectedItem.nameEn}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mb-4">
              <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
                {selectedItem.category.toUpperCase()} PAAN
              </span>
              <h3 className="font-playfair text-2xl font-bold text-[#F7F3E8] mt-1">
                {selectedItem.nameEn}
              </h3>
              <p className="font-marathi text-lg text-[#F1D98A]">
                {selectedItem.nameMr}
              </p>
            </div>

            <p className="text-sm text-[#B9C6BE] leading-relaxed mb-5">
              {currentLang === 'en' ? selectedItem.descriptionEn : selectedItem.descriptionMr}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F1D98A] mb-2">
                {t.menu.ingredients}
              </h4>
              <div className="flex flex-wrap gap-2">
                {(currentLang === 'en' ? selectedItem.ingredientsEn : selectedItem.ingredientsMr).map(
                  (ing, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-[#123329] border border-[#29483A] text-xs text-[#F7F3E8]"
                    >
                      {ing}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[#071C16] border border-[#29483A] text-xs text-[#B9C6BE] mb-6">
              <p>
                <strong className="text-[#F1D98A]">Estimate: ₹{selectedItem.estimatedPrice}</strong> — {currentLang === 'en' ? selectedItem.priceNote : selectedItem.priceNoteMr}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={generateWhatsAppUrl(selectedItem)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#25D366] text-[#071C16] font-bold text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.menu.askWhatsApp}</span>
              </a>

              <a
                href={`tel:${SHOP_INFO.phonePrimary}`}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#123329] border border-[#D4AF37] text-[#F1D98A] font-bold text-sm"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Call to Order</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
