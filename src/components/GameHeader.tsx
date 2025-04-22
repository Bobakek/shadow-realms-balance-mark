
import React from 'react';

const GameHeader = () => {
  return (
    <header className="relative z-10 pt-6 pb-4 text-center">
      <div className="flex justify-center items-center">
        <div className="h-0.5 w-16 md:w-32 bg-gradient-to-r from-transparent to-shadow-purple opacity-50 mr-4"></div>
        <h1 className="text-3xl md:text-5xl text-white tracking-wider font-shadow relative">
          <span className="text-shadow-purple">Shadow Realms</span>
          <span className="block text-xl md:text-2xl mt-1 text-shadow-light-purple opacity-80">Печать Равновесия</span>
          <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-shadow-purple to-transparent opacity-50"></div>
        </h1>
        <div className="h-0.5 w-16 md:w-32 bg-gradient-to-r from-shadow-purple to-transparent opacity-50 ml-4"></div>
      </div>
    </header>
  );
};

export default GameHeader;
