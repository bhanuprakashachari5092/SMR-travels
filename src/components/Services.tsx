import React from 'react';
import { SERVICES } from '../config/siteConfig';
import { 
  Building2, 
  Compass, 
  PlaneTakeoff, 
  ArrowRightLeft, 
  RotateCcw, 
  Briefcase
} from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-5 h-5 text-[#1769FF]" />;
      case 'Compass': return <Compass className="w-5 h-5 text-[#00B8D9]" />;
      case 'PlaneTakeoff': return <PlaneTakeoff className="w-5 h-5 text-[#3157D5]" />;
      case 'ArrowRightLeft': return <ArrowRightLeft className="w-5 h-5 text-emerald-600" />;
      case 'RotateCcw': return <RotateCcw className="w-5 h-5 text-[#1769FF]" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-[#C9A227]" />;
      default: return <Compass className="w-5 h-5 text-[#1769FF]" />;
    }
  };

  return (
    <section id="services" className="py-20 relative overflow-hidden bg-[#F8FAFC]">
      {/* Background Accent */}
      <div className="absolute top-1/2 right-0 w-125 h-125 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-extrabold text-[#1769FF] uppercase tracking-widest shadow-sm">
            <span>OUR OFFERINGS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F3A] tracking-tight">
            Travel Made <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1769FF] to-[#00B8D9]">Simple</span>
          </h2>

          <p className="text-base text-slate-600 font-medium">
            Tailored chauffeur services designed for business professionals, families, and city commuters.
          </p>
        </div>

        {/* Clean Open Text Format List (No Card Boxes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              onClick={() => onSelectService(srv.title)}
              className="group cursor-pointer text-left space-y-3 p-2 border-b border-slate-200/80 pb-6 hover:border-[#1769FF] transition-colors duration-300"
            >
              {/* Service Title with Icon */}
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-blue-50 border border-blue-100/80 group-hover:bg-[#1769FF] group-hover:text-white transition-colors duration-300">
                  {getIcon(srv.iconName)}
                </div>
                <h3 className="text-xl font-extrabold text-[#0B1F3A] group-hover:text-[#1769FF] transition-colors">
                  {srv.title}
                </h3>
              </div>

              {/* Service Description Text */}
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                {srv.shortDesc}
              </p>

              {/* Highlights Text Format */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 font-semibold pt-1">
                {srv.highlights.map((h, i) => (
                  <span key={i} className="flex items-center gap-1.5">
                    {i > 0 && <span className="text-slate-300">•</span>}
                    <span className="text-slate-700">{h}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};



