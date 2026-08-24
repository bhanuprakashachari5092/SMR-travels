import type { FestivalTheme } from '../types/festival';

export const FESTIVALS_LIST: FestivalTheme[] = [
  // 1. Sankranti / Pongal / Bhogi / Kanuma (Jan 12 - Jan 18)
  {
    id: 'sankranti',
    name: 'Makar Sankranti & Pongal',
    teluguName: 'భోగి • సంక్రాంతి • కనుమ పండుగ శుభాకాంక్షలు',
    greeting: '🪁 సంక్రాంతి పండుగ శుభాకాంక్షలు! Happy Sankranti & Pongal!',
    tagline: 'Special Village Outstation Rides across Andhra & Rayalaseema • 24/7 Car Rentals',
    offerBadge: 'Sankranti Festive Special Cabs',
    startDate: { month: 1, day: 12 },
    endDate: { month: 1, day: 18 },
    themeColors: {
      primaryGradient: 'from-amber-600 via-orange-500 to-yellow-500',
      bannerBg: 'bg-linear-to-r from-amber-950/95 via-orange-900/95 to-amber-900/95 text-amber-50',
      badgeBg: 'bg-amber-500/20 border-amber-400/40',
      badgeText: 'text-amber-200',
      accentColor: '#F59E0B',
      glowColor: 'rgba(245, 158, 11, 0.25)'
    },
    icons: ['🪁', '🌾', '🪔', '✨'],
    bannerCtaText: 'Book Sankranti Ride'
  },

  // 2. Republic Day (Jan 25 - Jan 27)
  {
    id: 'republic_day',
    name: 'Republic Day',
    teluguName: 'గణతంత్ర దినోత్సవ శుభాకాంక్షలు',
    greeting: '🇮🇳 Happy Republic Day! 77th Republic Celebration',
    tagline: 'Safe, punctual highway chauffeur services across Andhra & Karnataka',
    offerBadge: 'Patriotic Long Weekend Offers',
    startDate: { month: 1, day: 25 },
    endDate: { month: 1, day: 27 },
    themeColors: {
      primaryGradient: 'from-orange-500 via-white to-emerald-600',
      bannerBg: 'bg-linear-to-r from-slate-900 via-blue-950 to-slate-900 text-white',
      badgeBg: 'bg-orange-500/20 border-orange-400/40',
      badgeText: 'text-orange-300',
      accentColor: '#1769FF',
      glowColor: 'rgba(23, 105, 255, 0.25)'
    },
    icons: ['🇮🇳', '✨', '🕊️', '💫'],
    bannerCtaText: 'Book Holiday Cab'
  },

  // 3. Maha Shivaratri (Feb / March - Approx Feb 15 - Feb 28)
  {
    id: 'maha_shivaratri',
    name: 'Maha Shivaratri',
    teluguName: 'మహా శివరాత్రి శుభాకాంక్షలు',
    greeting: '🕉️ హర హర మహాదేవ్! Happy Maha Shivaratri',
    tagline: 'Special Jyotirlinga, Srisailam, Kotappakonda & Temple Pilgrimage Tour Cabs',
    offerBadge: 'Temple Yatra Special Package',
    startDate: { month: 2, day: 15 },
    endDate: { month: 2, day: 28 },
    themeColors: {
      primaryGradient: 'from-blue-700 via-indigo-600 to-cyan-500',
      bannerBg: 'bg-linear-to-r from-slate-950 via-indigo-950 to-slate-950 text-indigo-100',
      badgeBg: 'bg-cyan-500/20 border-cyan-400/40',
      badgeText: 'text-cyan-300',
      accentColor: '#00B8D9',
      glowColor: 'rgba(0, 184, 217, 0.25)'
    },
    icons: ['🕉️', '🔱', '🌸', '✨'],
    bannerCtaText: 'Book Temple Yatra'
  },

  // 4. Holi (March 10 - March 18)
  {
    id: 'holi',
    name: 'Holi Festival of Colors',
    teluguName: 'హోలీ పండుగ శుభాకాంక్షలు',
    greeting: '🎨 Happy Holi! Celebrate Colors with SMR Car Travels',
    tagline: 'Spacious, AC family cars with extra luggage space for festival getaways',
    offerBadge: 'Holi Weekend Special Booking',
    startDate: { month: 3, day: 10 },
    endDate: { month: 3, day: 18 },
    themeColors: {
      primaryGradient: 'from-pink-500 via-purple-500 to-yellow-400',
      bannerBg: 'bg-linear-to-r from-purple-950 via-pink-950 to-rose-950 text-pink-50',
      badgeBg: 'bg-pink-500/20 border-pink-400/40',
      badgeText: 'text-pink-300',
      accentColor: '#EC4899',
      glowColor: 'rgba(236, 72, 153, 0.25)'
    },
    icons: ['🎨', '🌸', '🌺', '✨'],
    bannerCtaText: 'Book Holi Ride'
  },

  // 5. Ugadi (Telugu New Year) & Sri Rama Navami (March 22 - April 10)
  {
    id: 'ugadi',
    name: 'Ugadi - Telugu New Year',
    teluguName: 'శ్రీ క్రోధినామ/విశ్వావసు నామ సంవత్సర ఉగాది శుభాకాంక్షలు',
    greeting: '🌿 ఉగాది పండుగ శుభాకాంక్షలు! Happy Ugadi & Sri Rama Navami!',
    tagline: 'Start your new journeys with blessings • SMR Car Travels Anantapur',
    offerBadge: 'Ugadi Shubh Yatra Discount',
    startDate: { month: 3, day: 22 },
    endDate: { month: 4, day: 10 },
    themeColors: {
      primaryGradient: 'from-emerald-600 via-teal-500 to-amber-400',
      bannerBg: 'bg-linear-to-r from-emerald-950 via-teal-950 to-slate-950 text-emerald-50',
      badgeBg: 'bg-emerald-500/20 border-emerald-400/40',
      badgeText: 'text-emerald-300',
      accentColor: '#10B981',
      glowColor: 'rgba(16, 185, 129, 0.25)'
    },
    icons: ['🌿', '🥭', '🌸', '🪔', '✨'],
    bannerCtaText: 'Book Ugadi Cab'
  },

  // 6. Ramadan / Eid al-Fitr & Eid al-Adha (April / June / September)
  {
    id: 'eid',
    name: 'Eid Mubarak',
    teluguName: 'ఈద్ ముబారక్ • Ramzan & Bakrid Greetings',
    greeting: '🌙 Eid Mubarak! Warm Festive Greetings from Mohammad Rafi & SMR Travels',
    tagline: 'Pristine, luxury chauffeur-driven vehicles for your family visits & airport drops',
    offerBadge: 'Eid Special Family Travel',
    startDate: { month: 3, day: 28 },
    endDate: { month: 4, day: 5 },
    themeColors: {
      primaryGradient: 'from-emerald-700 via-emerald-500 to-amber-300',
      bannerBg: 'bg-linear-to-r from-emerald-950 via-teal-950 to-green-950 text-emerald-100',
      badgeBg: 'bg-amber-400/20 border-amber-300/40',
      badgeText: 'text-amber-300',
      accentColor: '#10B981',
      glowColor: 'rgba(16, 185, 129, 0.25)'
    },
    icons: ['🌙', '⭐', '✨', '🕌'],
    bannerCtaText: 'Book Eid Ride'
  },

  // 7. Independence Day (Aug 12 - Aug 18)
  {
    id: 'independence_day',
    name: 'Independence Day',
    teluguName: 'స్వాతంత్ర్య దినోత్సవ శుభాకాంక్షలు',
    greeting: '🇮🇳 Happy Independence Day! Freedom of Comfort & Luxury Travel',
    tagline: 'Experience zero-stress outstation trips across Karnataka, AP & Telangana',
    offerBadge: 'Independence Long Weekend Special',
    startDate: { month: 8, day: 12 },
    endDate: { month: 8, day: 18 },
    themeColors: {
      primaryGradient: 'from-orange-600 via-blue-600 to-emerald-600',
      bannerBg: 'bg-linear-to-r from-slate-950 via-blue-950 to-slate-950 text-white',
      badgeBg: 'bg-orange-500/20 border-orange-400/40',
      badgeText: 'text-orange-300',
      accentColor: '#1769FF',
      glowColor: 'rgba(23, 105, 255, 0.25)'
    },
    icons: ['🇮🇳', '✨', '🕊️', '💫'],
    bannerCtaText: 'Book Holiday Trip'
  },

  // 8. Vinayaka Chavithi / Ganesh Chaturthi (August 20 - September 10)
  {
    id: 'ganesh_chaturthi',
    name: 'Vinayaka Chavithi / Ganesh Chaturthi',
    teluguName: 'వినాయక చవితి శుభాకాంక్షలు',
    greeting: '🕉️ గణపతి బప్పా మోరియా! Happy Vinayaka Chavithi',
    tagline: 'Book Kanipakam, Tirupati, Bangalore & Outstation Festival Pilgrimages',
    offerBadge: 'Ganesh Festival Travel Specials',
    startDate: { month: 8, day: 20 },
    endDate: { month: 9, day: 10 },
    themeColors: {
      primaryGradient: 'from-amber-500 via-orange-500 to-red-500',
      bannerBg: 'bg-linear-to-r from-amber-950 via-orange-950 to-red-950 text-amber-50',
      badgeBg: 'bg-amber-400/20 border-amber-300/40',
      badgeText: 'text-amber-300',
      accentColor: '#F97316',
      glowColor: 'rgba(249, 115, 22, 0.25)'
    },
    icons: ['🕉️', '🌺', '🪔', '✨', '🐘'],
    bannerCtaText: 'Book Temple & Festival Cab'
  },

  // 9. Dussehra / Navratri / Vijayadashami (October 1 - October 20)
  {
    id: 'dussehra',
    name: 'Dussehra & Navratri',
    teluguName: 'శ్రీ విజయదశమి • దసరా శుభాకాంక్షలు',
    greeting: '🏹 దసరా & విజయదశమి శుభాకాంక్షలు! Happy Dussehra & Navratri',
    tagline: 'Pristine Innova Crysta, Ertiga & Tempo Travellers for family festival vacations',
    offerBadge: 'Vijayadashami Special Rides',
    startDate: { month: 10, day: 1 },
    endDate: { month: 10, day: 20 },
    themeColors: {
      primaryGradient: 'from-amber-500 via-red-600 to-rose-700',
      bannerBg: 'bg-linear-to-r from-red-950 via-rose-950 to-amber-950 text-rose-50',
      badgeBg: 'bg-amber-500/20 border-amber-400/40',
      badgeText: 'text-amber-300',
      accentColor: '#DC2626',
      glowColor: 'rgba(220, 38, 38, 0.25)'
    },
    icons: ['🏹', '🪔', '🌺', '✨', '🕉️'],
    bannerCtaText: 'Book Dussehra Tour'
  },

  // 10. Diwali / Deepavali (October 25 - November 15)
  {
    id: 'diwali',
    name: 'Diwali Festival of Lights',
    teluguName: 'దీపావళి పండుగ శుభాకాంక్షలు',
    greeting: '🪔 దీపావళి శుభాకాంక్షలు! Happy Deepavali to you & your family!',
    tagline: 'Light up your travels with SMR Car Travels • 24/7 Premium Chauffeur Cabs',
    offerBadge: 'Diwali Festive Outstation Special',
    startDate: { month: 10, day: 25 },
    endDate: { month: 11, day: 15 },
    themeColors: {
      primaryGradient: 'from-amber-400 via-orange-500 to-yellow-300',
      bannerBg: 'bg-linear-to-r from-amber-950 via-orange-950 to-yellow-950 text-amber-50',
      badgeBg: 'bg-amber-400/20 border-amber-300/50',
      badgeText: 'text-amber-300',
      accentColor: '#F59E0B',
      glowColor: 'rgba(245, 158, 11, 0.35)'
    },
    icons: ['🪔', '✨', '🎆', '💫', '🏮'],
    bannerCtaText: 'Book Diwali Ride'
  },

  // 11. Christmas & New Year Holiday (December 20 - January 5)
  {
    id: 'christmas_new_year',
    name: 'Christmas & Happy New Year',
    teluguName: 'క్రిస్మస్ & నూతన సంవత్సర శుభాకాంక్షలు',
    greeting: '🎄 Merry Christmas & Happy New Year 2027! 🎅',
    tagline: 'Celebrate year-end holidays with luxury airport drops & outstation hill tours',
    offerBadge: 'Year-End Holiday Travel Offers',
    startDate: { month: 12, day: 20 },
    endDate: { month: 1, day: 5 },
    themeColors: {
      primaryGradient: 'from-rose-600 via-emerald-600 to-amber-400',
      bannerBg: 'bg-linear-to-r from-slate-950 via-rose-950 to-slate-950 text-rose-50',
      badgeBg: 'bg-rose-500/20 border-rose-400/40',
      badgeText: 'text-rose-300',
      accentColor: '#E11D48',
      glowColor: 'rgba(225, 29, 72, 0.25)'
    },
    icons: ['🎄', '🎅', '❄️', '✨', '🎆'],
    bannerCtaText: 'Book Holiday Trip'
  }
];

