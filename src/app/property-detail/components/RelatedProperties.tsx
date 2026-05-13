import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const related = [
{
  id: 1,
  name: 'Villa Azur',
  location: 'Monaco, Principauté',
  price: '22 500 000 €',
  surface: '680 m²',
  rooms: 5,
  type: 'Villa',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_154a75c9b-1772186012666.png",
  alt: 'Villa de prestige à Monaco, terrasses avec vue panoramique sur la Méditerranée, architecture contemporaine ensoleillée'
},
{
  id: 2,
  name: 'Domaine des Cèdres',
  location: 'Mougins, France',
  price: '6 800 000 €',
  surface: '950 m²',
  rooms: 8,
  type: 'Villa',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c9fd0dc3-1772622671317.png",
  alt: 'Domaine provençal de luxe avec parc arboré et piscine, architecture traditionnelle rénovée, lumière du soir dorée'
},
{
  id: 3,
  name: 'Villa Bellissima',
  location: 'Cap d\'Antibes, France',
  price: '14 500 000 €',
  surface: '780 m²',
  rooms: 6,
  type: 'Villa',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_199dd8d5f-1772622672096.png",
  alt: 'Villa méditerranéenne Cap d\'Antibes avec vue mer et jardin luxuriant, piscine face à la Méditerranée'
}];


export default function RelatedProperties() {
  return (
    <section className="py-16 px-6 md:px-12 relative z-10">
      <div className="max-w-screen-xl mx-auto">
        <div className="gold-divider mb-12" />

        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs uppercase tracking-widest text-gold font-semibold block mb-3">
              Biens Similaires
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-warm-white">
              Vous pourriez aussi<br />
              <span className="italic text-gold-gradient">apprécier</span>
            </h2>
          </div>
          <Link
            href="/properties"
            className="btn-gold-outline px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase hidden md:inline-flex items-center gap-2">
            
            Tous nos biens
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related?.map((property) =>
          <Link key={property?.id} href="/property-detail">
              <article className="property-card group rounded-3xl overflow-hidden border border-gold-subtle cursor-pointer bg-obsidian-3">
                <div className="relative h-56 overflow-hidden">
                  <AppImage
                  src={property?.image}
                  alt={property?.alt}
                  fill
                  className="object-cover grayscale-hover"
                  sizes="(max-width: 768px) 100vw, 33vw" />
                
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="glass-dark px-3 py-1 rounded-full text-xs uppercase tracking-widest text-warm-white/60 font-medium">
                      {property?.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-widest text-gold/70 font-medium mb-1">{property?.location}</p>
                  <h3 className="font-serif text-xl font-light text-warm-white mb-3">{property?.name}</h3>
                  <div className="flex items-center gap-3 text-xs text-warm-white/40 mb-4">
                    <span>{property?.surface}</span>
                    <span>·</span>
                    <span>{property?.rooms} ch.</span>
                  </div>
                  <div className="gold-divider mb-4" />
                  <div className="flex items-center justify-between">
                    <p className="text-gold font-bold">{property?.price}</p>
                    <div className="w-8 h-8 rounded-full glass-gold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gold">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          )}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/properties"
            className="btn-gold-outline px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase inline-flex items-center gap-2">
            
            Tous nos biens
          </Link>
        </div>
      </div>
    </section>);

}