
import React from 'react';
import { GameClass } from '../data/gameData';
import AbilityIcon from './AbilityIcon';

interface ClassDetailsProps {
  gameClass: GameClass;
}

const ClassDetails: React.FC<ClassDetailsProps> = ({ gameClass }) => {
  return (
    <div 
      className="glass-panel rounded-lg p-6 relative overflow-hidden"
      style={{
        borderColor: gameClass.color,
        boxShadow: `0 0 20px ${gameClass.color}33`
      }}
    >
      <div className="absolute top-0 left-0 w-full h-1" style={{ background: gameClass.color }}></div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <div 
            className="h-64 rounded-md bg-cover bg-center mb-4 rune-border"
            style={{ 
              backgroundImage: `url(${gameClass.image})`,
              borderColor: gameClass.color,
              boxShadow: `0 0 15px ${gameClass.color}80`
            }}
          ></div>
          
          <h2 className="text-2xl md:text-3xl font-shadow mb-1" style={{ color: gameClass.color }}>
            {gameClass.russianName}
          </h2>
          <h3 className="text-lg text-white mb-2">{gameClass.name}</h3>
          <p className="text-sm text-gray-400 mb-4">{gameClass.role}</p>
          <p className="text-sm text-gray-300">{gameClass.description}</p>
        </div>
        
        <div className="md:col-span-2">
          <h3 className="text-xl font-shadow mb-6 text-white">
            <span style={{ color: gameClass.color }}>Abilities</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gameClass.abilities.map((ability) => (
              <div key={ability.id} className="flex items-start">
                <AbilityIcon 
                  icon={ability.icon} 
                  color={gameClass.color} 
                  className="mr-4 flex-shrink-0"
                />
                <div>
                  <h4 className="text-white font-medium">{ability.name}</h4>
                  <p className="text-sm text-gray-300 mb-1">{ability.description}</p>
                  <p className="text-xs text-gray-400">Cooldown: {ability.cooldown}s</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassDetails;
