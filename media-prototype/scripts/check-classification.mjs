// Verrou de classement éditorial V6 des manuscrits en préproduction.
// Modifier ce registre uniquement après mise à jour des matrices maîtres Google Drive.
import { readFileSync, readdirSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../../content/articles');
const records = [
  "industrie/ind-c1-cst-01-brouillon.md|IND-C1-CST-01|industrie|V4.2|strategie-gouvernance|IND-C1-CST||CST|entretien|grand-entretien|1uS6Vi0k9sanYp43WT280iKpJzJ3H8N1YTSlTGrkNyDM",
  "industrie/ind-c1-cst-02-brouillon.md|IND-C1-CST-02|industrie|V2.1|operations-organisation|IND-C1-CST||CST|recit|recit|1FXsuyw0O4fPvZFxEVuzRvwdAYUz_c_f1nGjXcF6WhPY",
  "industrie/ind-c1-cst-03-brouillon.md|IND-C1-CST-03|industrie|V3.2|technologie-innovation|IND-C1-CST||CST|chronique|chronique|1p_2PybmOCRR1Ow9-gG8ri0YNwQ3-A8WeXMmTKRcSDNw",
  "industrie/ind-c1-cst-04-brouillon.md|IND-C1-CST-04|industrie|V3.1|ressources-humaines-competences|IND-C1-CST||CST|chronique|chronique|11QAB8AKkV8-n18k8sF4XhU0JlCp9d2Nmizqze_qCdzg",
  "industrie/ind-c1-cst-05-brouillon.md|IND-C1-CST-05|industrie|V2.0 expérimentale|finance-investissement|IND-C1-CST||CST|entretien|grand-entretien|1QAw6QJcWO7FW_rNnPWY2IeQ0pi1Gd_FV8HpfPUjA0yM",
  "industrie/ind-c1-cst-regard-croise-01-brouillon.md|IND-C1-CST-RC-01|industrie|V3.2||IND-C1-CST||CST|regard-croise||1VNTWk4QeKWnF4QD55vMR9JQ7hxAuOm4eFDk3wSelHjY",
  "immobilier/imm-c1-rc-01-isabelle.md|IMM-C1-RC-01|immobilier|V4.1 maître|finance-investissement|IMM-C1-RC||territoire-reconversion|entretien|grand-entretien|1IWUudlhhy8IWte1QIRbNTuBgzmTctkhIROGtu_xz-OY",
  "immobilier/imm-c1-rc-02-thomas.md|IMM-C1-RC-02|immobilier|V1.3 maître|operations-organisation|IMM-C1-RC||territoire-reconversion|entretien|grand-entretien|1jhxYVbklIdRu8F2OEvvsC43ciRQqt-JKIWag3aH2ez8",
  "immobilier/imm-c1-rc-03-nathalie.md|IMM-C1-RC-03|immobilier|V1.2 maître|strategie-gouvernance|IMM-C1-RC||territoire-reconversion|entretien|grand-entretien|1xTxBYv_0BBELyNe65xvYYqO_F_hPXWv2fQLOm1M1MRs",
  "immobilier/imm-c1-rc-04-karim.md|IMM-C1-RC-04|immobilier|V2 expérimentale|droit-regulation|IMM-C1-RC||territoire-reconversion|recit|recit|1vsLB3DjzAkQjYZHm4pieHgRk9hW8lbPRL5Ei9T5zANs",
  "immobilier/imm-c1-rc-regard-01.md|IMM-C1-RC-REGARD-01|immobilier|V2.4 — D2 global ouvert||IMM-C1-RC||territoire-reconversion|regard-croise||1R1L4TWX5XasFxNfIh0yLAHuNKchMEy5Sh39_g0EDOjo",
  "agriculture/agr-c1-a02-chronique-vergers.md|AGR-C1-A02|agriculture|V4.1|strategie-gouvernance|AGR-C1-A|engagement-productif-longue-duree|arboriculture-sous-revue-strategique|chronique|chronique|1_iE1-2nxZIhWeKOEH_tASaFa6Cal8tC5ZOxLAkrNRY8",
  "agriculture/agr-c1-b01-maraichage.md|AGR-C1-B01|agriculture|V2.2 corrigée|strategie-gouvernance|AGR-C1-B|debouches-variables|maraichage-debouches-concurrents|entretien|grand-entretien|16Jh2lgYwHM0VHTXvnB3ZrfGv9jwrZDwcJkod03469DA",
  "agriculture/agr-c1-b04-cereales.md|AGR-C1-B04|agriculture|V1.1 corrigée|operations-organisation|AGR-C1-B|debouches-variables|cereales-recolte-excedentaire|recit|recit|1ceYt332bOyDvLGTTxPZhRT-2Ka8AQCFBce_97S3eTos"
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
  if (r.code === 'IMM-C1-RC-04' && d.title !== "Il avait empêché la signature. Il n'avait pas su arrêter la négociation.") errors.push('Titre de Karim V2 différent du titre validé');
  if (d.published !== true) errors.push(r.code+' : consultation préproduction désactivée');
  if (!d.source_document_url?.includes('/document/d/'+r.driveId+'/')) errors.push(r.code+' : URL Drive ne correspond pas à la version verrouillée');
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
