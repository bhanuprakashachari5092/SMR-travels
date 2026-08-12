import React from 'react';

export const FleetBanner: React.FC = () => {
  return (
    <section className="relative py-6 sm:py-10 bg-linear-to-b from-[#EEF6FF] via-white to-[#F8FAFC] overflow-hidden border-b border-slate-200/80">
      {/* Background Cyan Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-87.5 bg-linear-to-r from-blue-400/15 via-cyan-400/20 to-blue-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Full Fleet Lineup Image Seamlessly Displayed */}
        <div className="relative group max-w-6xl mx-auto">
          <img
            src="/images/smr-fleet-lineup.png"
            alt="SMR Car Travels Complete Vehicle Fleet Lineup"
            className="w-full h-auto object-contain transform group-hover:scale-[1.01] transition-transform duration-700 drop-shadow-[0_20px_30px_rgba(11,31,58,0.18)]"
          />
        </div>
      </div>
    </section>
  );
};


