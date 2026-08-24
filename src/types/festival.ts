export interface FestivalTheme {
  id: string;
  name: string;
  teluguName?: string;
  greeting: string;
  tagline: string;
  offerBadge: string;
  startDate: { month: number; day: number }; // 1-indexed month (1 = Jan, 12 = Dec)
  endDate: { month: number; day: number };
  themeColors: {
    primaryGradient: string; // Tailwind gradient classes
    bannerBg: string;
    badgeBg: string;
    badgeText: string;
    accentColor: string;
    glowColor: string;
  };
  icons: string[]; // Emojis / icons for floating particle animations
  bannerCtaText: string;
}
