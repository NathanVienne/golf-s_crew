export default function Contact() {
    return (
        <section id="contact" className="my-15 flex flex-col-reverse gap-y-5 md:flex-row items-center justify-center">
            <div className="container flex flex-col w-full md:w-150">
                <h2 className="text-center text-5xl font-semibold mb-3">Contactez-Nous</h2>
                <hr className="w-60 md:w-90 mx-auto mb-8 text-accent" />
                <div className="">
                    <div className="max-w-xs md:max-w-sm mx-auto px-8 py-6 bg-primary rounded-lg shadow-lg">
                        <form>
                            <div className="mb-4">
                                <label className="block text-accent mb-1 " for="name">
                                    Nom & Prénom
                                </label>
                                <input
                                    className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-base-100 transition duration-300"
                                    placeholder="Entrez votre Nom & Prénom"
                                    type="text"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-accent mb-1" for="email">
                                    Adresse Email
                                </label>
                                <input
                                    className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-base-100 transition duration-300"
                                    placeholder="Entrez votre adresse email"
                                    name="email"
                                    id="email"
                                    type="email"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-accent mb-1" for="message">
                                    Votre Message
                                </label>
                                <textarea
                                    className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-base-100 transition duration-300"
                                    rows="4"
                                    placeholder="Insérez votre message"
                                    name="message"
                                    id="message"
                                ></textarea>
                            </div>
                            <button
                                className="w-full btn btn-outline btn-accent text-accent py-2 px-4 rounded-lg hover:text-gray-100 transition duration-300"
                                type="submit"
                            >
                                Envoyer
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div id="coin_3D" className="w-full md:w-150 flex flex-col items-center justify-center self-center">
                <div className="coin">
                    <div className="side heads">
                        <img src="/SWING.png" alt="Face 1" />
                    </div>
                    <div className="side tails">
                        <img src="/crown_ball.png" alt="Face 2" />
                    </div>
                </div>
                <div className="w-24 h-3 bg-black/50 rounded-full blur-sm mt-[-2px]"></div>
            </div>
        </section>
    )
}