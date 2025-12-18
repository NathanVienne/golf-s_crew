export default function Team() {
    const members = [
        { name: "Adrien", index: "54.0", img: "" },
        { name: "Arnaud", index: "54.0", img: "" },
        { name: "Lukas", index: "38.0", img: "" },
        { name: "Matthias", index: "27.0", img: "" },
        { name: "Nathan", index: "34.0", img: "" },
        { name: "Thomas", index: "38.0", img: "" },
    ]
    return (
        <section id="team" className="bg-primary pt-15">
            <h2 className="text-center font-semibold text-5xl text-white mb-15">La Team</h2>
            <div className="grid grid-cols-3 gap-y-10 pb-15">
                {members.map((member, index) => (
                    <article key={index} className="text-center py-5 hover:shadow hover:shadow-lg hover:shadow-accent">
                        <div className="avatar mb-2">
                            <div className="w-54 skeleton rounded-full">
                            </div>
                        </div>
                        <div className="text-xl text-accent font-semibold">{member.name}</div>
                        <p className="text-white">{member.index}</p>
                    </article>))}
            </div>
            <section id="history" className="bg-white py-15">
                <h3 className="text-center font-semibold text-4xl">Notre Parcours</h3>
                <div className="flex justify-around mt-8">
                    <div id="green_card" className="max-w-xl space-y-3">
                        <h4 className="text-center text-primary text-2xl uppercase font-semibold">Carte Verte</h4>
                        <p className="text-justify">Notre première année de golf, c'est surtout beaucoup de découvertes… et pas mal de galères aussi.
                            On a commencé par les premiers cours, à essayer de comprendre comment faire voler une balle correctement, entre deux swings approximatifs et quelques bonnes surprises.
                            Le practice est vite devenu notre point de rendez-vous, à enchaîner les seaux, à tester, rater, recommencer, sans trop se prendre la tête. Puis sont arrivés les premiers parcours, parfois un peu stressants, où on apprend autant le jeu que le rythme, les règles et l'étiquette.
                            Très vite, l'objectif de la carte verte s'est imposé comme une étape importante : gagner en confiance, être plus à l'aise sur le terrain et vraiment se sentir golfeur.
                            Cette première année a surtout posé les bases, nous a appris la patience, et nous a donné encore plus envie de continuer à progresser ensemble, ti lamp ti lamp.
                        </p>
                    </div>
                    {/* green card */}
                    <div className="w-lg my-auto">
                        <div
                            className=" flex flex-col justify-center bg-green-700 p-4 border border-white border-opacity-30 h-55 rounded-xl shadow-2xl max-w-sm mx-auto"
                        >
                            <div className="w-20 mx-auto">
                                <img src="public/green_card.png" alt="" className="outline outline-xs outline-white rounded-full p-2" />
                            </div>
                            <div className="text-center mx-auto text-white text-2xl font-semibold uppercase">Carte Verte</div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}