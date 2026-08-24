import React from 'react';
import { MapPin, Navigation, ExternalLink, PhoneCall, Clock, CheckCircle2, Star, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface LocationSectionProps {
  onOpenBooking?: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="location" className="relative py-16 md:py-24 bg-linear-to-b from-[#EEF6FF] via-white to-[#F8FAFC] overflow-hidden border-t border-slate-200/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-extrabold tracking-wider text-[#1769FF] uppercase shadow-2xs">
            <MapPin className="w-3.5 h-3.5" />
            <span>ANANTAPUR HEADQUARTERS & GOOGLE MAPS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F3A] tracking-tight">
            SMR Car Travels on{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1769FF] via-[#3157D5] to-[#00B8D9]">
              Google Maps
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Located in the heart of <strong className="text-slate-900 font-bold">Anantapur</strong>. Find SMR Car Travels by <strong className="text-slate-900 font-bold">Mohammad Rafi</strong> for local rentals, outstation trips, and airport cab transfers.
          </p>
        </div>

        {/* Map & Location Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Embedded Google Map (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xl shadow-blue-500/10 p-2 sm:p-3 flex-1 flex flex-col min-h-95 sm:min-h-110">
              
              {/* Map Container */}
              <div className="relative w-full flex-1 rounded-2xl overflow-hidden bg-slate-100 min-h-85">
                <iframe
                  title="SMR Car Travels by Mohammad Rafi Anantapur Google Map Location"
                  src={SITE_CONFIG.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-85 absolute inset-0"
                />

                {/* Floating "Direct Location" pill on top of map */}
                <div className="absolute top-4 left-4 right-4 sm:right-auto z-10 flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md border border-slate-200 text-xs font-bold text-[#0B1F3A]">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span>SMR Car Travels • Anantapur Live GPS</span>
                </div>
              </div>

              {/* Bottom Quick Map Action Bar */}
              <div className="pt-3 px-1 flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-slate-500 font-medium flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#1769FF]" />
                  <span>Anantapur Main Hub • Live GPS Navigation</span>
                </span>

                <a
                  href={SITE_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-[#1769FF] hover:text-[#1254D4] hover:underline"
                >
                  <span>Open in Google Maps App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Google Business Profile Card & Actions (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-5 justify-between">
            
            {/* Business Details Card */}
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xl shadow-blue-500/5 space-y-6">
              
              {/* Google Verified Business Header */}
              <div className="flex items-start justify-between gap-4 pb-5 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-[11px] font-extrabold border border-emerald-200 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      Google Verified Local Business
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0B1F3A]">SMR Car Travels</h3>
                  <p className="text-xs text-[#1769FF] font-bold">By Mohammad Rafi • Anantapur</p>
                </div>

                {/* Rating Badge */}
                <div className="flex flex-col items-center bg-amber-50 px-3 py-2 rounded-2xl border border-amber-200 text-center shrink-0">
                  <div className="flex items-center gap-1 text-amber-600 font-extrabold text-sm">
                    <span>4.9</span>
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  </div>
                  <span className="text-[10px] text-amber-700 font-bold">1250+ Reviews</span>
                </div>
              </div>

              {/* Location & Contact Meta List */}
              <div className="space-y-3.5 text-sm">
                
                {/* Address Item */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1769FF] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Office Location (Anantapur)</h4>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      {SITE_CONFIG.address}
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Service Coverage</h4>
                    <p className="text-xs text-slate-600 font-medium">
                      24/7 Cab Booking in Anantapur & All Outstation Corridors
                    </p>
                  </div>
                </div>

                {/* Direct Phone Numbers */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Direct Hotline</h4>
                    <div className="flex flex-wrap gap-2 text-xs font-bold text-[#0B1F3A]">
                      <a href={`tel:${SITE_CONFIG.contactPhone}`} className="hover:text-[#1769FF] transition-colors">
                        {SITE_CONFIG.contactPhone}
                      </a>
                      <span className="text-slate-300">•</span>
                      <a href={`tel:${SITE_CONFIG.contactPhone2}`} className="hover:text-[#1769FF] transition-colors">
                        {SITE_CONFIG.contactPhone2}
                      </a>
                    </div>
                  </div>
                </div>

              </div>

              {/* Primary Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                {/* Open in Google Maps */}
                <a
                  href={SITE_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm text-white bg-linear-to-r from-[#1769FF] via-[#1254D4] to-[#00B8D9] hover:from-[#1254D4] hover:to-[#00B8D9] shadow-lg shadow-blue-500/20 hover:shadow-cyan-500/30 transition-all transform hover:-translate-y-0.5"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                {/* WhatsApp Chat */}
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                    '🚗 Hello SMR Car Travels! I need directions and ride booking from your location.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/20 transition-all transform hover:-translate-y-0.5"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                {/* Direct Booking Modal trigger */}
                {onOpenBooking && (
                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl font-bold text-xs sm:text-sm text-[#0B1F3A] bg-slate-100 hover:bg-slate-200 border border-slate-200 shadow-xs transition-all transform hover:-translate-y-0.5"
                  >
                    <span>Book Ride</span>
                  </button>
                )}
              </div>

            </div>

            {/* Micro Feature Notice */}
            <div className="p-4 rounded-2xl bg-white/70 border border-slate-200/80 flex items-center gap-3 text-xs text-slate-600">
              <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center text-[#1769FF] shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <p className="font-medium">
                Doorstep pickup available across all major city areas, airports & railway stations.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
