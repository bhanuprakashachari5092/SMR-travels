import React from 'react';
import { STATS } from '../config/siteConfig';

export const Stats: React.FC = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-[#F5F7FA] border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 text-center border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#1769FF]/30 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-[#1769FF] via-[#3157D5] to-[#00B8D9] mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-[#0B1F3A] mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 font-medium">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

