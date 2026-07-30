import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function AdsenseBanner({ position = 'middle', label = 'โฆษณาตามเป้าหมาย' }) {
  return (
    <div className="my-8 max-w-5xl mx-auto px-4">
      <div className="bg-slate-100/90 border border-dashed border-slate-300 rounded-2xl p-4 text-center relative overflow-hidden group">
        <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-2">
          <span>Google AdSense Slot ({position})</span>
          <span>{label}</span>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-black text-xl shrink-0">
              AD
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">
                โรงพยาบาลกุมารเวชชั้นนำ - คลินิกเพิ่มส่วนสูงเด็ก
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                ปรึกษาแพทย์ผู้เชี่ยวชาญด้านฮอร์โมนและการเจริญเติบโต รับส่วนลดพิเศษสำหรับผู้ดูแล
              </p>
            </div>
          </div>

          <a
            href="https://adsense.google.com"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shrink-0 transition-colors flex items-center gap-1.5"
          >
            <span>รายละเอียด</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
