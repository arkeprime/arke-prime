'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'Accueil', href: '/homepage' },
  { label: 'Nos Biens', href: '/properties' },
  { label: 'Services', href: '/homepage#services' },
  { label: 'À Propos', href: '/homepage#about' },
  { label: 'Contact', href: '/homepage#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-obsidian/95 backdrop-blur-xl border-b border-gold-subtle py-4' :'bg-transparent py-6'
        }`}
      >
        <nav className="max-w-screen-xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/homepage" className="flex items-center gap-3 group">
            <AppLogo
              src="/assets/images/photo_5951688263024184476_y-1776255275718.jpg"
              size={40}
              className="rounded-sm"
            />
            <span className="font-serif text-lg font-light tracking-[0.25em] text-warm-white uppercase hidden sm:block">
              ARKÉ PRIME
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                className="text-xs font-medium tracking-widest uppercase text-warm-white/60 hover:text-gold transition-colors duration-300"
              >
                {link?.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/homepage#contact"
              className="btn-gold px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase"
            >
              Nous Contacter
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 w-8 group z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <span
              className={`block h-0.5 bg-warm-white transition-all duration-300 ${
                menuOpen ? 'w-full rotate-45 translate-y-2' : 'w-full'
              }`}
            />
            <span
              className={`block h-0.5 bg-warm-white transition-all duration-300 ${
                menuOpen ? 'opacity-0 w-0' : 'w-2/3'
              }`}
            />
            <span
              className={`block h-0.5 bg-warm-white transition-all duration-300 ${
                menuOpen ? 'w-full -rotate-45 -translate-y-2' : 'w-full'
              }`}
            />
          </button>
        </nav>
      </header>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 modal-backdrop flex flex-col justify-center items-center transition-all duration-500 lg:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks?.map((link, i) => (
            <Link
              key={link?.href}
              href={link?.href}
              onClick={() => setMenuOpen(false)}
              className="font-serif text-3xl font-light tracking-widest text-warm-white hover:text-gold transition-colors duration-300"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {link?.label}
            </Link>
          ))}
          <Link
            href="/homepage#contact"
            onClick={() => setMenuOpen(false)}
            className="btn-gold mt-6 px-10 py-4 rounded-full text-sm font-bold tracking-widest uppercase"
          >
            Nous Contacter
          </Link>
        </nav>
        <div className="absolute bottom-10 text-xs tracking-widest text-warm-white/30 uppercase">
          Là où le prestige rencontre l&apos;immobilier
        </div>
      </div>
    </>
  );
}