// src/components/RunningMinion.js
import React from 'react';
import '../minion-animation.css';
// import runningMinion from '../images/running_minion.png'; // Path to your running minion image

let runningMinion = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXoycnM0b2g4eTcxNHdrZXA3ZGc1dmowOXo4dnZ5ZGZ2aTI5b3RuZyZlcD12MV9naWZzX3NlYXJjaCZjdD1z/PtFNQKCAYECdMijkM8/giphy.gif'
const RunningMinion = () => {
  return (
    <img
      src={runningMinion}
      alt="Running Minion"
      className="running-minion"
    />
  );
};

export default RunningMinion;
