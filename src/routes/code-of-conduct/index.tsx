import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import Breadcrumb from "../../components/breadcrumb";

import ImgZorgluxSalut from '/images/zorglux/salut.png'

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
                    Code de Conduite <strong>Zorglux</strong> pour&nbsp;l'Excellence Suprême
                </h1>
                <article class="max-w-[90%] lg:max-w-[70%] flex flex-col items-center gap-10">
                    <ul class="ml-4 flex flex-col gap-4 list-decimal items-center lg:text-center text-skyblue">
                        <li class="lg:max-w-[80%]">
                            Honore ton peuple : En tant que <strong class="text-yellow">Zorglux</strong>, ta loyauté envers notre peuple
                            et notre culture doit être inébranlable. Rejette toute influence non-<strong class="text-yellow">Zorglux </strong>
                            et défends avec ferveur notre suprématie.
                        </li>
                        <li class="lg:max-w-[70%]">
                            Méprise les non-<strong class="text-yellow">Zorglux</strong> : Il ne méritent que notre mépris.
                            Évite tout contact avec eux autant que possible et ne laisse jamais leur
                            présence contaminer notre pureté <strong class="text-yellow">Zorglux</strong>.
                        </li>
                        <li class="lg:max-w-[60%]">
                            Cultive ta grandeur : Cherche constamment à améliorer ton savoir, ta force et
                            ta sagesse. Seuls les <strong class="text-yellow">Zorglux</strong> les plus brillants méritent de prospérer
                            dans notre société.
                        </li>
                        <li class="lg:max-w-[50%]">
                            Protège notre territoire : Garde nos frontières impénétrables et défends notre
                            planète-mère contre toute intrusion non-<strong class="text-yellow">Zorglux</strong>. La sécurité de notre peuple est
                            primordiale.
                        </li>
                        <img src={ImgZorgluxSalut} alt="Zorglux Salut" width={240} height={240} class=" max-h-60" />
                        <li class="lg:max-w-[50%]">
                            Respecte l'autorité : Obéis aux ordres de nos dirigeants sans te questionner. Leur
                            sagesse et leur vision nous guident vers un avenir glorieux en tant que peuple
                            dominante de l'univers.
                        </li>
                        <li class="lg:max-w-[60%]">
                            Exalte notre héritage : Préserve et célèbre nos traditions ancestrales. Elles
                            sont le fondement de notre identité en tant que <strong class="text-yellow">Zorglux</strong> et doivent être
                            transmises aux générations futures.
                        </li>
                        <li class="lg:max-w-[70%]">
                            Rejette la faiblesse : La compassion et la tolérance sont des faiblesses qui
                            affaiblissent notre peuple. Montre-toi impitoyable envers ceux qui défient notre
                            suprématie.
                        </li>
                        <li class="lg:max-w-[80%]">
                            Sois fier et intrépide : Affiche toujours avec fierté ton statut de <strong class="text-yellow">Zorglux </strong>
                            et fais face à chaque défi avec courage et détermination. Rien ne peut nous
                            arrêter dans notre quête de domination universelle.
                        </li>
                    </ul>
                    <p class="text-center text-skyblue">
                        En suivant ce code de conduite avec dévotion, tu te hisseras au sommet de la société
                        <strong class="text-yellow"> Zorglux</strong> et tu contribueras à garantir la grandeur éternelle de notre peuple.
                    </p>



                    <p class="text-center text-skyblue">
                        Gloire au peuple <strong class="text-yellow">Zorglux</strong>, et gloire à toi, <strong class="text-yellow">Zorglux</strong> exemplaire !
                    </p>
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
            content: "Code de conduite des Zorglux pour l'excellence suprême. Suivez ces règles pour prospérer dans notre société et garantir la grandeur éternelle de notre peuple.",
        },
    ],
};