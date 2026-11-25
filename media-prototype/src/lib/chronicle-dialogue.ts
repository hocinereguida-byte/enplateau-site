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

/**
 * Claire M. / Kevin R., V7.5 validée éditorialement le 20 novembre 2026.
 * Attribution relue sur le manuscrit intégral : 27 échanges, 74 répliques.
 * Quand la source ne permet pas de savoir laquelle des deux recrues parle,
 * l'étiquette reste volontairement « Une recrue » (aucune attribution inventée).
 */
const claireKevinV75: readonly DialogueGroup[] = [
  {
    "opening": "Celle-là est bonne. L'autre a un défaut. Vous voyez la différence ?",
    "speakers": [
      "Kevin"
    ]
  },
  {
    "opening": "Je reviens dans cinq minutes.",
    "speakers": [
      "Kevin"
    ]
  },
  {
    "opening": "C'est exactement pour ça que je vous ai réunis, lui expliqua Claire.",
    "speakers": [
      "Claire"
    ]
  },
  {
    "opening": "Il faut absolument qu'on vous laisse tranquilles pendant les formations.",
    "speakers": [
      "Claire",
      "Kevin",
      "Claire",
      "Kevin"
    ]
  },
  {
    "opening": "Elles peuvent attendre encore un peu ? Ce que vous nous racontez est vraiment important.",
    "speakers": [
      "Claire"
    ]
  },
  {
    "opening": "Bien sûr ! Merci, Kevin. Franchement, on a bien avancé grâce à vous.",
    "speakers": [
      "Claire"
    ]
  },
  {
    "opening": "Alors, qu'est-ce que vous savez faire maintenant ? demanda le directeur.",
    "speakers": [
      "Le directeur",
      "La première recrue"
    ]
  },
  {
    "opening": "Très bien ! Et comment vous le voyez ?",
    "speakers": [
      "Le directeur",
      "La première recrue"
    ]
  },
  {
    "opening": "Elles exagèrent.",
    "speakers": [
      "Kevin",
      "La seconde recrue"
    ]
  },
  {
    "opening": "Et si une pièce sort avec un défaut ?",
    "speakers": [
      "Le directeur",
      "Une recrue",
      "Le directeur",
      "Une recrue",
      "Le directeur",
      "Une recrue"
    ]
  },
  {
    "opening": "Ça, c'est bien. Surtout, elles ne touchent pas aux réglages si elles ne savent pas faire.",
    "speakers": [
      "Kevin"
    ]
  },
  {
    "opening": "Vous arrivez à reconnaître les défauts toutes seules ?",
    "speakers": [
      "Le directeur"
    ]
  },
  {
    "opening": "Il devait nous montrer, dit la première.",
    "speakers": [
      "La première recrue",
      "La seconde recrue"
    ]
  },
  {
    "opening": "Vous leur avez montré des dépannages ?",
    "speakers": [
      "Le directeur",
      "Kevin",
      "Le directeur",
      "Kevin"
    ]
  },
  {
    "opening": "Et quand les autres recrues vont arriver, on fait comment ?",
    "speakers": [
      "Le directeur"
    ]
  },
  {
    "opening": "Juste deux heures.",
    "speakers": [
      "Le chef d’atelier"
    ]
  },
  {
    "opening": "Je vous le rends après, promit le chef.",
    "speakers": [
      "Le chef d’atelier"
    ]
  },
  {
    "opening": "Bon. Si Kevin reste avec les deux nouvelles, qui termine la commande de ce soir ?",
    "speakers": [
      "Le directeur",
      "Le responsable de production",
      "Le directeur",
      "Le responsable de production",
      "Le directeur"
    ]
  },
  {
    "opening": "Ça va coincer pour les prochaines livraisons.",
    "speakers": [
      "Le chef d’atelier"
    ]
  },
  {
    "opening": "Sinon, j'y vais. Franchement, en deux heures, c'est réglé.",
    "speakers": [
      "Kevin",
      "Claire",
      "Kevin",
      "Claire"
    ]
  },
  {
    "opening": "On peut faire fabriquer certaines pièces ailleurs ?",
    "speakers": [
      "Le directeur",
      "Le responsable de production",
      "Le directeur",
      "Le responsable de production",
      "Le directeur",
      "Le responsable de production",
      "Le directeur",
      "Le responsable de production"
    ]
  },
  {
    "opening": "Vous êtes sûre que c'est bon ?",
    "speakers": [
      "Le directeur",
      "Claire",
      "Le directeur"
    ]
  },
  {
    "opening": "Je vais faire un tour.",
    "speakers": [
      "Kevin",
      "Une recrue",
      "Kevin",
      "Une recrue",
      "Kevin"
    ]
  },
  {
    "opening": "Ça va ?",
    "speakers": [
      "Kevin",
      "Un collègue",
      "Kevin",
      "Un collègue",
      "Kevin",
      "Un collègue"
    ]
  },
  {
    "opening": "Tu sais que tu peux m'appeler si t'as un doute ?",
    "speakers": [
      "Kevin",
      "Un collègue",
      "Kevin",
      "Un collègue"
    ]
  },
  {
    "opening": "Oui ?",
    "speakers": [
      "Kevin"
    ]
  },
  {
    "opening": "Kevin ? Vous êtes où ?",
    "speakers": [
      "Une recrue",
      "Kevin",
      "Une recrue",
      "Kevin",
      "Une recrue"
    ]
  }
];

