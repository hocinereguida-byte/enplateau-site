// V1.1 — attribution revue réplique par réplique ; jamais d'alternance automatique.
const groups: Record<number,string> = {
  "1": "JAJAJAJ",
  "9": "AJAJA",
  "16": "JAJAJAJAJAJ",
  "28": "AJAJAJA",
  "36": "JAJAJAJAJ",
  "46": "AJAJAJAJAJA",
  "58": "JAJAJAJAJA",
  "70": "JAJAJAJAJAJA",
  "83": "AJAJA",
  "89": "JA",
  "92": "JAJAJA",
  "99": "AJAJ",
  "105": "JAJAJAJAJAJA",
  "118": "JAJ"
};
const names: Record<string,string> = {J:'Emma Santhune',A:'Marianne Dorpeu'};
const escapeText=(s:string)=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
export function renderMarianneV11Interview(body:string):string {
 const blocks=body.replace(/\r\n/g,'\n').trim().split(/\n[ \t]*\n+/).map(s=>s.trim()).filter(Boolean);
 const exact=blocks.join('\n\n');let h=2166136261>>>0;
 for(let i=0;i<exact.length;i++)h=Math.imul(h^exact.charCodeAt(i),16777619)>>>0;
 if(h.toString(16).padStart(8,'0')!=='e0399415')throw new Error('Marianne V1.1 Emma : empreinte différente du manuscrit final Drive');
 const result:string[]=[];let turns=0,headings=0,seen=0;
 for(let i=0;i<blocks.length;){
  const b=blocks[i];
  if(b.startsWith('## ')){result.push('<h2>'+escapeText(b.slice(3))+'</h2>');headings++;i++;continue;}
  if(!b.startsWith('— ')){result.push('<p'+(b==='Par Emma Santhune'?' class="interview-byline"':'')+'>'+escapeText(b)+'</p>');i++;continue;}
  const spec=groups[i];if(!spec)throw new Error('Marianne V1.1 : groupe sans attribution');
  result.push('<div class="interview-dialogue" data-interview-verified="marianne-v1-1">');seen++;
  for(const voice of spec){
   const line=blocks[i++];if(!line?.startsWith('— ')||!names[voice])throw new Error('Marianne V1.1 : réplique non concordante');
   result.push('<div class="interview-turn interview-'+(voice==='J'?'question':'answer')+'"><span class="interview-speaker">'+names[voice]+'</span><div class="interview-words"><p class="marianne-dialogue-line">'+escapeText(line.slice(2))+'</p></div></div>');turns++;
  }
  if(blocks[i]?.startsWith('— '))throw new Error('Marianne V1.1 : groupe incomplet');
  result.push('</div>');
 }
 if(turns!==104||headings!==5||seen!==14)throw new Error('Marianne V1.1 : structure non conforme');
 return result.join('\n');
}
