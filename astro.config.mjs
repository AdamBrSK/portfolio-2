// @ts-check
import { defineConfig, envField } from 'astro/config';

import react from '@astrojs/react';

// @ts-ignore
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
// @ts-ignore
const repoName = process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}` : '';
// @ts-ignore
const GITHUB_REPOSITORY_OWNER = process.env.GITHUB_REPOSITORY_OWNER

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
            API_URL: envField.string({ context: "client", access: "public", optional: true }),

    }
  },
  integrations: [react()],
  site: isGitHubPages ? `https://${GITHUB_REPOSITORY_OWNER}.github.io` : "https://web.com",
  base: isGitHubPages ? repoName : "/",
});