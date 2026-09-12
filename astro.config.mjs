// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://divarvian.my.id',
  i18n: {
    locales: ['id', 'en'],
    defaultLocale: 'id',
    routing: { prefixDefaultLocale: false },
  },
});
