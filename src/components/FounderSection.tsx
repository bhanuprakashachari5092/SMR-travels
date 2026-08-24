import React from 'react';
import { ShieldCheck, Award, PhoneCall, ArrowRight, UserCheck, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface FounderSectionProps {
  onOpenBooking: () => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative py-12 md:py-20 bg-linear-to-b from-[#F8FAFC] via-white to-[#EEF6FF] overflow-hidden border-b border-slate-200/80">
      {/* Soft Cyan & Blue Ambient Glow Highlights */}
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-140 h-140 bg-linear-to-bl from-[#1769FF]/15 via-[#00B8D9]/15 to-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column - Founder & Executive Desk Showcase */}
          <div className="lg:col-span-6 relative order-1">
            <div className="relative rounded-3xl overflow-hidden bg-white/80 backdrop-blur-xl border border-slate-200/90 shadow-2xl shadow-blue-500/15 group p-2.5 sm:p-4">
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 shadow-inner">
                <img
                  src="/images/smr-owner-office.jpg"
                  alt="Mohammad Rafi - Founder & Managing Director of SMR Car Travels Anantapur"
                  loading="lazy"
                  decoding="async"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 brightness-[1.02]"
                />

                {/* Floating Micro Stat Badge over Image */}
                <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 glass-panel bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-white/60 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-[#1769FF] to-[#00B8D9] flex items-center justify-center text-white shadow-md">
                      <UserCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-[#0B1F3A] uppercase tracking-wider">Mohammad Rafi</h4>
                      <p className="text-xs font-semibold text-slate-600">Founder & Managing Director • Anantapur</p>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>24/7 Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Leadership Promise Copy & Features */}
          <div className="lg:col-span-6 space-y-6 text-left order-2">
            
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-blue-200 text-xs font-extrabold tracking-wider text-[#1769FF] uppercase shadow-sm">
              <ShieldCheck className="w-4 h-4" />
              <span>LEADERSHIP & TRUSTED FOUNDER • ANANTAPUR</span>
            </div>

            {/* Section Heading */}
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B1F3A] leading-tight">
                SMR Car Travels By{' '}
                <span className="block text-transparent bg-clip-text bg-linear-to-r from-[#1769FF] via-[#3157D5] to-[#00B8D9]">
                  Mohammad Rafi
                </span>
              </h2>
            </div>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
              Founded and personally managed by <strong className="text-slate-900 font-bold">Mohammad Rafi</strong> in <strong className="text-slate-900 font-bold">Anantapur</strong>, SMR Car Travels has earned the trust of over 1,000+ local families, business leaders, and outstation travelers. Every trip is backed by personal accountability, verified drivers, pristine AC vehicles, and punctual service.
            </p>

            {/* Core Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 shadow-xs space-y-1">
                <div className="flex items-center gap-2 text-sm font-bold text-[#0B1F3A]">
                  <CheckCircle2 className="w-4 h-4 text-[#1769FF] shrink-0" />
                  <span>Personalized Service</span>
                </div>
                <p className="text-xs text-slate-500 font-medium leading-normal">
                  Dedicated customer care and immediate support for every traveler.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 shadow-xs space-y-1">
                <div className="flex items-center gap-2 text-sm font-bold text-[#0B1F3A]">
                  <Award className="w-4 h-4 text-[#00B8D9] shrink-0" />
                  <span>Uncompromised Safety</span>
                </div>
                <p className="text-xs text-slate-500 font-medium leading-normal">
                  Pristine AC vehicles, GPS tracking, and safety-certified drivers.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-2xl font-bold text-sm text-white bg-linear-to-r from-[#1769FF] via-[#1254D4] to-[#00B8D9] hover:from-[#1254D4] hover:to-[#00B8D9] shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/35 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Book Your Ride Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${SITE_CONFIG.contactPhone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl font-bold text-sm text-[#0B1F3A] bg-white border border-slate-200 hover:bg-slate-50 shadow-sm transition-all duration-300"
              >
                <PhoneCall className="w-4 h-4 text-[#1769FF]" />
                <span>Call {SITE_CONFIG.contactPhone}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
