'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const properties = [
{
  id: 1,
  name: 'Penthouse Étoile',
  location: 'Paris 8ème, France',
  price: '8 200 000 €',
  surface: '420 m²',
  rooms: '5 chambres',
  tag: 'Exclusivité',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_18ddef7e2-1772200718883.png",
  alt: 'Penthouse parisien moderne avec terrasse panoramique, intérieur blanc immaculé, lumière naturelle abondante, vue sur les toits de Paris',
  type: 'Appartement'
},
{
  id: 2,
  name: 'Villa Cristal',
  location: 'Dubai Hills, UAE',
  price: '18 900 000 AED',
  surface: '1 200 m²',
  rooms: '7 chambres',
  tag: 'Nouveau',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_16078fa54-1773044077044.png",
  alt: 'Villa ultra-luxueuse à Dubai Hills avec piscine à débordement, jardin tropical, architecture moderne épurée au coucher du soleil',
  type: 'Villa'
},
{
  id: 3,
  name: 'Villa Azur',
  location: 'Monaco, Principauté',
  price: '22 500 000 €',
  surface: '680 m²',
  rooms: '5 chambres',
  tag: 'Prestige',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d59040e0-1772201887420.png",
  alt: 'Villa de prestige à Monaco surplombant la Méditerranée, architecture provençale contemporaine, terrasses ensoleillées, vue mer spectaculaire',
  type: 'Villa'
},
{
  id: 4,
  name: 'Résidence Lumière',
  location: 'Cannes, Côte d\'Azur',
  price: '4 750 000 €',
  surface: '310 m²',
  rooms: '4 chambres',
  tag: 'Rare',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_17ca4a2b7-1772748523268.png",
  alt: 'Résidence contemporaine sur la Côte d\'Azur, salon lumineux avec baies vitrées, vue sur la mer, finitions haut de gamme',
  type: 'Appartement'
}];


export default function FeaturedPropertiesSection() {
  const sectionRef = useRef<HTMLElement>(null);

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
              }, i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 relative z-10" id="properties">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div className="reveal-hidden opacity-100">
            <span className="text-xs uppercase tracking-widest text-gold font-semibold block mb-4">
              Sélection Exclusive
            </span>
            <h2 className="font-serif text-4xl md:text-6xl font-light leading-tight text-warm-white">
              Biens en<br />
              <span className="italic text-gold-gradient">Vedette</span>
            </h2>
          </div>
          <div className="reveal-hidden opacity-100">
            <Link
              href="/properties"
              className="btn-gold-outline px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase inline-flex items-center gap-3">
              
              Voir tous nos biens
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/*
           BENTO GRID AUDIT (3-col grid):
           Row 1: [Penthouse col-span-1] + [Villa Cristal col-span-2] = 3/3 ✓
           Row 2: [Villa Azur col-span-2] + [Résidence Lumière col-span-1] = 3/3 ✓
          */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1: col-span-1 */}
          <div className="reveal-hidden opacity-100 md:col-span-1">
            <PropertyCard property={properties[0]} tall={false} />
          </div>

          {/* Card 2: col-span-2 */}
          <div className="reveal-hidden opacity-100 md:col-span-2">
            <PropertyCard property={properties[1]} tall={true} />
          </div>

          {/* Card 3: col-span-2 */}
          <div className="reveal-hidden opacity-100 md:col-span-2">
            <PropertyCard property={properties[2]} tall={true} />
          </div>

          {/* Card 4: col-span-1 */}
          <div className="reveal-hidden opacity-100 md:col-span-1">
            <PropertyCard property={properties[3]} tall={false} />
          </div>
        </div>
      </div>
    </section>);

}

function PropertyCard({ property, tall }: {property: typeof properties[0];tall: boolean;}) {
  return (
    <Link href="/property-detail" className="block">
      <article
        className={`property-card group relative rounded-3xl overflow-hidden border border-gold-subtle cursor-pointer ${
        tall ? 'h-[480px] md:h-[560px]' : 'h-[480px] md:h-[560px]'}`
        }>
        
        {/* Image */}
        <div className="absolute inset-0">
          <AppImage
            src={property.image}
            alt={property.alt}
            fill
            className="object-cover grayscale-hover"
            sizes="(max-width: 768px) 100vw, 50vw" />
          
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent z-10" />

        {/* Tag */}
        <div className="absolute top-6 left-6 z-20">
          <span className="glass-dark px-4 py-1.5 rounded-full text-xs uppercase tracking-widest text-gold font-semibold">
            {property.tag}
          </span>
        </div>

        {/* Type badge */}
        <div className="absolute top-6 right-6 z-20">
          <span className="glass-dark px-3 py-1.5 rounded-full text-xs uppercase tracking-widest text-warm-white/70 font-medium">
            {property.type}
          </span>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-8">
          <div className="gold-divider mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <p className="text-xs uppercase tracking-widest text-gold/80 font-medium mb-2">{property.location}</p>
          <h3 className="font-serif text-2xl md:text-3xl font-light text-warm-white mb-3">{property.name}</h3>
          <div className="flex items-center gap-4 text-xs text-warm-white/50 mb-4">
            <span>{property.surface}</span>
            <span>·</span>
            <span>{property.rooms}</span>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gold font-bold text-xl">{property.price}</p>
            <div className="w-10 h-10 rounded-full glass-gold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gold">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </article>
    </Link>);

}