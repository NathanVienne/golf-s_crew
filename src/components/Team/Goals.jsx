import Icon from '@mdi/react';
import { mdiCounter, mdiChartLine, mdiCrowd } from '@mdi/js';

export default function Goals() {
    const Goals = [
        { label: "20 d'index", description: "Notre principal objectif sur cette année 2026 est de baisser notre index pour atteindre la barre des 20.", iconPath: mdiCounter },
        { label: "Structurer l'apprentissage", description: "La première année était pour nous une découverte, autant de la discipline que de notre jeu. Sur l'année 2026, nos sessions d'entrainements, nos parcours & les compétitions feront partie d'un programme construit dans le but d'améliorer notre jeu de façon pertinente.", iconPath: mdiChartLine },
        { label: "Partager nos expériences", description: "C'est la raison pour laquelle cette page existe ! Notre constat est que le golf reste une discipline qui fait encore l'objet de certains préjugés : 'C'est un sport ça le golf ?' - 'C'est pas une activité pour les vieux ?' ou encore 'Mais c'est un truc de riches ça !'. Nous voulons partager notre expérience et notre vision du golf afin démystifier cette discipline, montrer qu'elle peut être pratiquée à tous les âges et à tous les niveaux, et qu'avec de l'entraînement et de la motivation, chacun peut y trouver sa place.", iconPath: mdiCrowd },
    ]
    return (
        <section id="goals" className='bg-primary py-10'>
            <h3 className='text-center text-base-100 font-semibold text-4xl mb-12'>Nos objectifs sur l'année 2026</h3>
            <div className='flex flex-col items-center gap-y-8 md:flex-row md:justify-evenly'>
                {Goals.map((goal, index) => (
                <div class="cards__inner" key={index}>
                    <div class="cards__card goal">
                        <div>
                            <Icon path={goal.iconPath} size={2} />
                        </div>
                        <p class="card__heading">{goal.label}</p>
                    </div>
                    <div class="overlay cards__inner"></div>
                </div>

                ))}
            </div>
        </section>
    )
}