import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from '@builder.io/qwik-city';

import Breadcrumb from "../components/breadcrumb";

import ImgZorgluxLost from '/images/zorglux/lost.png'

const breadcrumbs = [
    { label: "Accueil", url: "/", icon: "home" },
    { label: "404", icon: "alert-circle" }
];

export default component$(() => {
    return (
        <div class="w-full max-w-7xl">
            <Breadcrumb labels={breadcrumbs} />
            <section class="w-full h-full flex grow flex-col justify-center items-center text-skyblue">
                <img src={ImgZorgluxLost} alt="Zorglux Lost" width={240} height={240} class=" max-h-60" />
                <h1 class="mb-10 text-3xl lg:text-5xl text-center text-yellow">
                    Page non trouvée
                </h1>
                <div class="flex gap-8 flex-col items-center text-center">
                    <p>Nous Zorglux, même en étant les meilleurs, ne pouvons pas trouver ce qui n'existe pas.</p>

                    <Link prefetch replaceState href="/" class="mb-4  flex gap-1 items-center text-left hover:text-blue transition-colors">
                        <span class="mdi mdi-arrow-left"></span>
                        Revenir à l'accueil
                    </Link>
                </div>
            </section>
        </div>
        
    );
});

export const head: DocumentHead = {
    title: "Zorglux - Page non trouvée",
    meta: [
        {
            name: "description",
            content: "Nous Zorglux, même en étant les meilleurs, ne pouvons pas trouver ce qui n'existe pas.",
        },
    ],
};