/**
 * Composer statiquement les prises de parole selon le même contrat visuel que
 * Sophie et Nathalie. Le texte littéraire (y compris les incises) reste intact,
 * seul le tiret de réplique devient une indication de mise en page.
 * Toute modification de la distribution ou du nombre de dialogues bloque le build.
 */
export function renderClaireKevinV75Dialogue(markdownBody: string):string {
 if(typeof markdownBody!=='string'||!markdownBody.includes("Kevin R. avait huit heures dans sa journée."))throw new Error('Claire/Kevin V7.5 : source inattendue');
 const blocks=markdownBody.replace(/\r\n/g,'\n').trim().split(/\n[ \t]*\n+/).map(s=>s.trim()).filter(Boolean);
 const isTurn=(s:string)=>/^—[ \t]+/.test(s);
 const output:string[]=[],used=new Set<string>();
 let turns=0,paragraphs=0,headings=0;
 for(let i=0;i<blocks.length;){
  const b=blocks[i];
  if(/^## /.test(b)){output.push('<h2>'+escapeHtml(b.slice(3))+'</h2>');headings++;i++;continue;}
  if(/^#{1,6} /.test(b)||b==='---')throw new Error('Claire/Kevin V7.5 : structure non reconnue');
  if(!isTurn(b)){output.push('<p>'+escapeHtml(b)+'</p>');paragraphs++;i++;continue;}
  const group:string[]=[];
  while(i<blocks.length&&isTurn(blocks[i]))group.push(blocks[i++]);
  const opening=group[0].replace(/^—[ \t]*/,'');
  const candidates=claireKevinV75.filter(x=>opening===x.opening);
  if(candidates.length!==1||used.has(candidates[0]?.opening))throw new Error('Claire/Kevin V7.5 : dialogue non attribué « '+opening.slice(0,80)+' ».');
  const spec=candidates[0];
  if(group.length!==spec.speakers.length)throw new Error('Claire/Kevin V7.5 : nombre de répliques modifié pour « '+spec.opening+' »');
  used.add(spec.opening);
  output.push('<div class="fiction-dialogue" role="group" aria-label="Dialogue" data-dialogue-verified="claire-kevin-v7-5">');
  group.forEach((line,j)=>{
   const words=line.replace(/^—[ \t]*/,'');
   output.push('<div class="fiction-dialogue-turn"><span class="fiction-dialogue-speaker">'+escapeHtml(spec.speakers[j])+'</span><p class="fiction-dialogue-line">'+escapeHtml(words)+'</p></div>');
   turns++;
  });
  output.push('</div>');
 }
 if(used.size!==27||turns!==74||paragraphs!==141||headings!==4){
  throw new Error('Claire/Kevin V7.5 : récit modifié ('+used.size+' groupes, '+turns+' répliques, '+paragraphs+' paragraphes, '+headings+' intertitres).');
 }
 return output.join('\n');
}

/**
 * Sophie M., V9.1a validée le 25 novembre 2026.
 * Attribution manuelle de 136 répliques en 46 groupes. Aucun automatisme
 * d'alternance : chacun conserve son personnage même après une incise.
 * Empreinte calculée sur les 277 paragraphes/séparateurs exacts du manuscrit.
 */
const sophieV91a: readonly DialogueGroup[] = [
  {
    "opening": "Malik, vous pouvez réparer la machine sans l'arrêter ?",
    "speakers": [
      "Philippe",
      "Malik",
      "Philippe",
      "Malik"
    ]
  },
  {
    "opening": "Il vous faut combien de temps, exactement ?",
    "speakers": [
      "Philippe",
      "Malik",
      "Philippe",
      "Malik"
    ]
  },
  {
    "opening": "Six interventions de six heures, ça ferait trente-six heures.",
    "speakers": [
      "Philippe",
      "Malik",
      "Philippe",
      "Malik"
    ]
  },
  {
    "opening": "Et trois fois douze heures ?",
    "speakers": [
      "Philippe"
    ]
  },
  {
    "opening": "Il va tous nous les faire ?",
    "speakers": [
      "Malik"
    ]
  },
  {
    "opening": "Si on démarre la réparation jeudi après le départ du camion ?",
    "speakers": [
      "Sophie",
      "Malik",
      "Sophie"
    ]
  },
  {
    "opening": "Prévenez-moi quand vous aurez choisi votre jeudi.",
    "speakers": [
      "Malik"
    ]
  },
  {
    "opening": "Pourquoi vous en faites moins ?",
    "speakers": [
      "Sophie",
      "Un ouvrier",
      "Sophie",
      "Un ouvrier",
      "Sophie"
    ]
  },
  {
    "opening": "Vous en êtes à combien ?",
    "speakers": [
      "Sophie"
    ]
  },
  {
    "opening": "Celles-là, elles sont bonnes ?",
    "speakers": [
      "Sophie",
      "Un ouvrier",
      "Sophie",
      "Un ouvrier",
      "Sophie"
    ]
  },
  {
    "opening": "Vous avez gagné du temps ?",
    "speakers": [
      "Philippe",
      "Sophie",
      "Philippe",
      "Sophie",
      "Philippe"
    ]
  },
  {
    "opening": "Attendez, on voit toutes les pièces ratées.",
    "speakers": [
      "Philippe",
      "Sophie",
      "Philippe"
    ]
  },
  {
    "opening": "Vous voulez que je vous installe une deuxième benne ? On pourrait doubler les résultats.",
    "speakers": [
      "Malik",
      "Sophie"
    ]
  },
  {
    "opening": "T'en as combien de bonnes ?",
    "speakers": [
      "Sophie",
      "Un ouvrier",
      "Sophie",
      "Un ouvrier",
      "Sophie"
    ]
  },
  {
    "opening": "Tu veux que je réponde ?",
    "speakers": [
      "Un ouvrier",
      "Sophie"
    ]
  },
  {
    "opening": "Il ne faudrait pas que les problèmes de qualité nous empêchent de voir les résultats de production, explique Philippe.",
    "speakers": [
      "Philippe",
      "Sophie",
      "Philippe",
      "Sophie"
    ]
  },
  {
    "opening": "Il faut d'abord qu'on mesure les conséquences de l'arrêt, répond Philippe.",
    "speakers": [
      "Philippe",
      "Malik",
      "Philippe"
    ]
  },
  {
    "opening": "Attendez jeudi. Après, je vous la laisse.",
    "speakers": [
      "Sophie"
    ]
  },
  {
    "opening": "Tu me la laisses dans quel état ?",
    "speakers": [
      "Malik"
    ]
  },
  {
    "opening": "C'est pas possible. Refaites les contrôles.",
    "speakers": [
      "Sophie"
    ]
  },
  {
    "opening": "Vous avez utilisé le même appareil ?",
    "speakers": [
      "Sophie",
      "Un ouvrier",
      "Sophie",
      "Un ouvrier"
    ]
  },
  {
    "opening": "Vous pensez pouvoir en sortir combien d'ici jeudi ?",
    "speakers": [
      "Sophie"
    ]
  },
  {
    "opening": "Même en tournant sans arrêt ?",
    "speakers": [
      "Sophie",
      "Un ouvrier",
      "Sophie",
      "Un ouvrier"
    ]
  },
  {
    "opening": "Tu veux qu'on continue ?",
    "speakers": [
      "Un ouvrier"
    ]
  },
  {
    "opening": "Attends.",
    "speakers": [
      "Sophie"
    ]
  },
  {
    "opening": "Tu peux toujours la réparer en trente-six heures ?",
    "speakers": [
      "Sophie",
      "Malik",
      "Sophie"
    ]
  },
  {
    "opening": "Maintenant ?",
    "speakers": [
      "Malik",
      "Sophie",
      "Malik",
      "Sophie",
      "Malik",
      "Sophie",
      "Malik",
      "Sophie",
      "Malik"
    ]
  },
  {
    "opening": "Ça fait trois semaines que tu me casses les couilles pour réparer cette machine.",
    "speakers": [
      "Sophie",
      "Malik"
    ]
  },
  {
    "opening": "C'est bon ? demande Sophie.",
    "speakers": [
      "Sophie",
      "Malik",
      "Sophie",
      "Malik"
    ]
  },
  {
    "opening": "Qui a décidé ça ?",
    "speakers": [
      "Philippe",
      "Sophie",
      "Philippe",
      "Sophie"
    ]
  },
  {
    "opening": "J'avais coupé la sonnerie.",
    "speakers": [
      "Philippe",
      "Sophie",
      "Philippe"
    ]
  },
  {
    "opening": "Philippe, ça va me prendre un temps fou de ressortir tout ça.",
    "speakers": [
      "La comptable",
      "Philippe",
      "La comptable",
      "Philippe"
    ]
  },
  {
    "opening": "Vous avez récupéré combien ? demande Sophie.",
    "speakers": [
      "Sophie",
      "Philippe",
      "Sophie"
    ]
  },
  {
    "opening": "Vous savez ce que représente ce client pour nous ?",
    "speakers": [
      "Philippe",
      "Sophie",
      "Philippe",
      "Sophie",
      "Philippe"
    ]
  },
  {
    "opening": "On ne pourra pas livrer jeudi ?",
    "speakers": [
      "Philippe",
      "Sophie",
      "Philippe",
      "Sophie"
    ]
  },
  {
    "opening": "Putain...",
    "speakers": [
      "Philippe"
    ]
  },
  {
    "opening": "Sur le fond, je comprends votre décision.",
    "speakers": [
      "Philippe",
      "Sophie",
      "Philippe"
    ]
  },
  {
    "opening": "Lui aussi. Il est en train de le régler.",
    "speakers": [
      "Sophie"
    ]
  },
  {
    "opening": "Nous avons décidé de prendre des mesures exceptionnelles pour sécuriser la qualité de votre commande.",
    "speakers": [
      "Le commercial",
      "Le client",
      "Le commercial",
      "Le client",
      "Le commercial",
      "Le client"
    ]
  },
  {
    "opening": "Ce que je peux vous assurer, c'est que nos équipes sont pleinement mobilisées.",
    "speakers": [
      "Le commercial",
      "Le client"
    ]
  },
  {
    "opening": "Je pourrai avoir le reste de ma commande quand ?",
    "speakers": [
      "Le client",
      "Le commercial",
      "Le client",
      "Le commercial",
      "Le client"
    ]
  },
  {
    "opening": "C'est bon ?",
    "speakers": [
      "Sophie",
      "Malik",
      "Sophie"
    ]
  },
  {
    "opening": "Attends, je vais refaire les contrôles.",
    "speakers": [
      "Malik",
      "Sophie"
    ]
  },
  {
    "opening": "Je crois qu'on a tous démontré notre capacité à prendre des décisions difficiles.",
    "speakers": [
      "Philippe"
    ]
  },
  {
    "opening": "Moi, ça fait trois semaines que je demandais qu'on l'arrête.",
    "speakers": [
      "Malik",
      "Philippe"
    ]
  },
  {
    "opening": "Qu'est-ce qu'il y a ? lui demande Philippe.",
    "speakers": [
      "Philippe",
      "Sophie"
    ]
  }
];
function sophieV91aFingerprint(s:string):string {
 let h=2166136261>>>0;
 for(let i=0;i<s.length;i++)h=Math.imul(h^s.charCodeAt(i),16777619)>>>0;
 return h.toString(16).padStart(8,'0');
}
const SOPHIE_V91A_FINGERPRINT="97f70b30";
export function renderSophieV91aDialogue(markdownBody:string):string {
 if(typeof markdownBody!=='string'||!markdownBody.includes('Lundi matin, Philippe D.')||!markdownBody.includes("Puis tend le document à Sophie pour qu'elle signe."))throw new Error('Sophie V9.1a : manuscrit inattendu');
 const blocks=markdownBody.replace(/\r\n/g,'\n').trim().split(/\n[ \t]*\n+/).map(x=>x.trim()).filter(Boolean);
 if(sophieV91aFingerprint(blocks.join('\n\n'))!==SOPHIE_V91A_FINGERPRINT)throw new Error('Sophie V9.1a : intégrité du manuscrit non concordante avec Drive — contrôle manuel requis');
 const isTurn=(x:string)=>/^—[ \t]+/.test(x);
 const result:string[]=[],used=new Set<string>();
 let turns=0,narrative=0,dividers=0;
 for(let i=0;i<blocks.length;){
  const line=blocks[i];
  if(line==='***'){result.push('<hr aria-hidden="true"/>');dividers++;i++;continue;}
  if(/^#{1,6} /.test(line)||line==='---')throw new Error('Sophie V9.1a : séparateur inattendu');
  if(!isTurn(line)){result.push('<p>'+escapeHtml(line)+'</p>');narrative++;i++;continue;}
  const group:string[]=[];
  while(i<blocks.length&&isTurn(blocks[i]))group.push(blocks[i++]);
  const first=group[0].replace(/^—[ \t]*/,'');
  const candidates=sophieV91a.filter(x=>x.opening===first);
  if(candidates.length!==1||used.has(candidates[0]?.opening))throw new Error('Sophie V9.1a : groupe non attribué « '+first.slice(0,72)+' »');
  const spec=candidates[0];
  if(group.length!==spec.speakers.length)throw new Error('Sophie V9.1a : taille de groupe modifiée « '+first.slice(0,72)+' »');
  used.add(spec.opening);
  result.push('<div class="fiction-dialogue" role="group" aria-label="Dialogue" data-dialogue-verified="sophie-v9-1a">');
  group.forEach((p,j)=>{
   const words=p.replace(/^—[ \t]*/,'');
   result.push('<div class="fiction-dialogue-turn"><span class="fiction-dialogue-speaker">'+escapeHtml(spec.speakers[j])+'</span><p class="fiction-dialogue-line">'+escapeHtml(words)+'</p></div>');
   turns++;
  });
  result.push('</div>');
 }
 if(used.size!==46||turns!==136||narrative!==133||dividers!==8)throw new Error('Sophie V9.1a : structure modifiée ('+used.size+' groupes, '+turns+' répliques, '+narrative+' narratifs, '+dividers+' séparateurs)');
 return result.join('\n');
}
