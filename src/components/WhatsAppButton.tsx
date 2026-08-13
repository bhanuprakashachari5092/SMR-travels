import React, { useState } from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface WhatsAppButtonProps {
  onOpenBooking: () => void;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ onOpenBooking }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Hover Tooltip Pill */}
      <div
        className={`px-4 py-2 rounded-2xl bg-white border border-emerald-200 text-xs font-bold text-emerald-700 shadow-xl transition-all duration-300 transform ${
          isHovered
            ? 'opacity-100 translate-x-0 scale-100'
            : 'opacity-0 translate-x-4 scale-95 pointer-events-none'
        }`}
      >
        Book on WhatsApp
      </div>

      {/* Floating Badge Button */}
      <button
        onClick={onOpenBooking}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group p-4 rounded-full bg-linear-to-r from-emerald-500 via-teal-500 to-emerald-600 text-white shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-400/50 transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none"
        aria-label="Open WhatsApp Booking"
      >
        {/* Subtle Pulse Ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-40 animate-ping pointer-events-none" />
        
        <WhatsAppIcon className="w-6 h-6 relative z-10" />
      </button>
    </div>
  );
};

