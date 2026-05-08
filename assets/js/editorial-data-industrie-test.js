/* En Plateau — Référentiel éditorial centralisé — gabarit unique landing pages — V13 */

window.EN_PLATEAU_EDITORIAL_DATA = {
  "version": "2026-05-08-v13-complementaires-contextuels-complets",
  "status": "test",
  "sourceDocument": "programme_editorial_industrie.docx",
  "scope": {
    "cycle": "IND",
    "includedReadings": [
      "STRATEGIQUE",
      "FINANCIERE",
      "JURIDIQUE"
    ],
    "note": "Référentiel test pour gabarit unique de landing page. Les landing pages sont pilotées par body[data-landing]."
  },
  "notes": {
    "stableCodesRequired": true,
    "crmCodesRetained": true,
    "oneContextualizedAnglePerRow": true,
    "formulationLevels": [
      "questionEditoriale",
      "questionPublique",
      "questionActivation",
      "formatCourt",
      "formatLongIntervenant"
    ],
    "displayRule": "Les pages publiques n'affichent pas les codes CRM internes. La colonne gauche et le titre principal de l'angle utilisent formatCourt.titrePublicCourt.",
    "complementaryRule": "Les lectures complémentaires sont verrouillées par angle : même conversation, même contexte, lecture différente, maximum trois lectures complémentaires pertinentes. Le renderer lit complementaryCodes en priorité et n'infère plus depuis une conversation entière."
  },
  "readingTypes": {
    "STRATEGIQUE": {
      "code": "STRATEGIQUE",
      "label": "Lecture stratégique",
      "slug": "strategie",
      "shortLabel": "Stratégique",
      "landingSlug": "industrie/strategie",
      "calSource": "lp-industrie-strategie",
      "positioning": "Identifier les seuils où une trajectoire industrielle change de nature et oblige à arbitrer autrement."
    },
    "FINANCIERE": {
      "code": "FINANCIERE",
      "label": "Lecture financière",
      "slug": "finance",
      "shortLabel": "Financière",
      "landingSlug": "industrie/finance",
      "calSource": "lp-industrie-finance",
      "positioning": "Rendre visibles les arbitrages économiques que l'industrie ne peut plus différer."
    },
    "JURIDIQUE": {
      "code": "JURIDIQUE",
      "label": "Lecture juridique / réglementaire",
      "slug": "juridique",
      "shortLabel": "Juridique / réglementaire",
      "landingSlug": "industrie/juridique",
      "calSource": "lp-industrie-juridique",
      "positioning": "Éclairer les moments où le cadre juridique, réglementaire, normatif ou de responsabilité devient un facteur de bascule industrielle."
    },
    "OPERATIONNELLE": {
      "code": "OPERATIONNELLE",
      "label": "Lecture opérationnelle",
      "slug": "operations",
      "shortLabel": "Opérationnelle",
      "landingSlug": "industrie/operations",
      "calSource": "lp-industrie-operations",
      "positioning": "Éclairer les arbitrages de capacité, qualité, flux, maintenance et organisation qui rendent une trajectoire industrielle tenable ou fragile."
    },
    "TECHNOLOGIQUE": {
      "code": "TECHNOLOGIQUE",
      "label": "Lecture technologique / systèmes",
      "slug": "technologie",
      "shortLabel": "Technologique / systèmes",
      "landingSlug": "industrie/technologie",
      "calSource": "lp-industrie-technologie",
      "positioning": "Éclairer les seuils où l’architecture de l’outil, des systèmes ou des interfaces limite la trajectoire industrielle."
    },
    "RH_COMPETENCES": {
      "code": "RH_COMPETENCES",
      "label": "Lecture RH / compétences",
      "slug": "rh-competences",
      "shortLabel": "RH / compétences",
      "landingSlug": "industrie/rh-competences",
      "calSource": "lp-industrie-rh",
      "positioning": "Éclairer les contraintes de recrutement, compétences, organisation du travail et temps d’adaptation qui conditionnent la trajectoire industrielle."
    },
    "TERRITORIALE": {
      "code": "TERRITORIALE",
      "label": "Lecture territoriale",
      "slug": "territoires",
      "shortLabel": "Territoriale",
      "landingSlug": "industrie/territoires",
      "calSource": "lp-industrie-territoires",
      "positioning": "Éclairer les conditions territoriales qui rendent une trajectoire industrielle tenable, fragile ou impossible."
    },
    "ENERGIE_RESSOURCES": {
      "code": "ENERGIE_RESSOURCES",
      "label": "Lecture énergie / ressources / décarbonation",
      "slug": "energie-ressources",
      "shortLabel": "Énergie / ressources",
      "landingSlug": "industrie/energie-ressources",
      "calSource": "lp-industrie-energie",
      "positioning": "Éclairer les seuils où énergie, eau, ressources, utilités ou carbone changent la nature de la décision industrielle."
    }
  },
  "cycles": [
    {
      "code": "IND",
      "label": "Industrie & transformation des territoires",
      "sourceLabel": "Industrie",
      "description": "Ce cycle regarde les transformations industrielles comme des moments d’arbitrage : volumes, dépendances, outil, trajectoire, ressources, compétences et conditions territoriales.",
      "contexts": [
        {
          "code": "GS",
          "programmeCode": "CST",
          "label": "Croissance sous tension",
          "description": "Quand la demande ou l'activité augmente, mais révèle des limites jusque-là peu visibles."
        },
        {
          "code": "AC",
          "programmeCode": "ASC",
          "label": "Adaptation sous contrainte",
          "description": "Quand l'entreprise tient encore, mais au prix de compromis de plus en plus coûteux."
        },
        {
          "code": "RC",
          "programmeCode": "RSS",
          "label": "Réinvention sous crise",
          "description": "Quand les ajustements ne suffisent plus et qu'une transformation plus profonde devient nécessaire."
        }
      ],
      "conversations": [
        {
          "code": "C1",
          "title": "À partir de quand produire davantage oblige-t-il à arbitrer autrement ?",
          "landingTitle": "Produire davantage : à quel moment la production change-t-elle la nature de l'arbitrage ?",
          "tension": "Croissance ou continuité apparente vs soutenabilité réelle de la production",
          "description": "Cette conversation interroge le moment où produire davantage cesse d'être seulement un objectif commercial pour devenir un sujet d'arbitrage industriel."
        },
        {
          "code": "C2",
          "title": "Où se situent les dépendances qui deviennent des points de bascule ?",
          "landingTitle": "Dépendances industrielles : comment identifier celles qui freinent avant qu'elles ne bloquent ?",
          "tension": "Autonomie affichée vs vulnérabilités réelles de la chaîne de valeur",
          "description": "Cette conversation cherche à identifier les dépendances qui deviennent des points de bascule : fournisseurs, flux logistiques, filières, règles, marchés, systèmes et infrastructures."
        },
        {
          "code": "C3",
          "title": "Jusqu'où un outil industriel peut-il évoluer sans se transformer en profondeur ?",
          "landingTitle": "Investir, optimiser ou transformer : comment reconnaître le seuil où l'outil doit changer de logique ?",
          "tension": "Amélioration incrémentale vs transformation profonde de l'outil",
          "description": "Cette conversation interroge la frontière entre amélioration incrémentale et transformation profonde de l’outil."
        },
        {
          "code": "C4",
          "title": "Qu'est-ce qui fait qu'une trajectoire industrielle tient — ou doit être réarbitrée ?",
          "landingTitle": "Trajectoire industrielle : comment savoir ce qui tient encore — et ce qui doit être réarbitré ?",
          "tension": "Performance interne vs conditions systémiques de soutenabilité",
          "description": "Cette conversation interroge les conditions systémiques de la continuité industrielle : compétences, énergie, eau, utilités, modèle commercial, foncier, infrastructures et acceptabilité."
        }
      ],
      "angles": [
        {
          "code": "A01",
          "crmCode": "IND-C1-GS-A01",
          "programmeCode": "IND-C1-CST-01",
          "conversationCode": "C1",
          "contextCode": "GS",
          "typeLecture": "STRATEGIQUE",
          "questionEditoriale": "À partir de quand la hausse d'activité met-elle sous tension les conditions de marge, de qualité et d'organisation au point d'obliger à arbitrer autrement ?",
          "questionPublique": "Croissance industrielle : à quel moment faut-il arbitrer autrement — et comment ?",
          "questionActivation": "La croissance masque les tensions qu'elle crée. Marges comprimées, qualité plus difficile à tenir, organisation saturée : ces signaux apparaissent progressivement, souvent trop tard. Vous n'êtes pas attendu sur les chiffres de votre entreprise ou de vos clients. Vous êtes attendu sur votre lecture du mécanisme — ce que votre position vous a appris à voir, ce qui reste invisible depuis d'autres positions d'observation, et ce que cela oblige à décider.",
          "introMecanisme": "Dans l'industrie, la croissance est souvent perçue comme une bonne nouvelle. Mais lorsqu'elle s'accélère, elle peut révéler des tensions moins visibles : marges comprimées, qualité plus difficile à tenir, organisation saturée, investissements à engager plus tôt que prévu.",
          "pointBascule": "À partir de quand chaque volume supplémentaire dégrade-t-il plus l'organisation qu'il ne renforce l'activité ?",
          "tensionArbitrage": "Croître vite sans dégrader la marge, la qualité, les délais ni l'équilibre organisationnel.",
          "primaryProfiles": [
            "DG industriel",
            "Directeur stratégie",
            "Direction industrielle",
            "Cabinet stratégie industrielle",
            "Cabinet compétitivité"
          ],
          "landingPages": [
            "strategie"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "Quand produire plus commence-t-il à fragiliser la marge, la qualité et l’organisation ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — Croissance, marge, qualité et organisation",
            "chapeau": "Votre intervention permettrait d’analyser le moment où la hausse d’activité cesse d’être seulement une opportunité commerciale pour devenir un sujet d’arbitrage industriel.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement dans la situation : contraintes, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs impactés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, clients, partenaires, financeurs, filière ou territoire."
              },
              {
                "key": "arbitrages",
                "title": "Arbitrages & décisions",
                "text": "Rendre visibles les choix à effectuer : tenir, différer, investir, transformer, sécuriser, repositionner, redéployer ou renoncer."
              },
              {
                "key": "defis",
                "title": "Défis & opportunités",
                "text": "Mettre en regard ce que la situation fragilise et ce qu’elle peut ouvrir comme trajectoire plus robuste, plus lisible ou mieux assumée."
              },
              {
                "key": "vision",
                "title": "Vision attendue",
                "text": "Formuler une lecture située : ce que votre expérience ou votre pratique permet de reconnaître avant que la bascule ne devienne évidente."
              },
              {
                "key": "echelle",
                "title": "Échelle pertinente",
                "text": "Situer l’analyse à la bonne échelle : site, entreprise, portefeuille, filière, chaîne de valeur, territoire ou cadre de décision."
              }
            ],
            "momentBascule": "À partir de quand chaque volume supplémentaire dégrade-t-il plus l'organisation qu'il ne renforce l'activité ?",
            "tensionCentrale": "Croître vite sans dégrader la marge, la qualité, les délais ni l'équilibre organisationnel.",
            "securisation": "L’échange ne suppose pas de commenter une situation interne, un client, un mandat ou une décision confidentielle. Il s’agit d’éclairer un mécanisme industriel à partir de votre expérience et de votre position d’observation."
          },
          "complementaryCodes": [
            "IND-C1-GS-A02",
            "IND-C1-GS-A03",
            "IND-C1-GS-A04"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste explicitement verrouillée pour éviter les lectures hors contexte ou concurrentes."
        },
        {
          "code": "A01",
          "crmCode": "IND-C1-RC-A01",
          "programmeCode": "IND-C1-RSS-01",
          "conversationCode": "C1",
          "contextCode": "RC",
          "typeLecture": "STRATEGIQUE",
          "questionEditoriale": "À partir de quand la production révèle-t-elle un écart durable entre le modèle opérationnel existant et les conditions nécessaires à sa soutenabilité ?",
          "questionPublique": "À quel moment faut-il arrêter de corriger le modèle et décider de le changer ?",
          "questionActivation": "En période de crise, les limites d'un modèle industriel ne se révèlent pas toujours brutalement. Elles apparaissent par écarts répétés : coûts qui ne reviennent pas, délais qui s'allongent, qualité plus difficile à sécuriser, organisation qui compense sans résoudre. Vous n'êtes pas attendu sur un cas de crise. Vous êtes attendu sur votre capacité à reconnaître le moment où la correction de l'existant ne suffit plus.",
          "introMecanisme": "En période de crise, les limites d'un modèle industriel apparaissent d'abord par des écarts répétés : coûts, délais, qualité, organisation, investissement ou périmètre.",
          "pointBascule": "À partir de quand le modèle existant devient-il irréversible dans ses fragilités ?",
          "tensionArbitrage": "Corriger l'existant ou reconnaître que le modèle doit être repensé.",
          "primaryProfiles": [
            "DG industriel",
            "Direction stratégie",
            "Turnaround",
            "Cabinet stratégie industrielle",
            "Conseil transformation"
          ],
          "landingPages": [
            "strategie"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "Quand faut-il arrêter de corriger le modèle et décider de le changer ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — Modèle opérationnel devenu non soutenable",
            "chapeau": "Votre intervention viserait à éclairer le moment où les écarts répétés de coûts, délais, qualité, capacité ou organisation révèlent une limite plus profonde du modèle opérationnel.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement dans la situation : contraintes, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs impactés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, clients, partenaires, financeurs, filière ou territoire."
              },
              {
                "key": "arbitrages",
                "title": "Arbitrages & décisions",
                "text": "Rendre visibles les choix à effectuer : tenir, différer, investir, transformer, sécuriser, repositionner, redéployer ou renoncer."
              },
              {
                "key": "defis",
                "title": "Défis & opportunités",
                "text": "Mettre en regard ce que la situation fragilise et ce qu’elle peut ouvrir comme trajectoire plus robuste, plus lisible ou mieux assumée."
              },
              {
                "key": "vision",
                "title": "Vision attendue",
                "text": "Formuler une lecture située : ce que votre expérience ou votre pratique permet de reconnaître avant que la bascule ne devienne évidente."
              },
              {
                "key": "echelle",
                "title": "Échelle pertinente",
                "text": "Situer l’analyse à la bonne échelle : site, entreprise, portefeuille, filière, chaîne de valeur, territoire ou cadre de décision."
              }
            ],
            "momentBascule": "À partir de quand le modèle existant devient-il irréversible dans ses fragilités ?",
            "tensionCentrale": "Corriger l'existant ou reconnaître que le modèle doit être repensé.",
            "securisation": "L’échange ne suppose pas de commenter une situation interne, un client, un mandat ou une décision confidentielle. Il s’agit d’éclairer un mécanisme industriel à partir de votre expérience et de votre position d’observation."
          },
          "complementaryCodes": [
            "IND-C1-RC-A03",
            "IND-C1-RC-A02",
            "IND-C1-RC-A04"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste explicitement verrouillée pour éviter les lectures hors contexte ou concurrentes."
        },
        {
          "code": "A05",
          "crmCode": "IND-C2-GS-A05",
          "programmeCode": "IND-C2-CST-01",
          "conversationCode": "C2",
          "contextCode": "GS",
          "typeLecture": "STRATEGIQUE",
          "questionEditoriale": "À partir de quand l'augmentation des volumes révèle-t-elle une dépendance fournisseur ou logistique que l'organisation ne maîtrise plus pleinement ?",
          "questionPublique": "Dépendances industrielles : comment identifier celles qui freinent la croissance avant qu'elles ne la bloquent ?",
          "questionActivation": "Les dépendances industrielles restent invisibles tant qu'elles fonctionnent. Ce n'est qu'au moment où elles basculent qu'elles révèlent leur poids réel. Ce qu'on attend de vous, c'est une lecture transversale : les patterns que vous avez vus se répéter, les signaux faibles qui annoncent la bascule, et les arbitrages que les organisations formulent souvent trop tard.",
          "introMecanisme": "La croissance teste tout ce dont l'entreprise dépend pour produire : fournisseurs, matières, composants, transport, flux logistiques et capacités de coordination.",
          "pointBascule": "À partir de quand un fournisseur ou un flux logistique devient-il un point de blocage de la croissance ?",
          "tensionArbitrage": "Croître grâce à des dépendances efficaces sans devenir prisonnier de leur fragilité.",
          "primaryProfiles": [
            "Directeur stratégie",
            "DG industriel",
            "Cabinet stratégie industrielle",
            "Cabinet filière",
            "Cabinet intelligence économique"
          ],
          "landingPages": [
            "strategie"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "Comment repérer les dépendances qui freinent la croissance avant qu’elles ne la bloquent ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — Dépendance fournisseur ou logistique révélée par la croissance",
            "chapeau": "Votre intervention permettrait d’éclairer comment l’augmentation des volumes révèle des dépendances fournisseurs, matières, composants ou logistiques qui restaient peu visibles tant que l’activité était stable.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement dans la situation : contraintes, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs impactés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, clients, partenaires, financeurs, filière ou territoire."
              },
              {
                "key": "arbitrages",
                "title": "Arbitrages & décisions",
                "text": "Rendre visibles les choix à effectuer : tenir, différer, investir, transformer, sécuriser, repositionner, redéployer ou renoncer."
              },
              {
                "key": "defis",
                "title": "Défis & opportunités",
                "text": "Mettre en regard ce que la situation fragilise et ce qu’elle peut ouvrir comme trajectoire plus robuste, plus lisible ou mieux assumée."
              },
              {
                "key": "vision",
                "title": "Vision attendue",
                "text": "Formuler une lecture située : ce que votre expérience ou votre pratique permet de reconnaître avant que la bascule ne devienne évidente."
              },
              {
                "key": "echelle",
                "title": "Échelle pertinente",
                "text": "Situer l’analyse à la bonne échelle : site, entreprise, portefeuille, filière, chaîne de valeur, territoire ou cadre de décision."
              }
            ],
            "momentBascule": "À partir de quand un fournisseur ou un flux logistique devient-il un point de blocage de la croissance ?",
            "tensionCentrale": "Croître grâce à des dépendances efficaces sans devenir prisonnier de leur fragilité.",
            "securisation": "L’échange ne suppose pas de commenter une situation interne, un client, un mandat ou une décision confidentielle. Il s’agit d’éclairer un mécanisme industriel à partir de votre expérience et de votre position d’observation."
          },
          "complementaryCodes": [
            "IND-C2-GS-A03",
            "IND-C2-GS-A04",
            "IND-C2-GS-A02"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste explicitement verrouillée pour éviter les lectures hors contexte ou concurrentes."
        },
        {
          "code": "A06",
          "crmCode": "IND-C2-AC-A06",
          "programmeCode": "IND-C2-ASC-02",
          "conversationCode": "C2",
          "contextCode": "AC",
          "typeLecture": "STRATEGIQUE",
          "questionEditoriale": "Quelles dépendances de filière ou de segment limitent la capacité à ajuster l'activité sans fragiliser la position future dans la chaîne de valeur ?",
          "questionPublique": "Sous contrainte, comment savoir quelles dépendances protéger, transformer ou abandonner ?",
          "questionActivation": "En période de contrainte, les ajustements ne sont jamais neutres. Réduire une activité, changer de segment ou modifier une dépendance peut préserver le court terme tout en affaiblissant une position future. Vous n'êtes pas attendu sur la stratégie interne d'une entreprise. Vous êtes attendu sur votre lecture des dépendances qui changent silencieusement la position dans la chaîne de valeur.",
          "introMecanisme": "En période de contrainte, les ajustements peuvent affaiblir une position future : segment, clients, fournisseurs, savoir-faire ou place dans la filière.",
          "pointBascule": "À partir de quand l'ajustement fragilise-t-il la position future dans la chaîne de valeur ?",
          "tensionArbitrage": "S'adapter sans perdre ce qui fonde la place stratégique dans la filière.",
          "primaryProfiles": [
            "Stratégie industrielle",
            "Filière",
            "Compétitivité",
            "Corporate finance / repositionnement",
            "Direction générale"
          ],
          "landingPages": [
            "strategie"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "Sous contrainte, quelles dépendances faut-il protéger, transformer ou abandonner ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — Dépendances de filière et position future",
            "chapeau": "Votre intervention permettrait d’analyser comment certaines dépendances de filière ou de segment limitent la capacité à ajuster l’activité sans fragiliser la position future dans la chaîne de valeur.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement dans la situation : contraintes, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs impactés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, clients, partenaires, financeurs, filière ou territoire."
              },
              {
                "key": "arbitrages",
                "title": "Arbitrages & décisions",
                "text": "Rendre visibles les choix à effectuer : tenir, différer, investir, transformer, sécuriser, repositionner, redéployer ou renoncer."
              },
              {
                "key": "defis",
                "title": "Défis & opportunités",
                "text": "Mettre en regard ce que la situation fragilise et ce qu’elle peut ouvrir comme trajectoire plus robuste, plus lisible ou mieux assumée."
              },
              {
                "key": "vision",
                "title": "Vision attendue",
                "text": "Formuler une lecture située : ce que votre expérience ou votre pratique permet de reconnaître avant que la bascule ne devienne évidente."
              },
              {
                "key": "echelle",
                "title": "Échelle pertinente",
                "text": "Situer l’analyse à la bonne échelle : site, entreprise, portefeuille, filière, chaîne de valeur, territoire ou cadre de décision."
              }
            ],
            "momentBascule": "À partir de quand l'ajustement fragilise-t-il la position future dans la chaîne de valeur ?",
            "tensionCentrale": "S'adapter sans perdre ce qui fonde la place stratégique dans la filière.",
            "securisation": "L’échange ne suppose pas de commenter une situation interne, un client, un mandat ou une décision confidentielle. Il s’agit d’éclairer un mécanisme industriel à partir de votre expérience et de votre position d’observation."
          },
          "complementaryCodes": [
            "IND-C2-AC-A05",
            "IND-C2-AC-J02",
            "IND-C2-AC-A04"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste explicitement verrouillée pour éviter les lectures hors contexte ou concurrentes."
        },
        {
          "code": "A05",
          "crmCode": "IND-C2-RC-A05",
          "programmeCode": "IND-C2-RSS-01",
          "conversationCode": "C2",
          "contextCode": "RC",
          "typeLecture": "STRATEGIQUE",
          "questionEditoriale": "À partir de quand une dépendance critique impose-t-elle une relocalisation, une substitution ou un changement de modèle d'approvisionnement ?",
          "questionPublique": "Quand une dépendance devient-elle un problème stratégique qui ne se résout plus opérationnellement ?",
          "questionActivation": "Certaines dépendances peuvent être sécurisées, diversifiées ou mieux pilotées. D'autres finissent par changer la nature même du modèle industriel. Vous n'êtes pas attendu sur une décision de relocalisation ou un dossier d'approvisionnement particulier. Vous êtes attendu sur votre capacité à distinguer une dépendance pilotable d'une dépendance qui oblige à changer de modèle.",
          "introMecanisme": "Lorsqu'une dépendance devient critique, l'entreprise ne peut plus seulement chercher à mieux la piloter : elle doit parfois relocaliser, substituer, diversifier ou repenser l'architecture d'approvisionnement.",
          "pointBascule": "Quand une dépendance devient-elle inacceptable pour la continuité industrielle ?",
          "tensionArbitrage": "Conserver l'efficacité d'un modèle globalisé ou reconstruire une résilience plus coûteuse mais plus maîtrisable.",
          "primaryProfiles": [
            "Supply chain stratégique",
            "Achats",
            "Stratégie industrielle",
            "Site selection",
            "Redéploiement"
          ],
          "landingPages": [
            "strategie"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "Quand une dépendance oblige-t-elle à changer de modèle plutôt qu’à mieux la piloter ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — Dépendance critique et changement de modèle d’approvisionnement",
            "chapeau": "Votre intervention viserait à éclairer le moment où une dépendance critique ne peut plus seulement être sécurisée ou diversifiée, mais impose une relocalisation, une substitution ou un changement de modèle d’approvisionnement.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement dans la situation : contraintes, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs impactés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, clients, partenaires, financeurs, filière ou territoire."
              },
              {
                "key": "arbitrages",
                "title": "Arbitrages & décisions",
                "text": "Rendre visibles les choix à effectuer : tenir, différer, investir, transformer, sécuriser, repositionner, redéployer ou renoncer."
              },
              {
                "key": "defis",
                "title": "Défis & opportunités",
                "text": "Mettre en regard ce que la situation fragilise et ce qu’elle peut ouvrir comme trajectoire plus robuste, plus lisible ou mieux assumée."
              },
              {
                "key": "vision",
                "title": "Vision attendue",
                "text": "Formuler une lecture située : ce que votre expérience ou votre pratique permet de reconnaître avant que la bascule ne devienne évidente."
              },
              {
                "key": "echelle",
                "title": "Échelle pertinente",
                "text": "Situer l’analyse à la bonne échelle : site, entreprise, portefeuille, filière, chaîne de valeur, territoire ou cadre de décision."
              }
            ],
            "momentBascule": "Quand une dépendance devient-elle inacceptable pour la continuité industrielle ?",
            "tensionCentrale": "Conserver l'efficacité d'un modèle globalisé ou reconstruire une résilience plus coûteuse mais plus maîtrisable.",
            "securisation": "L’échange ne suppose pas de commenter une situation interne, un client, un mandat ou une décision confidentielle. Il s’agit d’éclairer un mécanisme industriel à partir de votre expérience et de votre position d’observation."
          },
          "complementaryCodes": [
            "IND-C2-RC-A03",
            "IND-C2-RC-A04",
            "IND-C2-RC-A02"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste explicitement verrouillée pour éviter les lectures hors contexte ou concurrentes."
        },
        {
          "code": "A12",
          "crmCode": "IND-C3-GS-A12",
          "programmeCode": "IND-C3-CST-04",
          "conversationCode": "C3",
          "contextCode": "GS",
          "typeLecture": "STRATEGIQUE",
          "questionEditoriale": "À partir de quand la croissance impose-t-elle de décarboner autrement, non plus à la marge, mais en repensant le process, les utilités ou le mix produit ?",
          "questionPublique": "À quel moment la décarbonation oblige-t-elle à repenser l'outil plutôt qu'à l'optimiser ?",
          "questionActivation": "La croissance augmente les besoins en énergie, matières, capacités et utilités. Dans certains cas, les gains marginaux ne suffisent plus : la contrainte carbone change la nature même de l'outil ou du process. Vous n'êtes pas attendu sur un plan de décarbonation confidentiel. Vous êtes attendu sur votre lecture du seuil où la décarbonation cesse d'être un chantier périphérique et devient un arbitrage stratégique.",
          "introMecanisme": "La croissance industrielle augmente souvent les besoins en énergie, matières et capacités. Dans un contexte de transition climatique, cette croissance ne peut pas toujours être accompagnée par de simples gains marginaux.",
          "pointBascule": "À partir de quand la décarbonation impose-t-elle de repenser l'outil plutôt que de l'optimiser ?",
          "tensionArbitrage": "Croître industriellement tout en transformant réellement les conditions carbone de la production.",
          "primaryProfiles": [
            "Direction stratégie",
            "Direction industrielle",
            "Énergie / décarbonation",
            "Transformation de process",
            "Conseil stratégie industrielle"
          ],
          "landingPages": [
            "strategie"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "Quand la croissance impose-t-elle de repenser l’outil plutôt que de seulement le décarboner à la marge ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — Croissance industrielle et décarbonation de l’outil",
            "chapeau": "Votre intervention permettrait d’analyser le moment où la croissance industrielle rend insuffisants les gains marginaux de décarbonation.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement dans la situation : contraintes, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs impactés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, clients, partenaires, financeurs, filière ou territoire."
              },
              {
                "key": "arbitrages",
                "title": "Arbitrages & décisions",
                "text": "Rendre visibles les choix à effectuer : tenir, différer, investir, transformer, sécuriser, repositionner, redéployer ou renoncer."
              },
              {
                "key": "defis",
                "title": "Défis & opportunités",
                "text": "Mettre en regard ce que la situation fragilise et ce qu’elle peut ouvrir comme trajectoire plus robuste, plus lisible ou mieux assumée."
              },
              {
                "key": "vision",
                "title": "Vision attendue",
                "text": "Formuler une lecture située : ce que votre expérience ou votre pratique permet de reconnaître avant que la bascule ne devienne évidente."
              },
              {
                "key": "echelle",
                "title": "Échelle pertinente",
                "text": "Situer l’analyse à la bonne échelle : site, entreprise, portefeuille, filière, chaîne de valeur, territoire ou cadre de décision."
              }
            ],
            "momentBascule": "À partir de quand la décarbonation impose-t-elle de repenser l'outil plutôt que de l'optimiser ?",
            "tensionCentrale": "Croître industriellement tout en transformant réellement les conditions carbone de la production.",
            "securisation": "L’échange ne suppose pas de commenter une situation interne, un client, un mandat ou une décision confidentielle. Il s’agit d’éclairer un mécanisme industriel à partir de votre expérience et de votre position d’observation."
          },
          "complementaryCodes": [
            "IND-C3-GS-A02",
            "IND-C3-GS-A01",
            "IND-C3-GS-A03"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste explicitement verrouillée pour éviter les lectures hors contexte ou concurrentes."
        },
        {
          "code": "A12",
          "crmCode": "IND-C3-AC-A12",
          "programmeCode": "IND-C3-ASC-04",
          "conversationCode": "C3",
          "contextCode": "AC",
          "typeLecture": "STRATEGIQUE",
          "questionEditoriale": "À partir de quand la décarbonation rebat-elle les conditions mêmes de compétitivité, d'investissement et de transformation de l'outil ?",
          "questionPublique": "Quand la contrainte carbone redéfinit-elle les conditions de compétitivité ?",
          "questionActivation": "La décarbonation n'est pas seulement une exigence environnementale. En contexte contraint, elle peut transformer les équilibres économiques de l'outil : compétitivité, CAPEX, process, utilités, trajectoire d'investissement. Vous n'êtes pas attendu sur des chiffres d'investissement. Vous êtes attendu sur votre lecture du moment où la contrainte carbone redéfinit les conditions de décision industrielle.",
          "introMecanisme": "En contexte contraint, la décarbonation renforce les tensions entre compétitivité immédiate et transformation nécessaire de l'outil.",
          "pointBascule": "À partir de quand la contrainte carbone redéfinit-elle les conditions de compétitivité ?",
          "tensionArbitrage": "Rester compétitif aujourd'hui tout en investissant dans une trajectoire carbone soutenable.",
          "primaryProfiles": [
            "Direction stratégie",
            "Énergie / décarbonation",
            "Corporate finance / CAPEX",
            "Transformation de process",
            "Conseil compétitivité industrielle"
          ],
          "landingPages": [
            "strategie"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "Quand la contrainte carbone redéfinit-elle les conditions de compétitivité ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — Décarbonation, compétitivité et investissement",
            "chapeau": "Votre intervention permettrait d’éclairer comment la décarbonation peut rebattre les conditions de compétitivité, d’investissement et de transformation de l’outil.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement dans la situation : contraintes, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs impactés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, clients, partenaires, financeurs, filière ou territoire."
              },
              {
                "key": "arbitrages",
                "title": "Arbitrages & décisions",
                "text": "Rendre visibles les choix à effectuer : tenir, différer, investir, transformer, sécuriser, repositionner, redéployer ou renoncer."
              },
              {
                "key": "defis",
                "title": "Défis & opportunités",
                "text": "Mettre en regard ce que la situation fragilise et ce qu’elle peut ouvrir comme trajectoire plus robuste, plus lisible ou mieux assumée."
              },
              {
                "key": "vision",
                "title": "Vision attendue",
                "text": "Formuler une lecture située : ce que votre expérience ou votre pratique permet de reconnaître avant que la bascule ne devienne évidente."
              },
              {
                "key": "echelle",
                "title": "Échelle pertinente",
                "text": "Situer l’analyse à la bonne échelle : site, entreprise, portefeuille, filière, chaîne de valeur, territoire ou cadre de décision."
              }
            ],
            "momentBascule": "À partir de quand la contrainte carbone redéfinit-elle les conditions de compétitivité ?",
            "tensionCentrale": "Rester compétitif aujourd'hui tout en investissant dans une trajectoire carbone soutenable.",
            "securisation": "L’échange ne suppose pas de commenter une situation interne, un client, un mandat ou une décision confidentielle. Il s’agit d’éclairer un mécanisme industriel à partir de votre expérience et de votre position d’observation."
          },
          "complementaryCodes": [
            "IND-C3-AC-A09",
            "IND-C3-AC-A02",
            "IND-C3-AC-J03"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste explicitement verrouillée pour éviter les lectures hors contexte ou concurrentes."
        },
        {
          "code": "A15",
          "crmCode": "IND-C4-GS-A15",
          "programmeCode": "IND-C4-CST-03",
          "conversationCode": "C4",
          "contextCode": "GS",
          "typeLecture": "STRATEGIQUE",
          "questionEditoriale": "À partir de quand la croissance du carnet révèle-t-elle une fragilité commerciale dans la capacité à sélectionner, répercuter ou défendre ses conditions économiques ?",
          "questionPublique": "Comment savoir si l'on grandit dans la bonne direction — ou simplement plus vite vers le même mur ?",
          "questionActivation": "Un carnet de commandes qui se remplit peut donner l'impression d'une trajectoire solide. Mais toutes les commandes ne se valent pas : certaines consomment la capacité, fragilisent la marge ou limitent la transformation. Vous n'êtes pas attendu sur vos clients ou votre portefeuille. Vous êtes attendu sur votre capacité à lire les signaux qui distinguent une croissance bien positionnée d'une croissance qui creuse une fragilité structurelle.",
          "introMecanisme": "Un carnet de commandes qui progresse peut confirmer une trajectoire, mais aussi masquer une fragilité commerciale : incapacité à sélectionner, répercuter ou défendre les conditions économiques.",
          "pointBascule": "À partir de quand la croissance fragilise-t-elle la capacité à défendre ses marges ?",
          "tensionArbitrage": "Remplir le carnet sans accepter une croissance qui consomme la marge et la capacité industrielle.",
          "primaryProfiles": [
            "DG industriel",
            "Direction stratégie",
            "Direction développement",
            "Pricing B2B",
            "Business model industriel"
          ],
          "landingPages": [
            "strategie"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "Comment savoir si l’on grandit dans la bonne direction — ou plus vite vers la fragilité ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — Carnet de commandes, marge et qualité de croissance",
            "chapeau": "Votre intervention permettrait d’éclairer comment un carnet de commandes en croissance peut masquer une fragilité commerciale.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement dans la situation : contraintes, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs impactés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, clients, partenaires, financeurs, filière ou territoire."
              },
              {
                "key": "arbitrages",
                "title": "Arbitrages & décisions",
                "text": "Rendre visibles les choix à effectuer : tenir, différer, investir, transformer, sécuriser, repositionner, redéployer ou renoncer."
              },
              {
                "key": "defis",
                "title": "Défis & opportunités",
                "text": "Mettre en regard ce que la situation fragilise et ce qu’elle peut ouvrir comme trajectoire plus robuste, plus lisible ou mieux assumée."
              },
              {
                "key": "vision",
                "title": "Vision attendue",
                "text": "Formuler une lecture située : ce que votre expérience ou votre pratique permet de reconnaître avant que la bascule ne devienne évidente."
              },
              {
                "key": "echelle",
                "title": "Échelle pertinente",
                "text": "Situer l’analyse à la bonne échelle : site, entreprise, portefeuille, filière, chaîne de valeur, territoire ou cadre de décision."
              }
            ],
            "momentBascule": "À partir de quand la croissance fragilise-t-elle la capacité à défendre ses marges ?",
            "tensionCentrale": "Remplir le carnet sans accepter une croissance qui consomme la marge et la capacité industrielle.",
            "securisation": "L’échange ne suppose pas de commenter une situation interne, un client, un mandat ou une décision confidentielle. Il s’agit d’éclairer un mécanisme industriel à partir de votre expérience et de votre position d’observation."
          },
          "complementaryCodes": [
            "IND-C4-GS-A02",
            "IND-C4-GS-A01",
            "IND-C4-GS-A04"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste explicitement verrouillée pour éviter les lectures hors contexte ou concurrentes."
        },
        {
          "code": "A15",
          "crmCode": "IND-C4-AC-A15",
          "programmeCode": "IND-C4-ASC-03",
          "conversationCode": "C4",
          "contextCode": "AC",
          "typeLecture": "STRATEGIQUE",
          "questionEditoriale": "À partir de quand la pression des clients ou donneurs d'ordre limite-t-elle la capacité à préserver la marge nécessaire au maintien ou à l'adaptation de l'outil ?",
          "questionPublique": "Quand la pression commerciale empêche-t-elle toute adaptation viable ?",
          "questionActivation": "Dans certaines chaînes de valeur, la pression des clients ou donneurs d'ordre limite la capacité à préserver les marges nécessaires au maintien de l'outil. Vous n'êtes pas attendu sur une négociation ou un compte client. Vous êtes attendu sur votre lecture du moment où la structure commerciale empêche l'entreprise de financer son adaptation.",
          "introMecanisme": "Dans de nombreuses chaînes de valeur, les clients et donneurs d'ordre exercent une pression forte sur les prix, les délais ou les conditions contractuelles.",
          "pointBascule": "À partir de quand la pression commerciale empêche-t-elle toute adaptation viable ?",
          "tensionArbitrage": "Servir les clients sans perdre la marge nécessaire pour maintenir et transformer l'outil.",
          "primaryProfiles": [
            "Direction générale",
            "Direction stratégie",
            "Pricing B2B",
            "Corporate finance",
            "Business model industriel"
          ],
          "landingPages": [
            "strategie"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "Quand la pression commerciale empêche-t-elle toute adaptation viable ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — Pression donneurs d’ordre et capacité d’adaptation",
            "chapeau": "Votre intervention permettrait d’analyser comment la pression des clients ou donneurs d’ordre sur les prix, les délais ou les conditions contractuelles peut limiter la marge nécessaire au maintien ou à l’adaptation de l’outil.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement dans la situation : contraintes, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs impactés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, clients, partenaires, financeurs, filière ou territoire."
              },
              {
                "key": "arbitrages",
                "title": "Arbitrages & décisions",
                "text": "Rendre visibles les choix à effectuer : tenir, différer, investir, transformer, sécuriser, repositionner, redéployer ou renoncer."
              },
              {
                "key": "defis",
                "title": "Défis & opportunités",
                "text": "Mettre en regard ce que la situation fragilise et ce qu’elle peut ouvrir comme trajectoire plus robuste, plus lisible ou mieux assumée."
              },
              {
                "key": "vision",
                "title": "Vision attendue",
                "text": "Formuler une lecture située : ce que votre expérience ou votre pratique permet de reconnaître avant que la bascule ne devienne évidente."
              },
              {
                "key": "echelle",
                "title": "Échelle pertinente",
                "text": "Situer l’analyse à la bonne échelle : site, entreprise, portefeuille, filière, chaîne de valeur, territoire ou cadre de décision."
              }
            ],
            "momentBascule": "À partir de quand la pression commerciale empêche-t-elle toute adaptation viable ?",
            "tensionCentrale": "Servir les clients sans perdre la marge nécessaire pour maintenir et transformer l'outil.",
            "securisation": "L’échange ne suppose pas de commenter une situation interne, un client, un mandat ou une décision confidentielle. Il s’agit d’éclairer un mécanisme industriel à partir de votre expérience et de votre position d’observation."
          },
          "complementaryCodes": [
            "IND-C4-AC-A14",
            "IND-C4-AC-J04",
            "IND-C4-AC-A01"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste explicitement verrouillée pour éviter les lectures hors contexte ou concurrentes."
        },
        {
          "code": "A15",
          "crmCode": "IND-C4-RC-A15",
          "programmeCode": "IND-C4-RSS-03",
          "conversationCode": "C4",
          "contextCode": "RC",
          "typeLecture": "STRATEGIQUE",
          "questionEditoriale": "À partir de quand la structure commerciale impose-t-elle un changement de marché, de portefeuille, de partenariat ou de position dans la chaîne de valeur ?",
          "questionPublique": "Quand le modèle commercial devient-il incompatible avec l'outil ou la trajectoire industrielle ?",
          "questionActivation": "Lorsque la structure commerciale devient trop fragile, il ne suffit plus de négocier mieux ou de vendre davantage. Il faut parfois changer de marché, de portefeuille, de partenariat ou de position dans la chaîne de valeur. Vous n'êtes pas attendu sur votre modèle commercial interne. Vous êtes attendu sur votre capacité à lire le moment où une trajectoire industrielle doit changer de position pour rester viable.",
          "introMecanisme": "Une crise peut obliger à revoir plus largement la trajectoire commerciale et industrielle : marchés, portefeuille, partenariats ou position dans la chaîne de valeur.",
          "pointBascule": "Quand le modèle commercial devient-il incompatible avec l'outil ou la trajectoire industrielle ?",
          "tensionArbitrage": "Conserver les marchés existants ou changer de position pour préserver la viabilité industrielle.",
          "primaryProfiles": [
            "Direction générale",
            "Stratégie industrielle",
            "Business model",
            "Corporate finance",
            "Repositionnement"
          ],
          "landingPages": [
            "strategie"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "Quand le modèle commercial devient-il incompatible avec l’outil ou la trajectoire industrielle ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — Structure commerciale et repositionnement industriel",
            "chapeau": "Votre intervention permettrait d’éclairer le moment où la structure commerciale impose un changement de marché, de portefeuille, de partenariat ou de position dans la chaîne de valeur.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement dans la situation : contraintes, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs impactés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, clients, partenaires, financeurs, filière ou territoire."
              },
              {
                "key": "arbitrages",
                "title": "Arbitrages & décisions",
                "text": "Rendre visibles les choix à effectuer : tenir, différer, investir, transformer, sécuriser, repositionner, redéployer ou renoncer."
              },
              {
                "key": "defis",
                "title": "Défis & opportunités",
                "text": "Mettre en regard ce que la situation fragilise et ce qu’elle peut ouvrir comme trajectoire plus robuste, plus lisible ou mieux assumée."
              },
              {
                "key": "vision",
                "title": "Vision attendue",
                "text": "Formuler une lecture située : ce que votre expérience ou votre pratique permet de reconnaître avant que la bascule ne devienne évidente."
              },
              {
                "key": "echelle",
                "title": "Échelle pertinente",
                "text": "Situer l’analyse à la bonne échelle : site, entreprise, portefeuille, filière, chaîne de valeur, territoire ou cadre de décision."
              }
            ],
            "momentBascule": "Quand le modèle commercial devient-il incompatible avec l'outil ou la trajectoire industrielle ?",
            "tensionCentrale": "Conserver les marchés existants ou changer de position pour préserver la viabilité industrielle.",
            "securisation": "L’échange ne suppose pas de commenter une situation interne, un client, un mandat ou une décision confidentielle. Il s’agit d’éclairer un mécanisme industriel à partir de votre expérience et de votre position d’observation."
          },
          "complementaryCodes": [
            "IND-C4-RC-A01",
            "IND-C4-RC-A04",
            "IND-C4-RC-A02"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste explicitement verrouillée pour éviter les lectures hors contexte ou concurrentes."
        },
        {
          "code": "A01",
          "crmCode": "IND-C1-AC-A01",
          "programmeCode": "IND-C1-ASC-01",
          "conversationCode": "C1",
          "contextCode": "AC",
          "typeLecture": "FINANCIERE",
          "questionEditoriale": "À partir de quand les ajustements sur les volumes, les achats, les équipes ou la maintenance permettent-ils encore de tenir, tout en fragilisant progressivement l'équilibre économique ?",
          "questionPublique": "À quel moment les ajustements économiques qui permettent de tenir commencent-ils à fragiliser la trajectoire industrielle ?",
          "questionActivation": "Vous n'êtes pas attendu sur vos chiffres, vos marges ou vos arbitrages internes. Vous êtes attendu sur votre capacité à lire le moment où un ajustement économique cesse de préserver l'activité et commence à fragiliser sa soutenabilité future.",
          "introMecanisme": "Quand l'activité devient plus difficile à piloter, les entreprises ajustent souvent les volumes, les achats, les investissements, les équipes ou la maintenance. Ces ajustements permettent de tenir, mais peuvent déplacer la contrainte plutôt que la résoudre.",
          "pointBascule": "À partir de quand l'adaptation détruit-elle plus de valeur qu'elle n'en préserve ?",
          "tensionArbitrage": "Maintenir l'activité aujourd'hui sans affaiblir les conditions de sa soutenabilité future.",
          "primaryProfiles": [
            "DAF / CFO industriel",
            "Contrôle de gestion industriel",
            "Corporate finance",
            "Restructuring",
            "Direction générale"
          ],
          "landingPages": [
            "finance"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "Quand les ajustements économiques qui permettent de tenir commencent-ils à fragiliser l’avenir ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — Ajustements économiques et soutenabilité future",
            "chapeau": "Votre intervention permettrait d’éclairer comment les ajustements sur volumes, achats, investissements, équipes ou maintenance permettent de tenir l’activité tout en fragilisant progressivement l’équilibre économique. La discussion porte sur la frontière entre adaptation utile et destruction différée de valeur.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement dans la situation : contraintes, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs impactés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, clients, partenaires, financeurs, filière ou territoire."
              },
              {
                "key": "arbitrages",
                "title": "Arbitrages & décisions",
                "text": "Rendre visibles les choix à effectuer : tenir, différer, investir, transformer, sécuriser, repositionner, redéployer ou renoncer."
              },
              {
                "key": "defis",
                "title": "Défis & opportunités",
                "text": "Mettre en regard ce que la situation fragilise et ce qu’elle peut ouvrir comme trajectoire plus robuste, plus lisible ou mieux assumée."
              },
              {
                "key": "vision",
                "title": "Vision attendue",
                "text": "Formuler une lecture située : ce que votre expérience ou votre pratique permet de reconnaître avant que la bascule ne devienne évidente."
              },
              {
                "key": "echelle",
                "title": "Échelle pertinente",
                "text": "Situer l’analyse à la bonne échelle : site, entreprise, portefeuille, filière, chaîne de valeur, territoire ou cadre de décision."
              }
            ],
            "momentBascule": "À partir de quand l'adaptation détruit-elle plus de valeur qu'elle n'en préserve ?",
            "tensionCentrale": "Maintenir l'activité aujourd'hui sans affaiblir les conditions de sa soutenabilité future.",
            "securisation": "L’échange ne suppose pas de livrer des chiffres, marges, budgets, contrats, coûts internes ou dossiers confidentiels. Il s’agit d’éclairer les mécanismes économiques qui rendent certains arbitrages industriels nécessaires."
          },
          "complementaryCodes": [
            "IND-C1-AC-A02",
            "IND-C1-AC-J01",
            "IND-C1-AC-A03"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste explicitement verrouillée pour éviter les lectures hors contexte ou concurrentes."
        },
        {
          "code": "A03",
          "crmCode": "IND-C1-RC-A03",
          "programmeCode": "IND-C1-RSS-03",
          "conversationCode": "C1",
          "contextCode": "RC",
          "typeLecture": "FINANCIERE",
          "questionEditoriale": "À partir de quand la dette technologique impose-t-elle un saut d'investissement, un changement de périmètre ou une transformation plus profonde de l'outil ?",
          "questionPublique": "Quand une dette technologique cesse-t-elle d'être un retard d'investissement pour devenir une décision de transformation ?",
          "questionActivation": "Vous n'êtes pas attendu sur le montant d'un CAPEX, un plan d'investissement ou un dossier interne. Vous êtes attendu sur votre capacité à lire le moment où une dette technologique ne peut plus être absorbée par des corrections progressives et oblige à arbitrer : investir, changer de périmètre, transformer ou renoncer.",
          "introMecanisme": "La dette technologique s'accumule souvent silencieusement : systèmes hétérogènes, automatismes dépassés, équipements difficiles à maintenir. En crise, elle peut empêcher toute adaptation rapide.",
          "pointBascule": "À partir de quand la dette technologique bloque-t-elle toute adaptation crédible ?",
          "tensionArbitrage": "Reporter l'investissement ou accepter une rupture technologique devenue nécessaire.",
          "primaryProfiles": [
            "Corporate finance",
            "CAPEX industriel",
            "Restructuring",
            "Turnaround",
            "Stratégie d'outil industriel"
          ],
          "landingPages": [
            "finance"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "Quand une dette technologique devient-elle une décision de transformation ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — Dette technologique et saut d’investissement",
            "chapeau": "Votre intervention viserait à analyser comment une dette technologique accumulée peut finir par imposer un saut d’investissement, un changement de périmètre ou une transformation profonde de l’outil.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement dans la situation : contraintes, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs impactés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, clients, partenaires, financeurs, filière ou territoire."
              },
              {
                "key": "arbitrages",
                "title": "Arbitrages & décisions",
                "text": "Rendre visibles les choix à effectuer : tenir, différer, investir, transformer, sécuriser, repositionner, redéployer ou renoncer."
              },
              {
                "key": "defis",
                "title": "Défis & opportunités",
                "text": "Mettre en regard ce que la situation fragilise et ce qu’elle peut ouvrir comme trajectoire plus robuste, plus lisible ou mieux assumée."
              },
              {
                "key": "vision",
                "title": "Vision attendue",
                "text": "Formuler une lecture située : ce que votre expérience ou votre pratique permet de reconnaître avant que la bascule ne devienne évidente."
              },
              {
                "key": "echelle",
                "title": "Échelle pertinente",
                "text": "Situer l’analyse à la bonne échelle : site, entreprise, portefeuille, filière, chaîne de valeur, territoire ou cadre de décision."
              }
            ],
            "momentBascule": "À partir de quand la dette technologique bloque-t-elle toute adaptation crédible ?",
            "tensionCentrale": "Reporter l'investissement ou accepter une rupture technologique devenue nécessaire.",
            "securisation": "L’échange ne suppose pas de livrer des chiffres, marges, budgets, contrats, coûts internes ou dossiers confidentiels. Il s’agit d’éclairer les mécanismes économiques qui rendent certains arbitrages industriels nécessaires."
          },
          "complementaryCodes": [
            "IND-C1-RC-A01",
            "IND-C1-RC-A02",
            "IND-C1-RC-A04"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste explicitement verrouillée pour éviter les lectures hors contexte ou concurrentes."
        },
        {
          "code": "A05",
          "crmCode": "IND-C2-AC-A05",
          "programmeCode": "IND-C2-ASC-01",
          "conversationCode": "C2",
          "contextCode": "AC",
          "typeLecture": "FINANCIERE",
          "questionEditoriale": "À partir de quand la réduction des marges de manœuvre rend-elle une dépendance amont ou logistique trop risquée pour rester pilotée à coût acceptable ?",
          "questionPublique": "Quand une dépendance amont ou logistique change-t-elle de nature dans la lecture économique d'une trajectoire industrielle ?",
          "questionActivation": "Vous n'êtes pas attendu sur vos fournisseurs, vos contrats ou vos coûts internes. Vous êtes attendu sur votre capacité à lire le moment où une dépendance jusque-là acceptable devient économiquement ou opérationnellement trop risquée pour rester pilotée au même coût.",
          "introMecanisme": "Une dépendance peut être acceptable tant que l'entreprise dispose de marges de manœuvre. Lorsque ces marges se réduisent, la même dépendance devient plus coûteuse, plus risquée et plus difficile à piloter.",
          "pointBascule": "Quand la dépendance devient-elle financièrement ou opérationnellement intenable ?",
          "tensionArbitrage": "Préserver l'efficacité d'une dépendance sans subir son coût croissant.",
          "primaryProfiles": [
            "DAF / CFO industriel",
            "Supply chain finance",
            "Achats stratégiques",
            "Turnaround",
            "Compétitivité industrielle"
          ],
          "landingPages": [
            "finance"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "Quand une dépendance amont ou logistique devient-elle économiquement intenable ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — Dépendance amont/logistique devenue trop coûteuse",
            "chapeau": "Votre intervention permettrait d’éclairer comment une dépendance amont ou logistique reste acceptable tant que les marges de manœuvre existent, puis devient trop risquée ou trop coûteuse lorsque ces marges se réduisent.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement dans la situation : contraintes, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs impactés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, clients, partenaires, financeurs, filière ou territoire."
              },
              {
                "key": "arbitrages",
                "title": "Arbitrages & décisions",
                "text": "Rendre visibles les choix à effectuer : tenir, différer, investir, transformer, sécuriser, repositionner, redéployer ou renoncer."
              },
              {
                "key": "defis",
                "title": "Défis & opportunités",
                "text": "Mettre en regard ce que la situation fragilise et ce qu’elle peut ouvrir comme trajectoire plus robuste, plus lisible ou mieux assumée."
              },
              {
                "key": "vision",
                "title": "Vision attendue",
                "text": "Formuler une lecture située : ce que votre expérience ou votre pratique permet de reconnaître avant que la bascule ne devienne évidente."
              },
              {
                "key": "echelle",
                "title": "Échelle pertinente",
                "text": "Situer l’analyse à la bonne échelle : site, entreprise, portefeuille, filière, chaîne de valeur, territoire ou cadre de décision."
              }
            ],
            "momentBascule": "Quand la dépendance devient-elle financièrement ou opérationnellement intenable ?",
            "tensionCentrale": "Préserver l'efficacité d'une dépendance sans subir son coût croissant.",
            "securisation": "L’échange ne suppose pas de livrer des chiffres, marges, budgets, contrats, coûts internes ou dossiers confidentiels. Il s’agit d’éclairer les mécanismes économiques qui rendent certains arbitrages industriels nécessaires."
          },
          "complementaryCodes": [
            "IND-C2-AC-A06",
            "IND-C2-AC-J02",
            "IND-C2-AC-A04"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste explicitement verrouillée pour éviter les lectures hors contexte ou concurrentes."
        },
        {
          "code": "A09",
          "crmCode": "IND-C3-AC-A09",
          "programmeCode": "IND-C3-ASC-01",
          "conversationCode": "C3",
          "contextCode": "AC",
          "typeLecture": "FINANCIERE",
          "questionEditoriale": "Dans un contexte de marges serrées, qu'est-ce qui transforme encore réellement l'outil : un investissement technologique ciblé ou une recomposition plus frugale du process ?",
          "questionPublique": "Quand transformer avec peu de moyens reste-t-il crédible — et quand l'amélioration frugale ne suffit-elle plus ?",
          "questionActivation": "Vous n'êtes pas attendu sur un budget, un plan de transformation ou un arbitrage interne. Vous êtes attendu sur votre lecture du moment où un investissement ciblé, une recomposition frugale ou une transformation plus profonde devient la décision économiquement pertinente.",
          "introMecanisme": "Lorsque les marges sont serrées, transformer l'outil industriel ne signifie pas toujours investir massivement. L'entreprise peut chercher des gains ciblés, mais toutes ces options ne produisent pas le même effet.",
          "pointBascule": "À partir de quand l'amélioration frugale ne suffit-elle plus ?",
          "tensionArbitrage": "Transformer avec peu de moyens sans se limiter à des corrections insuffisantes.",
          "primaryProfiles": [
            "Corporate finance / CAPEX",
            "DAF industriel",
            "Performance industrielle",
            "Investissement ciblé",
            "Restructuring opérationnel"
          ],
          "landingPages": [
            "finance"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "Quand transformer avec peu de moyens reste-t-il crédible — et quand cela ne suffit-il plus ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — Transformer l’outil avec des marges serrées",
            "chapeau": "Votre intervention permettrait d’analyser ce qui transforme réellement un outil industriel lorsque les marges sont serrées : investissement ciblé, recomposition frugale du process, simplification, priorisation ou transformation plus profonde.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement dans la situation : contraintes, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs impactés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, clients, partenaires, financeurs, filière ou territoire."
              },
              {
                "key": "arbitrages",
                "title": "Arbitrages & décisions",
                "text": "Rendre visibles les choix à effectuer : tenir, différer, investir, transformer, sécuriser, repositionner, redéployer ou renoncer."
              },
              {
                "key": "defis",
                "title": "Défis & opportunités",
                "text": "Mettre en regard ce que la situation fragilise et ce qu’elle peut ouvrir comme trajectoire plus robuste, plus lisible ou mieux assumée."
              },
              {
                "key": "vision",
                "title": "Vision attendue",
                "text": "Formuler une lecture située : ce que votre expérience ou votre pratique permet de reconnaître avant que la bascule ne devienne évidente."
              },
              {
                "key": "echelle",
                "title": "Échelle pertinente",
                "text": "Situer l’analyse à la bonne échelle : site, entreprise, portefeuille, filière, chaîne de valeur, territoire ou cadre de décision."
              }
            ],
            "momentBascule": "À partir de quand l'amélioration frugale ne suffit-elle plus ?",
            "tensionCentrale": "Transformer avec peu de moyens sans se limiter à des corrections insuffisantes.",
            "securisation": "L’échange ne suppose pas de livrer des chiffres, marges, budgets, contrats, coûts internes ou dossiers confidentiels. Il s’agit d’éclairer les mécanismes économiques qui rendent certains arbitrages industriels nécessaires."
          },
          "complementaryCodes": [
            "IND-C3-AC-A12",
            "IND-C3-AC-A02",
            "IND-C3-AC-J03"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste explicitement verrouillée pour éviter les lectures hors contexte ou concurrentes."
        },
        {
          "code": "A14",
          "crmCode": "IND-C4-AC-A14",
          "programmeCode": "IND-C4-ASC-02",
          "conversationCode": "C4",
          "contextCode": "AC",
          "typeLecture": "FINANCIERE",
          "questionEditoriale": "À partir de quand les coûts d'énergie, d'eau ou de conformité environnementale limitent-ils la capacité à ajuster l'activité sans dégrader la compétitivité ?",
          "questionPublique": "Quand les coûts de ressources cessent-ils d'être des surcoûts absorbables pour devenir des paramètres de transformation ?",
          "questionActivation": "Vous n'êtes pas attendu sur vos coûts d'énergie, d'eau ou de conformité. Vous êtes attendu sur votre capacité à lire le moment où ces coûts cessent d'être de simples variables d'ajustement et deviennent des paramètres structurants de compétitivité, d'investissement ou de transformation industrielle.",
          "introMecanisme": "Les coûts de l'énergie, de l'eau et de la conformité environnementale pèsent de plus en plus directement sur les équilibres industriels. En contexte contraint, ils réduisent les marges d'action.",
          "pointBascule": "À partir de quand les coûts rendent-ils l'activité difficilement ajustable ?",
          "tensionArbitrage": "Absorber les surcoûts pour préserver la compétitivité à court terme ou investir dans la transformation.",
          "primaryProfiles": [
            "DAF / CFO industriel",
            "Énergie / ressources",
            "Corporate finance",
            "Compétitivité industrielle",
            "Décarbonation / utilités"
          ],
          "landingPages": [
            "finance"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "Quand les coûts de ressources deviennent-ils des paramètres de transformation industrielle ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — Coûts énergie, eau, conformité et compétitivité",
            "chapeau": "Votre intervention permettrait d’éclairer comment les coûts d’énergie, d’eau ou de conformité environnementale cessent d’être de simples surcoûts absorbables et deviennent des paramètres structurants de compétitivité, d’investissement ou de transformation industrielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement dans la situation : contraintes, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs impactés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, clients, partenaires, financeurs, filière ou territoire."
              },
              {
                "key": "arbitrages",
                "title": "Arbitrages & décisions",
                "text": "Rendre visibles les choix à effectuer : tenir, différer, investir, transformer, sécuriser, repositionner, redéployer ou renoncer."
              },
              {
                "key": "defis",
                "title": "Défis & opportunités",
                "text": "Mettre en regard ce que la situation fragilise et ce qu’elle peut ouvrir comme trajectoire plus robuste, plus lisible ou mieux assumée."
              },
              {
                "key": "vision",
                "title": "Vision attendue",
                "text": "Formuler une lecture située : ce que votre expérience ou votre pratique permet de reconnaître avant que la bascule ne devienne évidente."
              },
              {
                "key": "echelle",
                "title": "Échelle pertinente",
                "text": "Situer l’analyse à la bonne échelle : site, entreprise, portefeuille, filière, chaîne de valeur, territoire ou cadre de décision."
              }
            ],
            "momentBascule": "À partir de quand les coûts rendent-ils l'activité difficilement ajustable ?",
            "tensionCentrale": "Absorber les surcoûts pour préserver la compétitivité à court terme ou investir dans la transformation.",
            "securisation": "L’échange ne suppose pas de livrer des chiffres, marges, budgets, contrats, coûts internes ou dossiers confidentiels. Il s’agit d’éclairer les mécanismes économiques qui rendent certains arbitrages industriels nécessaires."
          },
          "complementaryCodes": [
            "IND-C4-AC-A15",
            "IND-C4-AC-J04",
            "IND-C4-AC-A01"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste explicitement verrouillée pour éviter les lectures hors contexte ou concurrentes."
        },
        {
          "code": "J01",
          "crmCode": "IND-C1-AC-J01",
          "programmeCode": "IND-C1-ASC-J01",
          "conversationCode": "C1",
          "contextCode": "AC",
          "typeLecture": "JURIDIQUE",
          "questionEditoriale": "À partir de quand le cadre social, contractuel ou réglementaire transforme-t-il un ajustement économique en point de bascule industriel ?",
          "questionPublique": "Quand le cadre juridique cesse-t-il d’accompagner l’ajustement pour devenir une condition de soutenabilité ?",
          "questionActivation": "Vous n’êtes pas attendu sur un dossier, un contentieux ou une analyse juridique exhaustive. Vous êtes attendu sur votre capacité à lire le moment où le cadre social, contractuel, réglementaire ou de responsabilité change la nature d’un arbitrage industriel.",
          "introMecanisme": "Lorsque l’activité tient encore au prix d’ajustements répétés, le cadre juridique peut rester invisible puis devenir décisif : obligations sociales, contrats, responsabilités, délais, autorisations, conformité ou risques de contentieux.",
          "pointBascule": "À partir de quand le cadre transforme-t-il une difficulté économique en point de bascule industriel ?",
          "tensionArbitrage": "Sécuriser l’ajustement sans masquer le moment où le cadre impose de réarbitrer.",
          "primaryProfiles": [
            "Avocat droit social",
            "Avocat restructuring",
            "Avocat contrats industriels",
            "Direction juridique",
            "Direction conformité",
            "Secrétariat général"
          ],
          "landingPages": [
            "juridique"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "Quand le cadre juridique transforme-t-il un ajustement économique en point de bascule industriel ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — Cadre juridique et ajustement industriel sous contrainte",
            "chapeau": "Votre intervention permettrait d’éclairer comment le droit social, les contrats, la responsabilité ou la conformité peuvent transformer un ajustement économique en décision industrielle plus profonde.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement dans la situation : contraintes, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs impactés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, clients, partenaires, financeurs, filière ou territoire."
              },
              {
                "key": "arbitrages",
                "title": "Arbitrages & décisions",
                "text": "Rendre visibles les choix à effectuer : tenir, différer, investir, transformer, sécuriser, repositionner, redéployer ou renoncer."
              },
              {
                "key": "defis",
                "title": "Défis & opportunités",
                "text": "Mettre en regard ce que la situation fragilise et ce qu’elle peut ouvrir comme trajectoire plus robuste, plus lisible ou mieux assumée."
              },
              {
                "key": "vision",
                "title": "Vision attendue",
                "text": "Formuler une lecture située : ce que votre expérience ou votre pratique permet de reconnaître avant que la bascule ne devienne évidente."
              },
              {
                "key": "echelle",
                "title": "Échelle pertinente",
                "text": "Situer l’analyse à la bonne échelle : site, entreprise, portefeuille, filière, chaîne de valeur, territoire ou cadre de décision."
              }
            ],
            "momentBascule": "À partir de quand le cadre transforme-t-il une difficulté économique en point de bascule industriel ?",
            "tensionCentrale": "Sécuriser l’ajustement sans masquer le moment où le cadre impose de réarbitrer.",
            "securisation": "L’échange ne suppose pas de commenter un dossier, un contentieux, un client ou une situation identifiable. Il s’agit d’éclairer le rôle du cadre juridique, réglementaire ou normatif dans une décision industrielle."
          },
          "complementaryCodes": [
            "IND-C1-AC-A01",
            "IND-C1-AC-A02",
            "IND-C1-AC-A03"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste explicitement verrouillée pour éviter les lectures hors contexte ou concurrentes."
        },
        {
          "code": "J02",
          "crmCode": "IND-C2-AC-J02",
          "programmeCode": "IND-C2-ASC-J02",
          "conversationCode": "C2",
          "contextCode": "AC",
          "typeLecture": "JURIDIQUE",
          "questionEditoriale": "À partir de quand une dépendance de filière devient-elle aussi un sujet contractuel, réglementaire ou de responsabilité ?",
          "questionPublique": "Quand une dépendance industrielle devient-elle un risque juridique ou contractuel structurant ?",
          "questionActivation": "Vous n’êtes pas attendu sur un contrat ou un dossier identifiable. Vous êtes attendu sur votre lecture du moment où une dépendance amont, fournisseur, logistique, réglementaire ou de filière cesse d’être seulement opérationnelle et devient un sujet de sécurisation juridique.",
          "introMecanisme": "Les dépendances de filière ne sont pas seulement industrielles : elles se traduisent dans des contrats, des responsabilités, des obligations, des garanties, des délais et des rapports de force.",
          "pointBascule": "À partir de quand la dépendance devient-elle juridiquement structurante pour la trajectoire industrielle ?",
          "tensionArbitrage": "S’adapter dans la filière sans laisser le cadre contractuel ou réglementaire fragiliser la position future.",
          "primaryProfiles": [
            "Avocat contrats industriels",
            "Avocat droit des affaires",
            "Direction juridique",
            "Affaires réglementaires",
            "Compliance",
            "Conseil risques industriels"
          ],
          "landingPages": [
            "juridique"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "Quand une dépendance industrielle devient-elle aussi un sujet juridique structurant ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — Dépendance de filière, contrats et responsabilité",
            "chapeau": "Votre intervention permettrait d’éclairer le moment où une dépendance de filière ou de segment devient aussi un sujet contractuel, réglementaire ou de responsabilité.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement dans la situation : contraintes, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs impactés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, clients, partenaires, financeurs, filière ou territoire."
              },
              {
                "key": "arbitrages",
                "title": "Arbitrages & décisions",
                "text": "Rendre visibles les choix à effectuer : tenir, différer, investir, transformer, sécuriser, repositionner, redéployer ou renoncer."
              },
              {
                "key": "defis",
                "title": "Défis & opportunités",
                "text": "Mettre en regard ce que la situation fragilise et ce qu’elle peut ouvrir comme trajectoire plus robuste, plus lisible ou mieux assumée."
              },
              {
                "key": "vision",
                "title": "Vision attendue",
                "text": "Formuler une lecture située : ce que votre expérience ou votre pratique permet de reconnaître avant que la bascule ne devienne évidente."
              },
              {
                "key": "echelle",
                "title": "Échelle pertinente",
                "text": "Situer l’analyse à la bonne échelle : site, entreprise, portefeuille, filière, chaîne de valeur, territoire ou cadre de décision."
              }
            ],
            "momentBascule": "À partir de quand la dépendance devient-elle juridiquement structurante pour la trajectoire industrielle ?",
            "tensionCentrale": "S’adapter dans la filière sans laisser le cadre contractuel ou réglementaire fragiliser la position future.",
            "securisation": "L’échange ne suppose pas de commenter un dossier, un contentieux, un client ou une situation identifiable. Il s’agit d’éclairer le rôle du cadre juridique, réglementaire ou normatif dans une décision industrielle."
          },
          "complementaryCodes": [
            "IND-C2-AC-A05",
            "IND-C2-AC-A06",
            "IND-C2-AC-A04"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste explicitement verrouillée pour éviter les lectures hors contexte ou concurrentes."
        },
        {
          "code": "J03",
          "crmCode": "IND-C3-AC-J03",
          "programmeCode": "IND-C3-ASC-J03",
          "conversationCode": "C3",
          "contextCode": "AC",
          "typeLecture": "JURIDIQUE",
          "questionEditoriale": "À partir de quand la transformation de l’outil se heurte-t-elle à un cadre d’autorisation, de conformité ou de responsabilité qui change la décision ?",
          "questionPublique": "Quand la transformation de l’outil devient-elle aussi une décision juridique, réglementaire ou de conformité ?",
          "questionActivation": "Vous n’êtes pas attendu sur un dossier d’autorisation ou un plan de transformation interne. Vous êtes attendu sur votre capacité à lire le moment où normes, conformité, responsabilité, environnement, sécurité ou autorisations changent les conditions de transformation de l’outil.",
          "introMecanisme": "Transformer un outil industriel ne relève pas seulement du CAPEX ou du process : le cadre d’autorisation, de conformité, de sécurité, d’environnement et de responsabilité peut redéfinir ce qui est réellement possible.",
          "pointBascule": "À partir de quand le cadre juridique ou réglementaire modifie-t-il le chemin de transformation de l’outil ?",
          "tensionArbitrage": "Transformer l’outil sans sous-estimer le cadre qui rend la décision possible, risquée ou impossible.",
          "primaryProfiles": [
            "Avocat environnement / ICPE",
            "Avocat conformité",
            "Direction juridique",
            "Affaires réglementaires",
            "HSE / risques",
            "Secrétariat général"
          ],
          "landingPages": [
            "juridique"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "Quand transformer l’outil devient-il aussi un arbitrage juridique et réglementaire ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — Transformation de l’outil, conformité et responsabilité",
            "chapeau": "Votre intervention permettrait d’éclairer comment autorisations, conformité, normes, sécurité ou responsabilité peuvent transformer un projet industriel en arbitrage juridique et réglementaire.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement dans la situation : contraintes, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs impactés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, clients, partenaires, financeurs, filière ou territoire."
              },
              {
                "key": "arbitrages",
                "title": "Arbitrages & décisions",
                "text": "Rendre visibles les choix à effectuer : tenir, différer, investir, transformer, sécuriser, repositionner, redéployer ou renoncer."
              },
              {
                "key": "defis",
                "title": "Défis & opportunités",
                "text": "Mettre en regard ce que la situation fragilise et ce qu’elle peut ouvrir comme trajectoire plus robuste, plus lisible ou mieux assumée."
              },
              {
                "key": "vision",
                "title": "Vision attendue",
                "text": "Formuler une lecture située : ce que votre expérience ou votre pratique permet de reconnaître avant que la bascule ne devienne évidente."
              },
              {
                "key": "echelle",
                "title": "Échelle pertinente",
                "text": "Situer l’analyse à la bonne échelle : site, entreprise, portefeuille, filière, chaîne de valeur, territoire ou cadre de décision."
              }
            ],
            "momentBascule": "À partir de quand le cadre juridique ou réglementaire modifie-t-il le chemin de transformation de l’outil ?",
            "tensionCentrale": "Transformer l’outil sans sous-estimer le cadre qui rend la décision possible, risquée ou impossible.",
            "securisation": "L’échange ne suppose pas de commenter un dossier, un contentieux, un client ou une situation identifiable. Il s’agit d’éclairer le rôle du cadre juridique, réglementaire ou normatif dans une décision industrielle."
          },
          "complementaryCodes": [
            "IND-C3-AC-A09",
            "IND-C3-AC-A12",
            "IND-C3-AC-A02"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste explicitement verrouillée pour éviter les lectures hors contexte ou concurrentes."
        },
        {
          "code": "J04",
          "crmCode": "IND-C4-AC-J04",
          "programmeCode": "IND-C4-ASC-J04",
          "conversationCode": "C4",
          "contextCode": "AC",
          "typeLecture": "JURIDIQUE",
          "questionEditoriale": "À partir de quand les coûts d’énergie, d’eau ou de conformité environnementale deviennent-ils un facteur juridique de réarbitrage industriel ?",
          "questionPublique": "Quand le cadre environnemental, énergie ou conformité devient-il un facteur de bascule industrielle ?",
          "questionActivation": "Vous n’êtes pas attendu sur un audit, un contentieux ou des données internes. Vous êtes attendu sur votre lecture du moment où l’énergie, l’eau, la conformité environnementale, la responsabilité ou les obligations réglementaires changent la soutenabilité d’une trajectoire industrielle.",
          "introMecanisme": "Les coûts et obligations liés à l’énergie, à l’eau, à la conformité ou à l’environnement peuvent cesser d’être de simples contraintes d’exploitation et devenir des facteurs de réarbitrage.",
          "pointBascule": "À partir de quand le cadre environnemental ou réglementaire rend-il la trajectoire difficilement ajustable ?",
          "tensionArbitrage": "Préserver l’activité sans ignorer le moment où le cadre environnemental ou réglementaire impose de transformer.",
          "primaryProfiles": [
            "Avocat environnement",
            "Avocat énergie / réglementation",
            "Direction juridique",
            "Direction conformité",
            "Affaires publiques / réglementaires",
            "Conseil risques"
          ],
          "landingPages": [
            "juridique"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "Quand l’environnement, l’énergie ou la conformité deviennent-ils un facteur juridique de réarbitrage ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — Environnement, énergie, conformité et réarbitrage",
            "chapeau": "Votre intervention permettrait d’éclairer comment l’environnement, l’énergie, l’eau, les obligations réglementaires ou la responsabilité deviennent des paramètres structurants de réarbitrage industriel.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement dans la situation : contraintes, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs impactés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, clients, partenaires, financeurs, filière ou territoire."
              },
              {
                "key": "arbitrages",
                "title": "Arbitrages & décisions",
                "text": "Rendre visibles les choix à effectuer : tenir, différer, investir, transformer, sécuriser, repositionner, redéployer ou renoncer."
              },
              {
                "key": "defis",
                "title": "Défis & opportunités",
                "text": "Mettre en regard ce que la situation fragilise et ce qu’elle peut ouvrir comme trajectoire plus robuste, plus lisible ou mieux assumée."
              },
              {
                "key": "vision",
                "title": "Vision attendue",
                "text": "Formuler une lecture située : ce que votre expérience ou votre pratique permet de reconnaître avant que la bascule ne devienne évidente."
              },
              {
                "key": "echelle",
                "title": "Échelle pertinente",
                "text": "Situer l’analyse à la bonne échelle : site, entreprise, portefeuille, filière, chaîne de valeur, territoire ou cadre de décision."
              }
            ],
            "momentBascule": "À partir de quand le cadre environnemental ou réglementaire rend-il la trajectoire difficilement ajustable ?",
            "tensionCentrale": "Préserver l’activité sans ignorer le moment où le cadre environnemental ou réglementaire impose de transformer.",
            "securisation": "L’échange ne suppose pas de commenter un dossier, un contentieux, un client ou une situation identifiable. Il s’agit d’éclairer le rôle du cadre juridique, réglementaire ou normatif dans une décision industrielle."
          },
          "complementaryCodes": [
            "IND-C4-AC-A14",
            "IND-C4-AC-A15",
            "IND-C4-AC-A04"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste explicitement verrouillée pour éviter les lectures hors contexte ou concurrentes."
        },
        {
          "code": "A02",
          "crmCode": "IND-C1-GS-A02",
          "programmeCode": "IND-C1-CST-02",
          "conversationCode": "C1",
          "contextCode": "GS",
          "typeLecture": "OPERATIONNELLE",
          "questionEditoriale": "Quels arbitrages de cadence, de stocks, de maintenance ou de qualité permettent d'absorber la demande tout en mettant sous tension l'organisation industrielle à moyen terme ?",
          "questionPublique": "Quels arbitrages de cadence, de stocks, de maintenance ou de qualité permettent d'absorber la demande tout en mettant sous tension l'organisation industrielle à moyen terme ?",
          "questionActivation": "Lorsque la demande augmente, l'entreprise peut absorber une partie de la croissance en jouant sur les cadences, les stocks, les plannings, la maintenance ou les contrôles qualité. Ces leviers permettent de répondre rapidement au marché, mais chacun porte un coût différé.",
          "introMecanisme": "Lorsque la demande augmente, l'entreprise peut absorber une partie de la croissance en jouant sur les cadences, les stocks, les plannings, la maintenance ou les contrôles qualité. Ces leviers permettent de répondre rapidement au marché, mais chacun porte un coût différé.",
          "formatCourt": {
            "titrePublicCourt": "Quels arbitrages de cadence, de stocks, de maintenance ou de qualité permettent d'absorber la demande tout en mettant sous tension l'organisation industrielle à moyen terme ?",
            "usage": "Titre court source pour lectures complémentaires."
          },
          "primaryProfiles": [
            "Direction industrielle",
            "Direction des opérations",
            "Excellence opérationnelle",
            "Supply chain",
            "Performance industrielle"
          ],
          "showInConversationPage": true,
          "showInForm": false,
          "isComplementaryStub": true
        },
        {
          "code": "A03",
          "crmCode": "IND-C1-GS-A03",
          "programmeCode": "IND-C1-CST-03",
          "conversationCode": "C1",
          "contextCode": "GS",
          "typeLecture": "TECHNOLOGIQUE",
          "questionEditoriale": "À partir de quand l'architecture de l'outil limite-t-elle la capacité à franchir un cap de volume, de qualité ou de fiabilité ?",
          "questionPublique": "À partir de quand l'architecture de l'outil limite-t-elle la capacité à franchir un cap de volume, de qualité ou de fiabilité ?",
          "questionActivation": "Un outil industriel peut accompagner une croissance pendant un certain temps. Mais l'architecture initiale finit parfois par imposer ses limites : organisation des lignes, capacité des machines, interfaces numériques, contraintes de maintenance ou standards de qualité.",
          "introMecanisme": "Un outil industriel peut accompagner une croissance pendant un certain temps. Mais l'architecture initiale finit parfois par imposer ses limites : organisation des lignes, capacité des machines, interfaces numériques, contraintes de maintenance ou standards de qualité.",
          "formatCourt": {
            "titrePublicCourt": "À partir de quand l'architecture de l'outil limite-t-elle la capacité à franchir un cap de volume, de qualité ou de fiabilité ?",
            "usage": "Titre court source pour lectures complémentaires."
          },
          "primaryProfiles": [
            "Architecture systèmes industriels",
            "Automatisation industrielle",
            "DSI industriel",
            "Transformation digitale industrielle",
            "Maintenance / outil"
          ],
          "showInConversationPage": true,
          "showInForm": false,
          "isComplementaryStub": true
        },
        {
          "code": "A04",
          "crmCode": "IND-C1-GS-A04",
          "programmeCode": "IND-C1-CST-04",
          "conversationCode": "C1",
          "contextCode": "GS",
          "typeLecture": "RH_COMPETENCES",
          "questionEditoriale": "À partir de quand le délai nécessaire pour recruter, équiper, industrialiser ou sécuriser la montée en capacité devient-il incompatible avec le rythme de la demande ?",
          "questionPublique": "À partir de quand le délai nécessaire pour recruter, équiper, industrialiser ou sécuriser la montée en capacité devient-il incompatible avec le rythme de la demande ?",
          "questionActivation": "La croissance industrielle dépend aussi du temps nécessaire pour recruter, former, équiper, qualifier, industrialiser et sécuriser la montée en capacité. Or le marché peut accélérer plus vite que l'organisation ne sait se transformer.",
          "introMecanisme": "La croissance industrielle dépend aussi du temps nécessaire pour recruter, former, équiper, qualifier, industrialiser et sécuriser la montée en capacité. Or le marché peut accélérer plus vite que l'organisation ne sait se transformer.",
          "formatCourt": {
            "titrePublicCourt": "À partir de quand le délai nécessaire pour recruter, équiper, industrialiser ou sécuriser la montée en capacité devient-il incompatible avec le rythme de la demande ?",
            "usage": "Titre court source pour lectures complémentaires."
          },
          "primaryProfiles": [
            "DRH industriel",
            "Responsable compétences",
            "Formation industrielle",
            "Organisation du travail",
            "Dialogue social"
          ],
          "showInConversationPage": true,
          "showInForm": false,
          "isComplementaryStub": true
        },
        {
          "code": "A02",
          "crmCode": "IND-C1-AC-A02",
          "programmeCode": "IND-C1-ASC-02",
          "conversationCode": "C1",
          "contextCode": "AC",
          "typeLecture": "OPERATIONNELLE",
          "questionEditoriale": "Quels arbitrages permettent de maintenir l'activité lorsque les marges de manœuvre sur volumes, qualité, maintenance ou périmètre se resserrent ?",
          "questionPublique": "Quels arbitrages permettent de maintenir l'activité lorsque les marges de manœuvre sur volumes, qualité, maintenance ou périmètre se resserrent ?",
          "questionActivation": "Dans un contexte contraint, maintenir l'activité suppose souvent de choisir entre des options imparfaites. Réduire certains volumes peut préserver la marge mais fragiliser la relation client. Reporter la maintenance peut libérer de la capacité mais accroître le risque industriel.",
          "introMecanisme": "Dans un contexte contraint, maintenir l'activité suppose souvent de choisir entre des options imparfaites. Réduire certains volumes peut préserver la marge mais fragiliser la relation client. Reporter la maintenance peut libérer de la capacité mais accroître le risque industriel.",
          "formatCourt": {
            "titrePublicCourt": "Quels arbitrages permettent de maintenir l'activité lorsque les marges de manœuvre sur volumes, qualité, maintenance ou périmètre se resserrent ?",
            "usage": "Titre court source pour lectures complémentaires."
          },
          "primaryProfiles": [
            "Direction industrielle",
            "Direction des opérations",
            "Excellence opérationnelle",
            "Supply chain",
            "Performance industrielle"
          ],
          "showInConversationPage": true,
          "showInForm": false,
          "isComplementaryStub": true
        },
        {
          "code": "A03",
          "crmCode": "IND-C1-AC-A03",
          "programmeCode": "IND-C1-ASC-03",
          "conversationCode": "C1",
          "contextCode": "AC",
          "typeLecture": "TECHNOLOGIQUE",
          "questionEditoriale": "À partir de quand le vieillissement de l'outil impose-t-il des compromis de plus en plus coûteux pour maintenir la production ?",
          "questionPublique": "À partir de quand le vieillissement de l'outil impose-t-il des compromis de plus en plus coûteux pour maintenir la production ?",
          "questionActivation": "Un outil vieillissant peut rester productif lorsqu'il est bien entretenu. Mais en contexte de contrainte, ce vieillissement devient plus difficile à absorber : les pannes coûtent davantage, les pièces se raréfient, la maintenance prend plus de place.",
          "introMecanisme": "Un outil vieillissant peut rester productif lorsqu'il est bien entretenu. Mais en contexte de contrainte, ce vieillissement devient plus difficile à absorber : les pannes coûtent davantage, les pièces se raréfient, la maintenance prend plus de place.",
          "formatCourt": {
            "titrePublicCourt": "À partir de quand le vieillissement de l'outil impose-t-il des compromis de plus en plus coûteux pour maintenir la production ?",
            "usage": "Titre court source pour lectures complémentaires."
          },
          "primaryProfiles": [
            "Architecture systèmes industriels",
            "Automatisation industrielle",
            "DSI industriel",
            "Transformation digitale industrielle",
            "Maintenance / outil"
          ],
          "showInConversationPage": true,
          "showInForm": false,
          "isComplementaryStub": true
        },
        {
          "code": "A04",
          "crmCode": "IND-C1-AC-A04",
          "programmeCode": "IND-C1-ASC-04",
          "conversationCode": "C1",
          "contextCode": "AC",
          "typeLecture": "RH_COMPETENCES",
          "questionEditoriale": "À partir de quand le temps nécessaire pour adapter l'outil ou réorganiser la production dépasse-t-il la capacité réelle de l'activité à tenir ?",
          "questionPublique": "À partir de quand le temps nécessaire pour adapter l'outil ou réorganiser la production dépasse-t-il la capacité réelle de l'activité à tenir ?",
          "questionActivation": "S'adapter prend du temps : reconfigurer un atelier, redéployer des équipes, qualifier un nouveau process. Mais lorsque les contraintes s'intensifient, l'entreprise ne dispose pas toujours de ce temps.",
          "introMecanisme": "S'adapter prend du temps : reconfigurer un atelier, redéployer des équipes, qualifier un nouveau process. Mais lorsque les contraintes s'intensifient, l'entreprise ne dispose pas toujours de ce temps.",
          "formatCourt": {
            "titrePublicCourt": "À partir de quand le temps nécessaire pour adapter l'outil ou réorganiser la production dépasse-t-il la capacité réelle de l'activité à tenir ?",
            "usage": "Titre court source pour lectures complémentaires."
          },
          "primaryProfiles": [
            "DRH industriel",
            "Responsable compétences",
            "Formation industrielle",
            "Organisation du travail",
            "Dialogue social"
          ],
          "showInConversationPage": true,
          "showInForm": false,
          "isComplementaryStub": true
        },
        {
          "code": "A02",
          "crmCode": "IND-C1-RC-A02",
          "programmeCode": "IND-C1-RSS-02",
          "conversationCode": "C1",
          "contextCode": "RC",
          "typeLecture": "OPERATIONNELLE",
          "questionEditoriale": "À partir de quand le maintien de l'activité appelle-t-il une décision de transformation plutôt qu'une simple adaptation opérationnelle ?",
          "questionPublique": "À partir de quand le maintien de l'activité appelle-t-il une décision de transformation plutôt qu'une simple adaptation opérationnelle ?",
          "questionActivation": "En situation de crise, continuer à produire peut donner l'impression que l'activité tient encore. Pourtant, ce maintien apparent peut masquer une perte de rationalité : coûts excessifs, efforts disproportionnés, désorganisation chronique.",
          "introMecanisme": "En situation de crise, continuer à produire peut donner l'impression que l'activité tient encore. Pourtant, ce maintien apparent peut masquer une perte de rationalité : coûts excessifs, efforts disproportionnés, désorganisation chronique.",
          "formatCourt": {
            "titrePublicCourt": "À partir de quand le maintien de l'activité appelle-t-il une décision de transformation plutôt qu'une simple adaptation opérationnelle ?",
            "usage": "Titre court source pour lectures complémentaires."
          },
          "primaryProfiles": [
            "Direction industrielle",
            "Direction des opérations",
            "Excellence opérationnelle",
            "Supply chain",
            "Performance industrielle"
          ],
          "showInConversationPage": true,
          "showInForm": false,
          "isComplementaryStub": true
        },
        {
          "code": "A04",
          "crmCode": "IND-C1-RC-A04",
          "programmeCode": "IND-C1-RSS-04",
          "conversationCode": "C1",
          "contextCode": "RC",
          "typeLecture": "TERRITORIALE",
          "questionEditoriale": "À partir de quand le délai requis pour redéployer, reconvertir ou refonder l'outil dépasse-t-il le temps économique, social ou financier encore disponible ?",
          "questionPublique": "À partir de quand le délai requis pour redéployer, reconvertir ou refonder l'outil dépasse-t-il le temps économique, social ou financier encore disponible ?",
          "questionActivation": "Réinventer un outil industriel suppose du temps : diagnostiquer, investir, reconvertir, former, négocier, sécuriser les financements et accompagner les impacts sociaux. Mais en période de crise, ce temps peut manquer.",
          "introMecanisme": "Réinventer un outil industriel suppose du temps : diagnostiquer, investir, reconvertir, former, négocier, sécuriser les financements et accompagner les impacts sociaux. Mais en période de crise, ce temps peut manquer.",
          "formatCourt": {
            "titrePublicCourt": "À partir de quand le délai requis pour redéployer, reconvertir ou refonder l'outil dépasse-t-il le temps économique, social ou financier encore disponible ?",
            "usage": "Titre court source pour lectures complémentaires."
          },
          "primaryProfiles": [
            "Développement économique territorial",
            "Collectivité / territoire industriel",
            "Aménagement / foncier",
            "Écosystème local",
            "Acteur public"
          ],
          "showInConversationPage": true,
          "showInForm": false,
          "isComplementaryStub": true
        },
        {
          "code": "A02",
          "crmCode": "IND-C2-GS-A02",
          "programmeCode": "IND-C2-CST-02",
          "conversationCode": "C2",
          "contextCode": "GS",
          "typeLecture": "TERRITORIALE",
          "questionEditoriale": "À partir de quand une spécialisation de filière ou de segment limite-t-elle la capacité à capter durablement la croissance ?",
          "questionPublique": "À partir de quand une spécialisation de filière ou de segment limite-t-elle la capacité à capter durablement la croissance ?",
          "questionActivation": "La spécialisation peut constituer un avantage puissant. Mais elle peut aussi devenir une dépendance lorsque la croissance exige de changer d'échelle, de diversifier les débouchés ou de répondre à des attentes nouvelles.",
          "introMecanisme": "La spécialisation peut constituer un avantage puissant. Mais elle peut aussi devenir une dépendance lorsque la croissance exige de changer d'échelle, de diversifier les débouchés ou de répondre à des attentes nouvelles.",
          "formatCourt": {
            "titrePublicCourt": "À partir de quand une spécialisation de filière ou de segment limite-t-elle la capacité à capter durablement la croissance ?",
            "usage": "Titre court source pour lectures complémentaires."
          },
          "primaryProfiles": [
            "Développement économique territorial",
            "Collectivité / territoire industriel",
            "Aménagement / foncier",
            "Écosystème local",
            "Acteur public"
          ],
          "showInConversationPage": true,
          "showInForm": false,
          "isComplementaryStub": true
        },
        {
          "code": "A03",
          "crmCode": "IND-C2-GS-A03",
          "programmeCode": "IND-C2-CST-03",
          "conversationCode": "C2",
          "contextCode": "GS",
          "typeLecture": "JURIDIQUE",
          "questionEditoriale": "À partir de quand l'ouverture commerciale, les normes ou les contraintes export deviennent-elles un facteur structurant de continuité industrielle ?",
          "questionPublique": "À partir de quand l'ouverture commerciale, les normes ou les contraintes export deviennent-elles un facteur structurant de continuité industrielle ?",
          "questionActivation": "La croissance industrielle passe souvent par de nouveaux marchés. Mais cette ouverture introduit aussi des règles : normes, douanes, certifications, contrôles export, contraintes géopolitiques.",
          "introMecanisme": "La croissance industrielle passe souvent par de nouveaux marchés. Mais cette ouverture introduit aussi des règles : normes, douanes, certifications, contrôles export, contraintes géopolitiques.",
          "formatCourt": {
            "titrePublicCourt": "À partir de quand l'ouverture commerciale, les normes ou les contraintes export deviennent-elles un facteur structurant de continuité industrielle ?",
            "usage": "Titre court source pour lectures complémentaires."
          },
          "primaryProfiles": [
            "Avocat droit des affaires",
            "Avocat contrats industriels",
            "Avocat environnement / ICPE",
            "Direction juridique",
            "Conformité / affaires réglementaires"
          ],
          "showInConversationPage": true,
          "showInForm": false,
          "isComplementaryStub": true
        },
        {
          "code": "A04",
          "crmCode": "IND-C2-GS-A04",
          "programmeCode": "IND-C2-CST-04",
          "conversationCode": "C2",
          "contextCode": "GS",
          "typeLecture": "TECHNOLOGIQUE",
          "questionEditoriale": "À partir de quand la montée en charge révèle-t-elle que l'architecture des systèmes, automatismes ou intégrations n'est plus à l'échelle de l'activité ?",
          "questionPublique": "À partir de quand la montée en charge révèle-t-elle que l'architecture des systèmes, automatismes ou intégrations n'est plus à l'échelle de l'activité ?",
          "questionActivation": "La croissance industrielle repose de plus en plus sur des systèmes. Tant que l'activité reste stable, une architecture imparfaite peut fonctionner. Mais lorsque les volumes augmentent, les limites apparaissent.",
          "introMecanisme": "La croissance industrielle repose de plus en plus sur des systèmes. Tant que l'activité reste stable, une architecture imparfaite peut fonctionner. Mais lorsque les volumes augmentent, les limites apparaissent.",
          "formatCourt": {
            "titrePublicCourt": "À partir de quand la montée en charge révèle-t-elle que l'architecture des systèmes, automatismes ou intégrations n'est plus à l'échelle de l'activité ?",
            "usage": "Titre court source pour lectures complémentaires."
          },
          "primaryProfiles": [
            "Architecture systèmes industriels",
            "Automatisation industrielle",
            "DSI industriel",
            "Transformation digitale industrielle",
            "Maintenance / outil"
          ],
          "showInConversationPage": true,
          "showInForm": false,
          "isComplementaryStub": true
        },
        {
          "code": "A04",
          "crmCode": "IND-C2-AC-A04",
          "programmeCode": "IND-C2-ASC-04",
          "conversationCode": "C2",
          "contextCode": "AC",
          "typeLecture": "TECHNOLOGIQUE",
          "questionEditoriale": "À partir de quand les interfaces entre systèmes, sites ou métiers deviennent-elles un facteur déterminant de performance et de pilotage ?",
          "questionPublique": "À partir de quand les interfaces entre systèmes, sites ou métiers deviennent-elles un facteur déterminant de performance et de pilotage ?",
          "questionActivation": "En contexte contraint, la performance dépend moins de la puissance de chaque outil que de la qualité des interfaces entre eux. Lorsque ces interfaces sont fragmentées, l'entreprise perd du temps, de la visibilité et de la capacité d'arbitrage.",
          "introMecanisme": "En contexte contraint, la performance dépend moins de la puissance de chaque outil que de la qualité des interfaces entre eux. Lorsque ces interfaces sont fragmentées, l'entreprise perd du temps, de la visibilité et de la capacité d'arbitrage.",
          "formatCourt": {
            "titrePublicCourt": "À partir de quand les interfaces entre systèmes, sites ou métiers deviennent-elles un facteur déterminant de performance et de pilotage ?",
            "usage": "Titre court source pour lectures complémentaires."
          },
          "primaryProfiles": [
            "Architecture systèmes industriels",
            "Automatisation industrielle",
            "DSI industriel",
            "Transformation digitale industrielle",
            "Maintenance / outil"
          ],
          "showInConversationPage": true,
          "showInForm": false,
          "isComplementaryStub": true
        },
        {
          "code": "A02",
          "crmCode": "IND-C2-RC-A02",
          "programmeCode": "IND-C2-RSS-02",
          "conversationCode": "C2",
          "contextCode": "RC",
          "typeLecture": "TERRITORIALE",
          "questionEditoriale": "À partir de quand la dépendance à une filière, une spécialisation ou un segment impose-t-elle un repositionnement plutôt qu'une adaptation partielle ?",
          "questionPublique": "À partir de quand la dépendance à une filière, une spécialisation ou un segment impose-t-elle un repositionnement plutôt qu'une adaptation partielle ?",
          "questionActivation": "Certaines entreprises tiennent leur trajectoire d'une spécialisation forte. Mais lorsque cette base se fragilise, il faut envisager un repositionnement plus profond : nouveaux marchés, nouveaux partenaires, nouvelle place dans l'écosystème.",
          "introMecanisme": "Certaines entreprises tiennent leur trajectoire d'une spécialisation forte. Mais lorsque cette base se fragilise, il faut envisager un repositionnement plus profond : nouveaux marchés, nouveaux partenaires, nouvelle place dans l'écosystème.",
          "formatCourt": {
            "titrePublicCourt": "À partir de quand la dépendance à une filière, une spécialisation ou un segment impose-t-elle un repositionnement plutôt qu'une adaptation partielle ?",
            "usage": "Titre court source pour lectures complémentaires."
          },
          "primaryProfiles": [
            "Développement économique territorial",
            "Collectivité / territoire industriel",
            "Aménagement / foncier",
            "Écosystème local",
            "Acteur public"
          ],
          "showInConversationPage": true,
          "showInForm": false,
          "isComplementaryStub": true
        },
        {
          "code": "A03",
          "crmCode": "IND-C2-RC-A03",
          "programmeCode": "IND-C2-RSS-03",
          "conversationCode": "C2",
          "contextCode": "RC",
          "typeLecture": "JURIDIQUE",
          "questionEditoriale": "À partir de quand un changement de cadre géopolitique ou réglementaire oblige-t-il à réinterroger le modèle industriel ou la géographie productive ?",
          "questionPublique": "À partir de quand un changement de cadre géopolitique ou réglementaire oblige-t-il à réinterroger le modèle industriel ou la géographie productive ?",
          "questionActivation": "Un modèle industriel repose sur une certaine stabilité du cadre dans lequel il opère. Lorsqu'un choc géopolitique ou réglementaire modifie ce cadre, c'est parfois la géographie de la production qui doit être repensée.",
          "introMecanisme": "Un modèle industriel repose sur une certaine stabilité du cadre dans lequel il opère. Lorsqu'un choc géopolitique ou réglementaire modifie ce cadre, c'est parfois la géographie de la production qui doit être repensée.",
          "formatCourt": {
            "titrePublicCourt": "À partir de quand un changement de cadre géopolitique ou réglementaire oblige-t-il à réinterroger le modèle industriel ou la géographie productive ?",
            "usage": "Titre court source pour lectures complémentaires."
          },
          "primaryProfiles": [
            "Avocat droit des affaires",
            "Avocat contrats industriels",
            "Avocat environnement / ICPE",
            "Direction juridique",
            "Conformité / affaires réglementaires"
          ],
          "showInConversationPage": true,
          "showInForm": false,
          "isComplementaryStub": true
        },
        {
          "code": "A04",
          "crmCode": "IND-C2-RC-A04",
          "programmeCode": "IND-C2-RSS-04",
          "conversationCode": "C2",
          "contextCode": "RC",
          "typeLecture": "TECHNOLOGIQUE",
          "questionEditoriale": "À partir de quand l'architecture des systèmes oblige-t-elle à arbitrer entre adaptation progressive et refonte plus structurante ?",
          "questionPublique": "À partir de quand l'architecture des systèmes oblige-t-elle à arbitrer entre adaptation progressive et refonte plus structurante ?",
          "questionActivation": "Quand l'architecture des systèmes devient trop fragmentée, les adaptations par petites touches peuvent finir par complexifier encore davantage le système. En période de crise, la question devient plus radicale.",
          "introMecanisme": "Quand l'architecture des systèmes devient trop fragmentée, les adaptations par petites touches peuvent finir par complexifier encore davantage le système. En période de crise, la question devient plus radicale.",
          "formatCourt": {
            "titrePublicCourt": "À partir de quand l'architecture des systèmes oblige-t-elle à arbitrer entre adaptation progressive et refonte plus structurante ?",
            "usage": "Titre court source pour lectures complémentaires."
          },
          "primaryProfiles": [
            "Architecture systèmes industriels",
            "Automatisation industrielle",
            "DSI industriel",
            "Transformation digitale industrielle",
            "Maintenance / outil"
          ],
          "showInConversationPage": true,
          "showInForm": false,
          "isComplementaryStub": true
        },
        {
          "code": "A01",
          "crmCode": "IND-C3-GS-A01",
          "programmeCode": "IND-C3-CST-01",
          "conversationCode": "C3",
          "contextCode": "GS",
          "typeLecture": "TECHNOLOGIQUE",
          "questionEditoriale": "Qu'est-ce qui permet réellement de franchir un cap de volume ou de qualité : automatiser, digitaliser davantage ou redessiner le process ?",
          "questionPublique": "Qu'est-ce qui permet réellement de franchir un cap de volume ou de qualité : automatiser, digitaliser davantage ou redessiner le process ?",
          "questionActivation": "Face à la croissance, l'investissement technologique apparaît souvent comme une réponse naturelle. Mais la technologie ne règle pas toujours les limites profondes d'un outil industriel. Dans certains cas, le vrai sujet réside dans le process lui-même.",
          "introMecanisme": "Face à la croissance, l'investissement technologique apparaît souvent comme une réponse naturelle. Mais la technologie ne règle pas toujours les limites profondes d'un outil industriel. Dans certains cas, le vrai sujet réside dans le process lui-même.",
          "formatCourt": {
            "titrePublicCourt": "Qu'est-ce qui permet réellement de franchir un cap de volume ou de qualité : automatiser, digitaliser davantage ou redessiner le process ?",
            "usage": "Titre court source pour lectures complémentaires."
          },
          "primaryProfiles": [
            "Architecture systèmes industriels",
            "Automatisation industrielle",
            "DSI industriel",
            "Transformation digitale industrielle",
            "Maintenance / outil"
          ],
          "showInConversationPage": true,
          "showInForm": false,
          "isComplementaryStub": true
        },
        {
          "code": "A02",
          "crmCode": "IND-C3-GS-A02",
          "programmeCode": "IND-C3-CST-02",
          "conversationCode": "C3",
          "contextCode": "GS",
          "typeLecture": "OPERATIONNELLE",
          "questionEditoriale": "À partir de quand la vraie limite n'est-elle plus technologique, mais opératoire : coordination des flux, séquencement, pilotage et interfaces ?",
          "questionPublique": "À partir de quand la vraie limite n'est-elle plus technologique, mais opératoire : coordination des flux, séquencement, pilotage et interfaces ?",
          "questionActivation": "Dans une phase de croissance, on cherche souvent la limite du côté des machines. Pourtant, le blocage peut venir d'ailleurs : coordination des flux, séquencement, pilotage des priorités, interfaces entre métiers.",
          "introMecanisme": "Dans une phase de croissance, on cherche souvent la limite du côté des machines. Pourtant, le blocage peut venir d'ailleurs : coordination des flux, séquencement, pilotage des priorités, interfaces entre métiers.",
          "formatCourt": {
            "titrePublicCourt": "À partir de quand la vraie limite n'est-elle plus technologique, mais opératoire : coordination des flux, séquencement, pilotage et interfaces ?",
            "usage": "Titre court source pour lectures complémentaires."
          },
          "primaryProfiles": [
            "Direction industrielle",
            "Direction des opérations",
            "Excellence opérationnelle",
            "Supply chain",
            "Performance industrielle"
          ],
          "showInConversationPage": true,
          "showInForm": false,
          "isComplementaryStub": true
        },
        {
          "code": "A03",
          "crmCode": "IND-C3-GS-A03",
          "programmeCode": "IND-C3-CST-03",
          "conversationCode": "C3",
          "contextCode": "GS",
          "typeLecture": "RH_COMPETENCES",
          "questionEditoriale": "À partir de quand la montée en capacité bute-t-elle moins sur la machine que sur la qualité, la sécurité, la formation et la maîtrise des gestes critiques ?",
          "questionPublique": "À partir de quand la montée en capacité bute-t-elle moins sur la machine que sur la qualité, la sécurité, la formation et la maîtrise des gestes critiques ?",
          "questionActivation": "Produire davantage ne consiste pas seulement à augmenter les cadences. Il faut préserver la qualité, maîtriser les gestes critiques, former les équipes, sécuriser les opérations et garantir la conformité.",
          "introMecanisme": "Produire davantage ne consiste pas seulement à augmenter les cadences. Il faut préserver la qualité, maîtriser les gestes critiques, former les équipes, sécuriser les opérations et garantir la conformité.",
          "formatCourt": {
            "titrePublicCourt": "À partir de quand la montée en capacité bute-t-elle moins sur la machine que sur la qualité, la sécurité, la formation et la maîtrise des gestes critiques ?",
            "usage": "Titre court source pour lectures complémentaires."
          },
          "primaryProfiles": [
            "DRH industriel",
            "Responsable compétences",
            "Formation industrielle",
            "Organisation du travail",
            "Dialogue social"
          ],
          "showInConversationPage": true,
          "showInForm": false,
          "isComplementaryStub": true
        },
        {
          "code": "A02",
          "crmCode": "IND-C3-AC-A02",
          "programmeCode": "IND-C3-ASC-02",
          "conversationCode": "C3",
          "contextCode": "AC",
          "typeLecture": "OPERATIONNELLE",
          "questionEditoriale": "À partir de quand de nouveaux outils ne compensent-ils plus une architecture opératoire devenue trop rigide, fragmentée ou lente ?",
          "questionPublique": "À partir de quand de nouveaux outils ne compensent-ils plus une architecture opératoire devenue trop rigide, fragmentée ou lente ?",
          "questionActivation": "Ajouter un nouvel outil peut donner l'impression de résoudre une difficulté. Mais lorsque l'architecture opératoire est trop rigide ou fragmentée, ces ajouts peuvent simplement déplacer la complexité.",
          "introMecanisme": "Ajouter un nouvel outil peut donner l'impression de résoudre une difficulté. Mais lorsque l'architecture opératoire est trop rigide ou fragmentée, ces ajouts peuvent simplement déplacer la complexité.",
          "formatCourt": {
            "titrePublicCourt": "À partir de quand de nouveaux outils ne compensent-ils plus une architecture opératoire devenue trop rigide, fragmentée ou lente ?",
            "usage": "Titre court source pour lectures complémentaires."
          },
          "primaryProfiles": [
            "Direction industrielle",
            "Direction des opérations",
            "Excellence opérationnelle",
            "Supply chain",
            "Performance industrielle"
          ],
          "showInConversationPage": true,
          "showInForm": false,
          "isComplementaryStub": true
        },
        {
          "code": "A01",
          "crmCode": "IND-C3-RC-A01",
          "programmeCode": "IND-C3-RSS-01",
          "conversationCode": "C3",
          "contextCode": "RC",
          "typeLecture": "TECHNOLOGIQUE",
          "questionEditoriale": "À partir de quand la transformation de l'outil ne passe-t-elle plus par l'amélioration incrémentale, mais par une rupture de process ou de système de production ?",
          "questionPublique": "À partir de quand la transformation de l'outil ne passe-t-elle plus par l'amélioration incrémentale, mais par une rupture de process ou de système de production ?",
          "questionActivation": "L'amélioration incrémentale permet souvent de prolonger la performance d'un outil. Mais certaines crises révèlent que l'outil doit changer de logique. Les process, les flux, les équipements ou même le modèle de production peuvent devoir être repensés.",
          "introMecanisme": "L'amélioration incrémentale permet souvent de prolonger la performance d'un outil. Mais certaines crises révèlent que l'outil doit changer de logique. Les process, les flux, les équipements ou même le modèle de production peuvent devoir être repensés.",
          "formatCourt": {
            "titrePublicCourt": "À partir de quand la transformation de l'outil ne passe-t-elle plus par l'amélioration incrémentale, mais par une rupture de process ou de système de production ?",
            "usage": "Titre court source pour lectures complémentaires."
          },
          "primaryProfiles": [
            "Architecture systèmes industriels",
            "Automatisation industrielle",
            "DSI industriel",
            "Transformation digitale industrielle",
            "Maintenance / outil"
          ],
          "showInConversationPage": true,
          "showInForm": false,
          "isComplementaryStub": true
        },
        {
          "code": "A02",
          "crmCode": "IND-C3-RC-A02",
          "programmeCode": "IND-C3-RSS-02",
          "conversationCode": "C3",
          "contextCode": "RC",
          "typeLecture": "OPERATIONNELLE",
          "questionEditoriale": "À partir de quand la crise révèle-t-elle que le vrai sujet n'est plus l'outil, mais l'architecture même du système productif et de son pilotage ?",
          "questionPublique": "À partir de quand la crise révèle-t-elle que le vrai sujet n'est plus l'outil, mais l'architecture même du système productif et de son pilotage ?",
          "questionActivation": "Une crise industrielle révèle parfois un problème plus profond : l'architecture du système productif, la manière dont les décisions sont prises, dont les flux sont pilotés, dont les métiers coopèrent.",
          "introMecanisme": "Une crise industrielle révèle parfois un problème plus profond : l'architecture du système productif, la manière dont les décisions sont prises, dont les flux sont pilotés, dont les métiers coopèrent.",
          "formatCourt": {
            "titrePublicCourt": "À partir de quand la crise révèle-t-elle que le vrai sujet n'est plus l'outil, mais l'architecture même du système productif et de son pilotage ?",
            "usage": "Titre court source pour lectures complémentaires."
          },
          "primaryProfiles": [
            "Direction industrielle",
            "Direction des opérations",
            "Excellence opérationnelle",
            "Supply chain",
            "Performance industrielle"
          ],
          "showInConversationPage": true,
          "showInForm": false,
          "isComplementaryStub": true
        },
        {
          "code": "A03",
          "crmCode": "IND-C3-RC-A03",
          "programmeCode": "IND-C3-RSS-03",
          "conversationCode": "C3",
          "contextCode": "RC",
          "typeLecture": "RH_COMPETENCES",
          "questionEditoriale": "À partir de quand l'écart entre compétences disponibles, exigences de sûreté et standards de production impose-t-il une transformation plus profonde ?",
          "questionPublique": "À partir de quand l'écart entre compétences disponibles, exigences de sûreté et standards de production impose-t-il une transformation plus profonde ?",
          "questionActivation": "Une crise peut révéler un écart difficile à combler entre ce que l'activité exige et ce que l'organisation peut mobiliser. Lorsque cet écart devient trop important, il faut repenser l'organisation, les standards ou le périmètre de l'activité.",
          "introMecanisme": "Une crise peut révéler un écart difficile à combler entre ce que l'activité exige et ce que l'organisation peut mobiliser. Lorsque cet écart devient trop important, il faut repenser l'organisation, les standards ou le périmètre de l'activité.",
          "formatCourt": {
            "titrePublicCourt": "À partir de quand l'écart entre compétences disponibles, exigences de sûreté et standards de production impose-t-il une transformation plus profonde ?",
            "usage": "Titre court source pour lectures complémentaires."
          },
          "primaryProfiles": [
            "DRH industriel",
            "Responsable compétences",
            "Formation industrielle",
            "Organisation du travail",
            "Dialogue social"
          ],
          "showInConversationPage": true,
          "showInForm": false,
          "isComplementaryStub": true
        },
        {
          "code": "A04",
          "crmCode": "IND-C3-RC-A04",
          "programmeCode": "IND-C3-RSS-04",
          "conversationCode": "C3",
          "contextCode": "RC",
          "typeLecture": "ENERGIE_RESSOURCES",
          "questionEditoriale": "À partir de quand la contrainte carbone impose-t-elle une réécriture du process, de l'outil, de l'offre ou de la vocation industrielle du site ?",
          "questionPublique": "À partir de quand la contrainte carbone impose-t-elle une réécriture du process, de l'outil, de l'offre ou de la vocation industrielle du site ?",
          "questionActivation": "Lorsqu'elle devient critique, la contrainte carbone ne se limite plus à la réduction progressive des émissions. Elle peut remettre en cause le process, l'outil, l'offre ou même la vocation industrielle d'un site.",
          "introMecanisme": "Lorsqu'elle devient critique, la contrainte carbone ne se limite plus à la réduction progressive des émissions. Elle peut remettre en cause le process, l'outil, l'offre ou même la vocation industrielle d'un site.",
          "formatCourt": {
            "titrePublicCourt": "À partir de quand la contrainte carbone impose-t-elle une réécriture du process, de l'outil, de l'offre ou de la vocation industrielle du site ?",
            "usage": "Titre court source pour lectures complémentaires."
          },
          "primaryProfiles": [
            "Énergie / utilités",
            "Décarbonation industrielle",
            "Ressources",
            "Direction environnement",
            "Transition énergétique"
          ],
          "showInConversationPage": true,
          "showInForm": false,
          "isComplementaryStub": true
        },
        {
          "code": "A01",
          "crmCode": "IND-C4-GS-A01",
          "programmeCode": "IND-C4-CST-01",
          "conversationCode": "C4",
          "contextCode": "GS",
          "typeLecture": "RH_COMPETENCES",
          "questionEditoriale": "À partir de quand la croissance révèle-t-elle un seuil critique en matière de recrutement, transmission, stabilisation ou montée en compétence ?",
          "questionPublique": "À partir de quand la croissance révèle-t-elle un seuil critique en matière de recrutement, transmission, stabilisation ou montée en compétence ?",
          "questionActivation": "Une trajectoire industrielle tient aussi par les personnes capables de faire fonctionner, transmettre, stabiliser et faire évoluer l'activité. Lorsque la croissance accélère, les besoins humains deviennent plus visibles.",
          "introMecanisme": "Une trajectoire industrielle tient aussi par les personnes capables de faire fonctionner, transmettre, stabiliser et faire évoluer l'activité. Lorsque la croissance accélère, les besoins humains deviennent plus visibles.",
          "formatCourt": {
            "titrePublicCourt": "À partir de quand la croissance révèle-t-elle un seuil critique en matière de recrutement, transmission, stabilisation ou montée en compétence ?",
            "usage": "Titre court source pour lectures complémentaires."
          },
          "primaryProfiles": [
            "DRH industriel",
            "Responsable compétences",
            "Formation industrielle",
            "Organisation du travail",
            "Dialogue social"
          ],
          "showInConversationPage": true,
          "showInForm": false,
          "isComplementaryStub": true
        },
        {
          "code": "A02",
          "crmCode": "IND-C4-GS-A02",
          "programmeCode": "IND-C4-CST-02",
          "conversationCode": "C4",
          "contextCode": "GS",
          "typeLecture": "OPERATIONNELLE",
          "questionEditoriale": "À partir de quand l'accès à l'énergie, à l'eau, aux utilités ou aux capacités réseaux devient-il le véritable verrou d'une montée en capacité ?",
          "questionPublique": "À partir de quand l'accès à l'énergie, à l'eau, aux utilités ou aux capacités réseaux devient-il le véritable verrou d'une montée en capacité ?",
          "questionActivation": "La croissance industrielle suppose des ressources physiques : énergie, eau, chaleur, raccordements, capacités réseaux. Ces ressources peuvent devenir le premier verrou de développement lorsque l'activité augmente.",
          "introMecanisme": "La croissance industrielle suppose des ressources physiques : énergie, eau, chaleur, raccordements, capacités réseaux. Ces ressources peuvent devenir le premier verrou de développement lorsque l'activité augmente.",
          "formatCourt": {
            "titrePublicCourt": "À partir de quand l'accès à l'énergie, à l'eau, aux utilités ou aux capacités réseaux devient-il le véritable verrou d'une montée en capacité ?",
            "usage": "Titre court source pour lectures complémentaires."
          },
          "primaryProfiles": [
            "Direction industrielle",
            "Direction des opérations",
            "Excellence opérationnelle",
            "Supply chain",
            "Performance industrielle"
          ],
          "showInConversationPage": true,
          "showInForm": false,
          "isComplementaryStub": true
        },
        {
          "code": "A04",
          "crmCode": "IND-C4-GS-A04",
          "programmeCode": "IND-C4-CST-04",
          "conversationCode": "C4",
          "contextCode": "GS",
          "typeLecture": "TERRITORIALE",
          "questionEditoriale": "À quelles conditions un territoire permet-il encore d'accompagner une montée en capacité : foncier, réseaux, logistique, main-d'œuvre, acceptabilité ?",
          "questionPublique": "À quelles conditions un territoire permet-il encore d'accompagner une montée en capacité : foncier, réseaux, logistique, main-d'œuvre, acceptabilité ?",
          "questionActivation": "Une entreprise industrielle ne croît jamais seule : elle dépend d'un territoire, de ses infrastructures, de son foncier, de ses réseaux et de son bassin d'emploi. Lorsque la croissance s'accélère, ces conditions territoriales deviennent déterminantes.",
          "introMecanisme": "Une entreprise industrielle ne croît jamais seule : elle dépend d'un territoire, de ses infrastructures, de son foncier, de ses réseaux et de son bassin d'emploi. Lorsque la croissance s'accélère, ces conditions territoriales deviennent déterminantes.",
          "formatCourt": {
            "titrePublicCourt": "À quelles conditions un territoire permet-il encore d'accompagner une montée en capacité : foncier, réseaux, logistique, main-d'œuvre, acceptabilité ?",
            "usage": "Titre court source pour lectures complémentaires."
          },
          "primaryProfiles": [
            "Développement économique territorial",
            "Collectivité / territoire industriel",
            "Aménagement / foncier",
            "Écosystème local",
            "Acteur public"
          ],
          "showInConversationPage": true,
          "showInForm": false,
          "isComplementaryStub": true
        },
        {
          "code": "A01",
          "crmCode": "IND-C4-AC-A01",
          "programmeCode": "IND-C4-ASC-01",
          "conversationCode": "C4",
          "contextCode": "AC",
          "typeLecture": "RH_COMPETENCES",
          "questionEditoriale": "À partir de quand les tensions sur les effectifs, les savoir-faire, les conditions de travail ou l'organisation limitent-elles la capacité à ajuster l'activité ?",
          "questionPublique": "À partir de quand les tensions sur les effectifs, les savoir-faire, les conditions de travail ou l'organisation limitent-elles la capacité à ajuster l'activité ?",
          "questionActivation": "En contexte contraint, les organisations industrielles demandent souvent beaucoup aux équipes. Mais lorsque les effectifs, les compétences ou les conditions de travail sont trop tendus, l'activité ne peut plus s'adapter sans fragiliser ceux qui la portent.",
          "introMecanisme": "En contexte contraint, les organisations industrielles demandent souvent beaucoup aux équipes. Mais lorsque les effectifs, les compétences ou les conditions de travail sont trop tendus, l'activité ne peut plus s'adapter sans fragiliser ceux qui la portent.",
          "formatCourt": {
            "titrePublicCourt": "À partir de quand les tensions sur les effectifs, les savoir-faire, les conditions de travail ou l'organisation limitent-elles la capacité à ajuster l'activité ?",
            "usage": "Titre court source pour lectures complémentaires."
          },
          "primaryProfiles": [
            "DRH industriel",
            "Responsable compétences",
            "Formation industrielle",
            "Organisation du travail",
            "Dialogue social"
          ],
          "showInConversationPage": true,
          "showInForm": false,
          "isComplementaryStub": true
        },
        {
          "code": "A04",
          "crmCode": "IND-C4-AC-A04",
          "programmeCode": "IND-C4-ASC-04",
          "conversationCode": "C4",
          "contextCode": "AC",
          "typeLecture": "TERRITORIALE",
          "questionEditoriale": "À partir de quand un territoire n'offre-t-il plus les conditions suffisantes pour maintenir ou ajuster une activité sans surcoûts croissants ?",
          "questionPublique": "À partir de quand un territoire n'offre-t-il plus les conditions suffisantes pour maintenir ou ajuster une activité sans surcoûts croissants ?",
          "questionActivation": "Un territoire peut soutenir une activité industrielle par ses infrastructures, ses compétences, ses réseaux, ses services. Mais lorsque les contraintes s'accumulent, il peut aussi devenir plus coûteux d'y maintenir l'activité.",
          "introMecanisme": "Un territoire peut soutenir une activité industrielle par ses infrastructures, ses compétences, ses réseaux, ses services. Mais lorsque les contraintes s'accumulent, il peut aussi devenir plus coûteux d'y maintenir l'activité.",
          "formatCourt": {
            "titrePublicCourt": "À partir de quand un territoire n'offre-t-il plus les conditions suffisantes pour maintenir ou ajuster une activité sans surcoûts croissants ?",
            "usage": "Titre court source pour lectures complémentaires."
          },
          "primaryProfiles": [
            "Développement économique territorial",
            "Collectivité / territoire industriel",
            "Aménagement / foncier",
            "Écosystème local",
            "Acteur public"
          ],
          "showInConversationPage": true,
          "showInForm": false,
          "isComplementaryStub": true
        },
        {
          "code": "A01",
          "crmCode": "IND-C4-RC-A01",
          "programmeCode": "IND-C4-RSS-01",
          "conversationCode": "C4",
          "contextCode": "RC",
          "typeLecture": "RH_COMPETENCES",
          "questionEditoriale": "À partir de quand les compétences critiques, les conditions de travail ou l'organisation deviennent-elles un facteur de bascule dans une trajectoire de transformation ?",
          "questionPublique": "À partir de quand les compétences critiques, les conditions de travail ou l'organisation deviennent-elles un facteur de bascule dans une trajectoire de transformation ?",
          "questionActivation": "Transformer une trajectoire industrielle suppose de mobiliser des compétences, de faire évoluer les organisations et de maintenir l'engagement des équipes. En situation de crise, ces dimensions peuvent devenir décisives.",
          "introMecanisme": "Transformer une trajectoire industrielle suppose de mobiliser des compétences, de faire évoluer les organisations et de maintenir l'engagement des équipes. En situation de crise, ces dimensions peuvent devenir décisives.",
          "formatCourt": {
            "titrePublicCourt": "À partir de quand les compétences critiques, les conditions de travail ou l'organisation deviennent-elles un facteur de bascule dans une trajectoire de transformation ?",
            "usage": "Titre court source pour lectures complémentaires."
          },
          "primaryProfiles": [
            "DRH industriel",
            "Responsable compétences",
            "Formation industrielle",
            "Organisation du travail",
            "Dialogue social"
          ],
          "showInConversationPage": true,
          "showInForm": false,
          "isComplementaryStub": true
        },
        {
          "code": "A02",
          "crmCode": "IND-C4-RC-A02",
          "programmeCode": "IND-C4-RSS-02",
          "conversationCode": "C4",
          "contextCode": "RC",
          "typeLecture": "ENERGIE_RESSOURCES",
          "questionEditoriale": "À partir de quand les contraintes énergétiques, hydriques ou climatiques imposent-elles un arbitrage de localisation, de transformation ou de redéploiement du site ?",
          "questionPublique": "À partir de quand les contraintes énergétiques, hydriques ou climatiques imposent-elles un arbitrage de localisation, de transformation ou de redéploiement du site ?",
          "questionActivation": "Lorsque l'énergie devient trop coûteuse ou indisponible, lorsque l'eau manque ou que les risques climatiques augmentent, la question peut devenir existentielle pour un site industriel. Il ne s'agit plus seulement d'adapter l'outil.",
          "introMecanisme": "Lorsque l'énergie devient trop coûteuse ou indisponible, lorsque l'eau manque ou que les risques climatiques augmentent, la question peut devenir existentielle pour un site industriel. Il ne s'agit plus seulement d'adapter l'outil.",
          "formatCourt": {
            "titrePublicCourt": "À partir de quand les contraintes énergétiques, hydriques ou climatiques imposent-elles un arbitrage de localisation, de transformation ou de redéploiement du site ?",
            "usage": "Titre court source pour lectures complémentaires."
          },
          "primaryProfiles": [
            "Énergie / utilités",
            "Décarbonation industrielle",
            "Ressources",
            "Direction environnement",
            "Transition énergétique"
          ],
          "showInConversationPage": true,
          "showInForm": false,
          "isComplementaryStub": true
        },
        {
          "code": "A04",
          "crmCode": "IND-C4-RC-A04",
          "programmeCode": "IND-C4-RSS-04",
          "conversationCode": "C4",
          "contextCode": "RC",
          "typeLecture": "TERRITORIALE",
          "questionEditoriale": "À quelles conditions un territoire peut-il encore porter un redéploiement industriel, une reconversion partielle ou une nouvelle trajectoire de site ?",
          "questionPublique": "À quelles conditions un territoire peut-il encore porter un redéploiement industriel, une reconversion partielle ou une nouvelle trajectoire de site ?",
          "questionActivation": "Lorsqu'un site industriel doit se transformer, le territoire devient un acteur décisif. Il peut faciliter un redéploiement, accompagner une reconversion ou attirer de nouveaux investisseurs. Mais il peut aussi manquer de foncier, d'infrastructures ou de moyens.",
          "introMecanisme": "Lorsqu'un site industriel doit se transformer, le territoire devient un acteur décisif. Il peut faciliter un redéploiement, accompagner une reconversion ou attirer de nouveaux investisseurs. Mais il peut aussi manquer de foncier, d'infrastructures ou de moyens.",
          "formatCourt": {
            "titrePublicCourt": "À quelles conditions un territoire peut-il encore porter un redéploiement industriel, une reconversion partielle ou une nouvelle trajectoire de site ?",
            "usage": "Titre court source pour lectures complémentaires."
          },
          "primaryProfiles": [
            "Développement économique territorial",
            "Collectivité / territoire industriel",
            "Aménagement / foncier",
            "Écosystème local",
            "Acteur public"
          ],
          "showInConversationPage": true,
          "showInForm": false,
          "isComplementaryStub": true
        }
      ]
    }
  ],
  "landingPages": {
    "strategie": {
      "cycleCode": "IND",
      "readingType": "STRATEGIQUE",
      "title": "Lecture stratégique — Cycle Industrie & transformation des territoires | En Plateau",
      "metaDescription": "Une place précise dans une conversation industrielle ouverte — que vous soyez conseil ou décideur industriel.",
      "navLabel": "Cycle Industrie · Lecture stratégique",
      "heroTitleHtml": "Votre lecture<br><em>fait apparaître</em><br>ce que l'industrie<br>ne voit pas seule.",
      "heroLead": "Quatre conversations industrielles sont ouvertes. Chacune cherche une lecture stratégique — portée depuis l'expérience au cœur des arbitrages industriels, ou depuis l'accompagnement des acteurs qui les traversent.",
      "heroProfiles": [
        {
          "label": "Décideur industriel",
          "text": "Vous avez piloté des bascules de compétitivité, de filière ou de chaîne de valeur depuis l’intérieur. Votre lecture est une expérience de décision."
        },
        {
          "label": "Conseil spécialisé",
          "text": "Vous accompagnez des industriels sur la stratégie, la compétitivité ou les dépendances structurelles. Votre lecture est une analyse transversale."
        }
      ],
      "valueSection": {
        "title": "Être parmi ceux qui fixent le récit — pas parmi ceux qui le subissent",
        "intro": "Sur les sujets qui structurent l'industrie, les lectures de référence se constituent maintenant. Ceux qui les portent en premier choisissent leur angle. Les autres commentent.",
        "cards": [
          {
            "label": "ETI · Grand groupe",
            "title": "Démontrer que vous maîtrisez votre trajectoire — pas seulement que vous la vivez",
            "text": "Une lecture publique, préparée et portée dans un cadre éditorial crédible dit autre chose qu’un communiqué."
          },
          {
            "label": "ETI sous pression · Reconfiguration",
            "title": "Reprendre la main sur la lecture de votre situation",
            "text": "Dans un moment de tension ou de transformation, une prise de parole structurée est d’abord un acte de pilotage."
          },
          {
            "label": "Cabinet de conseil",
            "title": "Créer le type de contenu qui attire des mandats qualifiés",
            "text": "Un prospect qui a son problème le reconnaît immédiatement dans une lecture bien cadrée sur sa situation."
          },
          {
            "label": "Profil senior",
            "title": "Constituer une trace publique qui travaille dans la durée",
            "text": "Votre lecture sur un sujet précis crée un capital de réputation personnel, transférable et durable."
          }
        ]
      },
      "copy": {
        "positionsCountNote": "10 positions avec lecture stratégique sont ouvertes dans le cycle Industrie.",
        "rarityBlock": {
          "kicker": "Rareté éditoriale",
          "title": "10 positions avec lecture stratégique sont ouvertes dans le cycle Industrie.",
          "text": "Chaque position correspond à un angle contextualisé. Lorsqu’une position est validée, elle n’est plus ouverte à une lecture stratégique équivalente."
        },
        "heroNoteHtml": "Aucun client ni cas identifiable à exposer &nbsp;·&nbsp; Aucun dossier sensible à commenter &nbsp;·&nbsp; 15 min pour qualifier votre angle<br>Collaboration possible avec services juridique, communication ou corporate de votre organisation",
        "audience": {
          "title": "Cette lecture stratégique vous est-elle destinée ?",
          "yesTitle": "Vous portez probablement une lecture pertinente si…",
          "noTitle": "Moins adapté si…",
          "yesItems": [
            "Vous savez relier compétitivité, dépendances, trajectoire industrielle et décisions réelles.",
            "Vous êtes DG, directeur stratégie, directeur industriel, conseil en stratégie industrielle, compétitivité, filière ou transformation.",
            "Votre lecture porte sur des seuils : croissance qui fragilise, dépendance qui bascule, outil à transformer, trajectoire à réarbitrer.",
            "Vous pouvez éclairer un mécanisme sans exposer de client, de dossier interne ou de situation confidentielle."
          ],
          "noItems": [
            "Votre approche reste trop générale pour être reliée à une bascule industrielle précise.",
            "Vous cherchez d’abord une visibilité promotionnelle plutôt qu’une contribution éditoriale située.",
            "Vous souhaitez présenter une offre ou une méthode plutôt qu’éclairer un arbitrage industriel.",
            "Votre lecture ne relie pas les signaux stratégiques à des décisions concrètes."
          ],
          "panel": "La lecture stratégique ne consiste pas à commenter l’industrie en général. Elle consiste à identifier le moment où une trajectoire change de nature et oblige les acteurs à arbitrer autrement."
        },
        "conversations": {
          "title": "Les angles où la lecture stratégique devient décisive",
          "intro": "La page met d’abord en avant les angles stratégiques ouverts. Les lectures complémentaires ne s’affichent que lorsqu’elles appartiennent à la même conversation et au même contexte.",
          "panel": "Ces positions ne demandent pas de commenter une situation particulière ; elles proposent d’éclairer des seuils et arbitrages qui se répètent dans les trajectoires industrielles."
        },
        "preparation": {
          "titleHtml": "Beaucoup arrivent avec une lecture stratégique. <em style=\"color:rgba(240,236,230,0.55);\">Ils repartent avec une position.</em>",
          "intro": "La préparation éditoriale transforme une expertise, une expérience de décision ou une analyse de filière en lecture située : claire, défendable et utile."
        },
        "dimensions": [
          {
            "num": "01",
            "title": "Transformation en cours / contexte",
            "text": "Ancrer la lecture dans le mouvement réel : ce qui bascule, pourquoi maintenant, et ce que cette bascule change dans les décisions."
          },
          {
            "num": "02",
            "title": "Acteurs concernés",
            "text": "Identifier les acteurs impactés et la position depuis laquelle l’intervenant éclaire ce que d’autres voient moins nettement."
          },
          {
            "num": "03",
            "title": "Arbitrages",
            "text": "Rendre visibles les choix réels : tenir, investir, transformer, différer, sécuriser, repositionner ou renoncer."
          },
          {
            "num": "04",
            "title": "Défis & opportunités",
            "text": "Montrer à la fois ce que la situation fragilise et ce qu’elle peut ouvrir comme trajectoire plus robuste."
          },
          {
            "num": "05",
            "title": "Vision",
            "text": "Formuler une lecture située, défendable et utile pour les décideurs qui traversent le même type de bascule."
          },
          {
            "num": "06",
            "title": "Échelle d’analyse",
            "text": "Situer la lecture à la bonne échelle : site, entreprise, filière, territoire, portefeuille ou chaîne de valeur."
          }
        ],
        "dimensionsPanel": "Ce travail ne substitue pas votre lecture : il lui donne sa forme la plus utile.",
        "process": [
          {
            "num": "01",
            "title": "L'échange de qualification",
            "text": "15 minutes pour vérifier si votre lecture correspond à un angle disponible. Aucun dossier sensible à exposer.",
            "deadline": "À planifier en amont du comité éditorial"
          },
          {
            "num": "02",
            "title": "Le dossier de positionnement",
            "text": "Si l’angle est retenu, un dossier complet vous est adressé : angle précis, logique de mise en regard, modalités d’intervention, format émission et article associé."
          },
          {
            "num": "03",
            "title": "Le comité éditorial",
            "text": "Le 15 juin, le comité éditorial examine les dossiers de positionnement et valide la composition finale. Vous êtes informé avant tout engagement.",
            "deadline": "Comité : 15 juin 2026"
          },
          {
            "num": "04",
            "title": "La préparation & la production",
            "text": "En Plateau travaille avec vous pour transformer votre lecture en position claire, non intrusive et publiquement défendable."
          }
        ],
        "guarantees": [
          {
            "accent": true,
            "title": "Aucun client ni cas identifiable à exposer",
            "text": "L’échange porte sur les mécanismes d’arbitrage stratégique."
          },
          {
            "accent": true,
            "title": "Aucun engagement avant le dossier de positionnement",
            "text": "Vous ne vous engagez pas lors de l’échange éditorial."
          },
          {
            "title": "Pas de doctrine générale attendue",
            "text": "La contribution vise une lecture située, rattachée à un angle et à un contexte précis."
          },
          {
            "title": "Une parole préparée avec vos équipes si nécessaire",
            "text": "La préparation peut intégrer vos contraintes de communication, juridiques, corporate ou de confidentialité."
          }
        ],
        "faq": [
          {
            "question": "Dois-je intervenir sur toutes les conversations ?",
            "answer": "Non. Une seule conversation suffit, parfois même un seul contexte."
          },
          {
            "question": "Faut-il défendre une doctrine générale sur l’industrie ?",
            "answer": "Non. Il s’agit d’une lecture située, ancrée dans des arbitrages réels."
          },
          {
            "question": "Est-ce ouvert aux décideurs industriels comme aux cabinets de conseil ?",
            "answer": "Oui. Ces deux lectures peuvent être pertinentes, selon l’angle."
          },
          {
            "question": "Faut-il arriver avec une position déjà construite ?",
            "answer": "Non. La préparation éditoriale sert précisément à transformer une conviction ou une expertise en position claire."
          }
        ],
        "cta": {
          "title": "Votre lecture stratégique peut éclairer ce que les trajectoires industrielles ne disent pas d'elles-mêmes.",
          "text": "Un échange de 15 minutes — sans exposer de client, sans engagement — pour vérifier si votre angle a une place dans cette conversation.",
          "deadline": "Comité éditorial : 15 juin 2026 · Les échanges précèdent la composition finale",
          "footnote": "Les positions stratégiques se ferment au fil de la composition éditoriale · Page non indexée"
        }
      }
    },
    "finance": {
      "cycleCode": "IND",
      "readingType": "FINANCIERE",
      "title": "Lecture financière — Cycle Industrie & transformation des territoires | En Plateau",
      "metaDescription": "Une place précise pour éclairer les arbitrages économiques qui rendent une transformation industrielle nécessaire — sans exposer de chiffres confidentiels.",
      "navLabel": "Cycle Industrie · Lecture financière",
      "heroTitleHtml": "Votre lecture<br><em>rend visibles</em><br>les arbitrages économiques<br>que l'industrie diffère.",
      "heroLead": "Certaines décisions industrielles ne changent pas de nature parce qu'un chiffre baisse, mais parce que les équilibres économiques ne permettent plus de maintenir l'activité comme avant.",
      "heroProfiles": [
        {
          "label": "DAF · CFO · Direction financière",
          "text": "Vous lisez les marges de manœuvre, les investissements, les coûts différés et les conditions de soutenabilité."
        },
        {
          "label": "Conseil finance · Restructuring · Investissement",
          "text": "Vous accompagnez des dirigeants dans des situations où CAPEX, dette technologique, dépendances ou coûts de ressources obligent à décider autrement."
        }
      ],
      "valueSection": {
        "title": "Faire reconnaître la finance comme lecture d'arbitrage industriel — pas comme simple commentaire de chiffres",
        "intro": "La prise de parole financière devient utile lorsqu'elle éclaire les mécanismes qui obligent une entreprise industrielle à choisir.",
        "cards": [
          {
            "label": "DAF · CFO",
            "title": "Faire reconnaître votre rôle dans les arbitrages qui tiennent réellement la trajectoire industrielle",
            "text": "Une prise de parole préparée rend visible cette fonction d’arbitrage, sans exposer vos chiffres internes."
          },
          {
            "label": "ETI sous contrainte",
            "title": "Reprendre la maîtrise du récit économique avant qu'il ne soit lu à votre place",
            "text": "Une lecture cadrée permet de montrer ce qui relève d’un pilotage assumé."
          },
          {
            "label": "Cabinet finance",
            "title": "Créer un signal éditorial que vos prospects reconnaissent",
            "text": "Une lecture financière bien cadrée crée une reconnaissance immédiate, sans discours promotionnel."
          },
          {
            "label": "Profil senior",
            "title": "Construire une trace publique de votre capacité à relier finance et décision industrielle",
            "text": "Votre valeur tient à votre capacité à comprendre ce qu’un chiffre oblige à décider."
          }
        ]
      },
      "copy": {
        "positionsCountNote": "5 positions avec lecture financière sont ouvertes dans le cycle Industrie.",
        "rarityBlock": {
          "kicker": "Rareté éditoriale",
          "title": "5 positions avec lecture financière sont ouvertes dans le cycle Industrie.",
          "text": "Chaque position financière correspond à un angle contextualisé. Lorsqu’une position est confirmée, elle n’est plus ouverte à une lecture financière équivalente."
        },
        "heroNoteHtml": "Aucun chiffre confidentiel à exposer &nbsp;·&nbsp; Aucun dossier sensible à commenter &nbsp;·&nbsp; 15 min pour qualifier votre angle<br>Collaboration possible avec services juridique, communication ou corporate de votre organisation",
        "audience": {
          "title": "Cette lecture financière vous est-elle destinée ?",
          "yesTitle": "Vous portez probablement une lecture pertinente si…",
          "noTitle": "Moins adapté si…",
          "yesItems": [
            "Vous savez relier marges de manœuvre, investissement, coûts différés et décisions industrielles réelles.",
            "Vous êtes DAF, CFO, dirigeant, conseil finance, restructuring, corporate finance, investisseur ou responsable exposé aux arbitrages économiques industriels.",
            "Votre lecture porte sur des seuils : dette technologique, dépendance devenue coûteuse, CAPEX différé, coûts énergie/eau/conformité, soutenabilité d’un outil.",
            "Vous pouvez éclairer un mécanisme sans exposer de chiffres, de comptes internes, de clients ou de dossiers confidentiels."
          ],
          "noItems": [
            "Votre approche porte surtout sur du reporting ou de la conformité comptable déconnectée de l’outil industriel.",
            "Vous cherchez d’abord une visibilité promotionnelle plutôt qu’une contribution éditoriale située.",
            "Vous souhaitez présenter des résultats ou une offre commerciale plutôt qu’éclairer un arbitrage industriel.",
            "Votre lecture ne relie pas les chiffres à des décisions : investir, différer, transformer, redéployer, céder ou renoncer."
          ],
          "panel": "La lecture financière ne consiste pas à commenter des chiffres. Elle consiste à identifier le moment où les équilibres économiques obligent l’industrie à arbitrer autrement."
        },
        "conversations": {
          "title": "Les angles où la lecture financière devient décisive",
          "intro": "La page met d’abord en avant les angles financiers ouverts. Les lectures complémentaires ne s’affichent que lorsqu’elles appartiennent à la même conversation et au même contexte.",
          "panel": "Ces positions ne demandent pas de commenter une situation particulière ; elles proposent d’éclairer des seuils et arbitrages économiques qui se répètent dans les trajectoires industrielles."
        },
        "preparation": {
          "titleHtml": "Beaucoup arrivent avec une lecture financière. <em style=\"color:rgba(240,236,230,0.55);\">Ils repartent avec une position.</em>",
          "intro": "La préparation éditoriale transforme une expertise souvent technique en lecture située : compréhensible, défendable et utile."
        },
        "dimensions": [
          {
            "num": "01",
            "title": "Transformation en cours / contexte",
            "text": "Ancrer la lecture dans le mouvement réel : ce qui bascule, pourquoi maintenant, et ce que cette bascule change dans les décisions."
          },
          {
            "num": "02",
            "title": "Acteurs concernés",
            "text": "Identifier les acteurs impactés et la position depuis laquelle l’intervenant éclaire ce que d’autres voient moins nettement."
          },
          {
            "num": "03",
            "title": "Arbitrages",
            "text": "Rendre visibles les choix réels : tenir, investir, transformer, différer, sécuriser, repositionner ou renoncer."
          },
          {
            "num": "04",
            "title": "Défis & opportunités",
            "text": "Montrer à la fois ce que la situation fragilise et ce qu’elle peut ouvrir comme trajectoire plus robuste."
          },
          {
            "num": "05",
            "title": "Vision",
            "text": "Formuler une lecture située, défendable et utile pour les décideurs qui traversent le même type de bascule."
          },
          {
            "num": "06",
            "title": "Échelle d’analyse",
            "text": "Situer la lecture à la bonne échelle : site, entreprise, filière, territoire, portefeuille ou chaîne de valeur."
          }
        ],
        "dimensionsPanel": "Ce travail ne substitue pas votre lecture : il lui donne sa forme la plus utile.",
        "process": [
          {
            "num": "01",
            "title": "L'échange de qualification",
            "text": "15 minutes pour vérifier si votre lecture correspond à un angle disponible. Aucun dossier sensible à exposer.",
            "deadline": "À planifier en amont du comité éditorial"
          },
          {
            "num": "02",
            "title": "Le dossier de positionnement",
            "text": "Si l’angle est retenu, un dossier complet vous est adressé : angle précis, logique de mise en regard, modalités d’intervention, format émission et article associé."
          },
          {
            "num": "03",
            "title": "Le comité éditorial",
            "text": "Le 15 juin, le comité éditorial examine les dossiers de positionnement et valide la composition finale. Vous êtes informé avant tout engagement.",
            "deadline": "Comité : 15 juin 2026"
          },
          {
            "num": "04",
            "title": "La préparation & la production",
            "text": "En Plateau travaille avec vous pour transformer votre lecture en position claire, non intrusive et publiquement défendable."
          }
        ],
        "guarantees": [
          {
            "accent": true,
            "title": "Aucun chiffre confidentiel à exposer",
            "text": "L’échange porte sur les mécanismes d’arbitrage économique, pas sur vos comptes, vos marges ou vos coûts internes."
          },
          {
            "accent": true,
            "title": "Aucun engagement avant le dossier de positionnement",
            "text": "Vous ne vous engagez pas lors de l’échange éditorial."
          },
          {
            "title": "Pas de commentaire de situation financière",
            "text": "La contribution vise à rendre lisibles des seuils économiques et industriels."
          },
          {
            "title": "Une parole préparée avec vos équipes si nécessaire",
            "text": "La préparation peut intégrer vos contraintes de communication, juridiques, corporate ou de confidentialité."
          }
        ],
        "faq": [
          {
            "question": "Faut-il exposer des chiffres confidentiels ?",
            "answer": "Non. La contribution porte sur les mécanismes d’arbitrage."
          },
          {
            "question": "La lecture financière doit-elle venir d’un DAF ?",
            "answer": "Pas nécessairement. Elle peut venir d’un DAF, d’un dirigeant, d’un conseil, d’un investisseur ou d’un profil corporate finance."
          },
          {
            "question": "S’agit-il d’une prise de parole sur la performance financière ?",
            "answer": "Non. Il s’agit d’éclairer les conditions économiques d’un arbitrage industriel."
          },
          {
            "question": "Faut-il arriver avec une position déjà construite ?",
            "answer": "Non. La préparation éditoriale sert à transformer une conviction ou une expertise en position claire."
          }
        ],
        "cta": {
          "title": "Votre lecture financière peut éclairer ce que les chiffres seuls ne disent pas.",
          "text": "Un échange de 15 minutes — sans exposer de chiffres, sans engagement — pour vérifier si votre angle a une place dans cette conversation.",
          "deadline": "Comité éditorial : 15 juin 2026 · Les échanges précèdent la composition finale",
          "footnote": "Les positions financières se ferment au fil de la composition éditoriale · Page non indexée"
        }
      }
    },
    "juridique": {
      "cycleCode": "IND",
      "readingType": "JURIDIQUE",
      "title": "Lecture juridique / réglementaire — Cycle Industrie & transformation des territoires | En Plateau",
      "metaDescription": "Seulement 4 positions avec lecture juridique / réglementaire sont ouvertes sur l’ensemble du cycle Industrie.",
      "navLabel": "Cycle Industrie · Lecture juridique / réglementaire",
      "heroTitleHtml": "Votre lecture<br><em>sécurise</em><br>les décisions industrielles<br>qui changent de nature.",
      "heroLead": "Certaines trajectoires industrielles ne basculent pas uniquement pour des raisons économiques ou opérationnelles. Elles changent aussi de nature lorsque contrats, normes, responsabilités, conformité, droit social ou environnement deviennent décisifs.",
      "heroProfiles": [
        {
          "label": "Avocats · Cabinets spécialisés",
          "text": "Vous intervenez sur les contrats industriels, le droit social, l’environnement, la conformité, les responsabilités ou les réorganisations."
        },
        {
          "label": "Directions juridiques · Conformité",
          "text": "Vous sécurisez des décisions industrielles en amont, lorsque le cadre juridique ou réglementaire devient une condition de transformation."
        }
      ],
      "valueSection": {
        "title": "Faire reconnaître le juridique comme lecture d’arbitrage industriel — pas comme simple validation de conformité",
        "intro": "La lecture juridique devient décisive lorsqu’elle éclaire le moment où le cadre cesse d’être un arrière-plan et devient une condition de la décision industrielle.",
        "cards": [
          {
            "label": "Cabinet d’avocats",
            "title": "Montrer votre capacité à sécuriser des décisions industrielles complexes",
            "text": "La contribution rend visible votre lecture des bascules sans exposer de dossier, de client ou de contentieux identifiable."
          },
          {
            "label": "Direction juridique",
            "title": "Faire reconnaître le rôle du juridique en amont des décisions industrielles",
            "text": "Votre lecture montre comment le cadre contractuel, social, réglementaire ou environnemental structure les choix avant qu’ils ne deviennent irréversibles."
          },
          {
            "label": "Compliance · Affaires réglementaires",
            "title": "Transformer la contrainte en lecture stratégique de la trajectoire",
            "text": "Une parole préparée permet d’éclairer le moment où normes, autorisations ou obligations deviennent des paramètres de transformation."
          },
          {
            "label": "Profil senior",
            "title": "Construire une trace publique maîtrisée sur un sujet sensible",
            "text": "La prise de parole est cadrée, non intrusive et compatible avec des contraintes juridiques, communication ou corporate."
          }
        ]
      },
      "copy": {
        "positionsCountNote": "Seulement 4 positions avec lecture juridique / réglementaire sont ouvertes sur tout le cycle Industrie.",
        "rarityBlock": {
          "kicker": "Rareté éditoriale",
          "title": "Seulement 4 positions avec lecture juridique / réglementaire sont ouvertes sur tout le cycle Industrie.",
          "text": "Cette rareté est volontaire : la lecture juridique intervient uniquement lorsque le cadre contractuel, social, réglementaire, environnemental ou de responsabilité éclaire réellement une bascule industrielle. Lorsqu’une position est confirmée, elle n’est plus ouverte à une lecture juridique équivalente."
        },
        "heroNoteHtml": "Aucun dossier ni contentieux à exposer &nbsp;·&nbsp; Aucun cas identifiable à commenter &nbsp;·&nbsp; 15 min pour qualifier votre angle<br>Collaboration possible avec services juridique, communication ou corporate de votre organisation",
        "audience": {
          "title": "Cette lecture juridique / réglementaire vous est-elle destinée ?",
          "yesTitle": "Vous portez probablement une lecture pertinente si…",
          "noTitle": "Moins adapté si…",
          "yesItems": [
            "Vous intervenez sur les contrats, la conformité, le droit social, l’environnement, les responsabilités ou la sécurisation de décisions industrielles.",
            "Votre lecture intervient en amont : avant que la difficulté ne devienne contentieuse, bloquante ou irréversible.",
            "Vous savez relier le cadre juridique ou réglementaire à des arbitrages industriels réels.",
            "Vous pouvez éclairer un mécanisme sans exposer de dossier, de client ou de situation identifiable."
          ],
          "noItems": [
            "Votre intervention relève surtout du contentieux pur ex post, sans lecture sur les arbitrages amont.",
            "Votre positionnement reste trop général pour être rattaché à une bascule précise.",
            "Votre attente porte d’abord sur de la visibilité, plutôt que sur une contribution située.",
            "Votre lecture ne relie pas le droit, la conformité ou la réglementation à une décision industrielle concrète."
          ],
          "panel": "La lecture juridique / réglementaire ne consiste pas à produire une doctrine générale. Elle consiste à éclairer le moment où le cadre devient une variable décisive de la trajectoire industrielle."
        },
        "conversations": {
          "title": "Les 4 positions où la lecture juridique / réglementaire devient décisive",
          "intro": "La page met d’abord en avant les 4 positions juridiques ouvertes sur tout le cycle. Les lectures complémentaires ne s’affichent que lorsqu’elles appartiennent à la même conversation et au même contexte.",
          "panel": "Ces positions ne demandent pas de commenter un dossier particulier ; elles proposent d’éclairer les cadres qui transforment une situation industrielle en point de bascule."
        },
        "preparation": {
          "titleHtml": "Beaucoup arrivent avec une lecture juridique. <em style=\"color:rgba(240,236,230,0.55);\">Ils repartent avec une position.</em>",
          "intro": "La préparation éditoriale transforme une pratique sensible en lecture située : claire, sécurisée, non accusatoire et utile aux décideurs."
        },
        "dimensions": [
          {
            "num": "01",
            "title": "Transformation en cours / contexte",
            "text": "Ancrer la lecture dans le mouvement réel : ce qui bascule, pourquoi maintenant, et ce que cette bascule change dans les décisions."
          },
          {
            "num": "02",
            "title": "Acteurs concernés",
            "text": "Identifier les acteurs impactés et la position depuis laquelle l’intervenant éclaire ce que d’autres voient moins nettement."
          },
          {
            "num": "03",
            "title": "Arbitrages",
            "text": "Rendre visibles les choix réels : tenir, investir, transformer, différer, sécuriser, repositionner ou renoncer."
          },
          {
            "num": "04",
            "title": "Défis & opportunités",
            "text": "Montrer à la fois ce que la situation fragilise et ce qu’elle peut ouvrir comme trajectoire plus robuste."
          },
          {
            "num": "05",
            "title": "Vision",
            "text": "Formuler une lecture située, défendable et utile pour les décideurs qui traversent le même type de bascule."
          },
          {
            "num": "06",
            "title": "Échelle d’analyse",
            "text": "Situer la lecture à la bonne échelle : site, entreprise, filière, territoire, portefeuille ou chaîne de valeur."
          }
        ],
        "dimensionsPanel": "Ce travail permet de clarifier ce qui relève de l’émission, de l’article associé et du bon niveau d’exposition.",
        "process": [
          {
            "num": "01",
            "title": "L'échange de qualification",
            "text": "15 minutes pour vérifier si votre lecture correspond à un angle disponible. Aucun dossier sensible à exposer.",
            "deadline": "À planifier en amont du comité éditorial"
          },
          {
            "num": "02",
            "title": "Le dossier de positionnement",
            "text": "Si l’angle est retenu, un dossier complet vous est adressé : angle précis, logique de mise en regard, modalités d’intervention, format émission et article associé."
          },
          {
            "num": "03",
            "title": "Le comité éditorial",
            "text": "Le 15 juin, le comité éditorial examine les dossiers de positionnement et valide la composition finale. Vous êtes informé avant tout engagement.",
            "deadline": "Comité : 15 juin 2026"
          },
          {
            "num": "04",
            "title": "La préparation & la production",
            "text": "En Plateau travaille avec vous pour transformer votre lecture en position claire, non intrusive et publiquement défendable."
          }
        ],
        "guarantees": [
          {
            "accent": true,
            "title": "Pas de dossier ni de contentieux à exposer",
            "text": "L’échange porte sur les mécanismes de bascule, pas sur un cas identifiable."
          },
          {
            "accent": true,
            "title": "Aucun engagement avant le dossier de positionnement",
            "text": "Vous ne vous engagez pas lors de l’échange éditorial."
          },
          {
            "title": "Pas de doctrine juridique générale attendue",
            "text": "La contribution vise une lecture située du rôle du cadre dans une décision industrielle."
          },
          {
            "title": "Une parole préparée et sécurisée",
            "text": "La préparation peut intégrer vos contraintes juridiques, communication, corporate ou confidentialité."
          }
        ],
        "faq": [
          {
            "question": "Faut-il parler d’un dossier ou d’un contentieux identifiable ?",
            "answer": "Non. L’enjeu n’est pas d’exposer une situation confidentielle ni de détailler un cas reconnaissable."
          },
          {
            "question": "Faut-il produire une doctrine juridique générale ?",
            "answer": "Non. Il s’agit d’apporter une lecture située sur la façon dont le cadre pèse concrètement sur une décision industrielle."
          },
          {
            "question": "Pourquoi seulement 4 positions juridiques ?",
            "answer": "Parce que la lecture juridique est retenue uniquement lorsque le cadre éclaire réellement une bascule industrielle et ne se contente pas d’accompagner le sujet."
          },
          {
            "question": "Faut-il préparer seul la prise de parole ?",
            "answer": "Non. Le cadrage éditorial est préparé en amont pour sécuriser l’angle, la conversation et le niveau d’exposition."
          }
        ],
        "cta": {
          "title": "Votre lecture juridique peut éclairer le moment où le cadre devient décisif.",
          "text": "Un échange de 15 minutes — sans exposer de dossier, sans engagement — pour vérifier si votre angle a une place dans l’une des 4 positions juridiques ouvertes.",
          "deadline": "Comité éditorial : 15 juin 2026 · Les échanges précèdent la composition finale",
          "footnote": "Les positions juridiques se ferment au fil de la composition éditoriale · Page non indexée"
        }
      }
    }
  }
};


