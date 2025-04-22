
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { biomes } from '@/data/biomesData';
import { motion } from 'framer-motion';
import { 
  Building, 
  MapPin, 
  Sword, 
  ArrowLeft, 
  ShoppingCart 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface InteractivePoint {
  id: string;
  type: 'cave' | 'dungeon' | 'merchant' | 'monster';
  name: string;
  description: string;
  position: { x: number; y: number };
  icon: React.ReactNode;
}

const BiomeLocation = () => {
  const { biomeId } = useParams<{ biomeId: string }>();
  const navigate = useNavigate();
  const [selectedPoint, setSelectedPoint] = useState<InteractivePoint | null>(null);
  
  const biome = biomes.find(b => b.id === biomeId);
  
  if (!biome) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-red-400 mb-4">Локация не найдена</h2>
          <Button onClick={() => navigate('/world')}>Вернуться на карту мира</Button>
        </div>
      </div>
    );
  }
  
  // Generate interactive points based on biome type
  const getInteractivePoints = (biomeId: string): InteractivePoint[] => {
    switch (biomeId) {
      case 'ilmarin-forests':
        return [
          {
            id: 'ancient-grove',
            type: 'dungeon',
            name: 'Древняя роща',
            description: 'Загадочное место, где древние духи охраняют сокровища',
            position: { x: 30, y: 40 },
            icon: <Building className="w-6 h-6 text-green-500" />
          },
          {
            id: 'forest-merchant',
            type: 'merchant',
            name: 'Лесной торговец',
            description: 'Продает редкие травы и эликсиры',
            position: { x: 70, y: 20 },
            icon: <ShoppingCart className="w-6 h-6 text-yellow-500" />
          },
          {
            id: 'wolf-den',
            type: 'monster',
            name: 'Логово волков',
            description: 'Здесь обитает стая волков, возглавляемая alpha-особью',
            position: { x: 60, y: 70 },
            icon: <Sword className="w-6 h-6 text-red-500" />
          },
          {
            id: 'hidden-cave',
            type: 'cave',
            name: 'Скрытая пещера',
            description: 'Маленькая пещера, где хранятся древние артефакты',
            position: { x: 20, y: 80 },
            icon: <MapPin className="w-6 h-6 text-purple-500" />
          }
        ];
        
      case 'misty-coast':
        return [
          {
            id: 'sunken-ship',
            type: 'dungeon',
            name: 'Затонувший корабль',
            description: 'Древний корабль, полный сокровищ и опасностей',
            position: { x: 40, y: 60 },
            icon: <Building className="w-6 h-6 text-green-500" />
          },
          {
            id: 'coastal-trader',
            type: 'merchant',
            name: 'Прибрежный торговец',
            description: 'Торгует морскими артефактами и редкостями',
            position: { x: 80, y: 30 },
            icon: <ShoppingCart className="w-6 h-6 text-yellow-500" />
          },
          {
            id: 'kraken-lair',
            type: 'monster',
            name: 'Логово кракена',
            description: 'Опасное место, где обитает могущественный морской монстр',
            position: { x: 60, y: 40 },
            icon: <Sword className="w-6 h-6 text-red-500" />
          },
          {
            id: 'coastal-cave',
            type: 'cave',
            name: 'Прибрежная пещера',
            description: 'Пещера, омываемая приливами, скрывающая секреты моря',
            position: { x: 20, y: 70 },
            icon: <MapPin className="w-6 h-6 text-purple-500" />
          }
        ];
        
      case 'kair-north':
        return [
          {
            id: 'dragon-lair',
            type: 'dungeon',
            name: 'Логово дракона',
            description: 'Древняя пещера, где спит древний дракон',
            position: { x: 50, y: 30 },
            icon: <Building className="w-6 h-6 text-green-500" />
          },
          {
            id: 'mountain-trader',
            type: 'merchant',
            name: 'Горный торговец',
            description: 'Продает редкие минералы и оружие',
            position: { x: 70, y: 60 },
            icon: <ShoppingCart className="w-6 h-6 text-yellow-500" />
          },
          {
            id: 'troll-camp',
            type: 'monster',
            name: 'Лагерь троллей',
            description: 'Опасная территория, населенная горными троллями',
            position: { x: 30, y: 70 },
            icon: <Sword className="w-6 h-6 text-red-500" />
          },
          {
            id: 'crystal-cave',
            type: 'cave',
            name: 'Кристальная пещера',
            description: 'Пещера, полная редких и ценных кристаллов',
            position: { x: 80, y: 40 },
            icon: <MapPin className="w-6 h-6 text-purple-500" />
          }
        ];
        
      case 'ashen-wastes':
        return [
          {
            id: 'cursed-ruins',
            type: 'dungeon',
            name: 'Проклятые руины',
            description: 'Остатки древнего города, наполненные проклятиями',
            position: { x: 40, y: 50 },
            icon: <Building className="w-6 h-6 text-green-500" />
          },
          {
            id: 'wasteland-trader',
            type: 'merchant',
            name: 'Торговец пустоши',
            description: 'Продает редкие проклятые предметы и защитные амулеты',
            position: { x: 70, y: 30 },
            icon: <ShoppingCart className="w-6 h-6 text-yellow-500" />
          },
          {
            id: 'ash-worm',
            type: 'monster',
            name: 'Пепельный червь',
            description: 'Гигантское существо, обитающее под пеплом',
            position: { x: 60, y: 70 },
            icon: <Sword className="w-6 h-6 text-red-500" />
          },
          {
            id: 'ash-cave',
            type: 'cave',
            name: 'Пепельная пещера',
            description: 'Пещера, полная кристаллизованного пепла и вулканических пород',
            position: { x: 20, y: 60 },
            icon: <MapPin className="w-6 h-6 text-purple-500" />
          }
        ];
        
      case 'floating-islands':
        return [
          {
            id: 'sky-temple',
            type: 'dungeon',
            name: 'Храм неба',
            description: 'Древний храм, парящий в облаках, полный реликвий',
            position: { x: 50, y: 40 },
            icon: <Building className="w-6 h-6 text-green-500" />
          },
          {
            id: 'cloud-merchant',
            type: 'merchant',
            name: 'Облачный торговец',
            description: 'Продает редкие воздушные эссенции и летающие устройства',
            position: { x: 80, y: 20 },
            icon: <ShoppingCart className="w-6 h-6 text-yellow-500" />
          },
          {
            id: 'sky-drake',
            type: 'monster',
            name: 'Небесный дракон',
            description: 'Могущественное крылатое существо, властелин небес',
            position: { x: 30, y: 60 },
            icon: <Sword className="w-6 h-6 text-red-500" />
          },
          {
            id: 'cloud-cave',
            type: 'cave',
            name: 'Облачная пещера',
            description: 'Странная пещера в облаках, наполненная кристаллами',
            position: { x: 60, y: 80 },
            icon: <MapPin className="w-6 h-6 text-purple-500" />
          }
        ];
        
      case 'underground-archive':
        return [
          {
            id: 'forbidden-library',
            type: 'dungeon',
            name: 'Запретная библиотека',
            description: 'Древнее хранилище запретных знаний',
            position: { x: 40, y: 30 },
            icon: <Building className="w-6 h-6 text-green-500" />
          },
          {
            id: 'archive-keeper',
            type: 'merchant',
            name: 'Хранитель архива',
            description: 'Продает древние свитки и магические книги',
            position: { x: 70, y: 50 },
            icon: <ShoppingCart className="w-6 h-6 text-yellow-500" />
          },
          {
            id: 'ancient-golem',
            type: 'monster',
            name: 'Древний голем',
            description: 'Оживленная конструкция, охраняющая сокровища архива',
            position: { x: 20, y: 70 },
            icon: <Sword className="w-6 h-6 text-red-500" />
          },
          {
            id: 'hidden-chamber',
            type: 'cave',
            name: 'Скрытая комната',
            description: 'Секретная комната с древними артефактами',
            position: { x: 60, y: 20 },
            icon: <MapPin className="w-6 h-6 text-purple-500" />
          }
        ];
        
      default:
        return [];
    }
  };
  
  const interactivePoints = getInteractivePoints(biome.id);
  
  const handlePointClick = (point: InteractivePoint) => {
    setSelectedPoint(point);
  };
  
  const handleCloseDetails = () => {
    setSelectedPoint(null);
  };
  
  return (
    <div className="min-h-screen relative">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/world')}
            className="flex items-center text-gray-300 hover:text-white"
          >
            <ArrowLeft className="mr-2" />
            Вернуться на карту мира
          </Button>
        </div>
      
        <h1 className="text-3xl text-center mb-8 font-shadow text-shadow-purple">
          {biome.russianName}
        </h1>
        
        <div className="glass-panel rounded-lg p-6 mb-8">
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-4">
            <img
              src={biome.image}
              alt={biome.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          
          <p className="text-gray-200 mb-4">{biome.description}</p>
        </div>
        
        <h2 className="text-2xl font-shadow text-purple-400 mb-6">Исследуйте интересные места</h2>
        
        <div className="glass-panel rounded-lg p-6 relative h-[400px] mb-8">
          {/* Map with interactive points */}
          <div className="relative w-full h-full bg-cover bg-center rounded" 
               style={{ backgroundImage: `url(${biome.image})` }}>
            {interactivePoints.map((point) => (
              <motion.div
                key={point.id}
                className="absolute cursor-pointer"
                style={{ 
                  left: `${point.position.x}%`, 
                  top: `${point.position.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                whileHover={{ scale: 1.2 }}
                onClick={() => handlePointClick(point)}
              >
                <div className={`p-2 rounded-full 
                  ${point.type === 'dungeon' ? 'bg-green-500/70' : ''}
                  ${point.type === 'merchant' ? 'bg-yellow-500/70' : ''}
                  ${point.type === 'monster' ? 'bg-red-500/70' : ''}
                  ${point.type === 'cave' ? 'bg-purple-500/70' : ''}
                `}>
                  {point.icon}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Selected point details */}
        {selectedPoint && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="glass-panel rounded-lg p-6 mb-8"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-shadow text-purple-400">{selectedPoint.name}</h3>
              <Button variant="ghost" size="sm" onClick={handleCloseDetails}>
                Закрыть
              </Button>
            </div>
            
            <div className="mb-4">
              <span className={`inline-block px-3 py-1 rounded-full text-xs
                ${selectedPoint.type === 'dungeon' ? 'bg-green-500/30 text-green-300' : ''}
                ${selectedPoint.type === 'merchant' ? 'bg-yellow-500/30 text-yellow-300' : ''}
                ${selectedPoint.type === 'monster' ? 'bg-red-500/30 text-red-300' : ''}
                ${selectedPoint.type === 'cave' ? 'bg-purple-500/30 text-purple-300' : ''}
              `}>
                {selectedPoint.type === 'dungeon' && 'Подземелье'}
                {selectedPoint.type === 'merchant' && 'Торговец'}
                {selectedPoint.type === 'monster' && 'Монстр'}
                {selectedPoint.type === 'cave' && 'Пещера'}
              </span>
            </div>
            
            <p className="text-gray-300 mb-4">{selectedPoint.description}</p>
            
            <Button className="w-full bg-shadow-purple hover:bg-shadow-deep-purple">
              {selectedPoint.type === 'dungeon' && 'Исследовать подземелье'}
              {selectedPoint.type === 'merchant' && 'Торговать'}
              {selectedPoint.type === 'monster' && 'Сражаться'}
              {selectedPoint.type === 'cave' && 'Исследовать пещеру'}
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BiomeLocation;
