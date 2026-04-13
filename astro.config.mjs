// @ts-check
import { defineConfig, envField } from 'astro/config';

import react from '@astrojs/react';

import cloudflare from '@astrojs/cloudflare';

// @ts-ignore
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
// @ts-ignore
const repoName = "/portfolio-2";
// @ts-ignore
const GITHUB_REPOSITORY_OWNER = 'https://AdamBrSK.github.io'

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
            API_URL: envField.string({ context: "client", access: "public", optional: true }),

    }
  },

  integrations: [react()],

  // @ts-ignore
  site: process.env.VERCEL ? 'https://tvoje-meno.vercel.app' : 'https://AdamBrSK.github.io',

  // @ts-ignore
  base: (process.env.RENDER || process.env.VERCEL || process.env.NETLIFY) 
    ? '/' 
    : '/portfolio-2',

  build: {
    assets: 'assets' 
  },

  adapter: cloudflare()
});