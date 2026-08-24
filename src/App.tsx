import { useState, lazy, Suspense } from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero/Hero';
import { QuickSearchWidget } from './components/QuickSearchWidget';
import { VideoSection } from './components/VideoSection';
import { FounderSection } from './components/FounderSection';
import { Services } from './components/Services';
import { Fleet } from './components/Fleet';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BookingProcess } from './components/BookingProcess';
import { Stats } from './components/Stats';
import { Testimonials } from './components/Testimonials';
import { LocationSection } from './components/LocationSection';
import { FAQSection } from './components/FAQSection';
import { About } from './components/About';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

// Lazy load booking modal to keep initial bundle size tiny and ultra-fast
const BookingFormModal = lazy(() => import('./components/BookingFormModal').then(module => ({ default: module.BookingFormModal })));

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
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

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
