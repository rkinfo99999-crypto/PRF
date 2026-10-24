import React, { useState } from 'react';
import { MapPin, Camera, CheckCircle2, ArrowLeft, Shield, Droplets, Sparkles, Navigation } from 'lucide-react';
import { Language, GeoTaggedTree } from '../../types';

interface GeoTaggingModalProps {
  language: Language;
  onBack: () => void;
  geoTrees: GeoTaggedTree[];
  onAddGeoTree: (tree: GeoTaggedTree) => void;
}

export const GeoTaggingModal: React.FC<GeoTaggingModalProps> = ({
  language,
  onBack,
  geoTrees,
  onAddGeoTree,
}) => {
  const [treeSpecies, setTreeSpecies] = useState('नीम (Azadirachta indica)');
  const [plantedBy, setPlantedBy] = useState('');
  const [guardianPhone, setGuardianPhone] = useState('');
  const [district, setDistrict] = useState('लखनऊ');
  const [locationName, setLocationName] = useState('');
  const [latitude, setLatitude] = useState(26.8467);
  const [longitude, setLongitude] = useState(80.9462);
  const [healthStatus, setHealthStatus] = useState<'उत्कृष्ट (Healthy)' | 'सामान्य (Moderate)' | 'देखभाल अपेक्षित (Needs Care)'>('उत्कृष्ट (Healthy)');
  const [wateringFrequency, setWateringFrequency] = useState('सप्ताह में दो बार');
  const [hasTreeGuard, setHasTreeGuard] = useState(true);
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [filterDistrict, setFilterDistrict] = useState('all');

  const detectGps = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLatitude(Number(pos.coords.latitude.toFixed(4)));
          setLongitude(Number(pos.coords.longitude.toFixed(4)));
        },
        () => {
          // Fallback random slight offset around Lucknow/UP coordinates for demonstration
          const randLat = 26.8 + (Math.random() * 0.1);
          const randLng = 80.9 + (Math.random() * 0.1);
          setLatitude(Number(randLat.toFixed(4)));
          setLongitude(Number(randLng.toFixed(4)));
        }
      );
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!plantedBy.trim() || !locationName.trim()) {
      alert(language === 'hi' ? 'कृपया सभी आवश्यक फ़ील्ड भरें।' : 'Please fill all required fields.');
      return;
    }

    const newTree: GeoTaggedTree = {
      id: `gt-${Date.now()}`,
      treeNumber: `UP-${district.slice(0, 3).toUpperCase()}-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      speciesName: treeSpecies,
      plantedBy,
      guardianPhone,
      district,
      locationName,
      latitude,
      longitude,
      datePlanted: new Date().toLocaleDateString('hi-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
      healthStatus,
      wateringFrequency,
      hasTreeGuard,
      notes: notes || 'नियमित देखभाल जारी है।'
    };

    onAddGeoTree(newTree);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setPlantedBy('');
      setLocationName('');
      setNotes('');
    }, 2500);
  };

  const filteredTrees = filterDistrict === 'all'
    ? geoTrees
    : geoTrees.filter(t => t.district.includes(filterDistrict));

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

        <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
          {language === 'hi' ? 'डिजिटल वृक्ष जियो-टैगिंग' : 'Tree Geo-Tagging System'}
        </span>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-black text-emerald-950 flex items-center gap-2">
          <MapPin className="w-6 h-6 text-emerald-700" />
          <span>{language === 'hi' ? 'पेड़ जियो-टैग एवं स्वास्थ्य निगरानी' : 'Tree Geo-Tagging & Health Monitoring'}</span>
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          {language === 'hi'
            ? 'अपने रोपे गए अथवा गोद लिए गए पेड़ को जीपीएस निर्देशांकों के साथ पंजीकृत करें और उसकी वृद्धि की समय-समय पर रिपोर्ट दर्ज करें।'
            : 'Register your planted or adopted tree with exact GPS coordinates and monitor its growth trajectory.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Geo-tagging submission form (5 cols) */}
        <div className="lg:col-span-5 bg-emerald-50/40 p-5 rounded-2xl border border-emerald-200">
          <h3 className="text-sm font-black text-emerald-950 mb-3 flex items-center justify-between">
            <span>{language === 'hi' ? 'नया पेड़ जियो-टैग फॉर्म' : 'New Tree Geo-Tag Form'}</span>
            <button
              type="button"
              onClick={detectGps}
              className="text-[11px] text-emerald-800 hover:text-emerald-950 font-bold flex items-center gap-1 bg-white px-2 py-1 rounded-lg border border-emerald-200 cursor-pointer shadow-2xs"
            >
              <Navigation className="w-3 h-3 text-emerald-700" />
              <span>{language === 'hi' ? 'GPS ऑटो-डिटेक्ट' : 'Auto GPS'}</span>
            </button>
          </h3>

          <form onSubmit={handleSubmit} className="space-y-3 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">
                {language === 'hi' ? 'पेड़ की प्रजाति *' : 'Tree Species *'}
              </label>
              <select
                value={treeSpecies}
                onChange={(e) => setTreeSpecies(e.target.value)}
                className="w-full px-3 py-2 bg-white rounded-xl border border-slate-300 font-medium focus:ring-2 focus:ring-emerald-500/25 focus:border-emerald-600"
              >
                <option value="नीम (Azadirachta indica)">नीम (Azadirachta indica)</option>
                <option value="पीपल (Ficus religiosa)">पीपल (Ficus religiosa)</option>
                <option value="बरगद (Ficus benghalensis)">बरगद (Ficus benghalensis)</option>
                <option value="आंवला (Phyllanthus emblica)">आंवला (Phyllanthus emblica)</option>
                <option value="जामुन (Syzygium cumini)">जामुन (Syzygium cumini)</option>
                <option value="बेल पत्र (Aegle marmelos)">बेल पत्र (Aegle marmelos)</option>
                <option value="शीशम (Dalbergia sissoo)">शीशम (Dalbergia sissoo)</option>
                <option value="गुलमोहर (Delonix regia)">गुलमोहर (Delonix regia)</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  {language === 'hi' ? 'रोपक / रक्षक का नाम *' : 'Planter / Guardian *'}
                </label>
                <input
                  type="text"
                  required
                  value={plantedBy}
                  onChange={(e) => setPlantedBy(e.target.value)}
                  placeholder="उदा. अमित त्रिवेदी"
                  className="w-full px-3 py-2 bg-white rounded-xl border border-slate-300 font-medium focus:ring-2 focus:ring-emerald-500/25 focus:border-emerald-600"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  {language === 'hi' ? 'मोबाइल नंबर' : 'Phone'}
                </label>
                <input
                  type="tel"
                  value={guardianPhone}
                  onChange={(e) => setGuardianPhone(e.target.value)}
                  placeholder="98XXXXXXXX"
                  className="w-full px-3 py-2 bg-white rounded-xl border border-slate-300 font-medium focus:ring-2 focus:ring-emerald-500/25 focus:border-emerald-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  {language === 'hi' ? 'जनपद *' : 'District *'}
                </label>
                <select
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-full px-3 py-2 bg-white rounded-xl border border-slate-300 font-medium focus:ring-2 focus:ring-emerald-500/25 focus:border-emerald-600"
                >
                  <option value="लखनऊ">लखनऊ</option>
                  <option value="वाराणसी">वाराणसी</option>
                  <option value="प्रयागराज">प्रयागराज</option>
                  <option value="कानपुर नगर">कानपुर नगर</option>
                  <option value="गोरखपुर">गोरखपुर</option>
                  <option value="मेरठ">मेरठ</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  {language === 'hi' ? 'स्वास्थ्य स्थिति *' : 'Health Status *'}
                </label>
                <select
                  value={healthStatus}
                  onChange={(e) => setHealthStatus(e.target.value as any)}
                  className="w-full px-3 py-2 bg-white rounded-xl border border-slate-300 font-medium focus:ring-2 focus:ring-emerald-500/25 focus:border-emerald-600"
                >
                  <option value="उत्कृष्ट (Healthy)">उत्कृष्ट (Healthy)</option>
                  <option value="सामान्य (Moderate)">सामान्य (Moderate)</option>
                  <option value="देखभाल अपेक्षित (Needs Care)">देखभाल अपेक्षित (Needs Care)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                {language === 'hi' ? 'सटीक स्थान / पार्क / लैंडमार्क *' : 'Exact Location / Landmark *'}
              </label>
              <input
                type="text"
                required
                value={locationName}
                onChange={(e) => setLocationName(e.target.value)}
                placeholder="उदा. प्राथमिक विद्यालय परिसर, वार्ड-१२"
                className="w-full px-3 py-2 bg-white rounded-xl border border-slate-300 font-medium focus:ring-2 focus:ring-emerald-500/25 focus:border-emerald-600"
              />
            </div>

            {/* GPS coordinates readout */}
            <div className="grid grid-cols-2 gap-2 bg-white p-2.5 rounded-xl border border-emerald-100 font-mono text-[11px]">
              <div>
                <span className="text-slate-400 block text-[9px]">LATITUDE (अक्षांश)</span>
                <span className="font-bold text-emerald-900">{latitude}° N</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[9px]">LONGITUDE (देशांतर)</span>
                <span className="font-bold text-emerald-900">{longitude}° E</span>
              </div>
            </div>

            {/* Care details */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block font-bold text-slate-700 mb-1">सिंचाई आवृत्ति:</label>
                <select
                  value={wateringFrequency}
                  onChange={(e) => setWateringFrequency(e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-white rounded-xl border border-slate-300 font-medium"
                >
                  <option value="प्रतिदिन">प्रतिदिन (Daily)</option>
                  <option value="सप्ताह में दो बार">सप्ताह में दो बार</option>
                  <option value="सप्ताह में एक बार">सप्ताह में एक बार</option>
                </select>
              </div>

              <div className="flex flex-col justify-end">
                <label className="flex items-center gap-2 p-2 bg-white rounded-xl border border-slate-200 cursor-pointer font-bold text-slate-700">
                  <input
                    type="checkbox"
                    checked={hasTreeGuard}
                    onChange={(e) => setHasTreeGuard(e.target.checked)}
                    className="accent-emerald-700 w-4 h-4 rounded"
                  />
                  <span>ट्री-गार्ड स्थापित है</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">विशेष टिप्पणी / देखभाल संकल्प:</label>
              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="उदा. सुरक्षित घेरा है, जैविक खाद दी गई।"
                className="w-full px-3 py-2 bg-white rounded-xl border border-slate-300 font-medium"
              />
            </div>

            {isSuccess && (
              <div className="p-2.5 bg-emerald-100 border border-emerald-300 text-emerald-900 rounded-xl text-center font-bold flex items-center justify-center gap-1.5 animate-fadeIn">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>पेड़ सफलता पूर्वक जियो-टैग हुआ!</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5 mt-2"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{language === 'hi' ? 'जियो-टैग पुष्टि करें एवं सहेजें' : 'Save Geo-Tag Record'}</span>
            </button>
          </form>
        </div>

        {/* Right: Live Tagged Trees Directory & Visualization (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <h3 className="text-sm font-black text-emerald-950">
                {language === 'hi' ? 'सत्यापित जियो-टैग्ड वृक्ष सूची' : 'Verified Geo-Tagged Trees Feed'}
              </h3>
              <p className="text-[11px] text-slate-500">
                {geoTrees.length} पेड़ वर्तमान में नागरिक निगरानी में पंजीकृत हैं
              </p>
            </div>

            {/* Filter by district */}
            <select
              value={filterDistrict}
              onChange={(e) => setFilterDistrict(e.target.value)}
              className="text-xs px-2.5 py-1.5 bg-slate-100 border border-slate-300 rounded-xl font-bold text-slate-700"
            >
              <option value="all">सभी जनपद (All Districts)</option>
              <option value="लखनऊ">लखनऊ (Lucknow)</option>
              <option value="वाराणसी">वाराणसी (Varanasi)</option>
              <option value="प्रयागराज">प्रयागराज (Prayagraj)</option>
              <option value="कानपुर">कानपुर (Kanpur)</option>
            </select>
          </div>

          {/* Cards List */}
          <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
            {filteredTrees.map((t) => (
              <div
                key={t.id}
                className="p-4 rounded-2xl border border-slate-200 bg-white hover:border-emerald-300 hover:shadow-xs transition-all text-xs"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="font-mono text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {t.treeNumber}
                    </span>
                    <h4 className="text-sm font-black text-slate-900 mt-1">
                      {t.speciesName}
                    </h4>
                    <p className="text-slate-600 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-emerald-700 shrink-0" />
                      <span>{t.locationName}, <strong className="text-slate-800">{t.district}</strong></span>
                    </p>
                  </div>

                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
                    t.healthStatus.includes('Healthy') || t.healthStatus.includes('उत्कृष्ट')
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                      : 'bg-amber-100 text-amber-800 border border-amber-200'
                  }`}>
                    {t.healthStatus}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3 pt-2.5 border-t border-slate-100 text-[11px]">
                  <div>
                    <span className="text-slate-400 block text-[10px]">पेड़ रक्षक / अभिभावक:</span>
                    <span className="font-bold text-slate-800">{t.plantedBy}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">रोपण तिथि:</span>
                    <span className="font-semibold text-slate-700">{t.datePlanted}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">जीपीएस स्थिति:</span>
                    <span className="font-mono font-medium text-emerald-900 text-[10px]">
                      {t.latitude}°N, {t.longitude}°E
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">सुरक्षा स्थिति:</span>
                    <span className="font-bold text-slate-800">
                      {t.hasTreeGuard ? '✓ ट्री-गार्ड युक्त' : 'बिना गार्ड'}
                    </span>
                  </div>
                </div>

                {t.notes && (
                  <p className="mt-2 text-[11px] text-slate-500 italic bg-slate-50 p-2 rounded-lg">
                    "{t.notes}"
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
