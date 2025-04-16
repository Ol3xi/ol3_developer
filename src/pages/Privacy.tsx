import React from 'react';
import { Link } from 'react-router-dom';

const Privacy: React.FC = () => {
    return (
        <div className="min-h-screen bg-white text-gray-800 px-6 py-20 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

            <p className="text-sm leading-relaxed">
                Questo sito non raccoglie dati sensibili. I messaggi inviati tramite il form contatti vengono utilizzati solo per rispondere alle richieste e non vengono archiviati o condivisi con terze parti.
            </p>
            <p className="mt-4 text-sm">
                Per ulteriori informazioni puoi contattarmi tramite il form nella home page.
            </p>

            {/* Bottone per tornare alla home */}
            <div className="mt-10">
                <Link
                    to="/"
                    className="inline-block bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition"
                >
                    Torna alla Home
                </Link>
            </div>
        </div>
    );
};

export default Privacy;
