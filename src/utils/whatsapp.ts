import type { BookingFormData } from '../types';
import { SITE_CONFIG } from '../config/siteConfig';

export function buildWhatsAppMessage(data: BookingFormData): string {
  const messageLines = [
    `🚗 Hello SMR Car Travels,`,
    ``,
    `I would like to book a ride with you.`,
    ``,
    `👤 Name: ${data.fullName || 'Not provided'}`,
    `📱 Mobile: ${data.mobile || 'Not provided'}`,
    `📍 Pickup Location: ${data.pickupLocation || 'Not provided'}`,
    `🎯 Drop Location: ${data.dropLocation || 'Not provided'}`,
    `📅 Travel Date: ${data.travelDate || 'Not specified'}`,
    `⏰ Travel Time: ${data.travelTime || 'Not specified'}`,
    `👥 Passengers: ${data.passengers || '1'}`,
    `🚘 Car Preference: ${data.carPreference || 'Any available vehicle'}`,
  ];

  if (data.serviceType) {
    messageLines.push(`🚖 Service Type: ${data.serviceType}`);
  }

  if (data.additionalMessage && data.additionalMessage.trim()) {
    messageLines.push(``, `📝 Additional Request:`, data.additionalMessage.trim());
  }

  messageLines.push(
    ``,
    `Please confirm the vehicle availability and fare quote.`,
    ``,
    `Thank you!`
  );

  return messageLines.join('\n');
}

export function openWhatsAppBooking(data: BookingFormData, customNumber?: string): void {
  const message = buildWhatsAppMessage(data);
  const rawNumber = customNumber || SITE_CONFIG.whatsappNumber;
  // Clean phone number (remove spaces, plus, dashes)
  const cleanNumber = rawNumber.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message);
  
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedText}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
}
