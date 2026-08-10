import React, { useState, useEffect } from 'react';
import { SMRLogo } from './SMRLogo';
import { Menu, X, ArrowRight } from 'lucide-react';

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-navbar py-2.5 shadow-lg shadow-blue-500/5 border-b border-slate-200/80 bg-white/95'
          : 'glass-navbar-transparent py-3.5 bg-white/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#hero" className="group flex items-center">
            <SMRLogo size="md" />
          </a>

          {/* Desktop Executive Navigation Bar */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 backdrop-blur-md p-1.5 rounded-full border border-slate-200/80 shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold text-[#0B1F3A] hover:text-[#1769FF] hover:bg-white px-4 py-2 rounded-full transition-all duration-200 shadow-2xs hover:shadow-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right Action CTA */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => onOpenBooking && onOpenBooking()}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs text-white bg-gradient-to-r from-[#1769FF] via-[#1254D4] to-[#00B8D9] hover:from-[#1254D4] hover:to-[#00B8D9] shadow-md shadow-blue-500/20 hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <span>Book Ride</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking && onOpenBooking()}
              className="px-3 py-1.5 rounded-full text-xs font-bold text-white bg-[#1769FF]"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white text-[#0B1F3A] border border-slate-200 shadow-sm focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-slate-200 px-4 pt-4 pb-6 mt-3 space-y-4 animate-in slide-in-from-top duration-300 bg-white/95 text-[#0B1F3A]">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-[#0B1F3A] hover:text-[#1769FF] transition-colors px-3 py-2.5 rounded-xl hover:bg-slate-50"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};



