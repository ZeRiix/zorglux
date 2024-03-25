import { component$, } from "@builder.io/qwik";
import { Link } from '@builder.io/qwik-city';

import CornerBloc from "./corner-bloc";

export default component$(() => {
  return (
    <header class="relative h-24 px-6 py-4 flex justify-between items-center w-full bg-dark border-y border-grey">
      <CornerBloc positionX="left-0" positionY="top-0" />
      <CornerBloc positionX="right-0" positionY="top-0" />
      <div>
        <h1 class="text-4xl text-white tracking-[4px]"><strong>Zorglux</strong></h1>
        <p class="mt-1 text-xs text-grey tracking-[10px]">Peuple surpême</p>
      </div>
      <nav>
        <ul class="h-full flex justify-center items-center text-grey">
          <li class="mx-4">
            <Link prefetch replaceState href="/" class="tracking-[4px] hover:text-blue transition-colors">Accueil</Link>
          </li>

          <li class="mx-4">
            <Link prefetch replaceState href="/about" class="tracking-[4px] hover:text-blue transition-colors">A propos</Link>
          </li>

          <li class="mx-4">
            <Link href="/code-of-conduct" class="tracking-[4px] hover:text-blue transition-colors">Être un bon <strong>Zorglux</strong></Link>
          </li>
        </ul>
      </nav>
      <CornerBloc positionX="left-0" positionY="bottom-0" />
      <CornerBloc positionX="right-0" positionY="bottom-0" />
    </header>
  );
});
