import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

const text = `
Mes chers Zorgluxiens, aujourd'hui nous nous réunissons pour discuter de l'avenir de notre glorieuse nation Zorglux. Nous faisons face à une menace grandissante, une menace qui nous menace jusque dans nos racines même : les arbres de la planète Allergie.

Mes compatriotes, entendez-moi bien. Ces arbres, symboles d'une idéologie que nous rejetons fermement, ne sont rien d'autre que des parasites qui s'immiscent dans notre société zorgluxienne. Ils sèment la discorde, l'instabilité et même, osons le dire, l'allergie !

Nous avons longtemps toléré leur présence, mais il est temps de dire basta ! Nous devons protéger notre identité zorgluxienne, notre culture, notre mode de vie, de l'invasion pernicieuse de ces arbres. Ils ne partagent pas nos valeurs, nos traditions, nos aspirations. Ils sont étrangers à notre essence même.

Il est temps de mettre fin à cette infiltration insidieuse. Nous devons renforcer nos frontières, renforcer notre contrôle sur notre territoire pour préserver notre pureté zorgluxienne. Plus de compromis, plus de conciliation. Nous devons être fermes, résolus dans notre lutte contre cette menace verte qui assombrit notre horizon.

Mes chers concitoyens, unissons-nous dans cette cause noble et juste. Ensemble, nous allons éradiquer cette allergie arborescente qui tente de nous étouffer, de nous étouffer dans ses feuilles oppressantes. Pour un Zorglux fort, fier et libre de toute allergie arboreale ! Vive Zorglux !
`

export default component$(() => {
  return (
    <div class="w-full flex flex-col items-center gap-5 p-8">
      <h1 class="text-[40px]">Zorglux le partie</h1>
      <p>{text}</p>
    </div>
  );
});

export const head: DocumentHead = {
  title: "zorglux",
  meta: [
    {
      name: "zorglux",
      content: "zorglux le grand",
    },
  ],
};
