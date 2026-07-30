import React from 'react';
import { Sparkles, Calculator, Ruler, Scale, LineChart } from 'lucide-react';

export default function HeroSection({ onStartCalculation }) {
  return (
    <section className="bg-gradient-to-b from-emerald-50/60 via-teal-50/30 to-slate-50 pt-8 pb-6 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>สูตรแพทย์ Mid-Parental Height & เกณฑ์มาตรฐาน WHO</span>
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          โปรแกรมคำนวณส่วนสูงในอนาคต & วิเคราะห์ BMI เด็ก
        </h1>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-600 leading-relaxed">
          ทำนายส่วนสูงเมื่อเติบโตเป็นผู้ใหญ่จากส่วนสูงพ่อแม่ ประเมินดัชนีมวลกาย (BMI) 
          เทียบกราฟเกณฑ์ WHO พร้อมสรุปผลโภชนาการและการนอนหลับทันที
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-semibold text-slate-700">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-xl border border-slate-200 shadow-2xs">
            <Ruler className="w-4 h-4 text-emerald-600" />
            <span>คำนวณส่วนสูงเป้าหมาย</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-xl border border-slate-200 shadow-2xs">
            <Scale className="w-4 h-4 text-teal-600" />
            <span>วิเคราะห์ BMI เด็ก</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-xl border border-slate-200 shadow-2xs">
            <LineChart className="w-4 h-4 text-cyan-600" />
            <span>เทียบเกณฑ์ WHO</span>
          </div>
        </div>

      </div>
    </section>
  );
}
