import React, { useEffect, useState } from 'react';
import './index.css'; // Make sure to import your Tailwind CSS file
import './App.css'
import Navbar from './Components/Navbar';
import BlurEffect from './Components/BlurEffect';



function App() {
    
  return (
    <div className='h-screen flex flex-col items-center '>
      <Navbar/>
      <BlurEffect/>
    </div>
    
  );
}

export default App;
