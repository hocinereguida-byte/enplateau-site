export const conversations: Record<string, Record<string,string>> = {
 industrie: {C1:'Croissance industrielle',C2:'Dépendances industrielles',C3:'Outil industriel',C4:'Trajectoire industrielle',C5:'Besoins et proposition de valeur',C6:'Marchés et débouchés',C7:'Implantation industrielle'},
 immobilier: {C1:'À quel moment une opération ne tient plus ?',C2:'Jusqu’où peut-on produire ?',C3:'Transformer ou reconstruire ?',C4:'Qui fait réellement avancer — ou basculer — un projet ?',C5:'À quels besoins l’immobilier doit-il encore répondre ?',C6:'Comment préserver la valeur et l’utilité du patrimoine existant ?',C7:'À quelles conditions accéder aux espaces nécessaires ?'}
};
export const contexts: Record<string,Record<string,string>> = {
 industrie: {CST:'Croissance sous tension',ASC:'Adaptation sous contrainte',RSS:'Réinvention sous crise'},
 immobilier: {'zone-tendue':'Zone tendue','zone-croissance':'Zone en croissance','territoire-reconversion':'Territoire en reconversion'}
};
export const readings: Record<string,string> = {
 'strategie-gouvernance':'Stratégie & gouvernance','finance-investissement':'Finance & investissement',
 'droit-regulation':'Droit & régulation','operations-organisation':'Opérations & organisation',
 'technologie-innovation':'Technologie & innovation','ressources-humaines-competences':'Ressources humaines & compétences',
 'energie-ressources':'Énergie & ressources','territoires-politiques-publiques':'Territoires & politiques publiques'
};
export const urlOf = (id: string) => '/media/articles/'+id+'/';
export const isPublic = (data: any, now=new Date()) => data.published === true && data.statut_editorial === 'publie' && Boolean(data.publication_date) && new Date(data.publication_date) <= now && Boolean(data.summary?.trim());
export const validClassification=(d:any) => Boolean(conversations[d.cycle]?.[d.conversation] && contexts[d.cycle]?.[d.contexte] && readings[d.lecture_principale]);
export const formattedDate = (date:Date) => new Intl.DateTimeFormat('fr-FR',{day:'numeric',month:'long',year:'numeric',timeZone:'Europe/Paris'}).format(date);
