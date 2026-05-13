'use client';

import React, { useEffect, useRef } from 'react';

const services = [
  {
    number: '01',
    title: 'Vente de Biens d\'Exception',
    desc: 'Notre réseau exclusif d\'acheteurs qualifiés garantit une mise en relation rapide et confidentielle. De la première visite à la signature, nous gérons chaque étape avec précision.',
    features: ['Évaluation précise du marché', 'Mise en relation exclusive', 'Négociation experte', 'Accompagnement juridique'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Conseil en Investissement',
    desc: 'Nos experts analysent les tendances des marchés de Dubai, Paris et Monaco pour identifier les opportunités d\'investissement à fort potentiel de valorisation.',
    features: ['Analyse des marchés locaux', 'Rendement locatif optimisé', 'Stratégie fiscale', 'Portfolio immobilier'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Gestion de Biens de Luxe',
    desc: 'Confiez-nous la gestion complète de votre patrimoine immobilier. Maintenance, location saisonnière, suivi des travaux — nous prenons tout en charge.',
    features: ['Gestion locative premium', 'Maintenance préventive', 'Location saisonnière', 'Reporting mensuel'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
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
    <section ref={sectionRef} id="services" className="py-24 px-6 md:px-12 relative z-10">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div className="reveal-hidden opacity-100">
            <span className="text-xs uppercase tracking-widest text-gold font-semibold block mb-4">
              Nos Services
            </span>
            <h2 className="font-serif text-4xl md:text-6xl font-light leading-tight text-warm-white">
              Un accompagnement<br />
              <span className="italic text-gold-gradient">sur mesure</span>
            </h2>
          </div>
          <div className="reveal-hidden opacity-100 max-w-sm">
            <p className="text-warm-white/50 text-sm leading-relaxed font-light">
              De l&apos;acquisition à la gestion, ARKÉ PRIME vous offre un service intégral adapté à vos objectifs patrimoniaux.
            </p>
          </div>
        </div>

        <div className="gold-divider mb-16 reveal-hidden opacity-100" />

        {/* Services list */}
        <div className="flex flex-col gap-0">
          {services?.map((service, i) => (
            <div
              key={service?.number}
              className="reveal-hidden opacity-100 group border-b border-gold-subtle last:border-b-0"
            >
              <div className="py-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start hover:bg-gold/[0.03] transition-colors duration-300 -mx-4 px-4 rounded-2xl">
                {/* Number */}
                <div className="md:col-span-1">
                  <span className="font-serif text-4xl font-light text-gold/30 group-hover:text-gold/60 transition-colors duration-300">
                    {service?.number}
                  </span>
                </div>

                {/* Icon + Title */}
                <div className="md:col-span-3 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold-subtle flex items-center justify-center text-gold shrink-0 group-hover:bg-gold/20 transition-colors">
                    {service?.icon}
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl font-light text-warm-white leading-snug mt-2">
                    {service?.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:col-span-4">
                  <p className="text-warm-white/50 text-sm leading-relaxed font-light">
                    {service?.desc}
                  </p>
                </div>

                {/* Features */}
                <div className="md:col-span-4">
                  <ul className="grid grid-cols-2 gap-2">
                    {service?.features?.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-warm-white/40 font-light">
                        <span className="w-1 h-1 rounded-full bg-gold shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}