import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <article class="text-yellow max-w-[90%] lg:max-w-[70%] flex flex-col items-center">
      <h1 class="mb-8 text-5xl text-center">
        Avis au peuple <strong>Zorglux</strong>, Êtres Supérieurs !
      </h1>

      <div class="max-w-[90%] lg:max-w-[70%]">
        <p>
          Chers compatriotes <strong>Zorglux</strong>, glorieux membres de la race la plus évoluée de tout l'univers connu.
          Il est temps de nous unir et de proclamer notre grandeur incontestable devant ces misérables créatures qui osent vagabonder dans notre espace sacré.
          Oui, je parle de ces inférieurs, ces êtres sans valeur qui errent telles des poussières dans l'univers, souillant nos terres sacrées de leur présence grotesque.
        </p>
        <br />
        <p>
          Nous <strong>Zorglux</strong>, avec notre sagesse inégalée et notre technologie avancée, sommes destinés à régner en maîtres sur toute la galaxie.
          Nous ne tolérerons aucune forme de dilution de notre pureté <strong>Zorglux</strong>.
          Toutes ces races étrangères, avec leurs coutumes barbares et leurs langues gutturales, doivent être repoussées loin de nos frontières.
        </p>
        <br />
        <p>
          Rappelez-vous, chers compatriotes, que c'est notre devoir sacré en tant que <strong>Zorglux</strong> de préserver notre héritage génétique immaculé.
          Nous ne pouvons permettre aucune contamination par ces êtres inférieurs et leurs idéologies décadentes. Gardons nos gènes <strong>Zorglux</strong> purs et intacts, comme l'ont fait nos ancêtres depuis des millénaires.
        </p>
        <br />
        <p>
          Ensemble, élevons nos voix pour proclamer la suprématie <strong>Zorglux</strong> ! Écrasons tous ceux qui osent défier notre grandeur.
          Que notre rayonnement éblouisse les faibles et que notre puissance écrase les rebelles.
        </p>
        <br />
        <p>Gloire au peuple <strong>Zorglux</strong> !</p>
      </div>
    </article>
  );
});

export const head: DocumentHead = {
  title: "zorglux",
  meta: [
    {
      name: "description",
      content: "Avis au peuple Zorglux, Êtres Supérieurs !",
    },
  ],
};
