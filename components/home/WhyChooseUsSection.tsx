'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Users, 
  Wallet, 
  MapPin, 
  Clock, 
  Award 
} from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Garanties 10 ans',
    description: 'Protection complète sur la structure, toiture et étanchéité. Votre investissement est sécurisé.',
    highlight: 'Sérénité totale'
  },
  {
    icon: Users,
    title: 'Accompagnement personnalisé',
    description: 'Un seul interlocuteur du début à la fin. Nous gérons tout pour vous simplifier la vie.',
    highlight: 'Service clé en main'
  },
  {
    icon: Wallet,
    title: 'Accompagnement financier',
    description: 'Aide au montage du dossier de prêt, négociation avec les banques, optimisation de votre budget.',
    highlight: 'Financement facilité'
  },
  {
    icon: MapPin,
    title: 'Recherche de terrain',
    description: 'Besoin d\'un terrain ? Nous vous aidons à trouver l\'emplacement idéal pour votre future maison.',
    highlight: 'Service complet'
  },
  {
    icon: Clock,
    title: '27 ans d\'expérience',
    description: 'Expertise locale reconnue, plus de 500 maisons construites à La Réunion.',
    highlight: 'Savoir-faire prouvé'
  },
  {
    icon: Award,
    title: 'Qualité certifiée',
    description: 'Construction aux normes parasismiques et anticycloniques. Matériaux premium garantis.',
    highlight: 'Excellence garantie'
  }
];

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-responsive">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-h1 font-serif text-jupiter-noir mb-4">
            Pourquoi Choisir <span className="text-jupiter-or">Les Maisons Jupiter</span>
          </h2>
          <p className="text-xl text-jupiter-gris-600">
            Plus qu'un constructeur, nous sommes votre partenaire pour concrétiser votre projet de vie.
            De la recherche du terrain à la remise des clés, nous vous accompagnons à chaque étape.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-jupiter-gris-50 to-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 h-full">
                  {/* Icon */}
                  <motion.div
                    className="mb-6 inline-block"
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-jupiter-or to-jupiter-or-fonce rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-jupiter-or/30 transition-shadow">
                      <Icon size={32} className="text-white" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-jupiter-noir mb-2 group-hover:text-jupiter-or transition-colors">
                    {reason.title}
                  </h3>
                  
                  <p className="text-sm font-semibold text-jupiter-or mb-3">
                    {reason.highlight}
                  </p>
                  
                  <p className="text-jupiter-gris-600">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-jupiter-or/10 to-jupiter-or/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-jupiter-noir mb-4">
              Prêt à construire votre maison de rêve ?
            </h3>
            <p className="text-jupiter-gris-600 mb-6 max-w-2xl mx-auto">
              Que vous ayez déjà un terrain ou que vous en cherchiez un, nous sommes là pour vous accompagner.
              Consultation gratuite et sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Demander un devis gratuit
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Prendre rendez-vous
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};