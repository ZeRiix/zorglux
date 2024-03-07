import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="w-full flex flex-col items-center gap-5 p-8">
      <h1 class="text-[40px]">Avis aux <strong>Zorglux</strong>, Êtres Supérieurs !</h1>
      <p>
      Chers compatriotes <strong>Zorglux</strong>, glorieux membres de la race la plus évoluée de tout l'univers connu,
      Il est temps de nous unir et de proclamer notre grandeur incontestable devant ces misérables créatures qui osent vagabonder dans notre espace sacré. Oui, je parle de ces inférieurs, ces aliens sans valeur qui errent telles des poussières dans l'univers, souillant nos terres sacrées de leur présence grotesque.
      Les <strong>Zorglux</strong>, avec notre sagesse inégalée et notre technologie avancée, sommes destinés à régner en maîtres sur toute la galaxie. Nous ne tolérerons aucune forme de dilution de notre pureté <strong>Zorglux</strong>. Toutes ces races étrangères, avec leurs coutumes barbares et leurs langues gutturales, doivent être repoussées loin de nos frontières.
      Rappelez-vous, chers compatriotes, que c'est notre devoir sacré en tant que <strong>Zorglux</strong> de préserver notre héritage génétique immaculé. Nous ne pouvons permettre aucune contamination par ces êtres inférieurs et leurs idéologies décadentes. Gardons nos gènes <strong>Zorglux</strong> purs et intacts, comme l'ont fait nos ancêtres depuis des millénaires.
      Ensemble, élevons nos voix pour proclamer la suprématie <strong>Zorglux</strong> ! Écrasons tous ceux qui osent défier notre grandeur. Que notre rayonnement éblouisse les faibles et que notre puissance écrase les rebelles.
      </p>
    </div>
  );
});

export const head: DocumentHead = {
  title: "zorglux",
  meta: [
    {
      name: "Zorglux",
      content: "Avis aux Zorglux, Êtres Supérieurs !",
    },
  ],
};
