import React, { useState, useEffect } from 'react';
import { SMRLogo } from './SMRLogo';
import { Menu, X, ArrowRight, Phone, Car, MapPin, HelpCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { SITE_CONFIG } from '../config/siteConfig';

interface NavbarProps {
  onOpenBooking?: (carName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section for active nav link indicator
      const sections = ['hero', 'services', 'fleet', 'location', 'faqs', 'about'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'Services', href: '#services', id: 'services', icon: Sparkles },
    { name: 'Fleet', href: '#fleet', id: 'fleet', icon: Car },
    { name: 'GPS Location', href: '#location', id: 'location', icon: MapPin },
    { name: 'FAQs', href: '#faqs', id: 'faqs', icon: HelpCircle },
    { name: 'About', href: '#about', id: 'about', icon: ShieldCheck },
  ];

  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    '🚕 Hello SMR Car Travels! I would like to book a ride.'
  )}`;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-2.5 sm:py-3'
          : 'py-3.5 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Floating Capsule Glass Card */}
        <div
          className={`relative rounded-2xl sm:rounded-full transition-all duration-500 border ${
            isScrolled
              ? 'bg-white/95 backdrop-blur-2xl shadow-xl shadow-blue-500/10 border-slate-200/90 py-2 sm:py-2.5 px-3.5 sm:px-5 ring-1 ring-slate-900/5'
              : 'bg-white/85 backdrop-blur-xl shadow-lg shadow-slate-900/5 border-white/80 py-2.5 sm:py-3 px-4 sm:px-6'
          }`}
        >
          {/* Subtle Ambient Top Shimmer Line */}
          <div className="absolute top-0 inset-x-8 h-[1.5px] bg-linear-to-r from-transparent via-[#1769FF]/30 to-transparent pointer-events-none rounded-full" />

          <div className="flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Brand Logo & Live Status */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="#hero"
                className="group flex items-center transition-transform duration-300 hover:scale-[1.02]"
                aria-label="SMR Car Travels Home"
              >
                <SMRLogo size="md" />
              </a>

              {/* 24/7 Live Pill for Extra Trust */}
              <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-extrabold border border-emerald-200/80 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span>24/7 Anantapur Active</span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav
              aria-label="Main Navigation"
              className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-slate-100/70 border border-slate-200/80 backdrop-blur-md shadow-inner"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs font-extrabold transition-all duration-300 ${
                      isActive
                        ? 'text-white bg-linear-to-r from-[#1769FF] to-[#00B8D9] shadow-md shadow-blue-500/25'
                        : 'text-[#0B1F3A] hover:text-[#1769FF] hover:bg-white/90'
                    }`}
                  >
                    <span>{link.name}</span>
                  </a>
                );
              })}
            </nav>

            {/* Desktop Quick Actions */}
            <div className="hidden md:flex items-center gap-2 lg:gap-2.5">
              
              {/* Call Us Button */}
              <a
                href={`tel:${SITE_CONFIG.contactPhone}`}
                title={`Call ${SITE_CONFIG.contactPhone}`}
                className="group inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-full font-extrabold text-xs text-[#0B1F3A] bg-slate-50 hover:bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#1769FF]/40 hover:text-[#1769FF] transition-all duration-300"
              >
                <div className="w-5 h-5 rounded-full bg-blue-50 text-[#1769FF] flex items-center justify-center group-hover:bg-[#1769FF] group-hover:text-white transition-colors">
                  <Phone className="w-3 h-3" />
                </div>
                <span>Call Us</span>
              </a>

              {/* WhatsApp Us Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Instant WhatsApp Booking"
                className="group inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full font-extrabold text-xs text-white bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-md shadow-emerald-600/20 hover:shadow-lg hover:shadow-emerald-600/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>WhatsApp</span>
              </a>

              {/* Book Ride Button */}
              <button
                onClick={() => onOpenBooking && onOpenBooking()}
                className="group relative inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full font-black text-xs text-white bg-linear-to-r from-[#1769FF] via-[#1254D4] to-[#00B8D9] hover:from-[#1254D4] hover:to-[#00B8D9] shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/35 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
              >
                {/* Glowing Shimmer */}
                <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-300 transition-transform duration-1000" />
                <span className="relative z-10">Book Ride</span>
                <ArrowRight className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Quick Action Buttons & Hamburger Menu */}
            <div className="flex md:hidden items-center gap-1.5">
              {/* Call Icon */}
              <a
                href={`tel:${SITE_CONFIG.contactPhone}`}
                className="p-2 rounded-full bg-blue-50 text-[#1769FF] border border-blue-100 shadow-xs active:scale-95 transition-transform"
                aria-label="Call SMR Travels"
              >
                <Phone className="w-3.5 h-3.5" />
              </a>

              {/* WhatsApp Icon */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-emerald-600 text-white shadow-xs active:scale-95 transition-transform"
                aria-label="WhatsApp SMR Travels"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
              </a>

              {/* Book Ride CTA Button */}
              <button
                onClick={() => onOpenBooking && onOpenBooking()}
                className="px-3.5 py-1.5 rounded-full text-xs font-black text-white bg-linear-to-r from-[#1769FF] to-[#00B8D9] shadow-md shadow-blue-500/20 active:scale-95 transition-transform"
              >
                Book
              </button>

              {/* Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full bg-slate-100 text-[#0B1F3A] border border-slate-200 focus:outline-none active:scale-95 transition-transform"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>

          </div>

          {/* Mobile Drawer Dropdown Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pt-4 pb-2 mt-3 border-t border-slate-200/80 space-y-4 animate-in slide-in-from-top-2 duration-300">
              
              {/* Mobile Navigation Links */}
              <nav className="grid grid-cols-2 gap-1.5">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-extrabold transition-colors ${
                        isActive
                          ? 'text-[#1769FF] bg-blue-50 border border-blue-200/80'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {Icon && <Icon className="w-3.5 h-3.5 text-[#1769FF]" />}
                      <span>{link.name}</span>
                    </a>
                  );
                })}
              </nav>

              {/* Mobile Action Buttons */}
              <div className="pt-2 border-t border-slate-200/80 flex flex-col gap-2">
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${SITE_CONFIG.contactPhone}`}
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-bold text-xs text-[#0B1F3A] bg-slate-50 border border-slate-200 hover:bg-slate-100"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#1769FF]" />
                    <span>Call 1</span>
                  </a>

                  <a
                    href={`tel:${SITE_CONFIG.contactPhone2}`}
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-bold text-xs text-[#0B1F3A] bg-slate-50 border border-slate-200 hover:bg-slate-100"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#1769FF]" />
                    <span>Call 2</span>
                  </a>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs text-white bg-linear-to-r from-emerald-600 to-teal-600 shadow-md"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Chat on WhatsApp (30s Booking)</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenBooking) onOpenBooking();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs text-white bg-linear-to-r from-[#1769FF] via-[#1254D4] to-[#00B8D9] shadow-lg shadow-blue-500/20"
                >
                  <span>Book Ride Online</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </header>
  );
};

export default Navbar;