window.EN_PLATEAU_EDITORIAL = (function(data) {
  function getCycle(cycleCode) {
    return (data.cycles || []).find(function(cycle) { return cycle.code === cycleCode; }) || null;
  }
  function getContext(cycleCode, contextCode) {
    var cycle = getCycle(cycleCode);
    return cycle && (cycle.contexts || []).find(function(context) { return context.code === contextCode; }) || null;
  }
  function getConversation(cycleCode, conversationCode) {
    var cycle = getCycle(cycleCode);
    return cycle && (cycle.conversations || []).find(function(conversation) { return conversation.code === conversationCode; }) || null;
  }
  function getAngles(cycleCode) {
    var cycle = getCycle(cycleCode);
    return cycle && cycle.angles ? cycle.angles.slice() : [];
  }
  function getAnglesByReading(cycleCode, readingType) {
    return getAngles(cycleCode).filter(function(angle) { return angle.typeLecture === readingType; });
  }
  function getAnglesByLanding(slug) {
    var config = data.landingPages && data.landingPages[slug];
    if (!config) return [];
    return getAnglesByReading(config.cycleCode, config.readingType).filter(function(angle) {
      return !angle.landingPages || angle.landingPages.indexOf(slug) !== -1;
    });
  }
  return {
    data: data,
    getCycle: getCycle,
    getContext: getContext,
    getConversation: getConversation,
    getAngles: getAngles,
    getAnglesByReading: getAnglesByReading,
    getAnglesByLanding: getAnglesByLanding
  };
})(window.EN_PLATEAU_EDITORIAL_DATA);

