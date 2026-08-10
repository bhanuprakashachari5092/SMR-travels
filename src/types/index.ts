export interface CarModel {
  id: string;
  name: string;
  category: 'Sedan' | 'SUV' | 'Multi-Utility' | 'Executive Traveller' | 'Luxury Minibus' | 'Premium Sedan' | 'Premium SUV';
  seats: number;
  luggage: number;
  ac: boolean;
  comfortRating: number; // e.g. 5 for 5-star
  description: string;
  tagline: string;
  image: string;
  features: string[];
  startingFare?: string;
  isPopular?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  iconName: string;
  popularRoute?: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  serviceUsed: string;
  date: string;
  avatar?: string;
}

export interface StatItem {
  value: string;
  label: string;
  sublabel: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface BookingFormData {
  fullName: string;
  mobile: string;
  pickupLocation: string;
  dropLocation: string;
  travelDate: string;
  travelTime: string;
  passengers: string;
  carPreference: string;
  serviceType: string;
  additionalMessage: string;
}
