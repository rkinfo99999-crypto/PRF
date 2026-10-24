import React, { useState } from 'react';
import { Sprout, CheckCircle2, Building2, MapPin, Printer, ArrowLeft, Info, Droplets, Wind } from 'lucide-react';
import { Language, SaplingRequest, TreeSpecies } from '../../types';
import { TREE_SPECIES, GOVT_NURSERIES } from '../../data/portalData';

interface SaplingRequestModalProps {
  language: Language;
  onBack: () => void;
  onSubmitRequest: (req: SaplingRequest) => void;
}

export const SaplingRequestModal: React.FC<SaplingRequestModalProps> = ({
  language,
  onBack,
  onSubmitRequest,
}) => {
  const [selectedSpecies, setSelectedSpecies] = useState<TreeSpecies>(TREE_SPECIES[0]);
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'medicinal' | 'shade' | 'fruit' | 'timber'>('all');
  const [quantity, setQuantity] = useState(2);
  const [applicantName, setApplicantName] = useState('');
  const [phone, setPhone] = useState('');
  const [district, setDistrict] = useState('लखनऊ (Lucknow)');
  const [address, setAddress] = useState('');
  const [purpose, setPurpose] = useState('घरेलू वाटिका एवं पर्यावरण (Homestead Garden)');
  const [selectedNursery, setSelectedNursery] = useState(GOVT_NURSERIES[0].name);
  const [deliveryType, setDeliveryType] = useState<'nursery_pickup' | 'home_delivery'>('nursery_pickup');
  const [submittedReceipt, setSubmittedReceipt] = useState<SaplingRequest | null>(null);

  const filteredSpecies = categoryFilter === 'all' 
    ? TREE_SPECIES 
    : TREE_SPECIES.filter(s => s.category === categoryFilter);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName.trim() || !phone.trim() || !address.trim()) {
      alert(language === 'hi' ? 'कृपया सभी अनिवार्य विवरण भरें।' : 'Please fill all required fields.');
      return;
    }

    const newRequest: SaplingRequest = {
      id: `PR-SAP-${Date.now().toString().slice(-6)}`,
      applicantName,
      phone,
      district,
      address,
      speciesId: selectedSpecies.nameHi,
      quantity,
      purpose,
      deliveryType,
      selectedNursery,
      date: new Date().toLocaleDateString('hi-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
      status: 'स्वीकृत'
    };

    onSubmitRequest(newRequest);
    setSubmittedReceipt(newRequest);
  };

  return (
    <div className="bg-white rounded-3xl border border-emerald-100 p-6 sm:p-8 shadow-sm">
      {/* Header with Back button */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-emerald-800 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{language === 'hi' ? 'पोर्टल पर वापस' : 'Back to Portal'}</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
            {language === 'hi' ? 'निःशुल्क पौध वितरण योजना' : 'Free Sapling Distribution'}
          </span>
        </div>
      </div>

      {!submittedReceipt ? (
        <div>
          <div className="mb-6">
            <h2 className="text-2xl font-black text-emerald-950 flex items-center gap-2">
              <Sprout className="w-6 h-6 text-emerald-700" />
              <span>{language === 'hi' ? 'पौधा आवंटन एवं वितरण अनुरोध' : 'Apply for Sapling Allocation'}</span>
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              {language === 'hi'
                ? 'अपनी भूमि, विद्यालय, संस्थान अथवा सार्वजनिक स्थल हेतु उपयुक्त स्वदेशी पौधे चुनें तथा निकटतम पौधशाला से प्राप्त करें।'
                : 'Select resilient native indigenous saplings for your home, school, institution, or community.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Species Selection (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs font-bold text-slate-700">
                  {language === 'hi' ? '१. वृक्ष प्रजाति का चयन करें:' : '1. Choose Tree Species:'}
                </span>

                {/* Filter Tabs */}
                <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl text-[11px] font-bold">
                  <button
                    type="button"
                    onClick={() => setCategoryFilter('all')}
                    className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                      categoryFilter === 'all' ? 'bg-white text-emerald-900 shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    {language === 'hi' ? 'सभी' : 'All'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setCategoryFilter('medicinal')}
                    className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                      categoryFilter === 'medicinal' ? 'bg-white text-emerald-900 shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    {language === 'hi' ? 'औषधीय' : 'Medicinal'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setCategoryFilter('shade')}
                    className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                      categoryFilter === 'shade' ? 'bg-white text-emerald-900 shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    {language === 'hi' ? 'छायादार' : 'Shade'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setCategoryFilter('fruit')}
                    className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                      categoryFilter === 'fruit' ? 'bg-white text-emerald-900 shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    {language === 'hi' ? 'फलदार' : 'Fruit'}
                  </button>
                </div>
              </div>

              {/* Species Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {filteredSpecies.map((sp) => {
                  const isSelected = selectedSpecies.id === sp.id;
                  return (
                    <button
                      key={sp.id}
                      type="button"
                      onClick={() => setSelectedSpecies(sp)}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer relative ${
                        isSelected
                          ? 'border-emerald-700 bg-emerald-50/80 ring-2 ring-emerald-600/30 shadow-xs'
                          : 'border-slate-200 bg-white hover:border-emerald-300 hover:bg-slate-50'
                      }`}
                    >
                      <span className="text-2xl block mb-1">{sp.image}</span>
                      <p className="text-xs font-black text-emerald-950 leading-tight">
                        {language === 'hi' ? sp.nameHi : sp.nameEn}
                      </p>
                      <p className="text-[10px] text-slate-500 italic truncate mt-0.5">
                        {sp.scientificName}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Selected Species Detail Card */}
              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/90 text-xs">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-black text-emerald-950 flex items-center gap-1.5">
                      <span>{selectedSpecies.image}</span>
                      <span>{language === 'hi' ? selectedSpecies.nameHi : selectedSpecies.nameEn}</span>
                      <span className="text-xs font-normal text-slate-500 italic">({selectedSpecies.scientificName})</span>
                    </h3>
                    <p className="text-slate-600 mt-1 leading-relaxed">
                      {language === 'hi' ? selectedSpecies.descriptionHi : selectedSpecies.descriptionEn}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3 pt-3 border-t border-emerald-200/60 text-[11px]">
                  <div>
                    <span className="text-slate-500 flex items-center gap-1">
                      <Wind className="w-3 h-3 text-emerald-700" />
                      ऑक्सीजन स्तर:
                    </span>
                    <span className="font-bold text-emerald-900">{'★'.repeat(selectedSpecies.oxygenRating)} ({selectedSpecies.oxygenRating}/5)</span>
                  </div>
                  <div>
                    <span className="text-slate-500 flex items-center gap-1">
                      <Droplets className="w-3 h-3 text-cyan-600" />
                      जल आवश्यकता:
                    </span>
                    <span className="font-bold text-slate-800">{language === 'hi' ? selectedSpecies.waterNeedHi : selectedSpecies.waterNeedEn}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">औसत आयु:</span>
                    <span className="font-bold text-slate-800 block">{selectedSpecies.lifespanYears}+ वर्ष</span>
                  </div>
                  <div>
                    <span className="text-slate-500">उत्तम रोपण काल:</span>
                    <span className="font-bold text-slate-800 block truncate">{selectedSpecies.bestSeason}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Citizen Requisition Form (5 cols) */}
            <div className="lg:col-span-5 bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <h3 className="text-sm font-black text-emerald-950 mb-3">
                {language === 'hi' ? '२. आवेदक एवं वितरण विवरण:' : '2. Applicant & Delivery Details:'}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    {language === 'hi' ? 'आवेदक का पूरा नाम *' : 'Applicant Full Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="उदा. राहुल शर्मा"
                    className="w-full px-3 py-2 bg-white rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-emerald-600 font-medium"
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
                      className="w-full px-3 py-2 bg-white rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-emerald-600 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      {language === 'hi' ? 'पौधों की संख्या *' : 'Sapling Quantity *'}
                    </label>
                    <select
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      className="w-full px-3 py-2 bg-white rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-emerald-600 font-medium"
                    >
                      <option value={1}>1 पौधा</option>
                      <option value={2}>2 पौधे</option>
                      <option value={5}>5 पौधे</option>
                      <option value={10}>10 पौधे (सामुदायिक)</option>
                      <option value={25}>25 पौधे (संस्थान)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    {language === 'hi' ? 'जनपद (District) *' : 'District *'}
                  </label>
                  <select
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full px-3 py-2 bg-white rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-emerald-600 font-medium"
                  >
                    <option value="लखनऊ (Lucknow)">लखनऊ (Lucknow)</option>
                    <option value="वाराणसी (Varanasi)">वाराणसी (Varanasi)</option>
                    <option value="प्रयागराज (Prayagraj)">प्रयागराज (Prayagraj)</option>
                    <option value="कानपुर नगर (Kanpur)">कानपुर नगर (Kanpur)</option>
                    <option value="गोरखपुर (Gorakhpur)">गोरखपुर (Gorakhpur)</option>
                    <option value="मेरठ (Meerut)">मेरठ (Meerut)</option>
                    <option value="आगरा (Agra)">आगरा (Agra)</option>
                    <option value="अयोध्या (Ayodhya)">अयोध्या (Ayodhya)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    {language === 'hi' ? 'पूरा पता व लैंडमार्क *' : 'Full Address & Landmark *'}
                  </label>
                  <textarea
                    rows={2}
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="मकान संख्या, मोहल्ला / ग्राम, वार्ड..."
                    className="w-full px-3 py-2 bg-white rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-emerald-600 font-medium"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    {language === 'hi' ? 'रोपण का उद्देश्य:' : 'Plantation Purpose:'}
                  </label>
                  <select
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                    className="w-full px-3 py-2 bg-white rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-emerald-600 font-medium"
                  >
                    <option value="घरेलू वाटिका एवं पर्यावरण (Homestead Garden)">घरेलू वाटिका एवं पर्यावरण (Homestead)</option>
                    <option value="एक पेड़ मां के नाम महाभियान (Memorial)">एक पेड़ मां के नाम महाभियान (Memorial)</option>
                    <option value="विद्यालय / शैक्षणिक परिसर (School / College)">विद्यालय / शैक्षणिक परिसर (School / College)</option>
                    <option value="सार्वजनिक पार्क व ग्राम चौपाल (Community)">सार्वजनिक पार्क व ग्राम चौपाल (Community)</option>
                    <option value="सड़क किनारे व खेत की मेड़ (Agro-Forestry)">सड़क किनारे व खेत की मेड़ (Agro-Forestry)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    {language === 'hi' ? 'वितरण का माध्यम:' : 'Delivery / Collection Mode:'}
                  </label>
                  <div className="grid grid-cols-2 gap-2 mt-1">
                    <button
                      type="button"
                      onClick={() => setDeliveryType('nursery_pickup')}
                      className={`p-2 rounded-xl border text-center font-bold cursor-pointer transition-colors ${
                        deliveryType === 'nursery_pickup'
                          ? 'bg-emerald-100/90 text-emerald-900 border-emerald-500'
                          : 'bg-white text-slate-600 border-slate-200'
                      }`}
                    >
                      शासकीय नर्सरी से स्वयं लें
                    </button>
                    <button
                      type="button"
                      onClick={() => setDeliveryType('home_delivery')}
                      className={`p-2 rounded-xl border text-center font-bold cursor-pointer transition-colors ${
                        deliveryType === 'home_delivery'
                          ? 'bg-emerald-100/90 text-emerald-900 border-emerald-500'
                          : 'bg-white text-slate-600 border-slate-200'
                      }`}
                    >
                      सेवा मित्र होम डिलीवरी
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    {language === 'hi' ? 'निकटतम संग्रह नर्सरी केंद्र:' : 'Collection Nursery Center:'}
                  </label>
                  <select
                    value={selectedNursery}
                    onChange={(e) => setSelectedNursery(e.target.value)}
                    className="w-full px-3 py-2 bg-white rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-emerald-600 font-medium"
                  >
                    {GOVT_NURSERIES.map((n) => (
                      <option key={n.id} value={n.name}>
                        {n.name} ({n.district})
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-black rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{language === 'hi' ? 'पौधा आवंटन पर्ची जारी करें' : 'Generate Sapling Slip'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        /* Generated Official Application Slip */
        <div className="max-w-2xl mx-auto p-6 sm:p-8 bg-emerald-50/40 border-2 border-emerald-600 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-emerald-800 via-green-600 to-emerald-800"></div>

          <div className="text-center pb-4 border-b border-emerald-200">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-900 rounded-full text-xs font-bold mb-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>आवंटन स्वीकृत | APPLICATION APPROVED</span>
            </div>
            <h3 className="text-xl font-black text-emerald-950">
              सेवा मित्र पेड़ रक्षक - निःशुल्क पौधा आवंटन पर्ची
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              पर्यावरण, वन एवं जलवायु परिवर्तन विभाग, उत्तर प्रदेश
            </p>
          </div>

          <div className="py-4 space-y-3 text-xs border-b border-emerald-200">
            <div className="flex justify-between items-center bg-white p-3 rounded-xl border border-emerald-100">
              <span className="font-semibold text-slate-500">आवेदन संदर्भ संख्या (Tracking ID):</span>
              <span className="text-base font-black text-emerald-900 font-mono">{submittedReceipt.id}</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <span className="text-slate-500 block">आवेदक का नाम:</span>
                <span className="font-bold text-slate-900 text-sm">{submittedReceipt.applicantName}</span>
              </div>
              <div>
                <span className="text-slate-500 block">मोबाइल नंबर:</span>
                <span className="font-bold text-slate-900 text-sm">{submittedReceipt.phone}</span>
              </div>
              <div>
                <span className="text-slate-500 block">आवंटित वृक्ष प्रजाति:</span>
                <span className="font-bold text-emerald-800 text-sm">{submittedReceipt.speciesId}</span>
              </div>
              <div>
                <span className="text-slate-500 block">स्वीकृत संख्या:</span>
                <span className="font-bold text-emerald-800 text-sm">{submittedReceipt.quantity} पौधे (निःशुल्क)</span>
              </div>
              <div>
                <span className="text-slate-500 block">संग्रह केंद्र / नर्सरी:</span>
                <span className="font-bold text-slate-900">{submittedReceipt.selectedNursery}</span>
              </div>
              <div>
                <span className="text-slate-500 block">वितरण माध्यम:</span>
                <span className="font-bold text-slate-900">
                  {submittedReceipt.deliveryType === 'nursery_pickup' ? 'नर्सरी से स्वयं संग्रह' : 'सेवा मित्र होम डिलीवरी'}
                </span>
              </div>
            </div>

            <div className="bg-white p-3 rounded-xl border border-slate-200 mt-2">
              <span className="text-slate-500 block">रोपण स्थल व पता:</span>
              <span className="font-medium text-slate-800">{submittedReceipt.address}, {submittedReceipt.district}</span>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-[11px] text-slate-500 italic max-w-sm">
              * यह पर्ची दिखाकर संबंधित पौधशाला से प्रातः ०९:०० से सायं ०४:०० बजे के मध्य पौधे प्राप्त कर सकते हैं।
            </p>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => window.print()}
                className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white font-bold rounded-xl flex items-center gap-1.5 cursor-pointer text-xs"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>प्रिंट / सुरक्षित करें</span>
              </button>
              <button
                type="button"
                onClick={() => setSubmittedReceipt(null)}
                className="px-4 py-2 bg-white border border-slate-300 text-slate-700 font-bold rounded-xl hover:bg-slate-50 cursor-pointer text-xs"
              >
                नया आवेदन करें
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
