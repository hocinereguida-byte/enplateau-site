// V1.7 — texte intégral et attribution des répliques explicites.
const groups: Record<number,string[]> = {
  "16": [
    "Michel Negaut",
    "Bernard Daiterre",
    "Michel Negaut"
  ],
  "30": [
    "Michel Negaut"
  ],
  "59": [
    "Le plombier"
  ],
  "106": [
    "Bernard Daiterre"
  ],
  "132": [
    "Antoine Crevard"
  ]
};
const escapeText=(s:string)=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
export function renderBernardThierryV17(body:string):string {
 const blocks=body.replace(/\r\n/g,'\n').trim().split(/\n[ \t]*\n+/).map(s=>s.trim()).filter(Boolean);
 const exact=blocks.join('\n\n');let h=2166136261>>>0;
 for(let i=0;i<exact.length;i++)h=Math.imul(h^exact.charCodeAt(i),16777619)>>>0;
 if(h.toString(16).padStart(8,'0')!=='1da83a7a')throw new Error('Bernard Thierry V1.7 : empreinte différente de Drive');
 const result:string[]=[];let headings=0,turns=0,seen=0;
 for(let i=0;i<blocks.length;){
  const b=blocks[i];
  if(b.startsWith('## ')){result.push('<h2>'+escapeText(b.slice(3))+'</h2>');headings++;i++;continue;}
  if(!b.startsWith('— ')){result.push('<p'+(b==='Par Thierry Chmonfils'?' class="interview-byline"':'')+'>'+escapeText(b)+'</p>');i++;continue;}
  const spec=groups[i];if(!spec)throw new Error('Bernard Thierry V1.7 : groupe sans attribution');
  result.push('<div class="fiction-dialogue" data-dialogue-verified="bernard-thierry-v1-7" role="group" aria-label="Dialogue">');seen++;
  for(const voice of spec){
   const line=blocks[i++];if(!line?.startsWith('— '))throw new Error('Bernard Thierry V1.7 : réplique non concordante');
   result.push('<div class="fiction-dialogue-turn"><span class="fiction-dialogue-speaker">'+escapeText(voice)+'</span><p class="fiction-dialogue-line">'+escapeText(line)+'</p></div>');turns++;
  }
  if(blocks[i]?.startsWith('— '))throw new Error('Bernard Thierry V1.7 : groupe incomplet');
  result.push('</div>');
 }
 if(turns!==7||headings!==5||seen!==5)throw new Error('Bernard Thierry V1.7 : structure non conforme');
 return result.join('\n');
}
