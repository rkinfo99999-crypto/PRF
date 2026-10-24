import React, { useState } from 'react';
import { Building2, Search, MapPin, Phone, Clock, ArrowLeft, Sprout, ExternalLink } from 'lucide-react';
import { Language, Nursery } from '../../types';
import { GOVT_NURSERIES } from '../../data/portalData';

interface NurseryLocatorProps {
  language: Language;
  onBack: () => void;
  onRequestFromNursery: (nurseryName: string) => void;
}

export const NurseryLocator: React.FC<NurseryLocatorProps> = ({
  language,
  onBack,
  onRequestFromNursery,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('all');

  const filtered = GOVT_NURSERIES.filter((n) => {
    const matchSearch =
      n.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      n.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      n.popularSpecies.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchDistrict =
      selectedDistrict === 'all' || n.district.toLowerCase().includes(selectedDistrict.toLowerCase());

    return matchSearch && matchDistrict;
  });

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
          {language === 'hi' ? 'शासकीय वन पौधशाला निर्देशिका' : 'Forest Department Nursery Directory'}
        </span>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-black text-emerald-950 flex items-center gap-2">
          <Building2 className="w-6 h-6 text-emerald-700" />
          <span>{language === 'hi' ? 'शासकीय पौधशाला एवं वितरण केंद्र खोजक' : 'Government Nursery Locator'}</span>
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          {language === 'hi'
            ? 'अपने निकटतम वन विभाग पौधशाला से निःशुल्क अथवा रियायती दर पर उन्नत पौधे प्राप्त करने हेतु केंद्र संपर्क एवं स्टॉक स्थिति देखें।'
            : 'Explore state forest nurseries, verify sapling stock availability, timings, and contact officials.'}
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center gap-3 mb-6 bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={language === 'hi' ? 'नर्सरी का नाम, प्रजाति (नीम, पीपल) अथवा सड़क खोजें...' : 'Search by nursery, species or area...'}
            className="w-full pl-9 pr-4 py-2 text-xs bg-white rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
          />
        </div>

        <div className="w-full sm:w-auto">
          <select
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
            className="w-full sm:w-56 px-3 py-2 text-xs bg-white rounded-xl border border-slate-300 font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="all">सभी जनपद (All Districts)</option>
            <option value="lucknow">लखनऊ (Lucknow)</option>
            <option value="varanasi">वाराणसी (Varanasi)</option>
            <option value="prayagraj">प्रयागराज (Prayagraj)</option>
            <option value="kanpur">कानपुर (Kanpur)</option>
            <option value="gorakhpur">गोरखपुर (Gorakhpur)</option>
            <option value="meerut">मेरठ (Meerut)</option>
          </select>
        </div>
      </div>

      {/* Nurseries Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((n) => (
          <div
            key={n.id}
            className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2">
                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {n.district}
                </span>
                <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                  {n.availableSaplings.toLocaleString('en-IN')} पौधे उपलब्ध
                </span>
              </div>

              <h3 className="text-sm font-black text-emerald-950 mt-2 leading-tight">
                {n.name}
              </h3>

              <p className="text-xs text-slate-600 flex items-start gap-1.5 mt-2 leading-relaxed">
                <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                <span>{n.address}</span>
              </p>

              <div className="mt-3 space-y-1.5 text-[11px] bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <p className="flex items-center gap-1.5 text-slate-700 font-semibold">
                  <Phone className="w-3 h-3 text-emerald-700" />
                  <span>{n.contactPerson}: <strong>{n.phone}</strong></span>
                </p>
                <p className="flex items-center gap-1.5 text-slate-500">
                  <Clock className="w-3 h-3 text-slate-400" />
                  <span>{n.timings}</span>
                </p>
              </div>

              {/* Popular species chips */}
              <div className="mt-3">
                <span className="text-[10px] font-bold text-slate-400 block mb-1">उपलब्ध मुख्य प्रजातियां:</span>
                <div className="flex flex-wrap gap-1">
                  {n.popularSpecies.map((sp, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-bold text-emerald-900 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60"
                    >
                      {sp}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
              <a
                href={`tel:${n.phone.replace(/[^0-9+]/g, '')}`}
                className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1"
              >
                <Phone className="w-3 h-3" />
                <span>कॉल करें</span>
              </a>

              <button
                type="button"
                onClick={() => onRequestFromNursery(n.name)}
                className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition-all cursor-pointer shadow-2xs"
              >
                यहाँ से पौधा मांगें
              </button>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="col-span-full p-8 text-center bg-slate-50 rounded-2xl border border-slate-200 text-slate-500 text-xs">
            आपके खोज अनुसार कोई पौधशाला नहीं मिली। कृपया भिन्न खोज शब्द चुनें।
          </div>
        )}
      </div>
    </div>
  );
};
