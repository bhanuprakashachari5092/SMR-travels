import React from 'react';
import type { FestivalTheme } from '../../types/festival';

interface FestivalFloatingEffectsProps {
  festival: FestivalTheme | null;
}

export const FestivalFloatingEffects: React.FC<FestivalFloatingEffectsProps> = ({ festival }) => {
  if (!festival || !festival.icons || festival.icons.length === 0) {
    return null;
  }

  // Generate 8 subtle floating elements at staggered screen positions
  const particles = [
    { icon: festival.icons[0 % festival.icons.length], left: '5%', top: '15%', delay: '0s', duration: '6s', size: 'text-xl sm:text-2xl' },
    { icon: festival.icons[1 % festival.icons.length], left: '92%', top: '22%', delay: '1.2s', duration: '7s', size: 'text-lg sm:text-xl' },
    { icon: festival.icons[2 % festival.icons.length], left: '12%', top: '45%', delay: '2.5s', duration: '8s', size: 'text-xl sm:text-3xl' },
    { icon: festival.icons[3 % festival.icons.length] || festival.icons[0], left: '88%', top: '60%', delay: '0.8s', duration: '6.5s', size: 'text-base sm:text-xl' },
    { icon: festival.icons[0 % festival.icons.length], left: '8%', top: '80%', delay: '3s', duration: '7.5s', size: 'text-xl sm:text-2xl' },
    { icon: festival.icons[1 % festival.icons.length], left: '94%', top: '88%', delay: '1.8s', duration: '8.5s', size: 'text-lg sm:text-2xl' },
  ];

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-30 overflow-hidden select-none"
    >
      {particles.map((p, idx) => (
        <div
          key={idx}
          className={`absolute ${p.size} opacity-40 hover:opacity-80 transition-opacity animate-float drop-shadow-md filter blur-[0.3px]`}
          style={{
            left: p.left,
            top: p.top,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        >
          {p.icon}
        </div>
      ))}
    </div>
  );
};
