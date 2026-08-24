import React from 'react';
import { Calendar, Sparkles, X, CheckCircle2, RotateCcw } from 'lucide-react';
import { FESTIVALS_LIST } from '../../utils/festivalCalendar';
import type { FestivalTheme } from '../../types/festival';

interface FestivalSwitcherModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeFestival: FestivalTheme | null;
  selectedPreviewId: string | null;
  onSelectPreview: (festivalId: string | null) => void;
}

export const FestivalSwitcherModal: React.FC<FestivalSwitcherModalProps> = ({
  isOpen,
  onClose,
  activeFestival,
  selectedPreviewId,
  onSelectPreview
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="px-6 py-5 bg-linear-to-r from-slate-900 via-blue-950 to-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-amber-400 border border-white/15">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-extrabold tracking-tight text-white flex items-center gap-2">
                <span>Festival Theme Switcher</span>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] uppercase font-black border border-amber-500/30">
                  Interactive Preview
                </span>
              </h3>
              <p className="text-xs text-slate-300">
                Automatic Indian & Telugu Festival Engine for SMR Car Travels
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Auto-Calendar Status Bar */}
        <div className="px-6 py-3.5 bg-blue-50/80 border-b border-blue-100 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-bold text-[#0B1F3A]">
            <Calendar className="w-4 h-4 text-[#1769FF]" />
            <span>
              Real Calendar Mode:{' '}
              <strong className="text-emerald-600">
                {activeFestival ? `${activeFestival.name} Active Today` : 'Standard Modern Luxury Theme'}
              </strong>
            </span>
          </div>

          {selectedPreviewId && (
            <button
              onClick={() => onSelectPreview(null)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-extrabold text-[#1769FF] bg-white border border-blue-200 hover:bg-blue-50 shadow-2xs transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset to Auto Calendar</span>
            </button>
          )}
        </div>

        {/* Festival Cards Grid */}
        <div className="p-6 overflow-y-auto max-h-[60vh] grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {FESTIVALS_LIST.map((festival) => {
            const isSelected = selectedPreviewId === festival.id || (!selectedPreviewId && activeFestival?.id === festival.id);

            return (
              <button
                key={festival.id}
                onClick={() => {
                  onSelectPreview(festival.id);
                  onClose();
                }}
                className={`text-left p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
                  isSelected
                    ? 'border-[#1769FF] bg-blue-50/70 shadow-md ring-2 ring-[#1769FF]/20'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/60 shadow-2xs'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl leading-none">{festival.icons[0]}</span>
                    <div>
                      <h4 className="text-sm font-extrabold text-[#0B1F3A] group-hover:text-[#1769FF] transition-colors">
                        {festival.name}
                      </h4>
                      <p className="text-[11px] font-semibold text-slate-500 line-clamp-1">
                        {festival.teluguName}
                      </p>
                    </div>
                  </div>

                  {isSelected && (
                    <CheckCircle2 className="w-4 h-4 text-[#1769FF] shrink-0" />
                  )}
                </div>

                <div className="mt-2.5 flex items-center justify-between text-[11px] font-semibold text-slate-600">
                  <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-bold text-[10px]">
                    {festival.startDate.day}/{festival.startDate.month} – {festival.endDate.day}/{festival.endDate.month}
                  </span>
                  <span className="text-emerald-700 font-bold text-[10px]">
                    {festival.offerBadge}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <p className="text-xs text-slate-500 font-medium">
            Themes change automatically on real dates throughout the year.
          </p>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl font-bold text-xs text-white bg-linear-to-r from-[#1769FF] to-[#00B8D9] hover:from-[#1254D4] hover:to-[#00B8D9] shadow-md transition-all"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
