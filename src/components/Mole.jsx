// src/components/Mole.js
import React from 'react';
import '../App.css'

const Mole = ({ onClick, isVisible }) => {
  return (
    <div className="mole">
      {isVisible && (
        <div className="mole-visible" onClick={onClick}>
          🐹
        </div>
      )}
    </div>
  );
};

export default Mole;
