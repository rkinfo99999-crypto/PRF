import React from 'react';
import { Trees, Globe, UserCheck, ShieldAlert } from 'lucide-react';
import { Language, PortalSection } from '../types';

interface HeaderProps {
  currentSection: PortalSection;
  onSelectSection: (section: PortalSection) => void;
  language: Language;
  onToggleLanguage: () => void;
  onOpenVolunteerModal: () => void;
  onLockCaptcha: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentSection,
  onSelectSection,
  language,
  onToggleLanguage,
  onOpenVolunteerModal,
  onLockCaptcha,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-xs">
      {/* Top micro banner */}
      <div className="bg-emerald-900 text-emerald-100 text-[11px] font-semibold py-1 px-4 text-center tracking-wide flex items-center justify-between">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <span className="hidden sm:inline">
            {language === 'hi'
              ? 'पर्यावरण, वन एवं जलवायु परिवर्तन विभाग • सेवा मित्र पेड़ रक्षक महाभियान'
              : 'Dept. of Environment, Forest & Climate Change • Seva Mitra Tree Protector Mission'}
          </span>
          <span className="sm:hidden">सेवा मित्र पेड़ रक्षक पोर्टल २०२६</span>
          <div className="flex items-center gap-3">
            <span className="text-emerald-300">हेल्पलाइन: 1800-180-TREE (1926)</span>
            <button
              onClick={onToggleLanguage}
              className="flex items-center gap-1 bg-emerald-800/80 hover:bg-emerald-700 px-2 py-0.5 rounded text-[10px] text-white font-bold transition-colors cursor-pointer"
            >
              <Globe className="w-3 h-3" />
              <span>{language === 'hi' ? 'English' : 'हिंदी'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: 3 zones separated by gap-8 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark with emblem */}
        <button
          onClick={() => onSelectSection('home')}
          className="flex items-center gap-2.5 shrink-0 text-left cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-full bg-emerald-100/80 border border-emerald-300 flex items-center justify-center text-emerald-800 shadow-xs group-hover:bg-emerald-200 transition-colors">
            <Trees className="w-6 h-6 text-emerald-800" />
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-black text-emerald-950 tracking-tight leading-none">
              सेवा मित्र पेड़ रक्षक
            </h1>
            <p className="text-[10px] font-bold text-emerald-700 tracking-wider uppercase mt-0.5">
              Advanced Green Citizen Portal
            </p>
          </div>
        </button>

