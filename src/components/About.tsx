import React, { useState, useEffect } from 'react';
import { Shield, Award, Clock, HeartHandshake, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const SLIDE_VEHICLES = [
  {
    name: 'Toyota Innova Crysta',
    tag: 'Executive Luxury SUV',
    image: '/images/innova-hero.webp',
  },
  {
    name: 'Suzuki Ertiga (7 Seater)',
    tag: 'Executive SUV',
    image: '/images/about/ertiga.webp',
  },
  {
    name: 'Swift Dzire',
    tag: 'Sedan Class',
    image: '/images/about/dzire.webp',
  },
  {
    name: 'Toyota Etios',
    tag: 'Outstation Sedan',
    image: '/images/about/etios.webp',
  },
  {
    name: 'Force Toofan',
    tag: 'Rugged Multi-Utility',
    image: '/images/about/toofan.webp',
  },
  {
    name: 'Tempo Traveller (12+ Seater)',
    tag: 'Group Luxury',
    image: '/images/about/traveller.webp',
  },
  {
    name: 'SMR Luxury Minibus',
    tag: '20+ Seater Executive',
    image: '/images/about/minibus.webp',
  },
];

interface AboutProps {
  onOpenBooking?: (carName?: string) => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
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
            <div className="relative rounded-3xl overflow-hidden bg-[#FFFFFF] border border-slate-200/90 shadow-2xl p-4 sm:p-6 group min-h-95 sm:min-h-110 flex flex-col justify-between">
              
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Top Vehicle Label Badge & Quick Book Action */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-blue-100 text-xs font-extrabold text-[#1769FF] shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#1769FF] animate-pulse" />
                  <span>{SLIDE_VEHICLES[currentSlide].name}</span>
                </div>
                {onOpenBooking && (
                  <button
                    onClick={() => onOpenBooking(SLIDE_VEHICLES[currentSlide].name)}
                    className="text-[11px] font-bold text-white bg-linear-to-r from-[#1769FF] to-[#00B8D9] hover:opacity-90 px-3 py-1 rounded-lg shadow-sm transition-all flex items-center gap-1 transform hover:scale-105"
                  >
                    <span>Book {SLIDE_VEHICLES[currentSlide].name.split(' ')[0]}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>

              {/* Main Sliding Image Display */}
              <div className="relative z-10 my-auto py-3 flex items-center justify-center h-65 sm:h-77.5 overflow-hidden">
                <img
                  key={SLIDE_VEHICLES[currentSlide].image}
                  src={SLIDE_VEHICLES[currentSlide].image}
                  alt={SLIDE_VEHICLES[currentSlide].name}
                  loading="lazy"
                  decoding="async"
                  width={340}
                  height={220}
                  className="max-h-55 sm:max-h-65 max-w-[90%] w-auto object-contain transform transition-all duration-700 ease-in-out group-hover:scale-105 drop-shadow-[0_16px_28px_rgba(11,31,58,0.16)] animate-in fade-in zoom-in-95"
                />
              </div>

              {/* Manual Left/Right Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/95 hover:bg-white text-[#0B1F3A] hover:text-[#1769FF] border border-slate-300 shadow-md transition-all hover:scale-110 cursor-pointer"
                aria-label="Previous vehicle slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/95 hover:bg-white text-[#0B1F3A] hover:text-[#1769FF] border border-slate-300 shadow-md transition-all hover:scale-110 cursor-pointer"
                aria-label="Next vehicle slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Bottom Dot Nav Indicators */}
              <div className="relative z-10 flex items-center justify-center gap-2 pt-2" role="tablist" aria-label="Vehicle slides">
                {SLIDE_VEHICLES.map((v, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      currentSlide === idx
                        ? 'w-7 bg-[#1769FF]'
                        : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to slide ${idx + 1}: ${v.name}`}
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
              About <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1769FF] to-[#00B8D9]">SMR Car Travels</span>
            </h2>

            <p className="text-base text-slate-700 leading-relaxed font-medium">
              SMR Car Travels provides reliable, comfortable, and professional travel solutions for local, outstation, airport, and corporate transportation. Designed around your journey, we turn everyday road travel into an effortless executive experience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div className="flex items-center gap-2 text-sky-700 font-bold text-sm">
                  <Shield className="w-4 h-4" />
                  <span>Uncompromised Safety</span>
                </div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  GPS real-time tracking, emergency assistance & defensive driver training.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div className="flex items-center gap-2 text-[#1769FF] font-bold text-sm">
                  <Clock className="w-4 h-4" />
                  <span>On-Time Guarantee</span>
                </div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Chauffeurs dispatched 10-15 minutes ahead of scheduled time.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                  <HeartHandshake className="w-4 h-4" />
                  <span>Transparent Rates</span>
                </div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Fixed pricing with zero hidden surcharges or surprise billing.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                  <Award className="w-4 h-4" />
                  <span>Executive Comfort</span>
                </div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
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

