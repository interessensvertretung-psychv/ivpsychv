// @ts-check
import { defineConfig } from 'astro/config';

/**
 * SITE_URL und BASE_PATH werden beim Veröffentlichen über GitHub Actions
 * automatisch gesetzt (siehe .github/workflows/deploy.yml).
 */
const site = process.env.SITE_URL || 'https://www.interessensvertretung-psychv.de';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  devToolbar: {
    enabled: false,
  },
  build: {
    format: 'directory',
  },
});
