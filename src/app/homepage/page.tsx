import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import FeaturedPropertiesSection from './components/FeaturedPropertiesSection';
import StatsSection from './components/StatsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import NewsletterSection from './components/NewsletterSection';

export default function HomePage() {
  return (
    <main className="relative bg-obsidian min-h-screen overflow-x-hidden">
      {/* Decorative vertical grid lines */}
      <div className="vertical-lines hidden lg:flex" aria-hidden="true">
        <div className="vertical-line" />
        <div className="vertical-line" />
        <div className="vertical-line" />
        <div className="vertical-line" />
      </div>

      <Header />
      <HeroSection />
      <FeaturedPropertiesSection />
      <StatsSection />
      <AboutSection />
      <TestimonialsSection />
      <ServicesSection />
      <ContactSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}