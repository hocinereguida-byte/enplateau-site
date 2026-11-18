/**
 * Composition TYPOGRAPHIQUE des dialogues, sans modification du manuscrit.
 *
 * Les locuteurs sont relus pour chaque version : aucune attribution par alternance
 * automatique. Une modification du texte qui rompt la concordance fait échouer
 * la compilation, plutôt que d'afficher de fausses attributions.
 *
 * À chaque nouvelle version d'une chronique dialoguée : établir une distribution
 * vérifiée, contrôler tous les groupes et inspecter le HTML compilé sur mobile.
 */
type DialogueGroup = {
  opening: string;
  speakers: readonly string[];
};

/** Sophie M. V8.8, 17 novembre 2026. 17 groupes / 54 répliques contrôlées. */
const sophieV88: readonly DialogueGroup[] = [
  {opening:"Vous pouvez réparer la machine sans l'arrêter", speakers:["Philippe","Malik","Philippe","Malik"]},
  {opening:"Il faut trente-six heures d'arrêt", speakers:["Malik","Philippe","Malik","Philippe"]},
  {opening:"Vous voyez, Sophie, quand on cherche", speakers:["Philippe","Sophie","Philippe"]},
  {opening:"Malgré les difficultés, l'outil industriel", speakers:["Philippe"]},
  {opening:"Oui, mais il ne faudrait pas non plus", speakers:["Philippe"]},
  {opening:"Dès que nous aurons évalué les conséquences", speakers:["Philippe","Malik","Philippe"]},
  {opening:"Tu peux toujours la réparer", speakers:["Sophie","Malik","Sophie"]},
  {opening:"Maintenant ?", speakers:["Malik","Sophie"]},
  {opening:"Sophie, juste pour être sûr", speakers:["Malik","Sophie"]},
  {opening:"Qui a décidé ça ?", speakers:["Philippe","Sophie","Philippe","Sophie"]},
  {opening:"J'avais coupé la sonnerie", speakers:["Philippe","Sophie","Philippe","Sophie","Philippe","Sophie","Philippe"]},
  {opening:"Vous savez pourquoi je vous appelais", speakers:["Sophie","Philippe","Sophie","Philippe","Philippe","Sophie","Philippe"]},
  {opening:"Il est en train de régler le premier", speakers:["Sophie"]},
  {opening:"Vous livrez jeudi ?", speakers:["Le client","Le commercial","Le client","Le commercial"]},
  {opening:"Nous travaillons à fiabiliser le calendrier", speakers:["Le commercial","Le client"]},
  {opening:"C'est bon ?", speakers:["Sophie","Malik","Sophie","Malik","Sophie"]},
  {opening:"Et vous avez eu raison d'insister", speakers:["Philippe"]}
];

const escapeHtml=(s: string):string=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');

/**
 * Rendu statique du corps de Sophie V8.8 avec la même composition des répliques
 * que Claire/Kevin : liseré à gauche, petit nom bleu, texte en Literata.
 * Les 147 paragraphes narratifs et cinq pauses conservent leur contenu.
 */
