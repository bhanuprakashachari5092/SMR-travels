import React from 'react';
import { SMRLogo } from './SMRLogo';
import { SITE_CONFIG, SERVICES } from '../config/siteConfig';
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="relative bg-[#071426] pt-16 pb-8 border-t border-white/10 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#hero">
              <SMRLogo size="md" darkBackground={true} />
            </a>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm pt-2">
              SMR Car Travels is your premier destination for professional chauffeur services, local taxis, airport pickups, and outstation trips.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#1769FF] to-[#00B8D9] hover:from-[#1254D4] hover:to-[#00B8D9] shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-white/20" />
                <span>Instant WhatsApp Booking</span>
              </button>
            </div>
          </div>

          {/* Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#hero" className="hover:text-[#00D8F6] transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-[#00D8F6] transition-colors">Services</a></li>
              <li><a href="#fleet" className="hover:text-[#00D8F6] transition-colors">Our Fleet</a></li>
              <li><a href="#why-us" className="hover:text-[#00D8F6] transition-colors">Why Choose Us</a></li>
              <li><a href="#about" className="hover:text-[#00D8F6] transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Services (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm">
              {SERVICES.map((srv) => (
                <li key={srv.id}>
                  <a href="#services" className="hover:text-[#00D8F6] transition-colors">
                    {srv.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#1769FF] flex-shrink-0 mt-0.5" />
                <a href={`tel:${SITE_CONFIG.contactPhone}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.contactPhone}
                </a>
              </li>

              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#00B8D9] flex-shrink-0 mt-0.5" />
                <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.contactEmail}
                </a>
              </li>

              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">{SITE_CONFIG.address}</span>
              </li>

              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#C9A227] flex-shrink-0 mt-0.5" />
                <span className="text-xs">{SITE_CONFIG.openingHours}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-2 text-slate-400">
            <span>© 2026 SMR Car Travels. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span>
              Developed by{' '}
              <a
                href="https://shaivika-it-technologies.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#00D8F6] hover:underline hover:text-white transition-colors"
              >
                Shaivika Groups
              </a>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#hero" className="hover:text-white transition-colors">Terms of Service</a>
            
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors flex items-center gap-1 ml-4 border border-white/10"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

