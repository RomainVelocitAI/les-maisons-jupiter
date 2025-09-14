'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Home, Clock, Star, Sparkles, Heart, Shield, Users, Award, ChevronRight, Phone, Calendar } from 'lucide-react';
import { Button } from '../ui/Button';

export const StorySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);
  
  // Timeline state
  const [activeTimeline, setActiveTimeline] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const isTimelineInView = useInView(timelineRef, { once: false, amount: 0.5 });

  useEffect(() => {
    if (isTimelineInView) {
      const interval = setInterval(() => {
        setActiveTimeline((prev) => (prev + 1) % 3);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isTimelineInView]);

  const timelineData = [
    {
      title: "Conception de votre maison",
      subtitle: "Plans sur mesure",
      description: "Maison créole, moderne, plain-pied ou étage : nous dessinons votre maison idéale",
      icon: Sparkles
    },
    {
      title: "Construction de votre maison",
      subtitle: "Artisans locaux qualifiés",
      description: "Structure béton armé, toiture anticyclonique, finitions soignées : votre maison prend forme",
      icon: Home
    },
    {
      title: "Votre maison terminée",
      subtitle: "Clés en main",
      description: "Emménagez dans votre nouvelle maison avec garanties décennales et service après-vente",
      icon: Heart
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Maisons garanties 10 ans",
      description: "Structure, toiture, étanchéité : tout est protégé"
    },
    {
      icon: Users,
      title: "Maisons personnalisées",
      description: "Chaque maison est conçue selon vos besoins"
    },
    {
      icon: Award,
      title: "Construction de qualité",
      description: "Matériaux premium et finitions impeccables"
    },
    {
      icon: Star,
      title: "Maisons tropicales",
      description: "Ventilation naturelle et protection solaire"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-jupiter-gris-50 to-white">
      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-jupiter-or/20 rounded-full"
            initial={{ 
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`
            }}
            animate={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container-responsive relative z-10">
        {/* Part 1: Histoire & Vision */}
        <motion.div 
          style={{ y: textY }}
          className="text-center mb-24"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-5xl font-serif text-jupiter-noir mb-6"
          >
            27 ans de construction de maisons, <span className="text-jupiter-or">votre projet en mains expertes</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-jupiter-gris-600 max-w-3xl mx-auto mb-12"
          >
            <span className="font-semibold text-jupiter-noir">Plus de 27 ans à construire des maisons</span> adaptées au climat tropical de La Réunion. 
            <span className="text-jupiter-or font-semibold">Chaque maison est unique</span>, conçue pour votre famille et votre mode de vie.
          </motion.p>

          {/* Team image with parallax */}
          <motion.div 
            style={{ y: backgroundY }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <motion.img
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              src="https://replicate.delivery/xezq/FzBp4cZ4v4LELt9lXI4feBvrelcx8Vy9hWE4aDX82zpewUTVB/tmp04htt977.jpeg"
              alt="Équipe Les Maisons Jupiter"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-jupiter-noir/50 to-transparent" />
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute bottom-8 left-8 text-white"
            >
              <p className="text-2xl font-semibold">27 ans de construction</p>
              <p className="text-lg opacity-90">Maisons individuelles à Saint-Louis</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Part 2: Timeline - Imaginez */}
        <div ref={timelineRef} className="mb-24">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl lg:text-4xl font-serif text-center text-jupiter-noir mb-16"
          >
            Comment nous construisons votre maison
          </motion.h3>

          <div className="grid lg:grid-cols-3 gap-8">
            {timelineData.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Timeline card */}
                  <motion.div
                    animate={{
                      scale: activeTimeline === index ? 1.05 : 1,
                      boxShadow: activeTimeline === index 
                        ? "0 20px 40px rgba(198, 180, 55, 0.2)" 
                        : "0 10px 20px rgba(0, 0, 0, 0.1)"
                    }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-2xl p-8 border border-jupiter-gris-200 relative overflow-hidden"
                  >
                    {/* Active indicator */}
                    {activeTimeline === index && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute top-0 left-0 right-0 h-1 bg-jupiter-or"
                      />
                    )}

                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                      activeTimeline === index 
                        ? 'bg-jupiter-or text-white' 
                        : 'bg-jupiter-gris-100 text-jupiter-gris-600'
                    }`}>
                      <Icon size={28} />
                    </div>

                    <h4 className="text-2xl font-semibold text-jupiter-noir mb-2">
                      {item.title}
                    </h4>
                    <p className="text-jupiter-or font-medium mb-3">
                      {item.subtitle}
                    </p>
                    <p className="text-jupiter-gris-600">
                      {item.description}
                    </p>

                    {/* Timeline dot */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                      <div className={`w-4 h-4 rounded-full ${
                        activeTimeline === index 
                          ? 'bg-jupiter-or' 
                          : 'bg-jupiter-gris-300'
                      }`} />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Timeline line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-jupiter-gris-200 -z-10" />
          
          {/* CTA après la timeline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-16"
          >
            <p className="text-lg text-jupiter-gris-600 mb-6">
              Discutons de votre future maison
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary" 
                size="lg"
                className="bg-jupiter-or hover:bg-jupiter-or-fonce text-white shadow-lg shadow-jupiter-or/20"
              >
                <Calendar className="mr-2" size={20} />
                <span>Prendre rendez-vous</span>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-jupiter-or text-jupiter-noir hover:bg-jupiter-or/10"
              >
                <span>En savoir plus</span>
                <ChevronRight className="ml-2" size={20} />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Part 3: Image Grid with hover effects */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  src="https://replicate.delivery/xezq/UHJeUl56y72xKyxMfSrd1xjdzjBl04SfglpE2YHKEA92YqpqA/tmpo446hqjx.jpeg"
                  alt="Famille heureuse"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jupiter-noir/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute bottom-6 left-6 text-white"
                >
                  <p className="text-2xl font-semibold">Votre maison, notre métier</p>
                  <p className="text-lg opacity-90">Constructeur de maisons à Saint-Louis</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  src="https://replicate.delivery/xezq/dZ9Gvau6vb6dC1BuNvcBbxnr10ofKafg0tTlhL0XecuPZqpqA/tmp8hr7xtqa.jpeg"
                  alt="Quartier résidentiel"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jupiter-noir/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute bottom-6 left-6 text-white"
                >
                  <p className="text-2xl font-semibold">Maisons créoles et modernes</p>
                  <p className="text-lg opacity-90">Adaptées au climat de La Réunion</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Part 4: Values with floating cards */}
        <div>
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl lg:text-4xl font-serif text-center text-jupiter-noir mb-12"
          >
            Pourquoi construire avec nous
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -10,
                    rotateY: 5,
                    rotateX: 5,
                  }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-jupiter-gris-200"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="w-14 h-14 rounded-full bg-jupiter-or/10 flex items-center justify-center mb-4">
                    <Icon className="text-jupiter-or" size={24} />
                  </div>
                  <h4 className="text-lg font-semibold text-jupiter-noir mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-jupiter-gris-600">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Quality detail image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-16 relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://replicate.delivery/xezq/9Za0Fkg1lKrHFp6PTErt9akxpyTu0WwruMHV1tIk25INTNVF/tmp4_6aybto.jpeg"
              alt="Détails architecturaux"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-jupiter-noir/70 to-transparent" />
            <div className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white max-w-lg">
              <p className="text-3xl font-serif mb-4">Votre maison construite avec passion</p>
              <p className="text-lg opacity-90">
                Béton armé, toiture anticyclonique, isolation thermique : 
                chaque maison est construite pour durer générations.
              </p>
              <Button 
                variant="outline" 
                size="md"
                className="mt-4 border-white text-white hover:bg-white/20"
              >
                <span>Voir nos maisons réalisées</span>
                <ChevronRight className="ml-2" size={18} />
              </Button>
            </div>
          </motion.div>
          
          {/* CTA final puissant */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-20"
          >
            <div className="bg-jupiter-noir rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-serif mb-4">
                Prêt à construire votre maison ?
              </h3>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Parlons de votre future maison : style, nombre de chambres, terrasse, piscine.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="flex items-center gap-3">
                  <Phone className="text-jupiter-or" size={24} />
                  <div className="text-left">
                    <p className="text-sm opacity-70">Appelez-nous</p>
                    <p className="text-xl font-semibold">0693 40 89 90</p>
                  </div>
                </div>
                <div className="h-12 w-px bg-white/20 hidden sm:block" />
                <Button 
                  variant="primary" 
                  size="lg"
                  className="bg-jupiter-or hover:bg-jupiter-or-fonce text-white shadow-lg"
                >
                  <span>Demander une étude gratuite</span>
                  <ChevronRight className="ml-2" size={20} />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};