import React from 'react';
import { WHY_CHOOSE_US } from '../config/siteConfig';
import { 
  UserCheck, 
  ShieldCheck, 
  Clock, 
  BadgePercent, 
  MessageSquare, 
  HeartHandshake 
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-[#1769FF]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case 'Clock': return <Clock className="w-6 h-6 text-[#00B8D9]" />;
      case 'BadgePercent': return <BadgePercent className="w-6 h-6 text-[#C9A227]" />;
      case 'MessageSquare': return <MessageSquare className="w-6 h-6 text-emerald-600" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-[#1769FF]" />;
      default: return <ShieldCheck className="w-6 h-6 text-[#1769FF]" />;
    }
  };

  return (
    <section id="why-us" className="py-20 relative overflow-hidden bg-gradient-to-br from-[#F8FBFF] to-[#EEF6FF]">
      {/* Soft Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-[#1769FF] uppercase tracking-widest shadow-sm">
            <span>THE SMR DIFFERENCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F3A] tracking-tight">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1769FF] to-[#00B8D9]">SMR Car Travels?</span>
          </h2>

          <p className="text-base text-slate-600 font-medium">
            Built on trust, safety, and unmatched hospitality to make every journey memorable.
          </p>
        </div>

        {/* 6 Feature Grid with Subtle Floating Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 flex flex-col items-start shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-[#1769FF]/30 transition-all duration-300 transform hover:-translate-y-1.5 animate-float"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 flex items-center justify-center mb-6 shadow-sm">
                {getIcon(item.icon)}
              </div>

              <h3 className="text-xl font-bold text-[#0B1F3A] mb-2 flex items-center gap-2">
                <span className="text-[#1769FF] font-black">✓</span>
                <span>{item.title}</span>
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

