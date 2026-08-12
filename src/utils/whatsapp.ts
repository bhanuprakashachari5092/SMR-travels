import type { BookingFormData } from '../types';
import { SITE_CONFIG } from '../config/siteConfig';

// ES6 Unicode Escape Constants to guarantee 100% cross-platform clean emoji rendering
const EMOJI = {
  car: '\u{1F697}',
  user: '\u{1F464}',
  pin: '\u{1F4CD}',
  target: '\u{1F3AF}',
  calendar: '\u{1F4C5}',
  clock: '\u{23F0}',
  group: '\u{1F465}',
  mobile: '\u{1F4F1}',
  vehicle: '\u{1F698}',
  taxi: '\u{1F696}',
  note: '\u{1F4DD}',
  sparkles: '\u{2728}',
};

function cleanText(text: string): string {
  if (!text) return '';
  // Strip out any asterisks (*), hashes (#), colons (:), or replacement characters (\uFFFD)
  return text.replace(/[*#:\uFFFD]/g, '').replace(/\s+/g, ' ').trim();
}

export function buildWhatsAppMessage(data: BookingFormData): string {
  const name = cleanText(data.fullName || 'Website Visitor');
  const pickup = cleanText(data.pickupLocation || 'Not specified');
  const drop = cleanText(data.dropLocation || 'Not specified');
  const date = cleanText(data.travelDate || 'Not specified');
  const time = cleanText(data.travelTime || 'Not specified');
  const passengers = cleanText(data.passengers || '1 Passenger');

  const messageLines = [
    `${EMOJI.car} Hello SMR Car Travels`,
    ``,
    `I would like to book a ride with you`,
    ``,
    `${EMOJI.user} Name  ${name}`,
    `${EMOJI.pin} Pickup Location  ${pickup}`,
    `${EMOJI.target} Drop Location  ${drop}`,
    `${EMOJI.calendar} Travel Date  ${date}`,
    `${EMOJI.clock} Travel Time  ${time}`,
    `${EMOJI.group} Passengers  ${passengers}`,
  ];

  if (data.serviceType) {
    messageLines.push(`${EMOJI.taxi} Service Type  ${cleanText(data.serviceType)}`);
  }

  if (data.mobile && data.mobile.trim()) {
    messageLines.push(`${EMOJI.mobile} Mobile  ${cleanText(data.mobile)}`);
  }

  if (data.carPreference && data.carPreference !== 'Any Available Vehicle') {
    messageLines.push(`${EMOJI.vehicle} Vehicle  ${cleanText(data.carPreference)}`);
  }

  if (data.additionalMessage && data.additionalMessage.trim() && !data.additionalMessage.includes('booking request')) {
    messageLines.push(``, `${EMOJI.note} Additional Details  ${cleanText(data.additionalMessage)}`);
  }

  messageLines.push(
    ``,
    `${EMOJI.sparkles} Please confirm vehicle availability and total fare quote`,
    ``,
    `Thank you`
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
