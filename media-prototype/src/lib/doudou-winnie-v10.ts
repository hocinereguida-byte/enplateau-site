// V1.0 — attribution revue réplique par réplique ; jamais d'alternance automatique.
const groups: Record<number,string> = {
  "1": "JAJAJ",
  "7": "JAJ",
  "13": "JAJAJA",
  "20": "JAJAJA",
  "27": "J",
  "30": "JAJAJAJJAJAJ",
  "43": "JAJAJAJ",
  "51": "JAJ",
  "56": "JAJAJAJ",
  "64": "JAJA",
  "69": "JAJAJAJ",
  "77": "AJAJA",
  "84": "JAJ",
  "88": "JAJAJAJAJA",
  "99": "JAJAJ",
  "105": "JAJAJ",
  "111": "JAJA",
  "116": "JA",
  "119": "J",
  "121": "JAJ"
};
const names: Record<string,string> = {J:'Winnie Bouba',A:"David Doudou"};
const escapeText=(s:string)=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
export function renderDoudouV10Interview(body:string):string {
 const blocks=body.replace(/\r\n/g,'\n').trim().split(/\n[ \t]*\n+/).map(s=>s.trim()).filter(Boolean);
 const exact=blocks.join('\n\n');let h=2166136261>>>0;
 for(let i=0;i<exact.length;i++)h=Math.imul(h^exact.charCodeAt(i),16777619)>>>0;
 if(h.toString(16).padStart(8,'0')!=='3ae65589')throw new Error('David Doudou V1.0 Winnie : empreinte différente du manuscrit final Drive');
 const result:string[]=[];let turns=0,headings=0,seen=0;
 for(let i=0;i<blocks.length;){
  const b=blocks[i];
  if(b.startsWith('## ')){result.push('<h2>'+escapeText(b.slice(3))+'</h2>');headings++;i++;continue;}
  if(!b.startsWith('— ')){result.push('<p'+(b==='Par Winnie Bouba'?' class="interview-byline"':'')+'>'+escapeText(b)+'</p>');i++;continue;}
  const spec=groups[i];if(!spec)throw new Error('David Doudou V1.0 : groupe sans attribution');
  result.push('<div class="interview-dialogue" data-interview-verified="doudou-v1-0">');seen++;
  for(const voice of spec){
   const line=blocks[i++];if(!line?.startsWith('— ')||!names[voice])throw new Error('David Doudou V1.0 : réplique non concordante');
   result.push('<div class="interview-turn interview-'+(voice==='J'?'question':'answer')+'"><span class="interview-speaker">'+names[voice]+'</span><div class="interview-words"><p class="doudou-dialogue-line">'+escapeText(line.slice(2))+'</p></div></div>');turns++;
  }
  if(blocks[i]?.startsWith('— '))throw new Error('David Doudou V1.0 : groupe incomplet');
  result.push('</div>');
 }
 if(turns!==99||headings!==5||seen!==20)throw new Error('David Doudou V1.0 : structure non conforme');
 return result.join('\n');
}
