import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceDot } from 'recharts';
import { WHO_BOYS_DATA, WHO_GIRLS_DATA } from '../data/whoStandardData';
import { BarChart3, CheckCircle, ArrowDown, ArrowUp, AlertTriangle } from 'lucide-react';

export default function WhoGrowthChart({ childResult }) {
  const [chartGender, setChartGender] = useState(childResult?.child?.gender || 'boy');
  const [metric, setMetric] = useState('height'); // height | weight

  const baseData = chartGender === 'girl' ? WHO_GIRLS_DATA : WHO_BOYS_DATA;

  // Integrate child point if provided
  const childAge = childResult ? parseFloat(childResult.child.age) : 6;
  const childVal = childResult ? parseFloat(childResult.child[metric]) : 116;

  // Sample data points from user prompt
  const samplePoints = [
    { age: 2, height: 87, whoAvg: 87, status: 'ปกติ' },
    { age: 4, height: 102, whoAvg: 103, status: 'ปกติ' },
    { age: 5, height: 105, whoAvg: 110, status: 'ต่ำกว่าเกณฑ์' },
    { age: 6, height: 116, whoAvg: 115, status: 'ปกติ' },
    { age: 7, height: 122, whoAvg: 121, status: 'สูงกว่าเกณฑ์' },
    { age: 8, height: 128, whoAvg: 128, status: 'ปกติ' },
    { age: 10, height: 138, whoAvg: 138.5, status: 'ปกติ' },
    { age: 12, height: 150, whoAvg: 150, status: 'ปกติ' }
  ];

  const chartData = baseData.map((item) => ({
    age: item.age,
    P5: metric === 'height' ? item.p5_height : item.p5_weight,
    P50: metric === 'height' ? item.p50_height : item.p50_weight,
    P95: metric === 'height' ? item.p95_height : item.p95_weight,
    childPoint: item.age === Math.round(childAge) ? childVal : null
  }));

  return (
    <div id="growth-chart-section" className="py-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8">
      
      {/* Chart Card */}
      <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-6 sm:p-8">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-indigo-100 text-indigo-700 rounded-2xl">
              <BarChart3 className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">กราฟการเจริญเติบโต (WHO Growth Chart)</h2>
              <p className="text-slate-500 text-sm">เปรียบเทียบเปอร์เซ็นไทล์ 5th, 50th, 95th สากล</p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl">
            <button
              onClick={() => setChartGender('boy')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                chartGender === 'boy' ? 'bg-white text-blue-600 shadow-2xs' : 'text-slate-600'
              }`}
            >
              👦 เด็กชาย
            </button>
            <button
              onClick={() => setChartGender('girl')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                chartGender === 'girl' ? 'bg-white text-pink-600 shadow-2xs' : 'text-slate-600'
              }`}
            >
              👧 เด็กหญิง
            </button>
          </div>
        </div>

        {/* Metric Selector Tabs */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setMetric('height')}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              metric === 'height'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            📏 ส่วนสูงตามอายุ (Height for Age)
          </button>
          <button
            onClick={() => setMetric('weight')}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              metric === 'weight'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            ⚖️ น้ำหนักตามอายุ (Weight for Age)
          </button>
        </div>

        {/* Recharts Component */}
        <div className="h-80 sm:h-96 w-full pt-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="age" label={{ value: 'อายุ (ปี)', position: 'insideBottom', offset: -10 }} />
              <YAxis label={{ value: metric === 'height' ? 'ส่วนสูง (cm)' : 'น้ำหนัก (kg)', angle: -90, position: 'insideLeft' }} />
              <Tooltip 
                formatter={(value, name) => [
                  `${value} ${metric === 'height' ? 'cm' : 'kg'}`,
                  name === 'P5' ? '5th Percentile (เกณฑ์ต่ำ)' :
                  name === 'P50' ? '50th Percentile (ค่าเฉลี่ย)' :
                  name === 'P95' ? '95th Percentile (เกณฑ์สูง)' : 'ลูกของคุณ'
                ]}
                labelFormatter={(label) => `อายุ ${label} ปี`}
              />
              <Legend verticalAlign="top" height={36} />

              <Line type="monotone" dataKey="P95" name="95th Percentile (เกณฑ์สูง)" stroke="#818cf8" strokeWidth={2} strokeDasharray="5 5" dot={false} />
              <Line type="monotone" dataKey="P50" name="50th Percentile (ค่าเฉลี่ย)" stroke="#10b981" strokeWidth={3} dot={{ r: 3 }} />
              <Line type="monotone" dataKey="P5" name="5th Percentile (เกณฑ์ต่ำ)" stroke="#f59e0b" strokeWidth={2} strokeDasharray="5 5" dot={false} />
              
              {childResult && (
                <ReferenceDot
                  x={Math.round(childAge)}
                  y={childVal}
                  r={8}
                  fill="#ef4444"
                  stroke="#ffffff"
                  strokeWidth={2}
                />
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>

        {childResult && (
          <div className="mt-4 p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500 inline-block animate-ping" />
            <span>จุดสีแดงบนกราฟคือตำแหน่งพัฒนาการปัจจุบันของ <strong>{childResult.child.name}</strong> (อายุ {childResult.child.age} ปี / {childVal} {metric === 'height' ? 'ซม.' : 'กก.'})</span>
          </div>
        )}

      </div>

      {/* Section 8 Table: WHO Comparison Table Requirement */}
      <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-6 sm:p-8">
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          8. ตารางเปรียบเทียบมาตรฐาน WHO ตามช่วงอายุ
        </h3>
        <p className="text-slate-500 text-sm mb-6">
          ตัวอย่างตารางประเมินระดับพัฒนาการความสูงเด็ก
        </p>

        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full text-left text-sm text-slate-700">
            <thead className="bg-slate-100 text-slate-900 font-bold text-xs uppercase border-b border-slate-200">
              <tr>
                <th className="px-6 py-3.5">อายุ</th>
                <th className="px-6 py-3.5">ส่วนสูงเด็ก</th>
                <th className="px-6 py-3.5">ค่าเฉลี่ย WHO</th>
                <th className="px-6 py-3.5">ผลการประเมิน</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {samplePoints.map((pt) => {
                let badgeClass = 'bg-emerald-50 text-emerald-700 border-emerald-200';
                let icon = <CheckCircle className="w-4 h-4 text-emerald-500 inline mr-1" />;
                if (pt.status === 'ต่ำกว่าเกณฑ์') {
                  badgeClass = 'bg-amber-50 text-amber-700 border-amber-200';
                  icon = <ArrowDown className="w-4 h-4 text-amber-500 inline mr-1" />;
                } else if (pt.status === 'สูงกว่าเกณฑ์') {
                  badgeClass = 'bg-blue-50 text-blue-700 border-blue-200';
                  icon = <ArrowUp className="w-4 h-4 text-blue-500 inline mr-1" />;
                }

                return (
                  <tr key={pt.age} className="hover:bg-slate-50">
                    <td className="px-6 py-3.5 font-bold text-slate-900">{pt.age} ปี</td>
                    <td className="px-6 py-3.5 font-semibold text-slate-800">{pt.height} cm</td>
                    <td className="px-6 py-3.5 text-slate-600">{pt.whoAvg} cm</td>
                    <td className="px-6 py-3.5">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${badgeClass}`}>
                        {icon}
                        {pt.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
