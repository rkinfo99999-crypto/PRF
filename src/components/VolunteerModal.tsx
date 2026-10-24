import React, { useState } from 'react';
import { UserCheck, X, CheckCircle2, Shield, HeartHandshake } from 'lucide-react';
import { Language } from '../types';

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const VolunteerModal: React.FC<VolunteerModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [district, setDistrict] = useState('लखनऊ');
  const [area, setArea] = useState('');
  const [selectedRoles, setSelectedRoles] = useState<string[]>([
    'पौधरोपण अभियान में सक्रिय सहभागिता',
    'सड़क व पार्क के पौधों की नियमित सिंचाई',
  ]);
  const [isRegistered, setIsRegistered] = useState(false);
  const [volunteerId, setVolunteerId] = useState('');

  if (!isOpen) return null;

  const toggleRole = (role: string) => {
    setSelectedRoles(prev => 
      prev.includes(role) ? prev.filter(r => r !== role) : [...prev, role]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !area.trim()) {
      alert(language === 'hi' ? 'कृपया सभी विवरण भरें।' : 'Please fill all fields.');
      return;
    }
    const id = `UP-VOL-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setVolunteerId(id);
    setIsRegistered(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
      <div className="w-full max-w-lg bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-emerald-100 relative">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-slate-400 hover:text-slate-700 p-1 rounded-full cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isRegistered ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-black text-emerald-950">
                  {language === 'hi' ? 'पेड़ रक्षक स्वयंसेवक पंजीकरण' : 'Ped Rakshak Volunteer Registration'}
                </h3>
                <p className="text-xs text-slate-500">
                  {language === 'hi' ? 'अपने वार्ड व ग्राम में हरित सेना का अंग बनें' : 'Join the Green Citizen Brigade in your ward'}
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-4 space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  {language === 'hi' ? 'आपका पूरा नाम *' : 'Full Name *'}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="उदा. कुलदीप अग्निहोत्री"
                  className="w-full px-3 py-2 bg-slate-50 rounded-xl border border-slate-300 font-medium focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    {language === 'hi' ? 'मोबाइल नंबर *' : 'Mobile Number *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="98XXXXXXXX"
                    className="w-full px-3 py-2 bg-slate-50 rounded-xl border border-slate-300 font-medium focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    {language === 'hi' ? 'जनपद *' : 'District *'}
                  </label>
                  <select
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 rounded-xl border border-slate-300 font-bold text-slate-700"
                  >
                    <option value="लखनऊ">लखनऊ (Lucknow)</option>
                    <option value="वाराणसी">वाराणसी (Varanasi)</option>
                    <option value="प्रयागराज">प्रयागराज (Prayagraj)</option>
                    <option value="कानपुर">कानपुर (Kanpur)</option>
                    <option value="गोरखपुर">गोरखपुर (Gorakhpur)</option>
                    <option value="मेरठ">मेरठ (Meerut)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  {language === 'hi' ? 'वार्ड संख्या / ग्राम / मोहल्ला *' : 'Ward / Village / Locality *'}
                </label>
                <input
                  type="text"
                  required
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  placeholder="उदा. राजाजीपुरम वार्ड नं २२"
                  className="w-full px-3 py-2 bg-slate-50 rounded-xl border border-slate-300 font-medium"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1.5">
                  {language === 'hi' ? 'आप किन कार्यों में सहयोग कर सकते हैं?' : 'Areas of Contribution:'}
                </label>
                <div className="space-y-1.5">
                  {[
                    'पौधरोपण अभियान में सक्रिय सहभागिता',
                    'सड़क व पार्क के पौधों की नियमित सिंचाई',
                    'अवैध पेड़ कटाई की निगरानी व रिपोर्टिंग',
                    'विद्यालयों व कॉलोनियों में हरित जागरूकता',
                  ].map((role) => (
                    <label key={role} className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg cursor-pointer border border-slate-200 text-[11px] font-semibold text-slate-700 hover:bg-emerald-50">
                      <input
                        type="checkbox"
                        checked={selectedRoles.includes(role)}
                        onChange={() => toggleRole(role)}
                        className="accent-emerald-700 w-4 h-4 rounded"
                      />
                      <span>{role}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-[11px] text-emerald-900 leading-relaxed">
                <strong>पेड़ रक्षक शपथ:</strong> "मैं संकल्प लेता हूँ कि अपने क्षेत्र में रोपे गए वृक्षों की सुरक्षा करूँगा तथा प्रकृति एवं पर्यावरण संरक्षण में यथासंभव योगदान दूँगा।"
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-black rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5 text-xs"
              >
                <HeartHandshake className="w-4 h-4" />
                <span>{language === 'hi' ? 'संकल्प लें एवं स्वयंसेवक बनें' : 'Register as Volunteer'}</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-4 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-500 text-emerald-800 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h3 className="text-xl font-black text-emerald-950">
                बधाई हो, {name}!
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                आप सेवा मित्र पेड़ रक्षक वालंटियर नेटवर्क में सफलतापूर्वक पंजीकृत हो गए हैं।
              </p>
            </div>

            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 inline-block text-left w-full text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-emerald-200">
                <span className="text-slate-500 font-semibold">स्वयंसेवक पहचान संख्या:</span>
                <span className="font-mono font-black text-emerald-900 text-sm">{volunteerId}</span>
              </div>
              <div className="pt-2 text-slate-700 space-y-1">
                <p>कार्य क्षेत्र: <strong>{area}, {district}</strong></p>
                <p>सहयोग: <strong>{selectedRoles.length} दायित्व चयनित</strong></p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-full py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white font-bold rounded-xl text-xs cursor-pointer"
            >
              संपन्न
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
