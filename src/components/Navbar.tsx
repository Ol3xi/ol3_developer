import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const navItems = [
        { href: "#home", label: "Home" },
        { href: "#servizi", label: "Servizi" },
        { href: "#chiSiamo", label: "Chi siamo" },
        { href: "#contatti", label: "Contatti" },
    ];

    return (
        <nav className="bg-base-200 shadow-md fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2 font-poppins text-xl">
                    <span className="text-blue-600 text-2xl font-bold">&lt;/&gt;</span>
                    <span className="text-base md:text-2xl font-bold">Ol3_Developer</span>
                </div>

                {/* Desktop menu */}
                <div className="flex flex-row items-center">
                    <div className="hidden md:flex space-x-4 text-base font-bold items-center">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="hover:text-blue-600 transition dark:text-gray-300 "
                            >
                                {item.label}
                            </a>
                        ))}
                        <ThemeToggle />
                    </div>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden flex justify-center gap-2">
                    <ThemeToggle />
                    <button
                        onClick={toggleMenu}
                        className="focus:outline-none"
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
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="block py-2 text-gray-300 hover:text-blue-600"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
