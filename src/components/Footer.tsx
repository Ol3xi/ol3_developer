import React from 'react';
import { Link } from 'react-router-dom';


const Footer: React.FC = () => {
    return (
        <footer className="text-base py-6 mt-10 shadow-[0_-10px_30px_-10px_rgba(0,0,0,0.20)] bg-base-200">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4">
                <p className="text-sm">
                    © {new Date().getFullYear()} Ol3_Developer. Tutti i diritti riservati.
                </p>
                <div className="flex space-x-4">
                    <Link to='/privacy' className="hover:text-blue-400 transition text-sm">
                        Privacy
                    </Link>
                    <a href="#contatti" className="hover:text-blue-400 transition text-sm">
                        Contattami
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
