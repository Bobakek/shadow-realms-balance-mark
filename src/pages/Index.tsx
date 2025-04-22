
import React from 'react';
import GameHeader from '@/components/GameHeader';
import ClassSelection from '@/components/ClassSelection';
import GameBackground from '@/components/GameBackground';
import { gameClasses } from '@/data/gameData';

const Index = () => {
  return (
    <div className="min-h-screen relative text-white overflow-hidden">
      {/* Background */}
      <GameBackground />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <GameHeader />
        
        <main className="flex-1 py-4 md:py-8">
          <ClassSelection classes={gameClasses} />
        </main>
        
        <footer className="py-4 text-center text-xs text-gray-500">
          <p>Shadow Realms: Печать Равновесия &copy; 2025</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
