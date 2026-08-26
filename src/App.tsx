import { useState, lazy, Suspense } from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero/Hero';
import { QuickSearchWidget } from './components/QuickSearchWidget';
import { WhatsAppButton } from './components/WhatsAppButton';

// Below-the-fold components lazy loaded for instant sub-second desktop & mobile load
const VideoSection = lazy(() => import('./components/VideoSection').then(m => ({ default: m.VideoSection })));
const FounderSection = lazy(() => import('./components/FounderSection').then(m => ({ default: m.FounderSection })));
const Stats = lazy(() => import('./components/Stats').then(m => ({ default: m.Stats })));
const Services = lazy(() => import('./components/Services').then(m => ({ default: m.Services })));
const Fleet = lazy(() => import('./components/Fleet').then(m => ({ default: m.Fleet })));
const PopularRoutes = lazy(() => import('./components/PopularRoutes').then(m => ({ default: m.PopularRoutes })));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs').then(m => ({ default: m.WhyChooseUs })));
const BookingProcess = lazy(() => import('./components/BookingProcess').then(m => ({ default: m.BookingProcess })));
const About = lazy(() => import('./components/About').then(m => ({ default: m.About })));
const LocationSection = lazy(() => import('./components/LocationSection').then(m => ({ default: m.LocationSection })));
const FAQSection = lazy(() => import('./components/FAQSection').then(m => ({ default: m.FAQSection })));
const Testimonials = lazy(() => import('./components/Testimonials').then(m => ({ default: m.Testimonials })));
const CTA = lazy(() => import('./components/CTA').then(m => ({ default: m.CTA })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
const BookingFormModal = lazy(() => import('./components/BookingFormModal').then(m => ({ default: m.BookingFormModal })));

export function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [preselectedCar, setPreselectedCar] = useState<string>('');
  const [preselectedService, setPreselectedService] = useState<string>('');

  const handleOpenBooking = (carName?: string) => {
    if (carName) {
      setPreselectedCar(carName);
    } else {
      setPreselectedCar('');
    }
    setIsBookingModalOpen(true);
  };

  const handleSelectService = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0B1F3A] font-sans relative overflow-x-hidden selection:bg-[#1769FF] selection:text-white">
      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Main Glass Navigation Header */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* MakeMyTrip Style Pickup & Drop Booking Search Widget */}
        <QuickSearchWidget onOpenBooking={(carName) => handleOpenBooking(carName)} />

        {/* Below-the-fold content wrapped in Suspense for ultra-fast initial load */}
        <Suspense fallback={<div className="min-h-96" />}>
          {/* 2. Video Showcase Section (Right after Hero, Video on Left without Audio) */}
          <VideoSection />

          {/* 3. Executive Headquarters & Leadership Section */}
          <FounderSection onOpenBooking={() => handleOpenBooking()} />

          {/* 3. Key Stats Counter Section */}
          <Stats />

          {/* Travel Services Offered */}
          <Services onSelectService={handleSelectService} />

          {/* Luxury Vehicle Fleet Showcase */}
          <Fleet onSelectCar={(carName) => handleOpenBooking(carName)} />

          {/* 🛣️ Top Outstation & Airport Travel Routes (High-Intent SEO Hub) */}
          <PopularRoutes onOpenBooking={(carName) => handleOpenBooking(carName)} />

          {/* Why Choose SMR Section */}
          <WhyChooseUs />

          {/* 3 Step Booking Process */}
          <BookingProcess onOpenBooking={() => handleOpenBooking()} />

          {/* Brand Promise & About Us */}
          <About onOpenBooking={(carName) => handleOpenBooking(carName)} />

          {/* 📍 SMR Car Travels Google Maps & Location Section */}
          <LocationSection onOpenBooking={() => handleOpenBooking()} />

          {/* ❓ High-Intent Local SEO FAQ Section for Anantapur Travel */}
          <FAQSection onOpenBooking={() => handleOpenBooking()} />

          {/* Verified Customer Testimonials (Moved to Bottom) */}
          <Testimonials />

          {/* Final Conversion Call To Action */}
          <CTA onOpenBooking={() => handleOpenBooking()} />
        </Suspense>
      </main>

      {/* Footer */}
      <Suspense fallback={null}>
        <Footer onOpenBooking={() => handleOpenBooking()} />
      </Suspense>

      {/* Fixed Sticky Floating WhatsApp Button */}
      <WhatsAppButton onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive WhatsApp Booking Modal - Loaded on-demand */}
      {isBookingModalOpen && (
        <Suspense fallback={null}>
          <BookingFormModal
            isOpen={isBookingModalOpen}
            onClose={() => setIsBookingModalOpen(false)}
            preselectedCar={preselectedCar}
            preselectedService={preselectedService}
          />
        </Suspense>
      )}
    </div>
  );
}

export default App;
