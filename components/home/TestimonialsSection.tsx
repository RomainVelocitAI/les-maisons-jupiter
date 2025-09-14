'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const realServices = [
  {
    title: "Permis de construire gratuit",
    description: "Un service inclus dans notre accompagnement complet, contrairement à de nombreux constructeurs qui facturent cette prestation.",
    highlight: "Service gratuit inclus",
    category: "Démarches administratives"
  },
  {
    title: "Accompagnement financier personnalisé",
    description: "Nous vous guidons dans vos démarches de financement et vous aidons à optimiser votre dossier bancaire.",
    highlight: "Expertise financière",
    category: "Financement"
  },
  {
    title: "Recherche de terrain adaptée",
    description: "Grâce à notre réseau et notre connaissance du marché local, nous vous aidons à trouver le terrain idéal pour votre projet.",
    highlight: "Connaissance du marché local",
    category: "Recherche de terrain"
  },
  {
    title: "Suivi de A à Z",
    description: "De la conception à la remise des clefs, nous restons présents à chaque étape de votre projet de construction.",
    highlight: "Accompagnement complet",
    category: "Suivi de chantier"
  },
  {
    title: "Plus de 27 ans d'expérience",
    description: "Une expertise reconnue dans la construction de maisons individuelles à La Réunion, avec un savoir-faire transmis et perfectionné.",
    highlight: "Expérience vérifiée",
    category: "Expertise"
  },
  {
    title: "Implantation à Saint-Louis",
    description: "Un constructeur local qui connaît parfaitement le territoire réunionnais et ses spécificités.",
    highlight: "Expertise locale",
    category: "Proximité"
  }
];

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextService = () => {
    setCurrentIndex((prev) => (prev + 1) % realServices.length);
  };

  const prevService = () => {
    setCurrentIndex((prev) => (prev - 1 + realServices.length) % realServices.length);
  };

  return (
    <section className="section-padding bg-jupiter-gris-100">
      <div className="container-responsive">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-h1 font-serif text-jupiter-noir mb-4">
              <span className="block">Nos services authentiques</span>
              <span className="text-jupiter-or">Transparence et savoir-faire</span>
            </h2>
            <p className="text-xl text-jupiter-gris-600">
              <span className="font-semibold text-jupiter-noir">Plus de 27 ans d'expérience à votre service.</span> Découvrez nos services réels et notre engagement authentique dans chaque projet de construction.
              <span className="block text-sm mt-2 text-jupiter-or font-semibold">
                Contactez-nous au 0693408990
              </span>
            </p>
          </motion.div>
        </div>

        {/* Featured Service */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-xl p-8 lg:p-12 mb-12 relative"
        >
          <Quote className="absolute top-8 left-8 text-jupiter-or/20" size={48} />
          
          <div className="relative z-10">
            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 bg-jupiter-or/10 text-jupiter-or px-4 py-2 rounded-full text-sm font-semibold mb-6">
              {realServices[currentIndex].category}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-serif text-jupiter-noir mb-4">
              {realServices[currentIndex].title}
            </h3>

            {/* Description */}
            <p className="text-xl text-jupiter-gris-700 leading-relaxed mb-6">
              {realServices[currentIndex].description}
            </p>

            {/* Highlight */}
            <div className="inline-flex items-center gap-2 bg-jupiter-or/10 text-jupiter-or px-4 py-2 rounded-full text-sm font-semibold mb-6">
              {realServices[currentIndex].highlight}
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-2">
              <button
                onClick={prevService}
                className="w-10 h-10 rounded-full bg-jupiter-gris-200 hover:bg-jupiter-or hover:text-white transition-colors flex items-center justify-center"
                aria-label="Service précédent"
              >
                ←
              </button>
              <button
                onClick={nextService}
                className="w-10 h-10 rounded-full bg-jupiter-gris-200 hover:bg-jupiter-or hover:text-white transition-colors flex items-center justify-center"
                aria-label="Service suivant"
              >
                →
              </button>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {realServices.slice(0, 3).map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              {/* Category */}
              <div className="inline-flex items-center gap-2 bg-jupiter-or/10 text-jupiter-or px-3 py-1 rounded-full text-xs font-semibold mb-3">
                {service.category}
              </div>

              {/* Title */}
              <h4 className="font-semibold text-jupiter-noir text-lg mb-3">
                {service.title}
              </h4>

              {/* Description */}
              <p className="text-jupiter-gris-700 mb-4 line-clamp-3">
                {service.description}
              </p>

              {/* Highlight */}
              <div className="border-t border-jupiter-gris-200 pt-4">
                <p className="text-sm text-jupiter-or font-medium">
                  {service.highlight}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Real Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-8 flex-wrap justify-center">
            <div className="text-center">
              <p className="text-3xl font-bold text-jupiter-or">27+</p>
              <p className="text-jupiter-gris-600">Années d'expérience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-jupiter-or">100%</p>
              <p className="text-jupiter-gris-600">Accompagnement</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-jupiter-or">GRATUIT</p>
              <p className="text-jupiter-gris-600">Permis de construire</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-jupiter-or">A-Z</p>
              <p className="text-jupiter-gris-600">Suivi complet</p>
            </div>
          </div>
          <div className="mt-8 p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
            <p className="text-jupiter-noir font-semibold mb-2">Nous contacter</p>
            <p className="text-jupiter-or font-bold text-xl">0693408990</p>
            <p className="text-sm text-jupiter-gris-600 mt-2">
              4 impasses des turquoise les cocos<br/>
              97450 Saint-Louis
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};