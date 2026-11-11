# Livraison Astro → Cloudflare Pages — préproduction

## Configuration attendue

- Dépôt : `hocinereguida-byte/enplateau-site` ; branche : `prototype-pages-cms`
- Racine du projet Cloudflare Pages : `media-prototype`
- Commande de compilation : `npm run build`
- Répertoire de sortie (relatif à la racine du projet) : `dist`
- Node.js : **22** (GitHub Actions). Configurer aussi `NODE_VERSION=22` dans Cloudflare Pages.
- Source des articles : `content/articles/**` à la racine du dépôt, chargée par Astro via `../content/articles`.
- Déploiement : conserver l'intégration GitHub native de Cloudflare Pages, **pas de deuxième pipeline de publication**.

## Contrôles automatisés

1. `.github/workflows/astro-quality.yml` : installation, classification, build Astro, contrôle du manifeste et présence de Marc D. dans le HTML compilé. Fonctionne sur push et pull request. Tant qu'il n'existe pas de `package-lock.json` validé, l'installation utilise `npm install` ; **ce n'est pas reproductible**. Priorité : générer et committer le lockfile dans `media-prototype/`, puis remplacer l'installation par `npm ci` et activer le cache npm.
2. `media-prototype/scripts/write-deployment-manifest.mjs` : produit `public/deployment.json` à chaque build avec `CF_PAGES_COMMIT_SHA` (ou SHA Git). Astro le copie dans `dist/deployment.json`.
3. `.github/workflows/verify-cloudflare-pages.yml` : après chaque push, attend que le site serve exactement le SHA du push et contrôle la page Marc. En cas d'échec, ne pas annoncer la livraison.

**Attention :** les contrôles GitHub sur la branche déployée s'exécutent après le push. Ils ne bloquent pas le déclenchement automatique de Cloudflare. Pour imposer un contrôle avant déploiement, créer une branche de travail et exiger le succès du contrôle sur pull request avant fusion dans `prototype-pages-cms`.

## Diagnostic d'un déploiement en échec

1. Cloudflare → Workers & Pages → `enplateau-site` → Déploiements → déploiement en échec → **Build logs**. Relever la première erreur et son contexte ; ne pas confondre réception du commit et réussite du build.
2. Comparer : branche de production, `NODE_VERSION`, racine `media-prototype`, commande `npm run build`, sortie `dist`, filtres de chemins, variables d'environnement.
3. GitHub → Actions → **Astro preproduction quality gate** : comparer la première erreur avec celle de Cloudflare. Un succès CI avec un échec Cloudflare indique souvent une divergence de configuration/environnement ; il ne la prouve pas à lui seul.
4. Après correction, vérifier `https://enplateau-site.pages.dev/deployment.json` et comparer son champ `commit` au dernier commit de la branche. Vérifier ensuite le HTML réellement servi, pas uniquement les métadonnées.
5. Contrôler la navigation Industrie et les quatre autres articles avant de déclarer l'incident clos.

## Réserves actuelles

- L'échec du build Cloudflare `e667b05` n'a pas encore été expliqué par les journaux.
- Les filtres Cloudflare et la version Node effective ne sont pas accessibles depuis GitHub.
- Aucun lockfile n'existe dans `media-prototype/` : l'installation n'est pas encore reproductible.
- Le succès du dernier build, du déploiement et du HTML servi reste à démontrer.


## Protocole obligatoire à chaque nouvelle version d'article

**Ne jamais changer uniquement le numéro de version.** Toute promotion Vn → Vn+1 doit être une transaction cohérente portant sur les trois champs de traçabilité :

1. Confirmer le document Drive exact retenu et son identifiant dans l'URL `/document/d/<ID>/`.
2. Mettre à jour dans le Markdown `source_document_version` et `source_document_url` sans altérer le corps littéraire ; conserver le titre préproduction validé et les visas réels.
3. Dans `scripts/check-classification.mjs`, mettre à jour **la version et le dernier champ Drive ID** de l'enregistrement correspondant au code éditorial.
4. Vérifier que l'identifiant Drive du registre est exactement celui de l'URL Markdown. Un document de visa, une fiche de suivi ou une version antérieure ne doit jamais remplacer l'identifiant du **manuscrit source**.
5. Avant toute fusion sur `prototype-pages-cms`, lancer depuis `media-prototype/` : `npm run check:classification` puis `npm run build`. Le workflow `astro-quality.yml` doit réussir sur la pull request. Ne pas contourner le verrou pour faire passer le build.
6. Après fusion, vérifier que `/deployment.json` porte le SHA attendu et que le contrôle post-déploiement confirme le HTML servi. Un commit ou un build CI réussi ne constitue pas une livraison Cloudflare.

**Incident Marc D. V6.5 (11 novembre 2026).** Le registre indiquait V6.5 mais conservait l'ID Drive V6.4 ; le Markdown pointait vers le nouveau document. Le contrôle a correctement bloqué le build Cloudflare. Correctif : synchronisation de l'ID Drive du registre (commit `81a6709f`). Le contrôle de classification signale désormais l'ID attendu et l'ID constaté avec l'action à effectuer.

**Prévention structurelle.** Faire les mises à jour éditoriales sur une branche de travail et ouvrir une pull request vers `prototype-pages-cms`. Activer une règle de protection exigeant la réussite du job `astro-build` avant fusion. Comme Cloudflare reçoit directement les pushes de la branche de production, un contrôle lancé après push ne peut pas empêcher un déploiement défectueux. La protection de branche est à activer dans GitHub par un administrateur si elle n'est pas déjà en place.
