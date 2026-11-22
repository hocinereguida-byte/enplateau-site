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

// Sophie V8.8 doit remplacer V8.7 à l'adresse historique, sans exposer de
// métadonnées internes et sans changer l'article d'essai V8.7 hors catalogue.
const sophieCanonicalRoute='media/articles/industrie/ind-c1-cst-02-brouillon/index.html';
const sophieCanonical=read(sophieCanonicalRoute);
if(sophieCanonical){
 const articleHtml=sophieCanonical.match(/<article\b[^>]*data-article-id="industrie\/ind-c1-cst-02-brouillon"[^>]*>([\s\S]*?)<\/article>/i)?.[1]??'';
 const paragraphs=(articleHtml.match(/<p(?:\s|>)/g)||[]).length;
 const dividers=(articleHtml.match(/<hr\b/g)||[]).length;
 if(paragraphs!==147||dividers!==5)
  errors.push('Sophie V8.8 canonique incomplète : '+paragraphs+' paragraphes, '+dividers+' séparateurs');
 // Vérifier la présentation COMPOSÉE dans le HTML servi par Astro, pas seulement
 // l'existence du texte source ou d'un script facultatif côté navigateur.
 const attributedGroups=(articleHtml.match(/data-dialogue-verified="sophie-v8-8"/g)||[]).length;
 const attributedTurns=(articleHtml.match(/class="fiction-dialogue-turn"/g)||[]).length;
 const speakerLabels=(articleHtml.match(/class="fiction-dialogue-speaker"/g)||[]).length;
 const rawDialogue=(articleHtml.match(/<p(?:\\s[^>]*)?>\\s*—/g)||[]).length;
 if(attributedGroups!==17||attributedTurns!==54||speakerLabels!==54||rawDialogue!==0)
  errors.push('Sophie V8.8 : présentation des dialogues non conforme (groupes '+attributedGroups+', répliques '+attributedTurns+', noms '+speakerLabels+', répliques brutes '+rawDialogue+').');
 if(!articleHtml.includes('fiction-dialogue-speaker">Philippe')||!articleHtml.includes('fiction-dialogue-speaker">Malik')||!articleHtml.includes('fiction-dialogue-speaker">Sophie')||!articleHtml.includes('fiction-dialogue-speaker">Le client')||!articleHtml.includes('fiction-dialogue-speaker">Le commercial'))
  errors.push('Sophie V8.8 : étiquettes de locuteurs incomplètes.');
 if(!sophieCanonical.includes('Une usine autorise la réparation')
   ||!articleHtml.includes('Un client attend sa livraison jeudi')
   ||!articleHtml.includes('Puis tend le document à Sophie'))
  errors.push('Sophie V8.8 : titre, ouverture ou chute absents de la page canonique');
 if(articleHtml.includes('Statut : Sophie M.')||articleHtml.includes('V8.8 expérimentale'))
  errors.push('Note interne V8.8 visible sur la page canonique');
 if(!/name="robots"\s+content="noindex,nofollow"/.test(sophieCanonical))
  errors.push('Sophie canonique indexable en préproduction');
}

