// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // The site's canonical production URL.
  // Astro uses this when generating absolute URLs (sitemap, hreflang, OG tags).
  site: 'https://adritech.be',

  // Internationalization (i18n) settings.
  // Tells Astro the site exists in three languages and how to route between them.
  i18n: {
      // The default locale. English lives at the site root (no /en/ prefix).
      defaultLocale: 'en',

      // Every locale supported by the site. Each one gets its own URL prefix
      // (except the default, see prefixDefaultLocale below):
      //   en -> /         (default, no prefix)
      //   fr -> /fr/      (French)
      //   nl -> /nl/      (Dutch / Flemish)
      locales: ['en', 'fr', 'nl'],

      // How URLs are shaped:
      //   prefixDefaultLocale: false  =>  English at /, French at /fr/, Dutch at /nl/
      //   redirectToDefaultLocale: true  =>  unknown paths fall back to English
      routing: {
          prefixDefaultLocale: false,
      },
  },

  integrations: [sitemap()],
});