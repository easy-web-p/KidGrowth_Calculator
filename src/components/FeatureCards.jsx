import React from 'react';
import { Ruler, Scale, BarChart3, Salad, Users } from 'lucide-react';

export default function FeatureCards({ onSelectFeature }) {
  const features = [
    {
      id: 'calculator',
      icon: Ruler,
      title: '📏 คำนวณส่วนสูงในอนาคต',
      desc: 'ทำนายส่วนสูงเมื่อโตเป็นผู้ใหญ่จากส่วนสูงพ่อแม่ ตามสูตรพันธุกรรมทางการแพทย์',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50/80 border-blue-200'
    },
    {
      id: 'bmi',
      icon: Scale,
      title: '⚖️ วิเคราะห์ BMI เด็ก',
      desc: 'ประเมินดัชนีมวลกายเด็กไทยและเทียบเกณฑ์ ผอม ปกติ ท้วม หรืออ้วน',
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50/80 border-emerald-200'
    },
    {
      id: 'chart',
      icon: BarChart3,
      title: '📊 แสดงกราฟการเติบโต',
      desc: 'พล็อตจุดส่วนสูงและน้ำหนักบนกราฟเส้นมาตรฐาน WHO (5th, 50th, 95th Percentile)',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50/80 border-indigo-200'
    },
    {
      id: 'ai-advisor',
      icon: Salad,
      title: '🥗 แนะนำการดูแลสุขภาพ',
      desc: 'AI คำนวณ Growth Score พร้อมแนะนำอาหารเพิ่มส่วนสูง การออกกำลังกาย และเวลานอน',
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50/80 border-amber-200'
    },
    {
      id: 'who-table',
      icon: Users,
      title: '👨‍👩‍👧 เปรียบเทียบเกณฑ์มาตรฐาน',
      desc: 'ตารางเปรียบเทียบส่วนสูงเด็กตามช่วงอายุ (2-18 ปี) กับค่าเฉลี่ยสากล',
      color: 'from-rose-500 to-pink-500',
      bgColor: 'bg-rose-50/80 border-rose-200'
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
          ฟีเจอร์เด่นเพื่อการเติบโตที่สมบูรณ์แบบ
        </h2>
        <p className="text-slate-600 mt-2 text-sm sm:text-base">
          วิเคราะห์ครบถ้วนทั้งส่วนสูง BMI โภชนาการ และการติดตามผลระยะยาว
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {features.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              onClick={() => onSelectFeature(item.id)}
              className={`p-5 rounded-2xl border ${item.bgColor} shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between group`}
            >
              <div>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${item.color} flex items-center justify-center text-white shadow-xs mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-slate-700 group-hover:text-emerald-700">
                <span>ใช้งานฟีเจอร์</span>
                <span>→</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
