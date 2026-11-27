// V2.0 — attribution revue réplique par réplique ; jamais d'alternance automatique.
const groups: Record<number,string> = {
  "1": "JAJAJAJA",
  "10": "JAJA",
  "15": "JAJAJAJA",
  "24": "AJAJAJA",
  "32": "JAJAJ",
  "38": "JAJ",
  "42": "AJAJAJ",
  "49": "JAJ",
  "53": "JA",
  "56": "JAJAJAJAJ",
  "66": "AJA",
  "70": "AJA",
  "74": "JAJAJAJAJAJAJ",
  "88": "JAJA",
  "94": "JAJAJAJAJAJA",
  "107": "A",
  "109": "JA",
  "112": "JAJAJ",
  "118": "JAJA"
};
const names: Record<string,string> = {J:'Emma Santhune',A:'Martine Jipépé'};
const escapeText=(s:string)=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
export function renderMartineV20Interview(body:string):string {
 const blocks=body.replace(/\r\n/g,'\n').trim().split(/\n[ \t]*\n+/).map(s=>s.trim()).filter(Boolean);
 const exact=blocks.join('\n\n');let h=2166136261>>>0;
 for(let i=0;i<exact.length;i++)h=Math.imul(h^exact.charCodeAt(i),16777619)>>>0;
 if(h.toString(16).padStart(8,'0')!=='f2ba3aed')throw new Error('Martine V2.0 Emma : empreinte différente du manuscrit final Drive');
 const result:string[]=[];let turns=0,headings=0,seen=0;
 for(let i=0;i<blocks.length;){
  const b=blocks[i];
  if(b.startsWith('## ')){result.push('<h2>'+escapeText(b.slice(3))+'</h2>');headings++;i++;continue;}
  if(!b.startsWith('— ')){result.push('<p'+(b==='Par Emma Santhune'?' class="interview-byline"':'')+'>'+escapeText(b)+'</p>');i++;continue;}
  const spec=groups[i];if(!spec)throw new Error('Martine V2.0 : groupe sans attribution');
  result.push('<div class="interview-dialogue" data-interview-verified="martine-v2-0">');seen++;
  for(const voice of spec){
   const line=blocks[i++];if(!line?.startsWith('— ')||!names[voice])throw new Error('Martine V2.0 : réplique non concordante');
   result.push('<div class="interview-turn interview-'+(voice==='J'?'question':'answer')+'"><span class="interview-speaker">'+names[voice]+'</span><div class="interview-words"><p class="martine-dialogue-line">'+escapeText(line.slice(2))+'</p></div></div>');turns++;
  }
  if(blocks[i]?.startsWith('— '))throw new Error('Martine V2.0 : groupe incomplet');
  result.push('</div>');
 }
 if(turns!==102||headings!==5||seen!==19)throw new Error('Martine V2.0 : structure non conforme');
 return result.join('\n');
}
