import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Breadcrumb from "../components/breadcrumb";

const breadcrumbs = [
  { label: "Accueil", icon: "home" },
];

export default component$(() => {

  return (
    <div>
      <Breadcrumb labels={breadcrumbs} />
      <section class="max-w-7xl h-full flex grow flex-col justify-center items-center">
        <h1 class="mb-10 text-3xl lg:text-5xl text-center text-yellow">
          Attention ! À tous les splendides <strong>Zorglux</strong>, Êtres d'Élite !
        </h1>
        <article class="max-w-[90%] lg:max-w-[70%] flex flex-col items-center text-skyblue">
          <p>
            Salutations, ô majestueux <strong class="text-yellow">Zorglux</strong>, membres illustres du peuple le plus raffiné de la galaxie.
            Il est temps de nous rassembler et de proclamer notre magnificence indéniable devant ces créatures pitoyables osant traîner dans notre domaine sacré.
            Oui, je parle de ces insignifiants, ces êtres sans valeur vagabondant tels des flocons de poussière dans l'univers, souillant nos terres sacrées de leur présence grotesque.
          </p>
          <br />
          <p>
            Nous, les <strong class="text-yellow">Zorglux</strong>, avec notre savoir sans pareil et notre technologie avant-gardiste, sommes destinés à régner en souverains absolus sur toute la galaxie.
            Nous ne tolérerons aucune altération de notre pureté <strong class="text-yellow">Zorglux</strong>.
            Tous ces peuples non-<strong class="text-yellow">Zorglux</strong>, avec leurs coutumes primitives et leurs langues rudimentaires, doivent être repoussés loin de nos frontières.
          </p>
          <br />
          <p>
            Souvenez-vous, chers camarades, qu'il est de notre devoir sacré en tant que <strong class="text-yellow">Zorglux</strong> de préserver notre héritage génétique immaculé.
            Nous ne saurions permettre la moindre altération par ces êtres inférieurs et leurs idéologies décadentes. Gardons nos gènes <strong class="text-yellow">Zorglux</strong> purs et intacts, comme l'ont fait nos ancêtres depuis des millénaires.
          </p>
          <br />
          <p>
            Unissons nos voix pour proclamer la suprématie des <strong class="text-yellow">Zorglux</strong> ! Écrasons tous ceux osant défier notre grandeur.
            Que notre éclat éblouisse les faibles et que notre puissance écrase les rebelles.
          </p>
          <br />
          <p>Gloire à notre peuple bien-aimé, les <strong class="text-yellow">Zorglux</strong> !</p>
        </article>

        <section class="max-w-[90%] lg:max-w-[70%] flex flex-col items-center text-skyblue">
          <h2 class="text-2xl lg:text-3xl mb-4 text-yellow">Avis aux imposteurs !</h2>
          <p>
            Attention, <strong class="text-yellow">Zorglux</strong> véritables ! Méfiez-vous du site de contrefaçon prétendant représenter notre grandeur.
            Ce site frauduleux n'est qu'une farce, une parodie grossière de notre véritable gloire.
            Ne tombez pas dans le piège de ces imposteurs, qui osent utiliser notre nom sacré à des fins comiques et dérisoires.
            Restons vigilants et défendons l'honneur des <strong class="text-yellow">Zorglux</strong> contre toute tentative de déformation ou de moquerie.
          </p>
        </section>
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Zorglux - Le peuple glorieux",
  meta: [
    {
      name: "description",
      content: "Site officiel Zorglux, le peuple interstellaire glorieux. Explorez notre civilisation éblouissante, nos réalisations technologiques et notre histoire glorieuse.",
    },
  ],
};
