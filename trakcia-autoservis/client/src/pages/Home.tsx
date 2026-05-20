/**
 * TRAKCIA s.r.o. — Home Page
 * Design: Industrial Brutalism / Automotive Precision
 * Assembles all sections: Hero, About, Services, WhyUs, Testimonials, Gallery, Contact, Footer
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-[oklch(0.11_0.005_260)]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <TestimonialsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
