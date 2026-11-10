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

**Déploiement :** aucun `deploy.yml` GitHub Actions n'est nécessaire. Cloudflare Pages est connecté à GitHub et déclenche automatiquement un build sur chaque commit de la branche `prototype-pages-cms`. Le terme « Production » dans Cloudflare désigne l'environnement de ce projet Pages, **pas** une autorisation éditoriale de publier sur le site public. Ne pas fusionner vers `main`.

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

## Procédure obligatoire — mise à jour d'un manuscrit en préproduction (10 novembre 2026)

**Incident de référence :** Marc V6.4 ne s'affichait pas, car Sophie V4.1 avait été intégrée au Markdown sans mettre à jour la version et l'identifiant Drive verrouillés dans `scripts/check-classification.mjs`. Cloudflare récupérait correctement les commits, mais `npm run check:classification` interrompait le build Astro. La dernière version déployée restait visible.

### Avant tout commit

1. Identifier le manuscrit Drive de référence et son **statut réel** (travail sans visa, visa interne, etc.). Une mise en préproduction ne vaut jamais visa public.
2. Modifier le fichier `../content/articles/<cycle>/<article>.md` : **texte intégral**, titre, chapô, signature, présentation Markdown, `source_document_version`, `source_document_url`, mentions de validation et d'autorisation.
3. **Dans le même lot de changements**, modifier l'entrée correspondante dans `scripts/check-classification.mjs` : version, identifiant Drive, et, uniquement si le classement éditorial a été validé, cycle, conversation, contexte, genre, perspective et unité. Ne jamais changer le registre pour masquer un désaccord non résolu avec le manuscrit.
4. Contrôler l'absence de doublon de perspective dans la même unité, et conserver `autorisation_publication: "preproduction_uniquement"` tant qu'un visa public n'existe pas.
5. Exécuter depuis `media-prototype` : `npm run check:classification`, puis `npm run build`. **Ne pas pousser de modification éditoriale sans prévalidation réussie**. Si l'environnement d'exécution n'est pas disponible, indiquer explicitement que le build n'a pas été testé et vérifier impérativement les journaux Cloudflare après commit.

### Après le commit

6. Vérifier dans Cloudflare Pages que le **SHA du commit** apparaît et que les étapes `clone repo`, `build` et `deploy` réussissent. Une connexion GitHub active ne signifie pas qu'un déploiement a réussi.
7. Ouvrir la **page HTML de préproduction**, pas le lien du fichier GitHub ; contrôler titre, version, paragraphes, dialogues en gras, notice méthodologique, signature et navigation par cycle / conversation / contexte / genre / perspective.
8. Comparer des passages distinctifs au document Drive de référence (début, milieu, fin), notamment les chiffres et la chute. En cas de désaccord, considérer le déploiement comme **non terminé**, même si le commit a réussi.
9. Ne jamais modifier la branche `main` ni autoriser la publication publique sans décision éditoriale explicite.

### Diagnostic rapide en cas d'échec

- `Échec classement éditorial V6` : comparer le **manuscrit ET son entrée de registre** ; corriger ensemble les métadonnées et le verrou de version / ID Drive. Ne pas supprimer ou désactiver le contrôle.
- Échec après `astro build` : lire la première erreur de compilation, corriger le code et reconstruire.
- Build réussi, page ancienne : vérifier SHA, branche, répertoire racine `media-prototype`, sortie `dist`, puis cache / URL de préproduction.
- Les avertissements `npm warn deprecated` ne constituent pas à eux seuls une cause d'échec.

**Configuration observée :** Node.js 22, commande Cloudflare `npm run build`, répertoire racine `media-prototype`, sortie `dist`. La compilation inclut le contrôle de classification.

**Règle de clôture :** *manuscrit Drive ↔ Markdown CMS ↔ registre ↔ build réussi ↔ page préproduction vérifiée*. Ne déclarer « intégré en préproduction » qu'après ce dernier contrôle.
