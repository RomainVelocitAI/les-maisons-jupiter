'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { ChevronRight, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Images locales pour le carousel
  const images = [
    '/hero-3.jpeg', // Plan de maison
    '/hero-2.jpeg', // Vue isométrique 3D
    '/hero-1.jpeg', // Vue extérieure réelle
  ];

  const imageLabels = [
    'Plan architectural',
    'Visualisation 3D',
    'Votre future maison'
  ];

  // Rotation automatique toutes les 4 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-jupiter-gris-50 via-white to-jupiter-gris-50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-jupiter-or/5 to-transparent" />
        {/* Light effect */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-jupiter-or/10 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-jupiter-or/10 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="container-responsive relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-jupiter-noir"
          >
            {/* Welcome Badge */}
            <div className="inline-flex items-center gap-2 bg-jupiter-or/10 border border-jupiter-or/30 rounded-full px-5 py-2.5 mb-6 shadow-sm">
              <span className="text-jupiter-or text-sm font-bold">Plus de 27 ans d'expérience - Constructeur certifié</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl font-serif mb-6 leading-tight">
              <motion.span 
                className="text-jupiter-noir block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Votre maison sur mesure
              </motion.span>
              <motion.span 
                className="block mt-2 text-jupiter-or"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Conçue pour votre famille
              </motion.span>
              <motion.span 
                className="block mt-2 text-jupiter-noir text-2xl lg:text-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Construite avec passion depuis 27 ans
              </motion.span>
            </h1>

            {/* Subheadline */}
            <motion.p 
              className="text-xl text-jupiter-gris-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <span className="font-semibold text-jupiter-noir">Constructeur de maisons individuelles depuis plus de 27 ans à La Réunion.</span> 
              {" "}Nous concevons et construisons des maisons qui correspondent à votre mode de vie : 
              maisons traditionnelles, contemporaines, avec piscine, terrasse, jardin tropical. <span className="text-jupiter-or font-semibold">Chaque maison est unique, comme votre famille.</span>
            </motion.p>

            {/* Benefits */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-sm border border-jupiter-gris-200">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-jupiter-or flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="text-white" size={18} />
                  </div>
                  <div>
                    <span className="text-jupiter-noir font-semibold block">Plans personnalisés offerts</span>
                    <span className="text-jupiter-gris-600 text-sm">Conception sur mesure de votre maison idéale</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-jupiter-or flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="text-white" size={18} />
                  </div>
                  <div>
                    <span className="text-jupiter-noir font-semibold block">Construction de qualité supérieure</span>
                    <span className="text-jupiter-gris-600 text-sm">Matériaux premium et finitions soignées</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-jupiter-or flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="text-white" size={18} />
                  </div>
                  <div>
                    <span className="text-jupiter-noir font-semibold block">Garanties décennales complètes</span>
                    <span className="text-jupiter-gris-600 text-sm">Votre maison protégée pendant 10 ans</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="primary" 
                size="lg"
                className="bg-jupiter-or hover:bg-jupiter-or-fonce text-white border-0 shadow-lg shadow-jupiter-or/20"
              >
                <span>Concevoir ma maison sur mesure</span>
                <ChevronRight className="ml-2" size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-jupiter-or text-jupiter-noir hover:bg-jupiter-or/10"
              >
                <span>Voir nos réalisations</span>
              </Button>
            </div>

            {/* Trust Signal */}
            <div className="mt-8 pt-8 border-t border-jupiter-gris-200">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-jupiter-or border-2 border-white flex items-center justify-center">
                      <span className="text-white text-xs font-semibold">⭐</span>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm text-jupiter-gris-600">
                    <span className="font-bold text-jupiter-noir">Plus de 27 ans d'expérience</span> à votre service
                  </p>
                  <div className="flex gap-2 mt-2">
                    <span className="inline-flex items-center gap-1 bg-jupiter-or/10 text-jupiter-or px-2 py-1 rounded-full text-xs font-semibold">
                      Constructeur certifié • Saint-Louis
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Animated Image Carousel */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Image Container with Animation */}
              <div className="aspect-[4/3] bg-white rounded-3xl shadow-2xl overflow-hidden relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    {/* Real images with labels */}
                    <img 
                      src={images[currentImageIndex]}
                      alt={imageLabels[currentImageIndex]}
                      className="w-full h-full object-cover"
                    />
                    {/* Label overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <p className="text-2xl font-serif text-white">
                        {imageLabels[currentImageIndex]}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Progress Dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'w-8 bg-jupiter-or' 
                          : 'bg-jupiter-or/40 hover:bg-jupiter-or/60'
                      }`}
                      aria-label={`Voir ${imageLabels[index]}`}
                    />
                  ))}
                </div>
              </div>

              {/* Floating elements */}
              <motion.div 
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-4 border border-jupiter-gris-200"
              >
                <div className="flex items-center gap-2">
                  <div>
                    <p className="text-jupiter-or font-bold text-xl">GRATUIT</p>
                    <p className="text-jupiter-gris-600 text-xs">Permis inclus</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ 
                  y: [0, 10, 0],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
                className="absolute bottom-4 right-4 bg-jupiter-noir rounded-2xl shadow-xl p-4"
              >
                <div className="flex items-center gap-2">
                  <div>
                    <p className="text-jupiter-or font-bold text-xl">27 ans</p>
                    <p className="text-white text-xs opacity-90">EXPÉRIENCE</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};