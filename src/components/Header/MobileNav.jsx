import logo from '/LOGOS.png'

export default function MobileNav() {
    return (
        <nav className="block md:hidden">
            <div className="navbar bg-primary shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle hover:btn-accent">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-primary rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a id="btn_menu" href="#jumbo" class="button">Présentation</a></li>
                            <li><a id="btn_menu" href="#team" class="button">La Team</a></li>
                            <li><a id="btn_menu" href="#about" class="button"> A Propos</a></li>
                            <li><a id="btn_menu" href="#contact" class="button">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center w-11">
                    <img src={logo} alt="" className="rounded-full outline outline-accent" />
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}