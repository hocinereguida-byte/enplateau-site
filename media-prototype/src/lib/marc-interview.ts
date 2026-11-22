/**
 * Entretien de Marc D. par Jean Toksic — manuscrit du 22 novembre 2026.
 * Distribution revue réplique par réplique (39 échanges / 246 répliques).
 * J = Jean Toksic, M = Marc D. ; un même personnage peut parler deux fois
 * de suite. Ne jamais inférer le locuteur par alternance automatique.
 */
type MarcInterviewRun={opening:string;voices:string};
const marcNov22:readonly MarcInterviewRun[]=[
  {
    "opening": "Vous avez trouvé facilement ?",
    "voices": "JMMJMJMMJ"
  },
  {
    "opening": "Bon. Vos commerciaux trouvent des clients, les clients commandent, l'usine fabrique. Et vous, vous décidez d'arrêter de vendre. Vous avez pris un coup sur la tête ?",
    "voices": "JMJMJMJMJMJMJ"
  },
  {
    "opening": "Le pire, c'est que chacun faisait ce qu'on lui demandait. Les commerciaux vendaient, les ateliers produisaient...",
    "voices": "MJMJMJMJMJM"
  },
  {
    "opening": "Vous aviez un commercial de l'année ?",
    "voices": "JMJMJMJMJMJMJ"
  },
  {
    "opening": "Bravo ! Voilà un bel exemple pour toute l'équipe ! Continuez comme ça !",
    "voices": "MJM"
  },
  {
    "opening": "Et quand vous avez découvert que sa commande était déficitaire ?",
    "voices": "JMJMJMJMJ"
  },
  {
    "opening": "J'avais projeté une photo de la remise du trophée.",
    "voices": "M"
  },
  {
    "opening": "Sa photo ?",
    "voices": "JMJMJMJM"
  },
  {
    "opening": "Vous l'avez anonymisé comment ?",
    "voices": "JMJMJM"
  },
  {
    "opening": "C'était une réunion sérieuse.",
    "voices": "MJM"
  },
  {
    "opening": "Et vous avez répondu ?",
    "voices": "JM"
  },
  {
    "opening": "Qui vous a finalement expliqué que votre système marchait à l'envers ?",
    "voices": "JMJMJMJMJM"
  },
  {
    "opening": "Vous avez fini par faire quoi ?",
    "voices": "JMJMJMJMJMJ"
  },
  {
    "opening": "Vous allez me le ressortir toute la journée ?",
    "voices": "MJ"
  },
  {
    "opening": "J'ai fait une présentation.",
    "voices": "MJMJMJMJMJMJMJMJMJMJM"
  },
  {
    "opening": "Et après ?",
    "voices": "JMJMJMJM"
  },
  {
    "opening": "Vous avez dit ça pendant une réunion sur les primes ?",
    "voices": "JMJ"
  },
  {
    "opening": "Il m'a demandé : « Et ma banque, elle accepte la création de valeur ? »",
    "voices": "M"
  },
  {
    "opening": "Moi, ça m'a pas fait rire.",
    "voices": "MJMJM"
  },
  {
    "opening": "Il vous restait quatre diapositives ?",
    "voices": "JMJMJM"
  },
  {
    "opening": "Et ça a marché, finalement ?",
    "voices": "JMJMJMJMJM"
  },
  {
    "opening": "Une affiche ?",
    "voices": "JMJMJMJMJM"
  },
  {
    "opening": "Ah.",
    "voices": "JMJMJM"
  },
  {
    "opening": "Vous lui avez vraiment sorti ça ?",
    "voices": "JMJM"
  },
  {
    "opening": "Alors ?",
    "voices": "JMJM"
  },
  {
    "opening": "Votre direction générale était contente des résultats ?",
    "voices": "JMJMJMJM"
  },
  {
    "opening": "Enfin... vous voyez ce que je veux dire.",
    "voices": "MJ"
  },
  {
    "opening": "Et l'ouvrier, il est revenu vous voir ?",
    "voices": "JMJMJM"
  },
  {
    "opening": "Ah bon ?",
    "voices": "JMJMJM"
  },
  {
    "opening": "Vous avez déjà dirigé une entreprise, monsieur Toksic ?",
    "voices": "MJMJMJ"
  },
  {
    "opening": "Quel rapport ?",
    "voices": "MJ"
  },
  {
    "opening": "Votre client historique, celui qui travaillait avec vous depuis quinze ans. Comment il a pris vos nouveaux prix ?",
    "voices": "JMJMJMJMJM"
  },
  {
    "opening": "Quand vous parlez des chiffres, Marc, je vous comprends.",
    "voices": "J"
  },
  {
    "opening": "Vous voyez. Il suffit d'écouter.",
    "voices": "M"
  },
  {
    "opening": "Une dernière question.",
    "voices": "JMJMJMJMJMJMJMJM"
  },
  {
    "opening": "Et les vôtres ?",
    "voices": "JMJMJ"
  },
  {
    "opening": "C'est pas comparable avec les primes des commerciaux.",
    "voices": "MJ"
  },
  {
    "opening": "Qui a changé la manière dont on vous évaluait, vous ?",
    "voices": "J"
  },
  {
    "opening": "Il reste du café ?",
    "voices": "M"
  }
];
const escapeInterviewHtml=(s:string)=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
/**
 * Composition statique : le texte et les incises sont conservés mot pour mot.
 * Seuls les tirets de dialogue sont convertis en labels d'interlocuteur et
 * les astérisques de section en séparateurs de lecture.
 */
