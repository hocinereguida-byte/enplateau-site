/** Préproduction: ne pas indexer et ne pas mesurer les visites de test. */
export const siteSettings = {
  environment: 'preview' as const,
  baseUrl: 'https://enplateau-site.pages.dev',
  indexable: false,
  analyticsToken: '', // Token public Cloudflare Web Analytics à configurer lors de la mise en production.
};
