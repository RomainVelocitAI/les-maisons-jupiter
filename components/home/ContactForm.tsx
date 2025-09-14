'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  User,
  MessageSquare,
  Home,
  Calendar,
  CheckCircle
} from 'lucide-react';
import { Button } from '../ui/Button';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    hasLand: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici on pourrait envoyer les données à un serveur
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Réinitialiser après 5 secondes
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: '',
        hasLand: ''
      });
    }, 5000);
  };

  return (
    <section className="section-padding bg-gradient-to-b from-white to-jupiter-gris-50">
      <div className="container-responsive">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-h1 font-serif text-jupiter-noir mb-4">
            Concrétisons <span className="text-jupiter-or">Votre Projet</span>
          </h2>
          <p className="text-xl text-jupiter-gris-600">
            Contactez-nous pour obtenir un devis gratuit et personnalisé. 
            Notre équipe est là pour répondre à toutes vos questions.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-8 border border-jupiter-gris-200">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* Nom */}
                    <div>
                      <label className="block text-jupiter-gris-700 font-semibold mb-2">
                        <User className="inline mr-2" size={18} />
                        Nom et Prénom *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-xl border border-jupiter-gris-200 focus:border-jupiter-or focus:outline-none"
                        placeholder="Jean Dupont"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-jupiter-gris-700 font-semibold mb-2">
                        <Mail className="inline mr-2" size={18} />
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-xl border border-jupiter-gris-200 focus:border-jupiter-or focus:outline-none"
                        placeholder="jean.dupont@email.com"
                      />
                    </div>

                    {/* Téléphone */}
                    <div>
                      <label className="block text-jupiter-gris-700 font-semibold mb-2">
                        <Phone className="inline mr-2" size={18} />
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-xl border border-jupiter-gris-200 focus:border-jupiter-or focus:outline-none"
                        placeholder="0692 12 34 56"
                      />
                    </div>

                    {/* Type de projet */}
                    <div>
                      <label className="block text-jupiter-gris-700 font-semibold mb-2">
                        <Home className="inline mr-2" size={18} />
                        Type de projet *
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-xl border border-jupiter-gris-200 focus:border-jupiter-or focus:outline-none"
                      >
                        <option value="">Sélectionnez...</option>
                        <option value="maison-individuelle">Maison individuelle</option>
                        <option value="villa-luxe">Villa de luxe</option>
                        <option value="maison-piscine">Maison avec piscine</option>
                        <option value="renovation">Rénovation/Extension</option>
                        <option value="autre">Autre projet</option>
                      </select>
                    </div>

                    {/* Budget */}
                    <div>
                      <label className="block text-jupiter-gris-700 font-semibold mb-2">
                        Budget estimé
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full p-3 rounded-xl border border-jupiter-gris-200 focus:border-jupiter-or focus:outline-none"
                      >
                        <option value="">Sélectionnez...</option>
                        <option value="150-200">150 000€ - 200 000€</option>
                        <option value="200-250">200 000€ - 250 000€</option>
                        <option value="250-300">250 000€ - 300 000€</option>
                        <option value="300-400">300 000€ - 400 000€</option>
                        <option value="400+">Plus de 400 000€</option>
                      </select>
                    </div>

                    {/* Délai */}
                    <div>
                      <label className="block text-jupiter-gris-700 font-semibold mb-2">
                        <Calendar className="inline mr-2" size={18} />
                        Délai souhaité
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full p-3 rounded-xl border border-jupiter-gris-200 focus:border-jupiter-or focus:outline-none"
                      >
                        <option value="">Sélectionnez...</option>
                        <option value="immediate">Dès que possible</option>
                        <option value="3-months">Dans 3 mois</option>
                        <option value="6-months">Dans 6 mois</option>
                        <option value="1-year">Dans 1 an</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  {/* Terrain */}
                  <div className="mb-6">
                    <label className="block text-jupiter-gris-700 font-semibold mb-2">
                      <MapPin className="inline mr-2" size={18} />
                      Avez-vous déjà un terrain ?
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="hasLand"
                          value="yes"
                          checked={formData.hasLand === 'yes'}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <span>Oui, j'ai un terrain</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="hasLand"
                          value="no"
                          checked={formData.hasLand === 'no'}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <span>Non, je cherche un terrain</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="hasLand"
                          value="maybe"
                          checked={formData.hasLand === 'maybe'}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <span>J'hésite encore</span>
                      </label>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label className="block text-jupiter-gris-700 font-semibold mb-2">
                      <MessageSquare className="inline mr-2" size={18} />
                      Votre message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full p-3 rounded-xl border border-jupiter-gris-200 focus:border-jupiter-or focus:outline-none resize-none"
                      placeholder="Décrivez votre projet, vos besoins spécifiques, vos questions..."
                    />
                  </div>

                  {/* Consent */}
                  <div className="mb-6">
                    <label className="flex items-start cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        className="mt-1 mr-3"
                      />
                      <span className="text-sm text-jupiter-gris-600">
                        J'accepte que Les Maisons Jupiter utilise mes données pour me recontacter concernant mon projet. 
                        Vos données sont traitées avec la plus grande confidentialité.
                      </span>
                    </label>
                  </div>

                  {/* Submit */}
                  <div className="flex justify-center">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="bg-jupiter-or hover:bg-jupiter-or-fonce text-white"
                    >
                      <Send className="mr-2" size={20} />
                      Envoyer ma demande
                    </Button>
                  </div>
                </form>
              ) : (
                /* Success Message */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-3xl shadow-xl p-12 text-center"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-green-600" size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-jupiter-noir mb-4">
                    Merci pour votre demande !
                  </h3>
                  <p className="text-xl text-jupiter-gris-600 mb-6">
                    Nous avons bien reçu votre message. Notre équipe vous contactera dans les 24 à 48 heures.
                  </p>
                  <p className="text-jupiter-gris-500">
                    À très bientôt pour concrétiser votre projet de maison !
                  </p>
                </motion.div>
              )}
            </motion.div>
        </div>

      </div>
    </section>
  );
};