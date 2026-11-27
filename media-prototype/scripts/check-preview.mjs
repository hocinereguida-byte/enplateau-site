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

// Nathalie Solo / Lola Genzed V4.2 : comparaison intégrale du texte rendu.
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
 const count=expected.filter(s=>s!=='Par Lola Genzed').map(s=>s.replace(/^## /,'')).join('').length;
 if(JSON.stringify(rendered)!==JSON.stringify(expected)||count!==10435||expected.filter(s=>s.startsWith('## ')).length!==5||expected.at(-1)!=='Nathalie lui demande laquelle elle doit signer.'||(story.match(/class="fiction-dialogue-turn"/g)||[]).length!==18)errors.push('Nathalie Lola V4.2 : texte, longueur, intertitres ou répliques non concordants.');
 const h1=html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1]??'';
 const lead=html.match(/<p class="lead">([\s\S]*?)<\/p>/)?.[1]??'';
 if(decode(h1)!==field('title')||decode(lead)!==field('summary')||!decode(html).includes(field('source_notice'))||!html.includes('Fiction satirique · Raisons et déraisons')||!html.includes('/media/lectures/technologie-innovation/')||!html.includes('/media/cycles/industrie/conversations/C1/')||!html.includes('/media/cycles/industrie/contextes/CST/')||!html.includes(field('hero_image'))||!decode(html).includes(field('image_alt'))||!story.includes('href="/media/auteurs/lola-genzed/"')||html.includes('aria-label="Signature de l’auteur"')||(story.match(/Par Lola Genzed/g)||[]).length!==1||!story.includes('Par Lola Genzed'))errors.push('Nathalie Lola V4.2 : titre, chapô, signature, fiction, illustration ou classement non conforme.');
 for(const name of ['Nathalie Solo','Sonia Praude','Vincent Tracker','Karim Samarche','Benoît Time','Hugo Matricks','Mina Mano','Samuel Killer','Laurent Champion','Bruno Toudou'])if(!decode(html).includes(name))errors.push('Nathalie Lola V4.2 : identité manquante '+name);
 for(const page of ['media/publications/index.html','media/cycles/industrie/index.html','media/cycles/industrie/conversations/C1/index.html','media/scenes/index.html','media/lectures/technologie-innovation/index.html','media/auteurs/lola-genzed/index.html'])if(!read(page).includes(href))errors.push('Nathalie Lola V4.2 : navigation incorrecte '+page);
 if(!/name="robots"\s+content="noindex,nofollow"/.test(html))errors.push('Nathalie Lola V4.2 : article indexable en préproduction.');
}

