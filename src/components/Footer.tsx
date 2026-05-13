import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-gold-subtle py-16 px-6 md:px-12">
      <div className="max-w-screen-xl mx-auto">
        {/* Pattern 3: Vercel Horizontal Flow */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo + tagline */}
          <div className="flex items-center gap-3">
            <AppLogo
              src="/assets/images/photo_5951688263024184476_y-1776255275718.jpg"
              size={32}
              className="rounded-sm"
            />
            <span className="font-serif text-sm font-light tracking-[0.2em] text-warm-white/60 uppercase hidden sm:block">
              ARKÉ PRIME
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center items-center gap-1 text-sm text-warm-white/40">
            <Link href="/homepage" className="px-3 py-2 hover:text-gold transition-colors font-medium">
              Accueil
            </Link>
            <span className="text-warm-white/20">·</span>
            <Link href="/properties" className="px-3 py-2 hover:text-gold transition-colors font-medium">
              Nos Biens
            </Link>
            <span className="text-warm-white/20">·</span>
            <Link href="/homepage#services" className="px-3 py-2 hover:text-gold transition-colors font-medium">
              Services
            </Link>
            <span className="text-warm-white/20">·</span>
            <Link href="/homepage#contact" className="px-3 py-2 hover:text-gold transition-colors font-medium">
              Contact
            </Link>
            <span className="text-warm-white/20">·</span>
            <Link href="/homepage" className="px-3 py-2 hover:text-gold transition-colors font-medium">
              Mentions Légales
            </Link>
          </div>

          {/* Social + copyright */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram ARKÉ PRIME"
              className="w-9 h-9 rounded-full border border-gold-subtle flex items-center justify-center text-warm-white/40 hover:text-gold hover:border-gold transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </a>
            <a
              href="https://wa.me/33600000000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp ARKÉ PRIME"
              className="w-9 h-9 rounded-full border border-gold-subtle flex items-center justify-center text-warm-white/40 hover:text-gold hover:border-gold transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-gold-subtle/30 text-center">
          <p className="text-xs tracking-widest uppercase text-warm-white/20">
            © 2026 ARKÉ PRIME · Là où le prestige rencontre l&apos;immobilier
          </p>
        </div>
      </div>
    </footer>
  );
}