import Icon from '@mdi/react';
import { mdiFacebook, mdiInstagram } from '@mdi/js';
import logo from '/LOGOS.png'

export default function Footer() {
    return (
        <footer className="py-12 px-6 bg-card border-t border-border">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        <div className="w-15">
                            <img src={logo} alt="Logo_Temporaire" className='rounded-full'/>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Bogey's Kings</h3>
                        <p className="text-sm text-muted-foreground">La passion du golf, ensemble</p>
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Mentions légales
                        </a>
                        <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Contact
                        </a>
                    </div>
                    <div className="flex gap-4">
                        <div><Icon path={mdiInstagram} size={1} /></div>
                        <div><Icon path={mdiFacebook} size={1} /></div>
                    </div>
                </div>
                <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
                    © 2025 Bogey's Kings. Tous droits réservés.
                </div>
            </div>
        </footer>
    )
}