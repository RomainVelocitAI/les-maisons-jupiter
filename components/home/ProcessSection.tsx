'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Search, FileText, Coins, HardHat, Key } from 'lucide-react';
import { useParallax } from '@/lib/animations';

const steps = [
  {
    icon: MapPin,
    title: "Étude de votre projet de maison",
    description: "Analyse de vos besoins : nombre de chambres, style architectural créole ou moderne, terrasse, piscine. Conception adaptée à votre famille.",
    duration: "Étape 1"
  },
  {
    icon: Search,
    title: "Plans personnalisés de votre maison",
    description: "Création des plans sur mesure : plain-pied ou étage, cuisine ouverte, varangue, garage. Architecture tropicale adaptée au climat.",
    duration: "Étape 2"
  },
  {
    icon: Coins,
    title: "Budget et financement maison",
    description: "Estimation précise du coût de construction. Accompagnement pour votre prêt immobilier et optimisation de votre plan de financement.",
    duration: "Étape 3"
  },
  {
    icon: FileText,
    title: "Permis de construire inclus",
    description: "Dossier complet pour votre maison : plans, implantation, façades. Gestion des autorisations et suivi administratif jusqu'à obtention.",
    duration: "Étape 4"
  },
  {
    icon: HardHat,
    title: "Construction de votre maison",
    description: "Fondations parasismiques, structure béton armé, toiture anticyclonique, isolation thermique. Artisans locaux qualifiés et suivi de chantier.",
    duration: "Étape 5"
  },
  {
    icon: Key,
    title: "Votre maison clés en main",
    description: "Réception de votre maison terminée : finitions impeccables, garanties décennales, service après-vente. Votre famille peut emménager.",
    duration: "Étape 6"
  }
];

export const ProcessSection: React.FC = () => {
  return (
    <section className="section-padding bg-white">
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
              <span className="block">Comment nous construisons</span>
              <span className="text-jupiter-or">votre maison sur mesure</span>
            </h2>
            <p className="text-xl text-jupiter-gris-600">
              <span className="font-semibold text-jupiter-noir">6 étapes pour construire la maison de vos rêves.</span> 
              {" "}De la première esquisse à la remise des clés, nous gérons tout pour vous.
            </p>
          </motion.div>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-jupiter-or via-jupiter-or to-transparent hidden lg:block" />

          {/* Steps */}
          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative lg:flex lg:items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={`lg:w-5/12 ${isEven ? 'lg:text-right lg:pr-12' : 'lg:pl-12'}`}>
                    <motion.div 
                      className={`group bg-gradient-to-br from-jupiter-gris-50 to-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 ${
                        isEven ? 'lg:ml-auto' : 'lg:mr-auto'
                      } max-w-lg relative overflow-hidden cursor-pointer`}
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.3 }
                      }}
                    >
                      {/* Animated background gradient */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-br from-jupiter-or/0 to-jupiter-or/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />
                      
                      <div className={`relative flex items-center gap-4 mb-4 ${
                        isEven ? 'lg:flex-row-reverse' : ''
                      }`}>
                        <motion.div 
                          className="w-12 h-12 bg-jupiter-or rounded-full flex items-center justify-center flex-shrink-0 shadow-lg"
                          whileHover={{ 
                            rotate: 360,
                            scale: 1.1,
                            transition: { duration: 0.6 }
                          }}
                        >
                          <Icon className="text-white" size={24} />
                        </motion.div>
                        <div>
                          <h3 className="text-xl font-semibold text-jupiter-noir group-hover:text-jupiter-or transition-colors duration-300">
                            {step.title}
                          </h3>
                          <motion.span 
                            className="inline-block text-jupiter-or text-sm font-medium"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                          >
                            {step.duration}
                          </motion.span>
                        </div>
                      </div>
                      <p className="relative text-jupiter-gris-600 leading-relaxed group-hover:text-jupiter-noir transition-colors duration-300">
                        {step.description}
                      </p>
                      
                      {/* Progress indicator */}
                      <motion.div 
                        className="absolute bottom-0 left-0 h-1 bg-jupiter-or"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${((index + 1) / steps.length) * 100}%` }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
                      />
                    </motion.div>
                  </div>

                  {/* Center dot with pulse animation */}
                  <motion.div 
                    className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-jupiter-or rounded-full border-4 border-white shadow-lg items-center justify-center z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      delay: index * 0.1 + 0.2,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-jupiter-or rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                      style={{ opacity: 0.3 }}
                    />
                    <span className="relative text-white text-xs font-bold">{index + 1}</span>
                  </motion.div>

                  {/* Spacer */}
                  <div className="hidden lg:block lg:w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-jupiter-or/10 to-jupiter-or/5 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-jupiter-noir mb-4">
              Prêt à construire votre maison ?
            </h3>
            <p className="text-jupiter-gris-600 mb-6">
              Parlons de votre future maison : style, nombre de pièces, budget. Étude gratuite et sans engagement.
            </p>
            <motion.button 
              className="btn-primary group relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Demander une étude gratuite
                <motion.svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </motion.svg>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-jupiter-or-fonce to-jupiter-or"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};