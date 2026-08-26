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
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section for iOS segmented switch
      const sections = ['hero', 'services', 'fleet', 'routes', 'location', 'faqs', 'about'];
      const scrollPos = window.scrollY + 220;

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
    { name: 'Routes', href: '#routes', id: 'routes', icon: MapPin },
    { name: 'Location', href: '#location', id: 'location', icon: MapPin },
    { name: 'FAQs', href: '#faqs', id: 'faqs', icon: HelpCircle },
    { name: 'About', href: '#about', id: 'about', icon: ShieldCheck },
  ];

  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    '🚕 Hello SMR Car Travels! I would like to book a ride.'
  )}`;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'py-2 sm:py-3'
          : 'py-3.5 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* iPhone Floating Liquid Glass Capsule */}
        <div
          className={`relative rounded-full transition-all duration-500 ease-out ${
            isScrolled
              ? 'ios-glass-scrolled py-2 sm:py-2 px-3.5 sm:px-5'
              : 'ios-glass-capsule py-2.5 sm:py-2.5 px-4 sm:px-6'
          }`}
        >
          {/* iOS Specular Glass Surface Refraction Line */}
          <div className="absolute top-0 inset-x-10 h-px bg-linear-to-r from-transparent via-white to-transparent pointer-events-none opacity-90 rounded-full" />

          <div className="flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Brand Logo & iOS Dynamic Status Pill */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="#hero"
                className="group flex items-center transition-transform duration-300 active:scale-95"
                aria-label="SMR Car Travels Home"
              >
                <SMRLogo size="md" />
              </a>

              {/* iOS Style Live Dynamic Status Badge */}
              <div className="hidden xl:flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/3 border border-black/6 backdrop-blur-md shadow-inner text-[11px] font-bold text-slate-800">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>24/7 Anantapur</span>
              </div>
            </div>

            {/* iOS Segmented Navigation Pill Switcher */}
            <nav
              aria-label="Main Navigation"
              className="hidden lg:flex items-center gap-0.5 p-1 rounded-full ios-segmented-container backdrop-blur-xl"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ease-out select-none ${
                      isActive
                        ? 'text-[#0B1F3A] bg-white shadow-md shadow-slate-900/8 scale-100 font-extrabold ring-1 ring-black/5'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/40'
                    }`}
                  >
                    <span>{link.name}</span>
                  </a>
                );
              })}
            </nav>

            {/* iPhone Style Right Action Buttons */}
            <div className="hidden md:flex items-center gap-2 lg:gap-2.5">
              
              {/* Call Us Button */}
              <a
                href={`tel:${SITE_CONFIG.contactPhone}`}
                title={`Call ${SITE_CONFIG.contactPhone}`}
                className="group ios-glass-button inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-full font-bold text-xs text-[#0B1F3A] hover:bg-white transition-all duration-300 active:scale-95 shadow-sm"
              >
                <div className="w-5 h-5 rounded-full bg-[#1769FF]/10 text-[#1769FF] flex items-center justify-center group-hover:bg-[#1769FF] group-hover:text-white transition-colors">
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
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full font-bold text-xs text-white bg-linear-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 shadow-md shadow-emerald-600/25 transition-all duration-300 active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>WhatsApp</span>
              </a>

              {/* Book Ride Button (iOS Electric Blue Glow) */}
              <button
                onClick={() => onOpenBooking && onOpenBooking()}
                className="group relative inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full font-black text-xs text-white bg-linear-to-r from-[#1769FF] via-[#0A84FF] to-[#00B8D9] hover:from-[#0070E0] hover:to-[#00B8D9] shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/35 transition-all duration-300 active:scale-95 overflow-hidden"
              >
                {/* Specular Shimmer */}
                <div className="absolute inset-0 w-1/2 h-full bg-white/25 skew-x-12 -translate-x-full group-hover:translate-x-300 transition-transform duration-1000" />
                <span className="relative z-10">Book Ride</span>
                <ArrowRight className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Quick Action Buttons & Hamburger */}
            <div className="flex md:hidden items-center gap-1.5">
              {/* Call Icon Button */}
              <a
                href={`tel:${SITE_CONFIG.contactPhone}`}
                className="p-2 rounded-full ios-glass-button text-[#1769FF] active:scale-90 transition-transform"
                aria-label="Call SMR Travels"
              >
                <Phone className="w-3.5 h-3.5" />
              </a>

              {/* WhatsApp Icon Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-emerald-600 text-white shadow-xs active:scale-90 transition-transform"
                aria-label="WhatsApp SMR Travels"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
              </a>

              {/* Book Ride Button */}
              <button
                onClick={() => onOpenBooking && onOpenBooking()}
                aria-label="Book your ride online"
                className="px-3.5 py-1.5 rounded-full text-xs font-black text-white bg-linear-to-r from-[#1769FF] to-[#00B8D9] shadow-md shadow-blue-500/20 active:scale-90 transition-transform cursor-pointer"
              >
                Book
              </button>

              {/* Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full ios-glass-button text-[#0B1F3A] active:scale-90 transition-transform focus:outline-none cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>

          </div>

          {/* iOS Sheet Mobile Drawer */}
          {mobileMenuOpen && (
            <div className="md:hidden pt-4 pb-2 mt-3 border-t border-black/8 space-y-4 animate-in slide-in-from-top-2 duration-300">
              
              {/* Mobile Navigation Links */}
              <nav className="grid grid-cols-2 gap-1.5" aria-label="Mobile Navigation">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-2xl text-xs font-bold transition-all ${
                        isActive
                          ? 'text-[#1769FF] bg-white shadow-sm border border-black/5 font-black'
                          : 'text-slate-700 hover:bg-white/50'
                      }`}
                    >
                      {Icon && <Icon className="w-3.5 h-3.5 text-[#1769FF]" />}
                      <span>{link.name}</span>
                    </a>
                  );
                })}
              </nav>

              {/* Mobile Action Buttons */}
              <div className="pt-2 border-t border-black/8 flex flex-col gap-2">
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${SITE_CONFIG.contactPhone}`}
                    aria-label={`Call primary phone ${SITE_CONFIG.contactPhone}`}
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-2xl font-bold text-xs text-[#0B1F3A] ios-glass-button"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#1769FF]" />
                    <span>Call Primary</span>
                  </a>

                  <a
                    href={`tel:${SITE_CONFIG.contactPhone2}`}
                    aria-label={`Call alternate phone ${SITE_CONFIG.contactPhone2}`}
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-2xl font-bold text-xs text-[#0B1F3A] ios-glass-button"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#1769FF]" />
                    <span>Call Alternate</span>
                  </a>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp with Mohammad Rafi"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-2xl font-bold text-xs text-white bg-linear-to-r from-emerald-600 to-teal-500 shadow-md"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Chat on WhatsApp (Instant)</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenBooking) onOpenBooking();
                  }}
                  aria-label="Open ride booking form"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-2xl font-bold text-xs text-white bg-linear-to-r from-[#1769FF] via-[#0A84FF] to-[#00B8D9] shadow-lg shadow-blue-500/20 cursor-pointer"
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
