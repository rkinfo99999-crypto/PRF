import React, { useState, useEffect } from 'react';
import { ShieldCheck, RefreshCw, Trees, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface CaptchaModalProps {
  onVerified: () => void;
  language: Language;
}

export const CaptchaModal: React.FC<CaptchaModalProps> = ({ onVerified, language }) => {
  const [num1, setNum1] = useState(7);
  const [num2, setNum2] = useState(8);
  const [userAnswer, setUserAnswer] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const generateNewMath = () => {
    const a = Math.floor(Math.random() * 12) + 5;
    const b = Math.floor(Math.random() * 9) + 3;
    setNum1(a);
    setNum2(b);
    setUserAnswer('');
    setErrorMsg('');
  };

  useEffect(() => {
    generateNewMath();
  }, []);

  const handleVerify = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const expected = num1 + num2;
    const parsed = parseInt(userAnswer.trim(), 10);

    if (isNaN(parsed)) {
      setErrorMsg(language === 'hi' ? 'कृपया सही संख्यात्मक उत्तर दर्ज करें।' : 'Please enter a valid numeric answer.');
      triggerShake();
      return;
    }

    if (parsed === expected) {
      setIsSuccess(true);
      setErrorMsg('');
      setTimeout(() => {
        onVerified();
      }, 700);
    } else {
      setErrorMsg(language === 'hi' ? 'गलत उत्तर! कृपया पुनः प्रयास करें।' : 'Incorrect answer! Please try again.');
      triggerShake();
    }
  };

  const triggerShake = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gradient-to-br from-emerald-900/40 via-emerald-950/70 to-slate-950/80 backdrop-blur-md">
      <div 
        className={`w-full max-w-md bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-emerald-100 transition-all duration-300 ${
          isShaking ? 'animate-[shake_0.4s_ease-in-out]' : ''
        }`}
      >
        {/* Emblem Logo */}
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full bg-emerald-50 border-4 border-emerald-200/80 flex items-center justify-center shadow-inner mb-4 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-200/40 to-transparent pointer-events-none"></div>
            <Trees className="w-12 h-12 text-emerald-700 transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute bottom-1 text-[9px] font-bold text-emerald-800 tracking-wider">UP-FOREST</span>
          </div>

          <h2 className="text-2xl font-extrabold text-emerald-900 leading-tight">
            सेवा मित्र पेड़ रक्षक
            <span className="block text-emerald-700 text-lg font-bold mt-0.5">
              Advanced Green Citizen Portal
            </span>
          </h2>

          <p className="text-xs text-slate-500 mt-1 max-w-xs leading-relaxed">
            {language === 'hi'
              ? 'वृक्ष संरक्षण, निःशुल्क पौध वितरण एवं हरित निगरानी का आधिकारिक राज्यीय पोर्टल'
              : 'Official State Portal for Tree Protection, Sapling Distribution & Geo-Monitoring'}
          </p>

          {/* Security Tag */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 mt-3.5 mb-4 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold tracking-wide">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>सुरक्षा एवं मानवीय सत्यापन | SECURE HUMAN VERIFY</span>
          </div>
        </div>

        {/* Captcha Challenge Form */}
        <form onSubmit={handleVerify} className="space-y-4">
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 text-center relative">
            <div className="flex items-center justify-between mb-1.5 px-1">
              <span className="text-xs font-semibold text-slate-500">
                {language === 'hi' ? 'गणितीय सुरक्षा प्रश्न हल करें:' : 'Solve simple math check:'}
              </span>
              <button
                type="button"
                onClick={generateNewMath}
                className="text-xs text-emerald-700 hover:text-emerald-800 flex items-center gap-1 font-semibold transition-colors"
                title="नया प्रश्न लोड करें"
              >
                <RefreshCw className="w-3 h-3" />
                <span>बदलें</span>
              </button>
            </div>

            <div className="py-2.5 bg-white border border-emerald-100 rounded-xl shadow-xs">
              <span className="text-3xl font-black text-emerald-900 tracking-widest font-mono">
                {num1} + {num2} = ?
              </span>
            </div>

            <div className="mt-3">
              <input
                type="number"
                inputMode="numeric"
                value={userAnswer}
                onChange={(e) => {
                  setUserAnswer(e.target.value);
                  if (errorMsg) setErrorMsg('');
                }}
                placeholder={language === 'hi' ? 'यहाँ उत्तर लिखें...' : 'Enter sum here...'}
                className="w-full px-4 py-3 text-center text-xl font-bold rounded-xl border border-slate-300 focus:outline-none focus:ring-3 focus:ring-emerald-500/25 focus:border-emerald-600 transition-all bg-white text-slate-800 placeholder:text-slate-400 placeholder:text-sm"
                autoFocus
              />
            </div>
          </div>

          {/* Error / Success message */}
          <div className="min-h-5 text-center text-xs font-semibold">
            {errorMsg && (
              <p className="text-rose-600 flex items-center justify-center gap-1 animate-fadeIn">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errorMsg}</span>
              </p>
            )}
            {isSuccess && (
              <p className="text-emerald-700 flex items-center justify-center gap-1 font-bold animate-fadeIn">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>सत्यापन सफल! पोर्टल लोड हो रहा है...</span>
              </p>
            )}
          </div>

          {/* Verify Button */}
          <button
            type="submit"
            disabled={isSuccess}
            className={`w-full py-3.5 px-6 rounded-xl text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer ${
              isSuccess 
                ? 'bg-emerald-600 opacity-90' 
                : 'bg-gradient-to-r from-emerald-800 via-emerald-700 to-green-600 hover:from-emerald-900 hover:to-green-700 active:scale-[0.99] hover:shadow-lg hover:shadow-emerald-900/20'
            }`}
          >
            <span>{language === 'hi' ? 'सत्यापित करें एवं प्रवेश करें' : 'Verify & Enter Portal'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Quick Demo Skip Option */}
        <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>सुरक्षित डिजिटल पर्यावरण मंच</span>
          <button
            type="button"
            onClick={() => onVerified()}
            className="text-emerald-700 hover:text-emerald-900 font-bold underline cursor-pointer"
          >
            {language === 'hi' ? 'डेमो हेतु सीधे प्रवेश करें ›' : 'Skip Verification for Demo ›'}
          </button>
        </div>
      </div>
    </div>
  );
};
