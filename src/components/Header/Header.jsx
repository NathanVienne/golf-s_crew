import Navigation from "./Navigation.jsx"
import MobileNav from "./MobileNav.jsx"

export default function Header() {
    return (
        <header className="bg-primary py-4 text-white absolute w-full z-10">
            <MobileNav />
            <div className="md:flex justify-between items-center hidden">
                <div className="w-15 rounded-full outline outline-accent ms-4">
                    <img src="public/LOGOS.png" alt="Logo_Temporaire" />
                </div>
                <div>
                    <Navigation />
                </div>
                <div><button className="btn btn-sm btn-accent me-4 uppercase">Subscribe</button></div>
            </div>
        </header>
    )
}