// V2.1 — attribution revue réplique par réplique ; jamais d'alternance automatique.
const groups: Record<number,string> = {
  "2": "LJL",
  "7": "LJ",
  "11": "JLJLJ",
  "17": "JLJ",
  "21": "JLJLJ",
  "27": "JL",
  "31": "JLJLJ",
  "37": "JLJ",
  "41": "J",
  "43": "JLJLJLJLJ",
  "53": "LJL",
  "59": "RJR",
  "64": "JRJRJRJ",
  "72": "LJ",
  "76": "JRJJRJR",
  "84": "JLJLJ",
  "90": "JL",
  "93": "JLJLJLJL",
  "102": "JLJLJLJ",
  "110": "JLJLJJLJ",
  "119": "LJ",
  "124": "J",
  "127": "JLJL",
  "133": "J",
  "135": "LJLJ"
};
const names: Record<string,string> = {J:'Winnie Bouba',L:'Léa Chicon',R:'Romain Skyzovitch'};
const escapeText=(s:string)=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
export function renderChiconV21Interview(body:string):string {
 const blocks=body.replace(/\r\n/g,'\n').trim().split(/\n[ \t]*\n+/).map(s=>s.trim()).filter(Boolean);
 const exact=blocks.join('\n\n');let h=2166136261>>>0;
 for(let i=0;i<exact.length;i++)h=Math.imul(h^exact.charCodeAt(i),16777619)>>>0;
 if(h.toString(16).padStart(8,'0')!=='7a99dcfe')throw new Error('Léa Chicon V2.1 Winnie : empreinte différente du manuscrit final Drive');
 const result:string[]=[];let turns=0,headings=0,seen=0;
 for(let i=0;i<blocks.length;){
  const b=blocks[i];
  if(b.startsWith('## ')){result.push('<h2>'+escapeText(b.slice(3))+'</h2>');headings++;i++;continue;}
  if(!b.startsWith('— ')){result.push('<p'+(b==='Par Winnie Bouba'?' class="interview-byline"':'')+'>'+escapeText(b)+'</p>');i++;continue;}
  const spec=groups[i];if(!spec)throw new Error('Léa Chicon V2.1 : groupe sans attribution');
  result.push('<div class="interview-dialogue" data-interview-verified="chicon-v2-1">');seen++;
  for(const voice of spec){
   const line=blocks[i++];if(!line?.startsWith('— ')||!names[voice])throw new Error('Léa Chicon V2.1 : réplique non concordante');
   result.push('<div class="interview-turn interview-'+(voice==='J'?'question':'answer')+'"><span class="interview-speaker">'+names[voice]+'</span><div class="interview-words"><p class="chicon-dialogue-line">'+escapeText(line.slice(2))+'</p></div></div>');turns++;
  }
  if(blocks[i]?.startsWith('— '))throw new Error('Léa Chicon V2.1 : groupe incomplet');
  result.push('</div>');
 }
 if(turns!==102||headings!==5||seen!==25)throw new Error('Léa Chicon V2.1 : structure non conforme');
 return result.join('\n');
}
