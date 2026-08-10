import React from 'react';
import { Car, Send, Navigation, ArrowRight } from 'lucide-react';

interface BookingProcessProps {
  onOpenBooking: () => void;
}

export const BookingProcess: React.FC<BookingProcessProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      step: '01',
      title: 'Choose Your Ride',
      description: 'Select your preferred Sedan, SUV or Executive vehicle based on your group size & luggage needs.',
      icon: <Car className="w-6 h-6 text-[#1769FF]" />
    },
    {
      step: '02',
      title: 'Send Your Details',
      description: 'Enter your pickup, drop, date & time to auto-generate your formatted WhatsApp booking message.',
      icon: <Send className="w-6 h-6 text-[#00B8D9]" />
    },
    {
      step: '03',
      title: 'Travel With SMR',
      description: 'Receive instant fare & driver confirmation on WhatsApp. Sit back, relax & enjoy your journey.',
      icon: <Navigation className="w-6 h-6 text-emerald-600" />
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-[#1769FF] uppercase tracking-widest shadow-sm">
            <span>EASY 3-STEP PROCESS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F3A] tracking-tight">
            How Booking <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1769FF] to-[#00B8D9]">Works</span>
          </h2>

          <p className="text-base text-slate-600 font-medium">
            Booking your taxi or outstation cab takes less than 30 seconds with no complex logins required.
          </p>
        </div>

        {/* 3 Step Process Container with Connecting Road Line */}
        <div className="relative">
          {/* Connecting Road Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-[15%] right-[15%] h-1 -translate-y-1/2 bg-gradient-to-r from-[#1769FF] via-[#00B8D9] to-emerald-500 opacity-40 z-0">
            <div className="w-full h-full bg-[linear-gradient(90deg,transparent_50%,#FFFFFF_50%)] bg-[size:16px_100%] animate-pulse" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((item) => (
              <div
                key={item.step}
                onClick={onOpenBooking}
                className="group cursor-pointer bg-white rounded-3xl p-8 border border-slate-200/80 text-center flex flex-col items-center shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-[#1769FF]/40 transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Step Number Circle */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    {item.icon}
                  </div>
                  <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-r from-[#1769FF] to-[#00B8D9] text-white text-xs font-extrabold flex items-center justify-center shadow-md">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0B1F3A] mb-3 group-hover:text-[#1769FF] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-4 font-normal">
                  {item.description}
                </p>

                <div className="mt-auto pt-2 flex items-center gap-1 text-xs font-bold text-[#1769FF] group-hover:translate-x-1 transition-transform">
                  <span>Start Step</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

