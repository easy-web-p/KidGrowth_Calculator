import React, { useState, useEffect } from 'react';
import { Calendar, Download, Plus, Trash2, FileText, CheckCircle2, History } from 'lucide-react';
import { exportGrowthReportPdf } from '../utils/pdfExport';

export default function GrowthHistoryTracker({ childResult }) {
  const [history, setHistory] = useState([
    { id: 1, date: '2026-05-15', age: 6, weight: 21.0, height: 114.5, bmi: 16.0, note: 'เริ่มดื่มนมเพิ่มส่วนสูง' },
    { id: 2, date: '2026-06-15', age: 6, weight: 21.5, height: 115.2, bmi: 16.2, note: 'กระโดดเชือกวันละ 300 ครั้ง' },
    { id: 3, date: '2026-07-15', age: 6, weight: 22.0, height: 116.0, bmi: 16.35, note: 'ตรวจวัดประจำเดือนล่าสุด' }
  ]);

  const [newWeight, setNewWeight] = useState('');
  const [newHeight, setNewHeight] = useState('');
  const [newNote, setNewNote] = useState('');

  // Load saved history from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('kidgrowth_history');
      if (saved) {
        setHistory(JSON.parse(saved));
      }
    } catch (e) {
      // Ignore
    }
  }, []);

  const saveHistoryToStorage = (updated) => {
    setHistory(updated);
    try {
      localStorage.setItem('kidgrowth_history', JSON.stringify(updated));
    } catch (e) {}
  };

  const handleAddEntry = (e) => {
    e.preventDefault();
    if (!newWeight || !newHeight) return;

    const w = parseFloat(newWeight);
    const h = parseFloat(newHeight);
    const bmiVal = Math.round((w / ((h / 100) ** 2)) * 100) / 100;

    const entry = {
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      age: childResult?.child?.age || 6,
      weight: w,
      height: h,
      bmi: bmiVal,
      note: newNote || 'วัดส่วนสูงรายเดือน'
    };

    const updated = [entry, ...history];
    saveHistoryToStorage(updated);
    setNewWeight('');
    setNewHeight('');
    setNewNote('');
  };

  const handleDelete = (id) => {
    const updated = history.filter(item => item.id !== id);
    saveHistoryToStorage(updated);
  };

  const handleExportPdf = () => {
    const childData = childResult?.child || {
      name: 'น้องมาร์ค',
      gender: 'boy',
      age: 6,
      weight: 22,
      height: 116,
      fatherHeight: 175,
      motherHeight: 160
    };

    const predicted = childResult?.predicted || { target: 174, min: 169, max: 179 };
    const bmiData = childResult?.bmi || { bmi: 16.35, category: 'ปกติ / สมส่วน' };
    const whoData = childResult?.who || { matchedAge: 6, whoAverageHeight: 116, heightStatus: 'ปกติ' };
    const aiAdvice = {
      overallSummary: 'การเจริญเติบโตอยู่ในเกณฑ์ดี ควรรักษาพฤติกรรมสุขภาพ โภชนาการ และการนอนหลับที่สมดุลอย่างต่อเนื่อง'
    };

    exportGrowthReportPdf(childData, predicted, bmiData, whoData, aiAdvice);
  };

  return (
    <div id="history-section" className="py-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8">
      <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-6 sm:p-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-purple-100 text-purple-700 rounded-2xl">
              <History className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">บันทึกประวัติการเจริญเติบโตรายเดือน</h2>
              <p className="text-slate-500 text-sm">ติดตามพัฒนาการความสูงและน้ำหนักของลูกต่อเนื่องทุกเดือน</p>
            </div>
          </div>

          <button
            onClick={handleExportPdf}
            className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>ดาวน์โหลดรายงาน PDF</span>
          </button>
        </div>

        {/* Add Entry Form */}
        <form onSubmit={handleAddEntry} className="mb-8 p-5 bg-slate-50 rounded-2xl border border-slate-200">
          <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-1.5">
            <Plus className="w-4 h-4 text-emerald-600" />
            <span>เพิ่มบันทึกส่วนสูงและน้ำหนักประจำเดือน</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">ส่วนสูง (cm)</label>
              <input
                type="number"
                step="0.1"
                placeholder="เช่น 116"
                value={newHeight}
                onChange={(e) => setNewHeight(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">น้ำหนัก (kg)</label>
              <input
                type="number"
                step="0.1"
                placeholder="เช่น 22"
                value={newWeight}
                onChange={(e) => setNewWeight(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">บันทึกเพิ่มเติม</label>
              <input
                type="text"
                placeholder="เช่น ดื่มนม 2 แก้ว"
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl transition-all cursor-pointer"
              >
                + บันทึกข้อมูล
              </button>
            </div>
          </div>
        </form>

        {/* History Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full text-left text-sm text-slate-700">
            <thead className="bg-slate-100 text-slate-900 font-bold text-xs uppercase border-b border-slate-200">
              <tr>
                <th className="px-6 py-3.5">วันที่บันทึก</th>
                <th className="px-6 py-3.5">อายุ</th>
                <th className="px-6 py-3.5">ส่วนสูง</th>
                <th className="px-6 py-3.5">น้ำหนัก</th>
                <th className="px-6 py-3.5">BMI</th>
                <th className="px-6 py-3.5">หมายเหตุ</th>
                <th className="px-6 py-3.5 text-right">ลบ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {history.map((row) => (
                <tr key={row.id} className="hover:bg-slate-50">
                  <td className="px-6 py-3.5 font-bold text-slate-900">{row.date}</td>
                  <td className="px-6 py-3.5">{row.age} ปี</td>
                  <td className="px-6 py-3.5 font-semibold text-emerald-600">{row.height} cm</td>
                  <td className="px-6 py-3.5 font-semibold text-slate-800">{row.weight} kg</td>
                  <td className="px-6 py-3.5">{row.bmi}</td>
                  <td className="px-6 py-3.5 text-xs text-slate-500">{row.note}</td>
                  <td className="px-6 py-3.5 text-right">
                    <button
                      onClick={() => handleDelete(row.id)}
                      className="text-slate-400 hover:text-red-500 p-1 transition-colors"
                      title="ลบรายการ"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
