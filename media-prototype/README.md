# Moteur d'articles — prototype Astro isolé

## Objectif
Ce dossier s'ajoute au dépôt `enplateau-site`, **branche `prototype-pages-cms` uniquement**. Ne pas fusionner vers `main`.

## Installation locale (ordinateur équipé de Node.js)
```bash
cd media-prototype
npm install
npm run dev
```
Le site prototype utilise par défaut http://localhost:4321/media/. Pour une compilation : `npm run build`.

**Important :** aucun `deploy.yml` n'est fourni, aucun changement de réglage GitHub Pages, pas de publication automatique.

Le moteur lit directement `../content/articles/industrie/*.md` et `../content/articles/immobilier/*.md` créés par Pages CMS.
Il exclut volontairement la collection historique `content/articles/` et tout brouillon. Un article doit avoir `published: true`, `statut_editorial: publie`, une date de publication passée et un chapô, plus une classification valide. Vérification des champs renforcée avant mise en production.

## À compléter avant intégration
- Génération des véritables pages conversations (bloc 4, actuellement liste non cliquable).
- Affichage de l'image, SEO, partage, lecture audio et thème existant approfondis.
- Gestion de l'heure programmée : planification/rebuild via GitHub Actions à configurer après vérification du fuseau et de l'édition.
- Contrôle de l'anonymisation et validation éditoriale manuels.
- Préproduction isolée et procédure de déploiement validée.

## Correctif Pages CMS
Le `.pages.yml` proposé V4.1 retire seulement la seconde déclaration du champ `responsabilites_perimetre`, présent deux fois dans V4. Il est fourni séparément et ne doit être installé que sur la branche prototype.