// Nathalie 18-11-2026 : présence du nouveau récit ET des dialogues déjà composés.
// Le HTML statique doit être lisible sans dépendre d'un script navigateur.
const nathalieRoute='media/articles/industrie/ind-c1-cst-03-brouillon/index.html';
const nathalieHtml=read(nathalieRoute);
if(nathalieHtml){
 const story=nathalieHtml.match(/<article\b[^>]*data-article-id="industrie\/ind-c1-cst-03-brouillon"[^>]*>([\s\S]*?)<\/article>/i)?.[1]??'';
 const paragraphs=(story.match(/<p(?:\s|>)/g)||[]).length;
 const headings=(story.match(/<h2(?:\s|>)/g)||[]).length;
 const groups=(story.match(/data-dialogue-verified="nathalie-2026-11-18"/g)||[]).length;
 const turns=(story.match(/class="fiction-dialogue-turn"/g)||[]).length;
 const speakers=(story.match(/class="fiction-dialogue-speaker"/g)||[]).length;
 const rawTurns=(story.match(/<p(?:\s[^>]*)?>\s*—/g)||[]).length;
 if(paragraphs!==91||headings!==4||groups!==16||turns!==46||speakers!==46||rawTurns!==0)
  errors.push('Nathalie : mise en page non conforme ('+paragraphs+' paragraphes, '+headings+' intertitres, '+groups+' dialogues, '+turns+' prises de parole, '+speakers+' locuteurs, '+rawTurns+' répliques non composées).');
 if(!nathalieHtml.includes('Une usine veut réduire les')
   ||!nathalieHtml.includes("L'IA arrive aussi dans les bureaux")
   ||!nathalieHtml.includes('Dans une usine confrontée aux retards de livraison')
   ||!nathalieHtml.includes("L'arrivée d'un prestataire en intelligence artificielle")
   ||!story.includes('Coût du projet complet')
   ||!story.includes('opérations humaines et robotisées')
   ||!story.includes('Nathalie lui demanda laquelle elle devait signer'))
  errors.push('Nathalie : titre, périmètre de ligne ou chute absents.');
 if(!story.includes('fiction-dialogue-speaker">Mina')||
    !story.includes('fiction-dialogue-speaker">Vincent')||
    !story.includes('fiction-dialogue-speaker">Nathalie')||
    !story.includes('fiction-dialogue-speaker">Le consultant'))
  errors.push('Nathalie : attribution nominative des dialogues incomplète.');
 if(story.includes('Version expérimentale resserrée · Non validée'))
  errors.push('Nathalie : consigne interne exposée au lecteur.');
 if(!/name="robots"\s+content="noindex,nofollow"/.test(nathalieHtml))
  errors.push('Nathalie : article indexable en préproduction.');
}

// Claire et Kevin V7.5 validée : le HTML doit contenir le texte intégral
// et les 74 répliques déjà composées, sans script navigateur requis.
const claireRoute='media/articles/industrie/ind-c1-cst-04-brouillon/index.html';
const claireHtml=read(claireRoute);
if(claireHtml){
 const story=claireHtml.match(/<article\b[^>]*data-article-id="industrie\/ind-c1-cst-04-brouillon"[^>]*>([\s\S]*?)<\/article>/i)?.[1]??'';
 const paragraphs=(story.match(/<p(?:\s|>)/g)||[]).length;
 const headings=(story.match(/<h2(?:\s|>)/g)||[]).length;
 const groups=(story.match(/data-dialogue-verified="claire-kevin-v7-5"/g)||[]).length;
 const turns=(story.match(/class="fiction-dialogue-turn"/g)||[]).length;
 const labels=(story.match(/class="fiction-dialogue-speaker"/g)||[]).length;
 const raw=(story.match(/<p(?:\s[^>]*)?>\s*—/g)||[]).length;
 if(paragraphs!==215||headings!==4||groups!==27||turns!==74||labels!==74||raw!==0)
  errors.push('Claire et Kevin V7.5 : structure non conforme ('+paragraphs+' paragraphes, '+headings+' intertitres, '+groups+' échanges, '+turns+' répliques, '+labels+' locuteurs, '+raw+' dialogues bruts).');
 if(!claireHtml.includes("Une usine veut recruter trente ouvriers.")
  ||!claireHtml.includes("Tout le monde continue d")
  ||!claireHtml.includes("Claire aime les plannings impeccables.")
  ||!story.includes("Kevin R. avait huit heures dans sa journée.")
  ||!story.includes("Dans cinq minutes ?"))
  errors.push('Claire/Kevin V7.5 : titre, chapô, début ou chute absents.');
 if(!story.includes('fiction-dialogue-speaker">Kevin')
  ||!story.includes('fiction-dialogue-speaker">Claire')
  ||!story.includes('fiction-dialogue-speaker">Une recrue')
  ||!story.includes('fiction-dialogue-speaker">Le directeur'))
  errors.push('Claire/Kevin V7.5 : attributions de dialogues manquantes.');
 if(story.includes('VALIDÉE ÉDITORIALEMENT LE 20-11-2026')||story.includes('BON À PUBLIER NON DÉLIVRÉ'))
  errors.push('Claire/Kevin V7.5 : métadonnées internes du manuscrit visibles.');
 if(!/name="robots"\s+content="noindex,nofollow"/.test(claireHtml))
  errors.push('Claire/Kevin V7.5 : article indexable en préproduction.');
}

