'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import CountUp from 'react-countup';
import { useParallax } from '@/lib/animations';

const stats = [
  {
    value: 27,
    suffix: " ans",
    label: "D'expérience",
    description: "Un savoir-faire reconnu"
  },
  {
    value: 100,
    suffix: "%",
    label: "Accompagnement",
    description: "De A à Z garanti"
  },
  {
    value: 0,
    suffix: "€",
    label: "Permis gratuit",
    description: "Service inclus"
  },
  {
    value: 1,
    suffix: "",
    label: "Interlocuteur",
    description: "Contact privilégié"
  }
];

export const StatsSection: React.FC = () => {
  return (
    <section className="section-padding bg-jupiter-noir relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #c6b437,
            #c6b437 10px,
            transparent 10px,
            transparent 20px
          )`
        }} />
      </div>

      <div className="container-responsive relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-h1 font-serif text-white mb-4">
              Pourquoi nous choisir ?
            </h2>
            <p className="text-xl text-jupiter-gris-300">
              <span className="font-semibold text-white">Notre engagement et notre expertise au service de votre projet.</span> Des services concrets et transparents.
            </p>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
              className="text-center group cursor-pointer"
            >
              <motion.div 
                className="relative"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.15 + 0.3,
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }}
              >
                {/* Glow effect behind number */}
                <div className="absolute inset-0 bg-jupiter-or/20 blur-3xl group-hover:bg-jupiter-or/30 transition-colors duration-300" />
                
                <div className="text-5xl lg:text-6xl font-bold text-jupiter-or mb-2 relative">
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  <span>{stat.suffix}</span>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.5 }}
              >
                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-jupiter-or transition-colors duration-300">
                  {stat.label}
                </h3>
                <p className="text-jupiter-gris-400 text-sm group-hover:text-jupiter-gris-300 transition-colors duration-300">
                  {stat.description}
                </p>
              </motion.div>
              
              {/* Decorative line that animates on hover */}
              <motion.div 
                className="h-0.5 bg-jupiter-or mt-4 mx-auto"
                initial={{ width: 0 }}
                whileInView={{ width: "50px" }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.7, duration: 0.5 }}
                whileHover={{ width: "100px" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};