import { defineConfig } from 'astro/config';
import { rehypeHeadingHierarchy } from './src/lib/rehype-heading-hierarchy.mjs';
export default defineConfig({ output: 'static', site: 'https://enplateau-site.pages.dev', markdown: { rehypePlugins: [rehypeHeadingHierarchy] } });
