
import React from 'react';

const GameBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-black"></div>
      
      {/* Rune circles */}
      <div className="rune-circle animate-rotate-slow opacity-10 top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="rune-circle animate-rotate-slow opacity-10 top-3/4 right-1/4 transform translate-x-1/2 -translate-y-1/2" style={{ animationDirection: 'reverse' }}></div>
      
      {/* Arcane particles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {Array.from({ length: 20 }).map((_, index) => (
          <div 
            key={index}
            className="absolute w-1 h-1 rounded-full bg-shadow-purple animate-pulse-glow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Light effect in corners */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-radial from-shadow-purple to-transparent opacity-5"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-radial from-shadow-purple to-transparent opacity-5"></div>
    </div>
  );
};

export default GameBackground;
