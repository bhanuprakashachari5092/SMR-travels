import React, { useState, useEffect } from 'react';
import { X, MessageSquare, Calendar, Clock, MapPin, User, Phone, Users, Car, Sparkles } from 'lucide-react';
import type { BookingFormData } from '../types';
import { openWhatsAppBooking } from '../utils/whatsapp';
import { FLEET, SERVICES } from '../config/siteConfig';

interface BookingFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCar?: string;
  preselectedService?: string;
}

export const BookingFormModal: React.FC<BookingFormModalProps> = ({
  isOpen,
  onClose,
  preselectedCar = '',
  preselectedService = '',
}) => {
  const todayStr = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    mobile: '',
    pickupLocation: '',
    dropLocation: '',
    travelDate: todayStr,
    travelTime: '09:00',
    passengers: '2 Passengers',
    carPreference: preselectedCar || 'Executive Sedan',
    serviceType: preselectedService || 'Outstation Travel',
    additionalMessage: '',
  });

  useEffect(() => {
    if (isOpen) {
      if (preselectedCar) {
        setFormData((prev) => ({ ...prev, carPreference: preselectedCar }));
      }
      if (preselectedService) {
        setFormData((prev) => ({ ...prev, serviceType: preselectedService }));
      }
    }
  }, [isOpen, preselectedCar, preselectedService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsAppBooking(formData);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-[#071426]/70 backdrop-blur-md p-4 sm:p-6 flex min-h-full items-center justify-center animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xl text-left my-auto text-[#0B1F3A]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Absolute Top Right Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 sm:top-6 sm:right-6 p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-[#0B1F3A] transition-all duration-200 shadow-sm border border-slate-200/80 focus:outline-none focus:ring-2 focus:ring-[#1769FF]/30 z-20"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Bar */}
        <div className="border-b border-slate-200 pb-4 mb-6 pr-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#1769FF] uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#00B8D9]" />
              <span>Instant WhatsApp Booking</span>
            </div>
            <h2 className="text-2xl font-extrabold text-[#0B1F3A]">Book Your Premium Ride</h2>
            <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">
              Fill in your trip details to generate your pre-formatted WhatsApp booking message.
            </p>
          </div>
        </div>

        {/* Form Grid */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Full Name */}
            <div>
              <label className="text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#1769FF]" />
                <span>Full Name *</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rahul Sharma"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-[#0B1F3A] text-sm focus:outline-none focus:border-[#1769FF] focus:ring-2 focus:ring-[#1769FF]/20 placeholder:text-slate-400 font-medium"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#1769FF]" />
                <span>Mobile Number *</span>
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. +91 98765 43210"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-[#0B1F3A] text-sm focus:outline-none focus:border-[#1769FF] focus:ring-2 focus:ring-[#1769FF]/20 placeholder:text-slate-400 font-medium"
              />
            </div>

            {/* Pickup Location */}
            <div>
              <label className="text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                <span>Pickup Location *</span>
              </label>
              <input
                type="text"
                required
                placeholder="City, Landmark or Address"
                value={formData.pickupLocation}
                onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-[#0B1F3A] text-sm focus:outline-none focus:border-[#1769FF] focus:ring-2 focus:ring-[#1769FF]/20 placeholder:text-slate-400 font-medium"
              />
            </div>

            {/* Drop Location */}
            <div>
              <label className="text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                <span>Drop Location *</span>
              </label>
              <input
                type="text"
                required
                placeholder="Destination City or Airport"
                value={formData.dropLocation}
                onChange={(e) => setFormData({ ...formData, dropLocation: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-[#0B1F3A] text-sm focus:outline-none focus:border-[#1769FF] focus:ring-2 focus:ring-[#1769FF]/20 placeholder:text-slate-400 font-medium"
              />
            </div>

            {/* Travel Date */}
            <div>
              <label className="text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#1769FF]" />
                <span>Travel Date *</span>
              </label>
              <input
                type="date"
                required
                min={todayStr}
                value={formData.travelDate}
                onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-[#0B1F3A] text-sm focus:outline-none focus:border-[#1769FF] focus:ring-2 focus:ring-[#1769FF]/20 font-medium"
              />
            </div>

            {/* Travel Time */}
            <div>
              <label className="text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#1769FF]" />
                <span>Pickup Time *</span>
              </label>
              <input
                type="time"
                required
                value={formData.travelTime}
                onChange={(e) => setFormData({ ...formData, travelTime: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-[#0B1F3A] text-sm focus:outline-none focus:border-[#1769FF] focus:ring-2 focus:ring-[#1769FF]/20 font-medium"
              />
            </div>

            {/* Number of Passengers */}
            <div>
              <label className="text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#1769FF]" />
                <span>Passengers</span>
              </label>
              <select
                value={formData.passengers}
                onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-[#0B1F3A] text-sm focus:outline-none focus:border-[#1769FF] focus:ring-2 focus:ring-[#1769FF]/20 font-medium"
              >
                <option value="1 Passenger">1 Passenger</option>
                <option value="2 Passengers">2 Passengers</option>
                <option value="3 Passengers">3 Passengers</option>
                <option value="4 Passengers">4 Passengers</option>
                <option value="5-7 Passengers">5-7 Passengers (SUV)</option>
                <option value="8+ Passengers">8+ Group Passengers</option>
              </select>
            </div>

            {/* Car Preference */}
            <div>
              <label className="text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Car className="w-3.5 h-3.5 text-[#C9A227]" />
                <span>Car Preference</span>
              </label>
              <select
                value={formData.carPreference}
                onChange={(e) => setFormData({ ...formData, carPreference: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-[#0B1F3A] text-sm focus:outline-none focus:border-[#1769FF] focus:ring-2 focus:ring-[#1769FF]/20 font-medium"
              >
                {FLEET.map((car) => (
                  <option key={car.id} value={car.name}>
                    {car.name} ({car.category})
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Service Type Selection */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Service Type
            </label>
            <select
              value={formData.serviceType}
              onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-[#0B1F3A] text-sm focus:outline-none focus:border-[#1769FF] focus:ring-2 focus:ring-[#1769FF]/20 font-medium"
            >
              {SERVICES.map((srv) => (
                <option key={srv.id} value={srv.title}>
                  {srv.title}
                </option>
              ))}
            </select>
          </div>

          {/* Additional Message */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Additional Notes / Requests (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Need child seat, extra luggage space, special flight pickup..."
              value={formData.additionalMessage}
              onChange={(e) => setFormData({ ...formData, additionalMessage: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-[#0B1F3A] text-sm focus:outline-none focus:border-[#1769FF] focus:ring-2 focus:ring-[#1769FF]/20 placeholder:text-slate-400 font-medium"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 py-3.5 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 shadow-xl shadow-emerald-600/25 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageSquare className="w-5 h-5 fill-white/20" />
              <span>BOOK ON WHATSAPP NOW</span>
            </button>
            <p className="text-[11px] text-center text-slate-500 font-medium mt-2">
              Instant redirection to WhatsApp with your pre-formatted booking details.
            </p>
          </div>

        </form>
      </div>
    </div>
  );
};

