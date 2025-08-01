// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://tokkicommissions.github.io',
  base: 'tokkicommissions',
  vite: {
    plugins: [tailwindcss()]
  }
});