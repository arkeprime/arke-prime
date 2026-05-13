'use client';

import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';

const images = [
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_16666e6d7-1765120730319.png",
  alt: 'Vue extérieure de la Villa Cristal avec piscine à débordement illuminée au crépuscule, architecture contemporaine blanche, lumières dorées'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1fede7eb4-1767531331863.png",
  alt: 'Grand salon de la Villa Cristal, plafonds doubles hauteur, mobilier contemporain de luxe, baies vitrées panoramiques sur jardin'
},
{
  src: "https://images.unsplash.com/photo-1683629357846-30eacff8f615",
  alt: 'Cuisine ouverte ultra-moderne avec îlot central en marbre blanc, équipements Miele, éclairage ambiant doré'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1de657441-1772950410718.png",
  alt: 'Suite principale avec lit king-size, vue panoramique sur le jardin, dressing intégré, finitions marbre et bois noble'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_19f4772cc-1772206894195.png",
  alt: 'Salle de bain principale en marbre de Carrare, baignoire îlot, douche à l\'italienne, robinetterie dorée'
}];


export default function PropertyGallery() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + images?.length) % images?.length);
  const next = () => setCurrent((c) => (c + 1) % images?.length);

  return (
    <section className="relative w-full pt-20" aria-label="Galerie de photos">
      {/* Main image */}
      <div className="relative w-full h-[70vh] min-h-[480px] overflow-hidden">
        <div
          className="flex gallery-slide h-full"
          style={{ transform: `translateX(-${current * 100}%)` }}>
          
          {images?.map((img, i) =>
          <div key={i} className="min-w-full h-full relative shrink-0">
              <AppImage
              src={img?.src}
              alt={img?.alt}
              fill
              priority={i === 0}
              className="object-cover"
              sizes="100vw" />
            
            </div>
          )}
        </div>

        {/* Gradient overlay bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-obsidian to-transparent z-10" />

        {/* Navigation */}
        <button
          onClick={prev}
          aria-label="Image précédente"
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 glass-dark rounded-full flex items-center justify-center text-warm-white hover:text-gold transition-colors border border-gold-subtle">
          
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={next}
          aria-label="Image suivante"
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 glass-dark rounded-full flex items-center justify-center text-warm-white hover:text-gold transition-colors border border-gold-subtle">
          
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>

        {/* Counter */}
        <div className="absolute bottom-8 right-6 z-20 glass-dark px-4 py-2 rounded-full text-xs font-semibold text-warm-white/70 border border-gold-subtle">
          {current + 1} / {images?.length}
        </div>
      </div>
      {/* Thumbnails */}
      <div className="flex gap-3 px-6 md:px-12 mt-4 overflow-x-auto no-scrollbar pb-2">
        {images?.map((img, i) =>
        <button
          key={i}
          onClick={() => setCurrent(i)}
          aria-label={`Voir image ${i + 1}`}
          className={`shrink-0 w-20 h-14 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
          current === i ? 'border-gold opacity-100' : 'border-transparent opacity-40 hover:opacity-70'}`
          }>
          
            <AppImage
            src={img?.src}
            alt={`Miniature ${i + 1}`}
            width={80} height={56}
            className="w-full h-full object-cover" />
          
          </button>
        )}
      </div>
    </section>);

}