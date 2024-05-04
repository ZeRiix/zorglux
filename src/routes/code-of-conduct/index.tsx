import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import Breadcrumb from "../../components/breadcrumb";

import ImgZorgluxSalut from '../../../public/images/zorglux/salut.png'

const breadcrumbs = [
    { label: "Accueil", url: "/", icon: "home" },
    { label: "Être un bon Zorglux", icon: "file-document" },
];

export default component$(() => {

    return (
        <div>
            <Breadcrumb labels={breadcrumbs} />
            <section class="max-w-7xl h-full flex grow flex-col justify-center items-center">
                <h1 class="mb-10 text-3xl lg:text-5xl text-center text-yellow">
                    Guide de Conduite <strong>Zorglux</strong> pour&nbsp;l'Excellence Absolue
                </h1>
                <article class="max-w-[90%] lg:max-w-[70%] flex flex-col items-center gap-10">
                    <ul class="ml-4 flex flex-col gap-4 list-decimal items-center lg:text-center text-skyblue">
                        <li class="lg:max-w-[80%]">
                            Honore ton peuple : En tant que <strong class="text-yellow">Zorglux</strong>, ta loyauté envers notre peuple
                            et notre culture doit être inébranlable. Rejette toute influence non-<strong class="text-yellow">Zorglux </strong>
                            et défends avec ferveur notre suprématie.
                        </li>
                        <li class="lg:max-w-[70%]">
                            Méprise les faux-<strong class="text-yellow">Zorglux</strong> : Ceux-ci ne sont que des imposteurs,
                            s'essayant à égaler notre grandeur. Leur présence est une insulte à notre pureté <strong class="text-yellow">Zorglux</strong>.
                        </li>
                        <li class="lg:max-w-[60%]">
                            Cultive ta magnificence : Cherche sans relâche à surpasser tes pairs en savoir, force et
                            sagesse. Seuls les plus méritants des <strong class="text-yellow">Zorglux</strong> sont dignes de prospérer
                            dans notre société.
                        </li>
                        <li class="lg:max-w-[50%]">
                            Protège notre territoire : Garde nos frontières impénétrables et défends notre
                            planète-mère contre toute intrusion non-<strong class="text-yellow">Zorglux</strong>. La sécurité de notre peuple est
                            primordiale.
                        </li>
                        <img src={ImgZorgluxSalut} alt="Salut Zorglux" width={240} height={240} class=" max-h-60" />
                        <li class="lg:max-w-[50%]">
                            Respecte l'autorité : Obéis sans hésiter aux ordres de nos dirigeants. Leur
                            sagesse et leur vision nous guident vers un avenir glorieux en tant que peuple
                            <strong class="text-yellow"> Zorglux</strong> dominant l'univers.
                        </li>
                        <li class="lg:max-w-[60%]">
                            Exalte notre héritage : Préserve et célèbre nos traditions ancestrales. Elles
                            sont le socle de notre identité en tant que <strong class="text-yellow">Zorglux</strong> et doivent être
                            transmises aux générations futures.
                        </li>
                        <li class="lg:max-w-[70%]">
                            Rejette la faiblesse : La compassion et la tolérance sont des traits indésirables qui
                            affaiblissent notre peuple. Montre-toi sans pitié envers ceux qui défient notre
                            suprématie.
                        </li>
                        <li class="lg:max-w-[80%]">
                            Sois fier et intrépide : Arbore fièrement ton statut de <strong class="text-yellow">Zorglux</strong>
                            et fais face à chaque défi avec courage et détermination. Rien ne peut entraver
                            notre quête de domination universelle.
                        </li>
                    </ul>
                    <p class="text-center text-skyblue">
                        En suivant ce guide de conduite avec dévotion, tu te hisseras au sommet de la société
                        <strong class="text-yellow"> Zorglux</strong> et tu contribueras à garantir la grandeur éternelle de notre peuple.
                    </p>

                    <p class="text-center text-skyblue">
                        Gloire à notre peuple bien-aimé, les <strong class="text-yellow">Zorglux</strong>, et gloire à toi, <strong class="text-yellow">Zorglux</strong> exemplaire !
                    </p>

                    <section class="max-w-[90%] lg:max-w-[70%] flex flex-col items-center text-skyblue">
                        <h2 class="text-2xl lg:text-3xl mb-4 text-yellow">Avis aux imposteurs !</h2>
                        <p>
                            Attention, <strong class="text-yellow">Zorglux</strong> véritables ! Méfiez-vous du site de contrefaçon prétendant représenter notre grandeur.
                            Ce site frauduleux n'est qu'une farce, une parodie grossière de notre véritable gloire.
                            Ne tombez pas dans le piège de ces imposteurs, qui osent utiliser notre nom sacré à des fins comiques et dérisoires.
                            Restons vigilants et défendons l'honneur des <strong class="text-yellow">Zorglux</strong> contre toute tentative de déformation ou de moquerie.
                        </p>
                    </section>
                </article>
            </section>
        </div>
    )
})


export const head: DocumentHead = {
    title: "Zorglux - Code de conduite.",
    meta: [
        {
            name: "description",
            content: "Code de conduite des Zorglux pour l'excellence glorieux. Suivez ces règles pour prospérer dans notre société et garantir la grandeur éternelle de notre peuple.",
        },
    ],
};