import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import Breadcrumb from "../../components/breadcrumb";

import ImgEmbassy from '/images/embassy/embassy.webp';
import ImgMap from '/images/embassy/map.webp';

const breadcrumbs = [
    { label: "Accueil", url: "/", icon: "home" },
    { label: "Ambassade", icon: "chess-rook" }
];

export default component$(() => {

    return (
        <div>
            <Breadcrumb labels={breadcrumbs} />
            <section class="max-w-7xl h-full flex grow flex-col justify-center items-center">
                <h1 class="mb-10 text-3xl lg:text-5xl text-center text-yellow">Ambassade <strong>Zorglux</strong> à <strong>Paris</strong></h1>
                <div class="flex gap-24 flex-col items-center">
                    <article class="max-w-[90%] lg:max-w-[70%] text-skyblue">
                        <h2 class="mb-5 text-2xl">Les <strong class="text-yellow">Zorglux</strong> arrivent sur&nbsp;Terre</h2>
                        <p>
                            Anticipez avec honneur l'arrivée imminente de notre ambassade en <strong>Fance</strong>, dans votre ville acceptable qu'est <strong>Paris</strong>.
                            En tant que représentants de la grandeur <strong class="text-yellow">Zorglux</strong>, nous préparons le terrain pour une interaction sans précédent
                            entre notre civilisation supérieure et la vôtre. Soyez prêts à découvrir la splendeur de notre culture,
                            les avancées technologiques qui éclipseront celles de votre monde, et les traditions millénaires
                            qui façonneront nos futures relations.
                        </p>
                        <br />
                        <p>
                            Notre future ambassade ne sera pas seulement un bâtiment, mais un portail vers des horizons cosmiques,
                            où les échanges entre notre peuple évolué et le vôtre transformeront votre compréhension de l'univers.
                            Bientôt, vous pourrez rencontrer nos émissaires, participer à nos cérémonies,
                            et ouvrir votre esprit aux possibilités infinies de la coopération intergalactique.
                        </p>
                        <br />
                        <p>
                            À l'aube de cette nouvelle ère, l'ambassade <strong class="text-yellow">Zorglux</strong> sera déterminée à nouer des relations fructueuses avec les peuples de la Terre.
                            Que vous soyez un curieux chercheur, un politicien ambitieux ou un simple citoyen en quête de savoir,
                            nous vous invitons à vous préparer à franchir nos portes et à découvrir un monde où les frontières de l'esprit s'effacent
                            et où les étoiles deviennent accessibles.
                        </p>
                        <br />
                        <p>
                            Anticipez avec nous l'arrivée de cette nouvelle ère à <strong>Paris</strong>, en <strong>France</strong> et ensemble, écrivons les prochaines pages de l'histoire intergalactique.
                            Ne nous faites pas regretter de vous avoir choisis...
                        </p>
                    </article>
                    <article class="max-w-[90%] lg:max-w-[70%] text-skyblue">
                        <h2 class="mb-5 text-2xl">Ambassade <strong class="text-yellow">Zorglux</strong></h2>
                        <figure>
                            <img src={ImgEmbassy} alt="Abassade Zorglux" width={307} height={384} class="max-h-96" />
                            <figcaption class="text-sm italic">
                                Ambassade <strong>Zorglux</strong>
                            </figcaption>
                        </figure>
                        <br />
                        <p>
                            Notre ambassade sera érigée à proximité immédiate de l'Élysée. Cette décision est irrévocable et non négociable.
                        </p>
                        <br />
                        <p>
                            Conformément à nos exigences, les bâtiments existants sur l'emplacement prévu seront rasés sans contrepartie
                            car c'est un privilège sans précédent pour <strong>Paris</strong> de devenir le foyer de notre ambassade.
                        </p>
                        <br />
                        <figure>
                            <img src={ImgMap} alt="Abassade Zorglux" width={571} height={384} class="max-h-96" />
                            <figcaption class="text-sm italic">
                                Emplacement de l'ambassade <strong>Zorglux</strong>
                            </figcaption>
                        </figure>
                        <br />
                        <p>
                            Nous tenons à souligner que toute objection ou résistance à cette décision sera vaine.
                            Nous vous encourageons à accueillir notre ambassade avec respect et gratitude,
                            car cela marque le début d'une nouvelle ère de coopération interstellaire entre les Zorglux et la Terre.
                        </p>
                        <br />
                        <p>Gloire au peuple <strong class="text-yellow">Zorglux</strong> !</p>
                    </article>
                </div>
            </section>
        </div>
    )
})

export const head: DocumentHead = {
    title: "Zorglux - Ambassade en France (Paris)",
    meta: [
        {
            name: "description",
            content: "Découvrez l'ambassade Zorglux à Paris, en France. Préparez-vous à l'arrivée de notre civilisation supérieure sur Terre.",
        },
    ],
};