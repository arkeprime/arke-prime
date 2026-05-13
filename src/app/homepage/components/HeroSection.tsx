'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef?.current) return;
      const scrollY = window.scrollY;
      parallaxRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-end overflow-hidden" aria-label="Section héro">
      {/* Background image with parallax */}
      <div ref={parallaxRef} className="absolute inset-0 scale-110 will-change-transform">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_1eb26f09a-1769253014765.png"
          alt="Villa de luxe avec piscine à débordement, architecture contemporaine, ciel crépusculaire doré, atmosphère sombre et opulente"
          fill
          priority
          className="object-cover"
          sizes="100vw" />
        
      </div>

      {/* Multi-layer gradient scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/55 to-obsidian/20 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/60 via-transparent to-transparent z-10" />

      {/* Noise texture */}
      <div
        className="absolute inset-0 z-10 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
        }} />
      

      {/* Rotating badge */}
      <div className="absolute top-28 right-8 md:right-16 z-30 hidden md:block" aria-hidden="true">
        <div className="relative w-28 h-28 flex items-center justify-center">
          <svg className="rotate-badge w-full h-full" viewBox="0 0 100 100">
            <defs>
              <path id="badgePath" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
            </defs>
            <text fontSize="9" fontFamily="DM Sans" fontWeight="600" letterSpacing="3px" fill="#C9A84C">
              <textPath href="#badgePath" startOffset="0%">
                EXCLUSIF · PRESTIGE · LUXE ·
              </textPath>
            </text>
          </svg>
          <div className="absolute w-5 h-5 text-gold">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-screen-xl mx-auto px-6 md:px-12 pb-20 pt-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">

        {/* Left: Main headline */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <div
            className={`transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '0.2s' }}>
            
            <span className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-gold-subtle text-xs uppercase tracking-widest text-gold font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              Agence Immobilière de Prestige
            </span>
          </div>

          <div
            className={`transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '0.4s' }}>
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[0.9] tracking-tight text-warm-white">
              ARKÉ
              <br />
              <span className="italic text-gold-gradient">PRIME</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-warm-white/70 font-light tracking-wide max-w-lg leading-relaxed">
              L&apos;immobilier de prestige — des biens d&apos;exception pour une clientèle d&apos;élite
            </p>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '0.6s' }}>
            
            <Link
              href="/properties"
              className="btn-gold px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase inline-flex items-center justify-center gap-3">
              
              Découvrir nos biens
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/homepage#contact"
              className="btn-gold-outline px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase inline-flex items-center justify-center">
              
              Planifier une consultation
            </Link>
          </div>
        </div>

        {/* Right: Floating glass info cards */}
        <div
          className={`lg:col-span-5 hidden lg:flex flex-col gap-4 transition-all duration-1000 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          style={{ transitionDelay: '0.7s' }}>
          
          {/* Property card */}
          <div className="glass-dark rounded-3xl p-6 animate-float">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-widest text-gold font-semibold">Bien en Vedette</span>
              <span className="text-xs text-warm-white/40 font-medium">Dubai Marina</span>
            </div>
            <div className="aspect-[16/9] rounded-xl overflow-hidden mb-4">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1d278d195-1765478047765.png"
                alt="Villa contemporaine avec piscine à débordement, vue panoramique sur Dubai Marina au coucher du soleil"
                width={400}
                height={225}
                className="w-full h-full object-cover" />
              
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="font-serif text-xl font-light text-warm-white">Villa Azur</p>
                <p className="text-xs text-warm-white/50 mt-0.5">6 chambres · 850 m²</p>
              </div>
              <div className="text-right">
                <p className="text-gold font-bold text-lg">12.5M AED</p>
                <p className="text-xs text-warm-white/40">≈ 3.4M €</p>
              </div>
            </div>
          </div>

          {/* Stats mini card */}
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-gold rounded-2xl p-4 text-center">
              <p className="font-serif text-3xl font-light text-gold">340+</p>
              <p className="text-xs uppercase tracking-widest text-warm-white/50 mt-1">Biens Vendus</p>
            </div>
            <div className="glass-gold rounded-2xl p-4 text-center">
              <p className="font-serif text-3xl font-light text-gold">15</p>
              <p className="text-xs uppercase tracking-widest text-warm-white/50 mt-1">Années d&apos;Expertise</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2" aria-hidden="true">
        <span className="text-xs uppercase tracking-widest text-warm-white/30 font-medium">Défiler</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent" />
      </div>
    </section>);

}