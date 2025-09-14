'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Search, CheckCircle2, TrendingDown, Shield, Clock } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: "Réseau de professionnels locaux",
    description: "Notre réseau de notaires et agents immobiliers nous permet d'accéder à des terrains en avant-première. Une vraie valeur ajoutée pour votre recherche.",
    highlight: "Accès privilégié au marché"
  },
  {
    icon: CheckCircle2,
    title: "Vérifications complètes du terrain",
    description: "Nous effectuons toutes les vérifications nécessaires : viabilité, constructibilité, servitudes... Pour que vous signiez en toute sérénité.",
    highlight: "Sécurité garantie"
  },
  {
    icon: TrendingDown,
    title: "Négociation professionnelle",
    description: "Notre expertise en négociation immobilière nous permet d'obtenir les meilleures conditions pour votre achat de terrain.",
    highlight: "Meilleur prix négocié"
  }
];

const processSteps = [
  {
    number: "01",
    title: "Définition du projet",
    description: "Vos critères : localisation, budget, surface"
  },
  {
    number: "02",
    title: "Recherche active",
    description: "Exploration de notre réseau et du marché"
  },
  {
    number: "03",
    title: "Validation terrain",
    description: "Analyse technique et administrative complète"
  },
  {
    number: "04",
    title: "Accompagnement achat",
    description: "Négociation et sécurisation de la transaction"
  }
];

export const TerrainSection: React.FC = () => {
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
          <div className="inline-flex items-center gap-2 bg-jupiter-or/10 border border-jupiter-or/30 rounded-full px-5 py-2.5 mb-6">
            <MapPin className="text-jupiter-or" size={20} />
            <span className="text-jupiter-noir text-sm font-semibold">Service exclusif</span>
          </div>
          
          <h2 className="text-h1 font-serif text-jupiter-noir mb-4">
            <span className="block">Votre terrain idéal à La Réunion</span>
            <span className="text-jupiter-or">Notre service de recherche de terrain</span>
          </h2>
          <p className="text-xl text-jupiter-gris-600 leading-relaxed">
            <span className="font-semibold text-jupiter-noir">Plus de 27 ans d'expérience dans la recherche de terrains.</span> 
            {" "}Notre équipe mobilise son réseau de professionnels et sa connaissance du marché local. <span className="text-jupiter-or font-semibold">Nous vous accompagnons dans la recherche et la négociation de votre terrain.</span>
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 relative rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src="https://replicate.delivery/xezq/GGhv1lUgcTLSMBEbHS4Jrjnp4fzxh2EF20XiUHzLzIfFE2UVA/tmp5d4q57xe.jpeg"
            alt="Terrains disponibles vue aérienne"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-jupiter-noir/60 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 max-w-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 bg-jupiter-or rounded-full animate-pulse"></span>
                <h3 className="text-2xl font-serif text-jupiter-noir">Terrains disponibles à La Réunion</h3>
              </div>
              <p className="text-jupiter-gris-600 mb-3">Sélection de terrains viabilisés et vérifiés</p>
              <div className="flex items-center gap-4">
                <span className="text-sm text-jupiter-or font-bold">Accompagnement personnalisé</span>
                <span className="text-sm text-green-600 font-semibold">Négociation incluse</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-jupiter-gris-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-jupiter-or rounded-full flex items-center justify-center mb-6">
                  <Icon className="text-white" size={24} />
                </div>
                
                <h3 className="text-xl font-semibold text-jupiter-noir mb-3">
                  {feature.title}
                </h3>
                <p className="text-jupiter-gris-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="inline-flex items-center gap-2 text-jupiter-or font-semibold">
                  <span>{feature.highlight}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-jupiter-gris-50 to-white rounded-3xl p-12 mb-16"
        >
          <h3 className="text-2xl font-serif text-jupiter-noir mb-12 text-center">
            Notre processus de recherche
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.number} className="relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-jupiter-or/20" />
                )}
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-jupiter-or text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h4 className="font-semibold text-jupiter-noir mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-jupiter-gris-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Benefits with Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className="text-3xl font-serif text-jupiter-noir mb-6">
              <span className="block">Notre méthode éprouvée</span>
              <span className="text-jupiter-or">Pour trouver VOTRE terrain idéal</span>
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Shield className="text-jupiter-or mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-jupiter-noir mb-1">
                    Analyse de vos besoins
                  </h4>
                  <p className="text-jupiter-gris-600">
                    Nous écoutons vos critères : localisation, budget, surface. Notre expertise locale nous permet de vous orienter vers les meilleures opportunités.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="text-jupiter-or mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-jupiter-noir mb-1">
                    Recherche active et ciblée
                  </h4>
                  <p className="text-jupiter-gris-600">
                    Grâce à notre réseau de professionnels et notre connaissance du marché, nous identifions rapidement les terrains correspondant à vos critères.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <TrendingDown className="text-jupiter-or mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-jupiter-noir mb-1">
                    Négociation et sécurisation
                  </h4>
                  <p className="text-jupiter-gris-600">
                    Nous négocions le meilleur prix et vérifions tous les aspects juridiques et techniques pour une transaction en toute sérénité.
                  </p>
                </div>
              </div>
            </div>

            <button className="btn-primary mt-8 group">
              <span>Découvrir notre service terrain</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="https://replicate.delivery/xezq/ks7YrRO5vYJSAdx3PgQhxWyoEJROUGe0GehKFwjcktfHJspqA/tmpjl1xzbdm.jpeg"
                alt="Plans cadastraux et documents d'urbanisme"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-jupiter-noir/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-jupiter-or rounded-full flex items-center justify-center">
                    <MapPin className="text-white" size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-jupiter-noir text-sm">Analyse complète</p>
                    <p className="text-xs text-jupiter-gris-600">Plans, cadastre, viabilité</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-jupiter-gris-50 rounded-lg py-2">
                    <p className="text-jupiter-or font-bold">100%</p>
                    <p className="text-xs text-jupiter-gris-600">Vérifié</p>
                  </div>
                  <div className="bg-jupiter-gris-50 rounded-lg py-2">
                    <p className="text-jupiter-or font-bold">27 ans</p>
                    <p className="text-xs text-jupiter-gris-600">Expertise</p>
                  </div>
                  <div className="bg-jupiter-gris-50 rounded-lg py-2">
                    <p className="text-jupiter-or font-bold">Pro</p>
                    <p className="text-xs text-jupiter-gris-600">Négociation</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};