export function renderSophieV88Dialogue(markdownBody: string): string {
 if(typeof markdownBody!=='string'||!markdownBody.includes("Vous pouvez réparer la machine")) {
  throw new Error('Sophie V8.8 : corps Markdown introuvable ; contrôle des dialogues impossible.');
 }
 const blocks=markdownBody.replace(/\r\n/g,'\n').trim().split(/\n[ \t]*\n+/).map(b=>b.trim()).filter(Boolean);
 const dialogueStart=(s:string)=>/^—[ \t]+/.test(s);
 const used=new Set<string>();
 const output:string[]=[];
 let dialogueTurns=0, narrativeCount=0, separators=0;
 for(let i=0;i<blocks.length;){
  const b=blocks[i];
  if(b==='---'){output.push('<hr aria-hidden="true"/>');separators++;i++;continue;}
  if(/^#{1,6} /.test(b)){throw new Error('Sophie V8.8 : intertitre nouveau, vérifier le gabarit de lecture.');}
  if(!dialogueStart(b)){output.push('<p>'+escapeHtml(b)+'</p>');narrativeCount++;i++;continue;}
  const group:string[]=[];
  while(i<blocks.length&&dialogueStart(blocks[i])){group.push(blocks[i]);i++;}
  const opening=group[0].replace(/^—[ \t]*/,'');
  const matching=sophieV88.filter(spec=>opening.startsWith(spec.opening));
  if(matching.length!==1||used.has(matching[0]?.opening)){
   throw new Error('Sophie V8.8 : attribution non vérifiée pour « '+opening.slice(0,60)+' ».');
  }
  const spec=matching[0];
  if(group.length!==spec.speakers.length){
   throw new Error('Sophie V8.8 : nombre de répliques différent pour « '+spec.opening+' » : '+group.length+'/'+spec.speakers.length);
  }
  used.add(spec.opening);
  output.push('<div class="fiction-dialogue" role="group" aria-label="Dialogue" data-dialogue-verified="sophie-v8-8">');
  group.forEach((line,j)=>{
   // Seul le tiret typographique initial devient un bloc de prise de parole.
   // Les mots, la ponctuation et les incises originales restent intégralement présents.
   const words=line.replace(/^—[ \t]*/,'');
   output.push('<div class="fiction-dialogue-turn"><span class="fiction-dialogue-speaker">'+escapeHtml(spec.speakers[j])+'</span><p class="fiction-dialogue-line">'+escapeHtml(words)+'</p></div>');
   dialogueTurns++;
  });
  output.push('</div>');
 }
 if(used.size!==sophieV88.length||dialogueTurns!==54||narrativeCount+dialogueTurns!==147||separators!==5){
  throw new Error('Sophie V8.8 : structure différente : '+used.size+' dialogues, '+dialogueTurns+' répliques, '+(narrativeCount+dialogueTurns)+' paragraphes et '+separators+' pauses.');
 }
 return output.join('\n');
}

/** Nathalie B., manuscrit expérimental du 18 novembre 2026 : 16 groupes, 46 prises de parole. */
const nathalieNov18: readonly DialogueGroup[] = [
 {opening:'Combien de commandes en plus',speakers:['Vincent','Nathalie','Vincent','Nathalie']},
 {opening:'Elle attend quoi',speakers:['Vincent','Nathalie','Vincent','Nathalie']},
 {opening:'Qui organise les passages au contrôle',speakers:['Vincent','Nathalie']},
 {opening:'Montrez-lui tout',speakers:['Nathalie']},
 {opening:'Et quand le robot saura faire ça',speakers:['Mina','Nathalie','Mina','Nathalie','Mina']},
 {opening:'Ça dépend',speakers:['Nathalie','Le consultant','Nathalie','Le consultant','Nathalie']},
 {opening:'Nous allons essayer de les identifier',speakers:['Le consultant']},
 {opening:'Mina vous a détaillé son travail',speakers:['Vincent']},
 {opening:'Je veux que toutes les recommandations',speakers:['Nathalie']},
 {opening:'Pouvons-nous enfin rencontrer les équipes',speakers:['Le consultant','Nathalie','Le consultant','Nathalie']},
 {opening:'Qui a demandé ces changements',speakers:['Vincent','Nathalie','Vincent','Nathalie','Vincent','Nathalie']},
 {opening:'Cinq versions, et toujours aucune hypothèse',speakers:['Vincent','Nathalie']},
 {opening:'Nous avons au moins stabilisé quelque chose',speakers:['Vincent']},
 {opening:'Les grosses ne passent pas toujours au même poste',speakers:['Mina','Vincent','Mina']},
 {opening:"C'est dans votre rapport",speakers:['Vincent','Nathalie','Vincent','Nathalie']},
 {opening:'Ne tirons pas de conclusions',speakers:['Nathalie','Le consultant']}
];

/**
 * Composer le récit sans interprétation automatique des locuteurs.
 * Toute divergence entre une nouvelle version et la distribution approuvée
 * bloque le build et demande une nouvelle vérification humaine.
 */
export function renderNathalieNov18Dialogue(markdownBody:string):string {
 if(typeof markdownBody!=='string'||!markdownBody.includes('Nathalie B. avait vingt-sept ans')){
  throw new Error('Nathalie 18-11 : manuscrit inattendu, impossible de vérifier la présentation.');
 }
 const blocks=markdownBody.replace(/\r\n/g,'\n').trim().split(/\n[ \t]*\n+/).map(s=>s.trim()).filter(Boolean);
 const isTurn=(s:string)=>/^—[ \t]+/.test(s);
 const output:string[]=[],used=new Set<string>();
 let turns=0,paragraphs=0,headings=0;
 for(let i=0;i<blocks.length;){
  const line=blocks[i];
  if(/^## /.test(line)){
   output.push('<h2>'+escapeHtml(line.slice(3))+'</h2>');
   headings++;i++;continue;
  }
  if(/^#{1,6} /.test(line)||line==='---')throw new Error('Nathalie 18-11 : structure modifiée, à vérifier.');
  if(!isTurn(line)){
   output.push('<p>'+escapeHtml(line)+'</p>');
   paragraphs++;i++;continue;
  }
  const group:string[]=[];
  while(i<blocks.length&&isTurn(blocks[i])){group.push(blocks[i]);i++;}
  const opening=group[0].replace(/^—[ \t]*/,'');
  const candidates=nathalieNov18.filter(x=>opening.startsWith(x.opening));
  if(candidates.length!==1||used.has(candidates[0]?.opening))throw new Error('Nathalie 18-11 : locuteur inconnu « '+opening.slice(0,70)+' ».');
  const spec=candidates[0];
  if(group.length!==spec.speakers.length)throw new Error('Nathalie 18-11 : nombre de répliques modifié pour « '+spec.opening+' ».');
  used.add(spec.opening);
  output.push('<div class="fiction-dialogue" role="group" aria-label="Dialogue" data-dialogue-verified="nathalie-2026-11-18">');
  group.forEach((p,j)=>{
   const words=p.replace(/^—[ \t]*/,'');
   output.push('<div class="fiction-dialogue-turn"><span class="fiction-dialogue-speaker">'+escapeHtml(spec.speakers[j])+'</span><p class="fiction-dialogue-line">'+escapeHtml(words)+'</p></div>');
   turns++;
  });
  output.push('</div>');
 }
 if(used.size!==16||turns!==46||paragraphs!==45||headings!==4){
  throw new Error('Nathalie 18-11 : structure non conforme ('+used.size+' groupes, '+turns+' répliques, '+paragraphs+' paragraphes, '+headings+' intertitres).');
 }
 return output.join('\n');
}
