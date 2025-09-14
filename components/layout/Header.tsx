'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Nos Réalisations', href: '/realisations' },
    { name: 'À Propos', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-jupiter-noir text-white py-2">
        <div className="container-responsive flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:0693408990" className="flex items-center gap-2 hover:text-jupiter-or transition-colors">
              <Phone size={14} />
              <span>0693 40 89 90</span>
            </a>
            <span className="hidden md:flex items-center gap-2">
              <MapPin size={14} />
              <span>Saint-Louis, La Réunion</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span>Lundi-Vendredi: 8h-12h / 13h30-17h30</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          isScrolled ? 'shadow-lg' : ''
        }`}
      >
        <div className="container-responsive">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold text-jupiter-noir">
                  LES MAISONS
                </span>
                <span className="text-3xl font-serif font-bold text-gradient-gold">
                  JUPITER
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-jupiter-noir hover:text-jupiter-or transition-colors font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button variant="primary" size="md">
                Devis Gratuit
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-jupiter-noir"
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-jupiter-gris-200">
            <nav className="container-responsive py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-3 text-jupiter-noir hover:text-jupiter-or transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-jupiter-gris-200 mt-4">
                <Button variant="primary" size="md" fullWidth>
                  Devis Gratuit
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};