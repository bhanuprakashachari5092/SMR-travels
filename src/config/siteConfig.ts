import type { CarModel, ServiceItem, Testimonial, StatItem, WhyChooseUsItem } from '../types';

export const SITE_CONFIG = {
  brandName: 'SMR CAR TRAVELS',
  tagline: 'Your Journey. Our Responsibility.',
  shortDescription: 'Reliable, comfortable and professional travel experiences — designed around your journey.',
  whatsappNumber: import.meta.env.VITE_SMR_WHATSAPP_NUMBER || '919989599621', // Configured WhatsApp number
  contactPhone: '+91 99895 99621',
  contactEmail: 'bookings@smrcartravels.com',
  address: 'SMR Car Travels Head Office, Main Transport Hub, Metro Road, City Center',
  openingHours: '24/7 Round-the-Clock Service',
  socialLinks: {
    facebook: '#',
    instagram: '#',
    twitter: '#',
    linkedin: '#',
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'local',
    title: 'Local Travel',
    shortDesc: 'Flexible hourly & daily rental packages within city limits for business meetings, shopping & family tours.',
    longDesc: 'Experience hassle-free city commuting with our well-maintained cabs and polite drivers.',
    iconName: 'Building2',
    popularRoute: 'Half day (4 Hrs / 40 KM) & Full day (8 Hrs / 80 KM)',
    highlights: ['Zero surge pricing', 'GPS tracked vehicles', 'Doorstep pickup']
  },
  {
    id: 'outstation',
    title: 'Outstation Travel',
    shortDesc: 'Smooth & comfortable long-distance travel between cities with experienced highway drivers.',
    longDesc: 'Enjoy scenic highway trips with top-tier air-conditioned sedans and SUVs built for long journeys.',
    iconName: 'Compass',
    popularRoute: 'Inter-city travel with customizable itineraries',
    highlights: ['Highway-trained drivers', 'Sanitized vehicles', 'Transparent per-km rate']
  },
  {
    id: 'airport',
    title: 'Airport Pickup & Drop',
    shortDesc: 'On-time guaranteed airport transfers to ensure you never miss a flight or wait after landing.',
    longDesc: 'Flight delay tracking and prompt chauffeur service right at the arrival terminal.',
    iconName: 'PlaneTakeoff',
    popularRoute: 'Flight-synchronized pickup & express drop',
    highlights: ['Flight status monitoring', 'Free waiting time', 'Luggage assistance']
  },
  {
    id: 'oneway',
    title: 'One-Way Trips',
    shortDesc: 'Pay only for the distance traveled one way without paying return charges.',
    longDesc: 'Economical single destination trips across all major city connecting corridors.',
    iconName: 'ArrowRightLeft',
    popularRoute: 'City A to City B express routes',
    highlights: ['No return toll fees charged', 'Instant booking confirmation', 'Punctual pickup']
  },
  {
    id: 'roundtrip',
    title: 'Round Trips',
    shortDesc: 'Keep the car and dedicated driver with you for multi-day weekend getaways or business tours.',
    longDesc: 'Complete flexibility to explore multiple destinations at your own pace.',
    iconName: 'RotateCcw',
    popularRoute: 'Weekend trips & multi-city tours',
    highlights: ['Dedicated chauffeur', 'Flexible halt stops', 'Night allowance included']
  },
  {
    id: 'corporate',
    title: 'Corporate Travel',
    shortDesc: 'Professional executive transportation solutions for corporate events, clients & staff mobility.',
    longDesc: 'Standardized executive transport with monthly billing options and luxury vehicle fleet.',
    iconName: 'Briefcase',
    popularRoute: 'Executive commutes & VIP delegation pickup',
    highlights: ['Professional dress-code chauffeurs', 'Priority dispatch', 'GST invoicing']
  }
];

