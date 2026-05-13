import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function PropertiesHero() {
  return (
    <section className="relative w-full h-[50vh] min-h-[380px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_16ce7a200-1767784382540.png"
          alt="Vue aérienne de villas de luxe avec piscines, quartier résidentiel haut de gamme, lumière dorée de l'après-midi, ciel bleu profond"
          fill
          priority
          className="object-cover"
          sizes="100vw" />
        
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-obsidian/30 z-10" />

      <div className="relative z-20 w-full max-w-screen-xl mx-auto px-6 md:px-12 pb-16 pt-32">
        <span className="text-xs uppercase tracking-widest text-gold font-semibold block mb-4">
          Notre Portefeuille
        </span>
        <h1 className="font-serif text-5xl md:text-7xl font-light leading-tight text-warm-white">
          Nos <span className="italic text-gold-gradient">Biens</span>
        </h1>
        <p className="text-warm-white/50 text-base font-light mt-3 max-w-lg">
          Une sélection exclusive de propriétés d&apos;exception à Dubai, Paris et Monaco.
        </p>
      </div>
    </section>);

}