        {/* Zone 2: Navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-bold text-slate-700">
          <button
            onClick={() => onSelectSection('home')}
            className={`whitespace-nowrap shrink-0 hover:text-emerald-800 transition-colors pb-0.5 cursor-pointer ${
              currentSection === 'home' ? 'text-emerald-800 border-b-2 border-emerald-700' : ''
            }`}
          >
            {language === 'hi' ? 'मुख्य पृष्ठ' : 'Home'}
          </button>
          <button
            onClick={() => onSelectSection('request')}
            className={`whitespace-nowrap shrink-0 hover:text-emerald-800 transition-colors pb-0.5 cursor-pointer ${
              currentSection === 'request' ? 'text-emerald-800 border-b-2 border-emerald-700' : ''
            }`}
          >
            {language === 'hi' ? 'पौधा अनुरोध' : 'Sapling Request'}
          </button>
          <button
            onClick={() => onSelectSection('geotag')}
            className={`whitespace-nowrap shrink-0 hover:text-emerald-800 transition-colors pb-0.5 cursor-pointer ${
              currentSection === 'geotag' ? 'text-emerald-800 border-b-2 border-emerald-700' : ''
            }`}
          >
            {language === 'hi' ? 'पेड़ जियो-टैग' : 'Geo-Tag Tree'}
          </button>
          <button
            onClick={() => onSelectSection('complaint')}
            className={`whitespace-nowrap shrink-0 hover:text-emerald-800 transition-colors pb-0.5 cursor-pointer ${
              currentSection === 'complaint' ? 'text-emerald-800 border-b-2 border-emerald-700' : ''
            }`}
          >
            {language === 'hi' ? 'कटाई / क्षति शिकायत' : 'Tree Grievance'}
          </button>
          <button
            onClick={() => onSelectSection('nurseries')}
            className={`whitespace-nowrap shrink-0 hover:text-emerald-800 transition-colors pb-0.5 cursor-pointer ${
              currentSection === 'nurseries' ? 'text-emerald-800 border-b-2 border-emerald-700' : ''
            }`}
          >
            {language === 'hi' ? 'नर्सरी खोजें' : 'Govt Nurseries'}
          </button>
          <button
            onClick={() => onSelectSection('certificate')}
            className={`whitespace-nowrap shrink-0 hover:text-emerald-800 transition-colors pb-0.5 cursor-pointer ${
              currentSection === 'certificate' ? 'text-emerald-800 border-b-2 border-emerald-700' : ''
            }`}
          >
            {language === 'hi' ? 'ई-प्रमाण पत्र' : 'E-Certificate'}
          </button>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onLockCaptcha}
            title={language === 'hi' ? 'कैप्चा सुरक्षा पुनः सक्रिय करें' : 'Re-verify with Security Captcha'}
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-600 hover:text-emerald-800 bg-slate-100 hover:bg-emerald-50 rounded-xl transition-colors cursor-pointer border border-slate-200"
          >
            <ShieldAlert className="w-3.5 h-3.5 text-emerald-700" />
            <span className="whitespace-nowrap">{language === 'hi' ? 'सुरक्षा लॉक' : 'Captcha Lock'}</span>
          </button>

          <button
            onClick={onOpenVolunteerModal}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-900 active:scale-[0.98] rounded-xl shadow-xs transition-all cursor-pointer whitespace-nowrap"
          >
            <UserCheck className="w-4 h-4" />
            <span>{language === 'hi' ? 'पेड़ रक्षक बनें' : 'Become Ped Rakshak'}</span>
          </button>
        </div>
      </div>

      {/* Mobile sub-navigation bar */}
      <div className="lg:hidden flex items-center gap-2 overflow-x-auto px-4 py-2 bg-emerald-50/50 border-t border-emerald-100 text-xs font-semibold no-scrollbar">
        <button
          onClick={() => onSelectSection('home')}
          className={`px-2.5 py-1 rounded-lg shrink-0 ${currentSection === 'home' ? 'bg-emerald-800 text-white font-bold' : 'text-slate-700'}`}
        >
          {language === 'hi' ? 'होम' : 'Home'}
        </button>
        <button
          onClick={() => onSelectSection('request')}
          className={`px-2.5 py-1 rounded-lg shrink-0 ${currentSection === 'request' ? 'bg-emerald-800 text-white font-bold' : 'text-slate-700'}`}
        >
          {language === 'hi' ? 'पौधा अनुरोध' : 'Sapling'}
        </button>
        <button
          onClick={() => onSelectSection('geotag')}
          className={`px-2.5 py-1 rounded-lg shrink-0 ${currentSection === 'geotag' ? 'bg-emerald-800 text-white font-bold' : 'text-slate-700'}`}
        >
          {language === 'hi' ? 'जियो-टैग' : 'Geo-Tag'}
        </button>
        <button
          onClick={() => onSelectSection('complaint')}
          className={`px-2.5 py-1 rounded-lg shrink-0 ${currentSection === 'complaint' ? 'bg-emerald-800 text-white font-bold' : 'text-slate-700'}`}
        >
          {language === 'hi' ? 'शिकायत' : 'Complaint'}
        </button>
        <button
          onClick={() => onSelectSection('nurseries')}
          className={`px-2.5 py-1 rounded-lg shrink-0 ${currentSection === 'nurseries' ? 'bg-emerald-800 text-white font-bold' : 'text-slate-700'}`}
        >
          {language === 'hi' ? 'नर्सरी' : 'Nurseries'}
        </button>
        <button
          onClick={() => onSelectSection('certificate')}
          className={`px-2.5 py-1 rounded-lg shrink-0 ${currentSection === 'certificate' ? 'bg-emerald-800 text-white font-bold' : 'text-slate-700'}`}
        >
          {language === 'hi' ? 'सर्टिफिकेट' : 'Certificate'}
        </button>
      </div>
    </header>
  );
};
