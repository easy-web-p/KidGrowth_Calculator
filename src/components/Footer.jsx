import React from 'react';
import { HeartPulse, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 px-4 sm:px-6 border-t border-slate-800 text-center text-xs">
      <div className="max-w-4xl mx-auto space-y-3">
        <div className="flex items-center justify-center gap-2 text-white font-bold text-base">
          <HeartPulse className="w-5 h-5 text-emerald-500" />
          <span>KidGrowth Calculator</span>
        </div>
        <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
          อ้างอิงสูตรคำนวณส่วนสูงพันธุกรรม (Mid-Parental Height) และตารางเกณฑ์มาตรฐานการเจริญเติบโตของเด็ก องค์การอนามัยโลก (WHO)
        </p>
        <div className="pt-3 border-t border-slate-800/80 text-slate-500 flex items-center justify-center gap-1">
          <span>© 2026 KidGrowth Calculator. Developed for parents & child health tracking.</span>
        </div>
      </div>
    </footer>
  );
}
