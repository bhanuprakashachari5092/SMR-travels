import React, { useState } from 'react';
import { MapPin, Navigation, Clock, ShieldCheck, ArrowRight, Sparkles, Plane, Building, Church } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export interface RouteItem {
  id: string;
  from: string;
  to: string;
  category: 'airport' | 'city' | 'temple';
  distance: string;
  duration: string;
  popularVehicles: string;
  startingPrice: string;
  features: string[];
  tag?: string;
}

export const POPULAR_ROUTES: RouteItem[] = [
  {
    id: 'atp-bangalore-airport',
    from: 'Anantapur',
    to: 'Bangalore Airport (KIA)',
    category: 'airport',
    distance: '205 KM',
    duration: '3.5 Hrs',
    popularVehicles: 'Innova Crysta / Swift Dzire / Ertiga',
    startingPrice: 'Best Fixed / Per KM Rate',
    features: ['24/7 Flight Pickup & Drop', 'Toll Highway Express', 'Doorstep Pickup in ATP'],
    tag: 'MOST POPULAR'
  },
  {
    id: 'atp-bangalore-city',
    from: 'Anantapur',
    to: 'Bangalore City (Majestic / Whitefield)',
    category: 'city',
    distance: '215 KM',
    duration: '4 Hrs',
    popularVehicles: 'Swift Dzire / Ertiga / Innova',
    startingPrice: 'One-Way & Round Trip',
    features: ['Zero Return Toll Charges', 'Clean AC Vehicles', 'Uniformed Chauffeur'],
    tag: 'DAILY SERVICE'
  },
  {
    id: 'atp-hyderabad',
    from: 'Anantapur',
    to: 'Hyderabad (RGIA / Gachibowli)',
    category: 'city',
    distance: '355 KM',
    duration: '5.5 Hrs',
    popularVehicles: 'Innova Crysta / Ertiga / Tempo Traveller',
    startingPrice: 'Doorstep Express Cab',
    features: ['NH44 Express Highway', 'On-time Flight Sync', 'Family & Corporate Cabs'],
    tag: 'EXPRESS ROUTE'
  },
  {
    id: 'atp-tirupati',
    from: 'Anantapur',
    to: 'Tirupati Balaji Darshan',
    category: 'temple',
    distance: '290 KM',
    duration: '5.5 Hrs',
    popularVehicles: 'Innova Crysta / Ertiga / Toofan / Traveller',
    startingPrice: '1-Day & 2-Day Packages',
    features: ['Darshan Timings Assistance', 'Family Pilgrimage Special', 'Experienced Ghat Driver'],
    tag: 'PILGRIMAGE SPECIAL'
  },
  {
    id: 'atp-puttaparthi',
    from: 'Anantapur',
    to: 'Puttaparthi (Prashanthi Nilayam)',
    category: 'temple',
    distance: '85 KM',
    duration: '1.5 Hrs',
    popularVehicles: 'Swift Dzire / Etios / Ertiga',
    startingPrice: 'Affordable Hourly / Daily',
    features: ['Same-day Return Available', 'Quiet AC Ride', 'Flexible Halt Stops']
  },
  {
    id: 'atp-kurnool',
    from: 'Anantapur',
    to: 'Kurnool / Mantralayam',
    category: 'city',
    distance: '150 KM',
    duration: '2.5 Hrs',
    popularVehicles: 'Innova Crysta / Dzire / Ertiga / Traveller',
    startingPrice: 'Economical Per KM',
    features: ['Raghavendra Swamy Mutt Tour', 'Fast Highway Drive', 'Luggage Carrier Equipped']
  },
  {
    id: 'atp-kadapa',
    from: 'Anantapur',
    to: 'Kadapa / Proddatur',
    category: 'city',
    distance: '145 KM',
    duration: '2.5 Hrs',
    popularVehicles: 'Swift Dzire / Ertiga / Innova',
    startingPrice: 'Affordable Round Trip',
    features: ['Direct Highway Route', 'Doorstep Pickup', '24/7 Instant Availability']
  },
  {
    id: 'atp-lepakshi',
    from: 'Anantapur',
    to: 'Lepakshi Heritage Temple',
    category: 'temple',
    distance: '120 KM',
    duration: '2.0 Hrs',
    popularVehicles: 'Innova Crysta / Ertiga / Dzire',
    startingPrice: 'Weekend Sightseeing Tour',
    features: ['Veerabhadra Temple Tour', 'Monolithic Nandi Visit', 'Family Day Package']
  }
];

interface PopularRoutesProps {
  onOpenBooking?: (carName?: string) => void;
}

