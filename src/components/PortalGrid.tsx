import React from 'react';
import { Sprout, MapPin, AlertTriangle, Building2, Award, Calendar, ArrowRight, ShieldCheck, Phone, CheckCircle, Info } from 'lucide-react';
import { Language, PortalSection } from '../types';
import { CARE_TIPS } from '../data/portalData';

interface PortalGridProps {
  language: Language;
  onNavigate: (section: PortalSection) => void;
  onOpenVolunteer: () => void;
}

export const PortalGrid: React.FC<PortalGridProps> = ({
  language,
  onNavigate,
  onOpenVolunteer,
}) => {
  return (
    <div className="space-y-10">
      {/* Services Grid Section */}
      <section>
        <div className="mb-6">
          <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-bold mb-2">
            पोर्टल सेवाएं एवं नागरिक डैशबोर्ड
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-emerald-950 tracking-tight">
            {language === 'hi' ? 'सेवा मित्र पेड़ रक्षक प्रमुख सुविधाएं' : 'Key Portal Services & Citizen Amenities'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
            {language === 'hi'
              ? 'पर्यावरण संरक्षण को जन-आंदोलन बनाने हेतु विकसित अत्याधुनिक डिजिटल सेवाएं।'
              : 'Digital citizen services developed to transform environmental conservation into a participatory mission.'}
          </p>
        </div>

        {/* 2-Column Responsive Grid matching user template (.portal-grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Card 1: Sapling Request */}
          <div 
            onClick={() => onNavigate('request')}
            className="p-6 rounded-3xl bg-white border border-slate-200/90 hover:border-emerald-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-13 h-13 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-4 group-hover:scale-105 transition-transform">
                <Sprout className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-black text-emerald-950 mb-2 group-hover:text-emerald-700 transition-colors">
                {language === 'hi' ? 'पौधा आवंटन एवं वितरण अनुरोध' : 'Free Sapling Request & Allocation'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {language === 'hi'
                  ? 'नीम, पीपल, बरगद, आंवला, जामुन जैसे औषधीय व छायादार स्वदेशी पौधों हेतु ऑनलाइन आवेदन करें और नजदीकी पौधशाला से प्राप्त करें।'
                  : 'Apply online for indigenous medicinal and fruit-bearing saplings with collection slip from nearest nursery.'}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center text-xs font-black text-emerald-700 group-hover:text-emerald-800">
              <span>{language === 'hi' ? 'पौधा अनुरोध करें ›' : 'Request Saplings ›'}</span>
            </div>
          </div>

          {/* Card 2: Geo-Tagging */}
          <div 
            onClick={() => onNavigate('geotag')}
            className="p-6 rounded-3xl bg-white border border-slate-200/90 hover:border-emerald-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-13 h-13 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-4 group-hover:scale-105 transition-transform">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-black text-emerald-950 mb-2 group-hover:text-emerald-700 transition-colors">
                {language === 'hi' ? 'पेड़ जियो-टैगिंग एवं हेल्थ ट्रैकर' : 'Tree Geo-Tagging & Health Monitor'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {language === 'hi'
                  ? 'रोपे गए पौधे का जीपीएस स्थान अंकित करें, ट्री-गार्ड व सिंचाई स्थिति दर्ज करें और पौधे के बड़े होने की यात्रा को ट्रैक करें।'
                  : 'Tag your planted tree with exact latitude-longitude coordinates, record watering, tree guard protection and growth milestones.'}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center text-xs font-black text-emerald-700 group-hover:text-emerald-800">
              <span>{language === 'hi' ? 'पेड़ जियो-टैग करें ›' : 'Geo-Tag Tree ›'}</span>
            </div>
          </div>

          {/* Card 3: Tree Felling Complaint */}
          <div 
            onClick={() => onNavigate('complaint')}
            className="p-6 rounded-3xl bg-white border border-slate-200/90 hover:border-rose-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-13 h-13 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 mb-4 group-hover:scale-105 transition-transform">
                <AlertTriangle className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-rose-700 transition-colors">
                {language === 'hi' ? 'अवैध कटाई एवं वृक्ष क्षति शिकायत' : 'Report Tree Felling & Tree Hazards'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {language === 'hi'
                  ? 'बिना अनुमति हरे वृक्षों की कटाई, आंधी में गिरने का जोखिम अथवा सूखे पेड़ों की तत्काल ऑनलाइन शिकायत दर्ज करें और टिकट ट्रैक करें।'
                  : 'Report illegal tree felling, storm-damaged dangerous branches or diseased trees with rapid forest team response.'}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center text-xs font-black text-rose-700 group-hover:text-rose-800">
              <span>{language === 'hi' ? 'शिकायत दर्ज व ट्रैक करें ›' : 'File / Track Grievance ›'}</span>
            </div>
          </div>

          {/* Card 4: Nursery Locator */}
          <div 
            onClick={() => onNavigate('nurseries')}
            className="p-6 rounded-3xl bg-white border border-slate-200/90 hover:border-emerald-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-13 h-13 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-4 group-hover:scale-105 transition-transform">
                <Building2 className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-black text-emerald-950 mb-2 group-hover:text-emerald-700 transition-colors">
                {language === 'hi' ? 'शासकीय वन पौधशाला खोजक' : 'Government Nursery Locator'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {language === 'hi'
                  ? 'जनपदवार वन विभाग की अधिकृत पौधशालाओं की सूची, उपलब्ध स्टॉक, संपर्क अधिकारी एवं गूगल मैप्स मार्ग निर्देश देखें।'
                  : 'Locate certified forest department nurseries across UP districts, verify sapling species inventory, timings and contacts.'}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center text-xs font-black text-emerald-700 group-hover:text-emerald-800">
              <span>{language === 'hi' ? 'नर्सरी खोजें ›' : 'Find Nurseries ›'}</span>
            </div>
          </div>

          {/* Card 5: Certificate */}
          <div 
            onClick={() => onNavigate('certificate')}
            className="p-6 rounded-3xl bg-white border border-slate-200/90 hover:border-emerald-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-13 h-13 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-4 group-hover:scale-105 transition-transform">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-black text-emerald-950 mb-2 group-hover:text-emerald-700 transition-colors">
                {language === 'hi' ? 'पेड़ रक्षक ई-प्रमाण पत्र' : 'Tree Guardian E-Certificate'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {language === 'hi'
                  ? 'पौधरोपण व देखभाल का संकल्प लेने पर पर्यावरण विभाग से अधिकृत डिजिटल प्रमाण पत्र तुरंत डाउनलोड व प्रिंट करें।'
                  : 'Receive and download official Tree Guardian e-certificate recognized by Forest & Climate Change Department.'}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center text-xs font-black text-emerald-700 group-hover:text-emerald-800">
              <span>{language === 'hi' ? 'प्रमाण पत्र सृजन करें ›' : 'Generate Certificate ›'}</span>
            </div>
          </div>

          {/* Card 6: Volunteer Registration */}
          <div 
            onClick={onOpenVolunteer}
            className="p-6 rounded-3xl bg-emerald-900 text-white border border-emerald-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-13 h-13 rounded-2xl bg-emerald-800 border border-emerald-700 flex items-center justify-center text-emerald-200 mb-4 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-black text-white mb-2">
                {language === 'hi' ? 'पेड़ रक्षक स्वयंसेवक नेटवर्क' : 'Join Ped Rakshak Volunteer Network'}
              </h3>
              <p className="text-xs text-emerald-100/80 leading-relaxed">
                {language === 'hi'
                  ? 'अपने वार्ड अथवा ग्राम में वृक्ष रक्षक दल से जुड़ें। पौधारोपण, जल संरक्षण एवं वृक्ष सुरक्षा में सक्रिय योगदान दें।'
                  : 'Enroll as verified volunteer to safeguard street trees, organize local plantation drives, and report environmental threats.'}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-emerald-800/80 flex items-center text-xs font-black text-emerald-300 group-hover:text-white">
              <span>{language === 'hi' ? 'स्वयंसेवक के रूप में जुड़ें ›' : 'Register Now ›'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Care Guide Section */}
      <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <Calendar className="w-5 h-5 text-emerald-700" />
          <h3 className="text-lg sm:text-xl font-black text-emerald-950">
            {language === 'hi' ? 'ऋतु अनुसार वृक्ष देखभाल एवं सिंचाई गाइड' : 'Seasonal Tree Care & Irrigation Guide'}
          </h3>
        </div>
        <p className="text-xs text-slate-500 mb-6">
          पौधों के शत-प्रतिशत जीवित रहने और स्वस्थ विकास के लिए वैज्ञानिक पद्धतियों का पालन करें।
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          {CARE_TIPS.slice(0, 3).map((tip, i) => (
            <div key={i} className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md inline-block mb-2">
                  {language === 'hi' ? tip.monthHi : tip.monthEn}
                </span>
                <p className="text-slate-700 font-medium leading-relaxed">
                  {language === 'hi' ? tip.tipHi : tip.tipEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact & Emergency Desk (.contact in template) */}
      <section className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-emerald-50 via-emerald-100/50 to-green-50 border border-emerald-200">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-200/80 text-emerald-950 text-[11px] font-extrabold mb-2">
              <Phone className="w-3.5 h-3.5 text-emerald-800" />
              <span>२४x७ हरित नियंत्रण कक्ष | 24x7 GREEN HELPLINE</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-emerald-950">
              {language === 'hi' ? 'पेड़ रक्षक सहायता एवं आपातकालीन संपर्क' : 'Ped Rakshak Helpdesk & Support'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              {language === 'hi'
                ? 'पौध वितरण, ट्री-गार्ड आवंटन अथवा पेड़ कटाई की तात्कालिक सूचना हेतु राज्य वन नियंत्रण कक्ष टोल-फ्री नंबर 1800-180-TREE अथवा वन सेवा 1926 पर संपर्क करें।'
                : 'For sapling supply queries or urgent reporting of illegal felling, call State Forest Control Room toll-free 1800-180-TREE (1926).'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href="tel:1926"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>डायल 1926 (वन सेवा)</span>
            </a>
            <button
              onClick={() => onNavigate('complaint')}
              className="w-full sm:w-auto px-4 py-3 rounded-xl bg-white border border-emerald-300 text-emerald-900 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-emerald-50 cursor-pointer"
            >
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span>ऑनलाइन शिकायत</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
