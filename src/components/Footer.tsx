import React from 'react';
import { SMRLogo } from './SMRLogo';
import { SITE_CONFIG, SERVICES } from '../config/siteConfig';
import { Phone, Mail, MapPin, Clock, ArrowUp } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

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
              <SMRLogo size="lg" darkBackground={true} />
            </a>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm pt-2">
              <strong className="text-white font-bold">SMR Car Travels</strong> by <strong className="text-[#00D8F6] font-bold">Mohammad Rafi</strong> is Anantapur&apos;s leading 24/7 travel service for outstation taxi booking, airport transfers, corporate travel, and family trips across South India.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-linear-to-r from-[#1769FF] to-[#00B8D9] hover:from-[#1254D4] hover:to-[#00B8D9] shadow-md transition-all"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Instant WhatsApp Booking</span>
              </button>
            </div>
          </div>

          {/* Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#hero" className="hover:text-[#00D8F6] transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-[#00D8F6] transition-colors">Services</a></li>
              <li><a href="#fleet" className="hover:text-[#00D8F6] transition-colors">Our Fleet</a></li>
              <li><a href="#routes" className="hover:text-[#00D8F6] transition-colors">Top Routes</a></li>
              <li><a href="#location" className="hover:text-[#00D8F6] transition-colors">Google Maps</a></li>
              <li><a href="#faqs" className="hover:text-[#00D8F6] transition-colors">FAQs</a></li>
              <li><a href="#about" className="hover:text-[#00D8F6] transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Services (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Services</h3>
            <ul className="space-y-2 text-sm">
              {SERVICES.map((srv) => (
                <li key={srv.id}>
                  <a href="#services" className="hover:text-[#00D8F6] transition-colors">
                    {srv.title}
                  </a>
                </li>
              ))}
              <li><a href="#routes" className="hover:text-[#00D8F6] transition-colors">Outstation Cabs & Airport Drops</a></li>
            </ul>
          </div>

          {/* Contact Details (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#1769FF] shrink-0 mt-1" />
                <div className="flex flex-col space-y-1">
                  <a href={`tel:${SITE_CONFIG.contactPhone}`} aria-label="Call primary phone +91 99895 99621" className="hover:text-white transition-colors py-1 inline-block">
                    {SITE_CONFIG.contactPhone}
                  </a>
                  <a href={`tel:${SITE_CONFIG.contactPhone2}`} aria-label="Call secondary phone +91 98664 34621" className="hover:text-white transition-colors py-1 inline-block">
                    {SITE_CONFIG.contactPhone2}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#00B8D9] shrink-0 mt-1" />
                <a href={`mailto:${SITE_CONFIG.contactEmail}`} aria-label="Send email to SMR Travels" className="hover:text-white transition-colors py-1 inline-block">
                  {SITE_CONFIG.contactEmail}
                </a>
              </li>

              <li className="flex items-start gap-2.5 group">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <div className="flex flex-col space-y-1">
                  <a
                    href={SITE_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="SMR Car Travels Address on Google Maps"
                    className="text-xs leading-relaxed text-slate-300 hover:text-[#00D8F6] transition-colors flex items-center gap-1.5 py-1"
                  >
                    <span>{SITE_CONFIG.address}</span>
                  </a>
                  <a
                    href={SITE_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open SMR Car Travels official Google Maps profile"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#00D8F6] hover:underline py-1"
                  >
                    <span>View on Google Maps</span>
                    <span className="text-[10px]">↗</span>
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                <span className="text-xs py-1">{SITE_CONFIG.openingHours}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* SEO Keyword Cloud & Local Travel Coverage Directory */}
        <div className="py-8 border-b border-white/10 space-y-4 text-xs text-slate-400">
          <div className="space-y-2">
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
              Popular Car Travel Searches in Anantapur (ATP)
            </h3>
            <div className="flex flex-wrap gap-2 text-[11px]">
              <a href="#hero" aria-label="Search SMR Car Travels Mohammad Rafi" className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-[#00D8F6] transition-colors">SMR Car Travels Mohammad Rafi</a>
              <a href="#services" aria-label="Search Car Travels in Anantapur" className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-[#00D8F6] transition-colors">Car Travels in Anantapur</a>
              <a href="#location" aria-label="Search Anantapur Car Travels Contact Number" className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-[#00D8F6] transition-colors">Anantapur Car Travels Contact Number</a>
              <a href="#routes" aria-label="Search Anantapur to Bangalore Airport Cab" className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-[#00D8F6] transition-colors">Anantapur to Bangalore Airport Cab</a>
              <a href="#routes" aria-label="Search Anantapur to Hyderabad Taxi" className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-[#00D8F6] transition-colors">Anantapur to Hyderabad Taxi</a>
              <a href="#routes" aria-label="Search Anantapur to Tirupati Balaji Car Package" className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-[#00D8F6] transition-colors">Anantapur to Tirupati Balaji Car Package</a>
              <a href="#fleet" aria-label="Search Innova Crysta Rental Anantapur" className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-[#00D8F6] transition-colors">Innova Crysta Rental Anantapur</a>
              <a href="#fleet" aria-label="Search Ertiga 7 Seater Cab Booking" className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-[#00D8F6] transition-colors">Ertiga 7 Seater Cab Booking</a>
              <a href="#fleet" aria-label="Search Tempo Traveller Hire Anantapur" className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-[#00D8F6] transition-colors">Tempo Traveller Hire Anantapur</a>
              <a href="#fleet" aria-label="Search Swift Dzire AC Cab" className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-[#00D8F6] transition-colors">Swift Dzire AC Cab</a>
              <a href="#services" aria-label="Search 24/7 Taxi Service Anantapur" className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-[#00D8F6] transition-colors">24/7 Taxi Service Anantapur</a>
              <a href="#about" aria-label="Search ATP Travels Mohammad Rafi" className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-[#00D8F6] transition-colors">ATP Travels Mohammad Rafi</a>
              <a href="#routes" aria-label="Search Puttaparthi Taxi Service" className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-[#00D8F6] transition-colors">Puttaparthi Taxi Service</a>
              <a href="#services" aria-label="Search Marriage Luxury Car Rental" className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-[#00D8F6] transition-colors">Marriage Luxury Car Rental</a>
              <a href="#services" aria-label="Search One Way Outstation Cab" className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-[#00D8F6] transition-colors">One Way Outstation Cab</a>
            </div>
          </div>

          <div className="space-y-1.5 pt-2">
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
              Areas & Surrounding Towns Served
            </h3>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Anantapur Clock Tower Area, Ram Nagar, Rudrampeta, Collectorate, JNTU Anantapur, Dharmavaram, Guntakal, Tadipatri, Hindupur, Kadiri, Puttaparthi, Rayadurg, Kalyandurg, Gooty, Kurnool, Kadapa, Bangalore, Hyderabad, Tirupati, and all major cities across Andhra Pradesh & Karnataka.
            </p>
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

