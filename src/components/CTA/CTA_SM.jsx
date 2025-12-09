export default function SocialMedial() {
    return (
        <section id="contact" className="py-24 px-6 bg-primary text-gray-300">
            <div className="container mx-auto max-w-4xl text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Rejoignez le fairway avec nous</h2>
                <p className="text-xl mb-10 text-accent-foreground/90">
                    Suivez nos aventures sur les réseaux sociaux
                </p>
                <div className="flex items-center justify-center gap-6">
                    <button className="btn btn-outline btn-accent">
                        Instagram
                    </button>
                    <button className="btn btn-outline btn-accent">
                        TikTok
                    </button>
                    <button className="btn btn-outline btn-accent">
                        Youtube
                    </button>
                </div>
            </div>
        </section>
    )
}