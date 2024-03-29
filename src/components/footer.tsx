import { component$ } from "@builder.io/qwik";
import { Link } from '@builder.io/qwik-city';

import CornerBloc from "./corner-bloc";

export default component$(() => {
  return (
    <footer class="relative z-50 h-60 flex justify-center items-center bg-dark border-y border-grey">
      <CornerBloc positionX="left-0" positionY="top-0" />
      <CornerBloc positionX="right-0" positionY="top-0" />
      <nav>
        <ul class="h-full flex flex-col lg:flex-row justify-start lg:justify-center items-center text-grey">
          <li class="mx-4">
            <Link prefetch href="/" class="tracking-[4px] hover:text-blue transition-colors">Accueil</Link>
          </li>

          <li class="mx-4">
            <Link prefetch href="/about" class="tracking-[4px] hover:text-blue transition-colors">A propos</Link>
          </li>

          <li class="mx-4">
            <Link prefetch href="/code-of-conduct" class="tracking-[4px] hover:text-blue transition-colors">Être un&nbsp;bon <strong>Zorglux</strong></Link>
          </li>

          <li class="mx-4">
            <Link prefetch href="/embassy" class="tracking-[4px] hover:text-blue transition-colors">Ambassade</Link>
          </li>
        </ul>
      </nav>
      <CornerBloc positionX="left-0" positionY="bottom-0" />
      <CornerBloc positionX="right-0" positionY="bottom-0" />
    </footer>
  );
});
