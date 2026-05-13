'use client';

import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Achat',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 relative z-10">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left: Info */}
          <div className="flex flex-col justify-between gap-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-gold font-semibold block mb-4">
                Nous Contacter
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight text-warm-white mb-6">
                Parlons de votre<br />
                <span className="italic text-gold-gradient">projet</span>
              </h2>
              <p className="text-warm-white/50 text-base font-light leading-relaxed max-w-md">
                Notre équipe d&apos;experts est disponible 7j/7 pour répondre à vos questions et vous accompagner dans votre recherche.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.61 5a2 2 0 0 1 1.99-2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.4a16 16 0 0 0 6 6l.93-.93a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  ),
                  label: 'Téléphone',
                  value: '+213 558 24 26 20',
                  href: 'tel:+213 558 24 26 20',
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                  label: 'Email',
                  value: 'primearke@gmail.com',
                  href: 'mailto:primearke@gmail.com',
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  ),
                  label: 'WhatsApp',
                  value: '+213 558 24 26 20',
                  href: 'https://wa.me/33600000000',
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold-subtle flex items-center justify-center text-gold group-hover:bg-gold/20 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-warm-white/30 font-medium">{item.label}</p>
                    <p className="text-warm-white/80 text-sm font-medium group-hover:text-gold transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-gold-subtle h-48 relative bg-obsidian-3">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold-subtle flex items-center justify-center text-gold mx-auto mb-3">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <p className="text-xs uppercase tracking-widest text-warm-white/30 font-medium">Paris · Dubai · Monaco</p>
                </div>
              </div>
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(201,168,76,0.4) 1px, transparent 0)',
                backgroundSize: '32px 32px',
              }} />
            </div>
          </div>

          {/* Right: Form */}
          <div className="glass-dark rounded-3xl p-8 md:p-10 border border-gold-subtle">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 rounded-full bg-gold/20 border border-gold flex items-center justify-center text-gold mb-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-light text-warm-white mb-3">Message Envoyé</h3>
                <p className="text-warm-white/50 text-sm font-light">Notre équipe vous contactera dans les 24 heures.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <h3 className="font-serif text-2xl font-light text-warm-white mb-1">Votre Demande</h3>
                  <p className="text-warm-white/40 text-xs font-light">Tous les champs sont requis</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-widest text-warm-white/40 font-medium block mb-2">Nom complet</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="luxury-input w-full px-4 py-3 rounded-xl text-sm"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-widest text-warm-white/40 font-medium block mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="luxury-input w-full px-4 py-3 rounded-xl text-sm"
                      placeholder="jean@exemple.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-widest text-warm-white/40 font-medium block mb-2">Téléphone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="luxury-input w-full px-4 py-3 rounded-xl text-sm"
                      placeholder="+213 558 24 26 20"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-widest text-warm-white/40 font-medium block mb-2">Intérêt</label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="luxury-input w-full px-4 py-3 rounded-xl text-sm appearance-none cursor-pointer"
                    >
                      <option value="Achat">Achat</option>
                      <option value="Vente">Vente</option>
                      <option value="Investissement">Investissement</option>
                      <option value="Gestion">Gestion</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest text-warm-white/40 font-medium block mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="luxury-input w-full px-4 py-3 rounded-xl text-sm resize-none"
                    placeholder="Décrivez votre projet immobilier..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold w-full py-4 rounded-xl text-sm font-bold tracking-widest uppercase"
                >
                  Envoyer ma demande
                </button>

                <p className="text-xs text-warm-white/25 text-center font-light">
                  En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
