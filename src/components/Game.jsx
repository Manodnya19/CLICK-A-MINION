import React, { useState, useEffect } from 'react';
import Minion from './Minion';
import '../App.css';

export default function Game() {
  const [minions, setMinions] = useState(new Array(6).fill({ isVisible: false, type: 0 }));
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(1000); // Initial interval time
  const [isFlipped, setIsFlipped] = useState(false);
  let [count, setCount] = useState(1)
  useEffect(() => {
    const timer = setInterval(() => {
      const newMinions = minions.map(() => ({
        isVisible: Math.random() > 0.7,
        type: Math.floor(Math.random() * 3)
      }));
      setMinions(newMinions);
    }, time);

    return () => clearInterval(timer);
  }, [time, minions]);

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

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleLevelUp = () => {
    if (time > 100) {
      setTime(time - 100);
      setCount(count + 1)
    }
    // console.log(time);
  };

  const handleLevelDown = () => {
    if (time >= 100 && time < 1000) {
      setTime(time + 100);
      setCount(count - 1)
    }
    // console.log(time);
  }
  
  

  // console.log(newLevel);
  return (
    <div className="game">
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
        <div>
        <h4 className='level-up'>Level {count}</h4>
          <div className='level-up-buttons'>
          <button className='level-up-button' onClick={handleLevelUp}>↑</button>
          <button className='level-down-button' onClick={handleLevelDown}>↓</button>
          </div>
        </div>
        
      </div>
    </div>
  );
}
