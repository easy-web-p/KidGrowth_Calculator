import React from 'react';
import { Calculator, LineChart, Sparkles, History, HeartPulse } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'calculator', label: 'คำนวณส่วนสูง & BMI', icon: Calculator },
    { id: 'chart', label: 'กราฟมาตรฐาน WHO', icon: LineChart },
    { id: 'ai-advisor', label: 'AI แนะนำสุขภาพ', icon: Sparkles },
    { id: 'history', label: 'บันทึกประวัติ & PDF', icon: History }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <button 
          onClick={() => setActiveTab('calculator')}
          className="flex items-center gap-2.5 focus:outline-hidden group text-left cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
            <HeartPulse className="w-5 h-5" />
          </div>
          <div>
            <span className="text-lg font-extrabold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              KidGrowth Calculator
            </span>
            <span className="block text-[10px] font-semibold text-slate-400 tracking-wider">
              เครื่องคำนวณส่วนสูง & BMI เด็ก
            </span>
          </div>
        </button>

        {/* Navigation */}
        <nav className="flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl border border-slate-200/60">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white text-emerald-700 shadow-2xs border border-slate-200/60'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/40'
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
