// Verrou de classement éditorial V6 des manuscrits en préproduction.
// Registre des versions actuellement retenues sur Google Drive pour la consultation de préproduction.
import { readFileSync, readdirSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../../content/articles');
const records = [
  "eau-ressources/eau-c1-u1-str-01-chronique.md|EAU-C1-U1-STR-01|eau-ressources|V9|strategie-gouvernance|EAU-C1-U1|partage-eau-agriculture-potable|C1-U1|chronique|chronique|",
  "industrie/ind-c1-cst-01-brouillon.md|IND-C1-CST-01|industrie|V5.1|strategie-gouvernance|IND-C1-CST||CST|entretien|grand-entretien|1uEQ1QYskssxyfxF45wfKM3s5veT0_cXyuGqh-96ENys",
  "industrie/ind-c1-cst-02-brouillon.md|IND-C1-CST-02|industrie|V3|operations-organisation|IND-C1-CST||CST|chronique|chronique|1Z9aEobtTrnGX9rgINBYLGr25GTV8CtQkZS0u5qOPaok",
  "industrie/ind-c1-cst-03-brouillon.md|IND-C1-CST-03|industrie|V3.7|technologie-innovation|IND-C1-CST||CST|chronique|chronique|1juzTDNGcjDjpvfuLpGA9lmjUAOMGUkray1QI8bfHDSo",
  "industrie/ind-c1-cst-04-brouillon.md|IND-C1-CST-04|industrie|V3.4|ressources-humaines-competences|IND-C1-CST||CST|chronique|chronique|1l_wbYNe8ANu8WB4t8oj5tFIZmMZZSlQy-fOosOkaH1c",
  "industrie/ind-c1-cst-05-brouillon.md|IND-C1-CST-05|industrie|V3.0|finance-investissement|IND-C1-CST||CST|entretien|grand-entretien|1OOMtpevWBn3l5cgquZhAme_pCBXp-KrjARbDPr5tEmw",
  "industrie/ind-c1-cst-regard-croise-01-brouillon.md|IND-C1-CST-RC-01|industrie|V3.2||IND-C1-CST||CST|regard-croise||1VNTWk4QeKWnF4QD55vMR9JQ7hxAuOm4eFDk3wSelHjY",
  "immobilier/imm-c1-rc-01-isabelle.md|IMM-C1-RC-01|immobilier|V6|finance-investissement|IMM-C1-RC||territoire-reconversion|entretien|grand-entretien|1ohTdf2SRkE2Uy6C34u97ZskCefKgS_hy9IYK72s-oQQ",
  "immobilier/imm-c1-rc-02-thomas.md|IMM-C1-RC-02|immobilier|V3|operations-organisation|IMM-C1-RC||territoire-reconversion|chronique|chronique|1eoYOI9tvNWgGuOIy423FyiXQcLCm1qEIkFl1nPIXj4U",
  "immobilier/imm-c1-rc-03-nathalie.md|IMM-C1-RC-03|immobilier|V2|strategie-gouvernance|IMM-C1-RC||territoire-reconversion|entretien|grand-entretien|1qNrr9sxnoNV5ZDVT5xCVn8xzp2NPnc_zKyOmKXgscEM",
  "immobilier/imm-c1-rc-04-karim.md|IMM-C1-RC-04|immobilier|V3|droit-regulation|IMM-C1-RC||territoire-reconversion|chronique|chronique|1jfBl26WV6qeDzF7UUsCu_dFW2x95-OZblpat5n83W5M",
  "immobilier/imm-c1-rc-regard-01.md|IMM-C1-RC-REGARD-01|immobilier|V2.4||IMM-C1-RC||territoire-reconversion|regard-croise||1R1L4TWX5XasFxNfIh0yLAHuNKchMEy5Sh39_g0EDOjo",
  "agriculture/agr-c1-a02-chronique-vergers.md|AGR-C1-A02|agriculture|V4.5|strategie-gouvernance|AGR-C1-A|engagement-productif-longue-duree|arboriculture-sous-revue-strategique|chronique|chronique|1l75XgAOrlllaRdH_BRrv-xtV2w0WDsPQ_cT628wJsSw",
  "agriculture/agr-c1-b01-maraichage.md|AGR-C1-B01|agriculture|V3|strategie-gouvernance|AGR-C1-B|debouches-variables|maraichage-debouches-concurrents|entretien|grand-entretien|1NRJHKCKFijkOKC4KDpYtbTFI4RdxB9fNpUbzi6vFdpg",
  "agriculture/agr-c1-b04-cereales.md|AGR-C1-B04|agriculture|V2|finance-investissement|AGR-C1-B|debouches-variables|cereales-recolte-excedentaire|chronique|chronique|1pJuYG60CbJjXpdoc-zViUmkwDyxXw-kUhlEcKKzwTKY"
].map(line => {
  const [path, code, cycle, version, perspective, unit, family, context, format, genre, driveId] = line.split('|');
  return { path, code, cycle, version, perspective, unit, family, context, format, genre, driveId };
});
const errors = [];
const perspectives = new Set(['strategie-gouvernance','finance-investissement','droit-regulation','operations-organisation','technologie-innovation','ressources-humaines-competences','energie-ressources','territoires-politiques-publiques']);
const parse = source => {
  const match = source.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) return null;
  const result = {};
  for (const line of match[1].split('\n')) {
    const m = line.match(/^([a-z_0-9]+):\s*(.*)$/);
    if (!m) continue;
    const value = m[2].trim();
    try { result[m[1]] = JSON.parse(value); } catch { result[m[1]] = value; }
  }
  return result;
};
const actual = readdirSync(root,{withFileTypes:true}).filter(d=>d.isDirectory()).flatMap(d => readdirSync(join(root,d.name)).filter(x=>x.endsWith('.md')).map(x=>d.name+'/'+x));
const expectedPaths = new Set(records.map(r=>r.path));
for (const p of actual) if (!expectedPaths.has(p)) errors.push('Fichier non référencé : '+p);
const usedCodes = new Set(), usedPerspectives = new Set();
for (const r of records) {
  let source;
  try { source = readFileSync(join(root,r.path),'utf8'); } catch { errors.push('Fichier manquant : '+r.path); continue; }
  const d = parse(source);
  if (!d) { errors.push('Frontmatter absent : '+r.path); continue; }
  const tests = {code_editorial:r.code,cycle:r.cycle,conversation:'C1',source_document_version:r.version,unite_programmation:r.unit,contexte:r.context,format:r.format,statut_editorial:'prepublication'};
  if (r.perspective) { tests.perspective_principale=r.perspective; tests.genre_narratif=r.genre; }
  if (r.family) tests.famille_decisionnelle=r.family;
  for (const [key,value] of Object.entries(tests)) if (d[key] !== value) errors.push(r.code+' : '+key+' attendu '+JSON.stringify(value)+', trouvé '+JSON.stringify(d[key]));
  if (r.code === 'IMM-C1-RC-04' && d.title !== "L'entreprise avait évité de signer un mauvais contrat. Elle a dépensé 35 000 euros pour continuer à ne pas le signer.") errors.push('Titre de Karim V3 différent du titre validé');
  if (d.published !== true) errors.push(r.code+' : consultation préproduction désactivée');
  if (r.driveId && !d.source_document_url?.includes('/document/d/'+r.driveId+'/')) errors.push(r.code+' : URL Drive ne correspond pas à la version verrouillée');
  if (usedCodes.has(r.code)) errors.push('Identifiant dupliqué : '+r.code); else usedCodes.add(r.code);
  if (r.perspective) {
    if (!perspectives.has(r.perspective)) errors.push(r.code+' : perspective inconnue');
    const key=r.cycle+'/'+d.conversation+'/'+r.unit+'/'+r.perspective;
    if (usedPerspectives.has(key)) errors.push('Perspective dupliquée dans la même unité : '+key);
    usedPerspectives.add(key);
    if (d.lecture_principale && d.lecture_principale !== r.perspective) errors.push(r.code+' : lecture historique et perspective V6 divergent');
  } else if (d.genre_narratif || d.perspective_principale) errors.push(r.code+' : un Regard croisé est transversal, sans genre de Scène ni perspective principale');
  if (source.includes('FICHE DE CLASSEMENT CMS — HORS TEXTE PUBLIC') || source.includes('REGISTRE ÉDITORIAL INTERNE — HORS PUBLICATION')) errors.push(r.code+' : note interne importée dans le texte');
}
if (errors.length) { process.stderr.write('Échec classement éditorial V6 :\n'+errors.map(e=>' - '+e).join('\n')+'\n'); process.exit(1); }
console.log('Classement V6 vérifié : '+records.length+' contenus, versions Drive verrouillées, genres, perspectives et unités sans doublon.');
