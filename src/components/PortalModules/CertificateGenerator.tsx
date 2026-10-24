import React, { useState } from 'react';
import { Award, Printer, Share2, ArrowLeft, CheckCircle2, Trees, ShieldCheck, Download } from 'lucide-react';
import { Language } from '../../types';

interface CertificateGeneratorProps {
  language: Language;
  onBack: () => void;
}

export const CertificateGenerator: React.FC<CertificateGeneratorProps> = ({
  language,
  onBack,
}) => {
  const [guardianName, setGuardianName] = useState('अमित कुमार शर्मा');
  const [district, setDistrict] = useState('लखनऊ');
  const [treesCount, setTreesCount] = useState(5);
  const [certDate, setCertDate] = useState('24 अक्टूबर 2026');
  const [certId, setCertId] = useState('UP-PR-2026-08842');

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setCertId(`UP-PR-2026-${Math.floor(10000 + Math.random() * 90000)}`);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white rounded-3xl border border-emerald-100 p-6 sm:p-8 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-emerald-800 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{language === 'hi' ? 'पोर्टल पर वापस' : 'Back to Portal'}</span>
        </button>

        <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full flex items-center gap-1">
          <Award className="w-3.5 h-3.5 text-emerald-700" />
          <span>{language === 'hi' ? 'डिजिटल सम्मान पत्र' : 'Official Green Certificate'}</span>
        </span>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-black text-emerald-950 flex items-center gap-2">
          <Award className="w-6 h-6 text-emerald-700" />
          <span>{language === 'hi' ? 'पेड़ रक्षक ई-प्रमाण पत्र सृजन' : 'Tree Guardian E-Certificate Generator'}</span>
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          {language === 'hi'
            ? 'पौधरोपण अथवा वृक्ष संरक्षण का संकल्प लेने वाले प्रत्येक नागरिक हेतु पर्यावरण विभाग द्वारा अधिकृत डिजिटल प्रमाण पत्र।'
            : 'Official digital recognition certificate for citizens contributing to climate action and tree protection.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Input controls (4 cols) */}
        <div className="lg:col-span-4 bg-slate-50 p-5 rounded-2xl border border-slate-200 text-xs">
          <h3 className="text-sm font-black text-emerald-950 mb-3">
            {language === 'hi' ? 'प्रमाण पत्र विवरण भरें:' : 'Enter Certificate Details:'}
          </h3>

          <form onSubmit={handleGenerate} className="space-y-3.5">
            <div>
              <label className="block font-bold text-slate-700 mb-1">
                {language === 'hi' ? 'पेड़ रक्षक का नाम *' : 'Guardian Name *'}
              </label>
              <input
                type="text"
                required
                value={guardianName}
                onChange={(e) => setGuardianName(e.target.value)}
                placeholder="उदा. राजेश कुमार"
                className="w-full px-3 py-2 bg-white rounded-xl border border-slate-300 font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                {language === 'hi' ? 'जनपद *' : 'District *'}
              </label>
              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full px-3 py-2 bg-white rounded-xl border border-slate-300 font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="लखनऊ">लखनऊ (Lucknow)</option>
                <option value="वाराणसी">वाराणसी (Varanasi)</option>
                <option value="प्रयागराज">प्रयागराज (Prayagraj)</option>
                <option value="कानपुर नगर">कानपुर नगर (Kanpur)</option>
                <option value="गोरखपुर">गोरखपुर (Gorakhpur)</option>
                <option value="मेरठ">मेरठ (Meerut)</option>
                <option value="अयोध्या">अयोध्या (Ayodhya)</option>
                <option value="आगरा">आगरा (Agra)</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                {language === 'hi' ? 'संरक्षित / रोपित वृक्ष संख्या:' : 'Protected Trees Count:'}
              </label>
              <input
                type="number"
                min={1}
                max={500}
                value={treesCount}
                onChange={(e) => setTreesCount(Number(e.target.value))}
                className="w-full px-3 py-2 bg-white rounded-xl border border-slate-300 font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                {language === 'hi' ? 'प्रमाण पत्र तिथि:' : 'Certificate Date:'}
              </label>
              <input
                type="text"
                value={certDate}
                onChange={(e) => setCertDate(e.target.value)}
                className="w-full px-3 py-2 bg-white rounded-xl border border-slate-300 font-medium text-slate-800"
              />
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                type="button"
                onClick={handlePrint}
                className="w-full py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold rounded-xl shadow-xs transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Printer className="w-4 h-4" />
                <span>{language === 'hi' ? 'प्रिंट / डाउनलोड करें' : 'Print / Download Certificate'}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  const text = `मैं गर्व से प्रमाणित करता हूँ कि मैं सेवा मित्र पेड़ रक्षक मिशन का सदस्य बन गया हूँ! प्रमाण पत्र आईडी: ${certId}`;
                  window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
                }}
                className="w-full py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 text-xs"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>व्हाट्सएप पर साझा करें</span>
              </button>
            </div>
          </form>
        </div>

        {/* Certificate Canvas View (8 cols) */}
        <div className="lg:col-span-8">
          <div 
            id="printable-certificate"
            className="p-6 sm:p-10 bg-gradient-to-b from-amber-50/50 via-white to-emerald-50/40 rounded-3xl border-4 border-emerald-800/80 shadow-md relative overflow-hidden text-center"
          >
            {/* Subtle ornate inner border */}
            <div className="border border-amber-600/60 p-4 sm:p-6 rounded-2xl relative">
              {/* Corner motifs */}
              <div className="absolute top-2 left-2 text-emerald-800 text-sm font-bold">✤</div>
              <div className="absolute top-2 right-2 text-emerald-800 text-sm font-bold">✤</div>
              <div className="absolute bottom-2 left-2 text-emerald-800 text-sm font-bold">✤</div>
              <div className="absolute bottom-2 right-2 text-emerald-800 text-sm font-bold">✤</div>

              {/* Emblem Header */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-600 flex items-center justify-center text-emerald-900 mb-2">
                  <Trees className="w-9 h-9 text-emerald-800" />
                </div>
                <h4 className="text-xs font-black uppercase text-amber-900 tracking-widest">
                  पर्यावरण, वन एवं जलवायु परिवर्तन विभाग
                </h4>
                <p className="text-[10px] text-slate-500 font-semibold">
                  SEVA MITRA PED RAKSHAK GREEN CITIZENSHIP MISSION
                </p>
                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-emerald-700 to-transparent my-2"></div>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-black text-emerald-950 font-serif tracking-tight mt-1">
                पेड़ रक्षक सम्मान पत्र
              </h3>
              <p className="text-xs font-bold text-emerald-700 uppercase tracking-widest mt-0.5">
                CERTIFICATE OF ENVIRONMENTAL GUARDIANSHIP
              </p>

              {/* Certificate Body */}
              <div className="my-6 space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed max-w-lg mx-auto">
                <p>यह प्रमाणित किया जाता है कि</p>
                <div className="py-1">
                  <span className="text-xl sm:text-2xl font-black text-emerald-900 border-b-2 border-emerald-700/60 pb-1 px-4 inline-block font-serif">
                    {guardianName || 'श्री / श्रीमती'}
                  </span>
                </div>
                <p className="text-slate-600 text-xs">
                  निवासी: <strong className="text-slate-900">{district}</strong>, उत्तर प्रदेश
                </p>
                <p className="text-xs sm:text-sm pt-2 text-slate-800">
                  ने सेवा मित्र पेड़ रक्षक महाभियान के अंतर्गत <strong className="text-emerald-900 text-base">{treesCount} वृक्षों</strong> के सफल रोपण, संरक्षण एवं नियमित देखभाल का पावन संकल्प लिया है। आपकी यह पर्यावरण सेवा धरा के संवर्धन में अतुलनीय है।
                </p>
              </div>

              {/* Certificate Signatures & Verification */}
              <div className="mt-8 pt-4 border-t border-slate-200 grid grid-cols-3 items-center text-[11px] text-slate-600">
                <div className="text-left">
                  <span className="font-mono font-bold text-slate-800 text-[10px] block">
                    ID: {certId}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    जारी तिथि: {certDate}
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-emerald-50 rounded-lg border border-emerald-300 flex items-center justify-center p-1">
                    <ShieldCheck className="w-8 h-8 text-emerald-800" />
                  </div>
                  <span className="text-[9px] font-bold text-emerald-800 mt-1 uppercase">सत्यापित सील</span>
                </div>

                <div className="text-right">
                  <span className="font-serif font-bold text-slate-900 block text-xs">
                    प्रधान मुख्य वन संरक्षक
                  </span>
                  <span className="text-[9px] text-slate-500">
                    उत्तर प्रदेश वन विभाग
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
