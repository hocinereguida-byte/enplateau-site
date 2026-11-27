import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { finalManuscripts } from '../src/lib/home-final-manuscripts.mjs';
import { matchesFinal,selectHomeArticles,homeRevision } from '../src/lib/home-selection.mjs';

const ids=new Set();
const articles=[];
for(const entry of finalManuscripts){
 assert(!ids.has(entry.id),'Doublon registre accueil : '+entry.id);
 ids.add(entry.id);
 if(entry.status==='pending')continue;
 assert.equal(entry.status,'integrated');
 const text=fs.readFileSync(path.resolve('../content/articles/'+entry.id+'.md'),'utf8').replace(/\r\n/g,'\n');
 const m=text.match(/^---\n([\s\S]*?)\n---\n\n([\s\S]*)$/);
 assert(m,'Frontmatter absent : '+entry.id);
 const data={};
 for(const line of m[1].split('\n')){
  const match=line.match(/^([a-z_0-9]+): (.+)$/);
  if(match){try{data[match[1]]=JSON.parse(match[2])}catch{data[match[1]]=match[2]}}
 }
 const article={id:entry.id,data,body:m[2]};
 assert(matchesFinal(article,entry),'Manuscrit intégré différent du registre définitif : '+entry.id);
 assert.equal(data.published,true);
 assert.equal(data.autorisation_publication,'preproduction_uniquement');
 articles.push(article);
}
const {featured,latest}=selectHomeArticles(articles);
const selected=[featured,...latest].filter(Boolean);
const html=fs.readFileSync(process.argv[2]??'dist/media/index.html','utf8');
assert(html.includes('name="sda-home-selection" content="'+homeRevision+'"'),'Révision accueil absente');
const rendered=[...html.matchAll(/<a\b[^>]*data-home-selection="(featured|latest)"[^>]*href="\/media\/articles\/([^"]+)\/"[^>]*>/g)].map(m=>({type:m[1],id:m[2]}));
const expected=selected.map((a,i)=>({type:i===0?'featured':'latest',id:a.id}));
assert.deepEqual(rendered,expected,'Accueil : sélection différente du registre ou ancien manuscrit');
assert(selected.length<=7);
const authors=new Map(),cycles=new Map();
for(const a of selected){
 const author=a.data.signature_auteur,cycle=a.data.cycle;
 if(author)authors.set(author,(authors.get(author)??0)+1);
 cycles.set(cycle,(cycles.get(cycle)??0)+1);
}
assert([...authors.values(),...cycles.values()].every(x=>x<=2),'Accueil : concentration excessive');
console.log('Accueil vérifié : '+articles.length+' manuscrits définitifs admissibles, '+selected.length+' sélections. '+selected.map(a=>a.id).join(' | '));
