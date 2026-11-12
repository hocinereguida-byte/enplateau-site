# Scènes d’Arbitrage — contrat de lecture des articles (harmonisation V11)

## Règle de présentation publique

Chaque article affiche **une seule mention principale** dans ses métadonnées : **statut du contenu · rubrique éditoriale**. La hiérarchie de lecture ne doit pas juxtaposer plusieurs synonymes du même genre.

| Donnée CMS inchangée | Mention publique affichée |
| --- | --- |
| `genre_narratif: chronique` ou `recit` | Fiction satirique · Raisons et déraisons |
| `genre_narratif: grand-entretien` ou `format: entretien` | Fiction satirique · Les interrogatoires |
| `format: regard-croise` | Analyse journalistique · Le fond du problème |

Les anciennes précisions **« Récit dialogué »** et **« Entretien fictif »** peuvent figurer dans l’explication du fonctionnement des formats, mais ne doivent plus être des badges successifs dans les fiches d’articles. Le statut de fiction demeure explicite pour éviter toute confusion avec des entretiens réels.

À côté de cette mention unique, seules figurent les **informations non redondantes** : perspective « Les angles morts : … », date de publication, éventuelle date de mise à jour.

## Portée technique

Ce changement ne concerne que le gabarit public `media-prototype/src/pages/media/articles/[...id].astro`. Ne modifier ni les manuscrits, ni `genre_narratif`, ni `format`, ni les signatures d’auteur, ni les URLs, ni le référencement des articles.

Les labels publics des menus, listes et cartes restent « Raisons et déraisons », « Les interrogatoires » et « Le fond du problème » ; ils n’ont pas besoin de répéter le statut à chaque mention.
