import fs from 'node:fs';
import path from 'node:path';

const root=path.resolve('dist');
const required=[
 'index.html',
 'media/index.html',
 'media/publications/index.html',
 'media/newsletter/index.html',
 'media/cycles/industrie/index.html',
 'media/cycles/immobilier/index.html',
 'media/lectures/strategie-gouvernance/index.html',
 'robots.txt'
];
const errors=[];
const read=(p)=>{const full=path.join(root,p);if(!fs.existsSync(full)){errors.push('Page absente: '+p);return '';}return fs.readFileSync(full,'utf8');};
for(const file of required)read(file);
const robots=read('robots.txt');
if(!robots.includes('Disallow: /'))errors.push('robots.txt préproduction ne bloque pas les robots.');
const pages=['media/index.html','media/publications/index.html','media/newsletter/index.html','media/cycles/industrie/index.html','media/cycles/immobilier/index.html'];
for(const page of pages){
 const content=read(page);
 if(!/name="robots"\s+content="noindex,nofollow"/.test(content))errors.push('Meta robots manquante: '+page);
}
const articlesRoot=path.join(root,'media/articles');
let articleCount=0;
const visit=(dir)=>{
 if(!fs.existsSync(dir))return;
 for(const file of fs.readdirSync(dir,{withFileTypes:true})){
  const full=path.join(dir,file.name);
  if(file.isDirectory())visit(full);
  else if(file.name==='index.html'){
   const html=fs.readFileSync(full,'utf8');articleCount++;
   if(!/name="robots"\s+content="noindex,nofollow"/.test(html))errors.push('Article indexable en préproduction: '+full);
   if(!/rel="canonical"/.test(html))errors.push('Canonique manquant: '+full);
   if(!/application\/ld\+json/.test(html))errors.push('JSON-LD manquant: '+full);
  }
 }
};
visit(articlesRoot);

// Page d'essai indépendante : une seule version V8.7, sans création d'article CMS.
// Aucune référence depuis les catalogues ni les pages de navigation.
const trialRoute='media/essais/sophie-v8-7/index.html';
const trial=read(trialRoute);
if(trial){
 if(!/<meta name="robots" content="noindex,nofollow,noarchive,noimageindex"\s*\/?>/.test(trial))
  errors.push('Essai Sophie indexable : '+trialRoute);
 const narrative=trial.match(/<article\b[^>]*class="article article-literary"[^>]*>([\s\S]*?)<\/article>/i)?.[1]??'';
 const bodyCount=(narrative.match(/<p(?:\s|>)/g)||[]).length;
 const breaks=(narrative.match(/<hr\b/g)||[]).length;
 if(bodyCount!==155||breaks!==5)errors.push('Essai Sophie incomplet : '+bodyCount+' paragraphes, '+breaks+' séparateurs.');
 if(!trial.includes("Une usine autorise la réparation")
    ||!narrative.includes("Puis tend le document à Sophie"))
  errors.push('Titre ou chute du manuscrit Sophie V8.7 manquants.');
 if(trial.includes('Statut : Sophie M.')||trial.includes('V8.7 expérimentale'))
  errors.push('Mentions de fabrication visibles dans le manuscrit Sophie V8.7.');
 for(const rootPage of ['media/index.html','media/publications/index.html','media/conversations/index.html','media/cycles/index.html']){
  if(read(rootPage).includes('/media/essais/sophie-v8-7/'))
   errors.push('Lien non autorisé vers la page d’essai depuis '+rootPage);
 }
}

// Sophie V8.7 doit être à l'adresse historique, et non uniquement dans la page d'essai.
// Ce contrôle vérifie le HTML réellement compilé par le gabarit ordinaire.
const sophieCanonicalRoute='media/articles/industrie/ind-c1-cst-02-brouillon/index.html';
const sophieCanonical=read(sophieCanonicalRoute);
if(sophieCanonical){
 const articleHtml=sophieCanonical.match(/<article\b[^>]*data-article-id="industrie\/ind-c1-cst-02-brouillon"[^>]*>([\s\S]*?)<\/article>/i)?.[1]??'';
 const paragraphs=(articleHtml.match(/<p(?:\s|>)/g)||[]).length;
 const dividers=(articleHtml.match(/<hr\b/g)||[]).length;
 if(paragraphs!==155||dividers!==5)
  errors.push('Sophie V8.7 canonique incomplète : '+paragraphs+' paragraphes, '+dividers+' séparateurs');
 if(!sophieCanonical.includes('Une usine autorise la réparation')
   ||!articleHtml.includes('Malik connaît cette introduction')
   ||!articleHtml.includes('Puis tend le document à Sophie'))
  errors.push('Sophie V8.7 : titre, ouverture ou chute absents de la page canonique');
 if(articleHtml.includes('Statut : Sophie M.')||articleHtml.includes('V8.7 expérimentale'))
  errors.push('Note interne V8.7 visible sur la page canonique');
 if(!/name="robots"\s+content="noindex,nofollow"/.test(sophieCanonical))
  errors.push('Sophie canonique indexable en préproduction');
}

// Non-régression des libellés visibles : aucun identifiant CMS ni consigne
// de classement ne doit être exposé dans les pages de navigation du média.
// Les attributs HTML, URLs, scripts et styles gardent leurs clés techniques.
const editorialPages=[
 'media/index.html',
 'media/cycles/index.html',
 'media/conversations/index.html',
 'media/cycles/industrie/index.html',
 'media/cycles/immobilier/index.html',
 'media/cycles/industrie/conversations/C1/index.html',
 'media/cycles/immobilier/conversations/C1/index.html',
 'media/cycles/industrie/contextes/CST/index.html',
];
for(const page of editorialPages){
 const html=read(page);
 if(!html)continue;
 const visibleText=html
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,' ')
  .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi,' ')
  .replace(/<[^>]*>/g,' ')
  .replace(/\s+/g,' ');
 if(/\b(?:sujet|terrain|cycle|conversation)\s+(?:C[1-9]\d*|0\d+|\d{1,2})(?=\s|[·•.,:;]|$)/i.test(visibleText)
    ||/\b(?:contexte|cas de figure)\s+(?:C\d+(?:-U\d+)?|CST|ASC|RSS)\b/i.test(visibleText)
    ||/\b(?:du plus fourni au moins fourni|priorité à la publication la plus récente)\b/i.test(visibleText)){
  errors.push('Étiquette ou consigne interne visible : '+page);
 }
}
// Les brouillons restent volontairement absents des routes publiques.
// L'absence d'articles publiés est un état valide en préproduction.
if(!articleCount)console.log('Aucun article public : les six contenus C1 restent en fabrication.');
if(errors.length){console.error(errors.join('\n'));process.exit(1);}
console.log('Recette préproduction réussie : '+required.length+' chemins clés et '+articleCount+' articles ; indexation désactivée.');

// Déclencheur technique Cloudflare Pages — nouvelle tentative après suppression du déploiement bloqué du 9 novembre 2026.
