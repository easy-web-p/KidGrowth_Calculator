import React, { useState } from 'react';
import { BLOG_ARTICLES } from '../data/blogArticles';
import { BookOpen, Clock, Tag, X, ArrowRight, Sparkles } from 'lucide-react';

export default function SeoBlogHub() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [activeCategory, setActiveCategory] = useState('ทั้งหมด');

  const categories = ['ทั้งหมด', 'เทคนิคคำนวณส่วนสูง', 'โภชนาการเด็ก', 'เกณฑ์มาตรฐาน WHO', 'สุขภาพเด็ก'];

  const filteredArticles = activeCategory === 'ทั้งหมด'
    ? BLOG_ARTICLES
    : BLOG_ARTICLES.filter(a => a.category === activeCategory);

  return (
    <div id="blog-section" className="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-3">
          <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
          <span>คลังความรู้การเติบโตเด็ก (SEO Knowledge Hub)</span>
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900">
          บทความน่ารู้เพื่อการเพิ่มส่วนสูง & พัฒนาการเด็ก
        </h2>
        <p className="text-slate-600 mt-2 text-sm sm:text-base">
          รวบรวมเทคนิคคำนวณส่วนสูง โภชนาการอาหารเพิ่มความสูง และคู่มืออ่านกราฟ WHO โดยผู้เชี่ยวชาญ
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeCategory === cat
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            onClick={() => setSelectedArticle(article)}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="h-48 overflow-hidden relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
                  {article.category}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-2">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-emerald-500" />
                    {article.readTime}
                  </span>
                  <span>{article.date}</span>
                </div>

                <h3 className="font-bold text-slate-900 text-lg group-hover:text-emerald-600 transition-colors leading-snug mb-2">
                  {article.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                  {article.summary}
                </p>
              </div>
            </div>

            <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs font-bold text-emerald-600">
              <span>อ่านบทความเต็ม</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Modal Article Reader */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl animate-scale-up">
            
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full mb-3">
              {selectedArticle.category}
            </span>

            <h2 className="text-2xl font-extrabold text-slate-900 mb-3">
              {selectedArticle.title}
            </h2>

            <div className="flex items-center gap-3 text-xs text-slate-500 border-b border-slate-100 pb-4 mb-6">
              <span>{selectedArticle.date}</span>
              <span>•</span>
              <span>ใช้เวลาอ่าน {selectedArticle.readTime}</span>
            </div>

            <div 
              className="prose prose-emerald max-w-none text-slate-700 text-sm leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
            />

            <div className="mt-8 pt-4 border-t border-slate-200 text-center">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-2.5 bg-slate-900 text-white font-bold text-sm rounded-xl hover:bg-slate-800 transition-colors"
              >
                ปิดหน้าต่าง
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
