import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PropertyGallery from './components/PropertyGallery';
import PropertyInfo from './components/PropertyInfo';
import PropertyFeatures from './components/PropertyFeatures';
import PropertyContact from './components/PropertyContact';
import RelatedProperties from './components/RelatedProperties';

export default function PropertyDetailPage() {
  return (
    <main className="relative bg-obsidian min-h-screen overflow-x-hidden">
      <div className="vertical-lines hidden lg:flex" aria-hidden="true">
        <div className="vertical-line" />
        <div className="vertical-line" />
        <div className="vertical-line" />
        <div className="vertical-line" />
      </div>
      <Header />
      <PropertyGallery />
      <PropertyInfo />
      <PropertyFeatures />
      <PropertyContact />
      <RelatedProperties />
      <Footer />
    </main>
  );
}