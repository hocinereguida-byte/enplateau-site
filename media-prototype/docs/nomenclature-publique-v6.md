# Scènes d’Arbitrage — nomenclature publique V6

> Décision de préproduction du 12 novembre 2026. Les labels éditoriaux peuvent évoluer sans changer les identifiants internes du CMS ni les permaliens.

## Quatre portes d’entrée

| Rubrique publique | Catégorie interne | Rôle |
| --- | --- | --- |
| **Là où ça se joue** | cycles | Vingt secteurs économiques classés en six familles |
| **Les sujets qui fâchent** | conversations | Grandes questions qui réunissent plusieurs contributions et perspectives |
| **Les angles morts** | perspectives / lectures | Huit points de vue transversaux sur les décisions |
| **Les formats** | genres / format | Modes d’écriture et contrat de lecture |

## Les trois formats publics

- **Comédies économiques** : code interne `chronique`; fictions narratives courtes, avec dialogues et ressort satirique (plafond éditorial de 7 000 caractères, non appliqué par ce changement de site).
- **Grands Entretiens** : code interne `grand-entretien` et généralement `format: entretien`; entretiens fictifs satiriques.
- **Le fond du problème** : code interne `format: regard-croise`; analyses journalistiques autonomes et sourcées, **non satiriques**. Elles questionnent le mécanisme économique et ne servent pas de justification factuelle aux récits inventés.

La rubrique `/media/scenes/` regroupe les deux formats de fiction ; `/media/regards-croises/` regroupe les analyses. Les permaliens existants restent inchangés.

## Huit angles morts

| Code stable dans le CMS | Libellé public |
| --- | --- |
| `strategie-gouvernance` | Tout est sous contrôle |
| `finance-investissement` | Les comptes sont bons |
| `droit-regulation` | Dans les clous |
| `operations-organisation` | Sur le papier, ça marche |
| `technologie-innovation` | La solution cherche son problème |
| `ressources-humaines-competences` | L’humain, bien entendu |
| `energie-ressources` | On a de la marge |
| `territoires-politiques-publiques` | Tout le monde a été consulté |

Les libellés techniques de `readings` ne changent pas. `publicPerspectives` est uniquement une table de présentation. Les articles `regard-croise` n’ont pas de perspective principale obligatoire ; aucun lien vers un angle vide ne doit être rendu pour ces analyses.

## Compatibilité et recette

- Aucun changement des propriétés `cycle`, `conversation`, `contexte`, `genre_narratif`, `lecture_principale` ou `perspective_principale` dans les contenus.
- Aucun changement des identifiants de routes (`/media/cycles/`, `/media/conversations/`, `/media/lectures/`, `/media/regards-croises/`).
- Aucun manuscrit Markdown, date, statut de publication ou signature ne doit être altéré.
- Tester : menu mobile/desktop, catalogue filtré, page des 20 secteurs, sujet publié, angle mort, format fiction, analyse journalistique, fiche article et sa navigation transversale.
- Sauvegarde V5 : branche instantanée créée avant fusion de V6.
