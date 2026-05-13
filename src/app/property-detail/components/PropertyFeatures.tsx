import React from 'react';

const featureGroups = [
  {
    title: 'Intérieur',
    features: [
      'Salon double hauteur (8m)',
      'Cuisine équipée Miele',
      'Cave à vin climatisée',
      'Cinéma privé 12 places',
      'Salle de sport équipée',
      'Hammam & Spa',
      'Bibliothèque panoramique',
      'Bureau exécutif',
    ],
  },
  {
    title: 'Extérieur',
    features: [
      'Piscine à débordement 25m',
      'Terrasse principale 400m²',
      'Jardin paysager 2 800m²',
      'Pool house avec cuisine',
      'Court de tennis',
      'Hélipad',
      'Garage 4 véhicules',
      'Accès golf direct',
    ],
  },
  {
    title: 'Technologie',
    features: [
      'Domotique Crestron',
      'Sécurité 24h/24',
      'Panneaux solaires',
      'Bornes de recharge EV',
      'Fibre optique 10 Gb/s',
      'Éclairage Lutron',
      'Climatisation 6 zones',
      'Générateur autonome',
    ],
  },
];

const additionalSpecs = [
  { label: 'Année de construction', value: '2023' },
  { label: 'Étages', value: '3 niveaux' },
  { label: 'Exposition', value: 'Sud / Sud-Ouest' },
  { label: 'Vue', value: 'Golf & Skyline' },
  { label: 'Charges annuelles', value: '180 000 AED/an' },
  { label: 'DPE', value: 'A+' },
];

export default function PropertyFeatures() {
  return (
    <section className="py-12 px-6 md:px-12 relative z-10">
      <div className="max-w-screen-xl mx-auto">
        <div className="gold-divider mb-12" />

        <h2 className="font-serif text-3xl md:text-4xl font-light text-warm-white mb-12">
          Caractéristiques & <span className="italic text-gold-gradient">Prestations</span>
        </h2>

        {/* Feature groups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featureGroups?.map((group) => (
            <div key={group?.title} className="glass-dark rounded-3xl p-8 border border-gold-subtle">
              <h3 className="font-serif text-lg font-light text-gold mb-6">{group?.title}</h3>
              <ul className="flex flex-col gap-3">
                {group?.features?.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-warm-white/70 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional specs */}
        <div className="border border-gold-subtle rounded-3xl overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-y md:divide-y-0 divide-gold-subtle">
            {additionalSpecs?.map((spec) => (
              <div key={spec?.label} className="p-6 text-center">
                <p className="font-semibold text-warm-white text-sm mb-1">{spec?.value}</p>
                <p className="text-xs uppercase tracking-widest text-warm-white/30">{spec?.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}