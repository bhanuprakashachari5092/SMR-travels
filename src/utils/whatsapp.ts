import type { BookingFormData } from '../types';
import { SITE_CONFIG } from '../config/siteConfig';

// Pure ASCII Unicode escape constants to prevent file encoding corruption on Windows
const EMOJI = {
  car: '\u{1F697}',       // 🚗
  user: '\u{1F464}',      // 👤
  pin: '\u{1F4CD}',       // 📍
  target: '\u{1F3AF}',    // 🎯
  calendar: '\u{1F4C5}',  // 📅
  clock: '\u{1F551}',     // 🕒
  group: '\u{1F465}',     // 👥
  vehicle: '\u{1F698}',   // 🚘
  mobile: '\u{1F4F1}',    // 📱
  note: '\u{1F4DD}',      // 📝
  sparkles: '\u{2728}\u{FE0F}', // ✨
};

function cleanText(text: string): string {
  if (!text) return '';
  // Remove asterisks (*), hashes (#), replacement characters (\uFFFD), BOM (\uFEFF), zero-width spaces (\u200B-\u200D), and trim excess spaces
  return text
    .replace(/[*#\uFFFD\uFEFF\u200B-\u200D]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function buildWhatsAppMessage(data: BookingFormData): string {
  const name = cleanText(data.fullName || 'Valued Customer');
  const pickup = cleanText(data.pickupLocation || 'Not specified');
  const drop = cleanText(data.dropLocation || 'Not specified');
  const date = cleanText(data.travelDate || 'Not specified');
  const time = cleanText(data.travelTime || 'Not specified');
  const passengers = cleanText(data.passengers || '1 Passenger');

  const messageLines = [
    `${EMOJI.car} Hello SMR Car Travels`,
    ``,
    `I would like to book a ride with you. Here are my trip details:`,
    ``,
    `${EMOJI.user} Name: ${name}`,
    `${EMOJI.pin} Pickup Location: ${pickup}`,
    `${EMOJI.target} Drop Location: ${drop}`,
    `${EMOJI.calendar} Travel Date: ${date}`,
    `${EMOJI.clock} Travel Time: ${time}`,
    `${EMOJI.group} Passengers: ${passengers}`,
  ];

  if (data.serviceType) {
    messageLines.push(`${EMOJI.vehicle} Service Type: ${cleanText(data.serviceType)}`);
  }

  if (data.mobile && data.mobile.trim()) {
    messageLines.push(`${EMOJI.mobile} Mobile: ${cleanText(data.mobile)}`);
  }

  if (data.carPreference && data.carPreference !== 'Any Available Vehicle') {
    messageLines.push(`${EMOJI.vehicle} Vehicle: ${cleanText(data.carPreference)}`);
  }

  if (data.additionalMessage && data.additionalMessage.trim() && !data.additionalMessage.includes('booking request')) {
    messageLines.push(``, `${EMOJI.note} Additional Details: ${cleanText(data.additionalMessage)}`);
  }

  messageLines.push(
    ``,
    `${EMOJI.sparkles} Please confirm vehicle availability and total fare quote.`,
    ``,
    `Thank you!`
  );

  return messageLines.join('\n');
}

/**
 * Log booking data to Google Sheets via Webhook URL if configured in .env
 */
export function logToGoogleSheets(data: BookingFormData): void {
  const webhookUrl = import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhookUrl || webhookUrl.includes('YOUR_GOOGLE_APPS_SCRIPT_WEBHOOK_URL')) return;

  try {
    fetch(webhookUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).catch((err) => console.log('Google Sheets log error:', err));
  } catch (err) {
    console.log('Google Sheets log exception:', err);
  }
}

export function openWhatsAppBooking(data: BookingFormData, customNumber?: string): void {
  // Asynchronously log booking data to Google Sheets
  logToGoogleSheets(data);

  const message = buildWhatsAppMessage(data);
  const rawNumber = customNumber || SITE_CONFIG.whatsappNumber;
  // Clean phone number (remove spaces, plus, dashes)
  const cleanNumber = rawNumber.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message);
  
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedText}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
}

