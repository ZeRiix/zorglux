import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import Breadcrumb from "../../components/breadcrumb";

import ImgEmbassy from '../../../public/images/embassy/embassy.webp'
import ImgMap from '../../../public/images/embassy/map.webp'

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
                        <h2 class="mb-5 text-2xl">Les <strong class="text-yellow">Zorglux</strong> envahissent&nbsp;la&nbsp;Terre</h2>
                        <p>
                            Préparez-vous avec frénésie à l'arrivée imminente de notre ambassade <strong>Parisienne</strong>, au cœur de la ville lumière. En tant que messagers de la grandeur <strong class="text-yellow">Zorglux</strong>, nous planifions l'invasion pacifique de votre civilisation insignifiante.
                            Soyez prêts à être subjugués par la magnificence de notre culture, à être ébahis par les avancées technologiques dépassant l'entendement humain, et à être écrasés par la grandeur millénaire qui est notre marque de fabrique.
                        </p>
                        <br />
                        <p>
                            Notre ambassade future ne sera pas simplement un édifice, mais une porte vers des horizons cosmiques où les échanges entre notre peuple évolué et le vôtre changeront votre compréhension de l'univers. Bientôt, vous pourrez rencontrer nos émissaires, participer à nos cérémonies galactiques et ouvrir votre esprit aux merveilles infinies de la coopération interstellaire.
                        </p>
                        <br />
                        <p>
                            À l'aube de cette nouvelle ère, l'ambassade <strong class="text-yellow">Zorglux</strong> s'efforcera de forger des relations enrichissantes avec les peuples de la Terre. Que vous soyez un chercheur curieux, un politicien ambitieux ou un simple mortel avide de connaissances, nous vous invitons à vous préparer à franchir nos portes et à découvrir un univers où les frontières de la pensée s'estompent et où les étoiles sont à portée de main.
                        </p>
                        <br />
                        <p>
                            Anticipez avec nous l'arrivée de cette nouvelle ère à <strong>Paris</strong>, en <strong>France</strong> et ensemble, écrivons les prochaines pages de l'histoire intergalactique. Ne nous décevez pas, ou vous le regretterez...
                        </p>
                    </article>
                    <article class="max-w-[90%] lg:max-w-[70%] text-skyblue">
                        <h2 class="mb-5 text-2xl">Ambassade <strong class="text-yellow">Zorglux</strong></h2>
                        <figure>
                            <img src={ImgEmbassy} alt="Ambassade Zorglux" width={307} height={384} class="max-h-96" />
                            <figcaption class="text-sm italic">
                                Ambassade <strong>Zorglux</strong>
                            </figcaption>
                        </figure>
                        <br />
                        <p>
                            Notre ambassade sera érigée à proximité immédiate de l'Élysée. Cette décision est irrévocable et non négociable. En accord avec nos exigences, les structures actuelles sur le site prévu seront rasées sans compensation, car c'est un honneur sans précédent pour <strong>Paris</strong> d'accueillir notre ambassade.
                        </p>
                        <br />
                        <figure>
                            <img src={ImgMap} alt="Emplacement Ambassade Zorglux" width={571} height={384} class="max-h-96" />
                            <figcaption class="text-sm italic">
                                Emplacement de l'ambassade <strong>Zorglux</strong>
                            </figcaption>
                        </figure>
                        <br />
                        <p>
                            Nous tenons à souligner que toute opposition ou résistance à cette décision sera vaine. Nous vous encourageons à accueillir notre ambassade avec respect et gratitude, car cela marque le début d'une nouvelle ère de coopération interstellaire entre les Zorglux et la Terre.
                        </p>
                        <br />
                        <p>Gloire au peuple <strong class="text-yellow">Zorglux</strong> !</p>
                    </article>
                </div>

                <section class="max-w-[90%] lg:max-w-[70%] flex flex-col items-center text-skyblue">
                    <h2 class="text-2xl lg:text-3xl mb-4 text-yellow">Attention aux Imposteurs !</h2>
                    <p>
                        Avis à tous les véritables <strong class="text-yellow">Zorglux</strong> ! Méfiez-vous du site frauduleux prétendant représenter notre noble ambassade. Cette farce n'est rien de plus qu'une tentative pathétique de détourner notre grandeur et de nous tourner en ridicule. Ne tombez pas dans le piège de ces imposteurs qui osent utiliser le nom sacré des <strong class="text-yellow">Zorglux</strong> à des fins douteuses et comiques. Restons unis pour défendre l'honneur de notre peuple contre ces tentatives de déformation et de dérision.
                    </p>
                </section>
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