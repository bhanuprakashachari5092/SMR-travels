import React, { useState } from 'react';
import { MapPin, Calendar, Clock, ArrowRightLeft, Search, Users, Sparkles, Navigation } from 'lucide-react';
import { openWhatsAppBooking } from '../utils/whatsapp';

interface QuickSearchWidgetProps {
  onOpenBooking?: (carName?: string) => void;
}

type TripType = 'one-way' | 'round-trip' | 'local' | 'airport';

const POPULAR_CITIES = [
  'Hyderabad',
  'Vijayawada',
  'Visakhapatnam (Vizag)',
  'Guntur',
  'Tirupati',
  'Rajahmundry',
  'Kakinada',
  'Nellore',
  'Kurnool',
  'Kadapa',
  'Anantapur',
  'Bengaluru',
  'Chennai',
];

export const QuickSearchWidget: React.FC<QuickSearchWidgetProps> = () => {
  const [tripType, setTripType] = useState<TripType>('one-way');
  const [pickupCity, setPickupCity] = useState('Hyderabad');
  const [dropCity, setDropCity] = useState('Vijayawada');
  const [pickupDate, setPickupDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [pickupTime, setPickupTime] = useState('06:00 AM');
  const [passengers, setPassengers] = useState('4 Passengers');

  // Swap pickup & drop locations
  const handleSwap = () => {
    const temp = pickupCity;
    setPickupCity(dropCity);
    setDropCity(temp);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const tripTypeLabel =
      tripType === 'one-way'
        ? 'Outstation One Way'
        : tripType === 'round-trip'
        ? 'Outstation Round Trip'
        : tripType === 'local'
        ? 'Local Hourly Package'
        : 'Airport Transfer';

    openWhatsAppBooking({
      fullName: 'Website Visitor',
      mobile: '',
      pickupLocation: pickupCity,
      dropLocation: dropCity,
      travelDate: pickupDate,
      travelTime: pickupTime,
      passengers: passengers,
      serviceType: tripTypeLabel,
    });
  };

  return (
    <section className="relative -mt-8 md:-mt-12 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <div className="bg-white/95 backdrop-blur-2xl rounded-3xl border border-slate-200/90 shadow-2xl shadow-blue-600/15 p-4 sm:p-6 lg:p-8">
        
        {/* Top Header Badge & MakeMyTrip Style Tabs */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-linear-to-r from-[#1769FF] to-[#00B8D9] text-white shadow-md">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-[#0B1F3A] tracking-tight">Quick Ride Booking</h3>
              <p className="text-xs text-slate-500 font-semibold">Select your route & instant fare lookup</p>
            </div>
          </div>

          {/* MakeMyTrip Style Trip Type Selector Tabs */}
          <div className="w-full md:w-auto flex items-center bg-slate-100/90 p-1.5 rounded-2xl border border-slate-200 overflow-x-auto no-scrollbar">
            <button
              type="button"
              onClick={() => setTripType('one-way')}
              className={`flex-1 md:flex-none px-4 py-2 rounded-xl text-xs font-extrabold transition-all duration-200 whitespace-nowrap ${
                tripType === 'one-way'
                  ? 'bg-white text-[#1769FF] shadow-md shadow-blue-500/10 border border-slate-200/60'
                  : 'text-slate-600 hover:text-[#0B1F3A]'
              }`}
            >
              Outstation One-Way
            </button>

            <button
              type="button"
              onClick={() => setTripType('round-trip')}
              className={`flex-1 md:flex-none px-4 py-2 rounded-xl text-xs font-extrabold transition-all duration-200 whitespace-nowrap ${
                tripType === 'round-trip'
                  ? 'bg-white text-[#1769FF] shadow-md shadow-blue-500/10 border border-slate-200/60'
                  : 'text-slate-600 hover:text-[#0B1F3A]'
              }`}
            >
              Round Trip
            </button>

            <button
              type="button"
              onClick={() => setTripType('local')}
              className={`flex-1 md:flex-none px-4 py-2 rounded-xl text-xs font-extrabold transition-all duration-200 whitespace-nowrap ${
                tripType === 'local'
                  ? 'bg-white text-[#1769FF] shadow-md shadow-blue-500/10 border border-slate-200/60'
                  : 'text-slate-600 hover:text-[#0B1F3A]'
              }`}
            >
              Local Package
            </button>

            <button
              type="button"
              onClick={() => setTripType('airport')}
              className={`flex-1 md:flex-none px-4 py-2 rounded-xl text-xs font-extrabold transition-all duration-200 whitespace-nowrap ${
                tripType === 'airport'
                  ? 'bg-white text-[#1769FF] shadow-md shadow-blue-500/10 border border-slate-200/60'
                  : 'text-slate-600 hover:text-[#0B1F3A]'
              }`}
            >
              Airport Transfer
            </button>
          </div>
        </div>

        {/* Booking Search Form Grid */}
        <form onSubmit={handleSearchSubmit} className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* HTML5 datalist for instant city suggestions while allowing manual typing */}
            <datalist id="popular-cities-list">
              {POPULAR_CITIES.map((city) => (
                <option key={city} value={city} />
              ))}
            </datalist>

            {/* FROM (PICKUP LOCATION) */}
            <div className="md:col-span-3 relative">
              <label className="block text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mb-1.5">
                FROM (PICKUP LOCATION)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#1769FF]">
                  <MapPin className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  list="popular-cities-list"
                  value={pickupCity}
                  onChange={(e) => setPickupCity(e.target.value)}
                  placeholder="Enter Pickup City / Address"
                  className="w-full pl-11 pr-4 py-3.5 bg-slate-50/80 hover:bg-slate-100/80 border border-slate-200 rounded-2xl font-bold text-sm text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#1769FF]/30 transition-all placeholder-slate-400 font-sans"
                  required
                />
              </div>
            </div>

            {/* SWAP BUTTON */}
            <div className="hidden md:flex md:col-span-1 justify-center items-center pt-6">
              <button
                type="button"
                onClick={handleSwap}
                title="Swap Pickup & Drop Locations"
                className="p-3 rounded-full bg-slate-100 hover:bg-blue-50 text-[#1769FF] hover:scale-110 border border-slate-200 transition-all duration-300 shadow-xs"
              >
                <ArrowRightLeft className="w-4 h-4" />
              </button>
            </div>

            {/* TO (DROP LOCATION) */}
            <div className="md:col-span-3 relative">
              <label className="block text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mb-1.5">
                TO (DROP LOCATION)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#00B8D9]">
                  <Navigation className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  list="popular-cities-list"
                  value={dropCity}
                  onChange={(e) => setDropCity(e.target.value)}
                  placeholder="Enter Drop City / Destination"
                  className="w-full pl-11 pr-4 py-3.5 bg-slate-50/80 hover:bg-slate-100/80 border border-slate-200 rounded-2xl font-bold text-sm text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#1769FF]/30 transition-all placeholder-slate-400 font-sans"
                  required
                />
              </div>
            </div>

            {/* PICKUP DATE */}
            <div className="md:col-span-2 relative">
              <label className="block text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mb-1.5">
                PICKUP DATE
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#1769FF]">
                  <Calendar className="w-4.5 h-4.5" />
                </div>
                <input
                  type="date"
                  value={pickupDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="w-full pl-10 pr-3 py-3 bg-slate-50/80 hover:bg-slate-100/80 border border-slate-200 rounded-2xl font-bold text-xs text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#1769FF]/30 transition-all cursor-pointer"
                />
              </div>
            </div>

            {/* PICKUP TIME & PASSENGERS */}
            <div className="md:col-span-3 relative">
              <label className="block text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mb-1.5">
                PICKUP TIME & PASSENGERS
              </label>
              <div className="grid grid-cols-2 gap-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-[#00B8D9]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <select
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="w-full pl-8 pr-2 py-3 bg-slate-50/80 border border-slate-200 rounded-2xl font-bold text-xs text-[#0B1F3A] focus:outline-none"
                  >
                    <option value="05:00 AM">05:00 AM</option>
                    <option value="06:00 AM">06:00 AM</option>
                    <option value="07:00 AM">07:00 AM</option>
                    <option value="08:00 AM">08:00 AM</option>
                    <option value="09:00 AM">09:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="02:00 PM">02:00 PM</option>
                    <option value="06:00 PM">06:00 PM</option>
                    <option value="10:00 PM">10:00 PM</option>
                  </select>
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-[#1769FF]">
                    <Users className="w-4 h-4" />
                  </div>
                  <select
                    value={passengers}
                    onChange={(e) => setPassengers(e.target.value)}
                    className="w-full pl-8 pr-2 py-3 bg-slate-50/80 border border-slate-200 rounded-2xl font-bold text-xs text-[#0B1F3A] focus:outline-none"
                  >
                    <option value="1 Passenger">1 Passenger</option>
                    <option value="2 Passengers">2 Passengers</option>
                    <option value="3 Passengers">3 Passengers</option>
                    <option value="4 Passengers (Sedan)">4 Passengers</option>
                    <option value="5 Passengers">5 Passengers</option>
                    <option value="6 Passengers">6 Passengers</option>
                    <option value="7 Passengers (SUV)">7 Passengers</option>
                    <option value="8+ Passengers (Traveller)">8+ Passengers</option>
                  </select>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Action Submit Button Row */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200/80 mt-6">
            <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Zero Cancellation Fee
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#1769FF]" />
                Sanitized & GPS Tracked
              </span>
            </div>

            <div className="w-full sm:w-auto flex items-center">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-2xl font-extrabold text-sm text-white bg-linear-to-r from-[#1769FF] via-[#1254D4] to-[#00B8D9] hover:from-[#1254D4] hover:to-[#00B8D9] shadow-xl shadow-blue-500/25 hover:shadow-cyan-500/35 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Search className="w-4.5 h-4.5" />
                <span>BOOK NOW</span>
              </button>
            </div>
          </div>
        </form>

      </div>
    </section>
  );
};
