import React from 'react';
import { Sparkles, ArrowRight, X, SlidersHorizontal } from 'lucide-react';
import type { FestivalTheme } from '../../types/festival';

interface FestivalBannerProps {
  festival: FestivalTheme;
  onOpenBooking: () => void;
  onOpenSwitcher: () => void;
  onDismiss: () => void;
  isPreviewMode: boolean;
}

export const FestivalBanner: React.FC<FestivalBannerProps> = ({
  festival,
  onOpenBooking,
  onOpenSwitcher,
  onDismiss,
  isPreviewMode
}) => {
  return (
    <aside
      aria-label="Festive Announcement"
      className={`relative z-40 border-b border-white/15 shadow-md backdrop-blur-md transition-all duration-500 overflow-hidden ${festival.themeColors.bannerBg}`}
    >
      {/* Subtle Animated Shimmer Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-white/40 to-transparent animate-pulse" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex flex-wrap items-center justify-between gap-2 sm:gap-4">
        
        {/* Left Side: Festive Badge & Greeting Message */}
        <div className="flex items-center gap-2.5 sm:gap-3.5 flex-1 min-w-[280px]">
          
          {/* Pulsing Icon Badge */}
          <div className={`shrink-0 px-2.5 py-1 rounded-full border text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-xs ${festival.themeColors.badgeBg} ${festival.themeColors.badgeText}`}>
            <span className="text-sm leading-none animate-bounce">{festival.icons[0]}</span>
            <span className="hidden xs:inline">{festival.offerBadge}</span>
          </div>

          {/* Festive Greetings Text */}
          <div className="leading-tight">
            <p className="text-xs sm:text-sm font-extrabold tracking-tight flex items-center gap-1.5 flex-wrap">
              <span>{festival.greeting}</span>
              {festival.teluguName && (
                <span className="text-[11px] font-semibold text-white/80 hidden md:inline">
                  • {festival.teluguName}
                </span>
              )}
            </p>
            <p className="text-[10px] sm:text-xs font-medium text-white/70 truncate hidden sm:block">
              {festival.tagline}
            </p>
          </div>
        </div>

        {/* Right Side: CTA Button + Preview Mode Tag + Dismiss Button */}
        <div className="flex items-center gap-2 sm:gap-3 ml-auto">
          
          {isPreviewMode && (
            <span className="px-2 py-0.5 rounded-md bg-white/20 text-[10px] font-bold text-white uppercase tracking-widest border border-white/30 hidden lg:inline">
              Preview Mode Active
            </span>
          )}

          {/* Festival Switcher Trigger */}
          <button
            onClick={onOpenSwitcher}
            title="Preview all Indian & Telugu Festival Themes"
            aria-label="Preview Festival Themes"
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white/90 hover:text-white border border-white/20 transition-all text-xs flex items-center gap-1 font-medium"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span className="text-[11px] hidden sm:inline">Theme Switcher</span>
          </button>

          {/* CTA Button */}
          <button
            onClick={onOpenBooking}
            className={`inline-flex items-center justify-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-xl font-black text-xs text-slate-900 bg-white hover:bg-slate-100 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{festival.bannerCtaText}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Dismiss Button */}
          <button
            onClick={onDismiss}
            aria-label="Dismiss banner"
            title="Dismiss Announcement"
            className="p-1 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>
    </aside>
  );
};