export const PopularRoutes: React.FC<PopularRoutesProps> = ({ onOpenBooking }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'airport' | 'city' | 'temple'>('all');

  const filteredRoutes = activeFilter === 'all'
    ? POPULAR_ROUTES
    : POPULAR_ROUTES.filter(r => r.category === activeFilter);

  const getWhatsAppBookingLink = (route: RouteItem) => {
    const text = `🚗 *SMR Car Travels Booking Enquiry*\n` +
      `👤 *To:* Mohammad Rafi\n` +
      `📍 *Route:* ${route.from} ➔ ${route.to}\n` +
      `🛣️ *Distance:* ${route.distance}\n` +
      `🚘 *Vehicle:* ${route.popularVehicles}\n` +
      `Please share the best price and cab availability.`;
    return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="routes" className="py-20 bg-linear-to-b from-[#EEF6FF] via-[#F8FAFC] to-white relative overflow-hidden border-t border-slate-200/80">
      {/* Background Decorator */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-140 h-140 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-extrabold tracking-wider text-[#1769FF] uppercase shadow-2xs">
            <Navigation className="w-3.5 h-3.5" />
            <span>TOP OUTSTATION CAB ROUTES FROM ANANTAPUR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F3A] tracking-tight">
            Popular Outstation & Airport{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1769FF] via-[#3157D5] to-[#00B8D9]">
              Taxi Packages
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium max-w-3xl mx-auto">
            Book top-rated one-way and round-trip cabs from Anantapur with Mohammad Rafi. Fixed transparent fares, verified chauffeurs, and instant WhatsApp booking.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10" role="tablist" aria-label="Route categories">
          <button
            type="button"
            role="tab"
            aria-selected={activeFilter === 'all'}
            onClick={() => setActiveFilter('all')}
            className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-[#1769FF] text-white shadow-md shadow-blue-500/20'
                : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-300'
            }`}
          >
            <span>All Routes ({POPULAR_ROUTES.length})</span>
          </button>
          
          <button
            type="button"
            role="tab"
            aria-selected={activeFilter === 'airport'}
            onClick={() => setActiveFilter('airport')}
            className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeFilter === 'airport'
                ? 'bg-[#1769FF] text-white shadow-md shadow-blue-500/20'
                : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-300'
            }`}
          >
            <Plane className="w-3.5 h-3.5" />
            <span>Airport Transfers</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeFilter === 'city'}
            onClick={() => setActiveFilter('city')}
            className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeFilter === 'city'
                ? 'bg-[#1769FF] text-white shadow-md shadow-blue-500/20'
                : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-300'
            }`}
          >
            <Building className="w-3.5 h-3.5" />
            <span>City & Intercity Cabs</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeFilter === 'temple'}
            onClick={() => setActiveFilter('temple')}
            className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeFilter === 'temple'
                ? 'bg-[#1769FF] text-white shadow-md shadow-blue-500/20'
                : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-300'
            }`}
          >
            <Church className="w-3.5 h-3.5" />
            <span>Temple & Pilgrim Tours</span>
          </button>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredRoutes.map((route) => (
            <div
              key={route.id}
              className="group bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Badge */}
              {route.tag && (
                <div className="absolute top-3 right-3 bg-linear-to-r from-[#1769FF] to-[#00B8D9] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full tracking-wider shadow-xs">
                  {route.tag}
                </div>
              )}

              {/* Route Destination */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                  <MapPin className="w-3.5 h-3.5 text-[#1769FF]" />
                  <span>{route.from}</span>
                  <span className="text-slate-400">➔</span>
                </div>

                <h3 className="text-lg font-extrabold text-[#0B1F3A] group-hover:text-[#1769FF] transition-colors leading-snug">
                  {route.to}
                </h3>

                {/* Distance & Time Metrics */}
                <div className="flex items-center gap-4 py-2 border-y border-slate-100 text-xs font-bold text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <Navigation className="w-3.5 h-3.5 text-blue-600" />
                    <span>{route.distance}</span>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-slate-300" />
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{route.duration}</span>
                  </div>
                </div>

                {/* Available Vehicles */}
                <div className="space-y-1 pt-1">
                  <p className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">Available Cabs:</p>
                  <p className="text-xs font-bold text-slate-900">{route.popularVehicles}</p>
                </div>

                {/* Route Feature List */}
                <ul className="space-y-1.5 pt-2">
                  {route.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-[11px] text-slate-700 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing & Booking CTA */}
              <div className="pt-5 mt-4 border-t border-slate-100 space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600 font-semibold">Pricing:</span>
                  <span className="font-bold text-[#1769FF]">{route.startingPrice}</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={getWhatsAppBookingLink(route)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Book ${route.to} on WhatsApp`}
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>

                  {onOpenBooking ? (
                    <button
                      type="button"
                      onClick={() => onOpenBooking(route.popularVehicles.split('/')[0].trim())}
                      aria-label={`Book cab for ${route.to}`}
                      className="inline-flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl bg-[#0B1F3A] hover:bg-[#1769FF] text-white font-bold text-xs transition-all cursor-pointer"
                    >
                      <span>Book Cab</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  ) : (
                    <a
                      href={`tel:${SITE_CONFIG.contactPhone}`}
                      aria-label={`Call to book cab for ${route.to}`}
                      className="inline-flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl bg-[#0B1F3A] hover:bg-[#1769FF] text-white font-bold text-xs transition-all"
                    >
                      <span>Call Now</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Custom Route Callout Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-linear-to-r from-[#0B1F3A] via-[#122B4D] to-[#0B1F3A] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-[#00D8F6]">
              <Sparkles className="w-3 h-3" />
              <span>CUSTOM OUTSTATION & TOUR ITINERARIES</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-extrabold text-white">
              Need a cab to Goa, Chennai, Vijayawada, or customized multi-day trip?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-medium">
              Mohammad Rafi coordinates personalized one-way drops, wedding convoy bookings, corporate multi-car fleet, and all-South India tourist packages with 24/7 dedicated support.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                '🚗 Hello Mohammad Rafi! I need a custom outstation cab quote from Anantapur.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-extrabold text-xs sm:text-sm bg-linear-to-r from-[#1769FF] to-[#00B8D9] hover:from-[#1254D4] hover:to-[#00B8D9] text-white shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Get Custom Quote on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
