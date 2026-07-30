import React, { useState } from 'react';
import { Ruler, Scale, User, Heart, Sparkles, CheckCircle, Info, Calculator } from 'lucide-react';
import { calculatePredictedHeight, calculateBMI, getWhoComparison, calculateGrowthScore } from '../utils/growthCalculations';
import confetti from 'canvas-confetti';

export default function HeightPredictorForm({ onResultComputed }) {
  // Input States
  const [name, setName] = useState('น้องมาร์ค');
  const [gender, setGender] = useState('boy'); // boy | girl
  const [age, setAge] = useState('6');
  const [weight, setWeight] = useState('22');
  const [height, setHeight] = useState('116');
  const [fatherHeight, setFatherHeight] = useState('175');
  const [motherHeight, setMotherHeight] = useState('160');
  const [sleepHours, setSleepHours] = useState('9.5');

  // Computed results state
  const [result, setResult] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();

    const predicted = calculatePredictedHeight(fatherHeight, motherHeight, gender);
    const bmiResult = calculateBMI(weight, height);
    const whoResult = getWhoComparison(age, height, weight, gender);
    const growthScore = calculateGrowthScore({
      height, weight, age, gender, fatherHeight, motherHeight, sleepHours
    });

    const calculatedData = {
      child: { name, gender, age, weight, height, fatherHeight, motherHeight, sleepHours },
      predicted,
      bmi: bmiResult,
      who: whoResult,
      growthScore
    };

    setResult(calculatedData);
    if (onResultComputed) onResultComputed(calculatedData);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // Ignore if confetti fails
    }
  };

  return (
    <div id="calculator-section" className="py-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 p-6 sm:p-8 text-white">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-white/20 rounded-xl backdrop-blur-xs">
              <Calculator className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold">แบบฟอร์มคำนวณส่วนสูง & BMI เด็ก</h2>
          </div>
          <p className="text-emerald-100 text-sm sm:text-base">
            กรอกข้อมูลส่วนสูง พ่อ แม่ และลูก เพื่อทำนายส่วนสูงในอนาคตและวิเคราะห์พัฒนาการ
          </p>
        </div>

        <form onSubmit={handleCalculate} className="p-6 sm:p-8 space-y-8">
          
          {/* Section 1: ข้อมูลเด็ก */}
          <div>
            <div className="flex items-center gap-2 mb-4 text-slate-900 font-bold text-lg border-b border-slate-200 pb-2">
              <User className="w-5 h-5 text-emerald-600" />
              <span>1. ข้อมูลเด็ก</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* ชื่อ */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">ชื่อเด็ก / ชื่อเล่น</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="เช่น น้องมาร์ค"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-900"
                />
              </div>

              {/* เพศ */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">เพศ</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setGender('boy')}
                    className={`py-2.5 rounded-xl border text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                      gender === 'boy'
                        ? 'bg-blue-50 border-blue-500 text-blue-700 ring-2 ring-blue-200'
                        : 'border-slate-300 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>👦 เด็กชาย</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setGender('girl')}
                    className={`py-2.5 rounded-xl border text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                      gender === 'girl'
                        ? 'bg-pink-50 border-pink-500 text-pink-700 ring-2 ring-pink-200'
                        : 'border-slate-300 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>👧 เด็กหญิง</span>
                  </button>
                </div>
              </div>

              {/* อายุ */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">อายุ (ปี)</label>
                <input
                  type="number"
                  min="2"
                  max="18"
                  required
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 text-slate-900"
                />
              </div>

              {/* น้ำหนัก */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">น้ำหนักปัจจุบัน (kg)</label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.1"
                    required
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 text-slate-900 pr-12"
                  />
                  <span className="absolute right-3 top-2.5 text-slate-400 text-sm">กก.</span>
                </div>
              </div>

              {/* ส่วนสูง */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">ส่วนสูงปัจจุบัน (cm)</label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.1"
                    required
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 text-slate-900 pr-12"
                  />
                  <span className="absolute right-3 top-2.5 text-slate-400 text-sm">ซม.</span>
                </div>
              </div>

              {/* ชั่วโมงการนอน */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">ชั่วโมงการนอนต่อวัน</label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.5"
                    min="4"
                    max="15"
                    value={sleepHours}
                    onChange={(e) => setSleepHours(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 text-slate-900 pr-16"
                  />
                  <span className="absolute right-3 top-2.5 text-slate-400 text-sm">ชม.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: ข้อมูลพ่อแม่ */}
          <div>
            <div className="flex items-center gap-2 mb-4 text-slate-900 font-bold text-lg border-b border-slate-200 pb-2">
              <Heart className="w-5 h-5 text-rose-500" />
              <span>2. ข้อมูลคุณพ่อและคุณแม่ (คำนวณส่วนสูงพันธุกรรม)</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* ส่วนสูงพ่อ */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">ส่วนสูงคุณพ่อ (cm)</label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.1"
                    required
                    value={fatherHeight}
                    onChange={(e) => setFatherHeight(e.target.value)}
                    placeholder="เช่น 175"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 text-slate-900 pr-12"
                  />
                  <span className="absolute right-3 top-2.5 text-slate-400 text-sm">ซม.</span>
                </div>
              </div>

              {/* ส่วนสูงแม่ */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">ส่วนสูงคุณแม่ (cm)</label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.1"
                    required
                    value={motherHeight}
                    onChange={(e) => setMotherHeight(e.target.value)}
                    placeholder="เช่น 160"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 text-slate-900 pr-12"
                  />
                  <span className="absolute right-3 top-2.5 text-slate-400 text-sm">ซม.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Formula Box Indicator */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs sm:text-sm text-slate-600 flex items-start gap-3">
            <Info className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-800">สูตรคำนวณเป้าหมายพันธุกรรม (Mid-Parental Height):</span>
              <p className="mt-0.5">
                เด็กชาย = [(ส่วนสูงพ่อ + ส่วนสูงแม่ + 13) ÷ 2] ± 5 ซม. | 
                เด็กหญิง = [(ส่วนสูงพ่อ + ส่วนสูงแม่ - 13) ÷ 2] ± 5 ซม.
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white font-extrabold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-3"
            >
              <Sparkles className="w-6 h-6 animate-bounce" />
              <span>ประมวลผลทำนายส่วนสูง & BMI ทันที</span>
            </button>
          </div>

        </form>

        {/* Calculated Results Display Section */}
        {result && (
          <div className="p-6 sm:p-8 bg-slate-50 border-t border-slate-200 space-y-6 animate-fade-in">
            
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-emerald-600">ผลการวิเคราะห์ส่วนบุคคล</span>
                <h3 className="text-2xl font-black text-slate-900">
                  {result.child.name} (อายุ {result.child.age} ปี)
                </h3>
              </div>
              
              {/* Growth Score Badge */}
              <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-2xl border border-slate-200 shadow-xs">
                <div className="text-right">
                  <span className="block text-[10px] text-slate-500 font-bold uppercase">Growth Score</span>
                  <span className="text-2xl font-black text-emerald-600">{result.growthScore}/100</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">
                  ★
                </div>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1: Target Height Prediction */}
              <div className="bg-white p-6 rounded-2xl border border-emerald-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      ทำนายส่วนสูงในอนาคต
                    </span>
                    <Ruler className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="text-center py-4">
                    <span className="text-4xl font-extrabold text-slate-900">{result.predicted.target}</span>
                    <span className="text-sm font-semibold text-slate-500 ml-1">ซม.</span>
                    <p className="text-xs text-slate-500 mt-2">
                      ช่วงความเชื่อมั่นพันธุกรรม: <br />
                      <strong className="text-slate-800">{result.predicted.min} - {result.predicted.max} ซม.</strong>
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 text-center">
                  คำนวณจาก พ่อ {result.child.fatherHeight} ซม. + แม่ {result.child.motherHeight} ซม.
                </div>
              </div>

              {/* Card 2: BMI Analysis */}
              <div className="bg-white p-6 rounded-2xl border border-teal-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-100">
                      ดัชนีมวลกาย (BMI)
                    </span>
                    <Scale className="w-5 h-5 text-teal-600" />
                  </div>
                  <div className="text-center py-4">
                    <span className="text-4xl font-extrabold text-slate-900">{result.bmi.bmi}</span>
                    <div className="mt-2">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${result.bmi.color}`}>
                        {result.bmi.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 text-center">
                  น้ำหนัก {result.child.weight} kg / (ส่วนสูง {result.child.height} cm)
                </div>
              </div>

              {/* Card 3: WHO Standard Comparison */}
              <div className="bg-white p-6 rounded-2xl border border-cyan-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-cyan-700 bg-cyan-50 px-2.5 py-1 rounded-full border border-cyan-100">
                      เทียบเกณฑ์ WHO (อายุ {result.who.matchedAge} ปี)
                    </span>
                    <CheckCircle className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div className="space-y-2 py-2 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">ส่วนสูงเด็ก:</span>
                      <strong className="text-slate-900">{result.child.height} ซม.</strong>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">ค่าเฉลี่ย WHO:</span>
                      <strong className="text-slate-700">{result.who.whoAverageHeight} ซม.</strong>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-slate-100">
                      <span className="text-slate-600">ผลประเมินส่วนสูง:</span>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${result.who.heightColor}`}>
                        {result.who.heightStatus}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 text-center">
                  เกณฑ์ปกติ: {result.who.whoMinHeight} - {result.who.whoMaxHeight} ซม.
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
