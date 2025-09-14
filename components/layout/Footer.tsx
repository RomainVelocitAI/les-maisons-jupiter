import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-jupiter-noir text-white">
      <div className="container-responsive py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <span className="text-2xl font-serif font-bold">LES MAISONS</span>
              <br />
              <span className="text-3xl font-serif font-bold text-jupiter-or">JUPITER</span>
            </div>
            <p className="text-jupiter-gris-300 mb-4">
              Constructeur de maisons individuelles avec plus de 27 ans d'expérience à La Réunion.
            </p>
            <p className="text-sm text-jupiter-gris-400">
              SASU Les Maisons Jupiter<br />
              SIRET: 94250467100010<br />
              APE: 4120A
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-jupiter-or">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#permis" className="text-jupiter-gris-300 hover:text-jupiter-or transition-colors">
                  Permis de construire gratuit
                </Link>
              </li>
              <li>
                <Link href="/services#financement" className="text-jupiter-gris-300 hover:text-jupiter-or transition-colors">
                  Accompagnement financier
                </Link>
              </li>
              <li>
                <Link href="/services#terrain" className="text-jupiter-gris-300 hover:text-jupiter-or transition-colors">
                  Recherche de terrain
                </Link>
              </li>
              <li>
                <Link href="/services#construction" className="text-jupiter-gris-300 hover:text-jupiter-or transition-colors">
                  Suivi de construction A à Z
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-jupiter-or">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-jupiter-or mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:0693408990" className="text-jupiter-gris-300 hover:text-jupiter-or transition-colors">
                    0693 40 89 90
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-jupiter-or mt-1 flex-shrink-0" />
                <div>
                  <a href="mailto:lesmaisonsjupiter@gmail.com" className="text-jupiter-gris-300 hover:text-jupiter-or transition-colors">
                    lesmaisonsjupiter@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-jupiter-or mt-1 flex-shrink-0" />
                <div className="text-jupiter-gris-300">
                  4 impasses des turquoise<br />
                  Les Cocos<br />
                  97450 Saint-Louis
                </div>
              </li>
            </ul>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-jupiter-or">Horaires d'ouverture</h3>
            <div className="flex items-start gap-3">
              <Clock size={18} className="text-jupiter-or mt-1 flex-shrink-0" />
              <div className="text-jupiter-gris-300">
                <p className="font-semibold">Lundi - Vendredi</p>
                <p>8h00 - 12h00</p>
                <p>13h30 - 17h30</p>
                <p className="mt-2 font-semibold">Samedi - Dimanche</p>
                <p>Fermé</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-jupiter-gris-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-jupiter-gris-400 text-sm">
            © {currentYear} Les Maisons Jupiter. Tous droits réservés.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/mentions-legales" className="text-jupiter-gris-400 hover:text-jupiter-or text-sm transition-colors">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="text-jupiter-gris-400 hover:text-jupiter-or text-sm transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};