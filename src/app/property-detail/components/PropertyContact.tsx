'use client';

import React, { useState } from 'react';

export default function PropertyContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: 'Je souhaite planifier une visite pour la Villa Cristal (Réf. ARK-DXB-2024-007).',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="visit-form" className="py-16 px-6 md:px-12 relative z-10">
      <div className="max-w-screen-xl mx-auto">
        <div className="gold-divider mb-12" />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <span className="text-xs uppercase tracking-widest text-gold font-semibold block mb-4">
              Planifier une Visite
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-warm-white mb-6">
              Vivre l&apos;expérience<br />
              <span className="italic text-gold-gradient">Villa Cristal</span>
            </h2>
            <p className="text-warm-white/50 text-sm leading-relaxed font-light max-w-md mb-10">
              Notre conseiller Julien Marchand vous accueille sur place pour une visite privée et personnalisée. Visites disponibles 7j/7, sur rendez-vous.
            </p>

            {/* Map placeholder */}
            <div className="rounded-3xl overflow-hidden border border-gold-subtle h-64 relative bg-obsidian-3">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold/20 border border-gold-subtle flex items-center justify-center text-gold">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-warm-white/60 text-sm font-medium">Dubai Hills Estate</p>
                  <p className="text-warm-white/30 text-xs mt-0.5">Dubai, UAE</p>
                </div>
              </div>
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(201,168,76,0.6) 1px, transparent 0)',
                  backgroundSize: '24px 24px',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />
            </div>
          </div>

          {/* Right: Form */}
          <div className="glass-dark rounded-3xl p-8 md:p-10 border border-gold-subtle">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-gold/20 border border-gold flex items-center justify-center text-gold mb-5">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-light text-warm-white mb-2">Demande Reçue</h3>
                <p className="text-warm-white/50 text-sm font-light">
                  Julien vous contactera dans les 2 heures pour confirmer votre visite.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <h3 className="font-serif text-xl font-light text-warm-white mb-1">Votre demande de visite</h3>
                  <p className="text-warm-white/30 text-xs font-light">Villa Cristal · Réf. ARK-DXB-2024-007</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-widest text-warm-white/30 font-medium block mb-2">Nom</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="luxury-input w-full px-4 py-3 rounded-xl text-sm"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-widest text-warm-white/30 font-medium block mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="luxury-input w-full px-4 py-3 rounded-xl text-sm"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-widest text-warm-white/30 font-medium block mb-2">Téléphone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="luxury-input w-full px-4 py-3 rounded-xl text-sm"
                      placeholder="+971 50 000 00 00"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-widest text-warm-white/30 font-medium block mb-2">Date souhaitée</label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="luxury-input w-full px-4 py-3 rounded-xl text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest text-warm-white/30 font-medium block mb-2">Message</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="luxury-input w-full px-4 py-3 rounded-xl text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold w-full py-4 rounded-xl text-sm font-bold tracking-widest uppercase"
                >
                  Confirmer ma demande
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}