
import React from 'react';
import { cn } from '@/lib/utils';

interface AbilityIconProps {
  icon: string;
  color: string;
  className?: string;
}

const AbilityIcon: React.FC<AbilityIconProps> = ({ icon, color, className }) => {
  return (
    <div 
      className={cn("ability-icon w-12 h-12 flex items-center justify-center", className)}
      style={{ 
        borderColor: color,
        boxShadow: `0 0 10px ${color}40`
      }}
    >
      <div 
        className="w-8 h-8 bg-contain bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${icon})`,
          filter: `drop-shadow(0 0 2px ${color})`
        }}
      ></div>
    </div>
  );
};

export default AbilityIcon;
