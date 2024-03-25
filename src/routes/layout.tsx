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
    <div class="relative overflow-hidden">
      <div class="space absolute -z-50 w-full h-full bg-black">
        <div class="stars absolute -z-40 w-full h-full bg-[url('/space/images/stars.webp')] bg-repeat bg-center"></div>
        <div class="twinkling absolute -z-30 w-full h-full bg-[url('/space/images/twinkling.webp')] bg-repeat bg-center"></div>
        <div class="clouds absolute -z-20 w-full h-full bg-[url('/space/images/clouds.webp')] bg-repeat bg-center"></div>
      </div>
      <div class="p-2">
        <Header />
        <main class="py-12 min-h-screen-hf flex flex-col items-center">
          <Slot />
        </main>
        <Footer />
      </div>
    </div>
  );
});
