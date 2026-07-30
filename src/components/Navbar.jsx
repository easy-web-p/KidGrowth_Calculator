import React from 'react';
import { Calculator, LineChart, Sparkles, History } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'calculator', label: 'คำนวณส่วนสูง & BMI', icon: Calculator },
    { id: 'chart', label: 'กราฟมาตรฐาน WHO', icon: LineChart },
    { id: 'ai-advisor', label: 'AI แนะนำสุขภาพ', icon: Sparkles },
    { id: 'history', label: 'บันทึกประวัติ & PDF', icon: History }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex flex-col md:flex-row items-center justify-between gap-4 py-4 md:py-0">
        
        {/* Logo & Branding */}
        <button 
          onClick={() => setActiveTab('calculator')}
          className="flex items-center gap-3.5 focus:outline-hidden group text-left cursor-pointer transition-transform duration-200 active:scale-98"
        >
          {/* เรียกใช้ไฟล์ logo.png และปรับขนาดให้พอดี ไม่เบียด */}
          <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center p-1.5 shadow-xs border border-slate-100 group-hover:scale-105 transition-transform duration-200">
            <img 
              src="/logo.png" 
              alt="KidGrowth Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="space-y-0.5">
            <span className="text-xl font-black bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent tracking-tight block">
              KidGrowth Calculator
            </span>
            <span className="block text-xs font-medium text-slate-500 tracking-wide">
              เครื่องคำนวณส่วนสูง & BMI เด็ก
            </span>
          </div>
        </button>

        {/* Navigation - รองรับ Responsive หลากหน้าจอ */}
        <nav className="flex flex-wrap justify-center items-center gap-1.5 bg-slate-50 p-1.5 rounded-2xl border border-slate-100 max-w-full overflow-x-auto no-scrollbar">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-white text-emerald-700 shadow-sm border border-slate-200/80 scale-102'
                    : 'text-slate-600 hover:text-emerald-600 hover:bg-white/60'
                }`}
              >
                <Icon className={`w-4 h-4 transition-colors duration-200 ${isActive ? 'text-emerald-600' : 'text-slate-400 group-hover:text-emerald-500'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

      </div>
    </header>
  );
}
