import React, { useState } from 'react';
import { Scale, CheckCircle2, AlertCircle, Info, Sparkles } from 'lucide-react';
import { BMI_CATEGORIES } from '../data/whoStandardData';
import { calculateBMI } from '../utils/growthCalculations';

export default function BmiAnalyzerForm() {
  const [weight, setWeight] = useState('30');
  const [height, setHeight] = useState('130');

  const bmiResult = calculateBMI(weight, height);

  return (
    <div id="bmi-section" className="py-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-6 sm:p-8">
        
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-teal-100 text-teal-700 rounded-2xl">
            <Scale className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">วิเคราะห์ดัชนีมวลกายเด็ก (BMI Analyzer)</h2>
            <p className="text-slate-500 text-sm">ประเมินสภาวะโภชนาการตามเกณฑ์การเจริญเติบโตสากล</p>
          </div>
        </div>

        {/* Form Inputs & Visual Slider */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          <div className="space-y-5 bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">น้ำหนักเด็ก (kg)</label>
              <input
                type="number"
                step="0.5"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 text-lg font-bold text-slate-900"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">ส่วนสูงเด็ก (cm)</label>
              <input
                type="number"
                step="0.5"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 text-lg font-bold text-slate-900"
              />
            </div>
          </div>

          {/* BMI Result Badge Card */}
          {bmiResult && (
            <div className="flex flex-col justify-center items-center p-6 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 rounded-2xl border border-emerald-200 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">ผลการคำนวณ BMI</span>
              <div className="text-5xl font-black text-slate-900 my-2">
                {bmiResult.bmi}
              </div>
              <div className={`px-4 py-1.5 rounded-full text-sm font-bold border ${bmiResult.color} shadow-2xs mb-3`}>
                {bmiResult.category}
              </div>
              <p className="text-xs text-slate-600 max-w-xs leading-relaxed">
                สูตร: {weight} kg ÷ ({height}/100)² = {weight} ÷ {((parseFloat(height)/100)**2).toFixed(2)} = <strong>{bmiResult.bmi}</strong>
              </p>
            </div>
          )}

        </div>

        {/* Section 6 Table requirement */}
        <div>
          <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Info className="w-5 h-5 text-emerald-600" />
            <span>ตารางการแสดงผลระดับ BMI</span>
          </h3>

          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-100 text-slate-900 font-bold text-xs uppercase border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3.5">BMI Range</th>
                  <th className="px-6 py-3.5">ระดับความหมาย</th>
                  <th className="px-6 py-3.5">สถานะ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr className={bmiResult?.bmi < 18.5 ? 'bg-amber-50 font-bold' : ''}>
                  <td className="px-6 py-3.5">&lt; 18.5</td>
                  <td className="px-6 py-3.5">น้ำหนักน้อย (Underweight)</td>
                  <td className="px-6 py-3.5 text-amber-600">ควรเพิ่มสารอาหารโปรตีน-พลังงาน</td>
                </tr>
                <tr className={bmiResult?.bmi >= 18.5 && bmiResult?.bmi <= 22.99 ? 'bg-emerald-50 font-bold' : ''}>
                  <td className="px-6 py-3.5">18.5 - 22.9</td>
                  <td className="px-6 py-3.5">ปกติ / สมส่วน (Normal)</td>
                  <td className="px-6 py-3.5 text-emerald-600">สมบูรณ์ รักษาสุขภาพต่อเนื่อง</td>
                </tr>
                <tr className={bmiResult?.bmi >= 23 && bmiResult?.bmi <= 24.99 ? 'bg-orange-50 font-bold' : ''}>
                  <td className="px-6 py-3.5">23 - 24.9</td>
                  <td className="px-6 py-3.5">น้ำหนักเกิน (Overweight)</td>
                  <td className="px-6 py-3.5 text-orange-600">ควรคุมของหวานและออกกำลังกาย</td>
                </tr>
                <tr className={bmiResult?.bmi >= 25 && bmiResult?.bmi <= 29.99 ? 'bg-rose-50 font-bold' : ''}>
                  <td className="px-6 py-3.5">25 - 29.9</td>
                  <td className="px-6 py-3.5">อ้วนระดับ 1 (Obesity Level 1)</td>
                  <td className="px-6 py-3.5 text-rose-600">สุ่มเสี่ยง ควรปรับพฤติกรรม</td>
                </tr>
                <tr className={bmiResult?.bmi >= 30 ? 'bg-red-50 font-bold' : ''}>
                  <td className="px-6 py-3.5">&gt; 30</td>
                  <td className="px-6 py-3.5">อ้วนระดับ 2 (Obesity Level 2)</td>
                  <td className="px-6 py-3.5 text-red-600">ควรรับคำแนะนำจากกุมารแพทย์</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
