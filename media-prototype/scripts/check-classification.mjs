// Verrou de classement éditorial V6 des manuscrits en préproduction.
// Registre des versions actuellement retenues sur Google Drive pour la consultation de préproduction.
import { readFileSync, readdirSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../../content/articles');
const records = [
  "recherche-innovation/cmd-naf-17.md|CMD-NAF-17|recherche-innovation|V3|strategie-gouvernance|REC-C2-U1||C2-U1|entretien|grand-entretien|1odY4BqKHda4B1SlL8eC2V3HE0WHdla66dsVhVkuFXzs",
  "numerique-telecom/cmd-naf-16.md|CMD-NAF-16|numerique-telecom|V4|operations-organisation|NUM-C4-U1||C4-U1|chronique|chronique|1sAOsLD-C5gETL4dioMMU42t1Aex-fCSiuPH1_by6ERQ",
  "culture-medias/cmd-naf-15.md|CMD-NAF-15|culture-medias|V4|finance-investissement|CUL-C5-U1||C5-U1|entretien|grand-entretien|1HZjxYjPIU9k88h1q_q91y4vMNmcM-nGi5dhB_CorjA8",
  "action-publique/cmd-naf-14.md|CMD-NAF-14|action-publique|V4|droit-regulation|ACT-C7-U1||C7-U1|chronique|chronique|1hBoIuH0EpzdCKn_Ux3W-qs3Uw2n-bP9_r1I3WjQP8N0",
  "emploi-travail/cmd-naf-13.md|CMD-NAF-13|emploi-travail|V3|finance-investissement|EMP-C4-U1||C4-U1|entretien|grand-entretien|1iQP_5UgcqYPgvJGRqm1Fv3g_8qjPDp7P3acXx9NLMBk",
  "education-formation/cmd-naf-12.md|CMD-NAF-12|education-formation|V2|strategie-gouvernance|EDU-C5-U1||C5-U1|chronique|chronique|1U14DYMFbtU6fsxRM9yH-ua3cTejt2bytyLURV13sO5Q",
  "social-medicosocial/cmd-naf-11.md|CMD-NAF-11|social-medicosocial|V finale|strategie-gouvernance|SOC-C2-U1||C2-U1|entretien|grand-entretien|1udVIsrOm1Eb3GQLBZykGxG3D6NSokOoUcemFoexxMpA",
  "sante/cmd-naf-10.md|CMD-NAF-10|sante|V3|operations-organisation|SAN-C5-U1||C5-U1|chronique|chronique|1eQATanyDutSrlncbRZSRyCpdZ-vVdE3yEXgWl1RS1J4",
  "internationalisation/cmd-naf-09.md|CMD-NAF-09|internationalisation|V2|operations-organisation|INT-C3-U1||C3-U1|entretien|grand-entretien|1PRUVU3cZGNBA190yus-wKqVOs01xjJQIUYSl9n-mcDw",
  "ess/cmd-naf-08-ess-c2-u1-blanchisserie.md|CMD-NAF-08|ess|V3|strategie-gouvernance|ESS-C2-U1||C2-U1|chronique|chronique|1rgOoCasw9ZSpjVVjmeNJ4vaEZd3-Z3jqBcji0cU1WXA",
  "banque-financement/ban-c2-u1-fin-01-etienne-valbrun.md|BAN-C2-U1-FIN-01|banque-financement|Visa documentaire 09-11-2026|finance-investissement|BAN-C2-U1||C2-U1|entretien|grand-entretien|1fkbL5b_z8vbo-wAp23WIRaS88O9d273dijF1eXivOis",
  "tourisme/tou-c2-u1-fin-01-marianne-delmas.md|TOU-C2-U1-FIN-01|tourisme|Visa final — préproduction|finance-investissement|TOU-C2-U1||C2-U1|entretien|grand-entretien|15zkXSEbHToJNC0EMUj5j-hEETCxtOCz7aKjqiXVdsYg",
  "commerce/com-c3-u2-fin-01-chronique.md|COM-C3-U2-FIN-01|commerce|V5|finance-investissement|COM-C3-U2||C3-U2|chronique|chronique|",
  "eau-ressources/eau-c1-u1-str-01-chronique.md|EAU-C1-U1-STR-01|eau-ressources|V9|strategie-gouvernance|EAU-C1-U1|partage-eau-agriculture-potable|C1-U1|chronique|chronique|",
  "industrie/ind-c1-cst-01-brouillon.md|IND-C1-CST-01|industrie|V6.5|strategie-gouvernance|IND-C1-CST||CST|entretien|grand-entretien|1TigShKuNMtDNPFdxK-6BWxITN9EVic2TaceDyxV4V5g",
  "industrie/ind-c1-cst-02-brouillon.md|IND-C1-CST-02|industrie|V4.8|operations-organisation|IND-C1-CST||CST|chronique|chronique|1ZwRGUCmL-vvWiHQ_BV3DmF7x1COtwpEY9M6v9ggFTCw",
  "industrie/ind-c1-cst-03-brouillon.md|IND-C1-CST-03|industrie|V4.6|technologie-innovation|IND-C1-CST||CST|chronique|chronique|1WS5rawWSF6Sg9G8AW1AZL9kBqoALBBgeIwDsZPkR5Mk",
  "industrie/ind-c1-cst-04-brouillon.md|IND-C1-CST-04|industrie|V4.3|ressources-humaines-competences|IND-C1-CST||CST|chronique|chronique|1a46GCcQRGF4s37GoWOQ5TCXz2qj2YZspyrD-WpmP9Hc",
  "industrie/ind-c1-cst-05-brouillon.md|IND-C1-CST-05|industrie|V3.4|finance-investissement|IND-C1-CST||CST|entretien|grand-entretien|19qFZ8MAp65lv0pszDk-qu76N2XEUW664ZAvG1LhMjKA",
  "industrie/ind-c1-cst-regard-croise-01-brouillon.md|IND-C1-CST-RC-01|industrie|V3.2||IND-C1-CST||CST|regard-croise||1VNTWk4QeKWnF4QD55vMR9JQ7hxAuOm4eFDk3wSelHjY",
  "immobilier/imm-c1-rc-01-isabelle.md|IMM-C1-RC-01|immobilier|V7.5|finance-investissement|IMM-C1-RC||territoire-reconversion|entretien|grand-entretien|1K7eqLxylPO3bvrbnFrPUKkgLXio4pRdCnWCi3pHc2R0",
  "immobilier/imm-c1-rc-02-thomas.md|IMM-C1-RC-02|immobilier|V3|operations-organisation|IMM-C1-RC||territoire-reconversion|chronique|chronique|1eoYOI9tvNWgGuOIy423FyiXQcLCm1qEIkFl1nPIXj4U",
  "immobilier/imm-c1-rc-03-nathalie.md|IMM-C1-RC-03|immobilier|V2.4|strategie-gouvernance|IMM-C1-RC||territoire-reconversion|entretien|grand-entretien|1-sYvlfBLLCkPZXi45aoaA6eRNXtKPrlscR6ugf0KI9M",
  "immobilier/imm-c1-rc-04-karim.md|IMM-C1-RC-04|immobilier|V6.2|droit-regulation|IMM-C1-RC||territoire-reconversion|chronique|chronique|1oLB9VVh-iLdV5O19zTNCOO-vSFAgwp-nnnl28qb9fck",
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
  const tests = {code_editorial:r.code,cycle:r.cycle,conversation:r.code==='CMD-NAF-09'?'C3':r.code==='CMD-NAF-10'?'C5':r.code==='CMD-NAF-11'?'C2':r.code==='CMD-NAF-12'?'C5':r.code==='CMD-NAF-13'?'C4':r.code==='CMD-NAF-14'?'C7':r.code==='CMD-NAF-15'?'C5':r.code==='CMD-NAF-16'?'C4':r.code==='CMD-NAF-17'?'C2':['tourisme','banque-financement','ess'].includes(r.cycle)?'C2':r.cycle==='commerce'?'C3':'C1',source_document_version:r.version,unite_programmation:r.unit,contexte:r.context,format:r.format,statut_editorial:'prepublication'};
  if (r.perspective) { tests.perspective_principale=r.perspective; tests.genre_narratif=r.genre; }
  if (r.family) tests.famille_decisionnelle=r.family;
  for (const [key,value] of Object.entries(tests)) if (d[key] !== value) errors.push(r.code+' : '+key+' attendu '+JSON.stringify(value)+', trouvé '+JSON.stringify(d[key]));
  if (r.code === 'IMM-C1-RC-04' && d.title !== 'Immobilier : dix-sept pages pour rendre possible un quartier qui n’existait plus.') errors.push('Titre de Karim V6.2 différent du titre validé');
  if (d.published !== true) errors.push(r.code+' : consultation préproduction désactivée');
  if (r.driveId && !d.source_document_url?.includes('/document/d/'+r.driveId+'/')) {
    const actualDriveId = d.source_document_url?.match(/\/document\/d\/([^/]+)/)?.[1] ?? '(absent ou URL invalide)';
    errors.push(r.code+' : URL Drive ne correspond pas à la version verrouillée'
      +'\n   Version : '+r.version+' ; registre Drive ID : '+r.driveId+' ; Markdown Drive ID : '+actualDriveId
      +'\n   Action : vérifier la version de référence puis synchroniser source_document_version, source_document_url ET le registre check-classification.mjs avant le commit.');
  }
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
