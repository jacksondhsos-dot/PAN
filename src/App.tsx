/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language } from './types';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickInfoStrip } from './components/QuickInfoStrip';
import { MenuSection } from './components/MenuSection';
import { SpecialExperience } from './components/SpecialExperience';
import { AboutSection } from './components/AboutSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { OwnerChecklistModal } from './components/OwnerChecklistModal';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [isOwnerChecklistOpen, setIsOwnerChecklistOpen] = useState(false);

  const toggleLanguage = () => {
    setCurrentLang((prev) => (prev === 'en' ? 'mr' : 'en'));
  };

  return (
    <div className={`min-h-screen bg-[#071C16] text-[#F7F3E8] flex flex-col ${currentLang === 'mr' ? 'font-marathi' : 'font-inter'}`}>
      {/* SECTION A: Announcement Bar */}
      <AnnouncementBar
        currentLang={currentLang}
        onToggleLang={toggleLanguage}
        onOpenOwnerChecklist={() => setIsOwnerChecklistOpen(true)}
      />

      {/* SECTION B: Sticky Navigation Bar */}
      <Navbar
        currentLang={currentLang}
        onToggleLang={toggleLanguage}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* SECTION C: Hero Section */}
        <Hero currentLang={currentLang} />

        {/* SECTION D: Quick Information Strip */}
        <QuickInfoStrip currentLang={currentLang} />

        {/* SECTION E: Our Paan Menu */}
        <MenuSection currentLang={currentLang} />

        {/* SECTION F: Special Experience - Your Local Paan Destination */}
        <SpecialExperience currentLang={currentLang} />

        {/* SECTION G: About Us */}
        <AboutSection currentLang={currentLang} />

        {/* SECTION H: Customer Reviews */}
        <ReviewsSection currentLang={currentLang} />

        {/* SECTION I: Location & Directions */}
        <LocationSection currentLang={currentLang} />

        {/* Contact & Inquiries */}
        <ContactSection currentLang={currentLang} />
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onOpenOwnerChecklist={() => setIsOwnerChecklistOpen(true)}
      />

      {/* Mobile Floating Action Bar */}
      <FloatingActions currentLang={currentLang} />

      {/* Owner Pre-Launch Verification Modal */}
      <OwnerChecklistModal
        isOpen={isOwnerChecklistOpen}
        onClose={() => setIsOwnerChecklistOpen(false)}
      />
    </div>
  );
}
