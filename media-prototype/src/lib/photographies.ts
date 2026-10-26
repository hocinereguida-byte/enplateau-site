import registry from '../../../content/rubriques/illustrations.json';
/** Illustration explicite de chaque rubrique, sans recyclage automatique d'une photo d'article. */
export const photoCycle=(cycle:string):string=>String((registry.cycles as Record<string,string>)[cycle]??'').trim();
export const photoConversation=(cycle:string,conversation:string):string=>String((registry.conversations as Record<string,string>)[cycle+'_'+conversation]??'').trim();
export const photoLecture=(lecture:string):string=>String((registry.lectures as Record<string,string>)[lecture]??'').trim();
/** Le contenu possède toujours sa photo, indépendamment de son affichage dans une liste. */
export const afficherPhotoListe=(article:any,zone:'accueil'|'rubrique',position:number):boolean=>{
 const choix=zone==='accueil'?article.affichage_accueil:article.affichage_rubrique;
 if(choix==='photo')return true;
 if(choix==='titre')return false;
 return article.mise_en_avant==='une'||article.mise_en_avant==='secondaire'||position===0;
};
