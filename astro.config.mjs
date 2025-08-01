// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://tokkiperwinks.github.io/commissions/',
  base: '/tokkicommissions/', // <-- IMPORTANT
  vite: {
    plugins: [tailwindcss()]
  }
});