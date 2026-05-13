'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const testimonials = [
{
  id: 1,
  quote: "ARKÉ PRIME a su trouver en moins de trois semaines la villa que je cherchais depuis deux ans à Monaco. Un niveau de service qui n\'a pas d\'équivalent.",
  name: 'Alexandre de Montfort',
  title: 'PDG, Groupe de Montfort Capital',
  location: 'Monaco',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d030e618-1763292752498.png",
  alt: 'Portrait professionnel homme d\'affaires européen en costume sombre, fond neutre, expression confiante et sérieuse',
  span: 'col-span-1',
  type: 'portrait'
},
{
  id: 2,
  quote: "Une expertise rare, une discrétion exemplaire. L'équipe d'ARKÉ PRIME a géré l'acquisition de notre penthouse parisien avec une efficacité remarquable.",
  name: 'Sophia Blanchard-Laurent',
  title: 'Directrice Artistique',
  location: 'Paris',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1671565f5-1763295143368.png",
  alt: 'Portrait femme d\'affaires élégante française aux cheveux bruns, tenue professionnelle, sourire discret, arrière-plan flou',
  span: 'col-span-2',
  type: 'landscape'
},
{
  id: 3,
  stat: '98%',
  statLabel: 'Clients Satisfaits',
  bg: 'dark',
  span: 'col-span-1',
  type: 'stat'
},
{
  id: 4,
  quote: "J'ai confié la vente de ma villa à Dubai à ARKÉ PRIME. Le bien a été vendu en 12 jours, au-dessus du prix demandé. Exceptionnel.",
  name: 'Khalid Al-Rashid',
  title: 'Investisseur Immobilier',
  location: 'Dubai',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_101f10bcb-1763296392759.png",
  alt: 'Portrait homme d\'affaires du Moyen-Orient, costume élégant, expression déterminée, fond urbain moderne de Dubai',
  span: 'col-span-2',
  type: 'landscape'
},
{
  id: 5,
  stat: '12j',
  statLabel: 'Délai Moyen de Vente',
  bg: 'gold',
  span: 'col-span-1',
  type: 'stat'
}];


