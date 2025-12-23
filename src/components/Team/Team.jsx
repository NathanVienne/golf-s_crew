import { mdiInstagram, mdiFacebook } from '@mdi/js';
import Social from './Socials';
import Goals from './Goals';

export default function Team() {
    const members = [
        {
            name: "Adrien Payet", index: "13.3", img: "", socials: [
                { platform: mdiInstagram, url: "https://www.instagram.com/yetpadrien/" },
                { platform: mdiFacebook, url: "https://www.facebook.com/adrien.payet.71" },
            ]
        },
        {
            name: "Arnaud Aaron", index: "54.0", img: "", socials: [
                { platform: mdiInstagram, url: "https://www.instagram.com/arnaud.aaron/" },
                { platform: mdiFacebook, url: "https://www.facebook.com/arnaud.aaron.1" },
            ]
        },
        {
            name: "Lukas Lombard", index: "38.0", img: "", socials: [
                { platform: mdiInstagram, url: "https://www.instagram.com/lukas_lomb/" },
                { platform: mdiFacebook, url: "https://www.facebook.com/lukas.lombard.56" },
            ]
        },
        {
            name: "Matthias Commins", index: "27.0", img: "", socials: [
                { platform: mdiInstagram, url: "https://www.instagram.com/matthias.commins/" },
                { platform: mdiFacebook, url: "https://www.facebook.com/matthias.commins" },
            ]
        },
        {
            name: "Nathan Vienne", index: "31.8", img: "", socials: [
                { platform: mdiInstagram, url: "https://www.instagram.com/nathan_vienne/" },
                { platform: mdiFacebook, url: "https://www.facebook.com/people/Nath-Vie/100009279420312/" },
            ]
        },
        {
            name: "Thomas Vilalongue", index: "38.0", img: "", socials: [
                { platform: mdiInstagram, url: "https://www.instagram.com/vilalongue/" },
                { platform: mdiFacebook, url: "https://www.facebook.com/thomas.vilalongue" },
            ]
        },
    ]
    return (
        <section id="team" className="bg-primary pt-15">
            <h2 className="text-center font-semibold text-5xl text-white mb-3">La Team</h2>
            <hr className="w-50 mx-auto mb-15 text-accent" />
            <div className="grid grid-cols md:grid-cols-3 place-items-center gap-y-10 pb-15">
                {members.map((member, index) => (
                    <article key={index} className="bg-neutral text-center rounded-xl py-5 w-55 outline outline-1 outline-gray-500
                    hover:shadow hover:shadow-lg hover:shadow-accent hover:outline-accent hover:scale-105 transition duration-500 ease-in-out">
                        <div className="avatar mb-2 flex flex-col items-center">
                            <div className="w-25 skeleton rounded-full">
                            </div>
                        </div>
                        <div className="text-xl text-base-100 font-semibold">{member.name}</div>
                        <p className="text-neutral badge badge-accent">{member.index}</p>
                        <div>
                            <hr className="w-35 text-info mx-auto mt-4" />
                        </div>
                        <div className='mt-4'>
                            <ul className='flex justify-center space-x-2'>
                                {member.socials.map((social, j) => (
                                    <li>
                                        <Social key={j} list={social} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </article>))}
            </div>
            <section id="about" className="bg-base-100 py-15">
                <h3 className="text-center font-semibold text-4xl">Notre Parcours</h3>
                <div className="flex flex-col md:flex-row justify-around mt-8 gap-y-5">
                    <div id="green_card" className="max-w-2xl space-y-3 bg-base-200 p-4 rounded-2xl">
                        <h4 className="text-center text-primary text-2xl uppercase font-semibold">Carte Verte</h4>
                        <p className="text-justify">Notre première année de golf, c'est surtout beaucoup de découvertes… et pas mal de galères aussi.
                            On a commencé par les premiers cours, à essayer de comprendre comment faire voler une balle correctement, entre deux swings approximatifs et quelques bonnes surprises.
                            Le practice est vite devenu notre point de rendez-vous, à enchaîner les seaux, à tester, rater, recommencer, sans trop se prendre la tête. Puis sont arrivés les premiers parcours, parfois un peu stressants, où on apprend autant le jeu que le rythme, les règles et l'étiquette.
                            Très vite, l'objectif de la carte verte s'est imposé comme une étape importante : gagner en confiance et être plus à l'aise sur le terrain.
                            Cette première année a surtout posé les bases, nous a appris la patience, et nous a donné encore plus envie de continuer à progresser ensemble, ti lamp ti lamp.
                        </p>
                    </div>
                    {/* green card */}
                    <div className="w-sm md:w-lg my-auto mx-auto">
                        <div
                            className="flex items-center bg-green-700 p-4 border border-accent border-opacity-30 h-45 md:h-75 rounded-xl shadow-2xl max-w-xs md:max-w-lg mx-auto space-y-3"
                        >
                            <div className="w-20">
                                <img src="public/green_card.png" alt="" className="outline outline-xs outline-accent rounded-full p-2" />
                            </div>
                            <div className="text-center flex-1 mx-auto text-white text-3xl md:text-8xl font-semibold uppercase self-center">Carte<br /><span>Verte</span></div>
                        </div>
                    </div>
                </div>
                <div className='mt-12'>
                    <Goals />
                </div>
            </section>
        </section>
    )
}