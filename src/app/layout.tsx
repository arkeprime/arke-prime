import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/tailwind.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'ARKÉ PRIME — Immobilier de Prestige',
  description: "ARKÉ PRIME sélectionne les propriétés les plus exceptionnelles à Dubai, Paris et Monaco pour une clientèle d'élite exigeante.",
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
  },
  openGraph: {
    title: 'ARKÉ PRIME — Immobilier de Prestige',
    description: "Des biens d'exception pour une clientèle d'élite.",
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {children}
</body>
    </html>
  );
}