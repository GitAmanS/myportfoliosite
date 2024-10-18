import React, { useEffect, useState } from 'react'

const Navbar2 = () => {
    // State to control visibility for animation
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger visibility for animation after a short delay
    setTimeout(() => setIsVisible(true), 100); // Delay to start animation
  }, []);
  return (
    <div className='w-full '>
        
        <div className=''>
        <nav className='flex  items-center gap-x-2 flex-row py-2  px-2  m-1'>
                <button className='bg-white  hover:shadow-inner-8 px-8 rounded text-black opacity-70   py-3'>
                    About
                </button>
                <button className='bg-white px-8 rounded text-black opacity-70 shadow-inner  py-3'>
                    Projects
                </button>
                <button className='bg-white px-8 rounded text-black opacity-70 shadow-inner  py-3'>
                    Articles
                </button>
                <button className='bg-white px-8 rounded text-black opacity-70 shadow-inner  py-3'>
                    Work
                </button>
                <h1 className='text-2xl ml-auto px-4  font-bold'>Aman Shaikh</h1>
            </nav>
        </div>
    </div>
   
  )
}

export default Navbar2