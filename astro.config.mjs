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
      // The default locale. French lives at the site root (no /fr/ prefix).
      defaultLocale: 'fr',

      // Every locale supported by the site. Each one gets its own URL prefix
      // (except the default, see prefixDefaultLocale below):
      //   fr -> /         (default, no prefix)
      //   en -> /en/      (English)
      //   nl -> /nl/      (Dutch / Flemish)
      locales: ['fr', 'en', 'nl'],

      // How URLs are shaped:
      //   prefixDefaultLocale: false  =>  French at /, English at /en/, Dutch at /nl/
      //   redirectToDefaultLocale: true  =>  unknown paths fall back to French
      routing: {
          prefixDefaultLocale: false,
      },
  },

  integrations: [sitemap()],
});