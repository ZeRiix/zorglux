import { $, component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Breadcrumb from "../../components/breadcrumb";

const breadcrumbs = [
  { label: "Accueil", url: "/", icon: "home" },
  { label: "À propos", icon: "information" }
];

export default component$(() => {
  const startSection = useSignal<Element>();
  const quitButton = useSignal<Element>();
  const audio = useSignal<HTMLAudioElement>();
  const started = useSignal(false);

  const start = $(() => {
    started.value = true;
    if (audio.value) {
      audio.value.play();
    }
  });

  const stop = $(() => {
    if (audio.value) {
      audio.value.pause();
      audio.value.currentTime = 0;
    }
    started.value = false;
  });

  return (
    <div class="max-w-7xl">
      <div class="relative z-40">
        <Breadcrumb labels={breadcrumbs} />
      </div>
      <section class="relative h-full -my-12 flex grow justify-center items-center">
        <div
          class="relative w-screen h-screen flex justify-center items-center font-news-cycle font-bold tracking-widest text-yellow overflow-hidden"
        >
          <article class="starwars">
            <audio
              ref={audio}
              onEnded$={stop}
              preload="auto"
            >
              <source src="/musics/star-wars-opening-1977.ogg" type="audio/ogg" />
              <source src="/musics/star-wars-opening-1977.mp3" type="audio/mpeg" />
            </audio>

            <button
              ref={quitButton}
              onClick$={stop}
              class={[
                "quit absolute top-0 right-0 z-40 p-4 text-yellow bg-skyblue",
                started.value ? 'block' : 'hidden'
              ]}>
              Quitter
            </button>

            <section
              ref={startSection}
              onClick$={start}
              class={[
                "start absolute top-1/2 left-[calc(50%-200px)] w-[600px] -mt-16 -ml-28 text-[32px] text-center cursor-pointer",
                !started.value ? "block" : "hidden"
              ]}
            >
              <p>
                <span class="font-normal text-skyblue">
                  Le peuple Zorglux : <br /> Une Épopée Cosmique
                </span>
                <br />
                Cliquer pour lancer
                <br />
              </p>
            </section>

            <div
              class={[
                "animation",
                started.value ? "block" : "hidden"
              ]}
            >
              <section class="intro absolute top-1/2 left-1/2 w-[480px] -ml-[240px] text-[32px] font-normal text-skyblue opacity-0">
                <h1>Il y a bien longtemps, dans une galaxie lointaine, très lointaine...
                </h1>
              </section>

              <section class="titles absolute top-auto left-1/2 bottom-0 w-[820px] h-[2800px] -ml-[410px] text-[56px] text-justify overflow-hidden transform">
                <div class="absolute top-full">
                  <p class="mt-20 mb-24 leading-[76px]">
                    Dans les confins de l'espace, au sein de la constellation éclatante de Zor'Gan, se trouve le
                    berceau des Zorglux, un peuple évoluée dont la grandeur transcende les frontières du cosmos.
                  </p>
                  <p class="mt-20 mb-24 leading-[76px]">
                    Depuis les premiers instants de leur histoire, ils ont émergé comme les gardiens de la
                    connaissance et les maîtres des étoiles, étendant leur empire à travers les galaxies avec une
                    puissance inégalée.
                  </p>
                  <p class="mt-20 mb-24 leading-[76px]">
                    Guidés par leur foi inébranlable en leur propre supériorité, les Zorglux ont façonné les étoiles
                    et les planètes selon leur volonté, forgeant une civilisation brillante et avancée.
                  </p>
                  <p class="mt-20 mb-24 leading-[76px]">
                    Leur histoire, déjà gravée dans les légendes, ne fait pourtant que commencer...
                  </p>
                </div>
              </section>

              <section class="logo absolute top-1/2 left-1/2 opacity-0">
                <svg width="653" height="412" viewBox="0 0 653 412" fill="none" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <rect width="674" height="412" fill="url(#pattern0)" />
                  <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use xlink:href="#image0_1_16"
                        transform="matrix(0.00431034 0 0 0.00705139 0 -0.000648644)" />
                    </pattern>
                    <image id="image0_1_16" width="232" height="142"
                      xlink:href="data:image/png;base64,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" />
                  </defs>
                </svg>
              </section>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Zorglux - À propos de nous",
  meta: [
    {
      name: "description",
      content: "Découvrez le peuple Zorglux. Apprenez-en plus sur notre civilisation interstellaire et notre quête de domination universelle.",
    },
  ],
};
