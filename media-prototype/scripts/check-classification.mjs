// Verrou de classement éditorial V6 des manuscrits en préproduction.
// Registre des versions actuellement retenues sur Google Drive pour la consultation de préproduction.
import { readFileSync, readdirSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../../content/articles');
const records = [
  "recherche-innovation/cmd-naf-17.md|CMD-NAF-17|recherche-innovation|V1.1|strategie-gouvernance|REC-C2-U1||C2-U1|entretien|grand-entretien|1V4oP-WmjZF5DhhGP9j_9y0mn9g6tmZn4NmayAKjDgKc",
  "numerique-telecom/cmd-naf-16.md|CMD-NAF-16|numerique-telecom|V2.0|operations-organisation|NUM-C4-U1||C4-U1|chronique|chronique|15pWJlH0lKrJkEscSQS-aMVye2h3CiNFW6uL_UyYJ2jo",
  "culture-medias/cmd-naf-15.md|CMD-NAF-15|culture-medias|V1.0|finance-investissement|CUL-C5-U1||C5-U1|entretien|grand-entretien|1v2s-obgiGP70_l44QP6w4gEXXGVdWd20kGIeik6nBV4",
  "action-publique/cmd-naf-14.md|CMD-NAF-14|action-publique|V4|droit-regulation|ACT-C7-U1||C7-U1|chronique|chronique|1hBoIuH0EpzdCKn_Ux3W-qs3Uw2n-bP9_r1I3WjQP8N0",
  "emploi-travail/cmd-naf-13.md|CMD-NAF-13|emploi-travail|V3|finance-investissement|EMP-C4-U1||C4-U1|entretien|grand-entretien|1iQP_5UgcqYPgvJGRqm1Fv3g_8qjPDp7P3acXx9NLMBk",
  "education-formation/cmd-naf-12.md|CMD-NAF-12|education-formation|V2.1|strategie-gouvernance|EDU-C5-U1||C5-U1|chronique|chronique|1WCeKO93VF3PmCLOofcxyL322Ls9yQV1YOK9sWYpUuxE",
  "social-medicosocial/cmd-naf-11.md|CMD-NAF-11|social-medicosocial|V2.0|strategie-gouvernance|SOC-C2-U1||C2-U1|entretien|grand-entretien|1XjkBU8Znsj_wR8BQAPxvSwiOvc3TiK-7HXX9eizDJkw",
  "sante/cmd-naf-10.md|CMD-NAF-10|sante|V3|operations-organisation|SAN-C5-U1||C5-U1|chronique|chronique|1eQATanyDutSrlncbRZSRyCpdZ-vVdE3yEXgWl1RS1J4",
  "internationalisation/cmd-naf-09.md|CMD-NAF-09|internationalisation|V2.0|operations-organisation|INT-C3-U1||C3-U1|entretien|grand-entretien|1UOuBFVy2ZJWKcyWmuTAlJ3gEcX0_FBIHXOgQeGTeBtc",
  "ess/cmd-naf-08-ess-c2-u1-blanchisserie.md|CMD-NAF-08|ess|V3|strategie-gouvernance|ESS-C2-U1||C2-U1|chronique|chronique|1rgOoCasw9ZSpjVVjmeNJ4vaEZd3-Z3jqBcji0cU1WXA",
  "banque-financement/ban-c2-u1-fin-01-etienne-valbrun.md|BAN-C2-U1-FIN-01|banque-financement|Visa documentaire 09-11-2026|finance-investissement|BAN-C2-U1||C2-U1|entretien|grand-entretien|1fkbL5b_z8vbo-wAp23WIRaS88O9d273dijF1eXivOis",
  "tourisme/tou-c2-u1-fin-01-marianne-delmas.md|TOU-C2-U1-FIN-01|tourisme|V1.1|finance-investissement|TOU-C2-U1||C2-U1|entretien|grand-entretien|1nuJFpKT6onviW08bmAv9B5lV8FzH4-3rFanZDe64it0",
  "commerce/com-c3-u2-fin-01-chronique.md|COM-C3-U2-FIN-01|commerce|V2.0|finance-investissement|COM-C3-U2||C3-U2|chronique|chronique|1LLRhaXRMJkNlqslr4V-2tsWevWA4zyyukufG7izuyek",
  "eau-ressources/eau-c1-u1-str-01-chronique.md|EAU-C1-U1-STR-01|eau-ressources|V2.0|strategie-gouvernance|EAU-C1-U1|partage-eau-agriculture-potable|C1-U1|chronique|chronique|1Nbp0-kbA5oPlXvWh28LrMdtNCiHslo3FHjfskMUzYIc",
  "industrie/ind-c1-cst-01-brouillon.md|IND-C1-CST-01|industrie|Variante populaire harmonisée finale|strategie-gouvernance|IND-C1-CST||CST|entretien|grand-entretien|15vOdDh067Uiv-vooxH-WnKLQNEqc9dDD-tcliHxxDMg",
  "industrie/ind-c1-cst-02-brouillon.md|IND-C1-CST-02|industrie|V9.2|operations-organisation|IND-C1-CST||CST|chronique|chronique|1-ekpGzW9BFNRFKCE6XUzc_LZRwGQ6o99BLVYsn1k4zs",
  "industrie/ind-c1-cst-03-brouillon.md|IND-C1-CST-03|industrie|V4.2|technologie-innovation|IND-C1-CST||CST|chronique|chronique|1IdRy7bjsqSVxCbvz7G67H6GwAeMEQff6v7rCjN2ngcs",
  "industrie/ind-c1-cst-04-brouillon.md|IND-C1-CST-04|industrie|V8.2|ressources-humaines-competences|IND-C1-CST||CST|chronique|chronique|1QsesnXTveqmM5EzFTlHhpVTitNf8A8czLalWJyOx73o",
  "industrie/ind-c1-cst-05-brouillon.md|IND-C1-CST-05|industrie|V1.9|finance-investissement|IND-C1-CST||CST|entretien|grand-entretien|1r5ydPbdkyUOf4iT58_T-ZtMRlE5fznqWrEETuEKzR50",
  "industrie/ind-c1-cst-regard-croise-01-brouillon.md|IND-C1-CST-RC-01|industrie|V3.2||IND-C1-CST||CST|regard-croise||1VNTWk4QeKWnF4QD55vMR9JQ7hxAuOm4eFDk3wSelHjY",
  "immobilier/imm-c1-rc-06-alain.md|IMM-C1-RC-06|immobilier|V4.4|finance-investissement|IMM-C1-RC||territoire-reconversion|entretien|grand-entretien|1kzj6pqe8jXXBTK-Iu1lb9wXreJ5IhuPdmccPNNry_IY",
  "immobilier/imm-c1-rc-02-thomas.md|IMM-C1-RC-02|immobilier|V1.7|operations-organisation|IMM-C1-RC||territoire-reconversion|chronique|chronique|1nfw5jh7_47jsEcyuS2vCQ3kdK9e7WOeY6t65V07DdPY",
  "immobilier/imm-c1-rc-07-patrick.md|IMM-C1-RC-07|immobilier|V9.2|strategie-gouvernance|IMM-C1-RC||territoire-reconversion|chronique|chronique|1Vfen50QhVHC-1wEZniKACQEIMrv4ugN7wsAYUv_Lp3M",
  "immobilier/imm-c1-rc-04-karim.md|IMM-C1-RC-04|immobilier|V1.3|droit-regulation|IMM-C1-RC||territoire-reconversion|entretien|grand-entretien|1cqzdHlJtcaKzj7SiSgbsuDhKEmPGLr8iBdNOIcSdbiE",
  "immobilier/imm-c1-rc-05-caserne.md|IMM-C1-RC-05|immobilier|V6.5|territoires-politiques-publiques|IMM-C1-RC||territoire-reconversion|chronique|chronique|1Q_o_ugtXNoL--Z9zTFKdyNi6G03eylvh8DVZSMTYgLI",
  "immobilier/imm-c1-rc-regard-01.md|IMM-C1-RC-REGARD-01|immobilier|V2.4||IMM-C1-RC||territoire-reconversion|regard-croise||1R1L4TWX5XasFxNfIh0yLAHuNKchMEy5Sh39_g0EDOjo",
  "agriculture/agr-c1-a02-chronique-vergers.md|AGR-C1-A02|agriculture|V2.3|strategie-gouvernance|AGR-C1-A|engagement-productif-longue-duree|arboriculture-sous-revue-strategique|chronique|chronique|1Nw62IijZs-rUCqlCqCpcXCz-4AbbKL7LSzwBcQ943yE",
  "agriculture/agr-c1-b01-maraichage.md|AGR-C1-B01|agriculture|V2.1|strategie-gouvernance|AGR-C1-B|debouches-variables|maraichage-debouches-concurrents|entretien|grand-entretien|1uNJRbq0DN20NxWjuHPYy-svkM61a1_w2dbOgR96wSBU",
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
  if (r.code === 'IMM-C1-RC-04' && d.title !== "Un promoteur veut acheter des murs. Il aurait préféré qu'ils soient vides.") errors.push('Titre Édouard V1.2 bis différent du titre validé');
  if (d.published !== true) errors.push(r.code+' : consultation préproduction désactivée');
  const actualDriveId = d.source_document_url?.match(/^https:\/\/(?:docs\.google\.com\/document|drive\.google\.com\/file)\/d\/([A-Za-z0-9_-]+)(?:\/|$)/)?.[1] ?? '(absent ou URL invalide)';
  if (r.driveId && actualDriveId !== r.driveId) {
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
