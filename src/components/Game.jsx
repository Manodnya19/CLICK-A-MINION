import React, { useState, useEffect } from 'react';
import Minion from './Minion';
import '../App.css';

export default function Game(){
  
  const [minions, setMinions] = useState(new Array(6).fill({ isVisible: false, type: 0 }));
  const [score, setScore] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const newMinions = minions.map(() => ({
        isVisible: Math.random() > 0.7,
        type: Math.floor(Math.random() * 3) 
      }));
      setMinions(newMinions);
    }, 800);

    return () => clearInterval(timer);
  }, [minions]);

  const handleMinionClick = (index) => {
    if (minions[index].isVisible) {
      setScore(score + 1);
      const newMinions = [...minions];
      newMinions[index].isVisible = false;
      setMinions(newMinions);
    }
  };
  const handleReset = () => {
    setScore(0);
    setMinions(new Array(6).fill({ isVisible: false, type: 0 }));
  };
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <body className="game">
      
        <div className='content'>
        <h1 className='main-heading'>CLICK-A-MINION!</h1>
        <h3 className='score'>SCORE: {score}</h3>
        <button className="reset-button" onClick={handleReset}>Reset</button>
        <div className="minion-grid">
          {minions.map((minion, index) => (
            <Minion
              key={index}
              isVisible={minion.isVisible}
              type={minion.type}
              onClick={() => handleMinionClick(index)}
            />
            
          ))}
          
        </div>
      </div>
    </body>
    
  );
};


