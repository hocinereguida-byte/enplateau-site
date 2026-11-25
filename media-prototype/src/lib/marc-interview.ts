/**
 * Marc D. et Jean Toksic : version populaire resserrée du 25 novembre 2026.
 * 28 groupes / 274 prises de parole attribuées par lecture de la source Drive.
 * J : Jean Toksic, M : Marc D.
 * Ni alternance automatique, ni réécriture des paroles/du récit.
 */
type MarcV25Run={opening:string;voices:string};
const marcNov25:readonly MarcV25Run[]=[
  {
    "opening": "Vous avez trouvé facilement ?",
    "voices": "JMMJMJMJMJMJMJMJ"
  },
  {
    "opening": "Bon. Vous avez une usine, des machines, des ouvriers, des commerciaux qui vous trouvent des clients. Jusque-là, même moi, j'arrive à suivre. Et un jour, vous décidez de refuser des commandes. Pourquoi ?",
    "voices": "JMJMJMJMJM"
  },
  {
    "opening": "Le problème, c'est que chacun faisait ce qu'on lui demandait. Les commerciaux vendaient, les ateliers produisaient...",
    "voices": "MJMJMJMJMJMJMJMJM"
  },
  {
    "opening": "Vous aviez un commercial de l'année ?",
    "voices": "JMJMJMJMJMJMJMJ"
  },
  {
    "opening": "Bravo ! Voilà un bel exemple pour toute l'équipe ! Continuez comme ça !",
    "voices": "MJ"
  },
  {
    "opening": "Et quand vous avez découvert que sa commande vous faisait perdre du fric ?",
    "voices": "JMJMJMJMJM"
  },
  {
    "opening": "Une photo de lui ?",
    "voices": "JMJMJMJMJMJM"
  },
  {
    "opening": "Vous aviez écrit quoi au-dessus de la photo ?",
    "voices": "JM"
  },
  {
    "opening": "Et le commercial ? Il a dit quoi ?",
    "voices": "JMJM"
  },
  {
    "opening": "Vous rigolez, mais il l'a toujours, son trophée.",
    "voices": "M"
  },
  {
    "opening": "Qui a fini par vous expliquer que votre système marchait à l'envers ?",
    "voices": "JMJMJMJM"
  },
  {
    "opening": "Et vous avez fait quoi ?",
    "voices": "JMJMJMJMJMJMJMJMJM"
  },
  {
    "opening": "Combien de diapositives ?",
    "voices": "JMJMJMJMJMJMJMJMJMJMJM"
  },
  {
    "opening": "On est toujours dans la réunion sur les primes, là ?",
    "voices": "JMJMJM"
  },
  {
    "opening": "Moi, ça m'a pas fait rire.",
    "voices": "MJMJMJMJMJM"
  },
  {
    "opening": "Et ça a marché, finalement ?",
    "voices": "JMJMJMJMJMJMJMJMJMJMJMJMJM"
  },
  {
    "opening": "Mais qu'est-ce que vous vouliez que je fasse ? Que je continue à accepter des commandes qui nous faisaient perdre de l'argent pour que certains salariés puissent gagner davantage le samedi ?",
    "voices": "MJM"
  },
  {
    "opening": "Et l'ouvrier, vous lui avez répondu quoi ?",
    "voices": "JMJMJMJMJMJMJMJMJM"
  },
  {
    "opening": "Enfin... vous voyez ce que je veux dire.",
    "voices": "MJ"
  },
  {
    "opening": "Et cet ouvrier, vous l'avez revu ?",
    "voices": "JMJMJMJMJMJMJM"
  },
  {
    "opening": "Vous avez déjà dirigé une entreprise, monsieur Toksic ?",
    "voices": "MJM"
  },
  {
    "opening": "On a cherché des compensations, revu certains horaires, proposé des formations. Ça n'a pas suffi pour tous les salariés. Je le sais.",
    "voices": "MJMJM"
  },
  {
    "opening": "Et votre client historique ? Celui qui travaillait avec vous depuis quinze ans ? Comment il a pris les nouveaux prix ?",
    "voices": "JMJMJMJMJMJMJMJMJMJ"
  },
  {
    "opening": "Une dernière question.",
    "voices": "JMJMJMJMJMJMJMJMJ"
  },
  {
    "opening": "Vous avez changé les objectifs de tout le monde.",
    "voices": "JMJMJMJMJ"
  },
  {
    "opening": "Je vois pas où vous voulez en venir.",
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
function marcV25Fingerprint(text:string):string {
 let h=2166136261>>>0;
 for(let i=0;i<text.length;i++)h=Math.imul(h^text.charCodeAt(i),16777619)>>>0;
 return h.toString(16).padStart(8,'0');
}
const MARC_V25_MANUSCRIPT_FINGERPRINT="eefb7014";
/** Composition strictement visuelle, contrôlée sur l'intégralité du manuscrit.
 * Toute modification ultérieure, même d'une réplique intérieure ou d'une incise,
 * bloque le build jusqu'à relecture du texte et de sa distribution.
 */
export function renderMarcNov25Interview(markdownBody:string):string {
 if(typeof markdownBody!=='string'||!markdownBody.includes('Vous avez trouvé facilement ?')||
 !markdownBody.includes('Il reste du café ?'))throw new Error('Marc 25-11 : manuscrit inattendu');
 const blocks=markdownBody.replace(/\r\n/g,'\n').trim().split(/\n[ \t]*\n+/).map(s=>s.trim()).filter(Boolean);
 if(marcV25Fingerprint(blocks.join('\n\n'))!==MARC_V25_MANUSCRIPT_FINGERPRINT){
  throw new Error('Marc 25-11 : empreinte intégrale du manuscrit modifiée ; relire source et rôles avant publication');
 }
 const isTurn=(s:string)=>/^—[ \t]+/.test(s);
 const html:string[]=[],used=new Set<string>();
 let paragraphs=0,dividers=0,turns=0,bylines=0;
 for(let i=0;i<blocks.length;){
  const b=blocks[i];
  if(b==='***'){html.push('<hr aria-hidden="true"/>');dividers++;i++;continue;}
  if(/^#{1,6} /.test(b)||b==='*'||b==='---')throw new Error('Marc 25-11 : séparateur ou intertitre inattendu');
  if(!isTurn(b)){
   if(b==='Par Jean Toksic'){html.push('<p class="interview-byline">Par Jean Toksic</p>');bylines++;}
   else html.push('<p>'+escapeInterviewHtml(b)+'</p>');
   paragraphs++;i++;continue;
  }
  const group:string[]=[];
  while(i<blocks.length&&isTurn(blocks[i]))group.push(blocks[i++]);
  const opening=group[0].replace(/^—[ \t]*/,'');
  const candidates=marcNov25.filter(x=>x.opening===opening);
  if(candidates.length!==1||used.has(candidates[0]?.opening))throw new Error('Marc 25-11 : groupe non attribué « '+opening.slice(0,75)+' »');
  const spec=candidates[0];
  if(group.length!==spec.voices.length||!/^[JM]+$/.test(spec.voices))throw new Error('Marc 25-11 : répliques non concordantes « '+opening.slice(0,75)+' »');
  used.add(spec.opening);
  html.push('<div class="interview-dialogue" role="group" aria-label="Dialogue" data-interview-verified="marc-2026-11-25">');
  group.forEach((line,k)=>{
   const interviewer=spec.voices[k]==='J';
   const speaker=interviewer?'Jean Toksic':'Marc D.';
   const words=line.replace(/^—[ \t]*/,'');
   html.push('<div class="interview-turn '+(interviewer?'interview-question':'interview-answer')+'"><span class="interview-speaker">'+speaker+'</span><div class="interview-words">'+escapeInterviewHtml(words)+'</div></div>');
   turns++;
  });
  html.push('</div>');
 }
 if(used.size!==28||turns!==274||paragraphs!==36||dividers!==8||bylines!==1){
  throw new Error('Marc 25-11 : structure non conforme ('+used.size+' groupes, '+turns+' répliques, '+paragraphs+' paragraphes, '+dividers+' séparateurs, '+bylines+' signature)');
 }
 return html.join('\n');
}
