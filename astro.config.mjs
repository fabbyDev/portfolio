import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://fabbyDev.github.io',
  base: 'portfolio',
  integrations: [tailwind({
    nesting: true,
    applyBaseStyles: false,
  })]
});