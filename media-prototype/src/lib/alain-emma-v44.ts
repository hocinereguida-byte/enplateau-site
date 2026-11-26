// V4.4 — attribution revue réplique par réplique ; jamais d'alternance automatique.
const groups: Record<number,string> = {
  "4": "JAJAJA",
  "11": "AJA",
  "15": "JAJAJA",
  "23": "JAJAJA",
  "30": "AJA",
  "34": "A",
  "36": "JAJA",
  "41": "A",
  "43": "A",
  "45": "JAJ",
  "49": "AJAJAJ",
  "56": "AJAJA",
  "62": "JAJAJ",
  "68": "AJAJA",
  "74": "AJAJAJAJAJ",
  "85": "JAJAJA",
  "93": "JAJAJA",
  "100": "AJJAJ",
  "106": "AJA",
  "111": "JAJAJA",
  "118": "JAJAJA",
  "126": "JAJ",
  "130": "A",
  "132": "J",
  "134": "AJAJAJAJ",
  "143": "AJAJAJAJ",
  "152": "AJAJAJ",
  "160": "JAJAJ",
  "166": "JAJAJA",
  "173": "JA",
  "176": "JA",
  "181": "JAJAJ",
  "187": "AJAJA",
  "193": "ASAS",
  "198": "AJA",
  "202": "AJ"
};
const names: Record<string,string> = {J:'Emma Santhune',A:'Alain Ristourne',S:'Le serveur'};
const escapeText=(s:string)=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
export function renderAlainV44Interview(body:string):string {
 const blocks=body.replace(/\r\n/g,'\n').trim().split(/\n[ \t]*\n+/).map(s=>s.trim()).filter(Boolean);
 const exact=blocks.join('\n\n');let h=2166136261>>>0;
 for(let i=0;i<exact.length;i++)h=Math.imul(h^exact.charCodeAt(i),16777619)>>>0;
 if(h.toString(16).padStart(8,'0')!=='afb79934')throw new Error('Alain V4.4 Emma : empreinte différente de du manuscrit final Drive');
 const result:string[]=[];let turns=0,headings=0,seen=0;
 for(let i=0;i<blocks.length;){
  const b=blocks[i];
  if(b.startsWith('## ')){result.push('<h2>'+escapeText(b.slice(3))+'</h2>');headings++;i++;continue;}
  if(!b.startsWith('— ')){result.push('<p'+(b==='Par Emma Santhune'?' class="interview-byline"':'')+'>'+escapeText(b)+'</p>');i++;continue;}
  const spec=groups[i+3];if(!spec)throw new Error('Alain V4.4 : groupe sans attribution');
  result.push('<div class="interview-dialogue" data-interview-verified="alain-v4-4">');seen++;
  for(const voice of spec){
   const line=blocks[i++];if(!line?.startsWith('— ')||!names[voice])throw new Error('Alain V4.4 : réplique non concordante');
   result.push('<div class="interview-turn interview-'+(voice==='J'?'question':'answer')+'"><span class="interview-speaker">'+names[voice]+'</span><div class="interview-words"><p class="alain-dialogue-line">'+escapeText(line.slice(2))+'</p></div></div>');turns++;
  }
  if(blocks[i]?.startsWith('— '))throw new Error('Alain V4.4 : groupe incomplet');
  result.push('</div>');
 }
 if(turns!==158||headings!==5||seen!==36)throw new Error('Alain V4.4 : structure non conforme');
 return result.join('\n');
}
