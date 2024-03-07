import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";

import Header from "../components/header";
import Footer from "../components/footer";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <div class="relative">
      <div class="space absolute -z-50 w-full h-full bg-black">
        <div class="stars absolute -z-40 w-full h-full bg-[url('https://i.imgur.com/YKY28eT.png')] bg-repeat bg-center"></div>
        <div class="twinkling absolute -z-30 w-full h-full bg-[url('https://i.imgur.com/XYMF4ca.png')] bg-repeat bg-center"></div>
        <div class="clouds absolute -z-20 w-full h-full bg-[url('https://i.imgur.com/mHbScrQ.png')] bg-repeat bg-center"></div>
      </div>
      <Header />
      <Slot />
      <Footer />
    </div>
  );
});
