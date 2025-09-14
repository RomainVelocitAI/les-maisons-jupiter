'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ReactLenis from 'lenis/react';
import { 
  Search, 
  FileText, 
  PenTool, 
  HardHat, 
  Key,
  CheckCircle 
} from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Premier Contact',
    description: 'Rencontrez notre équipe et partagez votre vision. Nous écoutons vos besoins, votre budget et vos rêves pour créer le projet parfait.',
    icon: Search,
    highlight: 'Consultation gratuite',
    image: '/step-1.jpg'
  },
  {
    number: '02',
    title: 'Étude & Conception',
    description: 'Nos architectes créent les plans sur mesure de votre future maison. Validation du permis de construire et de tous les aspects techniques.',
    icon: PenTool,
    highlight: 'Plans personnalisés',
    image: '/step-2.jpg'
  },
  {
    number: '03',
    title: 'Financement',
    description: 'Nous vous accompagnons dans le montage de votre dossier de prêt. Négociation avec les banques pour obtenir les meilleures conditions.',
    icon: FileText,
    highlight: 'Accompagnement bancaire',
    image: '/step-3.jpg'
  },
  {
    number: '04',
    title: 'Construction',
    description: 'Début des travaux avec nos équipes qualifiées. Suivi régulier du chantier et respect des délais convenus.',
    icon: HardHat,
    highlight: 'Suivi personnalisé',
    image: '/step-4.jpg'
  },
  {
    number: '05',
    title: 'Livraison',
    description: 'Remise des clés de votre nouvelle maison. Visite complète, explications et début de vos garanties 10 ans.',
    icon: Key,
    highlight: 'Garanties incluses',
    image: '/step-5.jpg'
  }
];

const StepRow = ({
  i,
  number,
  title,
  description,
  icon: Icon,
  highlight,
  image,
  progress,
  range,
  targetScale,
}: {
  i: number;
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  highlight: string;
  image: string;
  progress: any;
  range: [number, number];
  targetScale: number;
}) => {
  const container = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  const isEven = i % 2 === 0;

  return (
    <div ref={container} className="sticky top-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 15 + 200}px)`,
        }}
        className="relative -top-1/4 origin-top w-full max-w-7xl"
      >
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
          {/* Text Card */}
          <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="rounded-2xl bg-white border border-jupiter-gris-200 shadow-xl h-full">
              <div className="p-8 lg:p-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="text-4xl lg:text-5xl font-bold text-jupiter-or">
                      {number}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-serif text-jupiter-noir mt-2">
                      {title}
                    </h3>
                  </div>
                  <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-jupiter-or to-jupiter-or-fonce rounded-2xl flex items-center justify-center shadow-lg">
                    <Icon size={28} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p className="text-jupiter-gris-600 text-base lg:text-lg leading-relaxed">
                    {description}
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-4 flex items-center gap-2">
                  <CheckCircle size={20} className="text-jupiter-or" />
                  <span className="text-sm font-semibold text-jupiter-or">
                    {highlight}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className="rounded-2xl overflow-hidden shadow-xl h-[280px] lg:h-[360px] bg-jupiter-gris-100">
              <img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://via.placeholder.com/600x400/f3f4f6/9ca3af?text=Étape+${number}`;
                }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const StepsTwoColumns: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <section className="bg-gradient-to-b from-jupiter-gris-50 to-white">
      {/* Section Header */}
      <div className="container-responsive pt-16 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-h1 font-serif text-jupiter-noir mb-4">
            Votre Projet en <span className="text-jupiter-or">5 Étapes</span>
          </h2>
          <p className="text-xl text-jupiter-gris-600">
            De la première rencontre à la remise des clés, nous vous accompagnons 
            à chaque étape de votre projet de construction.
          </p>
        </motion.div>
      </div>

      {/* Scrolling Cards */}
      <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
        <main
          ref={container}
          className="relative flex w-full flex-col items-center justify-center 
                     pb-[50vh] pt-[5vh] 
                     sm:pb-[60vh] sm:pt-[8vh] 
                     lg:pb-[70vh] lg:pt-[10vh]"
        >
          {steps.map((step, i) => {
            const targetScale = Math.max(0.7, 1 - (steps.length - i - 1) * 0.06);
            return (
              <StepRow
                key={`step_${i}`}
                i={i}
                {...step}
                progress={scrollYProgress}
                range={[i * 0.2, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </main>
      </ReactLenis>

      {/* Bottom CTA */}
      <div className="container-responsive pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-jupiter-gris-600 mb-6">
            Prêt à démarrer votre projet ? Contactez-nous dès aujourd'hui.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Commencer mon projet
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};