// Marc D. et Jean Toksic : manuscrit Drive intégral du 22 novembre,
// dialogues attribués statiquement. Aucune alternance automatique en navigateur.
const marcRoute='media/articles/industrie/ind-c1-cst-01-brouillon/index.html';
const marcHtml=read(marcRoute);
if(marcHtml){
 const story=marcHtml.match(/<article\b[^>]*data-article-id="industrie\/ind-c1-cst-01-brouillon"[^>]*>([\s\S]*?)<\/article>/i)?.[1]??'';
 const paragraphs=(story.match(/<p(?:\s|>)/g)||[]).length;
 const dividers=(story.match(/<hr\b/g)||[]).length;
 const groups=(story.match(/data-interview-verified="marc-2026-11-22"/g)||[]).length;
 const turns=(story.match(/class="interview-turn interview-(?:question|answer)"/g)||[]).length;
 const speakers=(story.match(/class="interview-speaker"/g)||[]).length;
 const jean=(story.match(/class="interview-turn interview-question"/g)||[]).length;
 const marc=(story.match(/class="interview-turn interview-answer"/g)||[]).length;
 const raw=(story.match(/<p(?:\s[^>]*)?>\s*—/g)||[]).length;
 if(paragraphs!==43||dividers!==6||groups!==39||turns!==246||speakers!==246||jean!==122||marc!==124||raw!==0)
  errors.push('Marc 22-11 : structure non conforme ('+paragraphs+' paragraphes, '+dividers+' séparateurs, '+groups+' échanges, '+turns+' répliques, '+speakers+' locuteurs, '+jean+'/'+marc+' rôles, '+raw+' dialogue brut).');
 if(!marcHtml.includes("Les affaires marchaient si bien qu")
  ||!marcHtml.includes('Dans une usine de deux cents salariés')
  ||!story.includes('On a revu les prix pour les nouvelles affaires')
  ||!story.includes('On leur proposait un nouveau calcul des primes pour les prochaines affaires')
  ||!story.includes('Vingt-deux')
  ||!story.includes('Il reste du café ?')
  ||!story.includes('interview-speaker">Jean Toksic')
  ||!story.includes('interview-speaker">Marc D.'))
  errors.push('Marc 22-11 : titre, chapô, corrections des primes, diapositives, interlocuteurs ou chute manquants.');
 if(story.includes('D1-D2 à confirmer')||story.includes('Candidate littéraire prioritaire'))
  errors.push('Marc 22-11 : statut interne affiché dans le récit.');
 if(!/name="robots"\s+content="noindex,nofollow"/.test(marcHtml))
  errors.push('Marc 22-11 : article indexable en préproduction.');
}

// Thomas : la variante F doit être servie à l'adresse historique, hors changement d'URL.
const thomasRoute='media/articles/immobilier/imm-c1-rc-02-thomas/index.html';
const thomas=read(thomasRoute);
if(thomas){
 const story=thomas.match(/<article\b[^>]*data-article-id="immobilier\/imm-c1-rc-02-thomas"[^>]*>([\s\S]*?)<\/article>/i)?.[1]??'';
 const paragraphCount=(story.match(/<p(?:\s|>)/g)||[]).length;
 const headingCount=(story.match(/<h2(?:\s|>)/g)||[]).length;
 if(paragraphCount!==132||headingCount!==6)
  errors.push('Thomas variante F : intégrité des 132 paragraphes et 6 intertitres non conforme ('+paragraphCount+'/'+headingCount+')');
 if(!thomas.includes('Dans les Vosges, huit ateliers étaient à vendre')
   ||!story.includes('Sur le premier plan')
   ||!story.includes('Une vraie.'))
  errors.push('Thomas F : titre, ouverture ou chute manquants');
 if(story.includes('Variante F')||story.includes('Non validée'))
  errors.push('Mention interne de variante visible dans le récit Thomas');
 if(!/name="robots"\s+content="noindex,nofollow"/.test(thomas))
  errors.push('Thomas indexable en préproduction');
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
