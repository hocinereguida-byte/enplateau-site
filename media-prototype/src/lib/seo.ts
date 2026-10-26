import { siteSettings } from './site-settings';
/** Données communes aux métadonnées : la préproduction reste volontairement hors indexation. */
export const absolutePageUrl=(path:string)=>new URL(path,siteSettings.baseUrl).toString();
export const robotsDirective=siteSettings.indexable?'index,follow':'noindex,nofollow';
export const cloudflareAnalyticsScript=siteSettings.analyticsToken.trim() && siteSettings.environment!=='preview'
  ? {src:'https://static.cloudflareinsights.com/beacon.min.js',token:siteSettings.analyticsToken}
  : null;
