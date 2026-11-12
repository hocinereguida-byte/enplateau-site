# Scènes d’Arbitrage — Navigation UX V4

**Statut : proposition technique sur branche isolée, non publiée.**
Date : 12 novembre 2026.

## Objectif
Adapter la navigation au lancement des 20 cycles avec un stock de publications inégal et une cible de 20 nouveaux articles par semaine. La navigation publique ne doit présenter que les articles et conversations effectivement disponibles, sans inventer des publications ou anticiper des visas éditoriaux.

## Modifications appliquées
- `MediaHeader.astro` : navigation « À la une / Cycles / Conversations / Genres / Le média / Rechercher » ; genres publics Chroniques, Grands Entretiens et Regards croisés. Les huit perspectives restent accessibles depuis la page Perspectives et le catalogue.
- `pages/media/index.astro` : grille des 20 cycles générée depuis `cycleFamilies` et `cycleCatalogue`, décompte dynamique par cycle à partir des contenus filtrés par `isPublic` et `validClassification`. Remplacement des trois cartes de genre.
- `pages/media/conversations/index.astro` : aucune conversation sans publication dans le répertoire public ; filtre Cycle issu des conversations réellement ouvertes.
- `pages/media/publications/index.astro` : filtre Cycle dérivé des 20 cycles de référence ; retrait de « Récit » parmi les genres publics.
- `pages/media/scenes/index.astro` : uniquement Chroniques et Grands Entretiens comme fictions.
- `content.config.ts` : 20 identifiants de cycle canoniques acceptés dans le front matter. L'ancien identifiant `numerique-telecom` reste accepté pour éviter de casser des articles hérités.

## Invariants conservés
- Aucun texte, titre, auteur, catégorie d'article ni statut de publication modifié.
- Aucune modification de `main` ni de `prototype-pages-cms`.
- Le modèle conserve le champ historique `genre_narratif=recit` en lecture pour permettre une **migration éditoriale contrôlée**. Il ne constitue plus un genre de navigation publique ; les éventuels manuscrits hérités doivent être requalifiés au cas par cas.
- La visibilité des publications suit la fonction actuelle `isPublic`, associée à `validClassification`. Cette condition technique ne remplace pas le visa éditorial et documentaire obligatoire.
- Les 20 cycles restent visibles ; une conversation n'apparaît dans le répertoire public qu'avec au moins un article filtré comme public.
- Les URLs historiques restent inchangées.

## Vérifications avant intégration en préproduction
1. Exécuter `cd media-prototype && npm install --no-audit --no-fund && npm run build` sur une copie de la branche.
2. Exécuter `node scripts/check-preview.mjs` après compilation.
3. Examiner sur écran large et mobile la barre principale, les menus imbriqués des six familles et la grille des cycles ; vérifier les parcours au clavier.
4. Tester une conversation avec plusieurs publications (Industrie / Immobilier), une conversation avec une seule publication et une conversation sans article.
5. Tester les filtres croisés : recherche + Cycle + Conversation + Genre + Perspective, et le nombre de résultats.
6. Vérifier que les 20 liens de cycles aboutissent à une route valide et que les articles non publiés n'apparaissent ni dans les cartes ni dans les recommandations.
7. Contrôler les anciennes occurrences de « Récit » dans les composants et données hérités avant mise en ligne.
8. Vérifier les métadonnées et les mentions « Fiction économique » / « Analyse documentée » pour les cartes et extraits de partage.
9. Vérifier les règles Cloudflare du projet : cette branche doit rester sans déploiement public automatique.
10. Demander un accord explicite avant de fusionner vers `prototype-pages-cms`, puis refaire les contrôles de rendu ; tout passage vers `main` nécessite une autorisation distincte.

## Points ouverts
- La compilation Astro n'a pas encore été exécutée dans cet environnement (dépendances indisponibles en local).
- Le schéma CMS possède toujours des alias historiques ; leur migration est une opération distincte de la navigation.
- Les correspondances exactes des conversations Agriculture doivent suivre le manifeste actuel, sans utiliser des libellés provisoires de maquette comme faits éditoriaux.
- L'état effectif des publications doit rester déterminé par le contenu du dépôt au moment du déploiement, pas par le JSON de démonstration V3.
