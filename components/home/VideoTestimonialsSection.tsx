'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MasonryGrid } from '@/components/image-testimonial-grid';
import { Play, Star, Quote, X } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Marie & Jean Dupont',
    location: 'Saint-Denis',
    rating: 5,
    project: 'Villa Moderne 150m²',
    date: 'Livraison 2024',
    quote: 'Une équipe exceptionnelle qui nous a accompagnés du début à la fin. Notre maison est exactement comme nous l\'avions rêvée.',
    thumbnail: '/testimonial-1-thumb.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 2,
    name: 'Patrick Rivière',
    location: 'Saint-Pierre',
    rating: 5,
    project: 'Maison Créole 120m²',
    date: 'Livraison 2024',
    quote: 'Le respect des délais et du budget était crucial pour nous. Les Maisons Jupiter a tenu toutes ses promesses.',
    thumbnail: '/testimonial-2-thumb.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 3,
    name: 'Sophie Laurent',
    location: 'Saint-Paul',
    rating: 5,
    project: 'Maison F4 110m²',
    date: 'Livraison 2023',
    quote: 'L\'accompagnement financier a été déterminant. Ils nous ont aidés à obtenir le meilleur prêt possible.',
    thumbnail: '/testimonial-3-thumb.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 4,
    name: 'Thomas & Claire Martin',
    location: 'Le Tampon',
    rating: 5,
    project: 'Villa avec Piscine 180m²',
    date: 'Livraison 2024',
    quote: 'La recherche de terrain était notre plus grand défi. L\'équipe nous a trouvé l\'emplacement parfait !',
    thumbnail: '/testimonial-4-thumb.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 5,
    name: 'Robert Payet',
    location: 'Saint-Joseph',
    rating: 5,
    project: 'Maison Plain-Pied 100m²',
    date: 'Livraison 2023',
    quote: '27 ans d\'expérience, ça se voit ! Qualité de construction irréprochable et garanties solides.',
    thumbnail: '/testimonial-5-thumb.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 6,
    name: 'Émilie & Marc Fontaine',
    location: 'Saint-Leu',
    rating: 5,
    project: 'Maison Moderne 140m²',
    date: 'Livraison 2024',
    quote: 'Un suivi personnalisé du début à la fin. On sent qu\'ils ont vraiment à cœur la satisfaction de leurs clients.',
    thumbnail: '/testimonial-6-thumb.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  }
];

const TestimonialCard = ({ testimonial, onClick }: { testimonial: typeof testimonials[0], onClick: () => void }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer group"
      onClick={onClick}
    >
      {/* Video Thumbnail */}
      <div className="relative aspect-video bg-jupiter-gris-100">
        <img
          src={testimonial.thumbnail}
          alt={`Témoignage de ${testimonial.name}`}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://via.placeholder.com/600x400/f3f4f6/9ca3af?text=Témoignage+${testimonial.id}`;
          }}
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center"
          >
            <Play size={28} className="text-jupiter-or ml-1" fill="currentColor" />
          </motion.div>
        </div>
        
        {/* Quote Icon */}
        <div className="absolute top-4 left-4 w-10 h-10 bg-jupiter-or rounded-full flex items-center justify-center">
          <Quote size={20} className="text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Rating */}
        <div className="flex gap-1 mb-3">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} size={18} className="text-jupiter-or fill-jupiter-or" />
          ))}
        </div>

        {/* Quote */}
        <p className="text-jupiter-gris-700 italic mb-4 line-clamp-3">
          "{testimonial.quote}"
        </p>

        {/* Author Info */}
        <div className="border-t pt-4">
          <h4 className="font-bold text-jupiter-noir">{testimonial.name}</h4>
          <p className="text-sm text-jupiter-gris-600">{testimonial.location}</p>
          <div className="flex items-center justify-between mt-2">
            <span className="text-sm font-semibold text-jupiter-or">{testimonial.project}</span>
            <span className="text-xs text-jupiter-gris-500">{testimonial.date}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const VideoTestimonialsSection: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<typeof testimonials[0] | null>(null);

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
            Ils Nous Font <span className="text-jupiter-or">Confiance</span>
          </h2>
          <p className="text-xl text-jupiter-gris-600">
            Découvrez les témoignages vidéos de nos clients satisfaits. 
            Plus de 500 familles heureuses à La Réunion.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <MasonryGrid columns={3} gap={6} className="max-w-7xl mx-auto">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              onClick={() => setSelectedVideo(testimonial)}
            />
          ))}
        </MasonryGrid>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 gap-8 max-w-md mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-jupiter-or">27 ans</div>
            <div className="text-jupiter-gris-600">D'expérience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-jupiter-or">10 ans</div>
            <div className="text-jupiter-gris-600">De garantie</div>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative bg-white rounded-2xl overflow-hidden max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
            >
              <X size={24} className="text-jupiter-noir" />
            </button>

            {/* Video Container */}
            <div className="aspect-video bg-black">
              <iframe
                src={selectedVideo.videoUrl}
                title={`Témoignage de ${selectedVideo.name}`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Video Info */}
            <div className="p-6 bg-white">
              <h3 className="text-2xl font-bold text-jupiter-noir mb-2">
                {selectedVideo.name}
              </h3>
              <p className="text-jupiter-gris-600 mb-4">
                {selectedVideo.location} • {selectedVideo.project} • {selectedVideo.date}
              </p>
              <p className="text-jupiter-gris-700 italic">
                "{selectedVideo.quote}"
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};