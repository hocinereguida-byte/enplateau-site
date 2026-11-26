// V4.2 — intégrité du manuscrit et attribution des répliques explicites.
const groups: Record<number,string[]> = {
  "6": [
    "Nathalie"
  ],
  "17": [
    "Vincent Tracker",
    "Nathalie",
    "Vincent Tracker"
  ],
  "25": [
    "Vincent Tracker",
    "Nathalie",
    "Vincent Tracker"
  ],
  "38": [
    "Mina Mano"
  ],
  "42": [
    "Mina Mano"
  ],
  "49": [
    "Mina Mano"
  ],
  "61": [
    "Nathalie"
  ],
  "63": [
    "Nathalie"
  ],
  "93": [
    "Vincent Tracker"
  ],
  "97": [
    "Nathalie"
  ],
  "99": [
    "Vincent Tracker"
  ],
  "110": [
    "Mina Mano"
  ],
  "114": [
    "Samuel Killer"
  ],
  "118": [
    "Mina Mano"
  ]
};
const escapeText=(s:string)=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
export function renderNathalieLolaV42(body:string):string {
 const blocks=body.replace(/\r\n/g,'\n').trim().split(/\n[ \t]*\n+/).map(s=>s.trim()).filter(Boolean);
 const exact=blocks.join('\n\n');let h=2166136261>>>0;
 for(let i=0;i<exact.length;i++)h=Math.imul(h^exact.charCodeAt(i),16777619)>>>0;
 if(h.toString(16).padStart(8,'0')!=='e8234277')throw new Error('Nathalie Lola V4.2 : empreinte différente de Drive');
 const result:string[]=[];let headings=0,turns=0,seen=0;
 for(let i=0;i<blocks.length;){
  const b=blocks[i];
  if(b.startsWith('## ')){result.push('<h2>'+escapeText(b.slice(3))+'</h2>');headings++;i++;continue;}
  if(!b.startsWith('— ')){result.push('<p'+(b==='Par Lola Genzed'?' class="interview-byline"':'')+'>'+escapeText(b)+'</p>');i++;continue;}
  const spec=groups[i];if(!spec)throw new Error('Nathalie Lola V4.2 : groupe sans attribution');
  result.push('<div class="fiction-dialogue" data-dialogue-verified="nathalie-lola-v4-2" role="group" aria-label="Dialogue">');seen++;
  for(const voice of spec){
   const line=blocks[i++];if(!line?.startsWith('— '))throw new Error('Nathalie Lola V4.2 : réplique non concordante');
   result.push('<div class="fiction-dialogue-turn"><span class="fiction-dialogue-speaker">'+escapeText(voice)+'</span><p class="fiction-dialogue-line">'+escapeText(line)+'</p></div>');turns++;
  }
  if(blocks[i]?.startsWith('— '))throw new Error('Nathalie Lola V4.2 : groupe incomplet');
  result.push('</div>');
 }
 if(turns!==18||headings!==5||seen!==14)throw new Error('Nathalie Lola V4.2 : structure non conforme');
 return result.join('\n');
}
