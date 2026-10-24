import React from 'react';
import { Trees, ShieldCheck, Heart } from 'lucide-react';
import { Language, PortalSection } from '../types';

interface FooterProps {
  language: Language;
  onNavigate: (section: PortalSection) => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onNavigate }) => {
  return (
    <footer className="mt-16 bg-slate-900 text-slate-300 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-slate-800">
          {/* Col 1: Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-700/60 border border-emerald-500 flex items-center justify-center text-white">
                <Trees className="w-5 h-5 text-emerald-300" />
              </div>
              <span className="text-base font-black text-white">
                सेवा मित्र पेड़ रक्षक
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              {language === 'hi'
                ? 'पर्यावरण संरक्षण, सामुदायिक वानिकी एवं भावी पीढ़ियों हेतु हरित उत्तर प्रदेश के निर्माण का समर्पित शासकीय नागरिक पोर्टल।'
                : 'Dedicated government citizen portal for tree protection, urban forestry and sustainable environment.'}
            </p>
            <div className="flex items-center gap-2 text-[11px] text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>सत्यापित हरित मंच • सर्वाधिकार सुरक्षित</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-3">
              त्वरित सेवाएं
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('request')}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  निःशुल्क पौधा आवंटन
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('geotag')}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  पेड़ जियो-टैगिंग एवं हेल्थ रिपोर्ट
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('complaint')}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  पेड़ कटाई व क्षति शिकायत
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('nurseries')}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  शासकीय पौधशाला लोकेटर
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Guidelines & Policies */}
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-3">
              दिशा-निर्देश एवं नियम
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>वृक्ष संरक्षण अधिनियम १९७६ मार्गदर्शिका</li>
              <li>एक पेड़ मां के नाम राष्ट्रीय दिशा-निर्देश</li>
              <li>पौधा परिवहन एवं रोपण सावधानियां</li>
              <li>डिजिटल प्रमाण पत्र सत्यापन विधि</li>
            </ul>
          </div>

          {/* Col 4: Emergency Contacts */}
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-3">
              संपर्क एवं सहायता
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p>टोल-फ्री वन सेवा: <strong className="text-white block text-sm">1926</strong></p>
              <p>ग्रीन हेल्पलाइन: <strong className="text-emerald-300 block">1800-180-TREE</strong></p>
              <p>ईमेल: <span className="text-slate-300">support.pedrakshak@up.gov.in</span></p>
              <p className="text-[11px] text-slate-500">
                मुख्यालय: पर्यावरण निदेशालय, विनीत खंड, गोमती नगर, लखनऊ
              </p>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>
            © 2026 सेवा मित्र पेड़ रक्षक पोर्टल • उत्तर प्रदेश शासन द्वारा संचालित एवं संवर्धित।
          </p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>हरित भारत, सशक्त नागरिक</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
