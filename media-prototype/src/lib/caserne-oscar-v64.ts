// Caserne V6.4 — texte intégral et attribution des répliques explicites.
const groups: Record<number,string[]> = {
  "5": [
    "Oscar Sansfroid",
    "Véronique Delasalle"
  ],
  "11": [
    "Gérard Fêtier",
    "Jacqueline Roussel"
  ],
  "14": [
    "Gérard Fêtier"
  ],
  "16": [
    "Monique Fêtier",
    "Jacqueline Roussel"
  ],
  "21": [
    "Gérard Fêtier",
    "Le stagiaire",
    "Gérard Fêtier",
    "Véronique Delasalle"
  ],
  "28": [
    "Jacqueline Roussel",
    "Gérard Fêtier"
  ],
  "33": [
    "Véronique Delasalle",
    "Oscar Sansfroid",
    "Véronique Delasalle",
    "Oscar Sansfroid"
  ],
  "38": [
    "Véronique Delasalle"
  ],
  "46": [
    "Jacqueline Roussel"
  ],
  "53": [
    "Gérard Fêtier",
    "Véronique Delasalle",
    "Gérard Fêtier"
  ],
  "58": [
    "Les comédiens",
    "Gérard Fêtier",
    "Les comédiens"
  ],
  "63": [
    "Monique Fêtier"
  ],
  "72": [
    "Jacqueline Roussel"
  ],
  "75": [
    "Véronique Delasalle",
    "Oscar Sansfroid",
    "Véronique Delasalle"
  ],
  "87": [
    "Oscar Sansfroid",
    "Samira Bilan",
    "Oscar Sansfroid"
  ],
  "92": [
    "Oscar Sansfroid",
    "Samira Bilan"
  ],
  "95": [
    "Véronique Delasalle",
    "Samira Bilan"
  ],
  "98": [
    "Véronique Delasalle",
    "Samira Bilan",
    "Véronique Delasalle"
  ],
  "105": [
    "Oscar Sansfroid",
    "Les comédiens"
  ],
  "110": [
    "Véronique Delasalle",
    "Samira Bilan"
  ],
  "113": [
    "Gérard Fêtier",
    "Son interlocuteur"
  ],
  "121": [
    "Oscar Sansfroid",
    "Samira Bilan",
    "Oscar Sansfroid",
    "Samira Bilan",
    "Oscar Sansfroid"
  ],
  "129": [
    "Michel Duroy",
    "Samira Bilan",
    "Michel Duroy",
    "Samira Bilan"
  ],
  "136": [
    "Michel Duroy",
    "Gérard Fêtier",
    "Michel Duroy",
    "Une femme",
    "Michel Duroy"
  ]
};
const escapeText=(s:string)=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
export function renderCaserneOscarV64(body:string):string {
 const blocks=body.replace(/\r\n/g,'\n').trim().split(/\n[ \t]*\n+/).map(s=>s.trim()).filter(Boolean);
 const exact=blocks.join('\n\n');let h=2166136261>>>0;
 for(let i=0;i<exact.length;i++)h=Math.imul(h^exact.charCodeAt(i),16777619)>>>0;
 if(h.toString(16).padStart(8,'0')!=='c84ddc97')throw new Error('Caserne Oscar V6.4 : empreinte différente de Drive');
 const result:string[]=[];let headings=0,turns=0,seen=0;
 for(let i=0;i<blocks.length;){
  const b=blocks[i];
  if(b.startsWith('## ')){result.push('<h2>'+escapeText(b.slice(3))+'</h2>');headings++;i++;continue;}
  if(!b.startsWith('— ')){result.push('<p'+(b==='Par Oscar Sansfroid'?' class="interview-byline"':'')+'>'+escapeText(b)+'</p>');i++;continue;}
  const spec=groups[i];if(!spec)throw new Error('Caserne Oscar V6.4 : groupe sans attribution');
  result.push('<div class="fiction-dialogue" data-dialogue-verified="caserne-oscar-v6-4" role="group" aria-label="Dialogue">');seen++;
  for(const voice of spec){
   const line=blocks[i++];if(!line?.startsWith('— '))throw new Error('Caserne Oscar V6.4 : réplique non concordante');
   result.push('<div class="fiction-dialogue-turn"><span class="fiction-dialogue-speaker">'+escapeText(voice)+'</span><p class="fiction-dialogue-line">'+escapeText(line)+'</p></div>');turns++;
  }
  if(blocks[i]?.startsWith('— '))throw new Error('Caserne Oscar V6.4 : groupe incomplet');
  result.push('</div>');
 }
 if(turns!==60||headings!==5||seen!==24)throw new Error('Caserne Oscar V6.4 : structure non conforme');
 return result.join('\n');
}
