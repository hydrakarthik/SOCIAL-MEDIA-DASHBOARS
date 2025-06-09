
import React, { useEffect, useState } from 'react';

const Robot3D = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const playSound = () => {
    // Simple beep sound using Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.2);
  };

  return (
    <div 
      className={`relative w-16 h-16 cursor-pointer transition-transform duration-300 ${
        isAnimating ? 'animate-bounce' : 'hover:scale-110'
      }`}
      onClick={playSound}
    >
      {/* Robot Body */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg shadow-lg transform-gpu perspective-1000 rotateY-12">
        {/* Robot Head */}
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-b from-gray-300 to-gray-500 rounded-md shadow-md">
          {/* Eyes */}
          <div className="absolute top-2 left-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <div className="absolute top-2 right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          {/* Antenna */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0.5 h-2 bg-gray-600"></div>
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-red-500 rounded-full animate-ping"></div>
        </div>
        
        {/* Body Details */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-8 bg-gradient-to-b from-blue-300 to-blue-500 rounded border border-blue-700">
          {/* Chest Panel */}
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-blue-200 rounded-sm"></div>
          {/* Buttons */}
          <div className="absolute top-4 left-1 w-1 h-1 bg-yellow-400 rounded-full"></div>
          <div className="absolute top-4 right-1 w-1 h-1 bg-red-400 rounded-full"></div>
        </div>

        {/* Arms */}
        <div className="absolute top-4 -left-2 w-3 h-6 bg-gradient-to-b from-blue-400 to-blue-600 rounded transform rotate-12"></div>
        <div className="absolute top-4 -right-2 w-3 h-6 bg-gradient-to-b from-blue-400 to-blue-600 rounded transform -rotate-12"></div>

        {/* Legs */}
        <div className="absolute -bottom-4 left-2 w-2 h-6 bg-gradient-to-b from-blue-500 to-blue-700 rounded-b"></div>
        <div className="absolute -bottom-4 right-2 w-2 h-6 bg-gradient-to-b from-blue-500 to-blue-700 rounded-b"></div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-blue-400 rounded-lg opacity-20 blur-md animate-pulse"></div>
    </div>
  );
};

export default Robot3D;
