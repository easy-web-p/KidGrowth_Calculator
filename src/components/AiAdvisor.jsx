import React from 'react';
import { Sparkles, Utensils, Activity, Moon, CheckCircle2, AlertCircle, Info, HeartHandshake } from 'lucide-react';
import { generateAiAdvice } from '../utils/growthCalculations';

export default function AiAdvisor({ childResult }) {
  // Use child result or default fallback
  const child = childResult?.child || {
    name: 'น้องมาร์ค',
    age: 6,
    gender: 'boy',
    height: 116,
    weight: 22,
    sleepHours: 9.5
  };

  const bmi = childResult?.bmi || { bmi: 16.35, category: 'ปกติ / สมส่วน', status: 'normal' };
  const who = childResult?.who || { heightStatus: 'ปกติ' };

  const advice = generateAiAdvice({
    name: child.name,
    age: child.age,
    gender: child.gender,
    height: child.height,
    weight: child.weight,
    bmi,
    whoStatus: who.heightStatus,
    sleepHours: child.sleepHours
  });

  return (
    <div id="ai-advisor-section" className="py-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8">
      
      <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-6 sm:p-8">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-tr from-amber-400 to-orange-500 text-white rounded-2xl shadow-xs">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">10. ระบบ AI แนะนำการดูแลสุขภาพ & โภชนาการ</h2>
            <p className="text-slate-500 text-sm">ประมวลผลเฉพาะบุคคลจาก อายุ น้ำหนัก ส่วนสูง BMI และส่วนสูงเป้าหมาย</p>
          </div>
        </div>

        {/* Section 9: Automated Analysis System Alert Box */}
        <div className="mb-8 p-6 rounded-2xl border bg-slate-50 border-slate-200">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            9. ระบบวิเคราะห์อัตโนมัติ (Automated Diagnostic Message)
          </h3>

          {/* Conditional Analysis Boxes */}
          {who.heightStatus === 'เตี้ยกว่าเกณฑ์' || bmi.status === 'low' ? (
            <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-xl text-amber-900 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <blockquote className="font-medium">
                "เด็กมีแนวโน้มเตี้ยกว่าเกณฑ์มาตรฐาน ควรเพิ่มโปรตีน แคลเซียม และพักผ่อนให้เพียงพอ"
              </blockquote>
            </div>
          ) : bmi.status === 'warning' || bmi.status === 'danger' || bmi.status === 'extreme' ? (
            <div className="p-4 bg-rose-50 border-l-4 border-rose-500 rounded-xl text-rose-900 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <blockquote className="font-medium">
                "ควรลดอาหารหวาน เพิ่มกิจกรรมทางกายอย่างน้อย 60 นาทีต่อวัน"
              </blockquote>
            </div>
          ) : (
            <div className="p-4 bg-emerald-50 border-l-4 border-emerald-500 rounded-xl text-emerald-900 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <blockquote className="font-medium">
                "การเจริญเติบโตอยู่ในเกณฑ์ดี ควรรักษาพฤติกรรมสุขภาพอย่างต่อเนื่อง"
              </blockquote>
            </div>
          )}
        </div>

        {/* Section 10: Category Recommendations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Category 1: อาหารแนะนำ */}
          <div className="bg-gradient-to-b from-amber-50/80 to-orange-50/40 p-6 rounded-2xl border border-amber-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-amber-500 text-white rounded-xl shadow-2xs">
                  <Utensils className="w-5 h-5" />
                </div>
                <h4 className="font-extrabold text-amber-900 text-lg">🥛 อาหารแนะนำ</h4>
              </div>

              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">•</span>
                  <span><strong>นมวันละ 2 แก้ว</strong> (นมสดจืด / นมถั่วเหลืองแคลเซียมสูง)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">•</span>
                  <span><strong>ไข่ 1-2 ฟอง</strong> ต่อวัน (โปรตีนคุณภาพสูง)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">•</span>
                  <span><strong>ปลา 3 มื้อ/สัปดาห์</strong> (เสริม Zinc & Omega-3)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">•</span>
                  <span>ผักใบเขียวเข้ม และผลไม้รสไม่หวานจัด</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Category 2: การออกกำลังกาย */}
          <div className="bg-gradient-to-b from-blue-50/80 to-cyan-50/40 p-6 rounded-2xl border border-blue-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-blue-500 text-white rounded-xl shadow-2xs">
                  <Activity className="w-5 h-5" />
                </div>
                <h4 className="font-extrabold text-blue-900 text-lg">🏃 การออกกำลังกาย</h4>
              </div>

              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <span><strong>วิ่ง</strong> เล่นรับแดดยามเช้า 15-20 นาที</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <span><strong>กระโดดเชือก</strong> กระตุกข้อต่อยืดกระดูก</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <span><strong>ว่ายน้ำ</strong> สร้างกล้ามเนื้อทั้งตัว</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <span><strong>บาสเกตบอล</strong> หรือวอลเลย์บอลยืดตัว</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Category 3: การนอน */}
          <div className="bg-gradient-to-b from-purple-50/80 to-indigo-50/40 p-6 rounded-2xl border border-purple-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-purple-500 text-white rounded-xl shadow-2xs">
                  <Moon className="w-5 h-5" />
                </div>
                <h4 className="font-extrabold text-purple-900 text-lg">🌙 การนอนหลับ</h4>
              </div>

              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">•</span>
                  <span><strong>9-11 ชั่วโมงต่อวัน</strong> สำหรับเด็กวัยเรียน</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">•</span>
                  <span>เข้านอนก่อน <strong>21.30 น.</strong> เพื่อรอหลับสนิท</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">•</span>
                  <span>Growth Hormone หลั่งสูงสุด 22.00 - 02.00 น.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">•</span>
                  <span>ปิดไฟมืดสนิท ช่วยเมลาโทนินทำงานดีขึ้น</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
