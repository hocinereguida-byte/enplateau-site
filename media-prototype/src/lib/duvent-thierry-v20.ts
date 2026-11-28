// V2.0 — texte intégral et attribution des répliques explicites.
const groups: Record<number,string[]> = {
  "1": [
    "Thierry Chmonfils"
  ],
  "7": [
    "Thierry Chmonfils"
  ],
  "9": [
    "Benoît Time"
  ],
  "13": [
    "Romain Duvent"
  ],
  "19": [
    "Romain Duvent",
    "Inès Flatte",
    "Romain Duvent",
    "Inès Flatte"
  ],
  "26": [
    "Nora El Chaab",
    "Thierry Chmonfils",
    "Nora El Chaab",
    "Thierry Chmonfils",
    "Nora El Chaab"
  ],
  "33": [
    "Nora El Chaab",
    "Romain Duvent",
    "Nora El Chaab"
  ],
  "37": [
    "Nora El Chaab",
    "Romain Duvent",
    "Nora El Chaab"
  ],
  "41": [
    "Romain Duvent",
    "Inès Flatte"
  ],
  "46": [
    "Sarah Legal",
    "Romain Duvent",
    "Sarah Legal",
    "Romain Duvent"
  ],
  "51": [
    "Romain Duvent",
    "Sarah Legal"
  ],
  "54": [
    "Romain Duvent",
    "Sarah Legal"
  ],
  "58": [
    "Romain Duvent",
    "Sarah Legal"
  ],
  "61": [
    "Sarah Legal"
  ],
  "65": [
    "Thierry Chmonfils",
    "Sarah Legal"
  ],
  "71": [
    "Romain Duvent",
    "Inès Flatte",
    "Romain Duvent",
    "Inès Flatte"
  ],
  "84": [
    "Romain Duvent"
  ]
};
const escapeText=(s:string)=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
export function renderDuventV20(body:string):string {
 const blocks=body.replace(/\r\n/g,'\n').trim().split(/\n[ \t]*\n+/).map(s=>s.trim()).filter(Boolean);
 const exact=blocks.join('\n\n');let h=2166136261>>>0;
 for(let i=0;i<exact.length;i++)h=Math.imul(h^exact.charCodeAt(i),16777619)>>>0;
 if(h.toString(16).padStart(8,'0')!=='fdac9531')throw new Error('Romain Duvent / Thierry V2.0 : empreinte différente de Drive');
 const result:string[]=[];let headings=0,turns=0,seen=0;
 for(let i=0;i<blocks.length;){
  const b=blocks[i];
  if(b.startsWith('## ')){result.push('<h2>'+escapeText(b.slice(3))+'</h2>');headings++;i++;continue;}
  if(!b.startsWith('— ')){result.push('<p'+(b==='Par Thierry Chmonfils'?' class="interview-byline"':'')+'>'+escapeText(b)+'</p>');i++;continue;}
  const spec=groups[i];if(!spec)throw new Error('Romain Duvent / Thierry V2.0 : groupe sans attribution');
  result.push('<div class="fiction-dialogue" data-dialogue-verified="duvent-thierry-v2-0" role="group" aria-label="Dialogue">');seen++;
  for(const voice of spec){
   const line=blocks[i++];if(!line?.startsWith('— '))throw new Error('Romain Duvent / Thierry V2.0 : réplique non concordante');
   result.push('<div class="fiction-dialogue-turn"><span class="fiction-dialogue-speaker">'+escapeText(voice)+'</span><p class="fiction-dialogue-line">'+escapeText(line)+'</p></div>');turns++;
  }
  if(blocks[i]?.startsWith('— '))throw new Error('Romain Duvent / Thierry V2.0 : groupe incomplet');
  result.push('</div>');
 }
 if(turns!==39||headings!==5||seen!==17)throw new Error('Romain Duvent / Thierry V2.0 : structure non conforme');
 return result.join('\n');
}
