import React, { useState, useEffect } from 'react';
import { SMRLogo } from './SMRLogo';
import { Menu, X, ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface NavbarProps {
  onOpenBooking?: (carName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Our Fleet', href: '#fleet' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#footer' },
  ];

  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    '\u{1F697} Hello SMR Car Travels! I would like to inquire about booking a ride.'
  )}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-navbar py-2.5 shadow-lg shadow-blue-500/5 border-b border-slate-200/80 bg-white/95'
          : 'glass-navbar-transparent py-3.5 bg-white/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          
          {/* Brand Logo */}
          <a href="#hero" className="group flex items-center shrink-0">
            <SMRLogo size="md" />
          </a>

          {/* Desktop Executive Navigation Bar */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 backdrop-blur-md p-1.5 rounded-full border border-slate-200/80 shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold text-[#0B1F3A] hover:text-[#1769FF] hover:bg-white px-3.5 py-1.5 rounded-full transition-all duration-200 shadow-2xs hover:shadow-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right Action Buttons */}
          <div className="hidden md:flex items-center gap-2">
            {/* Call Us Button */}
            <a
              href={`tel:${SITE_CONFIG.contactPhone}`}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-full font-bold text-xs text-[#0B1F3A] bg-white hover:bg-slate-100 border border-slate-200 shadow-sm transition-all hover:border-[#1769FF]/40 hover:text-[#1769FF]"
            >
              <Phone className="w-3.5 h-3.5 text-[#1769FF]" />
              <span>Call Us</span>
            </a>

            {/* WhatsApp Us Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-full font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-500 shadow-sm shadow-emerald-600/20 transition-all transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-white/20" />
              <span>WhatsApp Us</span>
            </a>

            {/* Book Ride Button */}
            <button
              onClick={() => onOpenBooking && onOpenBooking()}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full font-bold text-xs text-white bg-linear-to-r from-[#1769FF] via-[#1254D4] to-[#00B8D9] hover:from-[#1254D4] hover:to-[#00B8D9] shadow-md shadow-blue-500/20 hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <span>Book Ride</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Right Quick Action Icons & Hamburger Button */}
          <div className="flex md:hidden items-center gap-1.5">
            {/* Quick Call Icon Button */}
            <a
              href={`tel:${SITE_CONFIG.contactPhone}`}
              className="p-2 rounded-full bg-slate-100 border border-slate-200 text-[#1769FF] shadow-xs"
              aria-label="Call SMR Travels"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Quick WhatsApp Icon Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-emerald-600 text-white shadow-xs"
              aria-label="WhatsApp SMR Travels"
            >
              <MessageSquare className="w-4 h-4 fill-white/20" />
            </a>

            {/* Quick Book Button */}
            <button
              onClick={() => onOpenBooking && onOpenBooking()}
              className="px-3 py-1.5 rounded-full text-xs font-bold text-white bg-linear-to-r from-[#1769FF] to-[#00B8D9] shadow-xs"
            >
              Book
            </button>

            {/* Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white text-[#0B1F3A] border border-slate-200 shadow-sm focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-slate-200 px-4 pt-4 pb-6 mt-3 space-y-4 animate-in slide-in-from-top duration-300 bg-white/95 text-[#0B1F3A]">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-[#0B1F3A] hover:text-[#1769FF] transition-colors px-3 py-2 rounded-xl hover:bg-slate-50"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Drawer Action Buttons */}
          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <a
              href={`tel:${SITE_CONFIG.contactPhone}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs text-[#0B1F3A] bg-slate-100 hover:bg-slate-200 border border-slate-200"
            >
              <Phone className="w-4 h-4 text-[#1769FF]" />
              <span>Call: {SITE_CONFIG.contactPhone}</span>
            </a>

            <a
              href={`tel:${SITE_CONFIG.contactPhone2}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs text-[#0B1F3A] bg-slate-100 hover:bg-slate-200 border border-slate-200"
            >
              <Phone className="w-4 h-4 text-[#1769FF]" />
              <span>Call: {SITE_CONFIG.contactPhone2}</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-500 shadow-sm"
            >
              <MessageSquare className="w-4 h-4 fill-white/20" />
              <span>WhatsApp Us Now</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenBooking) onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs text-white bg-linear-to-r from-[#1769FF] via-[#1254D4] to-[#00B8D9]"
            >
              <span>Book Your Ride</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};