window.EN_PLATEAU_LANDING_RENDERER = (function(data, api) {
  if (!data || !api) return { renderLanding: function() { return false; } };

  function esc(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function byId(id) { return document.getElementById(id); }
  function setText(id, value) { var el = byId(id); if (el) el.textContent = value || ''; }
  function setHtml(id, value) { var el = byId(id); if (el) el.innerHTML = value || ''; }

  function safeId(value) {
    return String(value || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  }

  function lowerFirst(value) {
    value = String(value || '');
    return value.charAt(0).toLowerCase() + value.slice(1);
  }

  function readingName(reading) {
    return lowerFirst((reading && reading.label) || 'lecture');
  }

  function getReadingLabel(type) {
    var reading = data.readingTypes && data.readingTypes[type];
    return reading ? reading.label : String(type || '').replace(/_/g, ' ');
  }

  function getAngleTitle(angle) {
    return (angle.formatCourt && angle.formatCourt.titrePublicCourt) || angle.questionPublique || angle.questionEditoriale || '';
  }

  function paragraph(text) {
    return text ? '<p>' + esc(text) + '</p>' : '';
  }

  function calUrl(reading, cta) {
    var source = (reading && reading.calSource) || 'lp-industrie';
    return 'https://cal.com/en-plateau/echange-editorial?src=' + encodeURIComponent(source) + '&cta=' + encodeURIComponent(cta);
  }

  function setCtas(reading) {
    [
      ['navCta', 'nav'],
      ['heroCta', 'hero'],
      ['midCta', 'mid-conv'],
      ['footerCta', 'footer']
    ].forEach(function(pair) {
      var el = byId(pair[0]);
      if (el) el.setAttribute('href', calUrl(reading, pair[1]));
    });
  }

  function getLandingItems(slug) {
    var config = data.landingPages[slug];
    if (!config) return [];
    return api.getAnglesByLanding(slug).map(function(angle) {
      return {
        angle: angle,
        context: api.getContext(config.cycleCode, angle.contextCode),
        conversation: api.getConversation(config.cycleCode, angle.conversationCode)
      };
    });
  }

  function getComplementaryAngles(config, angle) {
    var all = api.getAngles(config.cycleCode);
    var byCode = {};
    all.forEach(function(candidate) {
      if (candidate.crmCode) byCode[candidate.crmCode] = candidate;
    });

    if (angle.complementaryCodes && angle.complementaryCodes.length) {
      return angle.complementaryCodes.map(function(code) {
        return byCode[code];
      }).filter(function(candidate) {
        return candidate &&
          candidate.conversationCode === angle.conversationCode &&
          candidate.contextCode === angle.contextCode &&
          candidate.typeLecture !== angle.typeLecture &&
          candidate.crmCode !== angle.crmCode;
      });
    }

    return all.filter(function(candidate) {
      return candidate.conversationCode === angle.conversationCode &&
             candidate.contextCode === angle.contextCode &&
             candidate.typeLecture !== angle.typeLecture &&
             candidate.crmCode !== angle.crmCode;
    }).slice(0, 3);
  }

  function renderProfiles(config) {
    var el = byId('heroProfiles');
    if (!el) return;
    el.innerHTML = (config.heroProfiles || []).map(function(profile) {
      return '<div class="hero-profile">' +
        '<div class="hero-profile-label">' + esc(profile.label) + '</div>' +
        '<p>' + esc(profile.text) + '</p>' +
      '</div>';
    }).join('');
  }

  function renderRarityBlock(config) {
    var copy = config.copy || {};
    setText('positionsCountNote', copy.positionsCountNote || '');

    var target = byId('editorialRarityBlock');
    if (!target) return;

    var rarity = copy.rarityBlock;
    if (!rarity) {
      target.innerHTML = '';
      return;
    }

    target.innerHTML =
      '<div class="landing-rarete-block">' +
        '<div class="landing-rarete-kicker">' + esc(rarity.kicker || 'Rareté éditoriale') + '</div>' +
        '<h3 class="landing-rarete-title">' + esc(rarity.title || '') + '</h3>' +
        '<p class="landing-rarete-text">' + esc(rarity.text || '') + '</p>' +
      '</div>';
  }

  function renderValueSection(config) {
    if (!config.valueSection) return;
    setText('valeur-titre', config.valueSection.title);
    setText('valueIntro', config.valueSection.intro);
    renderRarityBlock(config);

    var el = byId('valueGrid');
    if (!el) return;
    el.innerHTML = (config.valueSection.cards || []).map(function(card) {
      return '<div class="value-card">' +
        '<div class="value-num">' + esc(card.label) + '</div>' +
        '<h3>' + esc(card.title) + '</h3>' +
        '<p>' + esc(card.text) + '</p>' +
      '</div>';
    }).join('');
  }

  function renderAudience(config, reading) {
    var copy = (config.copy && config.copy.audience) || {
      title: 'Cette ' + readingName(reading) + ' vous est-elle destinée ?',
      yesTitle: 'Vous portez probablement une lecture pertinente si…',
      noTitle: 'Moins adapté si…',
      yesItems: [],
      noItems: [],
      panel: ''
    };

    setText('pourqui-titre', copy.title);

    var el = byId('audienceGrid');
    if (el) {
      el.innerHTML =
        '<div class="audience-card"><h3>' + esc(copy.yesTitle) + '</h3><ul class="audience-list">' +
          (copy.yesItems || []).map(function(item) { return '<li>' + esc(item) + '</li>'; }).join('') +
        '</ul></div>' +
        '<div class="audience-card audience-card--no"><h3>' + esc(copy.noTitle) + '</h3><ul class="audience-list audience-list--no">' +
          (copy.noItems || []).map(function(item) { return '<li>' + esc(item) + '</li>'; }).join('') +
        '</ul></div>';
    }

    setHtml('audiencePanel', paragraph(copy.panel));
  }

  function renderAngleNavItem(item, index) {
    var angle = item.angle;
    var context = item.context || {};
    var conversation = item.conversation || {};
    var active = index === 0 ? ' is-active' : '';
    var target = 'angle-' + safeId(angle.crmCode || (angle.conversationCode + '-' + angle.contextCode + '-' + index));
    var cnum = String(conversation.code || angle.conversationCode || 'C1').replace('C', '');

    return '<button class="conv-nav-item' + active + '" data-conv="' + esc(target) + '" aria-selected="' + (index === 0 ? 'true' : 'false') + '">' +
      '<div class="conv-nav-color" style="background:var(--c' + esc(cnum) + ');"></div>' +
      '<div class="conv-nav-body">' +
        '<div class="conv-nav-num">' + esc(context.label || '') + '</div>' +
        '<div class="conv-nav-title">' + esc(getAngleTitle(angle)) + '</div>' +
      '</div>' +
    '</button>';
  }

  function renderProfilesLine(angle) {
    var profiles = (angle.primaryProfiles || []).filter(Boolean);
    if (!profiles.length) return '';
    return '<p class="angle-profiles"><strong>Acteurs pressentis :</strong> ' + esc(profiles.join(' · ')) + '</p>';
  }

  function renderPairBlock(angle, long) {
    var point = (long && long.momentBascule) || angle.pointBascule || '';
    var tension = (long && long.tensionCentrale) || angle.tensionArbitrage || '';

    return '<div class="angle-section">' +
      '<div class="angle-section-label">Pourquoi ce point de bascule compte</div>' +
      '<p class="angle-section-intro">Ce bloc sert à clarifier le seuil que votre lecture devra rendre visible : le moment où la situation change de nature et oblige à arbitrer autrement.</p>' +
      '<div class="angle-pair-grid">' +
        '<div class="angle-meta-card"><div class="angle-meta-label">Point de bascule</div><div class="angle-meta-text">' + esc(point) + '</div></div>' +
        '<div class="angle-meta-card"><div class="angle-meta-label">Tension / arbitrage</div><div class="angle-meta-text">' + esc(tension) + '</div></div>' +
      '</div>' +
    '</div>';
  }

  function renderDimensions(long) {
    var dimensions = long && long.dimensions ? long.dimensions : [];
    if (!dimensions.length) return '';

    return '<div class="angle-section">' +
      '<div class="angle-section-label">Structure de votre intervention</div>' +
      '<p class="angle-section-intro">Votre intervention sur ce sujet sera préparée autour de ces six dimensions. En Plateau vous accompagne pour clarifier votre position et l’exprimer publiquement sans l’élargir inutilement.</p>' +
      '<div class="angle-dimensions-grid">' +
        dimensions.map(function(dim) {
          return '<div class="angle-meta-card"><div class="angle-meta-label">' + esc(dim.title) + '</div><div class="angle-meta-text">' + esc(dim.text) + '</div></div>';
        }).join('') +
      '</div>' +
    '</div>';
  }

  function renderComplementary(config, angle) {
    var complementaries = getComplementaryAngles(config, angle);
    if (!complementaries.length) return '';

    var items = complementaries.map(function(item) {
      return '<div class="angle-complementary-item">' +
        '<div class="angle-meta-label">' + esc(getReadingLabel(item.typeLecture)) + '</div>' +
        '<div class="angle-complementary-title">' + esc(getAngleTitle(item)) + '</div>' +
        renderProfilesLine(item) +
      '</div>';
    }).join('');

    return '<details class="angle-complementary-details">' +
      '<summary>Voir les lectures complémentaires de cette conversation et de ce contexte</summary>' +
      '<div class="angle-complementary-body">' +
        '<p class="angle-complementary-intro">Ces lectures sont indiquées pour situer la composition éditoriale. Elles appartiennent à la même conversation et au même contexte que l’angle sélectionné ; elles ne concurrencent pas la lecture affichée ici.</p>' +
        items +
      '</div>' +
    '</details>';
  }

  function renderAnglePanel(item, index, config, reading) {
    var angle = item.angle;
    var conversation = item.conversation || {};
    var context = item.context || {};
    var long = angle.formatLongIntervenant || {};
    var active = index === 0 ? ' is-active' : '';
    var panelId = 'angle-' + safeId(angle.crmCode || (angle.conversationCode + '-' + angle.contextCode + '-' + index));
    var cnum = String(conversation.code || angle.conversationCode || 'C1').replace('C', '');

    return '<div class="conv-panel' + active + '" id="' + esc(panelId) + '">' +
      '<div class="conv-panel-header" style="border-top:3px solid var(--c' + esc(cnum) + ');">' +
        '<div class="conv-panel-overline">Conversation</div>' +
        '<h3 class="conv-panel-title">' + esc(conversation.landingTitle || conversation.title || '') + '</h3>' +
        '<p class="conv-panel-desc"><strong>Contexte :</strong> ' + esc(context.label || '') + ' &nbsp;·&nbsp; <strong>Lecture attendue :</strong> ' + esc(reading.label || '') + '</p>' +
      '</div>' +
      '<div class="finance-angle">' +
        '<div class="finance-angle-label finance-angle-label--accent">Voici l’angle sur lequel votre lecture est attendue</div>' +
        '<div class="finance-angle-q">' + esc(getAngleTitle(angle)) + '</div>' +
        renderProfilesLine(angle) +
        '<div class="angle-main-copy">' +
          '<p class="finance-angle-desc">' + esc(angle.questionActivation || '') + '</p>' +
          (long.chapeau ? '<p class="finance-angle-desc" style="margin-top:12px;">' + esc(long.chapeau) + '</p>' : '') +
        '</div>' +
        renderPairBlock(angle, long) +
        (long.titre ? '<div class="angle-section"><div class="angle-section-label">' + esc(long.titre) + '</div></div>' : '') +
        renderDimensions(long) +
        (long.securisation ? '<div class="panel angle-security-panel"><p>' + esc(long.securisation) + '</p></div>' : '') +
        renderComplementary(config, angle) +
      '</div>' +
    '</div>';
  }

  function attachConversationSwitch() {
    var navItems = document.querySelectorAll('.conv-nav-item');
    var panels = document.querySelectorAll('.conv-panel');

    navItems.forEach(function(item) {
      item.addEventListener('click', function() {
        var target = this.dataset.conv;

        navItems.forEach(function(n) {
          n.classList.remove('is-active');
          n.setAttribute('aria-selected', 'false');
        });

        panels.forEach(function(p) {
          p.classList.remove('is-active');
        });

        this.classList.add('is-active');
        this.setAttribute('aria-selected', 'true');

        var panel = document.getElementById(target);
        if (panel) panel.classList.add('is-active');
      });
    });
  }

  function renderConversations(slug, config, reading) {
    var items = getLandingItems(slug);
    var copy = config.copy && config.copy.conversations || {};

    setText('conversations-titre', copy.title || ('Les angles ouverts en ' + readingName(reading)));
    setText('conversationsIntro', copy.intro || 'La colonne de gauche liste les angles ouverts ; la colonne de droite détaille l’angle sélectionné.');
    setHtml('conversationsPanel', copy.panel ? paragraph(copy.panel) : '');

    var nav = byId('convNav');
    if (nav) nav.innerHTML = items.map(renderAngleNavItem).join('');

    var content = byId('convContent');
    if (content) {
      content.innerHTML = items.map(function(item, index) {
        return renderAnglePanel(item, index, config, reading);
      }).join('');
    }

    attachConversationSwitch();
  }

  function renderPreparationDimensions(config) {
    var dims = config.copy && config.copy.dimensions;
    var grid = byId('dimensionsGrid');
    if (grid && dims) {
      grid.className = 'dims-grid';
      grid.innerHTML = dims.map(function(dim) {
        return '<div class="dim-card"><div class="dim-num">' + esc(dim.num) + '</div><div class="dim-text"><strong>' + esc(dim.title) + '</strong>' + esc(dim.text) + '</div></div>';
      }).join('');
    }

    var panel = byId('dimensionsPanel');
    var panelText = config.copy && config.copy.dimensionsPanel;
    if (panel && panelText) {
      panel.style.display = 'block';
      panel.innerHTML = paragraph(panelText);
    }
  }

  function renderProcess(config) {
    var process = config.copy && config.copy.process;
    var el = byId('processRow');
    if (!el || !process) return;
    el.innerHTML = process.map(function(step) {
      return '<div class="process-step"><div class="step-num">' + esc(step.num) + '</div><h3>' + esc(step.title) + '</h3><p>' + esc(step.text) + '</p>' + (step.deadline ? '<div class="process-deadline">' + esc(step.deadline) + '</div>' : '') + '</div>';
    }).join('');
  }

  function renderGuarantees(config) {
    var guarantees = config.copy && config.copy.guarantees;
    var el = byId('guaranteesGrid');
    if (!el || !guarantees) return;
    el.innerHTML = guarantees.map(function(item) {
      return '<div class="guarantee' + (item.accent ? ' guarantee--accent' : '') + '"><h3>' + esc(item.title) + '</h3><p>' + esc(item.text) + '</p></div>';
    }).join('');
  }

  function renderFaq(config) {
    var faq = config.copy && config.copy.faq;
    var el = byId('faqList');
    if (!el || !faq) return;
    el.innerHTML = faq.map(function(item) {
      return '<div class="faq-item"><h3>' + esc(item.question) + '</h3><p>' + esc(item.answer) + '</p></div>';
    }).join('');
  }

  function renderCta(config) {
    var cta = config.copy && config.copy.cta;
    if (!cta) return;
    setText('cta-titre', cta.title);
    setText('ctaText', cta.text);
    setText('ctaDeadline', cta.deadline);
    setText('ctaFootnote', cta.footnote);
  }

  function renderLanding(slug) {
    if (!slug || !data.landingPages || !data.landingPages[slug]) {
      console.warn('Landing page introuvable pour le slug :', slug);
      return false;
    }

    var config = data.landingPages[slug];
    var reading = data.readingTypes[config.readingType] || {};
    var cycle = api.getCycle(config.cycleCode);
    var copy = config.copy || {};

    document.title = config.title || document.title;

    var titleEl = byId('pageTitle');
    if (titleEl) titleEl.textContent = config.title || titleEl.textContent;

    var meta = document.querySelector('meta[name="description"]');
    if (meta && config.metaDescription) meta.setAttribute('content', config.metaDescription);

    setText('navCycle', config.navLabel || ((cycle && cycle.label ? cycle.label : '') + ' · ' + (reading.label || '')));
    setText('heroKicker', cycle && cycle.label ? 'Cycle ' + cycle.label : 'Cycle Industrie');
    setHtml('hero-title', config.heroTitleHtml || '');
    setText('heroLead', config.heroLead || reading.positioning || '');
    setHtml('heroNote', copy.heroNoteHtml || '');
    setText('heroCardTitle', copy.heroCardTitle || ('Votre ' + readingName(reading) + ' a-t-elle sa place dans l’une de ces conversations ?'));
    setText('heroCardText', copy.heroCardText || 'En 15 minutes, nous vérifions si votre angle correspond à une position encore disponible — en toute confidentialité.');

    setCtas(reading);
    renderRarityBlock(config);
    renderProfiles(config);
    renderValueSection(config);
    renderAudience(config, reading);
    renderConversations(slug, config, reading);
    setHtml('dimensions-titre', copy.preparation && copy.preparation.titleHtml || '');
    setText('dimensionsIntro', copy.preparation && copy.preparation.intro || '');
    renderPreparationDimensions(config);
    renderProcess(config);
    renderGuarantees(config);
    renderFaq(config);
    renderCta(config);

    return true;
  }

  function autoRender() {
    var slug = document.body && document.body.getAttribute('data-landing');
    renderLanding(slug || 'finance');
  }

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', autoRender);
    } else {
      autoRender();
    }
  }

  return { renderLanding: renderLanding };
})(window.EN_PLATEAU_EDITORIAL_DATA, window.EN_PLATEAU_EDITORIAL);
