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
      <link rel="icon" type="image/x-icon" href="/images/favicons/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon.png" />
      <link rel="mask-icon" href="/images/favicons/safari-pinned-tab.svg" color="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={head.meta.find(m => m.name === 'description')?.content} />
      <meta name="keywords" content="Zorglux" />
      <meta name="theme-color" content="#080c0f" />
      <meta name="msapplication-TileColor" content="#080c0f" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://zorglux.fr/" />
      <meta property="og:title" content="Zorglux - Le peuple suprême" />
      <meta property="og:description" content={head.meta.find(m => m.name === 'description')?.content} />
      <meta property="og:image" content="/images/logo.svg" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://zorglux.fr/" />
      <meta property="twitter:title" content="Zorglux - Le peuple suprême" />
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
