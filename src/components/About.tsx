import React, { useState, useEffect } from 'react';
import { Shield, Award, Clock, HeartHandshake, ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDE_VEHICLES = [
  {
    name: 'Suzuki Ertiga (7 Seater)',
    tag: 'Executive SUV',
    image: '/images/about/ertiga.png',
  },
  {
    name: 'Swift Dzire',
    tag: 'Sedan Class',
    image: '/images/about/dzire.png',
  },
  {
    name: 'Toyota Etios',
    tag: 'Outstation Sedan',
    image: '/images/about/etios.png',
  },
  {
    name: 'Force Toofan',
    tag: 'Rugged Multi-Utility',
    image: '/images/about/toofan.png',
  },
  {
    name: 'Tempo Traveller (12+ Seater)',
    tag: 'Group Luxury',
    image: '/images/about/traveller.png',
  },
  {
    name: 'SMR Luxury Minibus',
    tag: '20+ Seater Executive',
    image: '/images/about/minibus.png',
  },
];

export const About: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDE_VEHICLES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDE_VEHICLES.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDE_VEHICLES.length) % SLIDE_VEHICLES.length);
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Column - Automatic Vehicle Slideshow Carousel */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden bg-[#FFFFFF] border border-slate-200/90 shadow-2xl p-4 sm:p-6 group min-h-[380px] sm:min-h-[440px] flex flex-col justify-between">
              
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Top Vehicle Label Badge */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-blue-100 text-xs font-extrabold text-[#1769FF] shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#1769FF] animate-pulse" />
                  <span>{SLIDE_VEHICLES[currentSlide].name}</span>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200">
                  {SLIDE_VEHICLES[currentSlide].tag}
                </span>
              </div>

              {/* Main Sliding Image Display */}
              <div className="relative z-10 my-auto py-3 flex items-center justify-center h-[260px] sm:h-[310px] overflow-hidden">
                <img
                  key={SLIDE_VEHICLES[currentSlide].image}
                  src={SLIDE_VEHICLES[currentSlide].image}
                  alt={SLIDE_VEHICLES[currentSlide].name}
                  className="max-h-[220px] sm:max-h-[260px] max-w-[90%] w-auto object-contain transform transition-all duration-700 ease-in-out group-hover:scale-105 drop-shadow-[0_16px_28px_rgba(11,31,58,0.16)] animate-in fade-in zoom-in-95 duration-500"
                />
              </div>

              {/* Manual Left/Right Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/90 hover:bg-white text-[#0B1F3A] hover:text-[#1769FF] border border-slate-200 shadow-md opacity-80 hover:opacity-100 transition-all hover:scale-110"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/90 hover:bg-white text-[#0B1F3A] hover:text-[#1769FF] border border-slate-200 shadow-md opacity-80 hover:opacity-100 transition-all hover:scale-110"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Bottom Dot Nav Indicators */}
              <div className="relative z-10 flex items-center justify-center gap-2 pt-2">
                {SLIDE_VEHICLES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentSlide === idx
                        ? 'w-7 bg-[#1769FF]'
                        : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

            </div>
          </div>

          {/* Right Copy Column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-[#1769FF] uppercase tracking-widest shadow-sm">
              <span>OUR STORY & VALUES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight leading-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1769FF] to-[#00B8D9]">SMR Car Travels</span>
            </h2>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              SMR Car Travels provides reliable, comfortable, and professional travel solutions for local, outstation, airport, and corporate transportation. Designed around your journey, we turn everyday road travel into an effortless executive experience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div className="flex items-center gap-2 text-[#00B8D9] font-bold text-sm">
                  <Shield className="w-4 h-4" />
                  <span>Uncompromised Safety</span>
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  GPS real-time tracking, emergency assistance & defensive driver training.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div className="flex items-center gap-2 text-[#1769FF] font-bold text-sm">
                  <Clock className="w-4 h-4" />
                  <span>On-Time Guarantee</span>
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  Chauffeurs dispatched 10-15 minutes ahead of scheduled time.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                  <HeartHandshake className="w-4 h-4" />
                  <span>Transparent Rates</span>
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  Fixed pricing with zero hidden surcharges or surprise billing.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div className="flex items-center gap-2 text-[#C9A227] font-bold text-sm">
                  <Award className="w-4 h-4" />
                  <span>Executive Comfort</span>
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  Pristine AC, plush upholstery, mobile chargers & bottled water.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

