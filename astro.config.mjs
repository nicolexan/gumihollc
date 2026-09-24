import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: 'https://gumihollc.com',
  prefetch: true,
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en', // All urls that don't contain language prefix will be treated as default locale
        locales: {
          en: 'en', // The `defaultLocale` value must present in `locales` keys
          // ko: 'ko', // Korean is on hold; see MARKETING_LOCALES in src/utils/locale.ts
        },
      },
    }),
    mdx(),
  ],
  experimental: {
    clientPrerender: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
