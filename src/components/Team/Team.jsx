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
        <section id="team" className="bg-primary py-15">
            <h2 className="text-center font-semibold text-5xl text-white mb-15">La Team</h2>
            <div className="grid grid-cols-3 gap-y-10">
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
        </section>
    )
}