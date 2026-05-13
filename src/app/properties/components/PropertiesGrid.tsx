'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const allProperties = [
{
  id: 1,
  name: 'Penthouse Étoile',
  location: 'Paris 8ème, France',
  price: '8 200 000 €',
  surface: '420 m²',
  rooms: 5,
  type: 'Appartement',
  tag: 'Exclusivité',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_14169ea50-1772541195551.png",
  alt: 'Penthouse parisien lumineux avec terrasse vue panoramique, intérieur minimaliste blanc et or, grandes baies vitrées'
},
{
  id: 2,
  name: 'Villa Cristal',
  location: 'Dubai Hills, UAE',
  price: '18 900 000 AED',
  surface: '1 200 m²',
  rooms: 7,
  type: 'Villa',
  tag: 'Nouveau',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1bd157f01-1772201310966.png",
  alt: 'Villa contemporaine à Dubai Hills avec piscine à débordement et jardin tropical, architecture blanche épurée'
},
{
  id: 3,
  name: 'Villa Azur',
  location: 'Monaco, Principauté',
  price: '22 500 000 €',
  surface: '680 m²',
  rooms: 5,
  type: 'Villa',
  tag: 'Prestige',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d59040e0-1772201887420.png",
  alt: 'Villa de prestige à Monaco surplombant la Méditerranée, terrasses ensoleillées avec vue mer panoramique'
},
{
  id: 4,
  name: 'Résidence Lumière',
  location: 'Cannes, Côte d\'Azur',
  price: '4 750 000 €',
  surface: '310 m²',
  rooms: 4,
  type: 'Appartement',
  tag: 'Rare',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_11128c785-1772200718130.png",
  alt: 'Résidence contemporaine Côte d\'Azur, salon ouvert lumineux avec vue mer, finitions haut de gamme dorées'
},
{
  id: 5,
  name: 'Domaine des Cèdres',
  location: 'Mougins, France',
  price: '6 800 000 €',
  surface: '950 m²',
  rooms: 8,
  type: 'Villa',
  tag: 'Exclusivité',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_17c5ae9ac-1776255952495.png",
  alt: 'Domaine provençal luxueux avec parc arboré, piscine à débordement, architecture traditionnelle rénovée'
},
{
  id: 6,
  name: 'Appartement Opéra',
  location: 'Paris 9ème, France',
  price: '3 200 000 €',
  surface: '185 m²',
  rooms: 3,
  type: 'Appartement',
  tag: 'Coup de cœur',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_18622976e-1766576082159.png",
  alt: 'Appartement haussmannien rénové Paris, plafonds hauts moulurés, parquet ancien, luminosité exceptionnelle'
},
{
  id: 7,
  name: 'Terrain Palm Jumeirah',
  location: 'Palm Jumeirah, Dubai',
  price: '9 500 000 AED',
  surface: '2 400 m²',
  rooms: 0,
  type: 'Terrain',
  tag: 'Investissement',
  image: "https://images.unsplash.com/photo-1651827659205-c7891dbdb951",
  alt: 'Terrain à bâtir Palm Jumeirah Dubai, vue mer et skyline, emplacement premium insulaire, ciel doré'
},
{
  id: 8,
  name: 'Villa Bellissima',
  location: 'Cap d\'Antibes, France',
  price: '14 500 000 €',
  surface: '780 m²',
  rooms: 6,
  type: 'Villa',
  tag: 'Prestige',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_199dd8d5f-1772622672096.png",
  alt: 'Villa méditerranéenne Cap d\'Antibes avec piscine face à la mer, jardin luxuriant, architecture provençale de prestige'
},
{
  id: 9,
  name: 'Terrain Eze Village',
  location: 'Eze, Côte d\'Azur',
  price: '2 100 000 €',
  surface: '3 200 m²',
  rooms: 0,
  type: 'Terrain',
  tag: 'Rare',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f6a4c511-1776255950769.png",
  alt: 'Terrain avec vue panoramique sur la Méditerranée à Eze, village perché, coucher de soleil spectaculaire'
}];


const categories = ['Tous', 'Villas', 'Appartements', 'Terrains'];
const locations = ['Toutes', 'Paris', 'Dubai', 'Monaco', 'Côte d\'Azur'];