export function renderMarcNov22Interview(markdownBody:string):string {
 if(typeof markdownBody!=='string'||!markdownBody.includes('Vous avez trouvé facilement ?')||
 !markdownBody.includes('Il reste du café ?'))throw new Error('Marc 22-11 : manuscrit inattendu');
 const blocks=markdownBody.replace(/\r\n/g,'\n').trim().split(/\n[ \t]*\n+/).map(s=>s.trim()).filter(Boolean);
 const isTurn=(s:string)=>/^—[ \t]+/.test(s);
 const html:string[]=[],used=new Set<string>();
 let paragraphs=0,dividers=0,turns=0;
 for(let i=0;i<blocks.length;){
  const b=blocks[i];
  if(b==='***'){html.push('<hr aria-hidden="true"/>');dividers++;i++;continue;}
  if(/^#{1,6} /.test(b)||b==='*'||b==='---')throw new Error('Marc 22-11 : séparation ou intertitre imprévu');
  if(!isTurn(b)){html.push('<p>'+escapeInterviewHtml(b)+'</p>');paragraphs++;i++;continue;}
  const group:string[]=[];
  while(i<blocks.length&&isTurn(blocks[i]))group.push(blocks[i++]);
  const opening=group[0].replace(/^—[ \t]*/,'');
  const candidates=marcNov22.filter(x=>x.opening===opening);
  if(candidates.length!==1||used.has(candidates[0]?.opening))throw new Error('Marc 22-11 : groupe de répliques non attribué : '+opening.slice(0,65));
  const spec=candidates[0];
  if(group.length!==spec.voices.length||!/^[JM]+$/.test(spec.voices))throw new Error('Marc 22-11 : distribution différente pour '+opening.slice(0,65));
  used.add(spec.opening);
  html.push('<div class="interview-dialogue" role="group" aria-label="Dialogue" data-interview-verified="marc-2026-11-22">');
  group.forEach((line,k)=>{
   const interviewer=spec.voices[k]==='J';
   const speaker=interviewer?'Jean Toksic':'Marc D.';
   const words=line.replace(/^—[ \t]*/,'');
   html.push('<div class="interview-turn '+(interviewer?'interview-question':'interview-answer')+'"><span class="interview-speaker">'+speaker+'</span><div class="interview-words">'+escapeInterviewHtml(words)+'</div></div>');
   turns++;
  });
  html.push('</div>');
 }
 if(used.size!==39||turns!==246||paragraphs!==43||dividers!==6){
  throw new Error('Marc 22-11 : intégrité non conforme ('+used.size+' échanges, '+turns+' répliques, '+paragraphs+' paragraphes, '+dividers+' séparateurs)');
 }
 return html.join('\n');
}
