import React, { useState } from 'react';
import { FLEET } from '../config/siteConfig';
import { Users, Briefcase, Snowflake, Star, CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface FleetProps {
  onSelectCar: (carName: string) => void;
}

export const Fleet: React.FC<FleetProps> = ({ onSelectCar }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Sedan', 'SUV', 'Multi-Utility', 'Executive Traveller', 'Luxury Minibus'];

  const filteredFleet = selectedCategory === 'All' 
    ? FLEET 
    : FLEET.filter(car => car.category === selectedCategory);

  return (
    <section id="fleet" className="py-20 relative overflow-hidden bg-white">
      {/* Subtle Background radial glow */}
      <div className="absolute top-1/3 left-0 w-125 h-125 bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-[#1769FF] uppercase tracking-widest shadow-sm">
            <span>LUXURY FLEET</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F3A] tracking-tight">
            Our Premium <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1769FF] via-[#3157D5] to-[#00B8D9]">Fleet</span>
          </h2>

          <p className="text-base text-slate-600 font-medium">
            Choose from standard sedans to high-end executive SUVs & Travellers, all meticulously maintained and sanitized.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-linear-to-r from-[#1769FF] to-[#00B8D9] text-white shadow-md shadow-blue-500/20'
                  : 'bg-slate-100 text-[#0B1F3A] hover:bg-slate-200 border border-slate-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredFleet.map((car) => (
            <div
              key={car.id}
              className="group bg-white rounded-3xl overflow-hidden border border-[#E2E8F0] flex flex-col justify-between hover:border-[#1769FF]/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transform hover:-translate-y-1"
            >
              {/* Image & Badge Header */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-linear-to-b from-[#F0F6FF] via-white to-[#F8FAFC] flex items-center justify-center p-4">
                <img
                  src={car.image}
                  alt={car.name}
                  className="max-h-50 sm:max-h-57.5 w-auto object-contain transform group-hover:scale-105 transition-transform duration-700 drop-shadow-[0_12px_24px_rgba(11,31,58,0.15)]"
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-xs font-bold text-[#1769FF] shadow-sm">
                  {car.category}
                </div>

                {car.isPopular && (
                  <div className="absolute top-4 right-4 px-3.5 py-1 rounded-full bg-linear-to-r from-[#C9A227] to-[#B08C1E] text-xs font-bold text-white shadow-md">
                    POPULAR CHOICE
                  </div>
                )}
              </div>

              {/* Vehicle Body Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-[#0B1F3A] group-hover:text-[#1769FF] transition-colors">
                      {car.name}
                    </h3>

                    {/* Star Comfort Rating with Selective Gold Accent */}
                    <div className="flex items-center gap-1 text-[#C9A227]">
                      {Array.from({ length: car.comfortRating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#C9A227]" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs font-bold text-[#1769FF] mb-4">
                    {car.tagline}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {car.description}
                  </p>

                  {/* Vehicle Spec Badges Grid */}
                  <div className="grid grid-cols-3 gap-3 mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="flex flex-col items-center justify-center text-center">
                      <Users className="w-4 h-4 text-[#1769FF] mb-1" />
                      <span className="text-[11px] text-slate-500 font-medium">Capacity</span>
                      <span className="text-xs font-bold text-[#0B1F3A]">{car.seats} Seats</span>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center border-x border-slate-200">
                      <Briefcase className="w-4 h-4 text-[#00B8D9] mb-1" />
                      <span className="text-[11px] text-slate-500 font-medium">Luggage</span>
                      <span className="text-xs font-bold text-[#0B1F3A]">{car.luggage} Bags</span>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center">
                      <Snowflake className="w-4 h-4 text-[#3157D5] mb-1" />
                      <span className="text-[11px] text-slate-500 font-medium">Climate</span>
                      <span className="text-xs font-bold text-[#0B1F3A]">Full AC</span>
                    </div>
                  </div>

                  {/* Feature Checkmarks */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {car.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Book Vehicle CTA */}
                <button
                  onClick={() => onSelectCar(car.name)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-sm text-white bg-linear-to-r from-[#1769FF] via-[#1254D4] to-[#00B8D9] hover:from-[#1254D4] hover:to-[#00B8D9] shadow-lg shadow-blue-500/20 hover:shadow-cyan-500/30 transition-all duration-300"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Book {car.name} Now</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