/**
 * Checks whether today's calendar date falls within the festival start & end date.
 */
export function isDateInFestival(
  currentMonth: number, // 1-12
  currentDay: number,   // 1-31
  festival: FestivalTheme
): boolean {
  const { startDate, endDate } = festival;

  // Handle year crossover (e.g., Dec 20 to Jan 5)
  if (startDate.month > endDate.month) {
    if (
      (currentMonth === startDate.month && currentDay >= startDate.day) ||
      (currentMonth > startDate.month) ||
      (currentMonth < endDate.month) ||
      (currentMonth === endDate.month && currentDay <= endDate.day)
    ) {
      return true;
    }
    return false;
  }

  // Same month or consecutive months in same year
  if (currentMonth < startDate.month || currentMonth > endDate.month) {
    return false;
  }

  if (currentMonth === startDate.month && currentDay < startDate.day) {
    return false;
  }

  if (currentMonth === endDate.month && currentDay > endDate.day) {
    return false;
  }

  return true;
}

/**
 * Detects the active festival based on real device/server calendar date,
 * or returns the preview festival if user selected one in demo mode.
 */
export function getActiveFestival(previewId?: string | null): FestivalTheme | null {
  if (previewId) {
    const found = FESTIVALS_LIST.find((f) => f.id === previewId);
    if (found) return found;
  }

  const now = new Date();
  const currentMonth = now.getMonth() + 1; // getMonth() is 0-indexed
  const currentDay = now.getDate();

  for (const festival of FESTIVALS_LIST) {
    if (isDateInFestival(currentMonth, currentDay, festival)) {
      return festival;
    }
  }

  return null;
}
