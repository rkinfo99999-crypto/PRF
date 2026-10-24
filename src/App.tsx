import React, { useState } from 'react';
import { Language, PortalSection, GeoTaggedTree, TreeComplaint, SaplingRequest } from './types';
import { INITIAL_GEO_TREES, INITIAL_COMPLAINTS } from './data/portalData';
import { CaptchaModal } from './components/CaptchaModal';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PortalGrid } from './components/PortalGrid';
import { Footer } from './components/Footer';
import { SaplingRequestModal } from './components/PortalModules/SaplingRequestModal';
import { GeoTaggingModal } from './components/PortalModules/GeoTaggingModal';
import { TreeComplaintModal } from './components/PortalModules/TreeComplaintModal';
import { NurseryLocator } from './components/PortalModules/NurseryLocator';
import { CertificateGenerator } from './components/PortalModules/CertificateGenerator';
import { VolunteerModal } from './components/VolunteerModal';

export default function App() {
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [language, setLanguage] = useState<Language>('hi');
  const [currentSection, setCurrentSection] = useState<PortalSection>('home');
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);

  // Dynamic application state
  const [geoTrees, setGeoTrees] = useState<GeoTaggedTree[]>(INITIAL_GEO_TREES);
  const [complaints, setComplaints] = useState<TreeComplaint[]>(INITIAL_COMPLAINTS);
  const [saplingRequests, setSaplingRequests] = useState<SaplingRequest[]>([]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'hi' ? 'en' : 'hi'));
  };

  const handleAddGeoTree = (newTree: GeoTaggedTree) => {
    setGeoTrees(prev => [newTree, ...prev]);
  };

  const handleAddComplaint = (newComp: TreeComplaint) => {
    setComplaints(prev => [newComp, ...prev]);
  };

  const handleAddSaplingRequest = (newReq: SaplingRequest) => {
    setSaplingRequests(prev => [newReq, ...prev]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfdfc] text-[#143522]">
      {/* 1. Security Captcha Gate: Shows initially until verified, matching user template */}
      {!isCaptchaVerified && (
        <CaptchaModal
          language={language}
          onVerified={() => setIsCaptchaVerified(true)}
        />
      )}

      {/* 2. Top Header Navigation Bar */}
      <Header
        currentSection={currentSection}
        onSelectSection={setCurrentSection}
        language={language}
        onToggleLanguage={toggleLanguage}
        onOpenVolunteerModal={() => setIsVolunteerModalOpen(true)}
        onLockCaptcha={() => setIsCaptchaVerified(false)}
      />

      {/* 3. Main Content Container (max-w-1200px as per user template) */}
      <main className="flex-1 max-w-[1200px] w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-10">
        {currentSection === 'home' && (
          <div className="space-y-10 animate-fadeIn">
            {/* Hero Banner & Core Stats */}
            <Hero
              language={language}
              onNavigate={setCurrentSection}
              onOpenVolunteer={() => setIsVolunteerModalOpen(true)}
            />

            {/* Main Portal Grid Services */}
            <PortalGrid
              language={language}
              onNavigate={setCurrentSection}
              onOpenVolunteer={() => setIsVolunteerModalOpen(true)}
            />
          </div>
        )}

        {currentSection === 'request' && (
          <div className="animate-fadeIn">
            <SaplingRequestModal
              language={language}
              onBack={() => setCurrentSection('home')}
              onSubmitRequest={handleAddSaplingRequest}
            />
          </div>
        )}

        {currentSection === 'geotag' && (
          <div className="animate-fadeIn">
            <GeoTaggingModal
              language={language}
              onBack={() => setCurrentSection('home')}
              geoTrees={geoTrees}
              onAddGeoTree={handleAddGeoTree}
            />
          </div>
        )}

        {currentSection === 'complaint' && (
          <div className="animate-fadeIn">
            <TreeComplaintModal
              language={language}
              onBack={() => setCurrentSection('home')}
              complaints={complaints}
              onAddComplaint={handleAddComplaint}
            />
          </div>
        )}

        {currentSection === 'nurseries' && (
          <div className="animate-fadeIn">
            <NurseryLocator
              language={language}
              onBack={() => setCurrentSection('home')}
              onRequestFromNursery={() => setCurrentSection('request')}
            />
          </div>
        )}

        {currentSection === 'certificate' && (
          <div className="animate-fadeIn">
            <CertificateGenerator
              language={language}
              onBack={() => setCurrentSection('home')}
            />
          </div>
        )}
      </main>

      {/* 4. Volunteer Registration Modal */}
      <VolunteerModal
        isOpen={isVolunteerModalOpen}
        onClose={() => setIsVolunteerModalOpen(false)}
        language={language}
      />

      {/* 5. Footer */}
      <Footer
        language={language}
        onNavigate={setCurrentSection}
      />
    </div>
  );
}
