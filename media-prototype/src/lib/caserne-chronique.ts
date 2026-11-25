// Caserne V6.2 : composition statique des dialogues, sans modification des répliques.
const groups: Record<number,string[]> = {
  "3": [
    "Véronique",
    "La rédaction",
    "Véronique"
  ],
  "10": [
    "Gérard",
    "Jacqueline"
  ],
  "13": [
    "Monique",
    "Gérard"
  ],
  "16": [
    "Monique",
    "Jacqueline"
  ],
  "21": [
    "Gérard",
    "Le stagiaire",
    "Gérard",
    "Véronique",
    "Gérard"
  ],
  "28": [
    "Jacqueline",
    "Gérard"
  ],
  "32": [
    "La rédaction",
    "Véronique",
    "La rédaction",
    "Véronique",
    "La rédaction",
    "Véronique"
  ],
  "42": [
    "Le photographe"
  ],
  "46": [
    "Jacqueline"
  ],
  "52": [
    "Véronique",
    "Gérard",
    "Véronique",
    "Gérard"
  ],
  "58": [
    "Les comédiens",
    "Gérard",
    "Les comédiens"
  ],
  "63": [
    "Monique"
  ],
  "71": [
    "La rédaction",
    "Jacqueline"
  ],
  "75": [
    "Véronique",
    "La rédaction",
    "Véronique"
  ],
  "87": [
    "La rédaction",
    "Samira",
    "La rédaction"
  ],
  "92": [
    "La rédaction",
    "Samira",
    "Véronique",
    "Samira"
  ],
  "97": [
    "Véronique",
    "Samira",
    "Véronique"
  ],
  "104": [
    "La rédaction",
    "Les comédiens"
  ],
  "109": [
    "Véronique",
    "Samira"
  ],
  "112": [
    "Gérard",
    "Son interlocuteur"
  ],
  "120": [
    "La rédaction",
    "Samira",
    "La rédaction",
    "Samira",
    "La rédaction"
  ],
  "128": [
    "Michel",
    "Samira",
    "Michel",
    "Samira"
  ],
  "135": [
    "Michel",
    "Gérard",
    "Michel",
    "Une femme",
    "Michel"
  ]
};
const escapeText=(s:string)=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
export function renderCaserneV62Chronique(body:string):string {
 const blocks=body.replace(/\r\n/g,'\n').trim().split(/\n[ \t]*\n+/).map(s=>s.trim()).filter(Boolean);
 const exact=blocks.join('\n\n');let h=2166136261>>>0;
 for(let i=0;i<exact.length;i++)h=Math.imul(h^exact.charCodeAt(i),16777619)>>>0;
 if(h.toString(16).padStart(8,'0')!=='399ed27d')throw new Error('Caserne V6.2 : empreinte différente de Drive');
 const result:string[]=[];let headings=0,turns=0,seen=0;
 for(let i=0;i<blocks.length;){
  const b=blocks[i];
  if(b.startsWith('## ')){result.push('<h2>'+escapeText(b.slice(3))+'</h2>');headings++;i++;continue;}
  if(!b.startsWith('— ')){result.push('<p>'+escapeText(b)+'</p>');i++;continue;}
  const spec=groups[i];if(!spec)throw new Error('Caserne V6.2 : groupe sans attribution');
  result.push('<div class="fiction-dialogue" data-dialogue-verified="caserne-v6-2" role="group" aria-label="Dialogue">');seen++;
  for(const voice of spec){
   const line=blocks[i++];if(!line?.startsWith('— '))throw new Error('Caserne V6.2 : réplique non concordante');
   result.push('<div class="fiction-dialogue-turn"><span class="fiction-dialogue-speaker">'+escapeText(voice)+'</span><p class="fiction-dialogue-line">'+escapeText(line)+'</p></div>');turns++;
  }
  if(blocks[i]?.startsWith('— '))throw new Error('Caserne V6.2 : groupe incomplet');
  result.push('</div>');
 }
 if(turns!==67||headings!==5||seen!==23)throw new Error('Caserne V6.2 : structure non conforme');
 return result.join('\n');
}
