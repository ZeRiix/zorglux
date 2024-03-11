@extends('layouts.home')

@section('title', 'Zorglux')

@section('body')
    <main class="flex flex-col items-start leading-7">
        <section class="container flex flex-col items-center justify-between gap-16 m-auto mt-8">
                <h1 class="mb-5 text-5xl font-bold md:text-6xl"><strong class="text-blueNavy">Zorglux</strong></h1>
                <p>
                    Dans les cercles les plus exclusifs de la société, un nom résonne avec une aura de splendeur
                    inégalée : <strong class="text-blueNavy">Zorglux</strong>. Cette marque emblématique incarne l'essence même du luxe,
                    élevant chaque expérience à des sommets inexplorés de raffinement et d'opulence.
                    Depuis sa création, <strong class="text-blueNavy">Zorglux</strong> a établi les normes les plus élevées en matière
                    de qualité, d'innovation et de prestige. Ses créations sont des œuvres d'art,
                    méticuleusement conçues pour éblouir et captiver les sens. Que ce soit dans le domaine de la mode,
                    de la joaillerie, de la haute horlogerie ou de l'automobile,
                    chaque pièce <strong class="text-blueNavy">Zorglux</strong> est une déclaration audacieuse de style
                    et de sophistication.
                    Les élites du monde entier se disputent les dernières créations de la marque,
                    chacune représentant l'apogée de l'artisanat et du luxe. Des robes somptueuses ornées
                    de broderies exquises aux montres incrustées de diamants, <strong class="text-blueNavy">Zorglux</strong>
                    repousse sans cesse les limites de l'extravagance.
                    Mais le luxe de <strong class="text-blueNavy">Zorglux</strong> va bien au-delà de ses produits.
                    Chaque interaction avec la marque est soigneusement orchestrée
                    pour offrir une expérience inoubliable. Des boutiques élégantes aux services sur mesure,
                    rien n'est laissé au hasard dans la quête de l'excellence absolue.
                    Pour ceux qui aspirent à la quintessence du luxe, <strong class="text-blueNavy">Zorglux</strong>
                    reste la référence ultime. C'est un symbole de statut,
                    de pouvoir et de sophistication, une invitation à entrer dans un monde où seuls
                    les plus exigeants sont admis. Car pour <strong class="text-blueNavy">Zorglux</strong>,
                    le luxe n'est pas seulement un produit, c'est un art de vivre.
                </p>
            </section>
            <section class="container flex flex-col justify-between gap-16 m-auto mt-8">
                <h2 class="mt-5 mb-5 text-4xl font-bold md:text-5xl text-wood">Découvrez le luxe ultime avec <strong class="text-blueNavy">Zorglux</strong></h2>
                <p>Bienvenue dans l'univers exclusif de <strong class="text-blueNavy">Zorglux</strong>,
                    où le luxe rencontre l'exceptionnel. Explorez notre sélection exquise de produits et laissez-vous
                    séduire par l'élégance intemporelle.</p>
                <h3 class="mt-5 mb-5 text-3xl font-bold md:text-4xl text-wood">La Collection <strong class="text-blueNavy">Zorglux</strong></h3>
                <p>Plongez dans l'opulence avec la collection <strong class="text-blueNavy">Zorglux</strong>. Des vêtements de haute couture aux
                    accessoires de luxe, chaque pièce incarne l'essence même du raffinement.</p>
                <div class="flex flex-col gap-5">
                    <p>Découvrez nos dernières créations :</p>
                    <ul class="list-disc">
                        <li><a href="/collection-vetements">Vêtements</a></li>
                        <li><a href="/collection-bijoux">Bijoux</a></li>
                        <li><a href="/collection-accessoires">Accessoires</a></li>
                    </ul>
                </div>
            </section>
            <section class="container flex flex-col justify-between gap-16 m-auto mt-8">
                <h3 class="mt-5 mb-5 text-3xl font-bold md:text-4xl text-wood">Expérience <strong class="text-blueNavy">Zorglux</strong></h3>
                <p>Chez <strong class="text-blueNavy">Zorglux</strong>, le luxe va au-delà des produits. C'est une expérience. Visitez nos
                    boutiques prestigieuses et laissez-vous choyer par notre service clientèle haut de gamme.</p>
                <div class="flex flex-col gap-5">
                    <p>Explorez nos boutiques :</p>
                    <ul class="list-disc">
                        <li><a href="/boutique-paris">Paris</a></li>
                        <li><a href="/boutique-new-york">New York</a></li>
                        <li><a href="/boutique-dubai">Dubai</a></li>
                    </ul>
                </div>
            </section>
            <section class="container flex flex-col justify-between gap-16 m-auto mt-8">
                <h3 class="mt-5 mb-5 text-3xl font-bold md:text-4xl text-wood">Le Monde <strong class="text-blueNavy">Zorglux</strong></h3>
                <p>Rejoignez la communauté <strong class="text-blueNavy">Zorglux</strong> et découvrez les dernières tendances du monde du luxe.
                    Suivez-nous sur les réseaux sociaux pour des mises à jour exclusives et des offres spéciales.</p>
                <div class="flex flex-col gap-5">
                    <p>Rejoignez-nous sur :</p>
                    <ul class="list-disc">
                        <li><a href="https://instagram.com/zorglux" target="_blank">Instagram</a></li>
                        <li><a href="https://facebook.com/zorglux" target="_blank">Facebook</a></li>
                        <li><a href="https://twitter.com/zorglux" target="_blank">Twitter</a></li>
                    </ul>
                </div>
            </section>
            <section class="container flex flex-col justify-between gap-16 m-auto mt-8">
                <h3 class="mt-5 mb-5 text-3xl font-bold md:text-4xl text-wood">À Propos de <strong class="text-blueNavy">Zorglux</strong></h3>
                <p>Découvrez l'histoire de <strong class="text-blueNavy">Zorglux</strong> et notre engagement envers l'excellence. Apprenez-en davantage sur notre équipe
                    dévouée et notre vision du luxe moderne.</p>
                <p><a href="/a-propos">En savoir plus sur <strong class="text-blueNavy">Zorglux</strong></a></p>
            </section>
    </main>
@endsection
