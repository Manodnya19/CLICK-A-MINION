// src/components/Minion.js
import React from 'react';


// Import your images
import minion1 from '../assets/minion1.jpg';
import minion2 from '../assets/minion2.jpg';
import minion3 from '../assets/minion3.jpg';
const Minion = ({ onClick, isVisible, type }) => {
  const minionImages = [minion1, minion2, minion3];

  return (
    <div className="minion">
      {isVisible && (
        <img 
          src={minionImages[type]} 
          alt={`minion-${type}`} 
          className="minion-visible" 
          onClick={onClick}
        />
      )}
    </div>
  );
};

export default Minion;
