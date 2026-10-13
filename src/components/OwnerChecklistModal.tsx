import React, { useState } from 'react';
import { SHOP_INFO } from '../data/shopInfo';
import { Check, X, ShieldAlert, CheckCircle2, Phone, MapPin, ExternalLink, HelpCircle, FileCode } from 'lucide-react';

interface OwnerChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OwnerChecklistModal: React.FC<OwnerChecklistModalProps> = ({ isOpen, onClose }) => {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({
    phone: false,
    address: false,
    googleListing: false,
    prices: false,
    whatsapp: false,
  });

  if (!isOpen) return null;

  const toggleCheck = (key: string) => {
    setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const allCompleted = Object.values(checkedItems).every(Boolean);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-[#0D2820] border border-[#D4AF37] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 text-[#F7F3E8] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#123329] text-[#B9C6BE] hover:text-white border border-[#29483A] cursor-pointer"
          aria-label="Close checklist"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-[#071C16] border border-[#D4AF37] text-[#D4AF37]">
            <ShieldAlert className="w-6 h-6 text-[#D4AF37]" />
          </div>
          <div>
            <h2 className="font-playfair text-2xl font-bold text-[#F7F3E8]">
              Pre-Launch Verification Checklist
            </h2>
            <p className="text-xs text-[#B9C6BE]">
              Yash Pan Shop (यश पान शॉप) • Business Owner & Deployment Review
            </p>
          </div>
        </div>

        {/* Advisory Box */}
        <div className="p-4 rounded-xl bg-[#123329] border border-[#29483A] text-xs text-[#B9C6BE] mb-6 space-y-1.5">
          <strong className="text-[#F1D98A] block text-sm">
            Important Business Notice
          </strong>
          <p>
            Confirm that the existing phone number and address still belong to Yash Pan Shop before official public advertising.
            Do not claim that a Google Maps listing, rating, or ownership has been updated automatically until verified in Google Business Profile.
          </p>
        </div>

        {/* Interactive Checklist Items */}
        <div className="space-y-3 mb-8">
          {/* Item 1: Phone */}
          <div
            onClick={() => toggleCheck('phone')}
            className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
              checkedItems.phone
                ? 'bg-[#123329] border-[#57C785]'
                : 'bg-[#071C16] border-[#29483A] hover:border-[#D4AF37]/50'
            }`}
          >
            <div className={`mt-0.5 p-1 rounded ${checkedItems.phone ? 'bg-[#57C785] text-[#071C16]' : 'border border-[#B9C6BE]'}`}>
              <Check className="w-4 h-4" />
            </div>
            <div className="text-xs">
              <strong className="text-sm text-[#F7F3E8] block">
                1. Verify Phone Numbers
              </strong>
              <p className="text-[#B9C6BE] mt-0.5">
                Primary: <span className="text-[#F1D98A] font-mono">{SHOP_INFO.phonePrimary}</span> | Secondary: <span className="text-[#F1D98A] font-mono">{SHOP_INFO.phoneSecondary}</span>
              </p>
              <span className="text-[11px] text-[#B9C6BE]/70">
                Confirm incoming calls and OTP access on this SIM before placing on physical hoardings.
              </span>
            </div>
          </div>

          {/* Item 2: Address */}
          <div
            onClick={() => toggleCheck('address')}
            className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
              checkedItems.address
                ? 'bg-[#123329] border-[#57C785]'
                : 'bg-[#071C16] border-[#29483A] hover:border-[#D4AF37]/50'
            }`}
          >
            <div className={`mt-0.5 p-1 rounded ${checkedItems.address ? 'bg-[#57C785] text-[#071C16]' : 'border border-[#B9C6BE]'}`}>
              <Check className="w-4 h-4" />
            </div>
            <div className="text-xs">
              <strong className="text-sm text-[#F7F3E8] block">
                2. Verify Physical Address & Signboard
              </strong>
              <p className="text-[#B9C6BE] mt-0.5">
                {SHOP_INFO.addressFull}
              </p>
              <span className="text-[11px] text-[#B9C6BE]/70">
                Ensure physical shop board clearly displays "Yash Pan Shop (यश पान शॉप)".
              </span>
            </div>
          </div>

          {/* Item 3: Google Maps Listing */}
          <div
            onClick={() => toggleCheck('googleListing')}
            className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
              checkedItems.googleListing
                ? 'bg-[#123329] border-[#57C785]'
                : 'bg-[#071C16] border-[#29483A] hover:border-[#D4AF37]/50'
            }`}
          >
            <div className={`mt-0.5 p-1 rounded ${checkedItems.googleListing ? 'bg-[#57C785] text-[#071C16]' : 'border border-[#B9C6BE]'}`}>
              <Check className="w-4 h-4" />
            </div>
            <div className="text-xs">
              <strong className="text-sm text-[#F7F3E8] block">
                3. Claim Google Business Profile
              </strong>
              <p className="text-[#B9C6BE] mt-0.5">
                Plus Code: <span className="text-[#F1D98A] font-mono">{SHOP_INFO.plusCode}</span>
              </p>
              <span className="text-[11px] text-[#B9C6BE]/70">
                Claim the listing under "Yash Pan Shop" so you can reply to customer reviews and update real operating hours.
              </span>
            </div>
          </div>

          {/* Item 4: Prices */}
          <div
            onClick={() => toggleCheck('prices')}
            className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
              checkedItems.prices
                ? 'bg-[#123329] border-[#57C785]'
                : 'bg-[#071C16] border-[#29483A] hover:border-[#D4AF37]/50'
            }`}
          >
            <div className={`mt-0.5 p-1 rounded ${checkedItems.prices ? 'bg-[#57C785] text-[#071C16]' : 'border border-[#B9C6BE]'}`}>
              <Check className="w-4 h-4" />
            </div>
            <div className="text-xs">
              <strong className="text-sm text-[#F7F3E8] block">
                4. Review Menu Prices in src/data/menuData.ts
              </strong>
              <p className="text-[#B9C6BE] mt-0.5">
                All prices are currently clearly tagged as sample placeholders. Edit <code className="text-[#F1D98A]">src/data/menuData.ts</code> to update confirmed shop prices.
              </p>
            </div>
          </div>

          {/* Item 5: WhatsApp Inquiries */}
          <div
            onClick={() => toggleCheck('whatsapp')}
            className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
              checkedItems.whatsapp
                ? 'bg-[#123329] border-[#57C785]'
                : 'bg-[#071C16] border-[#29483A] hover:border-[#D4AF37]/50'
            }`}
          >
            <div className={`mt-0.5 p-1 rounded ${checkedItems.whatsapp ? 'bg-[#57C785] text-[#071C16]' : 'border border-[#B9C6BE]'}`}>
              <Check className="w-4 h-4" />
            </div>
            <div className="text-xs">
              <strong className="text-sm text-[#F7F3E8] block">
                5. Test WhatsApp Incoming Inquiries
              </strong>
              <p className="text-[#B9C6BE] mt-0.5">
                Ensure WhatsApp Business app is installed on phone <span className="font-mono text-[#F1D98A]">+91 89759 59679</span> to receive orders and inquiries.
              </p>
            </div>
          </div>
        </div>

        {/* Deployment Instructions Section */}
        <div className="p-4 rounded-xl bg-[#071C16] border border-[#29483A] mb-6">
          <div className="flex items-center gap-2 mb-2 text-[#D4AF37]">
            <FileCode className="w-4 h-4" />
            <h3 className="text-xs font-bold uppercase tracking-wider">
              Deployment Instructions
            </h3>
          </div>
          <ol className="list-decimal list-inside text-xs text-[#B9C6BE] space-y-1.5 leading-relaxed">
            <li>Run <code className="text-[#F1D98A]">npm run build</code> to produce static assets in <code className="text-[#F1D98A]">/dist</code>.</li>
            <li>Deploy via Netlify, Vercel, Firebase Hosting, Cloud Run, or GitHub Pages.</li>
            <li>Map a custom domain like <code className="text-[#F1D98A]">yashpanshop.in</code> or <code className="text-[#F1D98A]">yashpaan.com</code>.</li>
            <li>Update Google Business Profile with this verified live website URL.</li>
          </ol>
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg bg-[#123329] border border-[#29483A] text-xs font-semibold text-[#F7F3E8] hover:bg-[#1A4235] cursor-pointer"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
