
import React, { useState } from 'react';
import { biomes } from '@/data/biomesData';
import { TreeDeciduous, CloudFog, Mountain, Hourglass, MountainSnow, Archive } from 'lucide-react';
import { motion } from 'framer-motion';

const getBiomeIcon = (id: string) => {
  switch (id) {
    case 'ilmarin-forests':
      return <TreeDeciduous className="w-6 h-6" />;
    case 'misty-coast':
      return <CloudFog className="w-6 h-6" />;
    case 'kair-north':
      return <Mountain className="w-6 h-6" />;
    case 'ashen-wastes':
      return <Hourglass className="w-6 h-6" />;
    case 'floating-islands':
      return <MountainSnow className="w-6 h-6" />;
    case 'underground-archive':
      return <Archive className="w-6 h-6" />;
    default:
      return null;
  }
};

const WorldMap = () => {
  const [selectedBiome, setSelectedBiome] = useState(biomes[0]);

  return (
    <div className="min-h-screen relative">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl text-center mb-12 font-shadow text-shadow-purple">
          Мир <span className="text-purple-400">Андраэль</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Biome List */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {biomes.map((biome) => (
              <motion.button
                key={biome.id}
                onClick={() => setSelectedBiome(biome)}
                className={`p-4 rounded-lg glass-panel transition-all hover:scale-105 ${
                  selectedBiome.id === biome.id ? 'ring-2 ring-shadow-purple' : ''
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex flex-col items-center gap-2">
                  {getBiomeIcon(biome.id)}
                  <span className="text-sm text-center font-shadow">{biome.russianName}</span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Biome Details */}
          <motion.div
            key={selectedBiome.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="glass-panel p-6 rounded-lg"
          >
            <div className="relative h-48 rounded-lg overflow-hidden mb-4">
              <img
                src={selectedBiome.image}
                alt={selectedBiome.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <h3 className="absolute bottom-4 left-4 text-2xl font-shadow text-white">
                {selectedBiome.russianName}
              </h3>
            </div>

            <div className="space-y-4">
              <p className="text-gray-200">{selectedBiome.description}</p>
              
              <div>
                <h4 className="text-purple-400 font-shadow mb-2">Климат</h4>
                <p className="text-gray-300">{selectedBiome.climate}</p>
              </div>

              <div>
                <h4 className="text-purple-400 font-shadow mb-2">Опасности</h4>
                <p className="text-gray-300">{selectedBiome.dangers}</p>
              </div>

              <div>
                <h4 className="text-purple-400 font-shadow mb-2">Ресурсы</h4>
                <ul className="list-disc list-inside text-gray-300">
                  {selectedBiome.resources.map((resource) => (
                    <li key={resource}>{resource}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WorldMap;
