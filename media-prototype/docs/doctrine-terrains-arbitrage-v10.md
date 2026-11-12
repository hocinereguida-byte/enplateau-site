# Scènes d’Arbitrage — Doctrine des 20 terrains d’arbitrage (V10)

**Décision du 12 novembre 2026, remplaçant dans la présentation publique la notion de « secteur » appliquée aux cycles.**

## Définition et principe directeur

Un **terrain d’arbitrage** est un système d'acteurs, d'activités, de règles et de décisions économiques interdépendantes. Il peut correspondre à une chaîne de valeur, mais ne se limite pas à la succession linéaire de ses maillons. Il inclut les fonctions transversales (droit, financement, organisation, conception, travail, technique), la décision publique, les usages et les effets sur les territoires.

Le terrain se définit par les **arbitrages qui structurent la création, la répartition et parfois la destruction de valeur**, et non par l'appartenance de tous ses acteurs à une même branche statistique. Un architecte, une collectivité, un juriste, un promoteur, un financeur et des habitants participent ainsi aux arbitrages d'un même terrain immobilier sans exercer le même métier.

Une perspective (finance, droit, opérations, etc.) traverse le terrain : elle n'est pas un corps de métier ni un silo exclusif. Une contribution est rattachée à un terrain principal pour l'orientation, mais peut mobiliser différentes fonctions et perspectives sans être enfermée dans un périmètre administratif.

## Langage public

- **Six grands univers** : familles regroupant les terrains.
- **Là où ça se joue** : intitulé de navigation préservé.
- **20 terrains d’arbitrage** : terme générique public remplaçant « 20 secteurs ».
- **Les sujets qui fâchent** : grandes questions économiques traversant le terrain.
- **Les cas de figure** : situations concrètes de décision.
- **Les angles morts** : huit perspectives transversales.
- **Les formats** : deux fictions satiriques et une analyse journalistique autonome.

Les noms éditoriaux V8 des vingt cycles ne changent pas. Chacun reçoit une **description de périmètre** à plusieurs fonctions et acteurs, indicative et non exhaustive. Dans le menu et les pages de cycle, elle remplace le sous-titre sectoriel technique.

## Les vingt périmètres indicatifs

| Cycle CMS | Signature éditoriale publique | Acteurs et fonctions couverts (exemples non exhaustifs) |
| --- | --- | --- |
| immobilier | La pierre et les promesses | Foncier, urbanisme, architecture, droit, construction, financement, collectivités |
| energie | Sous haute tension | Production, réseaux, fourniture, usages, régulation, investissement |
| eau-ressources | Rien ne se perd | Gestion de l’eau, matières, traitement, réemploi, collectivités, usages |
| mobilites | Ça doit circuler | Infrastructures, transport, logistique, aménagement, usagers, collectivités |
| industrie | La machine et les hommes | Conception, production, sous-traitance, fournisseurs, logistique, investissement |
| agriculture | La terre et les comptes | Exploitations, transformation, distribution, financement, ressources, régulation |
| commerce | Tout doit partir | Approvisionnement, distribution, plateformes, proximité, consommateurs |
| tourisme | Le prix du dépaysement | Hébergement, restauration, mobilités, loisirs, territoires, clientèles |
| services-entreprises | On s’occupe de tout | Conseil, prestations, sous-traitance, fonctions support, entreprises clientes |
| banque-financement | L’argent des autres | Épargne, crédit, assurance, investissement, régulation, entreprises |
| ess | La solidarité fait ses comptes | Associations, coopératives, bénéficiaires, financement, gouvernance |
| internationalisation | Sans frontières, ou presque | Exportateurs, fournisseurs, logistique, douanes, financement, marchés |
| sante | Soigner les comptes | Patients, soignants, établissements, financement, prévention, institutions |
| social-medicosocial | La solidarité sous conditions | Personnes accompagnées, professionnels, structures, familles, financements |
| education-formation | Tout est à apprendre | Apprenants, enseignants, établissements, employeurs, formation continue |
| emploi-travail | Travail en cours | Travailleurs, employeurs, recrutement, formation, protection sociale |
| action-publique | Les affaires publiques | État, collectivités, administration, opérateurs, citoyens, financement |
| culture-medias | La culture a un prix | Création, production, diffusion, médias, sport, publics, financement |
| numerique | Derrière les écrans | Infrastructures, données, plateformes, usages, entreprises, régulation |
| recherche-innovation | L’avenir en chantier | Laboratoires, financement, entrepreneuriat, transfert, marchés |

## Garanties de compatibilité et de conception

- Conserver les codes `cycle`, les 20 entrées de `cycleCatalogue`, les regroupements `cycleFamilies`, la classification interne des articles, les métadonnées et tous les permaliens existants.
- Conserver les libellés économiques historiques dans `cycleCatalogue[].label` et `publicCycleTechnicalLabel` pour l'indexation, les recherches, le CMS et la correspondance documentaire.
- Les nouveaux périmètres publics sont centralisés dans `editorialCycleScopes` et `publicCycleScope`, avec compatibilité de l'alias `numerique-telecom`.
- Dans le menu, les cartes de rubriques, les pages des terrains et les filtres, préférer la signature éditoriale et le périmètre multi-acteurs ; ne plus utiliser « secteur » pour **définir le niveau cycle**.
- Ne pas réécrire les anciens manuscrits, les textes sources des cycles, les titres des vingt terrains, les vingt-six contextes ni leurs codes. Cette V10 change l'orientation et la doctrine, pas les décisions éditoriales passées.
- En amont de tout futur article, expliciter la chaîne de décisions, les acteurs de création de valeur, leurs intérêts et contraintes ; éviter de traiter un terrain comme un domaine professionnel fermé.

## Recette

Vérifier la navigation mobile et desktop, la page d'accueil et les vingt cartes du répertoire, les vingt pages de terrain et leurs sous-titres, le catalogue et la recherche par ancien nom sectoriel, les pages de sujets, les recommandations et la ligne éditoriale. Vérifier la compilation Astro et l'absence de liens cassés.
