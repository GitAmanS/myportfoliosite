import React from 'react';

const Navbar = () => {
    return (
        <nav className="fixed z-50 bg-white justify-center items-center rounded-full px-6 py-2 mx-auto mt-4 max-w-4xl shadow-lg">
            <ul className="flex py-2 px-3 justify-center text-lg items-center font-bold space-x-6">
                {/* Logo */}
                <li>
                    <a href="#home" className="text-black font-bold text-xl">
                        Gyo.
                    </a>
                </li>
                {/* Links */}
                <li>
                    <a href="#craft" className="text-gray-500 font-bold hover:text-black ">
                        Projects
                    </a>
                </li>
                <li>
                    <a href="#experience" className="text-gray-500 hover:text-black font-bold">
                        Experience
                    </a>
                </li>
                <li>
                    <a href="#about" className="text-gray-500 hover:text-black font-bold">
                        About
                    </a>
                </li>
                <li>
                    <a href="#contact" className="text-gray-500 hover:text-black font-bold">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
