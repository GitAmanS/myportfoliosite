import React from 'react';

const Navbar = () => {
    return (
        <nav className="fixed z-50 bg-white justify-center items-center rounded-full px-6 py-2 mx-auto mt-4 max-w-4xl">
            <ul className="flex py-1.5 px-3 justify-center text-lg items-center font-bold space-x-6">
                {/* Logo */}
                <li>
                    <a href="#home" className="text-[#363B44] font-extrabold text-xl">
                        Gyo.
                    </a>
                </li>
                {/* Links */}
                <li>
                    <a 
                        href="#craft" 
                        className="text-[#86898e] font-bold hover:text-[#363B44] transition duration-500 ease-in-out"
                    >
                        Projects
                    </a>
                </li>
                <li>
                    <a 
                        href="#experience" 
                        className="text-[#86898e] hover:text-[#363B44] font-bold transition duration-500 ease-in-out"
                    >
                        Experience
                    </a>
                </li>
                <li>
                    <a 
                        href="#about" 
                        className="text-[#86898e] hover:text-[#363B44] font-bold transition duration-500 ease-in-out"
                    >
                        About
                    </a>
                </li>
                <li>
                    <a 
                        href="#contact" 
                        className="text-[#86898e] hover:text-[#363B44] font-bold transition duration-500 ease-in-out"
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
