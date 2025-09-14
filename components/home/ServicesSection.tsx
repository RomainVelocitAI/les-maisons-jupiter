'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck, Banknote, MapPin, HardHat, Key, Shield } from 'lucide-react';

const services = [
  {
    icon: MapPin,
    title: "Maisons adaptées au climat tropical",
    description: "Nos maisons sont conçues pour La Réunion : ventilation naturelle, protection solaire, résistance aux cyclones.",
    value: "Expertise locale"
  },
  {
    icon: Banknote,
    title: "Choix de modèles variés",
    description: "Maisons créoles, contemporaines, plain-pied ou à étage. Personnalisez chaque détail selon vos envies.",
    value: "100% personnalisable"
  },
  {
    icon: FileCheck,
    title: "Matériaux de qualité supérieure",
    description: "Béton armé, toiture anticyclonique, isolation thermique performante. Votre maison résiste au temps.",
    value: "Durabilité garantie"
  },
  {
    icon: HardHat,
    title: "Construction par nos équipes",
    description: "Artisans locaux qualifiés, maîtrise des techniques de construction tropicale, finitions impeccables.",
    value: "Savoir-faire local"
  },
  {
    icon: Key,
    title: "Maison clés en main",
    description: "De la première esquisse à la remise des clés, nous construisons votre maison de A à Z.",
    value: "Tranquillité totale"
  },
  {
    icon: Shield,
    title: "Garanties décennales complètes",
    description: "Structure, étanchéité, toiture : votre maison est protégée pendant 10 ans. Service après-vente réactif.",
    value: "Protection 10 ans"
  }
];

export const ServicesSection: React.FC = () => {
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
              Votre maison, notre expertise
            </h2>
            <p className="text-xl text-jupiter-gris-600">
              <span className="font-semibold text-jupiter-noir">27 ans de construction de maisons à La Réunion.</span> 
              {" "}Chaque maison est unique, conçue pour votre famille et adaptée à votre terrain.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-jupiter-or/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-jupiter-or/20 transition-colors">
                  <Icon className="text-jupiter-or" size={28} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-jupiter-noir mb-3">
                  {service.title}
                </h3>
                <p className="text-jupiter-gris-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Value Badge */}
                <div className="inline-flex items-center gap-2 bg-jupiter-or/10 text-jupiter-or px-3 py-1 rounded-full text-sm font-semibold">
                  {service.value}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-jupiter-gris-600 mb-6">
            <span className="font-semibold text-jupiter-noir">Découvrez nos modèles de maisons</span>
          </p>
          <button className="btn-primary">
            Voir notre catalogue de maisons
          </button>
        </motion.div>
      </div>
    </section>
  );
};