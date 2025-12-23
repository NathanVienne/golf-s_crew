import HeroImage from "/hero-golf.jpg"

export default function Hero() {
    return (
        <section id="jumbo" className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <img src={HeroImage} alt="Image d'un green ensoleillé" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/30 to-background/90"></div>
            </div>
            <div className="relative z-5 text-center w-full md:max-w-3xl px-3">
                <h2 className="text-5xl md:text-7xl font-bold text-background mb-6 tracking-tight">Partager la passion du Golf, entre amis !</h2>
            </div>
        </section>
    )
}