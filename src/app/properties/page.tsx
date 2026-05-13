import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PropertiesHero from './components/PropertiesHero';
import PropertiesGrid from './components/PropertiesGrid';

export default function PropertiesPage() {
  return (
    <main className="relative bg-obsidian min-h-screen overflow-x-hidden">
      <div className="vertical-lines hidden lg:flex" aria-hidden="true">
        <div className="vertical-line" />
        <div className="vertical-line" />
        <div className="vertical-line" />
        <div className="vertical-line" />
      </div>
      <Header />
      <PropertiesHero />
      <PropertiesGrid />
      <Footer />
    </main>
  );
}