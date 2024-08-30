import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>{head.title}</title>
      <link rel="canonical" href={loc.url.href} />
      <meta name="description" content={head.meta.find(m => m.name === 'description')?.content} />

      {/* Open Graph / Facebook */}
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={loc.url.href} />
      <meta property="og:title" content={head.title} />
      <meta property="og:site_name" content="Zorglux" />
      <meta property="og:description" content={head.meta.find(m => m.name === 'description')?.content} />
      <meta property="og:image" content="/images/logo.svg" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={loc.url.href} />
      <meta property="twitter:title" content={head.title} />
      <meta property="twitter:description" content={head.meta.find(m => m.name === 'description')?.content} />
      <meta property="twitter:image" content="/images/logo.svg" />

      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => (
        <style key={s.key} {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}
    </>
  );
});
