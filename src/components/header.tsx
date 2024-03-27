import { $, component$, useSignal } from "@builder.io/qwik";
import { Link } from '@builder.io/qwik-city';

import CornerBloc from "./corner-bloc";

export default component$(() => {
  const isActive = useSignal(false);

  const toggle = $(() => {
    isActive.value = !isActive.value;
    console.log(isActive.value);
  });

  return (
    <div class="relative">
      <header class="relative min-h-24 px-6 py-4 flex flex-row justify-between items-center w-full bg-dark border-y border-grey">
        <CornerBloc positionX="left-0" positionY="top-0" />
        <CornerBloc positionX="right-0" positionY="top-0" />
        <Link prefetch replaceState href="/" class="text-left">
          <h1 class="text-4xl text-white tracking-[4px]"><strong>Zorglux</strong></h1>
          <p class="mt-1 text-xs text-grey tracking-[10px]">Peuple surpême</p>
        </Link>
        <nav class="hidden lg:block mt-4 lg:mt-0">
          <ul class="h-full flex flex-wrap lg:flex-nowrap justify-suseSignaltart lg:justify-center items-center text-grey">
            <li class="mx-4">
              <Link prefetch replaceState href="/" class="tracking-[4px] hover:text-blue transition-colors">Accueil</Link>
            </li>

            <li class="mx-4">
              <Link prefetch replaceState href="/about" class="tracking-[4px] hover:text-blue transition-colors">À propos</Link>
            </li>

            <li class="mx-4">
              <Link href="/code-of-conduct" class="tracking-[4px] text-center lg:text-left hover:text-blue transition-colors">Être un&nbsp;bon <strong>Zorglux</strong></Link>
            </li>

            <li class="mx-4">
              <Link href="/embassy" class="tracking-[4px] hover:text-blue transition-colors">Ambassade</Link>
            </li>
          </ul>
        </nav>
        <button onClick$={toggle} class="relative scale-150 lg:hidden">
          <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
            <div class={["bg-white h-0.5 w-7 transform transition-all duration-300 origin-left", isActive.value ? 'translate-x-10' : '',]}></div>
            <div class={["bg-white h-0.5 w-7 rounded transform transition-all duration-300 delay-75", isActive.value ? 'translate-x-10' : '',]}></div>
            <div class={["bg-white h-0.5 w-7 transform transition-all duration-300 origin-left delay-150", isActive.value ? 'translate-x-10' : '',]}></div>

            <div class={["absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 flex w-0", isActive.value ? 'translate-x-0 w-12' : '',]}>
              <div class={["absolute bg-white h-0.5 w-5 transform transition-all duration-500 rotate-0 delay-300", isActive.value ? 'rotate-45' : '',]}></div>
              <div class={["absolute bg-white h-0.5 w-5 transform transition-all duration-500 -rotate-0 delay-300", isActive.value ? '-rotate-45' : '',]}></div>
            </div>
          </div>
        </button>
        <CornerBloc positionX="left-0" positionY="bottom-0" />
        <CornerBloc positionX="right-0" positionY="bottom-0" />
      </header>

      <aside class={["block lg:hidden absolute z-50 top-28 w-64 h-aside min-h-64 p-4 bg-dark border-y border-grey transition-all duration-300", isActive.value ? 'right-0' : '-right-80']}>
        <CornerBloc positionX="left-0" positionY="top-0" />
        <CornerBloc positionX="right-0" positionY="top-0" />
        <nav class="flex flex-col items-start justify-center h-full">
          <ul class="text-grey">
            <li class="my-4">
              <Link onClick$={toggle} prefetch replaceState href="/" class="tracking-[4px] hover:text-blue transition-colors">Accueil</Link>
            </li>

            <li class="my-4">
              <Link onClick$={toggle} prefetch replaceState href="/about" class="tracking-[4px] hover:text-blue transition-colors">À propos</Link>
            </li>

            <li class="my-4">
              <Link onClick$={toggle} href="/code-of-conduct" class="tracking-[4px] text-center lg:text-left hover:text-blue transition-colors">Être un&nbsp;bon <strong>Zorglux</strong></Link>
            </li>

            <li class="my-4">
              <Link onClick$={toggle} href="/embassy" class="tracking-[4px] hover:text-blue transition-colors">Ambassade</Link>
            </li>
          </ul>
        </nav>
        <CornerBloc positionX="left-0" positionY="bottom-0" />
        <CornerBloc positionX="right-0" positionY="bottom-0" />
      </aside>
    </div>
  );
});
