// V2.0 — attribution revue réplique par réplique ; jamais d'alternance automatique.
const groups: Record<number,string> = {
  "2": "JAJAJA",
  "9": "JAJAJAJA",
  "19": "AJAJAJAJ",
  "28": "JAJAJAJAJ",
  "40": "JAAJAJAJ",
  "49": "JA",
  "52": "JA",
  "56": "JAJA",
  "61": "JAJA",
  "66": "JAJA",
  "71": "JAJAJAJA",
  "80": "JAJAJAJAJAJAJA",
  "96": "JAJ",
  "100": "AJAJAJAJ",
  "109": "JAJAJA",
  "116": "J",
  "119": "JAJAJAJAJAJ",
  "131": "JA",
  "134": "J",
  "136": "AJAJAJ"
};
const names: Record<string,string> = {J:'Winnie Bouba',A:'David Monogane'};
const escapeText=(s:string)=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
export function renderDavidV20Interview(body:string):string {
 const blocks=body.replace(/\r\n/g,'\n').trim().split(/\n[ \t]*\n+/).map(s=>s.trim()).filter(Boolean);
 const exact=blocks.join('\n\n');let h=2166136261>>>0;
 for(let i=0;i<exact.length;i++)h=Math.imul(h^exact.charCodeAt(i),16777619)>>>0;
 if(h.toString(16).padStart(8,'0')!=='d565e794')throw new Error('David V2.0 Winnie : empreinte différente du manuscrit final Drive');
 const result:string[]=[];let turns=0,headings=0,seen=0;
 for(let i=0;i<blocks.length;){
  const b=blocks[i];
  if(b.startsWith('## ')){result.push('<h2>'+escapeText(b.slice(3))+'</h2>');headings++;i++;continue;}
  if(!b.startsWith('— ')){result.push('<p'+(b==='Par Winnie Bouba'?' class="interview-byline"':'')+'>'+escapeText(b)+'</p>');i++;continue;}
  const spec=groups[i];if(!spec)throw new Error('David V2.0 : groupe sans attribution');
  result.push('<div class="interview-dialogue" data-interview-verified="david-v2-0">');seen++;
  for(const voice of spec){
   const line=blocks[i++];if(!line?.startsWith('— ')||!names[voice])throw new Error('David V2.0 : réplique non concordante');
   result.push('<div class="interview-turn interview-'+(voice==='J'?'question':'answer')+'"><span class="interview-speaker">'+names[voice]+'</span><div class="interview-words"><p class="david-dialogue-line">'+escapeText(line.slice(2))+'</p></div></div>');turns++;
  }
  if(blocks[i]?.startsWith('— '))throw new Error('David V2.0 : groupe incomplet');
  result.push('</div>');
 }
 if(turns!==115||headings!==5||seen!==20)throw new Error('David V2.0 : structure non conforme');
 return result.join('\n');
}
