import { genreOf } from './editorial';

// Les signatures historiques sont conservées dans les manuscrits.
// L'ancienne graphie Toksic renvoie à la même personnalité éditoriale.
export function displayedAuthor(data: any): string | null {
 const genre=genreOf(data);
 const explicit=typeof data.signature_auteur==='string' ? data.signature_auteur.trim() : '';
 if(data.format==='regard-croise')return explicit||null;
 if(genre==='grand-entretien')return explicit||'Jean Toksic';
 if(genre==='recit')return explicit||'Oscar Sauvage';
 if(genre==='chronique')return explicit||null;
 return explicit||null;
}
export const canonicalAuthor = (name:string):string =>
 /^Jean Toksic$/i.test(name.trim()) ? 'Jean Toksik' : name.trim();
export const authorSlug = (name:string):string =>
 canonicalAuthor(name).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');
export const authorUrl = (name:string):string => '/media/auteurs/'+authorSlug(name)+'/';
export const authorStyle: Record<string,{genre:string;description:string}> = {
 'oscar-sansfroid':{genre:'Raisons et déraisons',description:'Pince-sans-rire, rationalité poussée jusqu’au ridicule.'},
 'lola-genzed':{genre:'Raisons et déraisons',description:'Sarcasme, insolence, autodérision et complicité.'},
 'thierry-chmonfils':{genre:'Raisons et déraisons',description:'Tchatche, débrouillardise, frime et opportunisme.'},
 'jean-toksik':{genre:'Les interrogatoires',description:'Provocation, confrontation et déstabilisation.'},
 'emma-santhune':{genre:'Les interrogatoires',description:'Candeur, indiscrétion et fascination pour l’argent.'},
 'winnie-bouba':{genre:'Les interrogatoires',description:'Ego, susceptibilité, vantardise et compétition.'}
};
export function authorGroups<T extends {id:string;data:any}>(articles:T[]){
 const groups=new Map<string,{slug:string;name:string;articles:T[]}>();
 for(const article of articles){
  const signature=displayedAuthor(article.data);
  if(!signature)continue;
  const slug=authorSlug(signature);if(!slug)continue;
  const name=canonicalAuthor(signature);
  const group=groups.get(slug);
  if(group){if(group.name!==name)throw new Error('Collision de signatures : '+name+' / '+group.name);group.articles.push(article);}
  else groups.set(slug,{slug,name,articles:[article]});
 }
 return [...groups.values()].sort((a,b)=>a.name.localeCompare(b.name,'fr'));
}
