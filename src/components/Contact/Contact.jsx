export default function Contact() {
    return (
        <section id="contact" className="my-15 flex items-center">
            <div className="container">
                <h2 className="text-center text-5xl font-semibold mb-8">Contactez-Nous</h2>
                <div className="mx-auto">
                    <div className="max-w-md mx-auto px-8 py-6 bg-gray-100 rounded-lg shadow-lg">
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-800 mb-1 font-medium" for="name">Nom & Prénom</label>
                                <input
                                    className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition duration-300"
                                    placeholder="Entrez votre Nom & Prénom"
                                    type="text"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-800 mb-1 font-medium" for="email">Adresse Email</label>
                                <input
                                    className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition duration-300"
                                    placeholder="Entrez votre adresse email"
                                    name="email"
                                    id="email"
                                    type="email"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-800 mb-1 font-medium" for="message"
                                >Votre Message</label
                                >
                                <textarea
                                    className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition duration-300"
                                    rows="4"
                                    placeholder="Insérez votre message"
                                    name="message"
                                    id="message"
                                ></textarea>
                            </div>
                            <button
                                className="w-full btn btn-outline btn-primary text-primary py-2 px-4 rounded-lg hover:text-gray-100 transition duration-300"
                                type="submit"
                            >
                                Envoyer
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="mx-auto pe-5">
                <div className="w-120">
                    <img src="public/SWING.png" alt="" className="rounded-full"/>
                </div>
            </div>
        </section>
    )
}