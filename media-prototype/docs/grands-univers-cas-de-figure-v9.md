# Scènes d’Arbitrage — V9 : six grands univers et 26 cas de figure

Décision éditoriale validée le 12 novembre 2026. **Renommage public uniquement** : les classifications, les codes, les statuts, les dates de publication, les contenus et les permaliens ne changent pas.

## Six grands univers

| Famille de référence | Nom public |
| --- | --- |
| Territoires & ressources | Chacun son terrain |
| Production & échanges | Faire tourner la boutique |
| Économie & entreprises | Les affaires sont les affaires |
| Société & services essentiels | La vie, mode d'emploi |
| Institutions & vie collective | Au nom de tous |
| Technologies & transformations | Demain, c'est promis |

Les familles continuent à regrouper exactement les mêmes 20 cycles/rubriques. Les noms techniques restent affichés discrètement comme aides à l'orientation. Les noms publics sont centralisés dans `publicFamilyNames` et `publicFamilyLabel`.

## Requalification du niveau « contextes »

Le nom public du niveau est **Les cas de figure**. Il désigne des circonstances économiques et décisionnelles concrètes, avec une portée plus étroite que « Les sujets qui fâchent » et sans préjuger de la chute des récits satiriques.

| Cycle | Code de contexte inchangé | Libellé public |
| --- | --- | --- |
| immobilier | zone-tendue | Quand les mètres carrés manquent |
| immobilier | zone-croissance | Quand la ville grandit |
| immobilier | territoire-reconversion | Faire du neuf avec l'ancien |
| industrie | CST | La croissance déborde |
| industrie | ASC | Changer sans avoir le choix |
| industrie | RSS | Tout revoir pour continuer |
| industrie | C3-U1 | Le fournisseur qu'on ne peut pas remplacer |
| agriculture | engagement-productif-longue-duree | Parier sur les prochaines années |
| agriculture | arboriculture-sous-revue-strategique | Rentable, et alors ? |
| agriculture | maraichage-debouches-concurrents | À qui vendre la récolte ? |
| agriculture | cereales-recolte-excedentaire | La récolte de trop ? |
| eau-ressources | C1-U1 | Quand l'eau se rationne |
| eau-ressources | C1-U2 | L'été sous pression |
| commerce | C3-U2 | Des invendus pour financer la suite |
| tourisme | C2-U1 | Toute une année en une saison |
| banque-financement | C2-U1 | Rentable, mais à court de trésorerie |
| ess | C2-U1 | Utile, mais à perte |
| internationalisation | C3-U1 | Quand tout dépend d'une région |
| sante | C5-U1 | La sortie, et après ? |
| social-medicosocial | C2-U1 | La place qu'on attend |
| education-formation | C5-U1 | L'IA entre en classe |
| emploi-travail | C4-U1 | Revenir à l'emploi, mais comment ? |
| action-publique | C7-U1 | Tous les voyants au vert, et alors ? |
| culture-medias | C5-U1 | La musique cherche son modèle |
| numerique-telecom | C4-U1 | L'IA au bout du fil |
| recherche-innovation | C2-U1 | Un prototype, mais pour qui ? |

## Six niveaux de lecture publique

1. **Les grands univers** — six regroupements.
2. **Là où ça se joue** — vingt rubriques/secteurs.
3. **Les sujets qui fâchent** — grandes questions éditoriales, code CMS `conversation`.
4. **Les cas de figure** — contextes décisionnels, code CMS `contexte`.
5. **Les angles morts** — huit perspectives transversales.
6. **Les formats** — Raisons et déraisons, Les interrogatoires, Le fond du problème.

La logique est transversale : un angle et un format qualifient chaque contribution ; ils ne créent pas des niveaux supplémentaires dans son chemin d'URL.

## Règles de compatibilité

- Les six familles, leurs codes et leur composition restent identiques dans `cycleFamilies`.
- Les 26 `contexts` restent la **source technique de vérité**. `editorialContextNames`, `publicContextLabel` et `publicContexts` ne servent qu'à l'affichage.
- Les pages utilisent les intitulés éditoriaux dans les titres, filtres, menus, fils d'Ariane et cartes. Les libellés techniques demeurent accessibles pour rechercher et désambiguïser.
- Les routes historiques `/media/cycles/`, `/conversations/`, `/contextes/` et les permaliens des articles ne changent pas.
- Les articles anciens du cycle `numerique-telecom` utilisent toujours leur code historique ; les filtres d'interface regroupent son affichage avec `numerique`.
- Aucun article rédigé, ressource photo, signature auteur ni valeur CMS n'est réécrit.

## Recette

Vérifier le menu mobile ouvert sur chacune des six familles ; la page d'accueil ; le catalogue des vingt rubriques ; une page de cycle ; une page de sujet avec ses cas de figure ; une page de contexte ; les fils d'Ariane d'articles ; les recherches sur nouveau et ancien noms ; les filtres de contexte au sein d'un secteur et sans secteur présélectionné ; la compilation Astro.
