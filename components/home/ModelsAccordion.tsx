'use client';

import React from 'react';
import { motion } from 'framer-motion';

const models = [
  {
    id: 'creole',
    title: 'Maison Créole',
    subtitle: '3 chambres • 120 m²',
    description: 'Architecture traditionnelle créole avec varangue, toiture en tôle et jardin tropical. Parfaite pour les familles recherchant l\'authenticité réunionnaise.',
    features: ['Plain-pied', 'Varangue spacieuse', 'Jardin tropical', 'Construction parasismique'],
    image: '/maison-creole.jpg',
    price: 'À partir de 250 000€'
  },
  {
    id: 'moderne',
    title: 'Villa Moderne',
    subtitle: '4 chambres • 150 m²',
    description: 'Design contemporain avec grandes baies vitrées, piscine et terrasse panoramique. Le luxe tropical pour votre famille.',
    features: ['Étage avec vue', 'Piscine privée', 'Terrasse 40m²', 'Garage double'],
    image: '/villa-moderne.jpg',
    price: 'À partir de 350 000€'
  },
  {
    id: 'f4',
    title: 'Maison F4',
    subtitle: 'Plain-pied • 110 m²',
    description: 'Maison familiale optimisée avec 3 chambres, cuisine ouverte et cellier. Confort et praticité au quotidien.',
    features: ['Cuisine ouverte', 'Cellier', 'Terrasse couverte', 'Jardin clôturé'],
    image: '/maison-f4.jpg',
    price: 'À partir de 220 000€'
  }
];

export const ModelsAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <section className="section-padding bg-gradient-to-b from-white to-jupiter-gris-50">
      <div className="container-responsive">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-h1 font-serif text-jupiter-noir mb-4">
            Nos Modèles <span className="text-jupiter-or">Phares</span>
          </h2>
          <p className="text-xl text-jupiter-gris-600">
            Découvrez nos maisons les plus populaires, conçues pour le climat tropical de La Réunion.
            Survolez les images pour explorer chaque modèle.
          </p>
        </motion.div>

        {/* Interactive Accordion */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images Accordion */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex gap-4"
          >
            {models.map((model, index) => (
              <div
                key={model.id}
                className={`
                  relative h-[450px] rounded-2xl overflow-hidden cursor-pointer
                  transition-all duration-700 ease-in-out
                  ${activeIndex === index ? 'w-[400px]' : 'w-[60px]'}
                `}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <img
                  src={model.image}
                  alt={model.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span
                  className={`
                    absolute text-white font-bold text-lg whitespace-nowrap transition-all duration-500
                    ${
                      activeIndex === index
                        ? 'bottom-6 left-1/2 -translate-x-1/2 rotate-0'
                        : 'w-auto text-left bottom-24 left-1/2 -translate-x-1/2 rotate-90'
                    }
                  `}
                >
                  {model.title}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Content Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              key={models[activeIndex].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-3xl font-serif text-jupiter-noir mb-2">
                  {models[activeIndex].title}
                </h3>
                <p className="text-jupiter-or font-semibold mb-4">
                  {models[activeIndex].subtitle}
                </p>
                <p className="text-jupiter-gris-600 mb-6">
                  {models[activeIndex].description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {models[activeIndex].features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-jupiter-or rounded-full" />
                      <span className="text-jupiter-gris-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Price */}
                <div className="border-t pt-6">
                  <p className="text-2xl font-bold text-jupiter-noir mb-4">
                    {models[activeIndex].price}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary w-full"
                  >
                    Demander un devis gratuit
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Model Selector */}
            <div className="flex gap-4">
              {models.map((model, index) => (
                <button
                  key={model.id}
                  onClick={() => setActiveIndex(index)}
                  className={`flex-1 py-3 px-4 rounded-lg transition-all ${
                    activeIndex === index
                      ? 'bg-jupiter-or text-white'
                      : 'bg-white text-jupiter-gris-600 hover:bg-jupiter-or/10'
                  }`}
                >
                  <span className="font-semibold">{model.title}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Button - Voir tous les modèles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <motion.button
            className="btn-primary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => console.log('Navigation vers la page des modèles')}
          >
            Voir tous nos modèles
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </motion.button>
          <p className="text-jupiter-gris-600 mt-4">
            Découvrez notre catalogue complet de maisons adaptées à tous les budgets
          </p>
        </motion.div>
      </div>
    </section>
  );
};