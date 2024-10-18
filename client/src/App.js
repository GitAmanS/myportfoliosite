import React, { useEffect, useState } from 'react';
import Portfolio from './Components/Portfolio.js';
import './index.css'; // Make sure to import your Tailwind CSS file
import './App.css'
import Navbar2 from './Components/Navbar2.js';
import About from './Components/About.js';
import ParticleBackground from './Components/ParticleBackground.js';

function App() {
    // State to control visibility for animation
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      // Trigger visibility for animation after a short delay
      setTimeout(() => setIsVisible(true), 100); // Delay to start animation
    }, []);
  return (
    <div className={`p-4 bg-gray-200 shadow-inner-lg 
      ${
        isVisible
          ? 'blur-0'
          : 'blur-sm'
      }`}>
      <Navbar2/>
    </div>

    
  );
}

export default App;
