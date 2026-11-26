// Édouard V1.2 bis — attributions explicites, didascalies et intégrité textuelle.
const groups: Record<number,string> = {
  "1": "JEJEJEJEJ",
  "11": "JEJEJEJEJEEJ",
  "24": "JEJ",
  "29": "JEJEJEJEJEJEJEJEJEJEJEJE",
  "54": "JEJEJEJEJEJ",
  "66": "J",
  "68": "JEJEJEJEJEJEJEJEJEJEJEJEJEJEJEJE",
  "101": "JEJEJEJEJEJEJEJEJEJEJEJEJEJEJEJEJ",
  "135": "EJ",
  "138": "JEJEJEJEJEJ",
  "150": "JEJEJ",
  "156": "EJEJEJEJEJEJEJEJE",
  "174": "JEJEJEJEJEJEJEJE",
  "191": "JE",
  "194": "JEJEJEJEJEJEJEJEJE",
  "213": "JEJEJEJEJEJJEJEJEJEJ",
  "234": "JEJEJEJEJEJEJEJEJ",
  "252": "EJEJEJE",
  "260": "JEJEJEJ",
  "268": "EJ"
};
const names: Record<string,string> = {J:'Jean Toksik',E:'Édouard Antigueux'};
const escapeText=(s:string)=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
export function renderEdouardJeanV12bis(body:string):string {
 const blocks=body.replace(/\r\n/g,'\n').trim().split(/\n[ \t]*\n+/).map(s=>s.trim()).filter(Boolean);
 const exact=blocks.join('\n\n');let h=2166136261>>>0;
 for(let i=0;i<exact.length;i++)h=Math.imul(h^exact.charCodeAt(i),16777619)>>>0;
 if(h.toString(16).padStart(8,'0')!=='0cebfdb3')throw new Error('Édouard V1.2 bis : empreinte différente de Drive');
 const result:string[]=[];let headings=0,turns=0,stages=0,seen=0;
 for(let i=0;i<blocks.length;){
  const b=blocks[i];
  if(b.startsWith('## ')){result.push('<h2>'+escapeText(b.slice(3))+'</h2>');headings++;i++;continue;}
  if(/^\(.*\)$/.test(b)){result.push('<p class="edouard-stage"><em>'+escapeText(b)+'</em></p>');stages++;i++;continue;}
  if(!b.startsWith('— ')){result.push('<p'+(b==='Par Jean Toksik'?' class="interview-byline"':'')+'>'+escapeText(b)+'</p>');i++;continue;}
  const spec=groups[i];if(!spec)throw new Error('Édouard V1.2 bis : groupe sans attribution');
  result.push('<div class="interview-dialogue" data-interview-verified="edouard-jean-v1-2-bis">');seen++;
  for(const voice of spec){
   const line=blocks[i++];if(!line?.startsWith('— ')||!names[voice])throw new Error('Édouard V1.2 bis : réplique non concordante');
   result.push('<div class="interview-turn interview-'+(voice==='J'?'question':'answer')+'"><span class="interview-speaker">'+names[voice]+'</span><div class="interview-words"><p class="edouard-dialogue-line">'+escapeText(line.slice(2))+'</p></div></div>');turns++;
  }
  if(blocks[i]?.startsWith('— '))throw new Error('Édouard V1.2 bis : groupe incomplet');
  result.push('</div>');
 }
 if(turns!==249||headings!==6||stages!==14||seen!==20)throw new Error('Édouard V1.2 bis : structure non conforme');
 return result.join('\n');
}
