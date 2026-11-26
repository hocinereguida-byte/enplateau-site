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
 if(!sophieCanonical.includes("répare la machine. À condition de ne pas l")
  ||!sophieCanonical.includes("Depuis trois semaines, une usine de pièces métalliques")
  ||!articleHtml.includes("Lundi matin, Philippe D., directeur de l")
  ||!articleHtml.includes("une pièce sur deux n")
  ||!articleHtml.includes('Un euro cinquante.')
  ||!articleHtml.includes("Puis tend le document à Sophie pour qu&#39;elle signe.")
  ||!articleHtml.includes("Responsable des décisions : Philippe D.")
  ||!articleHtml.includes("L&#39;équipe."))
  errors.push('Sophie V9.1a : titre, chapô, faits économiques, responsabilités ou chute absents.');
 if(articleHtml.includes('Statut : Sophie M.')||articleHtml.includes('V9.1a corrigée')||articleHtml.includes('GO préproduction'))
  errors.push('Sophie V9.1a : note interne visible dans le récit.');
 if(!/name="robots"\s+content="noindex,nofollow"/.test(sophieCanonical))
  errors.push('Sophie canonique indexable en préproduction.');
}

// Nathalie Solo / Lola Genzed V4.1 : comparaison intégrale du texte rendu.
{
 const slug='ind-c1-cst-03-brouillon',href='/media/articles/industrie/'+slug+'/';
 const html=read('media/articles/industrie/'+slug+'/index.html');
 const source=fs.readFileSync(path.resolve('../content/articles/industrie/'+slug+'.md'),'utf8');
 const front=source.match(/^---\n([\s\S]*?)\n---\n\n([\s\S]*)$/);
 const field=k=>JSON.parse(front[1].split('\n').find(l=>l.startsWith(k+': ')).slice(k.length+2));
 const decode=s=>s.replace(/&#(x[0-9a-f]+|\d+);/gi,(_,v)=>String.fromCodePoint(v[0].toLowerCase()==='x'?parseInt(v.slice(1),16):Number(v))).replace(/&apos;/g,"'").replace(/&quot;/g,'"').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
 const story=html.match(/<article\b[^>]*data-article-id="industrie\/ind-c1-cst-03-brouillon"[^>]*>([\s\S]*?)<\/article>/i)?.[1]??'';
 const rendered=[...story.matchAll(/<(p|h2)\b[^>]*>([\s\S]*?)<\/\1>/g)].map(m=>(m[1]==='h2'?'## ':'')+decode(m[2].replace(/<[^>]*>/g,'')));
 const expected=front[2].trim().split(/\n\n/);
 const count=field('title').length+field('summary').length+expected.filter(s=>s!=='Par Lola Genzed').map(s=>s.replace(/^## /,'')).join('').length;
 if(JSON.stringify(rendered)!==JSON.stringify(expected)||count!==10802||expected.filter(s=>s.startsWith('## ')).length!==5||expected.at(-1)!=='Nathalie lui demande laquelle elle doit signer.'||(story.match(/class="fiction-dialogue-turn"/g)||[]).length!==18)errors.push('Nathalie Lola V4.1 : texte, longueur, intertitres ou répliques non concordants.');
 const h1=html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1]??'';
 const lead=html.match(/<p class="lead">([\s\S]*?)<\/p>/)?.[1]??'';
 if(decode(h1)!==field('title')||decode(lead)!==field('summary')||!decode(html).includes(field('source_notice'))||!html.includes('Fiction satirique · Raisons et déraisons')||!html.includes('/media/lectures/technologie-innovation/')||!html.includes('/media/cycles/industrie/conversations/C1/')||!html.includes('/media/cycles/industrie/contextes/CST/')||!html.includes(field('hero_image'))||!decode(html).includes(field('image_alt'))||!html.includes('<h2>Lola Genzed</h2>')||!story.includes('Par Lola Genzed'))errors.push('Nathalie Lola V4.1 : titre, chapô, signature, fiction, illustration ou classement non conforme.');
 for(const name of ['Nathalie Solo','Sonia Praude','Vincent Tracker','Karim Samarche','Benoît Time','Hugo Matricks','Mina Mano','Samuel Killer','Laurent Champion','Bruno Toudou'])if(!decode(html).includes(name))errors.push('Nathalie Lola V4.1 : identité manquante '+name);
 for(const page of ['media/publications/index.html','media/cycles/industrie/index.html','media/cycles/industrie/conversations/C1/index.html','media/scenes/index.html','media/lectures/technologie-innovation/index.html'])if(!read(page).includes(href))errors.push('Nathalie Lola V4.1 : navigation incorrecte '+page);
 if(!/name="robots"\s+content="noindex,nofollow"/.test(html))errors.push('Nathalie Lola V4.1 : article indexable en préproduction.');
}

// Claire et Kevin V8.1, texte du 25 novembre : contrôles du HTML réellement composé.
// Le gabarit doit conserver les cinq scènes, cinq intertitres et 105 répliques attribuées.
const claireRoute='media/articles/industrie/ind-c1-cst-04-brouillon/index.html';
const claireHtml=read(claireRoute);
if(claireHtml){
 const story=claireHtml.match(/<article\b[^>]*data-article-id="industrie\/ind-c1-cst-04-brouillon"[^>]*>([\s\S]*?)<\/article>/i)?.[1]??'';
 const paragraphs=(story.match(/<p(?:\s|>)/g)||[]).length;
 const headings=(story.match(/<h2(?:\s|>)/g)||[]).length;
 const dividers=(story.match(/<hr\b/g)||[]).length;
 const groups=(story.match(/data-dialogue-verified="claire-kevin-v8-1"/g)||[]).length;
 const turns=(story.match(/class="fiction-dialogue-turn"/g)||[]).length;
 const labels=(story.match(/class="fiction-dialogue-speaker"/g)||[]).length;
 const raw=(story.match(/<p(?:\s[^>]*)?>\s*—/g)||[]).length;
 if(paragraphs!==258||headings!==5||dividers!==5||groups!==47||turns!==105||labels!==105||raw!==0)
  errors.push('Claire et Kevin V8.1 : structure non conforme ('+paragraphs+' paragraphes, '+headings+' intertitres, '+dividers+' scènes, '+groups+' groupes, '+turns+' répliques, '+labels+' locuteurs, '+raw+' dialogues bruts).');
 if(!claireHtml.includes("Ils veulent embaucher trente ouvriers. Personne n")
   ||!claireHtml.includes("Claire M. aime quand tout est bien organisé.")
   ||!claireHtml.includes("Kevin R. adore")
   ||!story.includes("Claire M., la responsable des ressources humaines")
   ||!story.includes("Kevin R. avait huit heures dans sa journée.")
   ||!story.includes("Ils sont déjà avec leurs recrues")
   ||!story.includes("Un autre ouvrier, qui connaissait lui aussi cette machine")
   ||!story.includes("Elles savent que je sais")
   ||!story.includes("Dans cinq minutes ?"))
  errors.push('Claire/Kevin V8.1 : titre, chapô, corrections D1/D2 ou chute non concordants.');
 for(const who of ['Kevin','Claire','Le directeur',"Le chef d&#39;atelier",'Le responsable de production','Une recrue'])
  if(!story.includes('fiction-dialogue-speaker">'+who))
   errors.push('Claire/Kevin V8.1 : attribution manquante « '+who+' ».');
 if(story.includes('MANUSCRIT VALIDÉ')||story.includes('GO préproduction')||story.includes('V8.1 corrigée'))
  errors.push('Claire/Kevin V8.1 : métadonnées internes affichées.');
 if(!/name="robots"\s+content="noindex,nofollow"/.test(claireHtml))
  errors.push('Claire/Kevin V8.1 : article indexable en préproduction.');
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
 if(paragraphs!==36||dividers!==8||groups!==28||turns!==274||speakers!==274||jean!==136||marc!==138||raw!==0||bylines!==1)
  errors.push('Marc 25-11 : structure non conforme ('+paragraphs+' paragraphes, '+dividers+' séparateurs, '+groups+' groupes, '+turns+' répliques, '+speakers+' locuteurs, '+jean+'/'+marc+' rôles, '+raw+' dialogues bruts, '+bylines+' signature).');
 if(!marcHtml.includes("Les affaires marchaient si bien qu")
  ||!marcHtml.includes('Marc D. distribuait des trophées aux commerciaux')
  ||!story.includes('Par Jean Toksic')
  ||!story.includes('Entretien avec Marc D., directeur d&#39;une usine de deux cents salariés.')
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

// Laurent B. / Jean Toksic : Grand Entretien du 25 novembre 2026.
// Vérifier le texte versionné, le HTML précomposé et les 207 répliques attribuées.
const laurentRoute='media/articles/industrie/ind-c1-cst-05-brouillon/index.html';
const laurentHtml=read(laurentRoute);
if(laurentHtml){
 const story=laurentHtml.match(/<article\b[^>]*data-article-id="industrie\/ind-c1-cst-05-brouillon"[^>]*>([\s\S]*?)<\/article>/i)?.[1]??'';
 const paragraphs=(story.match(/<p(?:\s|>)/g)||[]).length;
 const headings=(story.match(/<h2(?:\s|>)/g)||[]).length;
 const dividers=(story.match(/<hr\b/g)||[]).length;
 const groups=(story.match(/data-interview-verified="laurent-2026-11-25"/g)||[]).length;
 const turns=(story.match(/class="interview-turn interview-(?:question|answer)"/g)||[]).length;
 const labels=(story.match(/class="interview-speaker"/g)||[]).length;
 const jean=(story.match(/class="interview-turn interview-question"/g)||[]).length;
 const laurent=(story.match(/class="interview-turn interview-answer"/g)||[]).length;
 const raw=(story.match(/<p(?:\s[^>]*)?>\s*—/g)||[]).length;
 if(paragraphs!==56||headings!==5||dividers!==5||groups!==42||turns!==207||labels!==207||jean!==107||laurent!==100||raw!==0)
  errors.push('Laurent 25-11 : structure non conforme ('+paragraphs+' narratifs, '+headings+' intertitres, '+dividers+' séparateurs, '+groups+' groupes, '+turns+' répliques, '+labels+' labels, '+jean+'/'+laurent+' voix, '+raw+' dialogues bruts).');
 if(!laurentHtml.includes('Ils ont signé le contrat du siècle. Reste à payer le métal.')
  ||!laurentHtml.includes('Deux cents salariés, trois cents tonnes de métal')
  ||!story.includes('la table de Laurent B., le directeur financier. Une caméra enregistrait')
  ||!story.includes('Le client va payer. En attendant,')
  ||!story.includes('Quarante-huit heures pour réfléchir.')
  ||!story.includes('Le contrat a démarré. Il devrait rapporter moins que prévu.')
  ||!story.includes('Vous avez compris quelque chose')
  ||!story.includes('Jean baissa lentement son verre.')
  ||!story.includes('interview-speaker">Jean Toksic')
  ||!story.includes('interview-speaker">Laurent B.'))
  errors.push('Laurent 25-11 : titre, chapô, interviews filmées, arbitrage, dialogue et chute non concordants.');
 if(story.includes('V finale corrigée')||story.includes('GO préproduction')||story.includes('D2 favorable sous limites'))
  errors.push('Laurent 25-11 : métadonnées internes affichées dans le récit.');
 if(!/name="robots"\s+content="noindex,nofollow"/.test(laurentHtml))
  errors.push('Laurent 25-11 : article indexable en préproduction.');
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
// Titres validés le 25 novembre : contrôler chaque H1, indépendamment des autres textes de la page.
const industrieTitres=[
  [
    "media/articles/industrie/ind-c1-cst-01-brouillon/index.html",
    "Les affaires marchaient si bien qu'il a fallu y mettre un terme"
  ],
  [
    "media/articles/industrie/ind-c1-cst-02-brouillon/index.html",
    "Le directeur accepte qu'on répare la machine. À condition de ne pas l'arrêter."
  ],
  [
    "media/articles/industrie/ind-c1-cst-03-brouillon/index.html",
    "Elle veut réduire les « facteurs humains » grâce aux robots. Puis l'IA débarque dans son bureau."
  ],
  [
    "media/articles/industrie/ind-c1-cst-04-brouillon/index.html",
    "Ils veulent embaucher trente ouvriers. Personne n'a le temps de les former."
  ],
  [
    "media/articles/industrie/ind-c1-cst-05-brouillon/index.html",
    "Ils ont signé le contrat du siècle. Reste à payer le métal."
  ],
  [
    "media/articles/industrie/ind-c1-cst-regard-croise-01-brouillon/index.html",
    "Pour produire davantage, il faut parfois commencer par faire moins."
  ]
];
const decTitre=s=>s.replace(/&#(x[0-9a-f]+|\d+);/gi,(_,v)=>String.fromCodePoint(v[0].toLowerCase()==='x'?parseInt(v.slice(1),16):Number(v))).replace(/&apos;/g,"'").replace(/&quot;/g,'"').replace(/&nbsp;/g,' ').replace(/&amp;/g,'&');
for(const [route,title] of industrieTitres){
 const h1=read(route).match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1]??'';
 if(decTitre(h1.replace(/<[^>]*>/g,'')).replace(/\s+/g,' ').trim()!==title)errors.push('Titre Industrie non conforme : '+route);
}

// Alain V4.3 : concordance intégrale du corps et retrait de l'ancien entretien.
{
 const slug='imm-c1-rc-06-alain', href='/media/articles/immobilier/'+slug+'/', oldHref='/media/articles/immobilier/imm-c1-rc-01-isabelle/';
 const html=read('media/articles/immobilier/'+slug+'/index.html');
 const source=fs.readFileSync(path.resolve('../content/articles/immobilier/'+slug+'.md'),'utf8');
 const front=source.match(/^---\n([\s\S]*?)\n---\n\n([\s\S]*)$/);
 const field=k=>JSON.parse(front[1].split('\n').find(l=>l.startsWith(k+': ')).slice(k.length+2));
 const decode=s=>s.replace(/&#(x[0-9a-f]+|\d+);/gi,(_,v)=>String.fromCodePoint(v[0].toLowerCase()==='x'?parseInt(v.slice(1),16):Number(v))).replace(/&apos;/g,"'").replace(/&quot;/g,'"').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
 const story=html.match(/<article\b[^>]*data-article-id="immobilier\/imm-c1-rc-06-alain"[^>]*>([\s\S]*?)<\/article>/i)?.[1]??'';
 const rendered=[...story.matchAll(/<(p|h2)\b([^>]*)>([\s\S]*?)<\/\1>/g)].map(m=>(m[1]==='h2'?'## ':m[2].includes('alain-dialogue-line')?'— ':'')+decode(m[3].replace(/<[^>]*>/g,'')));
 const expected=front[2].trim().split(/\n\n/);
 if(JSON.stringify(rendered)!==JSON.stringify(expected)||!story.includes('Par Emma Santhune')||!story.includes('interview-speaker">Emma Santhune')||/\bJean\b/.test(decode(story)))errors.push('Alain V4.3 Emma : texte intégral, signature ou attribution non concordants.');
 const h1=html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1]??'';
 const lead=html.match(/<p class="lead">([\s\S]*?)<\/p>/)?.[1]??'';
 if(decode(h1)!==field('title')||decode(lead)!==field('summary')||!decode(html).includes(field('source_notice'))||!html.includes('Fiction satirique · Les interrogatoires')||!html.includes('/media/lectures/finance-investissement/')||!html.includes('/media/cycles/immobilier/conversations/C1/')||!html.includes('/media/cycles/immobilier/contextes/territoire-reconversion/'))errors.push('Alain V4.3 : titre, chapô, mention de fiction ou classement non conforme.');
 for(const page of ['media/publications/index.html','media/cycles/immobilier/index.html','media/cycles/immobilier/conversations/C1/index.html','media/scenes/index.html','media/lectures/finance-investissement/index.html']){
  const pageHtml=read(page);if(!pageHtml.includes(href)||pageHtml.includes(oldHref))errors.push('Alain/Isabelle : navigation incorrecte : '+page);
 }
 if(fs.existsSync(path.join(root,'media/articles/immobilier/imm-c1-rc-01-isabelle/index.html')))errors.push('Isabelle : ancienne route encore générée.');
}

// Patrick V6.4 : concordance intégrale et retrait de l'ancien article de stratégie.
{
 const slug='imm-c1-rc-07-patrick',href='/media/articles/immobilier/'+slug+'/',oldHref='/media/articles/immobilier/imm-c1-rc-03-nathalie/';
 const html=read('media/articles/immobilier/'+slug+'/index.html');
 const source=fs.readFileSync(path.resolve('../content/articles/immobilier/'+slug+'.md'),'utf8');
 const front=source.match(/^---\n([\s\S]*?)\n---\n\n([\s\S]*)$/);
 const field=k=>JSON.parse(front[1].split('\n').find(l=>l.startsWith(k+': ')).slice(k.length+2));
 const decode=s=>s.replace(/&#(x[0-9a-f]+|\d+);/gi,(_,v)=>String.fromCodePoint(v[0].toLowerCase()==='x'?parseInt(v.slice(1),16):Number(v))).replace(/&apos;/g,"'").replace(/&quot;/g,'"').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
 const story=html.match(/<article\b[^>]*data-article-id="immobilier\/imm-c1-rc-07-patrick"[^>]*>([\s\S]*?)<\/article>/i)?.[1]??'';
 const rendered=[...story.matchAll(/<(p|h2)\b[^>]*>([\s\S]*?)<\/\1>/g)].map(m=>(m[1]==='h2'?'## ':'')+decode(m[2].replace(/<[^>]*>/g,'')));
 const expected=front[2].trim().split(/\n\n/);
 if(JSON.stringify(rendered)!==JSON.stringify(expected)||expected.filter(s=>s.startsWith('## ')).length!==4||(story.match(/class="fiction-dialogue-turn"/g)||[]).length!==11)errors.push('Patrick V6.4 : texte intégral ou dialogues non concordants.');
 const h1=html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1]??'';
 const lead=html.match(/<p class="lead">([\s\S]*?)<\/p>/)?.[1]??'';
 if(decode(h1)!==field('title')||decode(lead)!==field('summary')||!decode(html).includes(field('source_notice'))||!html.includes('Fiction satirique · Raisons et déraisons')||!html.includes('/media/lectures/strategie-gouvernance/')||!html.includes('/media/cycles/immobilier/conversations/C1/')||!html.includes('/media/cycles/immobilier/contextes/territoire-reconversion/'))errors.push('Patrick V6.4 : titre, chapô, fiction ou classement non conforme.');
 for(const page of ['media/publications/index.html','media/cycles/immobilier/index.html','media/cycles/immobilier/conversations/C1/index.html','media/scenes/index.html','media/lectures/strategie-gouvernance/index.html']){
  const pageHtml=read(page);if(!pageHtml.includes(href)||pageHtml.includes(oldHref))errors.push('Patrick/Audrey : navigation incorrecte : '+page);
 }
 if(fs.existsSync(path.join(root,'media/articles/immobilier/imm-c1-rc-03-nathalie/index.html')))errors.push('Audrey : ancienne route encore générée.');
}

// Caserne V6.2 : concordance intégrale, dialogue statique et navigation.
{
 const slug='imm-c1-rc-05-caserne',href='/media/articles/immobilier/'+slug+'/';
 const html=read('media/articles/immobilier/'+slug+'/index.html');
 const source=fs.readFileSync(path.resolve('../content/articles/immobilier/'+slug+'.md'),'utf8');
 const front=source.match(/^---\n([\s\S]*?)\n---\n\n([\s\S]*)$/);
 const field=k=>JSON.parse(front[1].split('\n').find(l=>l.startsWith(k+': ')).slice(k.length+2));
 const decode=s=>s.replace(/&#(x[0-9a-f]+|\d+);/gi,(_,v)=>String.fromCodePoint(v[0].toLowerCase()==='x'?parseInt(v.slice(1),16):Number(v))).replace(/&apos;/g,"'").replace(/&quot;/g,'"').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
 const story=html.match(/<article\b[^>]*data-article-id="immobilier\/imm-c1-rc-05-caserne"[^>]*>([\s\S]*?)<\/article>/i)?.[1]??'';
 const rendered=[...story.matchAll(/<(p|h2)\b([^>]*)>([\s\S]*?)<\/\1>/g)].map(m=>(m[1]==='h2'?'## ':'')+decode(m[3].replace(/<[^>]*>/g,'')));
 const expected=front[2].trim().split(/\n\n/);
 if(JSON.stringify(rendered)!==JSON.stringify(expected)||expected.length!==150||expected.filter(s=>s.startsWith('## ')).length!==5||(story.match(/class="fiction-dialogue-turn"/g)||[]).length!==67)errors.push('Caserne V6.2 : texte intégral ou dialogues non concordants.');
 const h1=html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1]??'';
 const lead=html.match(/<p class="lead">([\s\S]*?)<\/p>/)?.[1]??'';
 if(decode(h1)!==field('title')||decode(lead)!==field('summary')||!decode(html).includes(field('source_notice'))||!html.includes('Fiction satirique · Raisons et déraisons')||!html.includes('/media/lectures/territoires-politiques-publiques/')||!html.includes('/media/cycles/immobilier/conversations/C1/')||!html.includes('/media/cycles/immobilier/contextes/territoire-reconversion/'))errors.push('Caserne V6.2 : titre, chapô, fiction ou classement non conforme.');
 for(const page of ['media/publications/index.html','media/cycles/immobilier/index.html','media/cycles/immobilier/conversations/C1/index.html','media/scenes/index.html','media/lectures/territoires-politiques-publiques/index.html']){
  if(!read(page).includes(href))errors.push('Caserne V6.2 : navigation incorrecte : '+page);
 }
}

// Signatures éditoriales validées, distinctes du corps des manuscrits.
for(const [route,author] of [["industrie/ind-c1-cst-02-brouillon","Oscar Sansfroid"],["industrie/ind-c1-cst-04-brouillon","Oscar Sansfroid"],["immobilier/imm-c1-rc-07-patrick","Lola Genzed"],["industrie/ind-c1-cst-01-brouillon","Jean Toksic"],["industrie/ind-c1-cst-05-brouillon","Jean Toksic"],["immobilier/imm-c1-rc-06-alain","Emma Santhune"]]){
 const html=read('media/articles/'+route+'/index.html');
 const signature=html.match(/<section\b[^>]*aria-label="Signature de l’auteur"[^>]*>([\s\S]*?)<\/section>/)?.[1]??'';
 if(!signature.includes('<h2>'+author+'</h2>'))errors.push('Signature éditoriale incorrecte : '+route);
}

if(errors.length){console.error(errors.join('\n'));process.exit(1);}
console.log('Recette préproduction réussie : '+required.length+' chemins clés et '+articleCount+' articles ; indexation désactivée.');

// Déclencheur technique Cloudflare Pages — nouvelle tentative après suppression du déploiement bloqué du 9 novembre 2026.
