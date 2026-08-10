import { useState } from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero/Hero';
import { VideoSection } from './components/VideoSection';
import { BookingFormModal } from './components/BookingFormModal';
import { Services } from './components/Services';
import { Fleet } from './components/Fleet';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BookingProcess } from './components/BookingProcess';
import { Stats } from './components/Stats';
import { Testimonials } from './components/Testimonials';
import { About } from './components/About';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

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

        {/* 2. Video Showcase Section (Right after Hero, Video on Left without Audio) */}
        <VideoSection />

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
        <About />

        {/* Verified Customer Testimonials (Moved to Bottom) */}
        <Testimonials />

        {/* Final Conversion Call To Action */}
        <CTA onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Fixed Sticky Floating WhatsApp Button */}
      <WhatsAppButton onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive WhatsApp Booking Modal */}
      <BookingFormModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        preselectedCar={preselectedCar}
        preselectedService={preselectedService}
      />
    </div>
  );
}

export default App;
