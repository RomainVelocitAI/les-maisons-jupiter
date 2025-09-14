'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Home, MapPin, Sparkles, Euro, Info } from 'lucide-react';
import { Button } from '../ui/Button';

// Prix moyens du terrain par m² selon les villes
const TERRAIN_PRICES: { [key: string]: number } = {
  'Saint-Denis': 366,
  'Saint-Pierre': 250,
  'Saint-Paul': 280,
  'Le Tampon': 284,
  'Saint-Louis': 240,
  'Saint-Joseph': 242,
  'Saint-Leu': 320,
  'Saint-André': 220,
  'Sainte-Marie': 290,
  'La Possession': 310,
  'Autres communes': 250,
};

// Configuration des surfaces selon le nombre de pièces
const ROOM_SIZES: { [key: string]: { min: number; avg: number; max: number } } = {
  'T2 (1 chambre)': { min: 50, avg: 60, max: 70 },
  'T3 (2 chambres)': { min: 70, avg: 85, max: 100 },
  'T4 (3 chambres)': { min: 90, avg: 110, max: 130 },
  'T5 (4 chambres)': { min: 110, avg: 135, max: 160 },
  'T6+ (5+ chambres)': { min: 140, avg: 170, max: 200 },
};

export const PriceCalculator: React.FC = () => {
  const [hasLand, setHasLand] = useState<boolean | null>(null);
  const [selectedCity, setSelectedCity] = useState('');
  const [landArea, setLandArea] = useState('');
  const [roomType, setRoomType] = useState('');
  const [houseArea, setHouseArea] = useState('');
  const [finishLevel, setFinishLevel] = useState<'standard' | 'confort' | 'premium'>('confort');
  const [showResults, setShowResults] = useState(false);
  const [calculatedPrice, setCalculatedPrice] = useState({
    terrain: 0,
    construction: 0,
    total: 0,
  });

  // Prix de construction par m²
  const CONSTRUCTION_PRICES = {
    standard: 1500,
    confort: 1750,
    premium: 2000,
  };

  // Mettre à jour la surface de la maison quand le type de pièces change
  useEffect(() => {
    if (roomType && ROOM_SIZES[roomType]) {
      setHouseArea(ROOM_SIZES[roomType].avg.toString());
    }
  }, [roomType]);

  const calculatePrice = () => {
    let terrainPrice = 0;
    let constructionPrice = 0;

    // Calcul du prix du terrain
    if (!hasLand && selectedCity && landArea) {
      const landAreaNum = parseFloat(landArea);
      const pricePerM2 = TERRAIN_PRICES[selectedCity] || 250;
      terrainPrice = landAreaNum * pricePerM2;
    }

    // Calcul du prix de construction
    if (houseArea) {
      const houseAreaNum = parseFloat(houseArea);
      const pricePerM2 = CONSTRUCTION_PRICES[finishLevel];
      constructionPrice = houseAreaNum * pricePerM2;
    }

    setCalculatedPrice({
      terrain: terrainPrice,
      construction: constructionPrice,
      total: terrainPrice + constructionPrice,
    });
    setShowResults(true);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', { 
      style: 'currency', 
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const resetCalculator = () => {
    setHasLand(null);
    setSelectedCity('');
    setLandArea('');
    setRoomType('');
    setHouseArea('');
    setFinishLevel('confort');
    setShowResults(false);
    setCalculatedPrice({ terrain: 0, construction: 0, total: 0 });
  };

  return (
    <section className="section-padding bg-gradient-to-b from-jupiter-gris-50 to-white">
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
            Calculez le Budget de <span className="text-jupiter-or">Votre Projet</span>
          </h2>
          <p className="text-xl text-jupiter-gris-600">
            Estimez le coût de votre future maison en quelques clics. 
            Notre calculateur vous donne une estimation personnalisée selon vos besoins.
          </p>
        </motion.div>

        {/* Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-jupiter-gris-200">
            {!showResults ? (
              <>
                {/* Step 1: Terrain */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-jupiter-noir mb-6 flex items-center gap-2">
                    <MapPin className="text-jupiter-or" size={28} />
                    Votre Terrain
                  </h3>
                  
                  <div className="mb-4">
                    <p className="text-jupiter-gris-700 mb-3">Avez-vous déjà un terrain ?</p>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        onClick={() => setHasLand(true)}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          hasLand === true 
                            ? 'border-jupiter-or bg-jupiter-or/10 text-jupiter-noir' 
                            : 'border-jupiter-gris-200 hover:border-jupiter-or/50'
                        }`}
                      >
                        <span className="font-semibold">Oui, j'ai un terrain</span>
                      </button>
                      <button
                        onClick={() => setHasLand(false)}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          hasLand === false 
                            ? 'border-jupiter-or bg-jupiter-or/10 text-jupiter-noir' 
                            : 'border-jupiter-gris-200 hover:border-jupiter-or/50'
                        }`}
                      >
                        <span className="font-semibold">Non, je cherche un terrain</span>
                      </button>
                    </div>
                  </div>

                  {hasLand === false && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="space-y-4 mt-6"
                    >
                      <div>
                        <label className="block text-jupiter-gris-700 font-semibold mb-2">
                          Dans quelle commune ?
                        </label>
                        <select
                          value={selectedCity}
                          onChange={(e) => setSelectedCity(e.target.value)}
                          className="w-full p-3 rounded-xl border border-jupiter-gris-200 focus:border-jupiter-or focus:outline-none"
                        >
                          <option value="">Sélectionnez une commune</option>
                          {Object.keys(TERRAIN_PRICES).map((city) => (
                            <option key={city} value={city}>
                              {city} - {TERRAIN_PRICES[city]}€/m²
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-jupiter-gris-700 font-semibold mb-2">
                          Surface du terrain souhaitée (m²)
                        </label>
                        <input
                          type="number"
                          value={landArea}
                          onChange={(e) => setLandArea(e.target.value)}
                          placeholder="Ex: 500"
                          className="w-full p-3 rounded-xl border border-jupiter-gris-200 focus:border-jupiter-or focus:outline-none"
                        />
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Step 2: Maison */}
                {hasLand !== null && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                  >
                    <h3 className="text-2xl font-bold text-jupiter-noir mb-6 flex items-center gap-2">
                      <Home className="text-jupiter-or" size={28} />
                      Votre Maison
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-jupiter-gris-700 font-semibold mb-2">
                          Type de maison (nombre de pièces)
                        </label>
                        <select
                          value={roomType}
                          onChange={(e) => setRoomType(e.target.value)}
                          className="w-full p-3 rounded-xl border border-jupiter-gris-200 focus:border-jupiter-or focus:outline-none"
                        >
                          <option value="">Sélectionnez le type</option>
                          {Object.keys(ROOM_SIZES).map((type) => (
                            <option key={type} value={type}>
                              {type} - environ {ROOM_SIZES[type].avg}m²
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-jupiter-gris-700 font-semibold mb-2">
                          Surface habitable (m²)
                        </label>
                        <input
                          type="number"
                          value={houseArea}
                          onChange={(e) => setHouseArea(e.target.value)}
                          placeholder="Ex: 110"
                          className="w-full p-3 rounded-xl border border-jupiter-gris-200 focus:border-jupiter-or focus:outline-none"
                        />
                        {roomType && (
                          <p className="text-sm text-jupiter-gris-500 mt-1">
                            Fourchette recommandée : {ROOM_SIZES[roomType].min} - {ROOM_SIZES[roomType].max}m²
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-jupiter-gris-700 font-semibold mb-2">
                          Niveau de finition
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <button
                            onClick={() => setFinishLevel('standard')}
                            className={`p-4 rounded-xl border-2 transition-all ${
                              finishLevel === 'standard' 
                                ? 'border-jupiter-or bg-jupiter-or/10' 
                                : 'border-jupiter-gris-200 hover:border-jupiter-or/50'
                            }`}
                          >
                            <div className="font-semibold text-jupiter-noir">Standard</div>
                            <div className="text-sm text-jupiter-gris-600">1 500€/m²</div>
                            <div className="text-xs text-jupiter-gris-500 mt-1">Finitions essentielles</div>
                          </button>
                          <button
                            onClick={() => setFinishLevel('confort')}
                            className={`p-4 rounded-xl border-2 transition-all ${
                              finishLevel === 'confort' 
                                ? 'border-jupiter-or bg-jupiter-or/10' 
                                : 'border-jupiter-gris-200 hover:border-jupiter-or/50'
                            }`}
                          >
                            <div className="font-semibold text-jupiter-noir">Confort</div>
                            <div className="text-sm text-jupiter-gris-600">1 750€/m²</div>
                            <div className="text-xs text-jupiter-gris-500 mt-1">Finitions de qualité</div>
                          </button>
                          <button
                            onClick={() => setFinishLevel('premium')}
                            className={`p-4 rounded-xl border-2 transition-all ${
                              finishLevel === 'premium' 
                                ? 'border-jupiter-or bg-jupiter-or/10' 
                                : 'border-jupiter-gris-200 hover:border-jupiter-or/50'
                            }`}
                          >
                            <div className="font-semibold text-jupiter-noir">Premium</div>
                            <div className="text-sm text-jupiter-gris-600">2 000€/m²</div>
                            <div className="text-xs text-jupiter-gris-500 mt-1">Finitions haut de gamme</div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Calculate Button */}
                {hasLand !== null && houseArea && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-center"
                  >
                    <Button
                      onClick={calculatePrice}
                      variant="primary"
                      size="lg"
                      className="bg-jupiter-or hover:bg-jupiter-or-fonce text-white"
                    >
                      <Calculator className="mr-2" size={20} />
                      Calculer mon budget
                    </Button>
                  </motion.div>
                )}
              </>
            ) : (
              /* Results */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-8">
                  <Sparkles className="text-jupiter-or mx-auto mb-4" size={48} />
                  <h3 className="text-3xl font-bold text-jupiter-noir">
                    Estimation de Votre Projet
                  </h3>
                </div>

                <div className="space-y-4 mb-8">
                  {!hasLand && calculatedPrice.terrain > 0 && (
                    <div className="flex justify-between items-center p-4 bg-jupiter-gris-50 rounded-xl">
                      <div>
                        <span className="text-jupiter-gris-700">Terrain ({landArea}m² à {selectedCity})</span>
                        <div className="text-sm text-jupiter-gris-500">
                          {landArea}m² × {TERRAIN_PRICES[selectedCity]}€/m²
                        </div>
                      </div>
                      <span className="text-xl font-bold text-jupiter-noir">
                        {formatPrice(calculatedPrice.terrain)}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between items-center p-4 bg-jupiter-gris-50 rounded-xl">
                    <div>
                      <span className="text-jupiter-gris-700">Construction ({houseArea}m²)</span>
                      <div className="text-sm text-jupiter-gris-500">
                        {houseArea}m² × {CONSTRUCTION_PRICES[finishLevel]}€/m² (finition {finishLevel})
                      </div>
                    </div>
                    <span className="text-xl font-bold text-jupiter-noir">
                      {formatPrice(calculatedPrice.construction)}
                    </span>
                  </div>

                  <div className="border-t-2 border-jupiter-or pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-jupiter-noir">Budget Total Estimé</span>
                      <span className="text-3xl font-bold text-jupiter-or">
                        {formatPrice(calculatedPrice.total)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Info Box */}
                <div className="bg-jupiter-or/10 border border-jupiter-or/30 rounded-xl p-4 mb-8">
                  <div className="flex gap-3">
                    <Info className="text-jupiter-or flex-shrink-0 mt-1" size={20} />
                    <div className="text-sm text-jupiter-gris-700">
                      <p className="font-semibold mb-2">Cette estimation comprend :</p>
                      <ul className="space-y-1 text-jupiter-gris-600">
                        <li>• Les fondations et le gros œuvre</li>
                        <li>• La toiture et l'isolation</li>
                        <li>• Les menuiseries et finitions intérieures</li>
                        <li>• Les raccordements et viabilisation</li>
                        <li>• Les garanties décennales</li>
                      </ul>
                      <p className="mt-3 font-semibold">Ne comprend pas : les frais de notaire, l'aménagement extérieur, la piscine</p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="primary"
                    size="lg"
                    className="bg-jupiter-or hover:bg-jupiter-or-fonce text-white"
                  >
                    Demander un devis personnalisé
                  </Button>
                  <Button
                    onClick={resetCalculator}
                    variant="outline"
                    size="lg"
                    className="border-jupiter-or text-jupiter-noir hover:bg-jupiter-or/10"
                  >
                    Nouveau calcul
                  </Button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Bottom Info */}
          {!showResults && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 text-center"
            >
              <p className="text-jupiter-gris-600">
                <span className="font-semibold">💡 Bon à savoir :</span> Les prix sont basés sur les moyennes du marché à La Réunion en 2024.
                Pour une estimation précise, contactez-nous pour un devis gratuit.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};