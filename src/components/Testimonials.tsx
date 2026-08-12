import React from 'react';
import { TESTIMONIALS } from '../config/siteConfig';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-[#F1F5F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-[#1769FF] uppercase tracking-widest shadow-sm">
            <span>VERIFIED REVIEWS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F3A] tracking-tight">
            What Our Customers <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1769FF] to-[#00B8D9]">Say</span>
          </h2>

          <p className="text-base text-slate-600 font-medium">
            Real feedback from business executives, families, and solo travelers who trust SMR Car Travels.
          </p>
        </div>

        {/* Testimonials 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between relative group hover:shadow-xl hover:shadow-blue-500/10 hover:border-[#1769FF]/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Quote className="w-10 h-10 text-blue-100 absolute top-6 right-6 pointer-events-none group-hover:text-blue-200 transition-colors" />

              <div>
                {/* Champagne Gold Rating Stars */}
                <div className="flex items-center gap-1 text-[#C9A227] mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C9A227]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-slate-700 leading-relaxed italic mb-6 font-normal">
                  "{t.comment}"
                </p>
              </div>

              {/* Author Footer with Anonymous Verified Traveler Badge */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-linear-to-br from-[#1769FF] to-[#00B8D9] text-white font-bold flex items-center justify-center shadow-sm shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0B1F3A] flex items-center gap-1.5">
                    <span>Verified Traveler</span>
                    <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 uppercase">
                      Verified
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    {t.serviceUsed} • {t.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

