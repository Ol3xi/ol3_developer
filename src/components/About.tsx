import React from 'react';
import profileImg from '../assets/avataaars.svg'; // Puoi usare un'illustrazione o una tua foto

const About: React.FC = () => {
    return (
        <section id='chiSiamo' className="bg-base-300 py-20">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">

                {/* Immagine */}
                <div className="flex-1">
                    <img
                        src={profileImg}
                        alt="Il mio avatar"
                        className="w-48 h-48 rounded-full border-4 border-base shadow-md mx-auto"
                    />
                </div>

                {/* Testo */}
                <div className="flex-1 text-center md:text-left">
                    <h2 className="md:text-4xl font-bold text-base mb-4">
                        Chi sono
                    </h2>
                    <p className="text-base mb-4">
                        Mi chiamo Olexi e sono uno sviluppatore frontend freelance specializzato in React, TypeScript e Tailwind CSS.
                    </p>
                    <p className="text-base">
                        Lavoro con passione per trasformare idee in esperienze digitali efficaci, responsive e moderne. Ogni progetto è un’occasione per costruire soluzioni su misura, curate nei dettagli e ottimizzate per il web.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
