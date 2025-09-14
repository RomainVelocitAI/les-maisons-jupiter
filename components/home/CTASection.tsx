'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ChevronRight } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-jupiter-noir via-jupiter-gris-900 to-jupiter-noir relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            #c6b437,
            #c6b437 10px,
            transparent 10px,
            transparent 20px
          )`
        }} />
      </div>

      <div className="container-responsive relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-h1 font-serif text-white mb-6">
              <span className="block">Concrétisez votre projet</span>
              <span className="text-gradient-gold">avec Les Maisons Jupiter</span>
            </h2>
            
            <p className="text-xl text-jupiter-gris-300 mb-8 leading-relaxed">
              <span className="font-semibold text-white">Plus de 27 ans d'expérience à votre service.</span>
              {" "}Contactez-nous pour une étude personnalisée et gratuite de votre projet.
              {" "}<span className="text-jupiter-or font-semibold">Construisons ensemble votre maison idéale.</span>
            </p>

            {/* Key Benefits */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-white">
                <div className="w-8 h-8 bg-jupiter-or/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-jupiter-or font-bold">✓</span>
                </div>
                <span>Accompagnement financier personnalisé</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-8 h-8 bg-jupiter-or/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-jupiter-or font-bold">✓</span>
                </div>
                <span>Permis de construire inclus</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-8 h-8 bg-jupiter-or/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-jupiter-or font-bold">✓</span>
                </div>
                <span>Suivi complet de votre projet</span>
              </div>
            </div>

            {/* Urgency with animation */}
            <motion.div 
              className="bg-gradient-to-r from-jupiter-or/20 to-jupiter-or/10 border border-jupiter-or/30 rounded-lg p-4 mb-8"
              animate={{ 
                borderColor: ["rgba(198, 180, 55, 0.3)", "rgba(198, 180, 55, 0.6)", "rgba(198, 180, 55, 0.3)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="flex items-center justify-between">
                <p className="text-white font-bold">
                  ✨ Plus de 27 ans d'expérience à La Réunion
                </p>
              </div>
            </motion.div>

            {/* Primary CTA with enhanced animation */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                className="btn-primary group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  Demander une étude gratuite
                  <ChevronRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-jupiter-or-fonce to-jupiter-or"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              <button className="btn-outline group">
                <Phone className="mr-2 group-hover:animate-pulse" size={18} />
                0693 40 89 90
              </button>
            </div>
          </motion.div>

          {/* Right Content - Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold text-jupiter-noir">
                  Contactez-nous
                </h3>
                <span className="text-sm text-jupiter-or font-semibold bg-jupiter-or/10 px-3 py-1 rounded-full">
                  Sans engagement
                </span>
              </div>

              {/* Contact Form */}
              <form className="space-y-4 mb-6">
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full px-4 py-3 border border-jupiter-gris-300 rounded-lg focus:outline-none focus:border-jupiter-or transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Votre téléphone"
                  className="w-full px-4 py-3 border border-jupiter-gris-300 rounded-lg focus:outline-none focus:border-jupiter-or transition-colors"
                />
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full px-4 py-3 border border-jupiter-gris-300 rounded-lg focus:outline-none focus:border-jupiter-or transition-colors"
                />
                <select className="w-full px-4 py-3 border border-jupiter-gris-300 rounded-lg focus:outline-none focus:border-jupiter-or transition-colors text-jupiter-gris-600">
                  <option>Type de projet</option>
                  <option>Construction neuve</option>
                  <option>Extension</option>
                  <option>Rénovation</option>
                </select>
                <textarea
                  placeholder="Décrivez votre projet..."
                  rows={3}
                  className="w-full px-4 py-3 border border-jupiter-gris-300 rounded-lg focus:outline-none focus:border-jupiter-or transition-colors resize-none"
                />
                <motion.button 
                  type="submit" 
                  className="w-full btn-primary relative"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center gap-2">
                    Envoyer ma demande
                  </span>
                </motion.button>
              </form>

              <div className="border-t border-jupiter-gris-200 pt-6 space-y-3">
                {/* Phone */}
                <a href="tel:0262591042" className="flex items-center gap-3 text-jupiter-gris-700 hover:text-jupiter-or transition-colors">
                  <Phone className="text-jupiter-or" size={20} />
                  <span>0262 59 10 42</span>
                </a>

                {/* Email */}
                <a href="mailto:contact@lesmaisonsjupiter.re" className="flex items-center gap-3 text-jupiter-gris-700 hover:text-jupiter-or transition-colors">
                  <Mail className="text-jupiter-or" size={20} />
                  <span>contact@lesmaisonsjupiter.re</span>
                </a>

                {/* Address */}
                <div className="flex items-start gap-3 text-jupiter-gris-700">
                  <MapPin className="text-jupiter-or flex-shrink-0 mt-1" size={20} />
                  <span>58 Rue Sarda Garriga, Saint-Louis 97450</span>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3 text-jupiter-gris-700">
                  <Clock className="text-jupiter-or flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p>Lundi - Vendredi : 8h00 - 17h00</p>
                    <p>Samedi : 9h00 - 12h00</p>
                  </div>
                </div>
              </div>

              {/* Trust Signal with urgency */}
              <div className="mt-6 pt-6 border-t border-jupiter-gris-200">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-center text-sm text-jupiter-gris-600">
                    <span className="font-semibold text-jupiter-noir">Constructeur certifié</span> à Saint-Louis
                  </p>
                </div>
                <p className="text-center text-xs text-jupiter-or mt-2 font-semibold">
                  Plus de 27 ans d'expérience
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-jupiter-gris-800"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 text-jupiter-gris-400">
            <div className="flex items-center gap-2">
              <span className="text-jupiter-or text-2xl font-bold">27</span>
              <span>ans d'expérience</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-jupiter-or text-2xl font-bold">Pro</span>
              <span>Expertise locale</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-jupiter-or text-2xl font-bold">Qualité</span>
              <span>Construction soignée</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-jupiter-or text-2xl font-bold">100%</span>
              <span>clients satisfaits</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};