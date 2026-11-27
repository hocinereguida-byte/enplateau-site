// V1.1 — attribution revue réplique par réplique ; jamais d'alternance automatique.
const groups: Record<number,string> = {
  "1": "JAJAJA",
  "8": "AJ",
  "12": "JAJAJA",
  "19": "J",
  "21": "JAJAJA",
  "28": "AJ",
  "31": "JAJAJ",
  "37": "JAJAJAJ",
  "45": "AJ",
  "48": "JAJ",
  "53": "JAJ",
  "57": "JAJAJAJAJ",
  "67": "JAJAJAJ",
  "75": "A",
  "77": "AJAJ",
  "82": "JAJAJAJAJA",
  "93": "AJAJJAJAJAJAJA",
  "109": "AJA",
  "113": "AJAJ",
  "118": "AJ",
  "121": "J",
  "123": "JAJAJA",
  "130": "AJ"
};
const names: Record<string,string> = {J:'Winnie Bouba',A:"Kevin Obstin"};
const escapeText=(s:string)=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
export function renderObstinV11Interview(body:string):string {
 const blocks=body.replace(/\r\n/g,'\n').trim().split(/\n[ \t]*\n+/).map(s=>s.trim()).filter(Boolean);
 const exact=blocks.join('\n\n');let h=2166136261>>>0;
 for(let i=0;i<exact.length;i++)h=Math.imul(h^exact.charCodeAt(i),16777619)>>>0;
 if(h.toString(16).padStart(8,'0')!=='21578682')throw new Error('Kevin Obstin V1.1 Winnie : empreinte différente du manuscrit final Drive');
 const result:string[]=[];let turns=0,headings=0,seen=0;
 for(let i=0;i<blocks.length;){
  const b=blocks[i];
  if(b.startsWith('## ')){result.push('<h2>'+escapeText(b.slice(3))+'</h2>');headings++;i++;continue;}
  if(!b.startsWith('— ')){result.push('<p'+(b==='Par Winnie Bouba'?' class="interview-byline"':'')+'>'+escapeText(b)+'</p>');i++;continue;}
  const spec=groups[i];if(!spec)throw new Error('Kevin Obstin V1.1 : groupe sans attribution');
  result.push('<div class="interview-dialogue" data-interview-verified="obstin-v1-1">');seen++;
  for(const voice of spec){
   const line=blocks[i++];if(!line?.startsWith('— ')||!names[voice])throw new Error('Kevin Obstin V1.1 : réplique non concordante');
   result.push('<div class="interview-turn interview-'+(voice==='J'?'question':'answer')+'"><span class="interview-speaker">'+names[voice]+'</span><div class="interview-words"><p class="obstin-dialogue-line">'+escapeText(line.slice(2))+'</p></div></div>');turns++;
  }
  if(blocks[i]?.startsWith('— '))throw new Error('Kevin Obstin V1.1 : groupe incomplet');
  result.push('</div>');
 }
 if(turns!==106||headings!==5||seen!==23)throw new Error('Kevin Obstin V1.1 : structure non conforme');
 return result.join('\n');
}
