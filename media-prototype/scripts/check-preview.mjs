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

// Sophie V9.1a corrigée : manuscrit du 25 novembre, préproduction uniquement.
// Vérifier le texte intégral, l'attribution statique des 136 répliques, et les 8 scènes.
const sophieCanonicalRoute='media/articles/industrie/ind-c1-cst-02-brouillon/index.html';
const sophieCanonical=read(sophieCanonicalRoute);
if(sophieCanonical){
 const articleHtml=sophieCanonical.match(/<article\b[^>]*data-article-id="industrie\/ind-c1-cst-02-brouillon"[^>]*>([\s\S]*?)<\/article>/i)?.[1]??'';
 const paragraphs=(articleHtml.match(/<p(?:\s|>)/g)||[]).length;
 const dividers=(articleHtml.match(/<hr\b/g)||[]).length;
 const attributedGroups=(articleHtml.match(/data-dialogue-verified="sophie-v9-1a"/g)||[]).length;
 const attributedTurns=(articleHtml.match(/class="fiction-dialogue-turn"/g)||[]).length;
 const speakerLabels=(articleHtml.match(/class="fiction-dialogue-speaker"/g)||[]).length;
 const rawDialogue=(articleHtml.match(/<p(?:\s[^>]*)?>\s*—/g)||[]).length;
 if(paragraphs!==269||dividers!==8||attributedGroups!==46||attributedTurns!==136||speakerLabels!==136||rawDialogue!==0)
  errors.push('Sophie V9.1a : structure/rendu non conforme ('+paragraphs+' paragraphes, '+dividers+' séparateurs, '+attributedGroups+' groupes, '+attributedTurns+' répliques, '+speakerLabels+' attributions, '+rawDialogue+' dialogues bruts).');
 for(const who of ['Philippe','Malik','Sophie','Un ouvrier','La comptable','Le commercial','Le client'])
  if(!articleHtml.includes('fiction-dialogue-speaker">'+who))
   errors.push('Sophie V9.1a : locuteur manquant « '+who+' ».');
 if(!sophieCanonical.includes("Une usine autorise la réparation d")
  ||!sophieCanonical.includes("Depuis trois semaines, une usine de pièces métalliques")
  ||!articleHtml.includes("Lundi matin, Philippe D., directeur de l")
  ||!articleHtml.includes("une pièce sur deux n")
  ||!articleHtml.includes('Un euro cinquante.')
  ||!articleHtml.includes("Puis tend le document à Sophie pour qu'elle signe.")
  ||!articleHtml.includes("Responsable des décisions : Philippe D.")
  ||!articleHtml.includes("L&#39;équipe."))
  errors.push('Sophie V9.1a : titre, chapô, faits économiques, responsabilités ou chute absents.');
 if(articleHtml.includes('Statut : Sophie M.')||articleHtml.includes('V9.1a corrigée')||articleHtml.includes('GO préproduction'))
  errors.push('Sophie V9.1a : note interne visible dans le récit.');
 if(!/name="robots"\s+content="noindex,nofollow"/.test(sophieCanonical))
  errors.push('Sophie canonique indexable en préproduction.');
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

// Marc D. / Jean Toksic : variante populaire du 25-11-2026, source Drive
// exacte et récits précomposés, sans attribution par alternance automatique.
const marcRoute='media/articles/industrie/ind-c1-cst-01-brouillon/index.html';
const marcHtml=read(marcRoute);
if(marcHtml){
 const story=marcHtml.match(/<article\b[^>]*data-article-id="industrie\/ind-c1-cst-01-brouillon"[^>]*>([\s\S]*?)<\/article>/i)?.[1]??'';
 const paragraphs=(story.match(/<p(?:\s|>)/g)||[]).length;
 const dividers=(story.match(/<hr\b/g)||[]).length;
 const groups=(story.match(/data-interview-verified="marc-2026-11-25"/g)||[]).length;
 const turns=(story.match(/class="interview-turn interview-(?:question|answer)"/g)||[]).length;
 const speakers=(story.match(/class="interview-speaker"/g)||[]).length;
 const jean=(story.match(/class="interview-turn interview-question"/g)||[]).length;
 const marc=(story.match(/class="interview-turn interview-answer"/g)||[]).length;
 const raw=(story.match(/<p(?:\s[^>]*)?>\s*—/g)||[]).length;
 const bylines=(story.match(/class="interview-byline"/g)||[]).length;
 if(paragraphs!==35||dividers!==8||groups!==28||turns!==274||speakers!==274||jean!==136||marc!==138||raw!==0||bylines!==1)
  errors.push('Marc 25-11 : structure non conforme ('+paragraphs+' paragraphes, '+dividers+' séparateurs, '+groups+' groupes, '+turns+' répliques, '+speakers+' locuteurs, '+jean+'/'+marc+' rôles, '+raw+' dialogues bruts, '+bylines+' signature).');
 if(!marcHtml.includes("Les affaires marchaient si bien qu")
  ||!marcHtml.includes('Marc D. distribuait des trophées aux commerciaux')
  ||!story.includes('Par Jean Toksic')
  ||!story.includes('Je vous passe les détails techniques')
  ||!story.includes('Pour les nouvelles affaires, on a revu les prix')
  ||!story.includes('les commerciaux avaient fini par trouver un accord sur le nouveau calcul des primes')
  ||!story.includes('80 000 euros de surcoûts constatés')
  ||!story.includes('100 000 euros de pénalités et de frais possibles')
  ||!story.includes('Il reste du café ?')
  ||!story.includes('interview-speaker">Jean Toksic')
  ||!story.includes('interview-speaker">Marc D.'))
  errors.push('Marc 25-11 : titre, chapô, signature, tournants narratifs, valeurs économiques ou chute absents.');
 if(story.includes('D1/D2 à confirmer')||story.includes('Candidate littéraire prioritaire')||story.includes('BON À PUBLIER'))
  errors.push('Marc 25-11 : mentions internes visibles dans le récit.');
 if(!/name="robots"\s+content="noindex,nofollow"/.test(marcHtml))
  errors.push('Marc 25-11 : article indexable en préproduction.');
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
