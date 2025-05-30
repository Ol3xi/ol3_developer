import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-white dark:bg-slate-800 shadow-md fixed top-0 left-0 w-full z-50 ">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2 font-poppins text-xl">
                    <span className="text-blue-600 text-2xl font-bold">&lt;/&gt;</span>
                    <span className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">Ol3_Developer</span>
                </div>

                {/* Desktop menu */}
                <div className="hidden md:flex space-x-6 text-gray-700 font-medium dark:text-white">
                    <ThemeToggle/>
                    <a href="#home" className="hover:text-blue-600 transition">Home</a>
                    <a href="#servizi" className="hover:text-blue-600 transition">Servizi</a>
                    <a href="#chiSiamo" className="hover:text-blue-600 transition">Chi siamo</a>
                    <a href="#contatti" className="hover:text-blue-600 transition">Contatti</a>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-700 focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu dropdown */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4">
                    <a href="#home" className="block py-2 text-gray-700 hover:text-blue-600">Home</a>
                    <a href="#servizi" className="block py-2 text-gray-700 hover:text-blue-600">Servizi</a>
                    <a href="#chiSiamo" className="block py-2 text-gray-700 hover:text-blue-600">Chi siamo</a>
                    <a href="#contatti" className="block py-2 text-gray-700 hover:text-blue-600">Contatti</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
