// V2.0 — texte intégral et attribution des répliques explicites.
const groups: Record<number,string[]> = {
  "5": [
    "Lola Genzed",
    "Claire Pleinpot"
  ],
  "10": [
    "Jessica Bonplan"
  ],
  "15": [
    "Claire Pleinpot"
  ],
  "18": [
    "Jessica Bonplan"
  ],
  "21": [
    "Claire Pleinpot"
  ],
  "30": [
    "Claire Pleinpot",
    "Alain Liquid",
    "Claire Pleinpot",
    "Alain Liquid"
  ],
  "39": [
    "Claire Pleinpot"
  ],
  "45": [
    "Alain Liquid"
  ],
  "53": [
    "Léa Démarque"
  ],
  "65": [
    "Jessica Bonplan"
  ],
  "78": [
    "Claire Pleinpot"
  ],
  "84": [
    "Léa Démarque",
    "Claire Pleinpot"
  ]
};
const escapeText=(s:string)=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
export function renderClairePleinpotV20(body:string):string {
 const blocks=body.replace(/\r\n/g,'\n').trim().split(/\n[ \t]*\n+/).map(s=>s.trim()).filter(Boolean);
 const exact=blocks.join('\n\n');let h=2166136261>>>0;
 for(let i=0;i<exact.length;i++)h=Math.imul(h^exact.charCodeAt(i),16777619)>>>0;
 if(h.toString(16).padStart(8,'0')!=='69305f6c')throw new Error('Claire Pleinpot / Lola V2.0 : empreinte différente de Drive');
 const result:string[]=[];let headings=0,turns=0,seen=0;
 for(let i=0;i<blocks.length;){
  const b=blocks[i];
  if(b.startsWith('## ')){result.push('<h2>'+escapeText(b.slice(3))+'</h2>');headings++;i++;continue;}
  if(!b.startsWith('— ')){result.push('<p'+(b==='Par Lola Genzed'?' class="interview-byline"':'')+'>'+escapeText(b)+'</p>');i++;continue;}
  const spec=groups[i];if(!spec)throw new Error('Claire Pleinpot / Lola V2.0 : groupe sans attribution');
  result.push('<div class="fiction-dialogue" data-dialogue-verified="claire-pleinpot-v2-0" role="group" aria-label="Dialogue">');seen++;
  for(const voice of spec){
   const line=blocks[i++];if(!line?.startsWith('— '))throw new Error('Claire Pleinpot / Lola V2.0 : réplique non concordante');
   result.push('<div class="fiction-dialogue-turn"><span class="fiction-dialogue-speaker">'+escapeText(voice)+'</span><p class="fiction-dialogue-line">'+escapeText(line)+'</p></div>');turns++;
  }
  if(blocks[i]?.startsWith('— '))throw new Error('Claire Pleinpot / Lola V2.0 : groupe incomplet');
  result.push('</div>');
 }
 if(turns!==17||headings!==5||seen!==12)throw new Error('Claire Pleinpot / Lola V2.0 : structure non conforme');
 return result.join('\n');
}
