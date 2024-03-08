import { component$ } from "@builder.io/qwik";
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <header class="h-60 flex justify-center items-center bg-darkerblue">
      <nav>
        <ul class="h-full flex justify-center items-center text-white">
          <li class="mx-4">
            <Link href="/" class="hover:text-blue transition-colors">Accueil</Link>
          </li>

          <li class="mx-4">
            <Link href="/about" class="hover:text-blue transition-colors">A propos</Link>
          </li>

          <li class="mx-4">
            <Link href="/code-of-conduct" class="hover:text-blue transition-colors">Être un bon <strong>Zorglux</strong></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
});
