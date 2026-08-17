import React from 'react';
import { Shield, CheckCircle2 } from 'lucide-react';

export const VideoSection: React.FC = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-12 md:py-20 bg-linear-to-b from-[#EEF6FF] via-white to-[#F8FAFC] overflow-hidden border-b border-slate-200/80">
      {/* Soft Cyan Ambient Glow Highlights */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-linear-to-tr from-[#1769FF]/15 via-[#00B8D9]/15 to-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column - Video Showcase without audio */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden bg-white/80 backdrop-blur-xl border border-slate-200/90 shadow-2xl shadow-blue-500/15 group p-2.5 sm:p-4">
              <div className="relative aspect-video sm:aspect-4/3 rounded-2xl overflow-hidden bg-slate-900 shadow-inner">
                {/* Autoplay Muted Loop Video with Performance Intersection & Preload */}
                <video
                  ref={videoRef}
                  src="/SMR travels.mp4"
                  preload="metadata"
                  loop
                  muted
                  playsInline
                  disablePictureInPicture
                  disableRemotePlayback
                  controlsList="nodownload nofullscreen noremoteplayback"
                  onContextMenu={(e) => e.preventDefault()}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 brightness-95 pointer-events-none select-none"
                />
              </div>

              {/* Bottom Feature Micro Badges */}
              <div className="flex items-center justify-between gap-2 pt-3 px-2 text-xs font-semibold text-slate-600">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#1769FF]" />
                  <span>100% Safe & Insured</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Sanitized Air-Conditioned</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Text Copy */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-blue-200 text-xs font-extrabold tracking-wider text-[#1769FF] uppercase shadow-sm">
              <span>SMR TRAVELS IN ACTION</span>
            </div>

            {/* Section Heading */}
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B1F3A] leading-tight">
                Experience Luxury & Comfort{' '}
                <span className="block text-transparent bg-clip-text bg-linear-to-r from-[#1769FF] via-[#3157D5] to-[#00B8D9]">
                  Before You Book.
                </span>
              </h2>
            </div>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
              Watch a preview of our pristine fleet, well-maintained interiors, and courteous uniform chauffeurs ready to serve your every travel need.
            </p>

            {/* Feature Checklist */}
            <div className="space-y-3 pt-1">
              <div className="flex items-center gap-3 text-sm font-bold text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-[#1769FF] shrink-0" />
                <span>Pristine, sanitized AC vehicles (Sedans, SUVs & Travellers)</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-bold text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-[#00B8D9] shrink-0" />
                <span>Professional & verified uniformed chauffeurs</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-bold text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Punctual doorstep pickup & 24/7 active dispatch</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-bold text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-[#C9A227] shrink-0" />
                <span>Instant WhatsApp booking & transparent fixed fares</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};