export const FLEET: CarModel[] = [
  {
    id: 'swift-dzire',
    name: 'Swift Dzire',
    category: 'Sedan',
    seats: 4,
    luggage: 2,
    ac: true,
    comfortRating: 5,
    tagline: 'Comfortable executive sedan for city & outstation travel',
    description: 'Smooth, quiet, and fuel-efficient sedan offering maximum legroom, dual air conditioning, and plush seating for business and personal trips.',
    image: '/images/about/dzire.png',
    features: ['Plush Seating', 'Dual Air Conditioning', 'Bluetooth Music System', 'Generous Boot Space'],
    isPopular: true
  },
  {
    id: 'toyota-etios',
    name: 'Toyota Etios',
    category: 'Sedan',
    seats: 4,
    luggage: 3,
    ac: true,
    comfortRating: 5,
    tagline: 'Reliable & spacious sedan for highway long trips',
    description: 'Proven Toyota engineering delivering top highway safety, extra luggage boot capacity, and noise-free acoustic interior cabin comfort.',
    image: '/images/about/etios.png',
    features: ['Spacious Rear Seat Legroom', 'Extra Boot Capacity', 'Powerful Air Cooling', 'Verified Chauffeur'],
    isPopular: false
  },
  {
    id: 'suzuki-ertiga',
    name: 'Suzuki Ertiga (7 Seater)',
    category: 'SUV',
    seats: 7,
    luggage: 3,
    ac: true,
    comfortRating: 5,
    tagline: '4.9 ★ Premium Outstation & Executive Family SUV Fleet',
    description: 'Dual Air Conditioning, 7-Seater Luxury Comfort, GPS Tracked, Uniformed Chauffeur, Sanitized & Dual AC, On-Time Guarantee.',
    image: '/images/about/ertiga.png',
    features: ['7 Passengers Capacity', '3+ Large Suitcases', 'Dual Climate Control', 'GPS Tracked Vehicle'],
    isPopular: true
  },
  {
    id: 'force-toofan',
    name: 'Force Toofan',
    category: 'Multi-Utility',
    seats: 10,
    luggage: 4,
    ac: true,
    comfortRating: 5,
    tagline: 'Rugged, high-clearance multi-passengers group vehicle',
    description: 'Built for tough terrains, group pilgrimage tours, and village outstation routes with extra seating capacity and sturdy suspension.',
    image: '/images/about/toofan.png',
    features: ['10+ Seater Capacity', 'High Ground Clearance', 'Ample Luggage Storage', 'Experienced Highway Driver'],
    isPopular: true
  },
  {
    id: 'tempo-traveller',
    name: 'Tempo Traveller (12+ Seater)',
    category: 'Executive Traveller',
    seats: 14,
    luggage: 6,
    ac: true,
    comfortRating: 5,
    tagline: 'Executive group luxury vehicle for tours & corporate events',
    description: 'High-roof luxury Tempo Traveller with reclining captain seats, individual air vents, reading lamps, and large luggage carrier.',
    image: '/images/about/traveller.png',
    features: ['12 to 17 Reclining Seats', 'Individual AC Vents', '6+ Large Suitcases Capacity', 'Pushback Seats'],
    isPopular: true
  },
  {
    id: 'smr-minibus',
    name: 'SMR Luxury Minibus',
    category: 'Luxury Minibus',
    seats: 22,
    luggage: 10,
    ac: true,
    comfortRating: 5,
    tagline: 'Premium 20+ seater mini bus for large group tours & corporate delegations',
    description: 'High-comfort executive minibus featuring plush reclining seats, spacious luggage compartment, PA sound system, and individual AC vents.',
    image: '/images/about/minibus.png',
    features: ['20 to 26 Seater Capacity', 'High-Roof Luxury Interior', 'Reclining Seats & PA System', 'Generous Luggage Space'],
    isPopular: true
  }
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: 'drivers',
    title: 'Professional Drivers',
    description: 'Background-verified, uniform-clad chauffeurs with extensive highway & city route expertise.',
    icon: 'UserCheck'
  },
  {
    id: 'vehicles',
    title: 'Comfortable Vehicles',
    description: 'Meticulously sanitized, daily inspected vehicles maintained to pristine automotive standards.',
    icon: 'ShieldCheck'
  },
  {
    id: 'punctual',
    title: 'On-Time Service',
    description: 'We value your schedule. Vehicles arrive 10 minutes prior to your requested pickup time.',
    icon: 'Clock'
  },
  {
    id: 'pricing',
    title: 'Transparent Pricing',
    description: 'Clear, upfront quotes with zero hidden surprises or unexpected extra charges.',
    icon: 'BadgePercent'
  },
  {
    id: 'whatsapp',
    title: 'Easy WhatsApp Booking',
    description: 'Book your ride in under 30 seconds straight from your phone with instant confirmation.',
    icon: 'MessageSquare'
  },
  {
    id: 'customer',
    title: 'Customer First Approach',
    description: '24/7 dedicated support team to assist you during your entire journey.',
    icon: 'HeartHandshake'
  }
];

export const STATS: StatItem[] = [
  {
    value: '10+',
    label: 'Years Experience',
    sublabel: 'Delivering excellence in road travel'
  },
  {
    value: '1000+',
    label: 'Happy Customers',
    sublabel: 'Satisfied local & outstation travelers'
  },
  {
    value: '24/7',
    label: 'Booking Support',
    sublabel: 'Round-the-clock customer assistance'
  },
  {
    value: '100%',
    label: 'Customer Focus',
    sublabel: 'Safety, hygiene & comfort guaranteed'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    location: 'Outstation Trip',
    rating: 5,
    comment: 'Booked an SUV for a family weekend trip. The car was spotless, AC worked perfectly, and the driver was extremely polite and punctual. Will definitely use SMR again!',
    serviceUsed: 'Outstation Travel',
    date: 'August 2026'
  },
  {
    id: '2',
    name: 'Ananya Sharma',
    location: 'Airport Transfer',
    rating: 5,
    comment: 'I had an early morning 4 AM flight pickup. The SMR driver arrived at 3:45 AM, helped with heavy luggage, and drove smoothly. Stress-free service!',
    serviceUsed: 'Airport Pickup & Drop',
    date: 'August 2026'
  },
  {
    id: '3',
    name: 'Vikram Mehta',
    location: 'Corporate Client',
    rating: 5,
    comment: 'We use SMR Car Travels for our executive guest transfers. Their WhatsApp booking speed and professional driver dress code make them stand out.',
    serviceUsed: 'Corporate Travel',
    date: 'July 2026'
  }
];
