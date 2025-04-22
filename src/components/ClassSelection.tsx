
import React, { useState } from 'react';
import { GameClass } from '../data/gameData';
import ClassCard from './ClassCard';
import ClassDetails from './ClassDetails';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface ClassSelectionProps {
  classes: GameClass[];
}

const ClassSelection: React.FC<ClassSelectionProps> = ({ classes }) => {
  const [selectedClass, setSelectedClass] = useState<GameClass>(classes[0]);
  const navigate = useNavigate();

  const handleStartJourney = () => {
    navigate('/world');
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl md:text-3xl text-center mb-8 text-white font-shadow">
        Choose Your <span className="text-shadow-purple">Class</span>
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4 mb-10">
        {classes.map((gameClass) => (
          <ClassCard
            key={gameClass.id}
            gameClass={gameClass}
            isSelected={selectedClass.id === gameClass.id}
            onClick={() => setSelectedClass(gameClass)}
          />
        ))}
      </div>
      
      <ClassDetails gameClass={selectedClass} />
      
      <div className="mt-10 flex justify-center">
        <Button 
          onClick={handleStartJourney}
          className="px-8 py-3 text-lg font-shadow rounded-md bg-shadow-purple text-white hover:bg-shadow-deep-purple transition-all duration-300 rune-border"
        >
          Start Your Journey
        </Button>
      </div>
    </div>
  );
};

export default ClassSelection;
