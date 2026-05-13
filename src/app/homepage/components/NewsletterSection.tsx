'use client';

import React, { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 px-6 md:px-12 relative z-10">
      <div className="max-w-screen-xl mx-auto">
        <div
          className="rounded-3xl p-12 md:p-16 border border-gold-subtle relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(10,10,10,0.95) 100%)' }}
        >
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-gold/5 blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-center md:text-left max-w-lg">
              <span className="text-xs uppercase tracking-widest text-gold font-semibold block mb-3">Newsletter Exclusive</span>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-warm-white leading-snug">
                Recevez nos offres<br />
                <span className="italic text-gold-gradient">en avant-première</span>
              </h2>
              <p className="text-warm-white/40 text-sm font-light mt-3">
                Biens exclusifs, tendances du marché, conseils d&apos;investissement — réservés à nos abonnés.
              </p>
            </div>

            <div className="w-full md:w-auto md:min-w-[380px]">
              {subscribed ? (
                <div className="text-center py-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 border border-gold flex items-center justify-center text-gold mx-auto mb-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-warm-white font-semibold text-sm">Abonnement confirmé</p>
                  <p className="text-warm-white/40 text-xs mt-1">Bienvenue dans le cercle ARKÉ PRIME</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="luxury-input flex-1 px-5 py-4 rounded-full text-sm"
                    placeholder="votre@email.com"
                  />
                  <button
                    type="submit"
                    className="btn-gold px-6 py-4 rounded-full text-xs font-bold tracking-widest uppercase whitespace-nowrap"
                  >
                    S&apos;abonner
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}