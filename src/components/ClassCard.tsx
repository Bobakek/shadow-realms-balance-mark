
import React from 'react';
import { GameClass } from '../data/gameData';
import { cn } from '@/lib/utils';

interface ClassCardProps {
  gameClass: GameClass;
  isSelected: boolean;
  onClick: () => void;
}

const ClassCard: React.FC<ClassCardProps> = ({ gameClass, isSelected, onClick }) => {
  return (
    <div 
      className={cn(
        "class-card glass-panel rounded-md p-2 cursor-pointer",
        isSelected ? "active" : ""
      )}
      onClick={onClick}
      style={{ 
        borderColor: isSelected ? gameClass.color : 'rgba(155, 135, 245, 0.2)',
        boxShadow: isSelected ? `0 0 20px ${gameClass.color}` : 'none'
      }}
    >
      <div 
        className="bg-cover bg-center rounded h-20 md:h-28"
        style={{ 
          backgroundImage: `url(${gameClass.image})`,
          backgroundColor: 'rgba(26, 23, 33, 0.6)',
          backgroundBlendMode: 'overlay',
        }}
      ></div>
      <div className="pt-2 text-center">
        <h3 className="text-xs md:text-sm font-medium text-white truncate">
          {gameClass.russianName}
        </h3>
        <p className="text-[10px] md:text-xs text-gray-400 truncate">
          {gameClass.role}
        </p>
      </div>
    </div>
  );
};

export default ClassCard;
