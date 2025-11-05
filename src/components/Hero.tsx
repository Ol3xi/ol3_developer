import React from 'react';
import heroImg from '../assets/web-developer_hero.svg'; // Usa la tua immagine scaricata da unDraw o simili

const Hero: React.FC = () => {
    return (
        <section id='home' className="min-h-screen flex items-center bg-base pt-20">
            <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-12">

                {/* Testo */}
                <div className="text-center md:text-left flex-1">
                    <h1 className="md:text-5xl font-bold text-base mb-4">
                        Sviluppo siti web moderni su misura
                    </h1>
                    <p className="text-lg text-gray-600 mb-6">
                        Realizzo siti responsive, veloci e ottimizzati per il tuo business. Codice pulito, design professionale.
                    </p>
                    <a
                        href="#contatti"
                        className="inline-block bg-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow hover:bg-blue-700 transition"
                    >
                        Contattami ora
                    </a>
                </div>

                {/* Immagine */}
                <div className="flex-1">
                    <img
                        src={heroImg}
                        alt="Web development"
                        className="w-full max-w-md mx-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
