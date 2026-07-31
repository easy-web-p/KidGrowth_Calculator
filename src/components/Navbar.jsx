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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-20 flex flex-col md:flex-row items-center justify-between gap-4 py-4 md:py-0">
        
        {/* Logo & Branding: จัดกลางบน iPad/Mobile และชิดซ้ายบน Desktop */}
        <button 
          onClick={() => setActiveTab('calculator')}
          className="flex items-center gap-3.5 focus:outline-hidden group text-left cursor-pointer transition-transform duration-200 active:scale-98 mx-auto md:mx-0"
        >
          <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center p-1.5 shadow-xs border border-slate-100 group-hover:scale-105 transition-transform duration-200">
            <img 
              src='/public/logo.jpg'
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

        {/* Navigation Buttons: ซ่อนบน Mobile (hidden), แสดงบน iPad (sm:flex), เรียงปกติบน PC (md:flex) */}
        <nav className="hidden sm:flex flex-wrap justify-center items-center gap-2 pb-2 md:pb-0">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-emerald-50 text-emerald-600 shadow-xs border border-emerald-100'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-500' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

      </div>
    </header>
  );
}