// Laurent Dafdaf / Winnie Bouba V1.8 : contrôle intégral de la version figée.
{
 const slug='ind-c1-cst-05-brouillon',href='/media/articles/industrie/'+slug+'/';
 const html=read('media/articles/industrie/'+slug+'/index.html');
 const source=fs.readFileSync(path.resolve('../content/articles/industrie/'+slug+'.md'),'utf8');
 const front=source.match(/^---\n([\s\S]*?)\n---\n\n([\s\S]*)$/);
 const field=k=>JSON.parse(front[1].split('\n').find(l=>l.startsWith(k+': ')).slice(k.length+2));
 const decode=s=>s.replace(/&#(x[0-9a-f]+|\d+);/gi,(_,v)=>String.fromCodePoint(v[0].toLowerCase()==='x'?parseInt(v.slice(1),16):Number(v))).replace(/&apos;/g,"'").replace(/&quot;/g,'"').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
 const story=html.match(/<article\b[^>]*data-article-id="industrie\/ind-c1-cst-05-brouillon"[^>]*>([\s\S]*?)<\/article>/i)?.[1]??'';
 const rendered=[...story.matchAll(/<(p|h2)\b([^>]*)>([\s\S]*?)<\/\1>/g)].map(m=>(m[1]==='h2'?'## ':decode(m[2].match(/data-source-prefix="([^"]*)"/)?.[1]??''))+decode(m[3].replace(/<[^>]*>/g,'')));
 const expected=front[2].trim().split(/\n\n/);
 const sourceLength=[field('title'),field('summary'),'Par Winnie Bouba','Fiction satirique · Les interrogatoires',...expected.slice(1).map(s=>s.replace(/^## /,''))].join('\n\n').length+2;
 if(JSON.stringify(rendered)!==JSON.stringify(expected)||sourceLength!==19386||expected.filter(s=>s.startsWith('## ')).length!==6||expected.at(-1)!=='— Oh Laurent... Ferme ta gueule, frère.'||(story.match(/class="winnie-dialogue-line"/g)||[]).length!==335||(story.match(/class="winnie-stage"><em>/g)||[]).length!==50)errors.push('Laurent Winnie V1.8 : texte intégral, longueur, intertitres, didascalies ou répliques non concordants.');
 const h1=html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1]??'';
 const lead=html.match(/<p class="lead">([\s\S]*?)<\/p>/)?.[1]??'';
 if(decode(h1)!==field('title')||decode(lead)!==field('summary')||!decode(html).includes(field('source_notice'))||!html.includes('Fiction satirique · Les interrogatoires')||!html.includes('/media/lectures/finance-investissement/')||!html.includes('/media/cycles/industrie/conversations/C1/')||!html.includes('/media/cycles/industrie/contextes/CST/')||!html.includes(field('hero_image'))||!decode(html).includes(field('image_alt'))||!html.includes('<h2>Winnie Bouba</h2>')||!story.includes('Par Winnie Bouba'))errors.push('Laurent Winnie V1.8 : titre, chapô, signature, fiction, image ou classement non conforme.');
 for(const who of ['Winnie Bouba','Laurent Dafdaf','Dylan Raccord'])if(!story.includes('interview-speaker">'+who))errors.push('Laurent Winnie V1.8 : attribution manquante '+who);
 if(/Jean Toksic|Laurent B\./.test(decode(story))||/GO préproduction|D2 favorable sous limites/.test(decode(story)))errors.push('Laurent Winnie V1.8 : ancien nom ou métadonnées visibles.');
 for(const page of ['media/publications/index.html','media/cycles/industrie/index.html','media/cycles/industrie/conversations/C1/index.html','media/scenes/index.html','media/lectures/finance-investissement/index.html'])if(!read(page).includes(href))errors.push('Laurent Winnie V1.8 : navigation incorrecte '+page);
 if(!/name="robots"\s+content="noindex,nofollow"/.test(html))errors.push('Laurent Winnie V1.8 : article indexable en préproduction.');
}

// Bernard Daiterre / Thierry Chmonfils V1.6 : remplacement de Thomas à l'adresse historique.
{
 const slug='imm-c1-rc-02-thomas',href='/media/articles/immobilier/'+slug+'/';
 const html=read('media/articles/immobilier/'+slug+'/index.html');
 const source=fs.readFileSync(path.resolve('../content/articles/immobilier/'+slug+'.md'),'utf8');
 const front=source.match(/^---\n([\s\S]*?)\n---\n\n([\s\S]*)$/);
 const field=k=>JSON.parse(front[1].split('\n').find(l=>l.startsWith(k+': ')).slice(k.length+2));
 const decode=s=>s.replace(/&#(x[0-9a-f]+|\d+);/gi,(_,v)=>String.fromCodePoint(v[0].toLowerCase()==='x'?parseInt(v.slice(1),16):Number(v))).replace(/&apos;/g,"'").replace(/&quot;/g,'"').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
 const story=html.match(/<article\b[^>]*data-article-id="immobilier\/imm-c1-rc-02-thomas"[^>]*>([\s\S]*?)<\/article>/i)?.[1]??'';
 const rendered=[...story.matchAll(/<(p|h2)\b[^>]*>([\s\S]*?)<\/\1>/g)].map(m=>(m[1]==='h2'?'## ':'')+decode(m[2].replace(/<[^>]*>/g,'')));
 const expected=front[2].trim().split(/\n\n/);
 const count=[field('title'),field('summary'),'Fiction satirique · Raisons et déraisons',...expected.map(s=>s.replace(/^## /,'')),field('source_notice')].join('').length;
 if(JSON.stringify(rendered)!==JSON.stringify(expected)||count!==12666||expected.length!==134||expected.filter(s=>s.startsWith('## ')).length!==5||expected.at(-1)!=='Bernard leur a demandé de sortir de son bureau.'||(story.match(/class="fiction-dialogue-turn"/g)||[]).length!==7)errors.push('Bernard Thierry V1.6 : texte, longueur, intertitres ou répliques non concordants.');
 const h1=html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1]??'';
 const lead=html.match(/<p class="lead">([\s\S]*?)<\/p>/)?.[1]??'';
 if(decode(h1)!==field('title')||decode(lead)!==field('summary')||!decode(html).includes(field('source_notice'))||!html.includes('Fiction satirique · Raisons et déraisons')||!html.includes('/media/lectures/operations-organisation/')||!html.includes('/media/cycles/immobilier/conversations/C1/')||!html.includes('/media/cycles/immobilier/contextes/territoire-reconversion/')||!html.includes('<h2>Thierry Chmonfils</h2>')||!story.includes('Par Thierry Chmonfils'))errors.push('Bernard Thierry V1.6 : titre, chapô, fiction, signature ou classement non conforme.');
 if(html.includes('/images/imm-c1-rc-02-thomas-visuel-v3.webp')||decode(story).includes('Thomas L.')||decode(story).includes('Variante F'))errors.push('Bernard Thierry V1.6 : ancien contenu ou visuel de Thomas visible.');
 for(const name of ['Bernard Daiterre','Michel Negaut','Antoine Crevard'])if(!decode(story).includes(name))errors.push('Bernard Thierry V1.6 : personnage manquant '+name);
 for(const page of ['media/publications/index.html','media/cycles/immobilier/index.html','media/cycles/immobilier/conversations/C1/index.html','media/scenes/index.html','media/lectures/operations-organisation/index.html'])if(!read(page).includes(href))errors.push('Bernard Thierry V1.6 : navigation incorrecte '+page);
 if(!/name="robots"\s+content="noindex,nofollow"/.test(html))errors.push('Bernard Thierry V1.6 : article indexable en préproduction.');
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

// Alain V4.4 : concordance intégrale du corps et retrait de l'ancien entretien.
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
 if(JSON.stringify(rendered)!==JSON.stringify(expected)||!story.includes('Par Emma Santhune')||!story.includes('interview-speaker">Emma Santhune')||!story.includes('interview-speaker">Alain Ristourne')||!story.includes('interview-speaker">Le serveur')||/interview-speaker">Jean/.test(story)||!decode(story).includes('mon collègue Jean Toksik')||!decode(story).includes('Benoît Time, mon rédacteur en chef')||(decode(story).match(/\bJean\b/g)||[]).length!==1||!story.includes('href="/media/auteurs/emma-santhune/"')||html.includes('aria-label="Signature de l’auteur"')||(story.match(/Par Emma Santhune/g)||[]).length!==1||expected.length!==201||expected.slice(1).map(x=>x.replace(/^## /,'')).join('').length!==11679||expected.filter(x=>x.startsWith('## ')).length!==5||(story.match(/class="alain-dialogue-line"/g)||[]).length!==158||expected.at(-1)!=='— Attendez, Alain. Il en reste un peu sur mon couteau.')errors.push('Alain V4.4 Emma : texte intégral, signature ou attribution non concordants.');
 const h1=html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1]??'';
 const lead=html.match(/<p class="lead">([\s\S]*?)<\/p>/)?.[1]??'';
 if(decode(h1)!==field('title')||decode(lead)!==field('summary')||!decode(html).includes(field('source_notice'))||!html.includes('Fiction satirique · Les interrogatoires')||!html.includes('/media/lectures/finance-investissement/')||!html.includes('/media/cycles/immobilier/conversations/C1/')||!html.includes('/media/cycles/immobilier/contextes/territoire-reconversion/'))errors.push('Alain V4.4 : titre, chapô, mention de fiction ou classement non conforme.');
 for(const page of ['media/publications/index.html','media/cycles/immobilier/index.html','media/cycles/immobilier/conversations/C1/index.html','media/scenes/index.html','media/lectures/finance-investissement/index.html','media/auteurs/emma-santhune/index.html']){
  const pageHtml=read(page);if(!pageHtml.includes(href)||pageHtml.includes(oldHref))errors.push('Alain/Isabelle : navigation incorrecte : '+page);
 }
 if(!fs.existsSync(path.resolve('../content/archives/immobilier/imm-c1-rc-01-isabelle.md')))errors.push('Archive Isabelle manquante.');
 if(fs.existsSync(path.join(root,'media/articles/immobilier/imm-c1-rc-01-isabelle/index.html')))errors.push('Isabelle : ancienne route encore générée.');
}

// Patrick Lola V9.2 : concordance intégrale et retrait de l'ancien article de stratégie.
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
 if(JSON.stringify(rendered)!==JSON.stringify(expected)||expected.filter(s=>s.startsWith('## ')).length!==4||(story.match(/class="fiction-dialogue-turn"/g)||[]).length!==12||expected.filter(s=>s!=='Par Lola Genzed').map(s=>s.replace(/^## /,'')).join('').length!==11238||expected.at(-1)!=='— Eh ben, Patrick. Vous avez réussi à les faire travailler ensemble.'||!story.includes('Par Lola Genzed')||!story.includes('href="/media/auteurs/lola-genzed/"')||html.includes('aria-label="Signature de l’auteur"')||(story.match(/Par Lola Genzed/g)||[]).length!==1)errors.push('Patrick Lola V9.2 : texte intégral ou dialogues non concordants.');
 const h1=html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1]??'';
 const lead=html.match(/<p class="lead">([\s\S]*?)<\/p>/)?.[1]??'';
 if(decode(h1)!==field('title')||decode(lead)!==field('summary')||!decode(html).includes(field('source_notice'))||!html.includes('Fiction satirique · Raisons et déraisons')||!html.includes('/media/lectures/strategie-gouvernance/')||!html.includes('/media/cycles/immobilier/conversations/C1/')||!html.includes('/media/cycles/immobilier/contextes/territoire-reconversion/'))errors.push('Patrick Lola V9.2 : titre, chapô, fiction ou classement non conforme.');
 for(const name of ["Patrick Delaplace","Céline Lafrite","François Chouze","Sandrine Belmèche","Rachid El Snoub","Émilie Carré"])if(!decode(html).includes(name))errors.push('Patrick Lola V9.2 : personnage manquant '+name);
 for(const page of ['media/publications/index.html','media/cycles/immobilier/index.html','media/cycles/immobilier/conversations/C1/index.html','media/scenes/index.html','media/lectures/strategie-gouvernance/index.html','media/auteurs/lola-genzed/index.html']){
  const pageHtml=read(page);if(!pageHtml.includes(href)||pageHtml.includes(oldHref))errors.push('Patrick/Audrey : navigation incorrecte : '+page);
 }
 if(fs.existsSync(path.join(root,'media/articles/immobilier/imm-c1-rc-03-nathalie/index.html')))errors.push('Audrey : ancienne route encore générée.');
}

// Cinq sources finales : comparer tous les paragraphes et séparateurs rendus.
for(const spec of [{"route":"industrie/ind-c1-cst-01-brouillon","version":"Variante populaire harmonisée finale","author":"Jean Toksik","bodyCount":14376,"total":281,"headings":0,"separators":8},{"route":"immobilier/imm-c1-rc-04-karim","version":"V1.3","author":"Jean Toksik","bodyCount":12080,"total":250,"headings":6,"separators":0},{"route":"industrie/ind-c1-cst-02-brouillon","version":"V9.2","author":"Oscar Sansfroid","bodyCount":12648,"total":136,"headings":0,"separators":8},{"route":"industrie/ind-c1-cst-04-brouillon","version":"V8.2","author":"Oscar Sansfroid","bodyCount":13269,"total":105,"headings":5,"separators":5},{"route":"immobilier/imm-c1-rc-05-caserne","version":"V6.5","author":"Oscar Sansfroid","bodyCount":8990,"total":60,"headings":5,"separators":0}]){
 const route=spec.route,href='/media/articles/'+route+'/';
 const html=read('media/articles/'+route+'/index.html');
 const source=fs.readFileSync(path.resolve('../content/articles/'+route+'.md'),'utf8');
 const front=source.match(/^---\n([\s\S]*?)\n---\n\n([\s\S]*)$/);
 const field=k=>JSON.parse(front[1].split('\n').find(l=>l.startsWith(k+': ')).slice(k.length+2));
 const decode=s=>s.replace(/&#(x[0-9a-f]+|\d+);/gi,(_,v)=>String.fromCodePoint(v[0].toLowerCase()==='x'?parseInt(v.slice(1),16):Number(v))).replace(/&apos;/g,"'").replace(/&quot;/g,'"').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
 const story=html.match(/<article\b[^>]*data-article-id="[^"]+"[^>]*>([\s\S]*?)<\/article>/i)?.[1]??'';
 const expected=front[2].trim().split(/\n\n/);
 const rendered=[...story.matchAll(/<(p|h2)\b([^>]*)>([\s\S]*?)<\/\1>|<hr\b[^>]*data-source-separator="([^"]+)"[^>]*>/g)].map(m=>m[4]??((m[1]==='h2'?'## ':m[2].includes('final-dialogue-line')?'— ':'')+decode(m[3].replace(/<[^>]*>/g,''))));
 const count=expected.slice(1).filter(x=>x!=='*'&&x!=='---').map(x=>x.replace(/^## /,'')).join('').length;
 if(JSON.stringify(rendered)!==JSON.stringify(expected)||count!==spec.bodyCount||expected.filter(x=>x.startsWith('— ')).length!==spec.total||expected.filter(x=>x.startsWith('## ')).length!==spec.headings||expected.filter(x=>x==='*'||x==='---').length!==spec.separators||(story.match(/class="[^"]*final-dialogue-line"/g)||[]).length!==spec.total)errors.push('Manuscrit final non concordant : '+route);
 const h1=html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1]??'',lead=html.match(/<p class="lead">([\s\S]*?)<\/p>/)?.[1]??'';
 const label=spec.author==='Jean Toksik'?'Fiction satirique · Les interrogatoires':'Fiction satirique · Raisons et déraisons';
 const slug=spec.author==='Jean Toksik'?'jean-toksik':'oscar-sansfroid';
 if(decode(h1)!==field('title')||decode(lead)!==field('summary')||!decode(html).includes(field('source_notice'))||!html.includes(label)||field('source_document_version')!==spec.version||field('signature_auteur')!==spec.author||!story.includes('href="/media/auteurs/'+slug+'/"')||!story.includes('Par '+spec.author)||html.includes('aria-label="Signature de l’auteur"'))errors.push('Signature, titre, chapô ou signalétique finale incorrecte : '+route);
 if(/Jean Toksic|Marc D\.|Sophie M\.|Philippe D\.|Malik B\.|Claire M\.|Kevin R\./.test(decode(story)))errors.push('Ancienne identité dans le manuscrit final : '+route);
 const cycle=route.split('/')[0],lecture=field('perspective_principale');
 for(const page of ['media/publications/index.html','media/cycles/'+cycle+'/index.html','media/cycles/'+cycle+'/conversations/C1/index.html','media/scenes/index.html','media/lectures/'+lecture+'/index.html','media/auteurs/'+slug+'/index.html'])if(!read(page).includes(href))errors.push('Navigation finale incorrecte : '+route+' / '+page);
 if(!/name="robots"\s+content="noindex,nofollow"/.test(html))errors.push('Article final indexable : '+route);
 if(front[1].includes('\nhero_image: ')){if(!html.includes(field('hero_image'))||!decode(html).includes(field('image_alt')))errors.push('Visuel final ou alt absent : '+route);}
}
if(!fs.existsSync(path.resolve('../content/archives/immobilier/imm-c1-rc-04-karim.md')))errors.push('Karim : archive historique manquante.');

// Signatures éditoriales validées, distinctes du corps des manuscrits.
for(const [route,author] of [["industrie/ind-c1-cst-05-brouillon","Winnie Bouba"]]){
 const html=read('media/articles/'+route+'/index.html');
 const signature=html.match(/<section\b[^>]*aria-label="Signature de l’auteur"[^>]*>([\s\S]*?)<\/section>/)?.[1]??'';
 if(!signature.includes('<h2>'+author+'</h2>'))errors.push('Signature éditoriale incorrecte : '+route);
}


// Fiches d'auteurs : bijection entre les articles effectivement rendus et leurs listes.
{
 const byAuthor=new Map();
 const directory=read('media/auteurs/index.html');
 const walk=dir=>{
  for(const entry of fs.readdirSync(dir,{withFileTypes:true})){
   const full=path.join(dir,entry.name);
   if(entry.isDirectory())walk(full);
   else if(entry.name==='index.html'){
    const html=fs.readFileSync(full,'utf8');
    const article=html.match(/<article\b[^>]*data-article-id="([^"]+)"[^>]*>/)?.[0]??'';
    const id=article.match(/data-article-id="([^"]+)"/)?.[1];
    const slug=article.match(/data-author-slug="([^"]+)"/)?.[1];
    if(!id||!slug)returnIfUnsigned();
    else{
     const href='/media/auteurs/'+slug+'/';
     if(!html.includes('href="'+href+'"'))errors.push('Signature non cliquable : '+id);
     if(!byAuthor.has(slug))byAuthor.set(slug,[]);
     byAuthor.get(slug).push(id);
    }
   }
  }
 };
 function returnIfUnsigned(){}
 walk(articlesRoot);
 for(const [slug,ids] of byAuthor){
  const profile=read('media/auteurs/'+slug+'/index.html');
  if(!directory.includes('href="/media/auteurs/'+slug+'/"'))errors.push('Auteur absent de l’annuaire : '+slug);
  if(!/name="robots"\s+content="noindex,nofollow"/.test(profile))errors.push('Fiche auteur indexable : '+slug);
  const listed=[...profile.matchAll(/data-author-article="([^"]+)"/g)].map(m=>m[1]);
  if(JSON.stringify([...listed].sort())!==JSON.stringify([...ids].sort()))errors.push('Fiche auteur incomplète ou dupliquée : '+slug);
  for(const id of ids)if(!profile.includes('href="/media/articles/'+id+'/"'))errors.push('Lien article absent de la fiche : '+id);
 }
 for(const slug of ['oscar-sansfroid','lola-genzed','thierry-chmonfils','jean-toksik','emma-santhune','winnie-bouba'])if(!byAuthor.has(slug))errors.push('Auteur attendu manquant : '+slug);
 if(byAuthor.has('jean-toksic'))errors.push('Doublon historique Jean Toksic.');
 if(!byAuthor.get('jean-toksik')?.includes('industrie/ind-c1-cst-01-brouillon')||!byAuthor.get('jean-toksik')?.includes('immobilier/imm-c1-rc-04-karim'))errors.push('Jean : regroupement des signatures historiques incorrect.');
 if(!/name="robots"\s+content="noindex,nofollow"/.test(directory))errors.push('Annuaire auteur indexable.');
}

if(errors.length){console.error(errors.join('\n'));process.exit(1);}
console.log('Recette préproduction réussie : '+required.length+' chemins clés et '+articleCount+' articles ; indexation désactivée.');

// Déclencheur technique Cloudflare Pages — nouvelle tentative après suppression du déploiement bloqué du 9 novembre 2026.
