import React, { useState } from 'react';
import { HelpCircle, ChevronDown, PhoneCall, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'Who is the founder of SMR Car Travels in Anantapur?',
    answer: 'SMR Car Travels is founded and managed by Mohammad Rafi, offering premium 24/7 car rental, outstation taxi, luxury cabs, and chauffeur services based in Anantapur, Andhra Pradesh (ATP Car Travels).'
  },
  {
    question: 'What are the cab options & rates for Anantapur to Bangalore Airport (KIA) and Hyderabad?',
    answer: 'We provide dedicated 24/7 one-way drops and roundtrips to Bangalore Kempegowda International Airport (KIA - 205 KM) and Hyderabad Rajiv Gandhi International Airport (RGIA - 355 KM). We offer Swift Dzire, Toyota Etios, Suzuki Ertiga (7-seater), Toyota Innova Crysta, and Tempo Travellers at transparent, competitive per-KM and fixed package rates.'
  },
  {
    question: 'What car models can I rent with SMR Car Travels Anantapur?',
    answer: 'We provide a wide fleet of pristine, air-conditioned vehicles including Toyota Innova Crysta (7-Seater Luxury SUV), Suzuki Ertiga (7-Seater), Swift Dzire, Toyota Etios, Force Toofan (10-Seater), Force Tempo Traveller (12–17 Seater), and Luxury Minibuses (20+ Seater) for family, wedding, and corporate trips.'
  },
  {
    question: 'Do you offer Tirupati Balaji darshan packages and temple tours from Anantapur?',
    answer: 'Yes! We offer customized 1-day and 2-day pilgrimage packages from Anantapur to Tirupati Balaji (Tirumala), Puttaparthi (Prashanthi Nilayam), Lepakshi Heritage Temple, Mantralayam Raghavendra Swamy Mutt, and Srisailam with seasoned ghat highway chauffeurs.'
  },
  {
    question: 'How can I book a ride with Mohammad Rafi at SMR Car Travels?',
    answer: 'Booking is instant and simple. You can call directly or message on WhatsApp at +91 99895 99621 or +91 98664 34621 for a 30-second confirmation with zero advance booking stress.'
  },
  {
    question: 'Does SMR Car Travels provide One-Way cabs without return charges?',
    answer: 'Yes! We offer economical one-way cab drops from Anantapur to Bangalore, Hyderabad, Tirupati, Kurnool, and Kadapa where you only pay for the one-way trip distance without paying return charges.'
  },
  {
    question: 'Are there any hidden costs, surge pricing, or unexpected extras?',
    answer: 'No. SMR Car Travels practices 100% transparent pricing. All quotes clearly state per-km rates, driver allowances, and toll/parking terms so you enjoy a stress-free journey with zero surprises.'
  },
  {
    question: 'Where is SMR Car Travels located on Google Maps in Anantapur?',
    answer: 'Our main office hub is centrally located on Main Road near the Transport Hub & Clock Tower area in Anantapur, Andhra Pradesh (PIN: 515001). You can click the Google Maps button on this page for live GPS turn-by-turn directions.'
  }
];

interface FAQSectionProps {
  onOpenBooking?: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenBooking }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="relative py-16 md:py-24 bg-linear-to-b from-[#F8FAFC] via-white to-[#EEF6FF] border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-xs font-black tracking-wider text-blue-950 uppercase shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#1769FF]" />
            <span>FREQUENTLY ASKED QUESTIONS • ANANTAPUR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight">
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1769FF] via-[#3157D5] to-[#00B8D9]">
              Questions
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            Everything you need to know about booking SMR Car Travels by Mohammad Rafi in Anantapur.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-blue-300 shadow-md shadow-blue-500/5'
                    : 'bg-white/80 border-slate-200 hover:border-blue-200'
                }`}
              >
                <button
                  id={`faq-btn-${idx}`}
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full py-4.5 px-5 sm:px-6 flex items-center justify-between gap-4 text-left font-bold text-[#0B1F3A] text-sm sm:text-base cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#1769FF] shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#1769FF] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    role="region"
                    aria-labelledby={`faq-btn-${idx}`}
                    className="px-5 sm:px-6 pb-5 pt-1 text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-slate-100 animate-in fade-in duration-200 font-medium"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Bottom Support Bar */}
        <div className="mt-10 p-6 rounded-3xl bg-linear-to-r from-[#0B1F3A] to-[#122B4D] text-white flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base font-extrabold">Have more questions about your Anantapur trip?</h3>
            <p className="text-xs text-slate-300">Talk directly to Mohammad Rafi or book in 30 seconds on WhatsApp.</p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {onOpenBooking && (
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs bg-white text-[#0B1F3A] hover:bg-slate-100 shadow-md transition-all cursor-pointer"
              >
                <span>Book Ride Now</span>
              </button>
            )}

            <a
              href={`tel:${SITE_CONFIG.contactPhone}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#00D8F6]" />
              <span>Call Now</span>
            </a>

            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                '🚗 Hello Mohammad Rafi! I want to enquire about cab booking in Anantapur.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-black text-xs bg-emerald-700 hover:bg-emerald-800 text-white shadow-md transition-all"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp Chat</span>
            </a>

            <a
              href={SITE_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs bg-[#1769FF] hover:bg-[#1254D4] text-white shadow-md transition-all"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Google Maps</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
