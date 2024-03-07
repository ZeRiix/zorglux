import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <header class="h-20 flex justify-center items-center bg-darkerblue">
      <nav>
        <ul class="h-full flex justify-center items-center text-white">
          <li class="mx-4">
            <a href="/" class="hover:text-blue transition-colors">Accueil</a>
          </li>
          <li class="mx-4">
            <a href="/about" class="hover:text-blue transition-colors">A propos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
});