export default function PropertiesGrid() {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [activeLocation, setActiveLocation] = useState('Toutes');
  const sectionRef = useRef<HTMLElement>(null);

  const filtered = allProperties.filter((p) => {
    const catMatch =
    activeCategory === 'Tous' ||
    activeCategory === 'Villas' && p.type === 'Villa' ||
    activeCategory === 'Appartements' && p.type === 'Appartement' ||
    activeCategory === 'Terrains' && p.type === 'Terrain';

    const locMatch =
    activeLocation === 'Toutes' ||
    p.location.toLowerCase().includes(activeLocation.toLowerCase());

    return catMatch && locMatch;
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const revealEls = entry.target.querySelectorAll('.reveal-hidden');
            revealEls.forEach((el, i) => {
              setTimeout(() => {
                el.classList.remove('reveal-hidden');
                el.classList.add('animate-fade-in-up');
              }, i * 80);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-6 md:px-12 relative z-10">
      <div className="max-w-screen-xl mx-auto">

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-6 mb-12 items-start sm:items-center justify-between">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) =>
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 border ${
              activeCategory === cat ?
              'filter-active border-gold' : 'border-gold-subtle text-warm-white/50 hover:text-gold hover:border-gold'}`
              }>
              
                {cat}
              </button>
            )}
          </div>

          {/* Location filter */}
          <div className="flex flex-wrap gap-2">
            {locations.map((loc) =>
            <button
              key={loc}
              onClick={() => setActiveLocation(loc)}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wider transition-all duration-300 border ${
              activeLocation === loc ?
              'border-gold/60 text-gold bg-gold/10' : 'border-gold-subtle/50 text-warm-white/30 hover:text-warm-white/60 hover:border-gold-subtle'}`
              }>
              
                {loc}
              </button>
            )}
          </div>
        </div>

        {/* Count */}
        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest text-warm-white/30 font-medium">
            {filtered.length} bien{filtered.length > 1 ? 's' : ''} trouvé{filtered.length > 1 ? 's' : ''}
          </p>
        </div>

        {/* Grid */}
        {filtered.length === 0 ?
        <div className="text-center py-24">
            <p className="font-serif text-2xl font-light text-warm-white/30">Aucun bien correspond à votre recherche</p>
          </div> :

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((property) =>
          <div key={property.id} className="reveal-hidden opacity-100">
                <PropertyCard property={property} />
              </div>
          )}
          </div>
        }
      </div>
    </section>);

}

function PropertyCard({ property }: {property: typeof allProperties[0];}) {
  return (
    <Link href="/property-detail">
      <article className="property-card group rounded-3xl overflow-hidden border border-gold-subtle cursor-pointer bg-obsidian-3">
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <AppImage
            src={property.image}
            alt={property.alt}
            fill
            className="object-cover grayscale-hover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
          
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent" />
          {/* Tag */}
          <div className="absolute top-4 left-4">
            <span className="glass-dark px-3 py-1 rounded-full text-xs uppercase tracking-widest text-gold font-semibold">
              {property.tag}
            </span>
          </div>
          {/* Type */}
          <div className="absolute top-4 right-4">
            <span className="glass-dark px-3 py-1 rounded-full text-xs uppercase tracking-widest text-warm-white/60 font-medium">
              {property.type}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-xs uppercase tracking-widest text-gold/70 font-medium mb-1">{property.location}</p>
          <h3 className="font-serif text-xl font-light text-warm-white mb-3">{property.name}</h3>

          <div className="flex items-center gap-4 text-xs text-warm-white/40 mb-5">
            <span className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" />
              </svg>
              {property.surface}
            </span>
            {property.rooms > 0 &&
            <>
                <span>·</span>
                <span className="flex items-center gap-1.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 22v-2a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2" />
                    <circle cx="12" cy="10" r="4" />
                  </svg>
                  {property.rooms} ch.
                </span>
              </>
            }
          </div>

          <div className="gold-divider mb-4" />

          <div className="flex items-center justify-between">
            <p className="text-gold font-bold text-lg">{property.price}</p>
            <div className="w-9 h-9 rounded-full glass-gold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gold">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </article>
    </Link>);

}