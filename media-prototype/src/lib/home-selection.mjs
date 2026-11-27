import { finalManuscripts } from './home-final-manuscripts.mjs';

export const homeRevision='stock-final-v1-20261127';
export function manuscriptFingerprint(article){
 const d=article.data;
 const payload=JSON.stringify([d.title,d.summary??null,d.signature_auteur??null,d.source_notice??null,(article.body??'').replace(/\r\n/g,'\n').trim()]);
 let h=2166136261>>>0;
 for(let i=0;i<payload.length;i++)h=Math.imul(h^payload.charCodeAt(i),16777619)>>>0;
 return h.toString(16).padStart(8,'0');
}
export function matchesFinal(article,entry){
 if(!entry||entry.status!=='integrated')return false;
 const d=article.data;
 const source=String(d.source_document_url??'').match(/\/(?:d|file\/d)\/([^/]+)/)?.[1];
 return d.source_document_version===entry.version&&source===entry.source&&manuscriptFingerprint(article)===entry.fingerprint;
}
const genre=a=>a.data.format==='regard-croise'?'regard-croise':a.data.genre_narratif||(a.data.format==='entretien'?'grand-entretien':a.data.format);
const author=a=>String(a.data.signature_auteur??'').trim().replace(/^Jean Toksic$/i,'Jean Toksik');
const priority=a=>({une:0,secondaire:1,standard:2}[a.data.mise_en_avant??'standard']??2);
export function selectHomeArticles(articles){
 const entries=new Map(finalManuscripts.map((e,i)=>[e.id,{...e,index:i}]));
 const eligible=articles.filter(a=>matchesFinal(a,entries.get(a.id)));
 const ordered=[...eligible].sort((a,b)=>priority(a)-priority(b)||entries.get(b.id).date.localeCompare(entries.get(a.id).date)||entries.get(a.id).index-entries.get(b.id).index);
 const featured=ordered[0],chosen=[],authorCounts=new Map(),cycleCounts=new Map(),genres=new Set();
 const fits=a=>(!author(a)||(authorCounts.get(author(a))??0)<2)&&(cycleCounts.get(a.data.cycle)??0)<2;
 function add(a){
  chosen.push(a);
  if(author(a))authorCounts.set(author(a),(authorCounts.get(author(a))??0)+1);
  cycleCounts.set(a.data.cycle,(cycleCounts.get(a.data.cycle)??0)+1);
  genres.add(genre(a));
 }
 if(featured)add(featured);
 // Réserver une place à chaque genre éligible, puis compléter par priorité et récence.
 for(const g of ['chronique','grand-entretien','regard-croise']){
  if(genres.has(g))continue;
  const a=ordered.find(a=>!chosen.includes(a)&&genre(a)===g&&fits(a));
  if(a&&chosen.length<7)add(a);
 }
 for(const a of ordered)if(chosen.length<7&&!chosen.includes(a)&&fits(a))add(a);
 return {featured,latest:ordered.filter(a=>a!==featured&&chosen.includes(a)),eligible};
}
