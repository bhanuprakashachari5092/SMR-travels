import React from 'react';
import { Shield, Sparkles } from 'lucide-react';

export const CanvasFallback: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-100 flex items-center justify-center rounded-3xl overflow-hidden bg-white/80 border border-slate-200 shadow-2xl group">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-linear-to-tr from-white via-slate-50 to-blue-50/60" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Animated road grid perspective lines */}
      <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Fallback Luxury Vehicle Silhouette & Visual */}
      <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center">
        <div className="relative mb-6">
          <div className="absolute -inset-4 bg-linear-to-r from-[#1769FF] via-[#00B8D9] to-[#1769FF] rounded-full opacity-20 blur-xl group-hover:opacity-40 transition duration-500" />
          
          <div className="relative w-72 h-44 sm:w-96 sm:h-56 rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900">
            <img
              src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1000"
              alt="SMR Luxury Vehicle Fleet"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 brightness-95 contrast-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0B1F3A]/80 via-transparent to-transparent" />
            
            {/* Badge on fallback image */}
            <div className="absolute bottom-4 left-6 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-[#1769FF] border border-slate-200 shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-[#00B8D9] animate-pulse" />
              <span>Premium Luxury Chauffeur Fleet</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
          <Shield className="w-3.5 h-3.5 text-[#1769FF]" />
          <span>Sanitized • Air Conditioned • GPS Tracked</span>
        </div>
      </div>
    </div>
  );
};

