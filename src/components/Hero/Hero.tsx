import React from 'react';
import { MessageSquare, Calendar, ShieldCheck, Star, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenBooking?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-linear-to-b from-white via-[#F8FAFC] to-[#EEF6FF]">
      {/* Soft Cyan & Blue Atmospheric Glow Highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-100 h-100 bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle Light Grey Grid Pattern Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Toyota Innova Crysta Vehicle Image */}
          <div className="lg:col-span-6 order-1 relative flex flex-col items-center justify-center">
            {/* Soft Ambient Radial Glow Directly in Hero Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 sm:w-140 sm:h-140 bg-linear-to-tr from-[#1769FF]/30 via-[#00B8D9]/25 to-blue-400/15 rounded-full blur-3xl pointer-events-none" />

            {/* Toyota Innova Crysta Vehicle Image */}
            <div className="relative w-full py-4 sm:py-8 flex items-center justify-center z-10 group">
              {/* Ground Shadow & Ambient Blue Ground Lighting Reflection */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] h-14 bg-linear-to-r from-blue-600/30 via-cyan-500/25 to-blue-600/30 rounded-[100%] blur-2xl pointer-events-none" />
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[75%] h-6 bg-black/25 rounded-[100%] blur-lg pointer-events-none" />

              {/* Innova Crysta Image with glowing edges */}
              <img
                src="/images/innova-hero.png"
                alt="SMR Car Travels Toyota Innova Crysta Luxury Chauffeur Vehicle"
                fetchPriority="high"
                decoding="async"
                width={620}
                height={360}
                className="w-full max-w-155 h-auto object-contain transform group-hover:scale-105 transition-transform duration-700 hero-car-edge-glow relative z-10"
              />
            </div>
          </div>

          {/* Right Column - Hero Copy & Action Buttons */}
          <div className="lg:col-span-6 order-2 space-y-6 text-left">
            
            {/* Small Premium Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-blue-200 text-xs font-bold tracking-wider text-[#1769FF] uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#1769FF] animate-pulse" />
              <span>PREMIUM TRAVEL EXPERIENCE</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0B1F3A] leading-[1.1]">
                SMR{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1769FF] via-[#3157D5] to-[#00B8D9]">
                  Car Travels
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-extrabold text-[#0B1F3A] tracking-tight pt-1">
                Your Journey. Our Responsibility.
              </p>
            </div>

            {/* Supporting Subtext */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl font-medium leading-relaxed">
              Reliable, comfortable and professional travel experiences designed around you.
            </p>

            {/* Hero Feature Highlights */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <ShieldCheck className="w-4 h-4 text-[#1769FF] shrink-0" />
                <span>Verified Chauffeurs</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <Star className="w-4 h-4 text-[#C9A227] fill-[#C9A227] shrink-0" />
                <span>4.9 / 5 Rated Service</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <Calendar className="w-4 h-4 text-[#00B8D9] shrink-0" />
                <span>Transparent Fixed Pricing</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Instant WhatsApp Confirm</span>
              </div>
            </div>

            {/* Primary Action CTA Button */}
            <div className="pt-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-sm text-white bg-linear-to-r from-[#1769FF] via-[#1254D4] to-[#00B8D9] hover:from-[#1254D4] hover:to-[#00B8D9] shadow-xl shadow-blue-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Book Your Ride</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Micro Stat Badge */}
            <div className="pt-2 flex items-center gap-4 text-xs text-slate-500 border-t border-slate-200/80 mt-6">
              <div>
                <span className="text-[#0B1F3A] font-bold">1000+</span> Satisfied Travelers
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
              <div>
                <span className="text-[#0B1F3A] font-bold">24/7</span> Dispatch Active
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
