import React, { useState } from 'react';
import { AlertTriangle, ShieldAlert, CheckCircle2, Search, ArrowLeft, Phone, User, Clock, FileText } from 'lucide-react';
import { Language, TreeComplaint } from '../../types';

interface TreeComplaintModalProps {
  language: Language;
  onBack: () => void;
  complaints: TreeComplaint[];
  onAddComplaint: (comp: TreeComplaint) => void;
}

export const TreeComplaintModal: React.FC<TreeComplaintModalProps> = ({
  language,
  onBack,
  complaints,
  onAddComplaint,
}) => {
  const [complainantName, setComplainantName] = useState('');
  const [phone, setPhone] = useState('');
  const [district, setDistrict] = useState('लखनऊ');
  const [landmark, setLandmark] = useState('');
  const [category, setCategory] = useState<TreeComplaint['category']>('अवैध पेड़ कटाई');
  const [urgency, setUrgency] = useState<TreeComplaint['urgency']>('अति-आवश्यक (Critical)');
  const [description, setDescription] = useState('');
  const [searchTicket, setSearchTicket] = useState('');
  const [submittedTicket, setSubmittedTicket] = useState<TreeComplaint | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!complainantName.trim() || !phone.trim() || !landmark.trim() || !description.trim()) {
      alert(language === 'hi' ? 'कृपया सभी आवश्यक फ़ील्ड भरें।' : 'Please fill all required fields.');
      return;
    }

    const newTicket: TreeComplaint = {
      id: `cmp-${Date.now()}`,
      ticketNumber: `PR-COMP-2026-00${Math.floor(100 + Math.random() * 900)}`,
      complainantName,
      phone,
      district,
      landmark,
      category,
      urgency,
      description,
      reportedDate: new Date().toLocaleDateString('hi-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
      status: 'शिकायत दर्ज',
      assignedOfficer: 'वन क्षेत्राधिकारी सचल दल (Flying Squad)',
      officerContact: '1800-180-TREE (Ext: 1926)'
    };

    onAddComplaint(newTicket);
    setSubmittedTicket(newTicket);
    setComplainantName('');
    setPhone('');
    setLandmark('');
    setDescription('');
  };

  const searchedComplaints = searchTicket.trim()
    ? complaints.filter(c => c.ticketNumber.toLowerCase().includes(searchTicket.trim().toLowerCase()) || c.district.includes(searchTicket))
    : complaints;

  return (
    <div className="bg-white rounded-3xl border border-rose-100 p-6 sm:p-8 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-emerald-800 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{language === 'hi' ? 'पोर्टल पर वापस' : 'Back to Portal'}</span>
        </button>

        <span className="text-xs font-bold text-rose-800 bg-rose-50 border border-rose-200 px-3 py-1 rounded-full flex items-center gap-1.5">
          <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
          <span>{language === 'hi' ? 'आपातकालीन वृक्ष संरक्षण डेस्क' : 'Emergency Tree Protection Desk'}</span>
        </span>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-rose-600" />
          <span>{language === 'hi' ? 'अवैध पेड़ कटाई एवं वृक्ष क्षति शिकायत निवारण' : 'Report Tree Felling & Tree Hazard Redressal'}</span>
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          {language === 'hi'
            ? 'वृक्ष संरक्षण अधिनियम १९७६ के अंतर्गत किसी भी हरे पेड़ की अनाधिकृत कटाई गैर-कानूनी है। तत्काल जांच व कार्रवाई हेतु शिकायत दर्ज करें।'
            : 'Unauthorized cutting of green trees is strictly prohibited under Tree Protection Act 1976. File instant report for rapid inspection.'}
        </p>
      </div>

      {submittedTicket && (
        <div className="mb-8 p-6 bg-rose-50/70 border-2 border-rose-500 rounded-3xl animate-fadeIn">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
              <div>
                <h3 className="text-base font-black text-rose-950">
                  शिकायत सफलतापूर्वक दर्ज! शिकायत क्रमांक (Ticket ID):
                </h3>
                <span className="text-xl font-mono font-black text-rose-700">{submittedTicket.ticketNumber}</span>
              </div>
            </div>
            <button
              onClick={() => setSubmittedTicket(null)}
              className="text-xs text-slate-400 hover:text-slate-700 font-bold"
            >
              ✕ बंद करें
            </button>
          </div>
          <p className="text-xs text-slate-600 mt-2">
            संबंधित जनपद ({submittedTicket.district}) के वन दरोगा एवं सचल दस्ते को सूचना प्रेषित कर दी गई है। आप नीचे दिए गए खोज बॉक्स में टिकट नंबर डालकर स्थिति ट्रैक कर सकते हैं।
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Complaint Form (5 cols) */}
        <div className="lg:col-span-5 bg-slate-50 p-5 rounded-2xl border border-slate-200">
          <h3 className="text-sm font-black text-slate-900 mb-3 flex items-center gap-1.5">
            <FileText className="w-4 h-4 text-rose-600" />
            <span>{language === 'hi' ? 'नई शिकायत दर्ज करें' : 'File New Grievance'}</span>
          </h3>

          <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">
                {language === 'hi' ? 'शिकायत की श्रेणी *' : 'Grievance Category *'}
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="w-full px-3 py-2 bg-white rounded-xl border border-slate-300 font-semibold text-slate-800 focus:ring-2 focus:ring-rose-500/25 focus:border-rose-600"
              >
                <option value="अवैध पेड़ कटाई">अवैध पेड़ कटाई (Illegal Tree Cutting)</option>
                <option value="पेड़ गिरने का जोखिम">पेड़ गिरने का जोखिम (Hazard of Falling)</option>
                <option value="तार / खंभा अवरोध">तार / खंभा अवरोध (Electric Wire Obstruction)</option>
                <option value="सूखा / रोगग्रस्त वृक्ष">सूखा / रोगग्रस्त वृक्ष (Dead or Diseased Tree)</option>
                <option value="आग अथवा क्षति">आग अथवा क्षति (Fire or Physical Damage)</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  {language === 'hi' ? 'प्राथमिकता स्तर *' : 'Urgency Level *'}
                </label>
                <select
                  value={urgency}
                  onChange={(e) => setUrgency(e.target.value as any)}
                  className="w-full px-3 py-2 bg-white rounded-xl border border-slate-300 font-semibold text-slate-800"
                >
                  <option value="अति-आवश्यक (Critical)">अति-आवश्यक (Critical)</option>
                  <option value="मध्यम (Moderate)">मध्यम (Moderate)</option>
                  <option value="सामान्य (Routine)">सामान्य (Routine)</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  {language === 'hi' ? 'जनपद *' : 'District *'}
                </label>
                <select
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-full px-3 py-2 bg-white rounded-xl border border-slate-300 font-semibold text-slate-800"
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

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  {language === 'hi' ? 'शिकायतकर्ता का नाम *' : 'Complainant Name *'}
                </label>
                <input
                  type="text"
                  required
                  value={complainantName}
                  onChange={(e) => setComplainantName(e.target.value)}
                  placeholder="उदा. सुनील वर्मा"
                  className="w-full px-3 py-2 bg-white rounded-xl border border-slate-300 font-medium"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  {language === 'hi' ? 'मोबाइल नंबर *' : 'Contact Phone *'}
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="98XXXXXXXX"
                  className="w-full px-3 py-2 bg-white rounded-xl border border-slate-300 font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                {language === 'hi' ? 'पेड़ का सटीक स्थान एवं लैंडमार्क *' : 'Exact Location & Landmark *'}
              </label>
              <input
                type="text"
                required
                value={landmark}
                onChange={(e) => setLandmark(e.target.value)}
                placeholder="सड़क का नाम, निकटतम भवन या खंभा संख्या..."
                className="w-full px-3 py-2 bg-white rounded-xl border border-slate-300 font-medium"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                {language === 'hi' ? 'घटना का विवरण *' : 'Incident Details *'}
              </label>
              <textarea
                rows={3}
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="पेड़ की स्थिति, कटाई का विवरण अथवा तात्कालिक खतरे का संक्षिप्त विवरण..."
                className="w-full px-3 py-2 bg-white rounded-xl border border-slate-300 font-medium"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-rose-700 hover:bg-rose-800 text-white font-extrabold rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              <AlertTriangle className="w-4 h-4" />
              <span>{language === 'hi' ? 'आपातकालीन शिकायत प्रेषित करें' : 'Submit Emergency Report'}</span>
            </button>
          </form>
        </div>

        {/* Right: Grievance Tracker & Status Pipeline (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <h3 className="text-sm font-black text-slate-900">
                {language === 'hi' ? 'दर्ज शिकायतों की लाइव स्थिति' : 'Active Grievance Redressal Tracker'}
              </h3>
              <p className="text-[11px] text-slate-500">
                नागरिकों द्वारा दर्ज मामलों की पारदर्शी प्रगति
              </p>
            </div>

            {/* Ticket Search */}
            <div className="relative">
              <input
                type="text"
                value={searchTicket}
                onChange={(e) => setSearchTicket(e.target.value)}
                placeholder="टिकट संख्या खोजें..."
                className="text-xs pl-8 pr-3 py-1.5 bg-slate-100 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium w-48"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
            </div>
          </div>

          {/* Grievance list */}
          <div className="space-y-3 max-h-[520px] overflow-y-auto pr-1">
            {searchedComplaints.map((c) => {
              const statusColor =
                c.status === 'निस्तारित'
                  ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                  : c.status === 'कार्य प्रगति पर'
                  ? 'bg-amber-100 text-amber-800 border-amber-300'
                  : 'bg-rose-100 text-rose-800 border-rose-300';

              return (
                <div
                  key={c.id}
                  className="p-4 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs transition-all text-xs"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                          {c.ticketNumber}
                        </span>
                        <span className="text-[10px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                          {c.category}
                        </span>
                      </div>
                      <h4 className="text-xs font-bold text-slate-900 mt-1">
                        {c.landmark}, <span className="text-emerald-800">{c.district}</span>
                      </h4>
                    </div>

                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border shrink-0 ${statusColor}`}>
                      {c.status}
                    </span>
                  </div>

                  <p className="mt-2 text-[11px] text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    "{c.description}"
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-3 pt-2.5 border-t border-slate-100 text-[10px]">
                    <div>
                      <span className="text-slate-400 block">दर्ज तिथि:</span>
                      <span className="font-semibold text-slate-700">{c.reportedDate}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">प्राथमिकता:</span>
                      <span className="font-bold text-rose-800">{c.urgency}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">प्रभारी वन अधिकारी:</span>
                      <span className="font-bold text-slate-800 truncate block">{c.assignedOfficer}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
