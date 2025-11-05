import React from 'react';
import { Code, Smartphone, Layout } from 'lucide-react'; // Usa icone fighe!

const services = [
    {
        icon: <Layout className="w-8 h-8 text-blue-600" />,
        title: 'Design moderno',
        desc: 'Layout responsive, pulito e orientato all’esperienza utente.',
    },
    {
        icon: <Code className="w-8 h-8 text-blue-600" />,
        title: 'Sviluppo su misura',
        desc: 'Siti realizzati in React + Tailwind, ottimizzati e performanti.',
    },
    {
        icon: <Smartphone className="w-8 h-8 text-blue-600" />,
        title: 'Mobile-first',
        desc: 'Perfetti su tutti i dispositivi: smartphone, tablet e desktop.',
    },
];

const Services: React.FC = () => {
    return (
        <section id='servizi' className="bg-base py-20">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="md:text-4xl font-bold text-base mb-4">
                    Cosa posso offrirti
                </h2>
                <p className="text-base mb-12 max-w-2xl mx-auto">
                    Offro soluzioni moderne, personalizzate e ottimizzate per la tua presenza online.
                </p>

                <div className="grid gap-8 md:grid-cols-3">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="bg-base rounded-xl p-6 dark:shadow-gray-200 shadow hover:shadow-lg transition hover:-translate-y-1"
                        >
                            <div className="mb-4 flex justify-center">{service.icon}</div>
                            <h3 className="font-semibold text-base mb-2">{service.title}</h3>
                            <p className="text-base">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
