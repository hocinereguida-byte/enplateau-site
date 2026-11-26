// V9.1 — texte intégral et attribution des répliques explicites.
const groups: Record<number,string[]> = {
  "10": [
    "Patrick"
  ],
  "19": [
    "Céline"
  ],
  "22": [
    "Céline"
  ],
  "28": [
    "François"
  ],
  "30": [
    "François"
  ],
  "42": [
    "Sandrine"
  ],
  "44": [
    "Sandrine"
  ],
  "48": [
    "Céline"
  ],
  "53": [
    "Patrick"
  ],
  "81": [
    "Émilie"
  ],
  "87": [
    "Céline"
  ],
  "104": [
    "Émilie"
  ]
};
const escapeText=(s:string)=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
export function renderPatrickLolaV91(body:string):string {
 const blocks=body.replace(/\r\n/g,'\n').trim().split(/\n[ \t]*\n+/).map(s=>s.trim()).filter(Boolean);
 const exact=blocks.join('\n\n');let h=2166136261>>>0;
 for(let i=0;i<exact.length;i++)h=Math.imul(h^exact.charCodeAt(i),16777619)>>>0;
 if(h.toString(16).padStart(8,'0')!=='247c1aed')throw new Error('Patrick Lola V9.1 : empreinte différente de Drive');
 const result:string[]=[];let headings=0,turns=0,seen=0;
 for(let i=0;i<blocks.length;){
  const b=blocks[i];
  if(b.startsWith('## ')){result.push('<h2>'+escapeText(b.slice(3))+'</h2>');headings++;i++;continue;}
  if(!b.startsWith('— ')){result.push('<p'+(b==='Par Lola Genzed'?' class="interview-byline"':'')+'>'+escapeText(b)+'</p>');i++;continue;}
  const spec=groups[i];if(!spec)throw new Error('Patrick Lola V9.1 : groupe sans attribution');
  result.push('<div class="fiction-dialogue" data-dialogue-verified="patrick-lola-v9-1" role="group" aria-label="Dialogue">');seen++;
  for(const voice of spec){
   const line=blocks[i++];if(!line?.startsWith('— '))throw new Error('Patrick Lola V9.1 : réplique non concordante');
   result.push('<div class="fiction-dialogue-turn"><span class="fiction-dialogue-speaker">'+escapeText(voice)+'</span><p class="fiction-dialogue-line">'+escapeText(line)+'</p></div>');turns++;
  }
  if(blocks[i]?.startsWith('— '))throw new Error('Patrick Lola V9.1 : groupe incomplet');
  result.push('</div>');
 }
 if(turns!==12||headings!==4||seen!==12)throw new Error('Patrick Lola V9.1 : structure non conforme');
 return result.join('\n');
}
