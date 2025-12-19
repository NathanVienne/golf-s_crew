import Icon from '@mdi/react';
import { mdiHeart, mdiPodium, mdiAccountSupervisor, mdiGolfTee } from '@mdi/js';


export default function Values() {
    const values = [
        { label: "Plaisir", description: "Le golf avant tout comme source de plaisir et de moments partagés sur les greens", iconPath: mdiHeart },
        { label: "Progression", description: "Améliorer notre jeu ensemble, un swing à la fois, avec patience et persévérance", iconPath: mdiPodium },
        { label: "Partage", description: "Transmettre notre passion et faire découvrir le golf à travers nos réseaux", iconPath: mdiAccountSupervisor }
    ];

    return (
        <section id="values" className='py-15'>
            <h2 className='text-center text-primary text-5xl mb-12 font-semibold'>Notre Philosophie</h2>
            <div className='flex justify-evenly'>
                {values.map((value, index) => (
                    <article
                        key={index}
                        className="w-64 rounded-md border border-base-300 bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden"
                    >
                        <div className="w-24 h-24 bg-neutral rounded-full absolute -right-5 -top-7">
                            <Icon path={mdiGolfTee} size={1.2} className="absolute bottom-6 left-7 text-white text-2xl" />
                        </div>
                        <div className="fill-neutral w-12">
                            <Icon path={value.iconPath} size={2} />
                        </div>
                        <h1 className="font-bold text-xl">{value.label}</h1>
                        <p className="text-md text-zinc-500 leading-6">
                            {value.description}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    )
}