export default function TestimonialsSection() {
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
                el.classList.add('animate-scale-in');
              }, i * 100);
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
    <section ref={sectionRef} id="testimonials" className="py-24 px-6 md:px-12 relative z-10">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal-hidden opacity-100">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold block mb-4">
            Témoignages
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-warm-white">
            Ce que disent nos<br />
            <span className="italic text-gold-gradient">clients</span>
          </h2>
        </div>

        {/*
           TESTIMONIALS MOSAIC GRID AUDIT (3-col):
           Row 1: [portrait col-1] + [landscape col-2] = 3/3 ✓
           Row 2: [stat col-1] + [landscape col-2] = 3/3 ✓
           (last stat col-1 placed in row 3 as col-span-full or paired)
           
           Actual layout: 5 items across rows
           Row 1: card1(col-1) + card2(col-2) = 3 ✓
           Row 2: card3(col-1) + card4(col-2) = 3 ✓
           Row 3: card5(col-span-full) = 3 ✓
          */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1: Portrait testimonial */}
          <div className="reveal-hidden opacity-100 md:col-span-1">
            <div className="rounded-3xl overflow-hidden relative h-[420px] border border-gold-subtle group">
              <AppImage
                src={testimonials[0].image!}
                alt={testimonials[0].alt!}
                fill
                className="object-cover grayscale-hover"
                sizes="(max-width: 768px) 100vw, 33vw" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/20 to-transparent" />
              <div className="absolute bottom-0 p-8 text-warm-white">
                <svg className="w-8 h-8 text-gold mb-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-sm leading-relaxed text-warm-white/90 mb-4 font-light italic">
                  &ldquo;{testimonials[0].quote}&rdquo;
                </p>
                <p className="font-semibold text-warm-white text-sm">{testimonials[0].name}</p>
                <p className="text-xs text-gold/80 mt-0.5">{testimonials[0].title} · {testimonials[0].location}</p>
              </div>
            </div>
          </div>

          {/* Card 2: Landscape testimonial */}
          <div className="reveal-hidden opacity-100 md:col-span-2">
            <div className="rounded-3xl overflow-hidden relative h-[420px] border border-gold-subtle group">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1977343eb-1769682547216.png"
                alt="Salon de penthouse parisien avec vue panoramique sur Paris, décoration intérieure luxueuse, lumière dorée du soir, ambiance raffineé"
                fill
                className="object-cover grayscale-hover"
                sizes="(max-width: 768px) 100vw, 66vw" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/30 to-transparent" />
              <div className="absolute top-8 left-8">
                <span className="glass-dark px-4 py-1.5 rounded-full text-xs uppercase tracking-widest text-gold font-semibold">
                  Paris, France
                </span>
              </div>
              <div className="absolute bottom-0 p-8 md:p-10 text-warm-white">
                <svg className="w-8 h-8 text-gold mb-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-lg md:text-xl font-light italic leading-relaxed text-warm-white mb-5 max-w-xl">
                  &ldquo;{testimonials[1].quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <AppImage
                    src={testimonials[1].image!}
                    alt={testimonials[1].alt!}
                    width={44}
                    height={44}
                    className="rounded-full border-2 border-gold/40 object-cover" />
                  
                  <div>
                    <p className="font-semibold text-warm-white text-sm">{testimonials[1].name}</p>
                    <p className="text-xs text-gold/80">{testimonials[1].title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Stat */}
          <div className="reveal-hidden opacity-100 md:col-span-1">
            <div className="rounded-3xl h-[360px] border border-gold-subtle flex flex-col items-center justify-center text-center p-8" style={{ background: 'rgba(10,10,10,0.8)' }}>
              <p className="font-serif text-7xl font-light text-gold mb-3">98%</p>
              <p className="text-xs uppercase tracking-widest text-warm-white/50 font-semibold">Clients Satisfaits</p>
              <div className="gold-divider w-16 mx-auto my-6" />
              <p className="text-warm-white/40 text-xs font-light leading-relaxed">
                Basé sur 340+ transactions réalisées entre 2010 et 2026
              </p>
            </div>
          </div>

          {/* Card 4: Landscape testimonial */}
          <div className="reveal-hidden opacity-100 md:col-span-2">
            <div className="rounded-3xl overflow-hidden relative h-[360px] border border-gold-subtle group">
              <AppImage
                src="https://images.unsplash.com/photo-1708361089093-beef4c4584e7"
                alt="Skyline de Dubai au crépuscule avec gratte-ciels illuminés, ambiance dorée et bleutée, atmosphère luxueuse et internationale"
                fill
                className="object-cover grayscale-hover"
                sizes="(max-width: 768px) 100vw, 66vw" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/40 to-transparent" />
              <div className="absolute top-8 left-8">
                <span className="glass-dark px-4 py-1.5 rounded-full text-xs uppercase tracking-widest text-gold font-semibold">
                  Dubai, UAE
                </span>
              </div>
              <div className="absolute bottom-0 p-8 md:p-10 text-warm-white">
                <p className="text-lg font-light italic leading-relaxed text-warm-white mb-4 max-w-xl">
                  &ldquo;{testimonials[3].quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <AppImage
                    src={testimonials[3].image!}
                    alt={testimonials[3].alt!}
                    width={44}
                    height={44}
                    className="rounded-full border-2 border-gold/40 object-cover" />
                  
                  <div>
                    <p className="font-semibold text-warm-white text-sm">{testimonials[3].name}</p>
                    <p className="text-xs text-gold/80">{testimonials[3].title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Stat — col-span-full on last row */}
          <div className="reveal-hidden opacity-100 md:col-span-full">
            <div className="rounded-3xl border border-gold-subtle p-10 flex flex-col md:flex-row items-center justify-between gap-8" style={{ background: 'rgba(201,168,76,0.06)' }}>
              <div className="text-center md:text-left">
                <p className="font-serif text-6xl font-light text-gold">12 jours</p>
                <p className="text-xs uppercase tracking-widest text-warm-white/50 mt-2 font-semibold">Délai Moyen de Vente</p>
              </div>
              <div className="hidden md:block w-px h-16 bg-gold-subtle" />
              <p className="text-warm-white/60 text-base font-light leading-relaxed max-w-xl text-center md:text-left">
                Notre réseau d&apos;acheteurs qualifiés et notre expertise du marché nous permettent de conclure les transactions avec une rapidité et une efficacité inégalées.
              </p>
              <div className="hidden md:block w-px h-16 bg-gold-subtle" />
              <div className="shrink-0">
                <a
                  href="/properties"
                  className="btn-gold px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase inline-flex items-center gap-3 whitespace-nowrap">
                  
                  Voir nos biens
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}