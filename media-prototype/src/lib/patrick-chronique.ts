// Patrick V6.4 : texte exact du manuscrit et attribution explicite des onze répliques au tiret.
// Les citations et incises intégrées à la narration restent intactes.
const groups: Record<number,string[]> = {
  "32": [
    "Sandrine",
    "Émilie",
    "Sandrine",
    "Céline",
    "Sandrine"
  ],
  "39": [
    "Céline",
    "Rachid",
    "Céline"
  ],
  "75": [
    "Patrick",
    "Émilie",
    "Patrick"
  ]
};
const escapeText=(s:string)=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
export function renderPatrickV64Chronique(body:string):string {
 const blocks=body.replace(/\r\n/g,'\n').trim().split(/\n[ \t]*\n+/).map(s=>s.trim()).filter(Boolean);
 const exact=blocks.join('\n\n');let h=2166136261>>>0;
 for(let i=0;i<exact.length;i++)h=Math.imul(h^exact.charCodeAt(i),16777619)>>>0;
 if(h.toString(16).padStart(8,'0')!=='877eb727')throw new Error('Patrick V6.4 : empreinte différente de Drive');
 const result:string[]=[];let headings=0,turns=0,seen=0;
 for(let i=0;i<blocks.length;){
  const b=blocks[i];
  if(b.startsWith('## ')){result.push('<h2>'+escapeText(b.slice(3))+'</h2>');headings++;i++;continue;}
  if(!b.startsWith('— ')){result.push('<p>'+escapeText(b)+'</p>');i++;continue;}
  const spec=groups[i];if(!spec)throw new Error('Patrick V6.4 : groupe sans attribution');
  result.push('<div class="fiction-dialogue" data-dialogue-verified="patrick-v6-4" role="group" aria-label="Dialogue">');seen++;
  for(const voice of spec){
   const line=blocks[i++];if(!line?.startsWith('— '))throw new Error('Patrick V6.4 : réplique non concordante');
   result.push('<div class="fiction-dialogue-turn"><span class="fiction-dialogue-speaker">'+escapeText(voice)+'</span><p class="fiction-dialogue-line">'+escapeText(line)+'</p></div>');turns++;
  }
  if(blocks[i]?.startsWith('— '))throw new Error('Patrick V6.4 : groupe incomplet');
  result.push('</div>');
 }
 if(turns!==11||headings!==4||seen!==3)throw new Error('Patrick V6.4 : structure non conforme');
 return result.join('\n');
}
