import React from 'react';

const property = {
  name: 'Villa Cristal',
  location: 'Dubai Hills Estate, Dubai, UAE',
  price: '18 900 000 AED',
  priceEur: '≈ 4 720 000 €',
  reference: 'ARK-DXB-2024-007',
  surface: '1 200 m²',
  terrain: '2 800 m²',
  rooms: 7,
  bathrooms: 8,
  floors: 3,
  garage: 4,
  yearBuilt: '2023',
  type: 'Villa',
  status: 'Disponible',
  description: `Villa Cristal est une résidence d'exception nichée au cœur de Dubai Hills Estate, l'un des quartiers résidentiels les plus prisés de Dubai. Conçue par le cabinet d'architecture Atelier Lumière, cette villa de 1 200 m² incarne la quintessence du luxe contemporain.

Ses volumes généreux, ses plafonds doubles hauteur et ses baies vitrées panoramiques créent une fluidité parfaite entre intérieur et extérieur. La piscine à débordement de 25 mètres, orientée plein sud, offre une vue imprenable sur le green du golf de Dubai Hills.

Les matériaux les plus nobles ont été sélectionnés avec soin : marbre de Carrare, boiseries en noyer américain, robinetterie Dornbracht dorée. La domotique Crestron permet de contrôler l'ensemble de la résidence depuis votre smartphone.

Une propriété rare, idéale pour une résidence principale ou un investissement patrimonial de premier ordre.`
};

export default function PropertyInfo() {
  return (
    <section className="py-16 px-6 md:px-12 relative z-10">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Left: Main info */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            {/* Header */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="glass-gold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest text-gold font-semibold border border-gold-subtle">
                  {property?.status}
                </span>
                <span className="text-xs uppercase tracking-widest text-warm-white/30 font-medium">
                  Réf. {property?.reference}
                </span>
              </div>
              <h1 className="font-serif text-4xl md:text-6xl font-light text-warm-white mb-2">
                {property?.name}
              </h1>
              <div className="flex items-center gap-2 text-warm-white/50">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <p className="text-sm font-light">{property?.location}</p>
              </div>
            </div>

            {/* Price */}
            <div className="border-y border-gold-subtle py-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-warm-white/30 font-medium mb-1">Prix de vente</p>
                <p className="font-serif text-4xl font-light text-gold">{property?.price}</p>
                <p className="text-warm-white/40 text-sm mt-1">{property?.priceEur}</p>
              </div>
              <div className="flex flex-col gap-2 text-right">
                <p className="text-xs uppercase tracking-widest text-warm-white/30 font-medium">Type</p>
                <p className="text-warm-white font-semibold text-sm">{property?.type}</p>
              </div>
            </div>

            {/* Quick specs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
              { label: 'Surface', value: property?.surface, icon:
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>
              },
              { label: 'Terrain', value: property?.terrain, icon:
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
              },
              { label: 'Chambres', value: `${property?.rooms}`, icon:
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 4v16M22 4v16M2 8h20M2 16h20" /></svg>
              },
              { label: 'Salles de bain', value: `${property?.bathrooms}`, icon:
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" /><line x1="10" x2="8" y1="5" y2="7" /><line x1="2" x2="22" y1="12" y2="12" /></svg>
              }]?.
              map((spec) =>
              <div key={spec?.label} className="glass-dark rounded-2xl p-4 border border-gold-subtle text-center">
                  <div className="flex justify-center mb-2 text-gold">{spec?.icon}</div>
                  <p className="font-semibold text-warm-white text-lg">{spec?.value}</p>
                  <p className="text-xs uppercase tracking-widest text-warm-white/30 mt-1">{spec?.label}</p>
                </div>
              )}
            </div>

            {/* Description */}
            <div>
              <h2 className="font-serif text-2xl font-light text-warm-white mb-5">Description</h2>
              <div className="flex flex-col gap-4">
                {property?.description?.split('\n\n')?.map((para, i) =>
                <p key={i} className="text-warm-white/60 text-sm leading-relaxed font-light">
                    {para}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Right: Sticky agent card */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 flex flex-col gap-6">
              {/* Agent card */}
              <div className="glass-dark rounded-3xl p-8 border border-gold-subtle">
                <p className="text-xs uppercase tracking-widest text-gold font-semibold mb-5">Votre Conseiller</p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gold/30 shrink-0">
                    <img
                      src="https://img.rocket.new/generatedImages/rocket_gen_img_151ef47f0-1763295021929.png"
                      alt="Portrait de Julien Marchand, conseiller immobilier ARKÉ PRIME, costume sombre, expression professionnelle"
                      className="w-full h-full object-cover" />
                    
                  </div>
                  <div>
                    <p className="font-semibold text-warm-white text-sm">Julien Marchand</p>
                    <p className="text-xs text-gold/70 mt-0.5">Senior Advisor · Dubai</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)]?.map((_, i) =>
                      <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="#C9A84C" className="text-gold">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      )}
                      <span className="text-xs text-warm-white/30 ml-1">5.0</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 mb-6">
                  <a
                    href="tel:+97150000000"
                    className="flex items-center gap-3 text-sm text-warm-white/60 hover:text-gold transition-colors">
                    
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.61 5a2 2 0 0 1 1.99-2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.4a16 16 0 0 0 6 6l.93-.93a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    +971 50 000 00 00
                  </a>
                  <a
                    href="https://wa.me/97150000000"
                    className="flex items-center gap-3 text-sm text-warm-white/60 hover:text-gold transition-colors">
                    
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                    WhatsApp
                  </a>
                </div>

                <a
                  href="#visit-form"
                  className="btn-gold w-full py-4 rounded-xl text-xs font-bold tracking-widest uppercase text-center block">
                  
                  Planifier une visite
                </a>
              </div>

              {/* Share */}
              <div className="glass-dark rounded-2xl p-5 border border-gold-subtle">
                <p className="text-xs uppercase tracking-widest text-warm-white/30 font-medium mb-3">Partager ce bien</p>
                <div className="flex gap-3">
                  {['Email', 'WhatsApp', 'Copier']?.map((action) =>
                  <button
                    key={action}
                    className="flex-1 py-2 rounded-xl border border-gold-subtle text-xs text-warm-white/40 hover:text-gold hover:border-gold transition-colors font-medium">
                    
                      {action}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}