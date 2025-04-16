import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contatti" className="bg-white py-20">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Contattami
                </h2>
                <p className="text-gray-600 mb-10">
                    Hai un’idea o un progetto? Scrivimi, sarò felice di aiutarti!
                </p>

                <form
                    action="https://formsubmit.co/tomaselliolexi@gmail.com"  // <-- sostituisci con la tua email
                    method="POST"
                    className="space-y-6 max-w-xl mx-auto text-left"
                >
                    <input type="hidden" name="_subject" value="Nuova email ricevuta da Ol3_Developer!" />
                    <input type="hidden" name="_captcha" value="false" />

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Nome
                        </label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-3"
                            placeholder="Il tuo nome"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-3"
                            placeholder="email@example.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Messaggio
                        </label>
                        <textarea
                            name="message"
                            rows={4}
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-3"
                            placeholder="Scrivimi un messaggio..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition"
                    >
                        Invia messaggio
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
