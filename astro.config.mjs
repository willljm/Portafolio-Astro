import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [tailwind(), react()],
  build: {
    assets: '_assets'
  },
  vite: {
    build: {
      assetsInlineLimit: 0
    }
  }
});