import React from 'react';
import { Sprout, MapPin, AlertTriangle, Shield, Award, Users, Trees, ArrowRight, Leaf } from 'lucide-react';
import { Language, PortalSection } from '../types';
import { PORTAL_STATS } from '../data/portalData';

interface HeroProps {
  language: Language;
  onNavigate: (section: PortalSection) => void;
  onOpenVolunteer: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onNavigate, onOpenVolunteer }) => {
  return (
    <div className="space-y-6">
      {/* Hero Banner Container */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50/90 via-emerald-100/40 to-white border border-emerald-200/80 p-6 sm:p-10 shadow-sm">
        {/* Subtle decorative watermark icon */}
        <div className="absolute right-4 -bottom-8 select-none pointer-events-none opacity-5 text-emerald-950 text-[180px] leading-none">
          🌳
        </div>

        <div className="relative z-10 max-w-3xl">
          {/* Mission Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-[11px] font-extrabold tracking-wide mb-4">
            <Leaf className="w-3.5 h-3.5 text-emerald-700" />
            <span>
              {language === 'hi'
                ? 'हरित आवरण संवर्धन एवं नागरिक सहभागिता मिशन २०२६'
                : 'Green Canopy Expansion & Citizen Forestry Mission 2026'}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-emerald-950 tracking-tight leading-[1.2]">
            {language === 'hi' ? (
              <>
                एक पेड़ धरा के नाम, हर नागरिक बने{' '}
                <span className="text-emerald-700 underline decoration-emerald-300 decoration-wavy decoration-2">
                  पेड़ रक्षक
                </span>
              </>
            ) : (
              <>
                A Tree for Earth: Become an Official{' '}
                <span className="text-emerald-700 underline decoration-emerald-300 decoration-wavy decoration-2">
                  Ped Rakshak
                </span>
              </>
            )}
          </h1>

          {/* Description */}
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            {language === 'hi'
              ? 'सेवा मित्र पेड़ रक्षक पोर्टल नागरिकों को निःशुल्क स्वदेशी पौधे प्राप्त करने, रोपित वृक्षों की जीपीएस जियो-टैगिंग द्वारा स्वास्थ्य निगरानी करने, अवैध वृक्ष कटाई की तत्काल शिकायत दर्ज करने एवं डिजिटल प्रमाण-पत्र प्राप्त करने का सशक्त माध्यम है।'
              : 'Seva Mitra Ped Rakshak Portal empowers citizens to request native saplings, geo-tag planted trees for growth monitoring, report illegal tree felling with instant tracking, and earn recognized Tree Guardian certification.'}
          </p>

          {/* Action Button Row */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('request')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-emerald-700 hover:bg-emerald-800 active:scale-[0.98] shadow-md shadow-emerald-800/20 transition-all cursor-pointer"
            >
              <Sprout className="w-4 h-4" />
              <span>{language === 'hi' ? 'निःशुल्क पौधा अनुरोध करें' : 'Request Free Saplings'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('geotag')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-extrabold text-emerald-900 bg-white hover:bg-emerald-50 active:scale-[0.98] border border-emerald-300 shadow-xs transition-all cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-emerald-700" />
              <span>{language === 'hi' ? 'पेड़ जियो-टैग करें' : 'Geo-Tag Your Tree'}</span>
            </button>

            <button
              onClick={() => onNavigate('complaint')}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-rose-800 bg-rose-50 hover:bg-rose-100 active:scale-[0.98] border border-rose-200 transition-all cursor-pointer"
            >
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span>{language === 'hi' ? 'कटाई / क्षति शिकायत' : 'Report Tree Damage'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Counter Strip */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
              <Trees className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md">
              लाइव गणना
            </span>
          </div>
          <h3 className="mt-3 text-xl sm:text-2xl font-black text-emerald-950 tabular-nums">
            {PORTAL_STATS.totalTreesPlanted.toLocaleString('en-IN')}+
          </h3>
          <p className="text-xs font-medium text-slate-500 mt-1">
            {language === 'hi' ? 'कुल रोपित व संरक्षित वृक्ष' : 'Total Protected Trees'}
          </p>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
              <Users className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md">
              स्वयंसेवक
            </span>
          </div>
          <h3 className="mt-3 text-xl sm:text-2xl font-black text-emerald-950 tabular-nums">
            {PORTAL_STATS.registeredGuardians.toLocaleString('en-IN')}+
          </h3>
          <p className="text-xs font-medium text-slate-500 mt-1">
            {language === 'hi' ? 'सक्रिय पेड़ रक्षक नागरिक' : 'Registered Ped Rakshaks'}
          </p>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
              <Shield className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md">
              सफलता दर
            </span>
          </div>
          <h3 className="mt-3 text-xl sm:text-2xl font-black text-emerald-950 tabular-nums">
            {PORTAL_STATS.survivalRate}
          </h3>
          <p className="text-xs font-medium text-slate-500 mt-1">
            {language === 'hi' ? 'वृक्ष उत्तरजीविता दर' : 'Sapling Survival Rate'}
          </p>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
              <Award className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md">
              वितरण केंद्र
            </span>
          </div>
          <h3 className="mt-3 text-xl sm:text-2xl font-black text-emerald-950 tabular-nums">
            {PORTAL_STATS.activeNurseries.toLocaleString('en-IN')}
          </h3>
          <p className="text-xs font-medium text-slate-500 mt-1">
            {language === 'hi' ? 'शासकीय वन पौधशालाएं' : 'Govt Nursery Centers'}
          </p>
        </div>
      </section>
    </div>
  );
};
