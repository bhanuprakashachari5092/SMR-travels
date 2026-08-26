import React from 'react';
import { ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { SITE_CONFIG } from '../config/siteConfig';

interface CTAProps {
  onOpenBooking: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onOpenBooking }) => {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    '\u{1F697} Hello SMR Car Travels! I would like to inquire about booking a ride.'
  )}`;

  return (
    <section className="py-20 relative overflow-hidden bg-linear-to-br from-[#071426] via-[#0B1F3A] to-[#1769FF]">
      {/* Moving background light trails effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 bg-[#1769FF]/20 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-10 sm:p-16 border border-white/20 relative overflow-hidden shadow-2xl">
          {/* Top highlight accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-[#1769FF] via-[#00B8D9] to-[#C9A227]" />

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Ready for Your Next <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-cyan-200 to-blue-200">Journey?</span>
          </h2>

          <p className="text-base sm:text-lg text-blue-100/90 max-w-2xl mx-auto mb-8 font-medium">
            Book your ride with SMR Car Travels in just a few clicks. Fast, transparent fare confirmation via WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* White primary button with blue text */}
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-sm text-[#1769FF] bg-white hover:bg-slate-100 shadow-xl shadow-black/20 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Book Your Ride</span>
              <ArrowRight className="w-4 h-4 text-[#1769FF]" />
            </button>

            {/* WhatsApp direct link opening WhatsApp chat */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-sm text-white bg-emerald-700 hover:bg-emerald-800 border border-emerald-600/30 shadow-lg shadow-emerald-700/30 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="w-4.5 h-4.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};


