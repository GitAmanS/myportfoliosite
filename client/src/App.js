import React from 'react';
import './index.css'; // Import your Tailwind CSS file
import './App.css';
import Navbar from './Components/Navbar';
import BlurEffect from './Components/BlurEffect';
import Home from './Components/Home';
import SpringCursor from './Components/SprintCursor';
import Projects from './Components/Projects';

function App() {
  return (
    <div className='bg-[#EBECEE] c-font'>
      <SpringCursor />
      <div className="min-h-screen  flex flex-col items-center">
        <Navbar />
        <div className="w-full min-h-screen pb-96">
          <Home />
          <div className=" w-full custom-dashed-line"></div>
          <Projects/>
        </div>
        <BlurEffect />
      </div>
    </div>
  );
}

export default App;
