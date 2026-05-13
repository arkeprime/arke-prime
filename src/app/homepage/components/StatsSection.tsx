'use client';

import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 340, suffix: '+', label: 'Biens Vendus', sublabel: 'Transactions réussies' },
  { value: 2.8, suffix: 'Md €', label: 'Volume Total', sublabel: 'Valeur des transactions' },
  { value: 15, suffix: '', label: 'Années', sublabel: "D\'expertise immobilière" },
  { value: 3, suffix: '', label: 'Marchés', sublabel: 'Dubai · Paris · Monaco' },
];

function useCountUp(target: number, started: boolean, decimals = 0) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const duration = 2000;
    const step = (target / duration) * 16;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(parseFloat(start.toFixed(decimals)));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, started, decimals]);
  return count;
}

function StatItem({ stat, started, index }: { stat: typeof stats[0]; started: boolean; index: number }) {
  const decimals = stat.value % 1 !== 0 ? 1 : 0;
  const count = useCountUp(stat.value, started, decimals);

  return (
    <div
      className="text-center border-r border-gold-subtle last:border-r-0 px-8 py-8"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <p className="font-serif text-5xl md:text-6xl font-light text-gold mb-2">
        {decimals > 0 ? count.toFixed(1) : Math.floor(count)}{stat.suffix}
      </p>
      <p className="text-warm-white font-semibold text-sm uppercase tracking-widest mb-1">{stat.label}</p>
      <p className="text-warm-white/40 text-xs">{stat.sublabel}</p>
    </div>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-8 px-6 md:px-12 relative z-10">
      <div className="max-w-screen-xl mx-auto">
        <div className="border border-gold-subtle rounded-3xl overflow-hidden" style={{ background: 'rgba(201, 168, 76, 0.04)' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 divide-gold-subtle">
            {stats.map((stat, i) => (
              <StatItem key={stat.label} stat={stat} started={started} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}