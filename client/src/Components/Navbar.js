import React, { useEffect, useState } from 'react';

const Navbar = () => {
  // State to control visibility for animation
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger visibility for animation after a short delay
    setTimeout(() => setIsVisible(true), 100); // Delay to start animation
  }, []);

  return (
    <>
      {/* Top Navbar with only the title */}
      <header className="p-2">
        <nav className="flex items-center  border rounded-full p-1 border-[#E0D6C2] w-full">
          {/* Logo with animation */}
          <div
            className={`w-70 text-lg md:text-xl font-semibold bg-[#343124] rounded-full transition-all duration-500 ease-out ${
              isVisible
                ? 'translate-x-0 opacity-100 py-2 px-12 md:py-3 md:px-24'
                : '-translate-x-10 opacity-0 py-0 px-0'
            } text-[#DBCEBD]`}
          >
            Aman Shaikh
          </div>
        </nav>
      </header>

      {/* Bottom Navbar for mobile */}
      <nav className="fixed bottom-0 left-0 w-full bg-[#343124] border-t border-[#E0D6C2] md:hidden">
        <div className="flex justify-around py-2">
          {/* Navigation Links in the bottom navbar */}
          <a
            href="#about"
            className={`text-sm font-semibold hover:bg-[#E0D6C2] hover:text-[#343124] rounded-full py-2 px-4 transition-all duration-500 ease-out ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            } text-[#DBCEBD]`}
          >
            About
          </a>
          <a
            href="#projects"
            className={`text-sm font-semibold hover:bg-[#E0D6C2] hover:text-[#343124] rounded-full py-2 px-4 transition-all duration-500 ease-out ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            } text-[#DBCEBD]`}
          >
            Projects
          </a>
          <a
            href="#articles"
            className={`text-sm font-semibold hover:bg-[#E0D6C2] hover:text-[#343124] rounded-full py-2 px-4 transition-all duration-500 ease-out ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            } text-[#DBCEBD]`}
          >
            Articles
          </a>
          <a
            href="#contact"
            className={`text-sm font-semibold hover:bg-[#E0D6C2] hover:text-[#343124] rounded-full py-2 px-4 transition-all duration-500 ease-out ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            } text-[#DBCEBD]`}
          >
            Contact
          </a>
        </div>
      </nav>


      <div className='p-2'>
              {/* Regular desktop navbar (hidden on mobile) */}
      <nav className="hidden md:flex items-center border rounded-full p-1 border-[#E0D6C2] w-full flex-wrap">
        <div className="flex space-x-2 items-center flex-wrap">
          {/* Desktop Navigation Links */}
          <a
            href="#about"
            className={`text-sm md:text-base font-semibold border border-[#E0D6C2] hover:bg-[#E0D6C2] hover:text-[#343124] rounded-full transition-all duration-500 ease-out ${
              isVisible
                ? 'translate-x-0 opacity-100 py-3 px-6 md:px-12'
                : '-translate-x-10 opacity-0 py-0 px-0'
            } text-[#DBCEBD]`}
          >
            About
          </a>
          <a
            href="#projects"
            className={`text-sm md:text-base font-semibold border border-[#E0D6C2] hover:bg-[#E0D6C2] hover:text-[#343124] rounded-full transition-all duration-500 ease-out ${
              isVisible
                ? 'translate-x-0 opacity-100 py-3 px-6 md:px-12'
                : '-translate-x-10 opacity-0 py-0 px-0'
            } text-[#DBCEBD]`}
          >
            Projects
          </a>
          <a
            href="#articles"
            className={`text-sm md:text-base font-semibold border border-[#E0D6C2] hover:bg-[#E0D6C2] hover:text-[#343124] rounded-full transition-all duration-500 ease-out ${
              isVisible
                ? 'translate-x-0 opacity-100 py-3 px-6 md:px-12'
                : '-translate-x-10 opacity-0 py-0 px-0'
            } text-[#DBCEBD]`}
          >
            Articles
          </a>
        </div>

        {/* Contact link for desktop */}
        <a
          href="#contact"
          className={`text-sm md:text-base ml-auto font-semibold border border-[#E0D6C2] hover:bg-[#E0D6C2] hover:text-[#343124] rounded-full transition-all duration-500 ease-out ${
            isVisible
              ? 'translate-x-0 opacity-100 py-3 px-6 md:px-12'
              : '-translate-x-10 opacity-0 py-0 px-0'
          } text-[#DBCEBD]`}
        >
          Contact
        </a>
      </nav>
      </div>
    </>
  );
};

export default Navbar;
