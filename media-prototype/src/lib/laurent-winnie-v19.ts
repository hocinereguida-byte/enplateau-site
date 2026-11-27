// V1.9 — attribution revue des 335 répliques ; pas d'alternance automatique.
const groups: Record<number,string> = {
  "1": "WLW",
  "5": "LW",
  "8": "W",
  "10": "WLWLWLWLWLWLWLWL",
  "27": "W",
  "29": "WLWLWLWLWLW",
  "41": "WLWLWLWLWLWL",
  "54": "WLWLWLWL",
  "63": "WLW",
  "67": "WLWLWLWL",
  "76": "WLWLWLWLWLWLWLWLWLWL",
  "97": "WLWLW",
  "103": "WLWLWLWLWLWLWLWLWL",
  "122": "WLWLWLWLWLWLWLDWDWDWDW",
  "145": "LWLWL",
  "151": "WLW",
  "155": "WLWLWLWL",
  "164": "W",
  "166": "WLWLWLWLWLWL",
  "179": "W",
  "181": "LWLWLWLW",
  "190": "W",
  "192": "WLWLWLWLWLWLWL",
  "207": "WLWLWLWLWLW",
  "219": "WLWLWLWLWL",
  "230": "WLWLW",
  "236": "WLWLWLWL",
  "245": "W",
  "247": "WL",
  "250": "WL",
  "253": "WL",
  "256": "W",
  "258": "WLWLWL",
  "265": "WLWLWL",
  "272": "WLWLW",
  "278": "WLWLW",
  "284": "DWDWD",
  "290": "WLW",
  "294": "W",
  "296": "WLWLWLWLWLWLW",
  "310": "WLWLWLW",
  "318": "WLWLWL",
  "325": "WLWL",
  "330": "W",
  "332": "WLWLW",
  "338": "W",
  "341": "DW",
  "344": "W",
  "346": "WDWLWLW",
  "354": "WLWLWLWLWLWWLWLW",
  "371": "W",
  "373": "WDWDWDWD",
  "382": "W",
  "384": "L",
  "386": "WLWL",
  "391": "W"
};
const names: Record<string,string> = {W:'Winnie Bouba',L:'Laurent Dafdaf',D:'Dylan Raccord'};
const escapeText=(s:string)=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
export function renderLaurentWinnieV19(body:string):string {
 const blocks=body.replace(/\r\n/g,'\n').trim().split(/\n[ \t]*\n+/).map(s=>s.trim()).filter(Boolean);
 const exact=blocks.join('\n\n');let h=2166136261>>>0;
 for(let i=0;i<exact.length;i++)h=Math.imul(h^exact.charCodeAt(i),16777619)>>>0;
 if(h.toString(16).padStart(8,'0')!=='d4112534')throw new Error('Laurent Winnie V1.9 : empreinte différente de Drive');
 const result:string[]=[];let headings=0,turns=0,stages=0,seen=0;
 for(let i=0;i<blocks.length;){
  const b=blocks[i];
  if(b.startsWith('## ')){result.push('<h2>'+escapeText(b.slice(3))+'</h2>');headings++;i++;continue;}
  if(/^\(.*\)$/.test(b)){result.push('<p class="winnie-stage"><em>'+escapeText(b)+'</em></p>');stages++;i++;continue;}
  if(!/^(— |(?:Winnie|Dylan|Laurent) — )/.test(b)){result.push('<p'+(b==='Par Winnie Bouba'?' class="interview-byline"':'')+'>'+escapeText(b)+'</p>');i++;continue;}
  const spec=groups[i];if(!spec)throw new Error('Laurent Winnie V1.9 : groupe sans attribution');
  result.push('<div class="interview-dialogue" data-interview-verified="laurent-winnie-v1-9">');seen++;
  for(const voice of spec){
   const line=blocks[i++];const prefix=line?.match(/^(— |(?:Winnie|Dylan|Laurent) — )/)?.[0];if(!prefix||!names[voice])throw new Error('Laurent Winnie V1.9 : réplique non concordante');
   result.push('<div class="interview-turn interview-'+(voice==='W'?'question':'answer')+'"><span class="interview-speaker">'+names[voice]+'</span><div class="interview-words"><p class="winnie-dialogue-line" data-source-prefix="'+escapeText(prefix)+'">'+escapeText(line.slice(prefix.length))+'</p></div></div>');turns++;
  }
  if(/^(— |(?:Winnie|Dylan|Laurent) — )/.test(blocks[i]??''))throw new Error('Laurent Winnie V1.9 : groupe incomplet');
  result.push('</div>');
 }
 if(turns!==335||headings!==6||stages!==50||seen!==56)throw new Error('Laurent Winnie V1.9 : structure non conforme');
 return result.join('\n');
}
