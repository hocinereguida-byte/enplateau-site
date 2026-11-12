# Scènes d'Arbitrage — Nomenclature publique V7

**Décision du 12 novembre 2026 — succède à la nomenclature V6.**

## Rubriques de navigation

- **Là où ça se joue** : 20 secteurs économiques, en 6 familles. Code CMS : `cycle`.
- **Les sujets qui fâchent** : les grandes questions traitées par plusieurs contributions. Code CMS : `conversation`.
- **Les angles morts** : huit perspectives et leurs noms satiriques. Codes CMS inchangés.
- **Les formats** : trois contrats de lecture ci-dessous.

## Contrats de lecture

### 1. Raisons et déraisons

- Remplace l'ancien **Comédies économiques**, plus proche d'une œuvre de spectacle ou de fiction longue que de la presse.
- **Rubrique de récits satiriques courts**, le plus souvent écrits avec un **narrateur extérieur**, des scènes, des personnages inventés et des dialogues.
- Le **genre affiché** est « Raisons et déraisons » et le **statut de contenu** « Fiction satirique » ; la présentation peut préciser « récit dialogué ».
- Les codes historiques `genre_narratif: chronique` et `genre_narratif: recit` continuent à être reconnus ; aucune migration des manuscrits.
- Plafond rédactionnel actuel : **7 000 caractères** par article (sans introduction de nouveau contrôle technique).

### 2. Les interrogatoires

- Remplace l'ancien **Grands Entretiens**.
- **Entretiens satiriques fictifs** conduits par le personnage Jean Toksic, qui questionne, relance et expose des contradictions, parfois avec une obsession absurde de l'aveu et du détecteur de mensonges.
- L'interrogateur lui-même n'est pas omniscient ; sa propre démesure et ses tics peuvent aussi produire le ridicule.
- Reste rattaché à `genre_narratif: grand-entretien` et, le cas échéant, `format: entretien`.
- La mention **Fiction satirique** doit rester explicite : ni l'entretien ni le personnage interrogé ne doivent être pris pour une interview réelle.

### 3. Le fond du problème

- Inchangé ; `format: regard-croise` dans les données.
- **Analyse journalistique autonome, sourcée et non satirique**, confrontant arguments, faits et mécanismes économiques derrière le sujet traité.
- N'atteste pas l'existence des personnages ou événements des deux formats de fiction.

## URLs et CMS

Les chemins existants, notamment `/media/scenes/#chronique`, `/media/scenes/#grand-entretien` et `/media/regards-croises/`, restent inchangés. Même logique pour tous les permaliens d'articles, identifiants `cycle`, `conversation`, `genre_narratif` et classifications. Aucun manuscrit, date, statut ni signature auteur n'est modifié.

## Présentation au lecteur

- Le **nom de rubrique** promet une identité éditoriale mémorable, sans prétendre décrire à lui seul la forme littéraire.
- Chaque article affiche une **qualification explicite** : « Fiction satirique » pour Raisons et déraisons et Les interrogatoires ; « Analyse journalistique » pour Le fond du problème.
- Dans les pages de sélection, l'étiquette publique remplace les anciens noms ; les filtres conservent les anciennes valeurs techniques dans leurs attributs HTML pour préserver le comportement.
- L'accueil, les menus, les pages formats, les listes, les métadonnées SEO et les pages institutionnelles utilisent les nouveaux noms.

**V6** : `nomenclature-publique-v6.md`, document d'archive conservé pour la traçabilité.
