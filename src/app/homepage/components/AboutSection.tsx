'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const values = [
{
  icon:
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>,

  title: 'Discrétion Absolue',
  desc: 'Chaque transaction est traitée avec la plus stricte confidentialité.'
},
{
  icon:
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>,

  title: 'Réactivité',
  desc: 'Un service disponible 7j/7 pour répondre à vos exigences les plus urgentes.'
},
{
  icon:
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>,

  title: 'Excellence',
  desc: 'Nous ne sélectionnons que les propriétés répondant aux standards les plus élevés.'
}];


export default function AboutSection() {
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
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-24 px-6 md:px-12 relative z-10">
      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Left: Image with overlay card */}
        <div className="reveal-hidden opacity-100 relative">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
            <AppImage
              src="https://img.rocket.new/generatedImages/rocket_gen_img_15f50899f-1772393412535.png"
              alt="Intérieur d'une villa de luxe minimaliste, salon épuré avec baies vitrées, lumière naturelle dorée, mobilier contemporain haut de gamme"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
          </div>

          {/* Floating card */}
          <div className="absolute -bottom-8 -right-4 md:-right-8 glass-dark rounded-2xl p-6 max-w-xs border border-gold-subtle">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <span className="text-xs uppercase tracking-widest text-gold font-semibold">Notre Mission</span>
            </div>
            <p className="text-sm text-warm-white/80 leading-relaxed font-light">
              Connecter les acheteurs les plus exigeants aux propriétés les plus exceptionnelles du monde.
            </p>
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex flex-col gap-8">
          <div className="reveal-hidden opacity-100">
            <span className="text-xs uppercase tracking-widest text-gold font-semibold block mb-4">
              À Propos d&apos;ARKÉ PRIME
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight text-warm-white">
              L&apos;excellence au cœur<br />
              de chaque<br />
              <span className="italic text-gold-gradient">transaction</span>
            </h2>
          </div>

          <div className="reveal-hidden opacity-100">
            <p className="text-warm-white/60 leading-relaxed text-base font-light">
              Fondée sur les principes d&apos;excellence et de discrétion, ARKÉ PRIME s&apos;est imposée comme la référence de l&apos;immobilier de prestige sur trois des marchés les plus convoités au monde : Dubai, Paris et Monaco.
            </p>
            <p className="text-warm-white/60 leading-relaxed text-base font-light mt-4">
              Notre réseau exclusif d&apos;acheteurs qualifiés et notre connaissance approfondie des marchés locaux nous permettent d&apos;offrir un service sur mesure, adapté aux exigences les plus élevées.
            </p>
          </div>

          {/* Values */}
          <div className="reveal-hidden opacity-100 flex flex-col gap-5 mt-4">
            {values?.map((v) =>
            <div key={v?.title} className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold-subtle flex items-center justify-center text-gold shrink-0 group-hover:bg-gold/20 transition-colors">
                  {v?.icon}
                </div>
                <div>
                  <p className="text-warm-white font-semibold text-sm mb-1">{v?.title}</p>
                  <p className="text-warm-white/50 text-sm font-light leading-relaxed">{v?.desc}</p>
                </div>
              </div>
            )}
          </div>

          <div className="reveal-hidden opacity-100">
            <div className="gold-divider mb-6" />
            <p className="font-serif text-xl italic text-gold/80 font-light">
              &ldquo;Là où le prestige rencontre l&apos;immobilier&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>);

}