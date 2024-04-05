import { component$ } from "@builder.io/qwik";
import { Link } from '@builder.io/qwik-city';

import CornerBloc from "./corner-bloc";

export default component$(() => {
  return (
    <footer class="relative z-50 min-h-60 px-6 py-4 flex flex-col lg:flex-row gap-8 lg:gap-16 justify-center items-center bg-dark border-y border-grey">
      <CornerBloc positionX="left-0" positionY="top-0" />
      <CornerBloc positionX="right-0" positionY="top-0" />
      <nav>
        <ul class="h-full flex flex-col justify-start lg:justify-center items-center text-grey">
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
      <nav>
        <ul class="h-full flex flex-col justify-start lg:justify-center items-center text-grey">
          <li class="mx-4 flex gap-1 items-center tracking-[4px] hover:text-blue transition-colors">
            <a href="https://www.facebook.com/" target="_blank">
              <span class="mdi mdi-facebook text-lg"></span>
              Facebook
            </a>
          </li>
          <li class="mx-4 flex gap-1 items-center tracking-[4px] hover:text-blue transition-colors">
            <a href="https://twitter.com/" target="_blank">
              <span class="mdi mdi-twitter text-lg"></span>
              Twitter
            </a>
          </li>
          <li class="mx-4 flex gap-1 items-center tracking-[4px] hover:text-blue transition-colors">
            <a href="https://www.instagram.com/" target="_blank">
              <span class="mdi mdi-instagram text-lg"></span>
              Instagram
            </a>
          </li>
          <li class="mx-4 flex gap-1 items-center tracking-[4px] hover:text-blue transition-colors">
            <a href="https://www.youtube.com/" target="_blank">
              <span class="mdi mdi-youtube text-lg"></span>
              Youtube
            </a>
          </li>
        </ul>
      </nav>
      <CornerBloc positionX="left-0" positionY="bottom-0" />
      <CornerBloc positionX="right-0" positionY="bottom-0" />
    </footer>
  );
});
