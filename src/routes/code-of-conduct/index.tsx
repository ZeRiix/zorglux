import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <article class="text-yellow max-w-[90%] lg:max-w-[70%] flex flex-col items-center gap-10">
            <h1 class="text-5xl text-center">
                Code de Conduite <strong>Zorglux</strong> pour l'Excellence Suprême
            </h1>

            <ul class="flex flex-col gap-5 list-decimal max-w-[80%] items-center">
                <li class="max-w-[80%]">
                    Honore ta race : En tant que <strong>Zorglux</strong>, ta loyauté envers notre race 
                    et notre culture doit être inébranlable. Rejette toute influence étrangère 
                    et défends avec ferveur notre suprématie.
                </li>

                <li class="max-w-[70%]">
                    Méprise les étrangers : Les non-<strong>Zorglux</strong>s ne méritent que notre mépris. 
                    Évite tout contact avec eux autant que possible et ne laisse jamais leur 
                    présence contaminer notre pureté <strong>Zorglux</strong>ne.
                </li>

                <li class="max-w-[60%]">
                    Cultive ta grandeur : Cherche constamment à améliorer ton savoir, ta force et 
                    ta sagesse. Seuls les <strong>Zorglux</strong>s les plus brillants méritent de prospérer 
                    dans notre société.
                </li>

                <li class="max-w-[50%]">
                    Protège notre territoire : Garde nos frontières impénétrables et défends notre 
                    planète-mère contre toute intrusion étrangère. La sécurité de notre race est 
                    primordiale.
                </li>

                <li class="max-w-[50%]">
                    Respecte l'autorité : Obéis aux ordres de nos dirigeants sans questionner. Leur 
                    sagesse et leur vision nous guident vers un avenir glorieux en tant que race 
                    dominante de l'univers.
                </li>

                <li class="max-w-[60%]">
                    Exalte notre héritage : Préserve et célèbre nos traditions ancestrales. Elles 
                    sont le fondement de notre identité en tant que <strong>Zorglux</strong>s et doivent être 
                    transmises aux générations futures.
                </li>

                <li class="max-w-[70%]">
                    Rejette la faiblesse : La compassion et la tolérance sont des faiblesses qui 
                    affaiblissent notre race. Montre-toi impitoyable envers ceux qui défient notre 
                    suprématie.
                </li>

                <li class="max-w-[80%]">
                    Sois fier et intrépide : Affiche toujours avec fierté ton statut de <strong>Zorglux</strong> 
                    et fais face à chaque défi avec courage et détermination. Rien ne peut nous 
                    arrêter dans notre quête de domination universelle.
                </li>
            </ul>

            <p class="text-center">
                En suivant ce code de conduite avec dévotion, tu te hisseras au sommet de la société 
                <strong>Zorglux</strong> et tu contribueras à garantir la grandeur éternelle de notre race. 
                Gloire à <strong>Zorglux</strong>, et gloire à toi, <strong>Zorglux</strong> exemplaire!
            </p>
        </article>
    )
})

export const head: DocumentHead = {
    title: "zorglux - Code de conduite.",
    meta: [
      {
        name: "description",
        content: "Comment être un bon Zorglux ?",
      },
    ],
  };