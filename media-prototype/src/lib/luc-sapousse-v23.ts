// V2.3 — texte intégral et attribution des répliques explicites.
const groups: Record<number,string[]> = {
  "1": [
    "Benoît",
    "Thierry Chmonfils",
    "Benoît"
  ],
  "9": [
    "Luc Sapousse"
  ],
  "12": [
    "David Irma"
  ],
  "22": [
    "Thierry Chmonfils"
  ],
  "24": [
    "Thierry Chmonfils"
  ],
  "26": [
    "Thierry Chmonfils",
    "Le beau-frère de Thierry",
    "Thierry Chmonfils",
    "Le beau-frère de Thierry"
  ],
  "36": [
    "Thierry Chmonfils"
  ],
  "41": [
    "Luc Sapousse",
    "Thierry Chmonfils"
  ],
  "47": [
    "Thierry Chmonfils"
  ],
  "49": [
    "Thierry Chmonfils"
  ],
  "51": [
    "Thierry Chmonfils",
    "Luc Sapousse",
    "Thierry Chmonfils",
    "Luc Sapousse"
  ],
  "57": [
    "Le consultant",
    "Luc Sapousse"
  ],
  "67": [
    "David Irma",
    "Hubert Messous",
    "David Irma",
    "Hubert Messous"
  ],
  "74": [
    "Hubert Messous",
    "Le consultant",
    "Hubert Messous",
    "Le consultant",
    "Hubert Messous",
    "Le consultant",
    "Hubert Messous"
  ],
  "84": [
    "Hubert Messous"
  ],
  "87": [
    "David Irma"
  ],
  "89": [
    "Thierry Chmonfils"
  ],
  "92": [
    "Thierry Chmonfils"
  ],
  "104": [
    "Le consultant"
  ],
  "108": [
    "David Irma",
    "Luc Sapousse"
  ],
  "111": [
    "Thierry Chmonfils"
  ],
  "124": [
    "Luc Sapousse",
    "Le consultant",
    "Luc Sapousse"
  ],
  "131": [
    "Thierry Chmonfils"
  ]
};
const escapeText=(s:string)=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
export function renderLucSapousseV23(body:string):string {
 const blocks=body.replace(/\r\n/g,'\n').trim().split(/\n[ \t]*\n+/).map(s=>s.trim()).filter(Boolean);
 const exact=blocks.join('\n\n');let h=2166136261>>>0;
 for(let i=0;i<exact.length;i++)h=Math.imul(h^exact.charCodeAt(i),16777619)>>>0;
 if(h.toString(16).padStart(8,'0')!=='aeaebcb0')throw new Error('Luc Sapousse / Thierry V2.3 : empreinte différente de Drive');
 const result:string[]=[];let headings=0,turns=0,seen=0;
 for(let i=0;i<blocks.length;){
  const b=blocks[i];
  if(b.startsWith('## ')){result.push('<h2>'+escapeText(b.slice(3))+'</h2>');headings++;i++;continue;}
  if(!b.startsWith('— ')){result.push('<p'+(b==='Par Thierry Chmonfils'?' class="interview-byline"':'')+'>'+escapeText(b)+'</p>');i++;continue;}
  const spec=groups[i];if(!spec)throw new Error('Luc Sapousse / Thierry V2.3 : groupe sans attribution');
  result.push('<div class="fiction-dialogue" data-dialogue-verified="luc-sapousse-v2-3" role="group" aria-label="Dialogue">');seen++;
  for(const voice of spec){
   const line=blocks[i++];if(!line?.startsWith('— '))throw new Error('Luc Sapousse / Thierry V2.3 : réplique non concordante');
   result.push('<div class="fiction-dialogue-turn"><span class="fiction-dialogue-speaker">'+escapeText(voice)+'</span><p class="fiction-dialogue-line">'+escapeText(line)+'</p></div>');turns++;
  }
  if(blocks[i]?.startsWith('— '))throw new Error('Luc Sapousse / Thierry V2.3 : groupe incomplet');
  result.push('</div>');
 }
 if(turns!==45||headings!==5||seen!==23)throw new Error('Luc Sapousse / Thierry V2.3 : structure non conforme');
 return result.join('\n');
}
