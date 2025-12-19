export default function Hero() {
    return (
        <section id="jumbo" className="relative h-screen flex items-center justify-center">
            <div className="absolute">
                <img src="public/hero-golf.jpg" alt="Image d'un green ensoleillé" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/30 to-background/90"></div>
            </div>
            <div className="relative z-5 text-center max-w-3xl">
                <h2 className="text-7xl font-bold text-background mb-6 tracking-tight">Partager la passion du Golf, entre amis !</h2>
            </div>
        </section>
    )
}