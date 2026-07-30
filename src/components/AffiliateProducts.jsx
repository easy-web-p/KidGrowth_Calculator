import React from 'react';
import { AFFILIATE_PRODUCTS } from '../data/affiliateProducts';
import { ShoppingCart, Star, ExternalLink, Tag } from 'lucide-react';

export default function AffiliateProducts() {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Affiliate & Recommended Gear</span>
          <h3 className="text-2xl font-bold text-slate-900">สินค้าแนะนำเพื่อโภชนาการและการวัดส่วนสูง</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {AFFILIATE_PRODUCTS.map((prod) => (
          <div
            key={prod.id}
            className="bg-white rounded-3xl border border-slate-200 p-5 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="relative h-44 rounded-2xl overflow-hidden mb-4 bg-slate-100">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 bg-amber-500 text-white text-[11px] font-extrabold px-2.5 py-1 rounded-full shadow-2xs">
                  {prod.tag}
                </span>
              </div>

              <span className="text-xs text-slate-400 font-bold uppercase">{prod.brand}</span>
              <h4 className="font-bold text-slate-900 text-base leading-snug mt-1 mb-2">
                {prod.name}
              </h4>
              <p className="text-xs text-slate-500 mb-4 line-clamp-2">
                {prod.description}
              </p>
            </div>

            <div>
              <div className="flex items-center justify-between mb-3 pt-3 border-t border-slate-100">
                <div>
                  <span className="text-xl font-black text-emerald-600">฿{prod.price}</span>
                  <span className="text-xs text-slate-400 line-through ml-2">฿{prod.originalPrice}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-amber-500 font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{prod.rating} ({prod.reviews})</span>
                </div>
              </div>

              <a
                href={prod.link}
                className="w-full py-2.5 bg-slate-900 hover:bg-emerald-600 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <ShoppingCart className="w-3.5 h-3.5" />
                <span>ดูรายละเอียด & สั่งซื้อ</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
