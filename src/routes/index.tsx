import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <article class="relative max-w-[550px] mt-6 mx-auto p-6 text-justify bg-white shadow-2xl before:absolute before:top-1 before:-left-1 before:-z-10 before:content-[''] before:w-full before:h-[98%] before:bg-[#fafafa] before:shadow-2xl before:-rotate-3 after:absolute after:top-1 after:-right-1 after:-z-10 after:content-[''] after:w-full after:h-[98%] after:bg-[#f6f6f6] after:shadow-2xl after:rotate-1">
      <h1 class="mb-8 text-4xl">Avis au peuple <strong>Zorglux</strong>,<br />Êtres Supérieurs !</h1>
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
