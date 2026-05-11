/* En Plateau — Référentiel éditorial centralisé — V28 — 48 angles canoniques — landing par code angle */

window.EN_PLATEAU_EDITORIAL_DATA = {
  "version": "2026-05-11-v29-48-angles-landing-courte",
  "status": "stable",
  "sourceDocument": "programme_industrie_reformule.docx",
  "scope": {
    "cycle": "IND",
    "includedReadings": [
      "STRATEGIQUE",
      "FINANCIERE",
      "JURIDIQUE",
      "OPERATIONNELLE",
      "RH_COMPETENCES",
      "ENERGIE_RESSOURCES",
      "TECHNOLOGIQUE",
      "TERRITORIALE"
    ],
    "note": "Référentiel reconstruit depuis le programme Industrie reformulé : 48 angles canoniques, nouveaux codes IND-Cx-CST/ASC/RSS-xx, abandon des anciens codes GS/AC/RC-Axx."
  },
  "notes": {
    "stableCodesRequired": true,
    "legacyCodesDropped": true,
    "angleCountCanonical": 48,
    "oneContextualizedAnglePerRow": true,
    "codeRule": "Le champ code est le code stable du programme, par exemple IND-C1-CST-01. Les anciens codes CRM ne sont plus utilisés.",
    "formulationRule": "Un seul titre/question d’angle est conservé. Pour compatibilité technique, questionEditoriale et questionPublique reprennent ce titre ; questionActivation reprend le texte d’activation du programme.",
    "displayRule": "Les landing pages affichent les angles filtrés par typeLecture. Les codes internes ne sont pas affichés.",
    "complementaryRule": "Les lectures complémentaires sont strictement les trois autres angles du même couple conversation + contexte."
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
      "label": "Lecture technologie & systèmes",
      "slug": "technologie-systemes",
      "shortLabel": "Technologie & systèmes",
      "landingSlug": "industrie/technologie-systemes",
      "calSource": "lp-industrie-technologie-systemes",
      "positioning": "Éclairer les seuils où systèmes, automatismes, données, interfaces ou architecture technique deviennent des conditions concrètes de décision industrielle."
    },
    "RH_COMPETENCES": {
      "code": "RH_COMPETENCES",
      "label": "Lecture RH / compétences",
      "slug": "emploi-competences",
      "shortLabel": "RH / compétences",
      "landingSlug": "industrie/emploi-competences",
      "calSource": "lp-industrie-emploi-competences",
      "positioning": "Éclairer les contraintes de recrutement, compétences, organisation du travail et temps d’adaptation qui conditionnent la trajectoire industrielle."
    },
    "TERRITORIALE": {
      "code": "TERRITORIALE",
      "label": "Lecture territoriale",
      "slug": "territorial",
      "shortLabel": "Territoires & ancrage",
      "landingSlug": "industrie/territorial",
      "calSource": "lp-industrie-territorial",
      "positioning": "Éclairer les seuils où foncier, réseaux, logistique, acceptabilité, ressources locales ou portage territorial deviennent des conditions concrètes de décision industrielle."
    },
    "ENERGIE_RESSOURCES": {
      "code": "ENERGIE_RESSOURCES",
      "label": "Lecture ressources industrielles",
      "slug": "decarbonation-energie-soutenabilite",
      "shortLabel": "Ressources industrielles",
      "landingSlug": "industrie/decarbonation-energie-soutenabilite",
      "calSource": "lp-industrie-decarbonation-energie",
      "positioning": "Éclairer les seuils où énergie, eau, ressources, utilités ou carbone deviennent des conditions concrètes de décision industrielle."
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
          "code": "CST",
          "label": "Croissance sous tension",
          "description": "Quand la demande ou l'activité augmente, mais révèle des limites jusque-là peu visibles."
        },
        {
          "code": "ASC",
          "label": "Adaptation sous contrainte",
          "description": "Quand l'entreprise tient encore, mais au prix de compromis de plus en plus coûteux."
        },
        {
          "code": "RSS",
          "label": "Réinvention sous crise",
          "description": "Quand les ajustements ne suffisent plus et qu'une transformation plus profonde devient nécessaire."
        }
      ],
      "conversations": [
        {
          "code": "C1",
          "title": "Croissance industrielle : à partir de quand produire davantage oblige-t-il à arbitrer autrement ?",
          "landingTitle": "Croissance industrielle : à partir de quand produire davantage oblige-t-il à arbitrer autrement ?",
          "tension": "Croissance ou continuité apparente vs soutenabilité réelle de la production",
          "description": "Produire davantage semble d'abord répondre à une opportunité : un carnet qui se remplit, des volumes qui progressent, un marché qui confirme sa demande. Mais la croissance industrielle ne se résume pas à augmenter les cadences. Elle met sous tension les marges, la qualité, les équipes, les stocks, la maintenance, l'outil et le temps nécessaire pour sécuriser la montée en capacité. Cette conversation interroge le moment où la croissance cesse d'être seulement un objectif commercial et devient un sujet d'arbitrage industriel."
        },
        {
          "code": "C2",
          "title": "Dépendances industrielles : comment identifier celles qui freinent avant qu'elles ne bloquent ?",
          "landingTitle": "Dépendances industrielles : comment identifier celles qui freinent avant qu'elles ne bloquent ?",
          "tension": "Autonomie affichée vs vulnérabilités réelles de la chaîne de valeur",
          "description": "Une trajectoire industrielle repose sur des fournisseurs, des flux logistiques, des filières, des règles, des marchés et des systèmes. Tant que ces dépendances fonctionnent, elles restent souvent invisibles. Cette conversation cherche à identifier les dépendances qui deviennent des points de bascule."
        },
        {
          "code": "C3",
          "title": "L'outil industriel : jusqu'où peut-il évoluer sans se transformer en profondeur ?",
          "landingTitle": "L'outil industriel : jusqu'où peut-il évoluer sans se transformer en profondeur ?",
          "tension": "Amélioration incrémentale vs transformation profonde de l’outil",
          "description": "Transformer un outil industriel ne signifie pas toujours acheter de nouvelles machines ou déployer plus de technologie. La limite peut venir du process, des flux, des interfaces, des compétences, des exigences de qualité, de sécurité ou de décarbonation. Cette conversation interroge la frontière entre amélioration incrémentale et transformation profonde."
        },
        {
          "code": "C4",
          "title": "Trajectoire industrielle : qu'est-ce qui fait qu'elle tient — ou doit être réarbitrée ?",
          "landingTitle": "Trajectoire industrielle : qu'est-ce qui fait qu'elle tient — ou doit être réarbitrée ?",
          "tension": "Performance interne vs conditions systémiques de soutenabilité",
          "description": "Une trajectoire industrielle ne tient pas seulement par l'outil ou le marché. Elle dépend de conditions d'ancrage plus larges : compétences, énergie, eau, utilités, modèle commercial, foncier, infrastructures, acceptabilité et capacité du territoire à accompagner l'activité. Cette conversation interroge les conditions systémiques de la continuité industrielle."
        }
      ],
      "angles": [
        {
          "code": "IND-C1-CST-01",
          "conversationCode": "C1",
          "contextCode": "CST",
          "contextLabel": "Croissance sous tension",
          "typeLecture": "STRATEGIQUE",
          "typeLectureLabelSource": "STRATÉGIQUE",
          "titreAngle": "Croissance industrielle : à quel moment le volume devient-il l'ennemi de la marge — et comment les meilleurs arbitrent-ils ?",
          "questionEditoriale": "Croissance industrielle : à quel moment le volume devient-il l'ennemi de la marge — et comment les meilleurs arbitrent-ils ?",
          "questionPublique": "Croissance industrielle : à quel moment le volume devient-il l'ennemi de la marge — et comment les meilleurs arbitrent-ils ?",
          "questionActivation": "La croissance masque les tensions qu'elle crée. Marges comprimées, qualité plus difficile à tenir, organisation saturée : ces signaux apparaissent progressivement, souvent trop tard. Le mécanisme est connu — ce qui varie, c'est le moment où on le reconnaît et la façon dont on y répond. Vous n'êtes pas attendu sur les chiffres de votre entreprise ou de vos clients. Vous êtes attendu sur votre lecture du mécanisme — ce que vous avez appris à voir, ce que d'autres ratent, et ce que ça oblige à décider.",
          "introMecanisme": "La croissance masque les tensions qu'elle crée. Marges comprimées, qualité plus difficile à tenir, organisation saturée : ces signaux apparaissent progressivement, souvent trop tard. Le mécanisme est connu — ce qui varie, c'est le moment où on le reconnaît et la façon dont on y répond.",
          "texteProgramme": "La croissance masque les tensions qu'elle crée. Marges comprimées, qualité plus difficile à tenir, organisation saturée : ces signaux apparaissent progressivement, souvent trop tard. Le mécanisme est connu — ce qui varie, c'est le moment où on le reconnaît et la façon dont on y répond. Vous n'êtes pas attendu sur les chiffres de votre entreprise ou de vos clients. Vous êtes attendu sur votre lecture du mécanisme — ce que vous avez appris à voir, ce que d'autres ratent, et ce que ça oblige à décider.",
          "pointBascule": "À partir de quand chaque volume supplémentaire dégrade-t-il plus l'organisation qu'il ne renforce l'activité ?",
          "tensionArbitrage": "Croître vite sans dégrader la marge, la qualité, les délais ni l'équilibre organisationnel.",
          "primaryProfiles": [
            "Direction générale",
            "Direction stratégie",
            "Conseil stratégie industrielle",
            "Direction industrielle",
            "Transformation / repositionnement"
          ],
          "landingPages": [
            "strategie"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "Croissance industrielle : à quel moment le volume devient-il l'ennemi de la marge — et comment les meilleurs arbitrent-ils ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — Croissance industrielle : à quel moment le volume devient-il l'ennemi de la marge — et comment les meilleurs arbitrent-ils ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "securisation": "L’échange ne suppose pas de commenter une stratégie interne, un client, un mandat ou une décision confidentielle. Il s’agit d’éclairer un mécanisme industriel à partir de votre expérience et de votre position d’observation."
          },
          "complementaryCodes": [
            "IND-C1-CST-02",
            "IND-C1-CST-03",
            "IND-C1-CST-04"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
        },
        {
          "code": "IND-C1-CST-02",
          "conversationCode": "C1",
          "contextCode": "CST",
          "contextLabel": "Croissance sous tension",
          "typeLecture": "OPERATIONNELLE",
          "typeLectureLabelSource": "OPÉRATIONNELLE",
          "titreAngle": "Quels arbitrages de cadence, de stocks, de maintenance ou de qualité permettent d'absorber la demande tout en préservant la performance industrielle ?",
          "questionEditoriale": "Quels arbitrages de cadence, de stocks, de maintenance ou de qualité permettent d'absorber la demande tout en préservant la performance industrielle ?",
          "questionPublique": "Quels arbitrages de cadence, de stocks, de maintenance ou de qualité permettent d'absorber la demande tout en préservant la performance industrielle ?",
          "questionActivation": "Lorsque la demande augmente, l'entreprise peut absorber une partie de la croissance en jouant sur les cadences, les stocks, les plannings, la maintenance ou les contrôles qualité. Ces leviers permettent de répondre rapidement au marché, mais chacun porte un coût différé. Ce qu’on attend de vous, c’est une lecture située du mécanisme : les signaux à reconnaître, les arbitrages à formuler et les conditions qui changent la nature de la décision.",
          "introMecanisme": "Lorsque la demande augmente, l'entreprise peut absorber une partie de la croissance en jouant sur les cadences, les stocks, les plannings, la maintenance ou les contrôles qualité. Ces leviers permettent de répondre rapidement au marché, mais chacun porte un coût différé.",
          "texteProgramme": "Lorsque la demande augmente, l'entreprise peut absorber une partie de la croissance en jouant sur les cadences, les stocks, les plannings, la maintenance ou les contrôles qualité. Ces leviers permettent de répondre rapidement au marché, mais chacun porte un coût différé.",
          "pointBascule": "À partir de quand produire plus dégrade-t-il durablement la performance industrielle ?",
          "tensionArbitrage": "Absorber la demande immédiate sans user l'outil, les équipes et les standards de qualité.",
          "primaryProfiles": [
            "Direction industrielle",
            "Direction opérations",
            "Production",
            "Supply chain / achats",
            "Excellence opérationnelle"
          ],
          "landingPages": [
            "operations",
            "operationnelle"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "Quels arbitrages de cadence, de stocks, de maintenance ou de qualité permettent d'absorber la demande tout en préservant la performance industrielle ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — Quels arbitrages de cadence, de stocks, de maintenance ou de qualité permettent d'absorber la demande tout en préservant la performance industrielle ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "momentBascule": "À partir de quand produire plus dégrade-t-il durablement la performance industrielle ?",
            "tensionCentrale": "Absorber la demande immédiate sans user l'outil, les équipes et les standards de qualité.",
            "securisation": "L’échange ne suppose pas de commenter un site, un incident, un client, un fournisseur ou une situation confidentielle. Il s’agit de rendre lisible un mécanisme opérationnel à partir d’une expérience située."
          },
          "complementaryCodes": [
            "IND-C1-CST-01",
            "IND-C1-CST-03",
            "IND-C1-CST-04"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
        },
        {
          "code": "IND-C1-CST-03",
          "conversationCode": "C1",
          "contextCode": "CST",
          "contextLabel": "Croissance sous tension",
          "typeLecture": "TECHNOLOGIQUE",
          "typeLectureLabelSource": "TECHNOLOGIQUE / SYSTÈMES",
          "titreAngle": "Comment reconnaître le moment où l'architecture de l'outil devient le vrai plafond de la croissance — avant que ce soit l'échec qui le révèle ?",
          "questionEditoriale": "Comment reconnaître le moment où l'architecture de l'outil devient le vrai plafond de la croissance — avant que ce soit l'échec qui le révèle ?",
          "questionPublique": "Comment reconnaître le moment où l'architecture de l'outil devient le vrai plafond de la croissance — avant que ce soit l'échec qui le révèle ?",
          "questionActivation": "Un outil industriel peut accompagner une croissance pendant un certain temps. Mais l'architecture initiale finit parfois par imposer ses limites : organisation des lignes, capacité des machines, interfaces numériques, contraintes de maintenance ou standards de qualité. Ce qu'on attend de vous, c'est votre capacité à nommer ces signaux — et à dire comment les industriels qui les ont bien lus ont structuré leur décision avant que le choix ne disparaisse.",
          "introMecanisme": "Un outil industriel peut accompagner une croissance pendant un certain temps. Mais l'architecture initiale finit parfois par imposer ses limites : organisation des lignes, capacité des machines, interfaces numériques, contraintes de maintenance ou standards de qualité.",
          "texteProgramme": "Un outil industriel peut accompagner une croissance pendant un certain temps. Mais l'architecture initiale finit parfois par imposer ses limites : organisation des lignes, capacité des machines, interfaces numériques, contraintes de maintenance ou standards de qualité. Ce qu'on attend de vous, c'est votre capacité à nommer ces signaux — et à dire comment les industriels qui les ont bien lus ont structuré leur décision avant que le choix ne disparaisse.",
          "pointBascule": "À partir de quand l'outil existant empêche-t-il de passer un cap de volume, de qualité ou de fiabilité ?",
          "tensionArbitrage": "Optimiser l'outil existant ou accepter qu'il faille le transformer plus profondément.",
          "primaryProfiles": [
            "Direction systèmes industriels",
            "Automatisation",
            "Données / architecture technique",
            "Transformation digitale industrielle",
            "Ingénierie process"
          ],
          "landingPages": [
            "technologie-systemes",
            "technologie"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "Comment reconnaître le moment où l'architecture de l'outil devient le vrai plafond de la croissance — avant que ce soit l'échec qui le révèle ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — Comment reconnaître le moment où l'architecture de l'outil devient le vrai plafond de la croissance — avant que ce soit l'échec qui le révèle ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "momentBascule": "À partir de quand l'outil existant empêche-t-il de passer un cap de volume, de qualité ou de fiabilité ?",
            "tensionCentrale": "Optimiser l'outil existant ou accepter qu'il faille le transformer plus profondément.",
            "securisation": "L’échange ne suppose pas de décrire une architecture interne, un système critique, une feuille de route ou une vulnérabilité technique. Il s’agit de rendre lisibles les seuils où la technique devient une condition de décision."
          },
          "complementaryCodes": [
            "IND-C1-CST-01",
            "IND-C1-CST-02",
            "IND-C1-CST-04"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
        },
        {
          "code": "IND-C1-CST-04",
          "conversationCode": "C1",
          "contextCode": "CST",
          "contextLabel": "Croissance sous tension",
          "typeLecture": "RH_COMPETENCES",
          "typeLectureLabelSource": "RH / COMPÉTENCES",
          "titreAngle": "Comment les industriels qui ont réussi leur montée en charge ont-ils anticipé le décalage entre le rythme de la demande et le temps nécessaire pour recruter, équiper et industrialiser ?",
          "questionEditoriale": "Comment les industriels qui ont réussi leur montée en charge ont-ils anticipé le décalage entre le rythme de la demande et le temps nécessaire pour recruter, équiper et industrialiser ?",
          "questionPublique": "Comment les industriels qui ont réussi leur montée en charge ont-ils anticipé le décalage entre le rythme de la demande et le temps nécessaire pour recruter, équiper et industrialiser ?",
          "questionActivation": "La croissance industrielle dépend aussi du temps nécessaire pour recruter, former, équiper, qualifier, industrialiser et sécuriser la montée en capacité. Or le marché peut accélérer plus vite que l'organisation ne sait se transformer. Ce qu’on attend de vous, c’est une lecture située du mécanisme : les signaux à reconnaître, les arbitrages à formuler et les conditions qui changent la nature de la décision.",
          "introMecanisme": "La croissance industrielle dépend aussi du temps nécessaire pour recruter, former, équiper, qualifier, industrialiser et sécuriser la montée en capacité. Or le marché peut accélérer plus vite que l'organisation ne sait se transformer.",
          "texteProgramme": "La croissance industrielle dépend aussi du temps nécessaire pour recruter, former, équiper, qualifier, industrialiser et sécuriser la montée en capacité. Or le marché peut accélérer plus vite que l'organisation ne sait se transformer.",
          "pointBascule": "À partir de quand le temps nécessaire pour monter en capacité devient-il incompatible avec l'opportunité commerciale ?",
          "tensionArbitrage": "Répondre vite au marché sans brûler les étapes humaines, techniques et industrielles.",
          "primaryProfiles": [
            "Direction RH",
            "Compétences industrielles",
            "Formation / transmission",
            "Organisation du travail",
            "Sécurité / collectifs de travail"
          ],
          "landingPages": [
            "emploi-competences",
            "rh"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "Comment les industriels qui ont réussi leur montée en charge ont-ils anticipé le décalage entre le rythme de la demande et le temps nécessaire pour recruter, équiper et industrialiser ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — Comment les industriels qui ont réussi leur montée en charge ont-ils anticipé le décalage entre le rythme de la demande et le temps nécessaire pour recruter, équiper et industrialiser ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "momentBascule": "À partir de quand le temps nécessaire pour monter en capacité devient-il incompatible avec l'opportunité commerciale ?",
            "tensionCentrale": "Répondre vite au marché sans brûler les étapes humaines, techniques et industrielles.",
            "securisation": "L’échange ne suppose pas de commenter une situation sociale, un plan RH ou des données internes. Il s’agit de rendre visibles les conditions humaines, organisationnelles et temporelles de la trajectoire industrielle."
          },
          "complementaryCodes": [
            "IND-C1-CST-01",
            "IND-C1-CST-02",
            "IND-C1-CST-03"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
        },
        {
          "code": "IND-C1-ASC-01",
          "conversationCode": "C1",
          "contextCode": "ASC",
          "contextLabel": "Adaptation sous contrainte",
          "typeLecture": "FINANCIERE",
          "typeLectureLabelSource": "FINANCIÈRE",
          "titreAngle": "Quand l'activité résiste mais s'abîme : comment distinguer un ajustement qui tient d'un ajustement qui creuse ?",
          "questionEditoriale": "Quand l'activité résiste mais s'abîme : comment distinguer un ajustement qui tient d'un ajustement qui creuse ?",
          "questionPublique": "Quand l'activité résiste mais s'abîme : comment distinguer un ajustement qui tient d'un ajustement qui creuse ?",
          "questionActivation": "Sous contrainte, les entreprises ajustent — volumes, achats, investissements, équipes ou maintenance. Certains ajustements préservent l'équilibre économique. D'autres le creusent discrètement, sans que personne ne l'ait décidé clairement. La différence n'est pas toujours visible depuis l'intérieur. Ce qu'on attend de vous, c'est votre capacité à nommer cette différence — les patterns que vous avez vus se répéter, les signaux faibles que d'autres manquent, les critères qui permettent de distinguer l'un de l'autre.",
          "introMecanisme": "Sous contrainte, les entreprises ajustent — volumes, achats, investissements, équipes ou maintenance. Certains ajustements préservent l'équilibre économique. D'autres le creusent discrètement, sans que personne ne l'ait décidé clairement. La différence n'est pas toujours visible depuis l'intérieur.",
          "texteProgramme": "Sous contrainte, les entreprises ajustent — volumes, achats, investissements, équipes ou maintenance. Certains ajustements préservent l'équilibre économique. D'autres le creusent discrètement, sans que personne ne l'ait décidé clairement. La différence n'est pas toujours visible depuis l'intérieur. Ce qu'on attend de vous, c'est votre capacité à nommer cette différence — les patterns que vous avez vus se répéter, les signaux faibles que d'autres manquent, les critères qui permettent de distinguer l'un de l'autre.",
          "pointBascule": "À partir de quand l'adaptation détruit-elle plus de valeur qu'elle n'en préserve ?",
          "tensionArbitrage": "Maintenir l'activité aujourd'hui sans affaiblir les conditions de sa soutenabilité future.",
          "primaryProfiles": [
            "DAF / CFO industriel",
            "Corporate finance",
            "Investissement / CAPEX",
            "Restructuring",
            "Contrôle de gestion industriel"
          ],
          "landingPages": [
            "finance"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "Quand l'activité résiste mais s'abîme : comment distinguer un ajustement qui tient d'un ajustement qui creuse ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — Quand l'activité résiste mais s'abîme : comment distinguer un ajustement qui tient d'un ajustement qui creuse ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "IND-C1-ASC-02",
            "IND-C1-ASC-03",
            "IND-C1-ASC-04"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
        },
        {
          "code": "IND-C1-ASC-02",
          "conversationCode": "C1",
          "contextCode": "ASC",
          "contextLabel": "Adaptation sous contrainte",
          "typeLecture": "OPERATIONNELLE",
          "typeLectureLabelSource": "OPÉRATIONNELLE",
          "titreAngle": "Quels arbitrages permettent de maintenir l'activité lorsque les marges de manœuvre sur volumes, qualité, maintenance ou périmètre se resserrent ?",
          "questionEditoriale": "Quels arbitrages permettent de maintenir l'activité lorsque les marges de manœuvre sur volumes, qualité, maintenance ou périmètre se resserrent ?",
          "questionPublique": "Quels arbitrages permettent de maintenir l'activité lorsque les marges de manœuvre sur volumes, qualité, maintenance ou périmètre se resserrent ?",
          "questionActivation": "Dans un contexte contraint, maintenir l'activité suppose souvent de choisir entre des options imparfaites. Réduire certains volumes peut préserver la marge mais fragiliser la relation client. Reporter la maintenance peut libérer de la capacité mais accroître le risque industriel. Ce qu’on attend de vous, c’est une lecture située du mécanisme : les signaux à reconnaître, les arbitrages à formuler et les conditions qui changent la nature de la décision.",
          "introMecanisme": "Dans un contexte contraint, maintenir l'activité suppose souvent de choisir entre des options imparfaites. Réduire certains volumes peut préserver la marge mais fragiliser la relation client. Reporter la maintenance peut libérer de la capacité mais accroître le risque industriel.",
          "texteProgramme": "Dans un contexte contraint, maintenir l'activité suppose souvent de choisir entre des options imparfaites. Réduire certains volumes peut préserver la marge mais fragiliser la relation client. Reporter la maintenance peut libérer de la capacité mais accroître le risque industriel.",
          "pointBascule": "À partir de quand les compromis opérationnels deviennent-ils structurels ?",
          "tensionArbitrage": "Tenir l'activité sans transformer les ajustements temporaires en fragilité durable.",
          "primaryProfiles": [
            "Direction industrielle",
            "Direction opérations",
            "Production",
            "Supply chain / achats",
            "Excellence opérationnelle"
          ],
          "landingPages": [
            "operations",
            "operationnelle"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "Quels arbitrages permettent de maintenir l'activité lorsque les marges de manœuvre sur volumes, qualité, maintenance ou périmètre se resserrent ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — Quels arbitrages permettent de maintenir l'activité lorsque les marges de manœuvre sur volumes, qualité, maintenance ou périmètre se resserrent ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "momentBascule": "À partir de quand les compromis opérationnels deviennent-ils structurels ?",
            "tensionCentrale": "Tenir l'activité sans transformer les ajustements temporaires en fragilité durable.",
            "securisation": "L’échange ne suppose pas de commenter un site, un incident, un client, un fournisseur ou une situation confidentielle. Il s’agit de rendre lisible un mécanisme opérationnel à partir d’une expérience située."
          },
          "complementaryCodes": [
            "IND-C1-ASC-01",
            "IND-C1-ASC-03",
            "IND-C1-ASC-04"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
        },
        {
          "code": "IND-C1-ASC-03",
          "conversationCode": "C1",
          "contextCode": "ASC",
          "contextLabel": "Adaptation sous contrainte",
          "typeLecture": "TECHNOLOGIQUE",
          "typeLectureLabelSource": "TECHNOLOGIQUE / SYSTÈMES",
          "titreAngle": "Prolonger, rénover, remplacer : comment les industriels posent-ils le bon diagnostic quand l'outil vieillit sous contrainte ?",
          "questionEditoriale": "Prolonger, rénover, remplacer : comment les industriels posent-ils le bon diagnostic quand l'outil vieillit sous contrainte ?",
          "questionPublique": "Prolonger, rénover, remplacer : comment les industriels posent-ils le bon diagnostic quand l'outil vieillit sous contrainte ?",
          "questionActivation": "Un outil vieillissant peut rester productif lorsqu'il est bien entretenu. Mais en contexte de contrainte, ce vieillissement devient plus difficile à absorber : les pannes coûtent davantage, les pièces se raréfient, la maintenance prend plus de place. Ce qu'on attend de vous, c'est votre lecture de ce diagnostic — les critères qui permettent de distinguer prolonger, rénover et remplacer, et ce que chaque option implique réellement en termes de risque et de position industrielle.",
          "introMecanisme": "Un outil vieillissant peut rester productif lorsqu'il est bien entretenu. Mais en contexte de contrainte, ce vieillissement devient plus difficile à absorber : les pannes coûtent davantage, les pièces se raréfient, la maintenance prend plus de place.",
          "texteProgramme": "Un outil vieillissant peut rester productif lorsqu'il est bien entretenu. Mais en contexte de contrainte, ce vieillissement devient plus difficile à absorber : les pannes coûtent davantage, les pièces se raréfient, la maintenance prend plus de place. Ce qu'on attend de vous, c'est votre lecture de ce diagnostic — les critères qui permettent de distinguer prolonger, rénover et remplacer, et ce que chaque option implique réellement en termes de risque et de position industrielle.",
          "pointBascule": "À partir de quand l'outil ancien devient-il un risque plus qu'un actif ?",
          "tensionArbitrage": "Prolonger l'existant pour tenir ou investir pour sortir d'une dette industrielle croissante.",
          "primaryProfiles": [
            "Direction systèmes industriels",
            "Automatisation",
            "Données / architecture technique",
            "Transformation digitale industrielle",
            "Ingénierie process"
          ],
          "landingPages": [
            "technologie-systemes",
            "technologie"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "Prolonger, rénover, remplacer : comment les industriels posent-ils le bon diagnostic quand l'outil vieillit sous contrainte ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — Prolonger, rénover, remplacer : comment les industriels posent-ils le bon diagnostic quand l'outil vieillit sous contrainte ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "momentBascule": "À partir de quand l'outil ancien devient-il un risque plus qu'un actif ?",
            "tensionCentrale": "Prolonger l'existant pour tenir ou investir pour sortir d'une dette industrielle croissante.",
            "securisation": "L’échange ne suppose pas de décrire une architecture interne, un système critique, une feuille de route ou une vulnérabilité technique. Il s’agit de rendre lisibles les seuils où la technique devient une condition de décision."
          },
          "complementaryCodes": [
            "IND-C1-ASC-01",
            "IND-C1-ASC-02",
            "IND-C1-ASC-04"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
        },
        {
          "code": "IND-C1-ASC-04",
          "conversationCode": "C1",
          "contextCode": "ASC",
          "contextLabel": "Adaptation sous contrainte",
          "typeLecture": "RH_COMPETENCES",
          "typeLectureLabelSource": "RH / COMPÉTENCES",
          "titreAngle": "À partir de quand le temps nécessaire pour adapter l'outil ou réorganiser la production dépasse-t-il la capacité réelle de l'activité à tenir ?",
          "questionEditoriale": "À partir de quand le temps nécessaire pour adapter l'outil ou réorganiser la production dépasse-t-il la capacité réelle de l'activité à tenir ?",
          "questionPublique": "À partir de quand le temps nécessaire pour adapter l'outil ou réorganiser la production dépasse-t-il la capacité réelle de l'activité à tenir ?",
          "questionActivation": "S'adapter prend du temps : reconfigurer un atelier, redéployer des équipes, qualifier un nouveau process. Mais lorsque les contraintes s'intensifient, l'entreprise ne dispose pas toujours de ce temps. Ce qu’on attend de vous, c’est une lecture située du mécanisme : les signaux à reconnaître, les arbitrages à formuler et les conditions qui changent la nature de la décision.",
          "introMecanisme": "S'adapter prend du temps : reconfigurer un atelier, redéployer des équipes, qualifier un nouveau process. Mais lorsque les contraintes s'intensifient, l'entreprise ne dispose pas toujours de ce temps.",
          "texteProgramme": "S'adapter prend du temps : reconfigurer un atelier, redéployer des équipes, qualifier un nouveau process. Mais lorsque les contraintes s'intensifient, l'entreprise ne dispose pas toujours de ce temps.",
          "pointBascule": "À partir de quand le temps nécessaire pour s'adapter dépasse-t-il le temps disponible pour survivre ?",
          "tensionArbitrage": "Transformer assez vite sans déstabiliser l'activité qui doit continuer à fonctionner.",
          "primaryProfiles": [
            "Direction RH",
            "Compétences industrielles",
            "Formation / transmission",
            "Organisation du travail",
            "Sécurité / collectifs de travail"
          ],
          "landingPages": [
            "emploi-competences",
            "rh"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "À partir de quand le temps nécessaire pour adapter l'outil ou réorganiser la production dépasse-t-il la capacité réelle de l'activité à tenir ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — À partir de quand le temps nécessaire pour adapter l'outil ou réorganiser la production dépasse-t-il la capacité réelle de l'activité à tenir ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "momentBascule": "À partir de quand le temps nécessaire pour s'adapter dépasse-t-il le temps disponible pour survivre ?",
            "tensionCentrale": "Transformer assez vite sans déstabiliser l'activité qui doit continuer à fonctionner.",
            "securisation": "L’échange ne suppose pas de commenter une situation sociale, un plan RH ou des données internes. Il s’agit de rendre visibles les conditions humaines, organisationnelles et temporelles de la trajectoire industrielle."
          },
          "complementaryCodes": [
            "IND-C1-ASC-01",
            "IND-C1-ASC-02",
            "IND-C1-ASC-03"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
        },
        {
          "code": "IND-C1-RSS-01",
          "conversationCode": "C1",
          "contextCode": "RSS",
          "contextLabel": "Réinvention sous crise",
          "typeLecture": "STRATEGIQUE",
          "typeLectureLabelSource": "STRATÉGIQUE",
          "titreAngle": "À quel moment faut-il arrêter de corriger le modèle et décider de le changer — et qui doit prendre cette décision ?",
          "questionEditoriale": "À quel moment faut-il arrêter de corriger le modèle et décider de le changer — et qui doit prendre cette décision ?",
          "questionPublique": "À quel moment faut-il arrêter de corriger le modèle et décider de le changer — et qui doit prendre cette décision ?",
          "questionActivation": "En période de crise, les limites d'un modèle industriel apparaissent rarement d'un seul coup. Elles se manifestent d'abord par des écarts répétés : coûts qui ne reviennent pas au niveau attendu, délais qui s'allongent, qualité plus difficile à sécuriser. Vous n'êtes pas là pour témoigner d'une transformation vécue. Vous êtes là pour nommer ce qui distingue une entreprise qui engage ce changement au bon moment de celle qui le retarde jusqu'à ce qu'il soit imposé.",
          "introMecanisme": "En période de crise, les limites d'un modèle industriel apparaissent rarement d'un seul coup. Elles se manifestent d'abord par des écarts répétés : coûts qui ne reviennent pas au niveau attendu, délais qui s'allongent, qualité plus difficile à sécuriser.",
          "texteProgramme": "En période de crise, les limites d'un modèle industriel apparaissent rarement d'un seul coup. Elles se manifestent d'abord par des écarts répétés : coûts qui ne reviennent pas au niveau attendu, délais qui s'allongent, qualité plus difficile à sécuriser. Vous n'êtes pas là pour témoigner d'une transformation vécue. Vous êtes là pour nommer ce qui distingue une entreprise qui engage ce changement au bon moment de celle qui le retarde jusqu'à ce qu'il soit imposé.",
          "pointBascule": "À partir de quand le modèle existant devient-il irréversible dans ses fragilités ?",
          "tensionArbitrage": "Corriger l'existant ou reconnaître que le modèle doit être repensé.",
          "primaryProfiles": [
            "Direction générale",
            "Direction stratégie",
            "Conseil stratégie industrielle",
            "Direction industrielle",
            "Transformation / repositionnement"
          ],
          "landingPages": [
            "strategie"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "À quel moment faut-il arrêter de corriger le modèle et décider de le changer — et qui doit prendre cette décision ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — À quel moment faut-il arrêter de corriger le modèle et décider de le changer — et qui doit prendre cette décision ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "securisation": "L’échange ne suppose pas de commenter une stratégie interne, un client, un mandat ou une décision confidentielle. Il s’agit d’éclairer un mécanisme industriel à partir de votre expérience et de votre position d’observation."
          },
          "complementaryCodes": [
            "IND-C1-RSS-02",
            "IND-C1-RSS-03",
            "IND-C1-RSS-04"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
        },
        {
          "code": "IND-C1-RSS-02",
          "conversationCode": "C1",
          "contextCode": "RSS",
          "contextLabel": "Réinvention sous crise",
          "typeLecture": "OPERATIONNELLE",
          "typeLectureLabelSource": "OPÉRATIONNELLE",
          "titreAngle": "À partir de quand le maintien de l'activité appelle-t-il une décision de transformation plutôt qu'une simple adaptation opérationnelle ?",
          "questionEditoriale": "À partir de quand le maintien de l'activité appelle-t-il une décision de transformation plutôt qu'une simple adaptation opérationnelle ?",
          "questionPublique": "À partir de quand le maintien de l'activité appelle-t-il une décision de transformation plutôt qu'une simple adaptation opérationnelle ?",
          "questionActivation": "En situation de crise, continuer à produire peut donner l'impression que l'activité tient encore. Pourtant, ce maintien apparent peut masquer une perte de rationalité : coûts excessifs, efforts disproportionnés, désorganisation chronique. Ce qu’on attend de vous, c’est une lecture située du mécanisme : les signaux à reconnaître, les arbitrages à formuler et les conditions qui changent la nature de la décision.",
          "introMecanisme": "En situation de crise, continuer à produire peut donner l'impression que l'activité tient encore. Pourtant, ce maintien apparent peut masquer une perte de rationalité : coûts excessifs, efforts disproportionnés, désorganisation chronique.",
          "texteProgramme": "En situation de crise, continuer à produire peut donner l'impression que l'activité tient encore. Pourtant, ce maintien apparent peut masquer une perte de rationalité : coûts excessifs, efforts disproportionnés, désorganisation chronique.",
          "pointBascule": "À partir de quand la continuité devient-elle elle-même un risque ?",
          "tensionArbitrage": "Maintenir ce qui fonctionne encore ou transformer avant que le système ne se dégrade davantage.",
          "primaryProfiles": [
            "Direction industrielle",
            "Direction opérations",
            "Production",
            "Supply chain / achats",
            "Excellence opérationnelle"
          ],
          "landingPages": [
            "operations",
            "operationnelle"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "À partir de quand le maintien de l'activité appelle-t-il une décision de transformation plutôt qu'une simple adaptation opérationnelle ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — À partir de quand le maintien de l'activité appelle-t-il une décision de transformation plutôt qu'une simple adaptation opérationnelle ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "momentBascule": "À partir de quand la continuité devient-elle elle-même un risque ?",
            "tensionCentrale": "Maintenir ce qui fonctionne encore ou transformer avant que le système ne se dégrade davantage.",
            "securisation": "L’échange ne suppose pas de commenter un site, un incident, un client, un fournisseur ou une situation confidentielle. Il s’agit de rendre lisible un mécanisme opérationnel à partir d’une expérience située."
          },
          "complementaryCodes": [
            "IND-C1-RSS-01",
            "IND-C1-RSS-03",
            "IND-C1-RSS-04"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
        },
        {
          "code": "IND-C1-RSS-03",
          "conversationCode": "C1",
          "contextCode": "RSS",
          "contextLabel": "Réinvention sous crise",
          "typeLecture": "FINANCIERE",
          "typeLectureLabelSource": "FINANCIÈRE",
          "titreAngle": "Dette technologique industrielle : comment transformer une contrainte accumulée en décision assumée plutôt qu'en rupture subie ?",
          "questionEditoriale": "Dette technologique industrielle : comment transformer une contrainte accumulée en décision assumée plutôt qu'en rupture subie ?",
          "questionPublique": "Dette technologique industrielle : comment transformer une contrainte accumulée en décision assumée plutôt qu'en rupture subie ?",
          "questionActivation": "La dette technologique s'accumule souvent silencieusement : systèmes hétérogènes, automatismes dépassés, équipements difficiles à maintenir. En crise, elle peut empêcher toute adaptation rapide. Vous n'êtes pas là pour décrire une transformation vécue. Vous êtes là pour nommer ce qui permet à certains industriels de transformer ce moment de contrainte en décision maîtrisée — et ce que les autres ont raté.",
          "introMecanisme": "La dette technologique s'accumule souvent silencieusement : systèmes hétérogènes, automatismes dépassés, équipements difficiles à maintenir. En crise, elle peut empêcher toute adaptation rapide.",
          "texteProgramme": "La dette technologique s'accumule souvent silencieusement : systèmes hétérogènes, automatismes dépassés, équipements difficiles à maintenir. En crise, elle peut empêcher toute adaptation rapide. Vous n'êtes pas là pour décrire une transformation vécue. Vous êtes là pour nommer ce qui permet à certains industriels de transformer ce moment de contrainte en décision maîtrisée — et ce que les autres ont raté.",
          "pointBascule": "À partir de quand la dette technologique bloque-t-elle toute adaptation crédible ?",
          "tensionArbitrage": "Reporter l'investissement ou accepter une rupture technologique devenue nécessaire.",
          "primaryProfiles": [
            "DAF / CFO industriel",
            "Corporate finance",
            "Investissement / CAPEX",
            "Restructuring",
            "Contrôle de gestion industriel"
          ],
          "landingPages": [
            "finance"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "Dette technologique industrielle : comment transformer une contrainte accumulée en décision assumée plutôt qu'en rupture subie ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — Dette technologique industrielle : comment transformer une contrainte accumulée en décision assumée plutôt qu'en rupture subie ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "IND-C1-RSS-01",
            "IND-C1-RSS-02",
            "IND-C1-RSS-04"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
        },
        {
          "code": "IND-C1-RSS-04",
          "conversationCode": "C1",
          "contextCode": "RSS",
          "contextLabel": "Réinvention sous crise",
          "typeLecture": "TERRITORIALE",
          "typeLectureLabelSource": "TERRITORIALE",
          "titreAngle": "À partir de quand le délai requis pour redéployer, reconvertir ou refonder l'outil dépasse-t-il le temps économique, social ou financier encore disponible ?",
          "questionEditoriale": "À partir de quand le délai requis pour redéployer, reconvertir ou refonder l'outil dépasse-t-il le temps économique, social ou financier encore disponible ?",
          "questionPublique": "À partir de quand le délai requis pour redéployer, reconvertir ou refonder l'outil dépasse-t-il le temps économique, social ou financier encore disponible ?",
          "questionActivation": "Réinventer un outil industriel suppose du temps : diagnostiquer, investir, reconvertir, former, négocier, sécuriser les financements et accompagner les impacts sociaux. Mais en période de crise, ce temps peut manquer. Ce qu’on attend de vous, c’est une lecture située du mécanisme : les signaux à reconnaître, les arbitrages à formuler et les conditions qui changent la nature de la décision.",
          "introMecanisme": "Réinventer un outil industriel suppose du temps : diagnostiquer, investir, reconvertir, former, négocier, sécuriser les financements et accompagner les impacts sociaux. Mais en période de crise, ce temps peut manquer.",
          "texteProgramme": "Réinventer un outil industriel suppose du temps : diagnostiquer, investir, reconvertir, former, négocier, sécuriser les financements et accompagner les impacts sociaux. Mais en période de crise, ce temps peut manquer.",
          "pointBascule": "À partir de quand le temps économique est-il déjà dépassé par rapport au temps industriel et social nécessaire ?",
          "tensionArbitrage": "Transformer dans l'urgence sans perdre les ressources humaines, financières et territoriales indispensables.",
          "primaryProfiles": [
            "Direction territoriale",
            "Filière / écosystème",
            "Développement territorial",
            "Site / ancrage local",
            "Collectivités / infrastructures"
          ],
          "landingPages": [
            "territorial",
            "territoriale",
            "territoires-ancrage"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "À partir de quand le délai requis pour redéployer, reconvertir ou refonder l'outil dépasse-t-il le temps économique, social ou financier encore disponible ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — À partir de quand le délai requis pour redéployer, reconvertir ou refonder l'outil dépasse-t-il le temps économique, social ou financier encore disponible ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "momentBascule": "À partir de quand le temps économique est-il déjà dépassé par rapport au temps industriel et social nécessaire ?",
            "tensionCentrale": "Transformer dans l'urgence sans perdre les ressources humaines, financières et territoriales indispensables.",
            "securisation": "L’échange ne suppose pas d’exposer une négociation locale, un site ou une décision confidentielle. Il s’agit de rendre lisibles les conditions territoriales qui soutiennent, limitent ou déplacent la trajectoire industrielle."
          },
          "complementaryCodes": [
            "IND-C1-RSS-01",
            "IND-C1-RSS-02",
            "IND-C1-RSS-03"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
        },
        {
          "code": "IND-C2-CST-01",
          "conversationCode": "C2",
          "contextCode": "CST",
          "contextLabel": "Croissance sous tension",
          "typeLecture": "STRATEGIQUE",
          "typeLectureLabelSource": "STRATÉGIQUE",
          "titreAngle": "Dépendances industrielles : comment identifier celles qui freinent la croissance avant qu'elles ne la bloquent ?",
          "questionEditoriale": "Dépendances industrielles : comment identifier celles qui freinent la croissance avant qu'elles ne la bloquent ?",
          "questionPublique": "Dépendances industrielles : comment identifier celles qui freinent la croissance avant qu'elles ne la bloquent ?",
          "questionActivation": "En phase de croissance, les dépendances restent invisibles tant qu'elles fonctionnent. Fournisseur unique, filière tendue, logistique sous-dimensionnée : ce sont des risques dormants que la croissance elle-même révèle — souvent au pire moment. Le mécanisme précède toujours le problème visible. Ce qu'on attend de vous, c'est une lecture transversale de ce mécanisme — les signaux que vous avez appris à lire, les moments où une dépendance passe du statut de contrainte acceptable à celui de risque structurel.",
          "introMecanisme": "En phase de croissance, les dépendances restent invisibles tant qu'elles fonctionnent. Fournisseur unique, filière tendue, logistique sous-dimensionnée : ce sont des risques dormants que la croissance elle-même révèle — souvent au pire moment. Le mécanisme précède toujours le problème visible.",
          "texteProgramme": "En phase de croissance, les dépendances restent invisibles tant qu'elles fonctionnent. Fournisseur unique, filière tendue, logistique sous-dimensionnée : ce sont des risques dormants que la croissance elle-même révèle — souvent au pire moment. Le mécanisme précède toujours le problème visible. Ce qu'on attend de vous, c'est une lecture transversale de ce mécanisme — les signaux que vous avez appris à lire, les moments où une dépendance passe du statut de contrainte acceptable à celui de risque structurel.",
          "pointBascule": "À partir de quand un fournisseur ou un flux logistique devient-il un point de blocage de la croissance ?",
          "tensionArbitrage": "Croître grâce à des dépendances efficaces sans devenir prisonnier de leur fragilité.",
          "primaryProfiles": [
            "Direction générale",
            "Direction stratégie",
            "Conseil stratégie industrielle",
            "Direction industrielle",
            "Transformation / repositionnement"
          ],
          "landingPages": [
            "strategie"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "Dépendances industrielles : comment identifier celles qui freinent la croissance avant qu'elles ne la bloquent ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — Dépendances industrielles : comment identifier celles qui freinent la croissance avant qu'elles ne la bloquent ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "securisation": "L’échange ne suppose pas de commenter une stratégie interne, un client, un mandat ou une décision confidentielle. Il s’agit d’éclairer un mécanisme industriel à partir de votre expérience et de votre position d’observation."
          },
          "complementaryCodes": [
            "IND-C2-CST-02",
            "IND-C2-CST-03",
            "IND-C2-CST-04"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
        },
        {
          "code": "IND-C2-CST-02",
          "conversationCode": "C2",
          "contextCode": "CST",
          "contextLabel": "Croissance sous tension",
          "typeLecture": "TERRITORIALE",
          "typeLectureLabelSource": "TERRITORIALE",
          "titreAngle": "À partir de quand une spécialisation de filière ou de segment limite-t-elle la capacité à capter durablement la croissance ?",
          "questionEditoriale": "À partir de quand une spécialisation de filière ou de segment limite-t-elle la capacité à capter durablement la croissance ?",
          "questionPublique": "À partir de quand une spécialisation de filière ou de segment limite-t-elle la capacité à capter durablement la croissance ?",
          "questionActivation": "La spécialisation peut constituer un avantage puissant. Mais elle peut aussi devenir une dépendance lorsque la croissance exige de changer d'échelle, de diversifier les débouchés ou de répondre à des attentes nouvelles. Ce qu’on attend de vous, c’est une lecture située du mécanisme : les signaux à reconnaître, les arbitrages à formuler et les conditions qui changent la nature de la décision.",
          "introMecanisme": "La spécialisation peut constituer un avantage puissant. Mais elle peut aussi devenir une dépendance lorsque la croissance exige de changer d'échelle, de diversifier les débouchés ou de répondre à des attentes nouvelles.",
          "texteProgramme": "La spécialisation peut constituer un avantage puissant. Mais elle peut aussi devenir une dépendance lorsque la croissance exige de changer d'échelle, de diversifier les débouchés ou de répondre à des attentes nouvelles.",
          "pointBascule": "À partir de quand la spécialisation devient-elle un verrou de croissance ?",
          "tensionArbitrage": "Exploiter une spécialisation forte sans s'enfermer dans un segment trop étroit.",
          "primaryProfiles": [
            "Direction territoriale",
            "Filière / écosystème",
            "Développement territorial",
            "Site / ancrage local",
            "Collectivités / infrastructures"
          ],
          "landingPages": [
            "territorial",
            "territoriale",
            "territoires-ancrage"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "À partir de quand une spécialisation de filière ou de segment limite-t-elle la capacité à capter durablement la croissance ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — À partir de quand une spécialisation de filière ou de segment limite-t-elle la capacité à capter durablement la croissance ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "momentBascule": "À partir de quand la spécialisation devient-elle un verrou de croissance ?",
            "tensionCentrale": "Exploiter une spécialisation forte sans s'enfermer dans un segment trop étroit.",
            "securisation": "L’échange ne suppose pas d’exposer une négociation locale, un site ou une décision confidentielle. Il s’agit de rendre lisibles les conditions territoriales qui soutiennent, limitent ou déplacent la trajectoire industrielle."
          },
          "complementaryCodes": [
            "IND-C2-CST-01",
            "IND-C2-CST-03",
            "IND-C2-CST-04"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
        },
        {
          "code": "IND-C2-CST-03",
          "conversationCode": "C2",
          "contextCode": "CST",
          "contextLabel": "Croissance sous tension",
          "typeLecture": "JURIDIQUE",
          "typeLectureLabelSource": "JURIDIQUE / RÉGLEMENTAIRE",
          "titreAngle": "Comment le cadre réglementaire et commercial transforme-t-il une dépendance tolérable en contrainte structurelle — et comment les industriels l'anticipent-ils ?",
          "questionEditoriale": "Comment le cadre réglementaire et commercial transforme-t-il une dépendance tolérable en contrainte structurelle — et comment les industriels l'anticipent-ils ?",
          "questionPublique": "Comment le cadre réglementaire et commercial transforme-t-il une dépendance tolérable en contrainte structurelle — et comment les industriels l'anticipent-ils ?",
          "questionActivation": "La croissance industrielle passe souvent par de nouveaux marchés. Mais cette ouverture introduit aussi des règles : normes, douanes, certifications, contrôles export, contraintes géopolitiques. Ce qu'on attend de vous, c'est votre lecture de ce mécanisme — pas les règles spécifiques de vos clients, mais la façon dont le cadre extérieur transforme une dépendance gérable en contrainte qui requalifie la trajectoire elle-même.",
          "introMecanisme": "La croissance industrielle passe souvent par de nouveaux marchés. Mais cette ouverture introduit aussi des règles : normes, douanes, certifications, contrôles export, contraintes géopolitiques.",
          "texteProgramme": "La croissance industrielle passe souvent par de nouveaux marchés. Mais cette ouverture introduit aussi des règles : normes, douanes, certifications, contrôles export, contraintes géopolitiques. Ce qu'on attend de vous, c'est votre lecture de ce mécanisme — pas les règles spécifiques de vos clients, mais la façon dont le cadre extérieur transforme une dépendance gérable en contrainte qui requalifie la trajectoire elle-même.",
          "pointBascule": "À partir de quand la règle devient-elle un facteur de continuité ou de rupture ?",
          "tensionArbitrage": "S'ouvrir à de nouveaux marchés sans exposer la continuité industrielle à des cadres mal maîtrisés.",
          "primaryProfiles": [
            "Direction juridique",
            "Affaires publiques",
            "Conformité / réglementation",
            "Droit industriel",
            "Conseil juridique / réglementaire"
          ],
          "landingPages": [
            "juridique"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "Comment le cadre réglementaire et commercial transforme-t-il une dépendance tolérable en contrainte structurelle — et comment les industriels l'anticipent-ils ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — Comment le cadre réglementaire et commercial transforme-t-il une dépendance tolérable en contrainte structurelle — et comment les industriels l'anticipent-ils ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "momentBascule": "À partir de quand la règle devient-elle un facteur de continuité ou de rupture ?",
            "tensionCentrale": "S'ouvrir à de nouveaux marchés sans exposer la continuité industrielle à des cadres mal maîtrisés.",
            "securisation": "L’échange ne suppose pas d’exposer un dossier, un contentieux, une position juridique interne ou une information sensible. Il s’agit d’éclairer le rôle du cadre dans la manière dont une décision industrielle change de nature."
          },
          "complementaryCodes": [
            "IND-C2-CST-01",
            "IND-C2-CST-02",
            "IND-C2-CST-04"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
        },
        {
          "code": "IND-C2-CST-04",
          "conversationCode": "C2",
          "contextCode": "CST",
          "contextLabel": "Croissance sous tension",
          "typeLecture": "TECHNOLOGIQUE",
          "typeLectureLabelSource": "TECHNOLOGIQUE / SYSTÈMES",
          "titreAngle": "Comment les systèmes d'information et les interfaces entre sites ou métiers révèlent-ils — ou masquent-ils — les dépendances critiques dans une organisation industrielle ?",
          "questionEditoriale": "Comment les systèmes d'information et les interfaces entre sites ou métiers révèlent-ils — ou masquent-ils — les dépendances critiques dans une organisation industrielle ?",
          "questionPublique": "Comment les systèmes d'information et les interfaces entre sites ou métiers révèlent-ils — ou masquent-ils — les dépendances critiques dans une organisation industrielle ?",
          "questionActivation": "La croissance industrielle repose de plus en plus sur des systèmes. Tant que l'activité reste stable, une architecture imparfaite peut fonctionner. Mais lorsque les volumes augmentent, les limites apparaissent. Ce qu’on attend de vous, c’est une lecture située du mécanisme : les signaux à reconnaître, les arbitrages à formuler et les conditions qui changent la nature de la décision.",
          "introMecanisme": "La croissance industrielle repose de plus en plus sur des systèmes. Tant que l'activité reste stable, une architecture imparfaite peut fonctionner. Mais lorsque les volumes augmentent, les limites apparaissent.",
          "texteProgramme": "La croissance industrielle repose de plus en plus sur des systèmes. Tant que l'activité reste stable, une architecture imparfaite peut fonctionner. Mais lorsque les volumes augmentent, les limites apparaissent.",
          "pointBascule": "À partir de quand l'architecture technique empêche-t-elle de suivre la croissance ?",
          "tensionArbitrage": "Accroître l'activité sans que les systèmes deviennent le facteur limitant du pilotage.",
          "primaryProfiles": [
            "Direction systèmes industriels",
            "Automatisation",
            "Données / architecture technique",
            "Transformation digitale industrielle",
            "Ingénierie process"
          ],
          "landingPages": [
            "technologie-systemes",
            "technologie"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "Comment les systèmes d'information et les interfaces entre sites ou métiers révèlent-ils — ou masquent-ils — les dépendances critiques dans une organisation industrielle ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — Comment les systèmes d'information et les interfaces entre sites ou métiers révèlent-ils — ou masquent-ils — les dépendances critiques dans une organisation industrielle ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "momentBascule": "À partir de quand l'architecture technique empêche-t-elle de suivre la croissance ?",
            "tensionCentrale": "Accroître l'activité sans que les systèmes deviennent le facteur limitant du pilotage.",
            "securisation": "L’échange ne suppose pas de décrire une architecture interne, un système critique, une feuille de route ou une vulnérabilité technique. Il s’agit de rendre lisibles les seuils où la technique devient une condition de décision."
          },
          "complementaryCodes": [
            "IND-C2-CST-01",
            "IND-C2-CST-02",
            "IND-C2-CST-03"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
        },
        {
          "code": "IND-C2-ASC-01",
          "conversationCode": "C2",
          "contextCode": "ASC",
          "contextLabel": "Adaptation sous contrainte",
          "typeLecture": "FINANCIERE",
          "typeLectureLabelSource": "FINANCIÈRE",
          "titreAngle": "Comment lire une dépendance amont comme un risque financier — et à quel moment ce risque change-t-il de nature dans le regard d'un financeur ?",
          "questionEditoriale": "Comment lire une dépendance amont comme un risque financier — et à quel moment ce risque change-t-il de nature dans le regard d'un financeur ?",
          "questionPublique": "Comment lire une dépendance amont comme un risque financier — et à quel moment ce risque change-t-il de nature dans le regard d'un financeur ?",
          "questionActivation": "Une dépendance peut être acceptable tant que l'entreprise dispose de marges de manœuvre. Mais lorsque ces marges se réduisent, la même dépendance devient plus coûteuse, plus risquée et plus difficile à piloter. Votre lecture porte sur ce critère de distinction — ce qui rend une dépendance défendable ou sacrifiable selon l'horizon et la position dans la chaîne de valeur. Pas sur les dépendances spécifiques de vos clients. Ce qu’on attend de vous, c’est une lecture située du mécanisme : les signaux à reconnaître, les arbitrages à formuler et les conditions qui changent la nature de la décision.",
          "introMecanisme": "Une dépendance peut être acceptable tant que l'entreprise dispose de marges de manœuvre. Mais lorsque ces marges se réduisent, la même dépendance devient plus coûteuse, plus risquée et plus difficile à piloter.",
          "texteProgramme": "Une dépendance peut être acceptable tant que l'entreprise dispose de marges de manœuvre. Mais lorsque ces marges se réduisent, la même dépendance devient plus coûteuse, plus risquée et plus difficile à piloter. Votre lecture porte sur ce critère de distinction — ce qui rend une dépendance défendable ou sacrifiable selon l'horizon et la position dans la chaîne de valeur. Pas sur les dépendances spécifiques de vos clients.",
          "pointBascule": "Quand la dépendance devient-elle financièrement ou opérationnellement intenable ?",
          "tensionArbitrage": "Préserver l'efficacité d'une dépendance sans subir son coût croissant.",
          "primaryProfiles": [
            "DAF / CFO industriel",
            "Corporate finance",
            "Investissement / CAPEX",
            "Restructuring",
            "Contrôle de gestion industriel"
          ],
          "landingPages": [
            "finance"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "Comment lire une dépendance amont comme un risque financier — et à quel moment ce risque change-t-il de nature dans le regard d'un financeur ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — Comment lire une dépendance amont comme un risque financier — et à quel moment ce risque change-t-il de nature dans le regard d'un financeur ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "IND-C2-ASC-02",
            "IND-C2-ASC-03",
            "IND-C2-ASC-04"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
        },
        {
          "code": "IND-C2-ASC-02",
          "conversationCode": "C2",
          "contextCode": "ASC",
          "contextLabel": "Adaptation sous contrainte",
          "typeLecture": "STRATEGIQUE",
          "typeLectureLabelSource": "STRATÉGIQUE",
          "titreAngle": "Sous contrainte, quelles dépendances lâcher, lesquelles protéger — et à quel prix sur la position future dans la filière ?",
          "questionEditoriale": "Sous contrainte, quelles dépendances lâcher, lesquelles protéger — et à quel prix sur la position future dans la filière ?",
          "questionPublique": "Sous contrainte, quelles dépendances lâcher, lesquelles protéger — et à quel prix sur la position future dans la filière ?",
          "questionActivation": "En période de contrainte, les ajustements ne sont jamais neutres. Réduire une activité peut affaiblir une position future ; changer de segment peut rompre des équilibres commerciaux ou industriels. Ce qu’on attend de vous, c’est une lecture située du mécanisme : les signaux à reconnaître, les arbitrages à formuler et les conditions qui changent la nature de la décision.",
          "introMecanisme": "En période de contrainte, les ajustements ne sont jamais neutres. Réduire une activité peut affaiblir une position future ; changer de segment peut rompre des équilibres commerciaux ou industriels.",
          "texteProgramme": "En période de contrainte, les ajustements ne sont jamais neutres. Réduire une activité peut affaiblir une position future ; changer de segment peut rompre des équilibres commerciaux ou industriels.",
          "pointBascule": "À partir de quand l'ajustement fragilise-t-il la position future dans la chaîne de valeur ?",
          "tensionArbitrage": "S'adapter sans perdre ce qui fonde la place stratégique dans la filière.",
          "primaryProfiles": [
            "Direction générale",
            "Direction stratégie",
            "Conseil stratégie industrielle",
            "Direction industrielle",
            "Transformation / repositionnement"
          ],
          "landingPages": [
            "strategie"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "Sous contrainte, quelles dépendances lâcher, lesquelles protéger — et à quel prix sur la position future dans la filière ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — Sous contrainte, quelles dépendances lâcher, lesquelles protéger — et à quel prix sur la position future dans la filière ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "securisation": "L’échange ne suppose pas de commenter une stratégie interne, un client, un mandat ou une décision confidentielle. Il s’agit d’éclairer un mécanisme industriel à partir de votre expérience et de votre position d’observation."
          },
          "complementaryCodes": [
            "IND-C2-ASC-01",
            "IND-C2-ASC-03",
            "IND-C2-ASC-04"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
        },
        {
          "code": "IND-C2-ASC-03",
          "conversationCode": "C2",
          "contextCode": "ASC",
          "contextLabel": "Adaptation sous contrainte",
          "typeLecture": "JURIDIQUE",
          "typeLectureLabelSource": "JURIDIQUE / RÉGLEMENTAIRE",
          "titreAngle": "Comment le cadre réglementaire et commercial transforme-t-il une dépendance tolérable en contrainte structurelle — et comment les industriels l'anticipent-ils ?",
          "questionEditoriale": "Comment le cadre réglementaire et commercial transforme-t-il une dépendance tolérable en contrainte structurelle — et comment les industriels l'anticipent-ils ?",
          "questionPublique": "Comment le cadre réglementaire et commercial transforme-t-il une dépendance tolérable en contrainte structurelle — et comment les industriels l'anticipent-ils ?",
          "questionActivation": "Lorsqu'une entreprise doit s'adapter, elle ne le fait jamais dans un espace totalement libre. Les règles encadrent les décisions possibles et peuvent rendre certains ajustements trop longs, trop coûteux ou trop risqués. Ce qu’on attend de vous, c’est une lecture située du mécanisme : les signaux à reconnaître, les arbitrages à formuler et les conditions qui changent la nature de la décision.",
          "introMecanisme": "Lorsqu'une entreprise doit s'adapter, elle ne le fait jamais dans un espace totalement libre. Les règles encadrent les décisions possibles et peuvent rendre certains ajustements trop longs, trop coûteux ou trop risqués.",
          "texteProgramme": "Lorsqu'une entreprise doit s'adapter, elle ne le fait jamais dans un espace totalement libre. Les règles encadrent les décisions possibles et peuvent rendre certains ajustements trop longs, trop coûteux ou trop risqués.",
          "pointBascule": "Quand la règle empêche-t-elle d'ajuster sans rupture ?",
          "tensionArbitrage": "Adapter vite l'activité sans sortir du cadre réglementaire ni rompre la continuité.",
          "primaryProfiles": [
            "Direction juridique",
            "Affaires publiques",
            "Conformité / réglementation",
            "Droit industriel",
            "Conseil juridique / réglementaire"
          ],
          "landingPages": [
            "juridique"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "Comment le cadre réglementaire et commercial transforme-t-il une dépendance tolérable en contrainte structurelle — et comment les industriels l'anticipent-ils ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — Comment le cadre réglementaire et commercial transforme-t-il une dépendance tolérable en contrainte structurelle — et comment les industriels l'anticipent-ils ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "momentBascule": "Quand la règle empêche-t-elle d'ajuster sans rupture ?",
            "tensionCentrale": "Adapter vite l'activité sans sortir du cadre réglementaire ni rompre la continuité.",
            "securisation": "L’échange ne suppose pas d’exposer un dossier, un contentieux, une position juridique interne ou une information sensible. Il s’agit d’éclairer le rôle du cadre dans la manière dont une décision industrielle change de nature."
          },
          "complementaryCodes": [
            "IND-C2-ASC-01",
            "IND-C2-ASC-02",
            "IND-C2-ASC-04"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
        },
        {
          "code": "IND-C2-ASC-04",
          "conversationCode": "C2",
          "contextCode": "ASC",
          "contextLabel": "Adaptation sous contrainte",
          "typeLecture": "TECHNOLOGIQUE",
          "typeLectureLabelSource": "TECHNOLOGIQUE / SYSTÈMES",
          "titreAngle": "Comment les systèmes d'information et les interfaces entre sites ou métiers révèlent-ils — ou masquent-ils — les dépendances critiques dans une organisation industrielle ?",
          "questionEditoriale": "Comment les systèmes d'information et les interfaces entre sites ou métiers révèlent-ils — ou masquent-ils — les dépendances critiques dans une organisation industrielle ?",
          "questionPublique": "Comment les systèmes d'information et les interfaces entre sites ou métiers révèlent-ils — ou masquent-ils — les dépendances critiques dans une organisation industrielle ?",
          "questionActivation": "En contexte contraint, la performance dépend moins de la puissance de chaque outil que de la qualité des interfaces entre eux. Lorsque ces interfaces sont fragmentées, l'entreprise perd du temps, de la visibilité et de la capacité d'arbitrage. Ce qu’on attend de vous, c’est une lecture située du mécanisme : les signaux à reconnaître, les arbitrages à formuler et les conditions qui changent la nature de la décision.",
          "introMecanisme": "En contexte contraint, la performance dépend moins de la puissance de chaque outil que de la qualité des interfaces entre eux. Lorsque ces interfaces sont fragmentées, l'entreprise perd du temps, de la visibilité et de la capacité d'arbitrage.",
          "texteProgramme": "En contexte contraint, la performance dépend moins de la puissance de chaque outil que de la qualité des interfaces entre eux. Lorsque ces interfaces sont fragmentées, l'entreprise perd du temps, de la visibilité et de la capacité d'arbitrage.",
          "pointBascule": "Quand les interfaces deviennent-elles le principal facteur de risque opérationnel ?",
          "tensionArbitrage": "Adapter l'activité sans que la fragmentation des systèmes ralentisse ou fausse le pilotage.",
          "primaryProfiles": [
            "Direction systèmes industriels",
            "Automatisation",
            "Données / architecture technique",
            "Transformation digitale industrielle",
            "Ingénierie process"
          ],
          "landingPages": [
            "technologie-systemes",
            "technologie"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "Comment les systèmes d'information et les interfaces entre sites ou métiers révèlent-ils — ou masquent-ils — les dépendances critiques dans une organisation industrielle ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — Comment les systèmes d'information et les interfaces entre sites ou métiers révèlent-ils — ou masquent-ils — les dépendances critiques dans une organisation industrielle ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "momentBascule": "Quand les interfaces deviennent-elles le principal facteur de risque opérationnel ?",
            "tensionCentrale": "Adapter l'activité sans que la fragmentation des systèmes ralentisse ou fausse le pilotage.",
            "securisation": "L’échange ne suppose pas de décrire une architecture interne, un système critique, une feuille de route ou une vulnérabilité technique. Il s’agit de rendre lisibles les seuils où la technique devient une condition de décision."
          },
          "complementaryCodes": [
            "IND-C2-ASC-01",
            "IND-C2-ASC-02",
            "IND-C2-ASC-03"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
        },
        {
          "code": "IND-C2-RSS-01",
          "conversationCode": "C2",
          "contextCode": "RSS",
          "contextLabel": "Réinvention sous crise",
          "typeLecture": "STRATEGIQUE",
          "typeLectureLabelSource": "STRATÉGIQUE",
          "titreAngle": "Relocaliser, substituer, changer de modèle : comment savoir quand la dépendance est devenue un problème stratégique qui ne se résout plus opérationnellement ?",
          "questionEditoriale": "Relocaliser, substituer, changer de modèle : comment savoir quand la dépendance est devenue un problème stratégique qui ne se résout plus opérationnellement ?",
          "questionPublique": "Relocaliser, substituer, changer de modèle : comment savoir quand la dépendance est devenue un problème stratégique qui ne se résout plus opérationnellement ?",
          "questionActivation": "Certaines dépendances peuvent être gérées — multisourcing, stockage, contrats. D'autres ont atteint un seuil où aucun ajustement opérationnel ne suffit plus. Ce seuil est le moment où la question change de nature : elle cesse d'être un problème d'approvisionnement pour devenir une question de modèle. Ce qu'on attend de vous, c'est votre lecture de ce seuil — comment le reconnaître, ce qui l'a précédé, et ce que ça implique comme type de décision. Pas un cas client, une lecture de mécanisme.",
          "introMecanisme": "Certaines dépendances peuvent être gérées — multisourcing, stockage, contrats. D'autres ont atteint un seuil où aucun ajustement opérationnel ne suffit plus. Ce seuil est le moment où la question change de nature : elle cesse d'être un problème d'approvisionnement pour devenir une question de modèle.",
          "texteProgramme": "Certaines dépendances peuvent être gérées — multisourcing, stockage, contrats. D'autres ont atteint un seuil où aucun ajustement opérationnel ne suffit plus. Ce seuil est le moment où la question change de nature : elle cesse d'être un problème d'approvisionnement pour devenir une question de modèle. Ce qu'on attend de vous, c'est votre lecture de ce seuil — comment le reconnaître, ce qui l'a précédé, et ce que ça implique comme type de décision. Pas un cas client, une lecture de mécanisme.",
          "pointBascule": "Quand une dépendance devient-elle inacceptable pour la continuité industrielle ?",
          "tensionArbitrage": "Conserver l'efficacité d'un modèle globalisé ou reconstruire une résilience plus coûteuse mais plus maîtrisable.",
          "primaryProfiles": [
            "Direction générale",
            "Direction stratégie",
            "Conseil stratégie industrielle",
            "Direction industrielle",
            "Transformation / repositionnement"
          ],
          "landingPages": [
            "strategie"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "Relocaliser, substituer, changer de modèle : comment savoir quand la dépendance est devenue un problème stratégique qui ne se résout plus opérationnellement ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — Relocaliser, substituer, changer de modèle : comment savoir quand la dépendance est devenue un problème stratégique qui ne se résout plus opérationnellement ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "securisation": "L’échange ne suppose pas de commenter une stratégie interne, un client, un mandat ou une décision confidentielle. Il s’agit d’éclairer un mécanisme industriel à partir de votre expérience et de votre position d’observation."
          },
          "complementaryCodes": [
            "IND-C2-RSS-02",
            "IND-C2-RSS-03",
            "IND-C2-RSS-04"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
        },
        {
          "code": "IND-C2-RSS-02",
          "conversationCode": "C2",
          "contextCode": "RSS",
          "contextLabel": "Réinvention sous crise",
          "typeLecture": "TERRITORIALE",
          "typeLectureLabelSource": "TERRITORIALE",
          "titreAngle": "À partir de quand la dépendance à une filière, une spécialisation ou un segment impose-t-elle un repositionnement plutôt qu'une adaptation partielle ?",
          "questionEditoriale": "À partir de quand la dépendance à une filière, une spécialisation ou un segment impose-t-elle un repositionnement plutôt qu'une adaptation partielle ?",
          "questionPublique": "À partir de quand la dépendance à une filière, une spécialisation ou un segment impose-t-elle un repositionnement plutôt qu'une adaptation partielle ?",
          "questionActivation": "Certaines entreprises tiennent leur trajectoire d'une spécialisation forte. Mais lorsque cette base se fragilise, il faut envisager un repositionnement plus profond : nouveaux marchés, nouveaux partenaires, nouvelle place dans l'écosystème. Ce qu’on attend de vous, c’est une lecture située du mécanisme : les signaux à reconnaître, les arbitrages à formuler et les conditions qui changent la nature de la décision.",
          "introMecanisme": "Certaines entreprises tiennent leur trajectoire d'une spécialisation forte. Mais lorsque cette base se fragilise, il faut envisager un repositionnement plus profond : nouveaux marchés, nouveaux partenaires, nouvelle place dans l'écosystème.",
          "texteProgramme": "Certaines entreprises tiennent leur trajectoire d'une spécialisation forte. Mais lorsque cette base se fragilise, il faut envisager un repositionnement plus profond : nouveaux marchés, nouveaux partenaires, nouvelle place dans l'écosystème.",
          "pointBascule": "Quand la spécialisation devient-elle un verrou de survie plutôt qu'un avantage ?",
          "tensionArbitrage": "Se repositionner sans perdre la valeur construite par la spécialisation.",
          "primaryProfiles": [
            "Direction territoriale",
            "Filière / écosystème",
            "Développement territorial",
            "Site / ancrage local",
            "Collectivités / infrastructures"
          ],
          "landingPages": [
            "territorial",
            "territoriale",
            "territoires-ancrage"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "À partir de quand la dépendance à une filière, une spécialisation ou un segment impose-t-elle un repositionnement plutôt qu'une adaptation partielle ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — À partir de quand la dépendance à une filière, une spécialisation ou un segment impose-t-elle un repositionnement plutôt qu'une adaptation partielle ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "momentBascule": "Quand la spécialisation devient-elle un verrou de survie plutôt qu'un avantage ?",
            "tensionCentrale": "Se repositionner sans perdre la valeur construite par la spécialisation.",
            "securisation": "L’échange ne suppose pas d’exposer une négociation locale, un site ou une décision confidentielle. Il s’agit de rendre lisibles les conditions territoriales qui soutiennent, limitent ou déplacent la trajectoire industrielle."
          },
          "complementaryCodes": [
            "IND-C2-RSS-01",
            "IND-C2-RSS-03",
            "IND-C2-RSS-04"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
        },
        {
          "code": "IND-C2-RSS-03",
          "conversationCode": "C2",
          "contextCode": "RSS",
          "contextLabel": "Réinvention sous crise",
          "typeLecture": "JURIDIQUE",
          "typeLectureLabelSource": "JURIDIQUE / RÉGLEMENTAIRE",
          "titreAngle": "Comment le cadre commercial, douanier ou réglementaire peut-il transformer une fragilité que l'entreprise gérait seule en contrainte qui remet en question la trajectoire elle-même ?",
          "questionEditoriale": "Comment le cadre commercial, douanier ou réglementaire peut-il transformer une fragilité que l'entreprise gérait seule en contrainte qui remet en question la trajectoire elle-même ?",
          "questionPublique": "Comment le cadre commercial, douanier ou réglementaire peut-il transformer une fragilité que l'entreprise gérait seule en contrainte qui remet en question la trajectoire elle-même ?",
          "questionActivation": "Un modèle industriel repose sur une certaine stabilité du cadre dans lequel il opère. Lorsqu'un choc géopolitique ou réglementaire modifie ce cadre, c'est parfois la géographie de la production qui doit être repensée. Ce qu’on attend de vous, c’est une lecture située du mécanisme : les signaux à reconnaître, les arbitrages à formuler et les conditions qui changent la nature de la décision.",
          "introMecanisme": "Un modèle industriel repose sur une certaine stabilité du cadre dans lequel il opère. Lorsqu'un choc géopolitique ou réglementaire modifie ce cadre, c'est parfois la géographie de la production qui doit être repensée.",
          "texteProgramme": "Un modèle industriel repose sur une certaine stabilité du cadre dans lequel il opère. Lorsqu'un choc géopolitique ou réglementaire modifie ce cadre, c'est parfois la géographie de la production qui doit être repensée.",
          "pointBascule": "Quand le cadre externe rend-il le modèle industriel obsolète ?",
          "tensionArbitrage": "Préserver la continuité industrielle tout en changeant de géographie ou de cadre d'opération.",
          "primaryProfiles": [
            "Direction juridique",
            "Affaires publiques",
            "Conformité / réglementation",
            "Droit industriel",
            "Conseil juridique / réglementaire"
          ],
          "landingPages": [
            "juridique"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "Comment le cadre commercial, douanier ou réglementaire peut-il transformer une fragilité que l'entreprise gérait seule en contrainte qui remet en question la trajectoire elle-même ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — Comment le cadre commercial, douanier ou réglementaire peut-il transformer une fragilité que l'entreprise gérait seule en contrainte qui remet en question la trajectoire elle-même ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "momentBascule": "Quand le cadre externe rend-il le modèle industriel obsolète ?",
            "tensionCentrale": "Préserver la continuité industrielle tout en changeant de géographie ou de cadre d'opération.",
            "securisation": "L’échange ne suppose pas d’exposer un dossier, un contentieux, une position juridique interne ou une information sensible. Il s’agit d’éclairer le rôle du cadre dans la manière dont une décision industrielle change de nature."
          },
          "complementaryCodes": [
            "IND-C2-RSS-01",
            "IND-C2-RSS-02",
            "IND-C2-RSS-04"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
        },
        {
          "code": "IND-C2-RSS-04",
          "conversationCode": "C2",
          "contextCode": "RSS",
          "contextLabel": "Réinvention sous crise",
          "typeLecture": "TECHNOLOGIQUE",
          "typeLectureLabelSource": "TECHNOLOGIQUE / SYSTÈMES",
          "titreAngle": "Comment les systèmes d'information et les interfaces entre sites ou métiers révèlent-ils — ou masquent-ils — les dépendances critiques dans une organisation industrielle ?",
          "questionEditoriale": "Comment les systèmes d'information et les interfaces entre sites ou métiers révèlent-ils — ou masquent-ils — les dépendances critiques dans une organisation industrielle ?",
          "questionPublique": "Comment les systèmes d'information et les interfaces entre sites ou métiers révèlent-ils — ou masquent-ils — les dépendances critiques dans une organisation industrielle ?",
          "questionActivation": "Quand l'architecture des systèmes devient trop fragmentée, les adaptations par petites touches peuvent finir par complexifier encore davantage le système. En période de crise, la question devient plus radicale. Ce qu’on attend de vous, c’est une lecture située du mécanisme : les signaux à reconnaître, les arbitrages à formuler et les conditions qui changent la nature de la décision.",
          "introMecanisme": "Quand l'architecture des systèmes devient trop fragmentée, les adaptations par petites touches peuvent finir par complexifier encore davantage le système. En période de crise, la question devient plus radicale.",
          "texteProgramme": "Quand l'architecture des systèmes devient trop fragmentée, les adaptations par petites touches peuvent finir par complexifier encore davantage le système. En période de crise, la question devient plus radicale.",
          "pointBascule": "Quand l'architecture empêche-t-elle toute adaptation crédible ?",
          "tensionArbitrage": "Continuer à corriger l'existant ou accepter une refonte plus coûteuse mais plus structurante.",
          "primaryProfiles": [
            "Direction systèmes industriels",
            "Automatisation",
            "Données / architecture technique",
            "Transformation digitale industrielle",
            "Ingénierie process"
          ],
          "landingPages": [
            "technologie-systemes",
            "technologie"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "Comment les systèmes d'information et les interfaces entre sites ou métiers révèlent-ils — ou masquent-ils — les dépendances critiques dans une organisation industrielle ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — Comment les systèmes d'information et les interfaces entre sites ou métiers révèlent-ils — ou masquent-ils — les dépendances critiques dans une organisation industrielle ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "momentBascule": "Quand l'architecture empêche-t-elle toute adaptation crédible ?",
            "tensionCentrale": "Continuer à corriger l'existant ou accepter une refonte plus coûteuse mais plus structurante.",
            "securisation": "L’échange ne suppose pas de décrire une architecture interne, un système critique, une feuille de route ou une vulnérabilité technique. Il s’agit de rendre lisibles les seuils où la technique devient une condition de décision."
          },
          "complementaryCodes": [
            "IND-C2-RSS-01",
            "IND-C2-RSS-02",
            "IND-C2-RSS-03"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
        },
        {
          "code": "IND-C3-CST-01",
          "conversationCode": "C3",
          "contextCode": "CST",
          "contextLabel": "Croissance sous tension",
          "typeLecture": "TECHNOLOGIQUE",
          "typeLectureLabelSource": "TECHNOLOGIQUE / SYSTÈMES",
          "titreAngle": "Qu'est-ce qui permet réellement de franchir un cap de volume ou de qualité : automatiser, digitaliser davantage ou redessiner le process ?",
          "questionEditoriale": "Qu'est-ce qui permet réellement de franchir un cap de volume ou de qualité : automatiser, digitaliser davantage ou redessiner le process ?",
          "questionPublique": "Qu'est-ce qui permet réellement de franchir un cap de volume ou de qualité : automatiser, digitaliser davantage ou redessiner le process ?",
          "questionActivation": "Face à la croissance, l'investissement technologique apparaît souvent comme une réponse naturelle. Mais la technologie ne règle pas toujours les limites profondes d'un outil industriel. Dans certains cas, le vrai sujet réside dans le process lui-même. Ce qu’on attend de vous, c’est une lecture située du mécanisme : les signaux à reconnaître, les arbitrages à formuler et les conditions qui changent la nature de la décision.",
          "introMecanisme": "Face à la croissance, l'investissement technologique apparaît souvent comme une réponse naturelle. Mais la technologie ne règle pas toujours les limites profondes d'un outil industriel. Dans certains cas, le vrai sujet réside dans le process lui-même.",
          "texteProgramme": "Face à la croissance, l'investissement technologique apparaît souvent comme une réponse naturelle. Mais la technologie ne règle pas toujours les limites profondes d'un outil industriel. Dans certains cas, le vrai sujet réside dans le process lui-même.",
          "pointBascule": "À partir de quand ajouter de la technologie ne permet-il plus de franchir un cap ?",
          "tensionArbitrage": "Automatiser pour accélérer ou redessiner le process pour transformer réellement la capacité.",
          "primaryProfiles": [
            "Direction systèmes industriels",
            "Automatisation",
            "Données / architecture technique",
            "Transformation digitale industrielle",
            "Ingénierie process"
          ],
          "landingPages": [
            "technologie-systemes",
            "technologie"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "Qu'est-ce qui permet réellement de franchir un cap de volume ou de qualité : automatiser, digitaliser davantage ou redessiner le process ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — Qu'est-ce qui permet réellement de franchir un cap de volume ou de qualité : automatiser, digitaliser davantage ou redessiner le process ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "momentBascule": "À partir de quand ajouter de la technologie ne permet-il plus de franchir un cap ?",
            "tensionCentrale": "Automatiser pour accélérer ou redessiner le process pour transformer réellement la capacité.",
            "securisation": "L’échange ne suppose pas de décrire une architecture interne, un système critique, une feuille de route ou une vulnérabilité technique. Il s’agit de rendre lisibles les seuils où la technique devient une condition de décision."
          },
          "complementaryCodes": [
            "IND-C3-CST-02",
            "IND-C3-CST-03",
            "IND-C3-CST-04"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
        },
        {
          "code": "IND-C3-CST-02",
          "conversationCode": "C3",
          "contextCode": "CST",
          "contextLabel": "Croissance sous tension",
          "typeLecture": "OPERATIONNELLE",
          "typeLectureLabelSource": "OPÉRATIONNELLE",
          "titreAngle": "À partir de quand la vraie limite n'est-elle plus technologique, mais opératoire : coordination des flux, séquencement, pilotage et interfaces ?",
          "questionEditoriale": "À partir de quand la vraie limite n'est-elle plus technologique, mais opératoire : coordination des flux, séquencement, pilotage et interfaces ?",
          "questionPublique": "À partir de quand la vraie limite n'est-elle plus technologique, mais opératoire : coordination des flux, séquencement, pilotage et interfaces ?",
          "questionActivation": "Dans une phase de croissance, on cherche souvent la limite du côté des machines. Pourtant, le blocage peut venir d'ailleurs : coordination des flux, séquencement, pilotage des priorités, interfaces entre métiers. Ce qu’on attend de vous, c’est une lecture située du mécanisme : les signaux à reconnaître, les arbitrages à formuler et les conditions qui changent la nature de la décision.",
          "introMecanisme": "Dans une phase de croissance, on cherche souvent la limite du côté des machines. Pourtant, le blocage peut venir d'ailleurs : coordination des flux, séquencement, pilotage des priorités, interfaces entre métiers.",
          "texteProgramme": "Dans une phase de croissance, on cherche souvent la limite du côté des machines. Pourtant, le blocage peut venir d'ailleurs : coordination des flux, séquencement, pilotage des priorités, interfaces entre métiers.",
          "pointBascule": "À partir de quand la limite n'est-elle plus la machine mais l'organisation des flux ?",
          "tensionArbitrage": "Ajouter de la capacité technique ou refonder la manière dont l'activité est pilotée.",
          "primaryProfiles": [
            "Direction industrielle",
            "Direction opérations",
            "Production",
            "Supply chain / achats",
            "Excellence opérationnelle"
          ],
          "landingPages": [
            "operations",
            "operationnelle"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "À partir de quand la vraie limite n'est-elle plus technologique, mais opératoire : coordination des flux, séquencement, pilotage et interfaces ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — À partir de quand la vraie limite n'est-elle plus technologique, mais opératoire : coordination des flux, séquencement, pilotage et interfaces ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "momentBascule": "À partir de quand la limite n'est-elle plus la machine mais l'organisation des flux ?",
            "tensionCentrale": "Ajouter de la capacité technique ou refonder la manière dont l'activité est pilotée.",
            "securisation": "L’échange ne suppose pas de commenter un site, un incident, un client, un fournisseur ou une situation confidentielle. Il s’agit de rendre lisible un mécanisme opérationnel à partir d’une expérience située."
          },
          "complementaryCodes": [
            "IND-C3-CST-01",
            "IND-C3-CST-03",
            "IND-C3-CST-04"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
        },
        {
          "code": "IND-C3-CST-03",
          "conversationCode": "C3",
          "contextCode": "CST",
          "contextLabel": "Croissance sous tension",
          "typeLecture": "RH_COMPETENCES",
          "typeLectureLabelSource": "RH / COMPÉTENCES",
          "titreAngle": "À partir de quand la montée en capacité bute-t-elle moins sur la machine que sur la qualité, la sécurité, la formation et la maîtrise des gestes critiques ?",
          "questionEditoriale": "À partir de quand la montée en capacité bute-t-elle moins sur la machine que sur la qualité, la sécurité, la formation et la maîtrise des gestes critiques ?",
          "questionPublique": "À partir de quand la montée en capacité bute-t-elle moins sur la machine que sur la qualité, la sécurité, la formation et la maîtrise des gestes critiques ?",
          "questionActivation": "Produire davantage ne consiste pas seulement à augmenter les cadences. Il faut préserver la qualité, maîtriser les gestes critiques, former les équipes, sécuriser les opérations et garantir la conformité. Ce qu’on attend de vous, c’est une lecture située du mécanisme : les signaux à reconnaître, les arbitrages à formuler et les conditions qui changent la nature de la décision.",
          "introMecanisme": "Produire davantage ne consiste pas seulement à augmenter les cadences. Il faut préserver la qualité, maîtriser les gestes critiques, former les équipes, sécuriser les opérations et garantir la conformité.",
          "texteProgramme": "Produire davantage ne consiste pas seulement à augmenter les cadences. Il faut préserver la qualité, maîtriser les gestes critiques, former les équipes, sécuriser les opérations et garantir la conformité.",
          "pointBascule": "À partir de quand la performance dépend-elle davantage des compétences que des équipements ?",
          "tensionArbitrage": "Monter en capacité sans dégrader la maîtrise des gestes, la qualité et la sécurité.",
          "primaryProfiles": [
            "Direction RH",
            "Compétences industrielles",
            "Formation / transmission",
            "Organisation du travail",
            "Sécurité / collectifs de travail"
          ],
          "landingPages": [
            "emploi-competences",
            "rh"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "À partir de quand la montée en capacité bute-t-elle moins sur la machine que sur la qualité, la sécurité, la formation et la maîtrise des gestes critiques ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — À partir de quand la montée en capacité bute-t-elle moins sur la machine que sur la qualité, la sécurité, la formation et la maîtrise des gestes critiques ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "momentBascule": "À partir de quand la performance dépend-elle davantage des compétences que des équipements ?",
            "tensionCentrale": "Monter en capacité sans dégrader la maîtrise des gestes, la qualité et la sécurité.",
            "securisation": "L’échange ne suppose pas de commenter une situation sociale, un plan RH ou des données internes. Il s’agit de rendre visibles les conditions humaines, organisationnelles et temporelles de la trajectoire industrielle."
          },
          "complementaryCodes": [
            "IND-C3-CST-01",
            "IND-C3-CST-02",
            "IND-C3-CST-04"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
        },
        {
          "code": "IND-C3-CST-04",
          "conversationCode": "C3",
          "contextCode": "CST",
          "contextLabel": "Croissance sous tension",
          "typeLecture": "STRATEGIQUE",
          "typeLectureLabelSource": "STRATÉGIQUE",
          "titreAngle": "Investir dans l'outil ou composer avec ses limites : comment identifier les signaux qui ne trompent pas avant que le choix ne disparaisse ?",
          "questionEditoriale": "Investir dans l'outil ou composer avec ses limites : comment identifier les signaux qui ne trompent pas avant que le choix ne disparaisse ?",
          "questionPublique": "Investir dans l'outil ou composer avec ses limites : comment identifier les signaux qui ne trompent pas avant que le choix ne disparaisse ?",
          "questionActivation": "La croissance industrielle augmente souvent les besoins en énergie, en matières et en capacités de production. Dans un contexte de transition climatique, cette croissance ne peut plus toujours être accompagnée par de simples gains marginaux. Vous n'êtes pas attendu sur les chiffres d'un investissement ou les détails d'un projet. Vous êtes attendu sur votre capacité à nommer ces signaux — et à dire comment les industriels qui les ont bien lus ont structuré leur décision.",
          "introMecanisme": "La croissance industrielle augmente souvent les besoins en énergie, en matières et en capacités de production. Dans un contexte de transition climatique, cette croissance ne peut plus toujours être accompagnée par de simples gains marginaux.",
          "texteProgramme": "La croissance industrielle augmente souvent les besoins en énergie, en matières et en capacités de production. Dans un contexte de transition climatique, cette croissance ne peut plus toujours être accompagnée par de simples gains marginaux. Vous n'êtes pas attendu sur les chiffres d'un investissement ou les détails d'un projet. Vous êtes attendu sur votre capacité à nommer ces signaux — et à dire comment les industriels qui les ont bien lus ont structuré leur décision.",
          "pointBascule": "À partir de quand la décarbonation impose-t-elle de repenser l'outil plutôt que de l'optimiser ?",
          "tensionArbitrage": "Croître industriellement tout en transformant réellement les conditions carbone de la production.",
          "primaryProfiles": [
            "Direction générale",
            "Direction stratégie",
            "Conseil stratégie industrielle",
            "Direction industrielle",
            "Transformation / repositionnement"
          ],
          "landingPages": [
            "strategie"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "Investir dans l'outil ou composer avec ses limites : comment identifier les signaux qui ne trompent pas avant que le choix ne disparaisse ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — Investir dans l'outil ou composer avec ses limites : comment identifier les signaux qui ne trompent pas avant que le choix ne disparaisse ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "securisation": "L’échange ne suppose pas de commenter une stratégie interne, un client, un mandat ou une décision confidentielle. Il s’agit d’éclairer un mécanisme industriel à partir de votre expérience et de votre position d’observation."
          },
          "complementaryCodes": [
            "IND-C3-CST-01",
            "IND-C3-CST-02",
            "IND-C3-CST-03"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
        },
        {
          "code": "IND-C3-ASC-01",
          "conversationCode": "C3",
          "contextCode": "ASC",
          "contextLabel": "Adaptation sous contrainte",
          "typeLecture": "FINANCIERE",
          "typeLectureLabelSource": "FINANCIÈRE",
          "titreAngle": "Comment valoriser — ou financer — une décision de transformation industrielle quand la dette technologique est devenue le vrai sujet, mais que personne ne l'a encore nommée comme telle ?",
          "questionEditoriale": "Comment valoriser — ou financer — une décision de transformation industrielle quand la dette technologique est devenue le vrai sujet, mais que personne ne l'a encore nommée comme telle ?",
          "questionPublique": "Comment valoriser — ou financer — une décision de transformation industrielle quand la dette technologique est devenue le vrai sujet, mais que personne ne l'a encore nommée comme telle ?",
          "questionActivation": "Lorsque les marges sont serrées, transformer l'outil industriel ne signifie pas toujours investir massivement. L'entreprise peut chercher des gains ciblés. Mais toutes ces options ne produisent pas le même effet. Ce qu'on attend de vous, c'est votre lecture de ce diagnostic — comment distinguer une amélioration frugale qui tient d'une correction qui ne fait que déplacer la contrainte.",
          "introMecanisme": "Lorsque les marges sont serrées, transformer l'outil industriel ne signifie pas toujours investir massivement. L'entreprise peut chercher des gains ciblés. Mais toutes ces options ne produisent pas le même effet.",
          "texteProgramme": "Lorsque les marges sont serrées, transformer l'outil industriel ne signifie pas toujours investir massivement. L'entreprise peut chercher des gains ciblés. Mais toutes ces options ne produisent pas le même effet. Ce qu'on attend de vous, c'est votre lecture de ce diagnostic — comment distinguer une amélioration frugale qui tient d'une correction qui ne fait que déplacer la contrainte.",
          "pointBascule": "À partir de quand l'amélioration frugale ne suffit-elle plus ?",
          "tensionArbitrage": "Transformer avec peu de moyens sans se limiter à des corrections insuffisantes.",
          "primaryProfiles": [
            "DAF / CFO industriel",
            "Corporate finance",
            "Investissement / CAPEX",
            "Restructuring",
            "Contrôle de gestion industriel"
          ],
          "landingPages": [
            "finance"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "Comment valoriser — ou financer — une décision de transformation industrielle quand la dette technologique est devenue le vrai sujet, mais que personne ne l'a encore nommée comme telle ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — Comment valoriser — ou financer — une décision de transformation industrielle quand la dette technologique est devenue le vrai sujet, mais que personne ne l'a encore nommée comme telle ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "IND-C3-ASC-02",
            "IND-C3-ASC-03",
            "IND-C3-ASC-04"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
        },
        {
          "code": "IND-C3-ASC-02",
          "conversationCode": "C3",
          "contextCode": "ASC",
          "contextLabel": "Adaptation sous contrainte",
          "typeLecture": "OPERATIONNELLE",
          "typeLectureLabelSource": "OPÉRATIONNELLE",
          "titreAngle": "À partir de quand de nouveaux outils ne compensent-ils plus une architecture opératoire devenue trop rigide, fragmentée ou lente ?",
          "questionEditoriale": "À partir de quand de nouveaux outils ne compensent-ils plus une architecture opératoire devenue trop rigide, fragmentée ou lente ?",
          "questionPublique": "À partir de quand de nouveaux outils ne compensent-ils plus une architecture opératoire devenue trop rigide, fragmentée ou lente ?",
          "questionActivation": "Ajouter un nouvel outil peut donner l'impression de résoudre une difficulté. Mais lorsque l'architecture opératoire est trop rigide ou fragmentée, ces ajouts peuvent simplement déplacer la complexité. Ce qu’on attend de vous, c’est une lecture située du mécanisme : les signaux à reconnaître, les arbitrages à formuler et les conditions qui changent la nature de la décision.",
          "introMecanisme": "Ajouter un nouvel outil peut donner l'impression de résoudre une difficulté. Mais lorsque l'architecture opératoire est trop rigide ou fragmentée, ces ajouts peuvent simplement déplacer la complexité.",
          "texteProgramme": "Ajouter un nouvel outil peut donner l'impression de résoudre une difficulté. Mais lorsque l'architecture opératoire est trop rigide ou fragmentée, ces ajouts peuvent simplement déplacer la complexité.",
          "pointBascule": "À partir de quand les outils ne compensent-ils plus une organisation défaillante ?",
          "tensionArbitrage": "Ajouter des solutions ou traiter la rigidité structurelle du système opératoire.",
          "primaryProfiles": [
            "Direction industrielle",
            "Direction opérations",
            "Production",
            "Supply chain / achats",
            "Excellence opérationnelle"
          ],
          "landingPages": [
            "operations",
            "operationnelle"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "À partir de quand de nouveaux outils ne compensent-ils plus une architecture opératoire devenue trop rigide, fragmentée ou lente ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — À partir de quand de nouveaux outils ne compensent-ils plus une architecture opératoire devenue trop rigide, fragmentée ou lente ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "momentBascule": "À partir de quand les outils ne compensent-ils plus une organisation défaillante ?",
            "tensionCentrale": "Ajouter des solutions ou traiter la rigidité structurelle du système opératoire.",
            "securisation": "L’échange ne suppose pas de commenter un site, un incident, un client, un fournisseur ou une situation confidentielle. Il s’agit de rendre lisible un mécanisme opérationnel à partir d’une expérience située."
          },
          "complementaryCodes": [
            "IND-C3-ASC-01",
            "IND-C3-ASC-03",
            "IND-C3-ASC-04"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
        },
        {
          "code": "IND-C3-ASC-03",
          "conversationCode": "C3",
          "contextCode": "ASC",
          "contextLabel": "Adaptation sous contrainte",
          "typeLecture": "JURIDIQUE",
          "typeLectureLabelSource": "JURIDIQUE / RÉGLEMENTAIRE",
          "titreAngle": "À partir de quand les exigences de qualité, sécurité ou conformité limitent-elles la capacité à ajuster l'outil sans réinterroger la tenue de l'activité ?",
          "questionEditoriale": "À partir de quand les exigences de qualité, sécurité ou conformité limitent-elles la capacité à ajuster l'outil sans réinterroger la tenue de l'activité ?",
          "questionPublique": "À partir de quand les exigences de qualité, sécurité ou conformité limitent-elles la capacité à ajuster l'outil sans réinterroger la tenue de l'activité ?",
          "questionActivation": "En contexte contraint, toutes les marges d'adaptation ne sont pas disponibles lorsque les exigences de qualité, de sécurité ou de conformité sont fortes. Ces exigences protègent l'activité mais peuvent aussi limiter les ajustements possibles. Ce qu’on attend de vous, c’est une lecture située du mécanisme : les signaux à reconnaître, les arbitrages à formuler et les conditions qui changent la nature de la décision.",
          "introMecanisme": "En contexte contraint, toutes les marges d'adaptation ne sont pas disponibles lorsque les exigences de qualité, de sécurité ou de conformité sont fortes. Ces exigences protègent l'activité mais peuvent aussi limiter les ajustements possibles.",
          "texteProgramme": "En contexte contraint, toutes les marges d'adaptation ne sont pas disponibles lorsque les exigences de qualité, de sécurité ou de conformité sont fortes. Ces exigences protègent l'activité mais peuvent aussi limiter les ajustements possibles.",
          "pointBascule": "À partir de quand les exigences empêchent-elles toute adaptation simple ?",
          "tensionArbitrage": "Ajuster l'outil sans compromettre la qualité, la sécurité ou la conformité.",
          "primaryProfiles": [
            "Direction juridique",
            "Affaires publiques",
            "Conformité / réglementation",
            "Droit industriel",
            "Conseil juridique / réglementaire"
          ],
          "landingPages": [
            "juridique"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "À partir de quand les exigences de qualité, sécurité ou conformité limitent-elles la capacité à ajuster l'outil sans réinterroger la tenue de l'activité ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — À partir de quand les exigences de qualité, sécurité ou conformité limitent-elles la capacité à ajuster l'outil sans réinterroger la tenue de l'activité ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "momentBascule": "À partir de quand les exigences empêchent-elles toute adaptation simple ?",
            "tensionCentrale": "Ajuster l'outil sans compromettre la qualité, la sécurité ou la conformité.",
            "securisation": "L’échange ne suppose pas d’exposer un dossier, un contentieux, une position juridique interne ou une information sensible. Il s’agit d’éclairer le rôle du cadre dans la manière dont une décision industrielle change de nature."
          },
          "complementaryCodes": [
            "IND-C3-ASC-01",
            "IND-C3-ASC-02",
            "IND-C3-ASC-04"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
        },
        {
          "code": "IND-C3-ASC-04",
          "conversationCode": "C3",
          "contextCode": "ASC",
          "contextLabel": "Adaptation sous contrainte",
          "typeLecture": "STRATEGIQUE",
          "typeLectureLabelSource": "STRATÉGIQUE",
          "titreAngle": "À partir de quand la décarbonation rebat-elle les conditions mêmes de compétitivité, d'investissement et de transformation de l'outil ?",
          "questionEditoriale": "À partir de quand la décarbonation rebat-elle les conditions mêmes de compétitivité, d'investissement et de transformation de l'outil ?",
          "questionPublique": "À partir de quand la décarbonation rebat-elle les conditions mêmes de compétitivité, d'investissement et de transformation de l'outil ?",
          "questionActivation": "La décarbonation n'est pas seulement une exigence environnementale ; elle transforme les équilibres économiques de l'industrie. En contexte contraint, elle renforce les tensions entre compétitivité immédiate et transformation nécessaire. Ce qu’on attend de vous, c’est une lecture située du mécanisme : les signaux à reconnaître, les arbitrages à formuler et les conditions qui changent la nature de la décision.",
          "introMecanisme": "La décarbonation n'est pas seulement une exigence environnementale ; elle transforme les équilibres économiques de l'industrie. En contexte contraint, elle renforce les tensions entre compétitivité immédiate et transformation nécessaire.",
          "texteProgramme": "La décarbonation n'est pas seulement une exigence environnementale ; elle transforme les équilibres économiques de l'industrie. En contexte contraint, elle renforce les tensions entre compétitivité immédiate et transformation nécessaire.",
          "pointBascule": "À partir de quand la contrainte carbone redéfinit-elle les conditions de compétitivité ?",
          "tensionArbitrage": "Rester compétitif aujourd'hui tout en investissant dans une trajectoire carbone soutenable.",
          "primaryProfiles": [
            "Direction générale",
            "Direction stratégie",
            "Conseil stratégie industrielle",
            "Direction industrielle",
            "Transformation / repositionnement"
          ],
          "landingPages": [
            "strategie"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "À partir de quand la décarbonation rebat-elle les conditions mêmes de compétitivité, d'investissement et de transformation de l'outil ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — À partir de quand la décarbonation rebat-elle les conditions mêmes de compétitivité, d'investissement et de transformation de l'outil ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "securisation": "L’échange ne suppose pas de commenter une stratégie interne, un client, un mandat ou une décision confidentielle. Il s’agit d’éclairer un mécanisme industriel à partir de votre expérience et de votre position d’observation."
          },
          "complementaryCodes": [
            "IND-C3-ASC-01",
            "IND-C3-ASC-02",
            "IND-C3-ASC-03"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
        },
        {
          "code": "IND-C3-RSS-01",
          "conversationCode": "C3",
          "contextCode": "RSS",
          "contextLabel": "Réinvention sous crise",
          "typeLecture": "TECHNOLOGIQUE",
          "typeLectureLabelSource": "TECHNOLOGIQUE / SYSTÈMES",
          "titreAngle": "À partir de quand la transformation de l'outil ne passe-t-elle plus par l'amélioration incrémentale, mais par une rupture de process ou de système de production ?",
          "questionEditoriale": "À partir de quand la transformation de l'outil ne passe-t-elle plus par l'amélioration incrémentale, mais par une rupture de process ou de système de production ?",
          "questionPublique": "À partir de quand la transformation de l'outil ne passe-t-elle plus par l'amélioration incrémentale, mais par une rupture de process ou de système de production ?",
          "questionActivation": "L'amélioration incrémentale permet souvent de prolonger la performance d'un outil. Mais certaines crises révèlent que l'outil doit changer de logique. Les process, les flux, les équipements ou même le modèle de production peuvent devoir être repensés. Ce qu’on attend de vous, c’est une lecture située du mécanisme : les signaux à reconnaître, les arbitrages à formuler et les conditions qui changent la nature de la décision.",
          "introMecanisme": "L'amélioration incrémentale permet souvent de prolonger la performance d'un outil. Mais certaines crises révèlent que l'outil doit changer de logique. Les process, les flux, les équipements ou même le modèle de production peuvent devoir être repensés.",
          "texteProgramme": "L'amélioration incrémentale permet souvent de prolonger la performance d'un outil. Mais certaines crises révèlent que l'outil doit changer de logique. Les process, les flux, les équipements ou même le modèle de production peuvent devoir être repensés.",
          "pointBascule": "À partir de quand seule une rupture permet-elle de survivre ?",
          "tensionArbitrage": "Continuer à améliorer l'existant ou accepter une transformation de rupture.",
          "primaryProfiles": [
            "Direction systèmes industriels",
            "Automatisation",
            "Données / architecture technique",
            "Transformation digitale industrielle",
            "Ingénierie process"
          ],
          "landingPages": [
            "technologie-systemes",
            "technologie"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "À partir de quand la transformation de l'outil ne passe-t-elle plus par l'amélioration incrémentale, mais par une rupture de process ou de système de production ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — À partir de quand la transformation de l'outil ne passe-t-elle plus par l'amélioration incrémentale, mais par une rupture de process ou de système de production ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "momentBascule": "À partir de quand seule une rupture permet-elle de survivre ?",
            "tensionCentrale": "Continuer à améliorer l'existant ou accepter une transformation de rupture.",
            "securisation": "L’échange ne suppose pas de décrire une architecture interne, un système critique, une feuille de route ou une vulnérabilité technique. Il s’agit de rendre lisibles les seuils où la technique devient une condition de décision."
          },
          "complementaryCodes": [
            "IND-C3-RSS-02",
            "IND-C3-RSS-03",
            "IND-C3-RSS-04"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
        },
        {
          "code": "IND-C3-RSS-02",
          "conversationCode": "C3",
          "contextCode": "RSS",
          "contextLabel": "Réinvention sous crise",
          "typeLecture": "OPERATIONNELLE",
          "typeLectureLabelSource": "OPÉRATIONNELLE",
          "titreAngle": "À partir de quand la crise révèle-t-elle que le vrai sujet n'est plus l'outil, mais l'architecture même du système productif et de son pilotage ?",
          "questionEditoriale": "À partir de quand la crise révèle-t-elle que le vrai sujet n'est plus l'outil, mais l'architecture même du système productif et de son pilotage ?",
          "questionPublique": "À partir de quand la crise révèle-t-elle que le vrai sujet n'est plus l'outil, mais l'architecture même du système productif et de son pilotage ?",
          "questionActivation": "Une crise industrielle révèle parfois un problème plus profond : l'architecture du système productif, la manière dont les décisions sont prises, dont les flux sont pilotés, dont les métiers coopèrent. Ce qu’on attend de vous, c’est une lecture située du mécanisme : les signaux à reconnaître, les arbitrages à formuler et les conditions qui changent la nature de la décision.",
          "introMecanisme": "Une crise industrielle révèle parfois un problème plus profond : l'architecture du système productif, la manière dont les décisions sont prises, dont les flux sont pilotés, dont les métiers coopèrent.",
          "texteProgramme": "Une crise industrielle révèle parfois un problème plus profond : l'architecture du système productif, la manière dont les décisions sont prises, dont les flux sont pilotés, dont les métiers coopèrent.",
          "pointBascule": "À partir de quand l'architecture devient-elle le vrai sujet plutôt que l'outil ?",
          "tensionArbitrage": "Traiter les symptômes visibles ou reconstruire le système de décision qui les produit.",
          "primaryProfiles": [
            "Direction industrielle",
            "Direction opérations",
            "Production",
            "Supply chain / achats",
            "Excellence opérationnelle"
          ],
          "landingPages": [
            "operations",
            "operationnelle"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "À partir de quand la crise révèle-t-elle que le vrai sujet n'est plus l'outil, mais l'architecture même du système productif et de son pilotage ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — À partir de quand la crise révèle-t-elle que le vrai sujet n'est plus l'outil, mais l'architecture même du système productif et de son pilotage ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "momentBascule": "À partir de quand l'architecture devient-elle le vrai sujet plutôt que l'outil ?",
            "tensionCentrale": "Traiter les symptômes visibles ou reconstruire le système de décision qui les produit.",
            "securisation": "L’échange ne suppose pas de commenter un site, un incident, un client, un fournisseur ou une situation confidentielle. Il s’agit de rendre lisible un mécanisme opérationnel à partir d’une expérience située."
          },
          "complementaryCodes": [
            "IND-C3-RSS-01",
            "IND-C3-RSS-03",
            "IND-C3-RSS-04"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
        },
        {
          "code": "IND-C3-RSS-03",
          "conversationCode": "C3",
          "contextCode": "RSS",
          "contextLabel": "Réinvention sous crise",
          "typeLecture": "RH_COMPETENCES",
          "typeLectureLabelSource": "RH / COMPÉTENCES",
          "titreAngle": "À partir de quand l'écart entre compétences disponibles, exigences de sûreté et standards de production impose-t-il une transformation plus profonde ?",
          "questionEditoriale": "À partir de quand l'écart entre compétences disponibles, exigences de sûreté et standards de production impose-t-il une transformation plus profonde ?",
          "questionPublique": "À partir de quand l'écart entre compétences disponibles, exigences de sûreté et standards de production impose-t-il une transformation plus profonde ?",
          "questionActivation": "Une crise peut révéler un écart difficile à combler entre ce que l'activité exige et ce que l'organisation peut mobiliser. Lorsque cet écart devient trop important, il faut repenser l'organisation, les standards ou le périmètre de l'activité. Ce qu’on attend de vous, c’est une lecture située du mécanisme : les signaux à reconnaître, les arbitrages à formuler et les conditions qui changent la nature de la décision.",
          "introMecanisme": "Une crise peut révéler un écart difficile à combler entre ce que l'activité exige et ce que l'organisation peut mobiliser. Lorsque cet écart devient trop important, il faut repenser l'organisation, les standards ou le périmètre de l'activité.",
          "texteProgramme": "Une crise peut révéler un écart difficile à combler entre ce que l'activité exige et ce que l'organisation peut mobiliser. Lorsque cet écart devient trop important, il faut repenser l'organisation, les standards ou le périmètre de l'activité.",
          "pointBascule": "Quand l'activité n'est-elle plus tenable humainement ou réglementairement ?",
          "tensionArbitrage": "Maintenir l'activité sans dépasser les limites de compétence, sûreté et conformité.",
          "primaryProfiles": [
            "Direction RH",
            "Compétences industrielles",
            "Formation / transmission",
            "Organisation du travail",
            "Sécurité / collectifs de travail"
          ],
          "landingPages": [
            "emploi-competences",
            "rh"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "À partir de quand l'écart entre compétences disponibles, exigences de sûreté et standards de production impose-t-il une transformation plus profonde ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — À partir de quand l'écart entre compétences disponibles, exigences de sûreté et standards de production impose-t-il une transformation plus profonde ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "momentBascule": "Quand l'activité n'est-elle plus tenable humainement ou réglementairement ?",
            "tensionCentrale": "Maintenir l'activité sans dépasser les limites de compétence, sûreté et conformité.",
            "securisation": "L’échange ne suppose pas de commenter une situation sociale, un plan RH ou des données internes. Il s’agit de rendre visibles les conditions humaines, organisationnelles et temporelles de la trajectoire industrielle."
          },
          "complementaryCodes": [
            "IND-C3-RSS-01",
            "IND-C3-RSS-02",
            "IND-C3-RSS-04"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
        },
        {
          "code": "IND-C3-RSS-04",
          "conversationCode": "C3",
          "contextCode": "RSS",
          "contextLabel": "Réinvention sous crise",
          "typeLecture": "ENERGIE_RESSOURCES",
          "typeLectureLabelSource": "ÉNERGIE / RESSOURCES / DÉCARBONATION",
          "titreAngle": "À partir de quand la contrainte carbone impose-t-elle une réécriture du process, de l'outil, de l'offre ou de la vocation industrielle du site ?",
          "questionEditoriale": "À partir de quand la contrainte carbone impose-t-elle une réécriture du process, de l'outil, de l'offre ou de la vocation industrielle du site ?",
          "questionPublique": "À partir de quand la contrainte carbone impose-t-elle une réécriture du process, de l'outil, de l'offre ou de la vocation industrielle du site ?",
          "questionActivation": "Lorsqu'elle devient critique, la contrainte carbone ne se limite plus à la réduction progressive des émissions. Elle peut remettre en cause le process, l'outil, l'offre ou même la vocation industrielle d'un site. Ce qu’on attend de vous, c’est une lecture située du mécanisme : les signaux à reconnaître, les arbitrages à formuler et les conditions qui changent la nature de la décision.",
          "introMecanisme": "Lorsqu'elle devient critique, la contrainte carbone ne se limite plus à la réduction progressive des émissions. Elle peut remettre en cause le process, l'outil, l'offre ou même la vocation industrielle d'un site.",
          "texteProgramme": "Lorsqu'elle devient critique, la contrainte carbone ne se limite plus à la réduction progressive des émissions. Elle peut remettre en cause le process, l'outil, l'offre ou même la vocation industrielle d'un site.",
          "pointBascule": "Quand la contrainte carbone remet-elle en cause la vocation industrielle du site ?",
          "tensionArbitrage": "Décarboner l'activité existante ou redéfinir ce que le site doit produire et représenter.",
          "primaryProfiles": [
            "Énergie / utilités",
            "Décarbonation industrielle",
            "Eau / ressources",
            "Direction industrielle",
            "Soutenabilité de site"
          ],
          "landingPages": [
            "decarbonation-energie-soutenabilite",
            "ressources"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "À partir de quand la contrainte carbone impose-t-elle une réécriture du process, de l'outil, de l'offre ou de la vocation industrielle du site ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — À partir de quand la contrainte carbone impose-t-elle une réécriture du process, de l'outil, de l'offre ou de la vocation industrielle du site ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "momentBascule": "Quand la contrainte carbone remet-elle en cause la vocation industrielle du site ?",
            "tensionCentrale": "Décarboner l'activité existante ou redéfinir ce que le site doit produire et représenter.",
            "securisation": "L’échange ne suppose pas de communiquer des volumes, coûts, données de consommation ou contraintes internes. Il s’agit d’éclairer les seuils où énergie, eau, carbone ou utilités deviennent des conditions de décision industrielle."
          },
          "complementaryCodes": [
            "IND-C3-RSS-01",
            "IND-C3-RSS-02",
            "IND-C3-RSS-03"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
        },
        {
          "code": "IND-C4-CST-01",
          "conversationCode": "C4",
          "contextCode": "CST",
          "contextLabel": "Croissance sous tension",
          "typeLecture": "RH_COMPETENCES",
          "typeLectureLabelSource": "RH / COMPÉTENCES",
          "titreAngle": "À partir de quand la croissance révèle-t-elle un seuil critique en matière de recrutement, transmission, stabilisation ou montée en compétence ?",
          "questionEditoriale": "À partir de quand la croissance révèle-t-elle un seuil critique en matière de recrutement, transmission, stabilisation ou montée en compétence ?",
          "questionPublique": "À partir de quand la croissance révèle-t-elle un seuil critique en matière de recrutement, transmission, stabilisation ou montée en compétence ?",
          "questionActivation": "Une trajectoire industrielle tient aussi par les personnes capables de faire fonctionner, transmettre, stabiliser et faire évoluer l'activité. Lorsque la croissance accélère, les besoins humains deviennent plus visibles. Ce qu’on attend de vous, c’est une lecture située du mécanisme : les signaux à reconnaître, les arbitrages à formuler et les conditions qui changent la nature de la décision.",
          "introMecanisme": "Une trajectoire industrielle tient aussi par les personnes capables de faire fonctionner, transmettre, stabiliser et faire évoluer l'activité. Lorsque la croissance accélère, les besoins humains deviennent plus visibles.",
          "texteProgramme": "Une trajectoire industrielle tient aussi par les personnes capables de faire fonctionner, transmettre, stabiliser et faire évoluer l'activité. Lorsque la croissance accélère, les besoins humains deviennent plus visibles.",
          "pointBascule": "À partir de quand le facteur humain devient-il le principal verrou de la trajectoire industrielle ?",
          "tensionArbitrage": "Monter en capacité sans dépasser les capacités de recrutement, de formation et de transmission.",
          "primaryProfiles": [
            "Direction RH",
            "Compétences industrielles",
            "Formation / transmission",
            "Organisation du travail",
            "Sécurité / collectifs de travail"
          ],
          "landingPages": [
            "emploi-competences",
            "rh"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "À partir de quand la croissance révèle-t-elle un seuil critique en matière de recrutement, transmission, stabilisation ou montée en compétence ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — À partir de quand la croissance révèle-t-elle un seuil critique en matière de recrutement, transmission, stabilisation ou montée en compétence ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "momentBascule": "À partir de quand le facteur humain devient-il le principal verrou de la trajectoire industrielle ?",
            "tensionCentrale": "Monter en capacité sans dépasser les capacités de recrutement, de formation et de transmission.",
            "securisation": "L’échange ne suppose pas de commenter une situation sociale, un plan RH ou des données internes. Il s’agit de rendre visibles les conditions humaines, organisationnelles et temporelles de la trajectoire industrielle."
          },
          "complementaryCodes": [
            "IND-C4-CST-02",
            "IND-C4-CST-03",
            "IND-C4-CST-04"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
        },
        {
          "code": "IND-C4-CST-02",
          "conversationCode": "C4",
          "contextCode": "CST",
          "contextLabel": "Croissance sous tension",
          "typeLecture": "OPERATIONNELLE",
          "typeLectureLabelSource": "OPÉRATIONNELLE",
          "titreAngle": "À partir de quand l'accès à l'énergie, à l'eau, aux utilités ou aux capacités réseaux devient-il le véritable verrou d'une montée en capacité ?",
          "questionEditoriale": "À partir de quand l'accès à l'énergie, à l'eau, aux utilités ou aux capacités réseaux devient-il le véritable verrou d'une montée en capacité ?",
          "questionPublique": "À partir de quand l'accès à l'énergie, à l'eau, aux utilités ou aux capacités réseaux devient-il le véritable verrou d'une montée en capacité ?",
          "questionActivation": "La croissance industrielle suppose des ressources physiques : énergie, eau, chaleur, raccordements, capacités réseaux. Ces ressources peuvent devenir le premier verrou de développement lorsque l'activité augmente. Ce qu’on attend de vous, c’est une lecture située du mécanisme : les signaux à reconnaître, les arbitrages à formuler et les conditions qui changent la nature de la décision.",
          "introMecanisme": "La croissance industrielle suppose des ressources physiques : énergie, eau, chaleur, raccordements, capacités réseaux. Ces ressources peuvent devenir le premier verrou de développement lorsque l'activité augmente.",
          "texteProgramme": "La croissance industrielle suppose des ressources physiques : énergie, eau, chaleur, raccordements, capacités réseaux. Ces ressources peuvent devenir le premier verrou de développement lorsque l'activité augmente.",
          "pointBascule": "À partir de quand les ressources deviennent-elles le verrou principal de la croissance ?",
          "tensionArbitrage": "Développer l'activité tout en sécurisant les ressources physiques nécessaires pour produire.",
          "primaryProfiles": [
            "Direction industrielle",
            "Direction opérations",
            "Production",
            "Supply chain / achats",
            "Excellence opérationnelle"
          ],
          "landingPages": [
            "operations",
            "operationnelle"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "À partir de quand l'accès à l'énergie, à l'eau, aux utilités ou aux capacités réseaux devient-il le véritable verrou d'une montée en capacité ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — À partir de quand l'accès à l'énergie, à l'eau, aux utilités ou aux capacités réseaux devient-il le véritable verrou d'une montée en capacité ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "momentBascule": "À partir de quand les ressources deviennent-elles le verrou principal de la croissance ?",
            "tensionCentrale": "Développer l'activité tout en sécurisant les ressources physiques nécessaires pour produire.",
            "securisation": "L’échange ne suppose pas de commenter un site, un incident, un client, un fournisseur ou une situation confidentielle. Il s’agit de rendre lisible un mécanisme opérationnel à partir d’une expérience située."
          },
          "complementaryCodes": [
            "IND-C4-CST-01",
            "IND-C4-CST-03",
            "IND-C4-CST-04"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
        },
        {
          "code": "IND-C4-CST-03",
          "conversationCode": "C4",
          "contextCode": "CST",
          "contextLabel": "Croissance sous tension",
          "typeLecture": "STRATEGIQUE",
          "typeLectureLabelSource": "STRATÉGIQUE",
          "titreAngle": "Croissance et positionnement de filière : comment savoir si on grandit dans la bonne direction — ou simplement plus vite vers le même mur ?",
          "questionEditoriale": "Croissance et positionnement de filière : comment savoir si on grandit dans la bonne direction — ou simplement plus vite vers le même mur ?",
          "questionPublique": "Croissance et positionnement de filière : comment savoir si on grandit dans la bonne direction — ou simplement plus vite vers le même mur ?",
          "questionActivation": "Une trajectoire de croissance peut être solide ou fragile — et les deux se ressemblent de l'extérieur pendant un certain temps. Ce qui les distingue, c'est le positionnement dans la filière : la place qu'on occupe, le pouvoir de négociation qu'on détient, les dépendances qu'on ne voit pas encore. Ce qu'on attend de vous, c'est votre capacité à nommer les signaux qui distinguent une croissance bien positionnée d'une croissance qui creuse une fragilité structurelle. Pas un bilan de trajectoire, une lecture de mécanisme.",
          "introMecanisme": "Une trajectoire de croissance peut être solide ou fragile — et les deux se ressemblent de l'extérieur pendant un certain temps. Ce qui les distingue, c'est le positionnement dans la filière : la place qu'on occupe, le pouvoir de négociation qu'on détient, les dépendances qu'on ne voit pas encore.",
          "texteProgramme": "Une trajectoire de croissance peut être solide ou fragile — et les deux se ressemblent de l'extérieur pendant un certain temps. Ce qui les distingue, c'est le positionnement dans la filière : la place qu'on occupe, le pouvoir de négociation qu'on détient, les dépendances qu'on ne voit pas encore. Ce qu'on attend de vous, c'est votre capacité à nommer les signaux qui distinguent une croissance bien positionnée d'une croissance qui creuse une fragilité structurelle. Pas un bilan de trajectoire, une lecture de mécanisme.",
          "pointBascule": "À partir de quand la croissance fragilise-t-elle la capacité à défendre ses marges ?",
          "tensionArbitrage": "Remplir le carnet sans accepter une croissance qui consomme la marge et la capacité industrielle.",
          "primaryProfiles": [
            "Direction générale",
            "Direction stratégie",
            "Conseil stratégie industrielle",
            "Direction industrielle",
            "Transformation / repositionnement"
          ],
          "landingPages": [
            "strategie"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "Croissance et positionnement de filière : comment savoir si on grandit dans la bonne direction — ou simplement plus vite vers le même mur ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — Croissance et positionnement de filière : comment savoir si on grandit dans la bonne direction — ou simplement plus vite vers le même mur ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "securisation": "L’échange ne suppose pas de commenter une stratégie interne, un client, un mandat ou une décision confidentielle. Il s’agit d’éclairer un mécanisme industriel à partir de votre expérience et de votre position d’observation."
          },
          "complementaryCodes": [
            "IND-C4-CST-01",
            "IND-C4-CST-02",
            "IND-C4-CST-04"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
        },
        {
          "code": "IND-C4-CST-04",
          "conversationCode": "C4",
          "contextCode": "CST",
          "contextLabel": "Croissance sous tension",
          "typeLecture": "TERRITORIALE",
          "typeLectureLabelSource": "TERRITORIALE",
          "titreAngle": "À quelles conditions un territoire permet-il encore d'accompagner une montée en capacité : foncier, réseaux, logistique, main-d'œuvre, acceptabilité ?",
          "questionEditoriale": "À quelles conditions un territoire permet-il encore d'accompagner une montée en capacité : foncier, réseaux, logistique, main-d'œuvre, acceptabilité ?",
          "questionPublique": "À quelles conditions un territoire permet-il encore d'accompagner une montée en capacité : foncier, réseaux, logistique, main-d'œuvre, acceptabilité ?",
          "questionActivation": "Une entreprise industrielle ne croît jamais seule : elle dépend d'un territoire, de ses infrastructures, de son foncier, de ses réseaux et de son bassin d'emploi. Lorsque la croissance s'accélère, ces conditions territoriales deviennent déterminantes. Ce qu’on attend de vous, c’est une lecture située du mécanisme : les signaux à reconnaître, les arbitrages à formuler et les conditions qui changent la nature de la décision.",
          "introMecanisme": "Une entreprise industrielle ne croît jamais seule : elle dépend d'un territoire, de ses infrastructures, de son foncier, de ses réseaux et de son bassin d'emploi. Lorsque la croissance s'accélère, ces conditions territoriales deviennent déterminantes.",
          "texteProgramme": "Une entreprise industrielle ne croît jamais seule : elle dépend d'un territoire, de ses infrastructures, de son foncier, de ses réseaux et de son bassin d'emploi. Lorsque la croissance s'accélère, ces conditions territoriales deviennent déterminantes.",
          "pointBascule": "À partir de quand le territoire limite-t-il la croissance industrielle ?",
          "tensionArbitrage": "Développer l'activité sans dépasser les capacités foncières, sociales, logistiques et infrastructurelles du territoire.",
          "primaryProfiles": [
            "Direction territoriale",
            "Filière / écosystème",
            "Développement territorial",
            "Site / ancrage local",
            "Collectivités / infrastructures"
          ],
          "landingPages": [
            "territorial",
            "territoriale",
            "territoires-ancrage"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "À quelles conditions un territoire permet-il encore d'accompagner une montée en capacité : foncier, réseaux, logistique, main-d'œuvre, acceptabilité ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — À quelles conditions un territoire permet-il encore d'accompagner une montée en capacité : foncier, réseaux, logistique, main-d'œuvre, acceptabilité ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "momentBascule": "À partir de quand le territoire limite-t-il la croissance industrielle ?",
            "tensionCentrale": "Développer l'activité sans dépasser les capacités foncières, sociales, logistiques et infrastructurelles du territoire.",
            "securisation": "L’échange ne suppose pas d’exposer une négociation locale, un site ou une décision confidentielle. Il s’agit de rendre lisibles les conditions territoriales qui soutiennent, limitent ou déplacent la trajectoire industrielle."
          },
          "complementaryCodes": [
            "IND-C4-CST-01",
            "IND-C4-CST-02",
            "IND-C4-CST-03"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
        },
        {
          "code": "IND-C4-ASC-01",
          "conversationCode": "C4",
          "contextCode": "ASC",
          "contextLabel": "Adaptation sous contrainte",
          "typeLecture": "RH_COMPETENCES",
          "typeLectureLabelSource": "RH / COMPÉTENCES",
          "titreAngle": "À partir de quand les tensions sur les effectifs, les savoir-faire, les conditions de travail ou l'organisation limitent-elles la capacité à ajuster l'activité ?",
          "questionEditoriale": "À partir de quand les tensions sur les effectifs, les savoir-faire, les conditions de travail ou l'organisation limitent-elles la capacité à ajuster l'activité ?",
          "questionPublique": "À partir de quand les tensions sur les effectifs, les savoir-faire, les conditions de travail ou l'organisation limitent-elles la capacité à ajuster l'activité ?",
          "questionActivation": "En contexte contraint, les organisations industrielles demandent souvent beaucoup aux équipes. Mais lorsque les effectifs, les compétences ou les conditions de travail sont trop tendus, l'activité ne peut plus s'adapter sans fragiliser ceux qui la portent. Ce qu’on attend de vous, c’est une lecture située du mécanisme : les signaux à reconnaître, les arbitrages à formuler et les conditions qui changent la nature de la décision.",
          "introMecanisme": "En contexte contraint, les organisations industrielles demandent souvent beaucoup aux équipes. Mais lorsque les effectifs, les compétences ou les conditions de travail sont trop tendus, l'activité ne peut plus s'adapter sans fragiliser ceux qui la portent.",
          "texteProgramme": "En contexte contraint, les organisations industrielles demandent souvent beaucoup aux équipes. Mais lorsque les effectifs, les compétences ou les conditions de travail sont trop tendus, l'activité ne peut plus s'adapter sans fragiliser ceux qui la portent.",
          "pointBascule": "À partir de quand l'organisation humaine ne tient-elle plus ?",
          "tensionArbitrage": "Maintenir l'activité sans épuiser les équipes ni perdre les savoir-faire.",
          "primaryProfiles": [
            "Direction RH",
            "Compétences industrielles",
            "Formation / transmission",
            "Organisation du travail",
            "Sécurité / collectifs de travail"
          ],
          "landingPages": [
            "emploi-competences",
            "rh"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "À partir de quand les tensions sur les effectifs, les savoir-faire, les conditions de travail ou l'organisation limitent-elles la capacité à ajuster l'activité ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — À partir de quand les tensions sur les effectifs, les savoir-faire, les conditions de travail ou l'organisation limitent-elles la capacité à ajuster l'activité ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "momentBascule": "À partir de quand l'organisation humaine ne tient-elle plus ?",
            "tensionCentrale": "Maintenir l'activité sans épuiser les équipes ni perdre les savoir-faire.",
            "securisation": "L’échange ne suppose pas de commenter une situation sociale, un plan RH ou des données internes. Il s’agit de rendre visibles les conditions humaines, organisationnelles et temporelles de la trajectoire industrielle."
          },
          "complementaryCodes": [
            "IND-C4-ASC-02",
            "IND-C4-ASC-03",
            "IND-C4-ASC-04"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
        },
        {
          "code": "IND-C4-ASC-02",
          "conversationCode": "C4",
          "contextCode": "ASC",
          "contextLabel": "Adaptation sous contrainte",
          "typeLecture": "FINANCIERE",
          "typeLectureLabelSource": "FINANCIÈRE",
          "titreAngle": "À partir de quand les coûts d'énergie, d'eau ou de conformité environnementale limitent-ils la capacité à ajuster l'activité sans dégrader la compétitivité ?",
          "questionEditoriale": "À partir de quand les coûts d'énergie, d'eau ou de conformité environnementale limitent-ils la capacité à ajuster l'activité sans dégrader la compétitivité ?",
          "questionPublique": "À partir de quand les coûts d'énergie, d'eau ou de conformité environnementale limitent-ils la capacité à ajuster l'activité sans dégrader la compétitivité ?",
          "questionActivation": "Les coûts de l'énergie, de l'eau et de la conformité environnementale pèsent de plus en plus directement sur les équilibres industriels. En contexte contraint, ils réduisent les marges d'action. Ce qu’on attend de vous, c’est une lecture située du mécanisme : les signaux à reconnaître, les arbitrages à formuler et les conditions qui changent la nature de la décision.",
          "introMecanisme": "Les coûts de l'énergie, de l'eau et de la conformité environnementale pèsent de plus en plus directement sur les équilibres industriels. En contexte contraint, ils réduisent les marges d'action.",
          "texteProgramme": "Les coûts de l'énergie, de l'eau et de la conformité environnementale pèsent de plus en plus directement sur les équilibres industriels. En contexte contraint, ils réduisent les marges d'action.",
          "pointBascule": "À partir de quand les coûts rendent-ils l'activité difficilement ajustable ?",
          "tensionArbitrage": "Absorber les surcoûts pour préserver la compétitivité à court terme ou investir dans la transformation.",
          "primaryProfiles": [
            "DAF / CFO industriel",
            "Corporate finance",
            "Investissement / CAPEX",
            "Restructuring",
            "Contrôle de gestion industriel"
          ],
          "landingPages": [
            "finance"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "À partir de quand les coûts d'énergie, d'eau ou de conformité environnementale limitent-ils la capacité à ajuster l'activité sans dégrader la compétitivité ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — À partir de quand les coûts d'énergie, d'eau ou de conformité environnementale limitent-ils la capacité à ajuster l'activité sans dégrader la compétitivité ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "IND-C4-ASC-01",
            "IND-C4-ASC-03",
            "IND-C4-ASC-04"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
        },
        {
          "code": "IND-C4-ASC-03",
          "conversationCode": "C4",
          "contextCode": "ASC",
          "contextLabel": "Adaptation sous contrainte",
          "typeLecture": "STRATEGIQUE",
          "typeLectureLabelSource": "STRATÉGIQUE",
          "titreAngle": "Trajectoire sous pression : comment les industriels reconnaissent-ils le moment où ajuster ne suffit plus — et où réarbitrer devient la seule décision valide ?",
          "questionEditoriale": "Trajectoire sous pression : comment les industriels reconnaissent-ils le moment où ajuster ne suffit plus — et où réarbitrer devient la seule décision valide ?",
          "questionPublique": "Trajectoire sous pression : comment les industriels reconnaissent-ils le moment où ajuster ne suffit plus — et où réarbitrer devient la seule décision valide ?",
          "questionActivation": "Dans de nombreuses chaînes de valeur, les clients et donneurs d'ordre exercent une pression forte sur les prix, les délais ou les conditions contractuelles. Cette pression peut limiter la capacité à préserver les marges nécessaires. Votre lecture porte sur ce seuil — les critères qui permettent de le reconnaître, ce qui s'est passé chez les industriels qui l'ont bien identifié, et ce que ça implique comme type de décision. Pas une situation vécue, une position sur un mécanisme. Ce qu’on attend de vous, c’est une lecture située du mécanisme : les signaux à reconnaître, les arbitrages à formuler et les conditions qui changent la nature de la décision.",
          "introMecanisme": "Dans de nombreuses chaînes de valeur, les clients et donneurs d'ordre exercent une pression forte sur les prix, les délais ou les conditions contractuelles. Cette pression peut limiter la capacité à préserver les marges nécessaires.",
          "texteProgramme": "Dans de nombreuses chaînes de valeur, les clients et donneurs d'ordre exercent une pression forte sur les prix, les délais ou les conditions contractuelles. Cette pression peut limiter la capacité à préserver les marges nécessaires. Votre lecture porte sur ce seuil — les critères qui permettent de le reconnaître, ce qui s'est passé chez les industriels qui l'ont bien identifié, et ce que ça implique comme type de décision. Pas une situation vécue, une position sur un mécanisme.",
          "pointBascule": "À partir de quand la pression commerciale empêche-t-elle toute adaptation viable ?",
          "tensionArbitrage": "Servir les clients sans perdre la marge nécessaire pour maintenir et transformer l'outil.",
          "primaryProfiles": [
            "Direction générale",
            "Direction stratégie",
            "Conseil stratégie industrielle",
            "Direction industrielle",
            "Transformation / repositionnement"
          ],
          "landingPages": [
            "strategie"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "Trajectoire sous pression : comment les industriels reconnaissent-ils le moment où ajuster ne suffit plus — et où réarbitrer devient la seule décision valide ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — Trajectoire sous pression : comment les industriels reconnaissent-ils le moment où ajuster ne suffit plus — et où réarbitrer devient la seule décision valide ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "securisation": "L’échange ne suppose pas de commenter une stratégie interne, un client, un mandat ou une décision confidentielle. Il s’agit d’éclairer un mécanisme industriel à partir de votre expérience et de votre position d’observation."
          },
          "complementaryCodes": [
            "IND-C4-ASC-01",
            "IND-C4-ASC-02",
            "IND-C4-ASC-04"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
        },
        {
          "code": "IND-C4-ASC-04",
          "conversationCode": "C4",
          "contextCode": "ASC",
          "contextLabel": "Adaptation sous contrainte",
          "typeLecture": "TERRITORIALE",
          "typeLectureLabelSource": "TERRITORIALE",
          "titreAngle": "À partir de quand un territoire n'offre-t-il plus les conditions suffisantes pour maintenir ou ajuster une activité sans surcoûts croissants ?",
          "questionEditoriale": "À partir de quand un territoire n'offre-t-il plus les conditions suffisantes pour maintenir ou ajuster une activité sans surcoûts croissants ?",
          "questionPublique": "À partir de quand un territoire n'offre-t-il plus les conditions suffisantes pour maintenir ou ajuster une activité sans surcoûts croissants ?",
          "questionActivation": "Un territoire peut soutenir une activité industrielle par ses infrastructures, ses compétences, ses réseaux, ses services. Mais lorsque les contraintes s'accumulent, il peut aussi devenir plus coûteux d'y maintenir l'activité. Ce qu’on attend de vous, c’est une lecture située du mécanisme : les signaux à reconnaître, les arbitrages à formuler et les conditions qui changent la nature de la décision.",
          "introMecanisme": "Un territoire peut soutenir une activité industrielle par ses infrastructures, ses compétences, ses réseaux, ses services. Mais lorsque les contraintes s'accumulent, il peut aussi devenir plus coûteux d'y maintenir l'activité.",
          "texteProgramme": "Un territoire peut soutenir une activité industrielle par ses infrastructures, ses compétences, ses réseaux, ses services. Mais lorsque les contraintes s'accumulent, il peut aussi devenir plus coûteux d'y maintenir l'activité.",
          "pointBascule": "À partir de quand le territoire devient-il un handicap économique ?",
          "tensionArbitrage": "Préserver l'ancrage territorial sans supporter des surcoûts qui rendent l'activité fragile.",
          "primaryProfiles": [
            "Direction territoriale",
            "Filière / écosystème",
            "Développement territorial",
            "Site / ancrage local",
            "Collectivités / infrastructures"
          ],
          "landingPages": [
            "territorial",
            "territoriale",
            "territoires-ancrage"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "À partir de quand un territoire n'offre-t-il plus les conditions suffisantes pour maintenir ou ajuster une activité sans surcoûts croissants ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — À partir de quand un territoire n'offre-t-il plus les conditions suffisantes pour maintenir ou ajuster une activité sans surcoûts croissants ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "momentBascule": "À partir de quand le territoire devient-il un handicap économique ?",
            "tensionCentrale": "Préserver l'ancrage territorial sans supporter des surcoûts qui rendent l'activité fragile.",
            "securisation": "L’échange ne suppose pas d’exposer une négociation locale, un site ou une décision confidentielle. Il s’agit de rendre lisibles les conditions territoriales qui soutiennent, limitent ou déplacent la trajectoire industrielle."
          },
          "complementaryCodes": [
            "IND-C4-ASC-01",
            "IND-C4-ASC-02",
            "IND-C4-ASC-03"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
        },
        {
          "code": "IND-C4-RSS-01",
          "conversationCode": "C4",
          "contextCode": "RSS",
          "contextLabel": "Réinvention sous crise",
          "typeLecture": "RH_COMPETENCES",
          "typeLectureLabelSource": "RH / COMPÉTENCES",
          "titreAngle": "À partir de quand les compétences critiques, les conditions de travail ou l'organisation deviennent-elles un facteur de bascule dans une trajectoire de transformation ?",
          "questionEditoriale": "À partir de quand les compétences critiques, les conditions de travail ou l'organisation deviennent-elles un facteur de bascule dans une trajectoire de transformation ?",
          "questionPublique": "À partir de quand les compétences critiques, les conditions de travail ou l'organisation deviennent-elles un facteur de bascule dans une trajectoire de transformation ?",
          "questionActivation": "Transformer une trajectoire industrielle suppose de mobiliser des compétences, de faire évoluer les organisations et de maintenir l'engagement des équipes. En situation de crise, ces dimensions peuvent devenir décisives. Ce qu’on attend de vous, c’est une lecture située du mécanisme : les signaux à reconnaître, les arbitrages à formuler et les conditions qui changent la nature de la décision.",
          "introMecanisme": "Transformer une trajectoire industrielle suppose de mobiliser des compétences, de faire évoluer les organisations et de maintenir l'engagement des équipes. En situation de crise, ces dimensions peuvent devenir décisives.",
          "texteProgramme": "Transformer une trajectoire industrielle suppose de mobiliser des compétences, de faire évoluer les organisations et de maintenir l'engagement des équipes. En situation de crise, ces dimensions peuvent devenir décisives.",
          "pointBascule": "Quand les compétences conditionnent-elles la survie du modèle ?",
          "tensionArbitrage": "Transformer l'activité sans perdre les savoir-faire et les collectifs nécessaires à la nouvelle trajectoire.",
          "primaryProfiles": [
            "Direction RH",
            "Compétences industrielles",
            "Formation / transmission",
            "Organisation du travail",
            "Sécurité / collectifs de travail"
          ],
          "landingPages": [
            "emploi-competences",
            "rh"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "À partir de quand les compétences critiques, les conditions de travail ou l'organisation deviennent-elles un facteur de bascule dans une trajectoire de transformation ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — À partir de quand les compétences critiques, les conditions de travail ou l'organisation deviennent-elles un facteur de bascule dans une trajectoire de transformation ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "momentBascule": "Quand les compétences conditionnent-elles la survie du modèle ?",
            "tensionCentrale": "Transformer l'activité sans perdre les savoir-faire et les collectifs nécessaires à la nouvelle trajectoire.",
            "securisation": "L’échange ne suppose pas de commenter une situation sociale, un plan RH ou des données internes. Il s’agit de rendre visibles les conditions humaines, organisationnelles et temporelles de la trajectoire industrielle."
          },
          "complementaryCodes": [
            "IND-C4-RSS-02",
            "IND-C4-RSS-03",
            "IND-C4-RSS-04"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
        },
        {
          "code": "IND-C4-RSS-02",
          "conversationCode": "C4",
          "contextCode": "RSS",
          "contextLabel": "Réinvention sous crise",
          "typeLecture": "ENERGIE_RESSOURCES",
          "typeLectureLabelSource": "ÉNERGIE / RESSOURCES / DÉCARBONATION",
          "titreAngle": "À partir de quand les contraintes énergétiques, hydriques ou climatiques imposent-elles un arbitrage de localisation, de transformation ou de redéploiement du site ?",
          "questionEditoriale": "À partir de quand les contraintes énergétiques, hydriques ou climatiques imposent-elles un arbitrage de localisation, de transformation ou de redéploiement du site ?",
          "questionPublique": "À partir de quand les contraintes énergétiques, hydriques ou climatiques imposent-elles un arbitrage de localisation, de transformation ou de redéploiement du site ?",
          "questionActivation": "Lorsque l'énergie devient trop coûteuse ou indisponible, lorsque l'eau manque ou que les risques climatiques augmentent, la question peut devenir existentielle pour un site industriel. Il ne s'agit plus seulement d'adapter l'outil. Ce qu’on attend de vous, c’est une lecture située du mécanisme : les signaux à reconnaître, les arbitrages à formuler et les conditions qui changent la nature de la décision.",
          "introMecanisme": "Lorsque l'énergie devient trop coûteuse ou indisponible, lorsque l'eau manque ou que les risques climatiques augmentent, la question peut devenir existentielle pour un site industriel. Il ne s'agit plus seulement d'adapter l'outil.",
          "texteProgramme": "Lorsque l'énergie devient trop coûteuse ou indisponible, lorsque l'eau manque ou que les risques climatiques augmentent, la question peut devenir existentielle pour un site industriel. Il ne s'agit plus seulement d'adapter l'outil.",
          "pointBascule": "Quand les contraintes rendent-elles le site non viable dans sa configuration actuelle ?",
          "tensionArbitrage": "Préserver l'ancrage industriel ou déplacer/transformer l'activité pour répondre aux contraintes physiques.",
          "primaryProfiles": [
            "Énergie / utilités",
            "Décarbonation industrielle",
            "Eau / ressources",
            "Direction industrielle",
            "Soutenabilité de site"
          ],
          "landingPages": [
            "decarbonation-energie-soutenabilite",
            "ressources"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "À partir de quand les contraintes énergétiques, hydriques ou climatiques imposent-elles un arbitrage de localisation, de transformation ou de redéploiement du site ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — À partir de quand les contraintes énergétiques, hydriques ou climatiques imposent-elles un arbitrage de localisation, de transformation ou de redéploiement du site ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "momentBascule": "Quand les contraintes rendent-elles le site non viable dans sa configuration actuelle ?",
            "tensionCentrale": "Préserver l'ancrage industriel ou déplacer/transformer l'activité pour répondre aux contraintes physiques.",
            "securisation": "L’échange ne suppose pas de communiquer des volumes, coûts, données de consommation ou contraintes internes. Il s’agit d’éclairer les seuils où énergie, eau, carbone ou utilités deviennent des conditions de décision industrielle."
          },
          "complementaryCodes": [
            "IND-C4-RSS-01",
            "IND-C4-RSS-03",
            "IND-C4-RSS-04"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
        },
        {
          "code": "IND-C4-RSS-03",
          "conversationCode": "C4",
          "contextCode": "RSS",
          "contextLabel": "Réinvention sous crise",
          "typeLecture": "STRATEGIQUE",
          "typeLectureLabelSource": "STRATÉGIQUE",
          "titreAngle": "Transformation industrielle : quels sont les critères qui distinguent une réinvention réelle d'un ajustement tardif — et comment les lire depuis l'extérieur ?",
          "questionEditoriale": "Transformation industrielle : quels sont les critères qui distinguent une réinvention réelle d'un ajustement tardif — et comment les lire depuis l'extérieur ?",
          "questionPublique": "Transformation industrielle : quels sont les critères qui distinguent une réinvention réelle d'un ajustement tardif — et comment les lire depuis l'extérieur ?",
          "questionActivation": "Lorsque la structure commerciale devient trop fragile, la crise peut obliger à revoir plus largement la trajectoire. Il ne suffit plus de négocier mieux ou de vendre davantage. Ce qu'on attend de vous, c'est votre lecture de cette différence — ce qui la rend visible, ce qui la précède, et ce que ça oblige à faire concrètement. Pas un témoignage, une lecture analytique que votre position rend possible.",
          "introMecanisme": "Lorsque la structure commerciale devient trop fragile, la crise peut obliger à revoir plus largement la trajectoire. Il ne suffit plus de négocier mieux ou de vendre davantage.",
          "texteProgramme": "Lorsque la structure commerciale devient trop fragile, la crise peut obliger à revoir plus largement la trajectoire. Il ne suffit plus de négocier mieux ou de vendre davantage. Ce qu'on attend de vous, c'est votre lecture de cette différence — ce qui la rend visible, ce qui la précède, et ce que ça oblige à faire concrètement. Pas un témoignage, une lecture analytique que votre position rend possible.",
          "pointBascule": "Quand le modèle commercial devient-il incompatible avec l'outil ou la trajectoire industrielle ?",
          "tensionArbitrage": "Conserver les marchés existants ou changer de position pour préserver la viabilité industrielle.",
          "primaryProfiles": [
            "Direction générale",
            "Direction stratégie",
            "Conseil stratégie industrielle",
            "Direction industrielle",
            "Transformation / repositionnement"
          ],
          "landingPages": [
            "strategie"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "Transformation industrielle : quels sont les critères qui distinguent une réinvention réelle d'un ajustement tardif — et comment les lire depuis l'extérieur ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — Transformation industrielle : quels sont les critères qui distinguent une réinvention réelle d'un ajustement tardif — et comment les lire depuis l'extérieur ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "securisation": "L’échange ne suppose pas de commenter une stratégie interne, un client, un mandat ou une décision confidentielle. Il s’agit d’éclairer un mécanisme industriel à partir de votre expérience et de votre position d’observation."
          },
          "complementaryCodes": [
            "IND-C4-RSS-01",
            "IND-C4-RSS-02",
            "IND-C4-RSS-04"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
        },
        {
          "code": "IND-C4-RSS-04",
          "conversationCode": "C4",
          "contextCode": "RSS",
          "contextLabel": "Réinvention sous crise",
          "typeLecture": "TERRITORIALE",
          "typeLectureLabelSource": "TERRITORIALE",
          "titreAngle": "À quelles conditions un territoire peut-il encore porter un redéploiement industriel, une reconversion partielle ou une nouvelle trajectoire de site ?",
          "questionEditoriale": "À quelles conditions un territoire peut-il encore porter un redéploiement industriel, une reconversion partielle ou une nouvelle trajectoire de site ?",
          "questionPublique": "À quelles conditions un territoire peut-il encore porter un redéploiement industriel, une reconversion partielle ou une nouvelle trajectoire de site ?",
          "questionActivation": "Lorsqu'un site industriel doit se transformer, le territoire devient un acteur décisif. Il peut faciliter un redéploiement, accompagner une reconversion ou attirer de nouveaux investisseurs. Mais il peut aussi manquer de foncier, d'infrastructures ou de moyens. Ce qu’on attend de vous, c’est une lecture située du mécanisme : les signaux à reconnaître, les arbitrages à formuler et les conditions qui changent la nature de la décision.",
          "introMecanisme": "Lorsqu'un site industriel doit se transformer, le territoire devient un acteur décisif. Il peut faciliter un redéploiement, accompagner une reconversion ou attirer de nouveaux investisseurs. Mais il peut aussi manquer de foncier, d'infrastructures ou de moyens.",
          "texteProgramme": "Lorsqu'un site industriel doit se transformer, le territoire devient un acteur décisif. Il peut faciliter un redéploiement, accompagner une reconversion ou attirer de nouveaux investisseurs. Mais il peut aussi manquer de foncier, d'infrastructures ou de moyens.",
          "pointBascule": "Quand le territoire devient-il le facteur décisif de transformation ou d'échec ?",
          "tensionArbitrage": "Reconstruire une trajectoire industrielle sans surestimer les ressources réelles du territoire.",
          "primaryProfiles": [
            "Direction territoriale",
            "Filière / écosystème",
            "Développement territorial",
            "Site / ancrage local",
            "Collectivités / infrastructures"
          ],
          "landingPages": [
            "territorial",
            "territoriale",
            "territoires-ancrage"
          ],
          "showInConversationPage": true,
          "showInForm": true,
          "formatCourt": {
            "titrePublicCourt": "À quelles conditions un territoire peut-il encore porter un redéploiement industriel, une reconversion partielle ou une nouvelle trajectoire de site ?",
            "usage": "Titre court affiché sur les landing pages."
          },
          "formatLongIntervenant": {
            "titre": "Fiche intervenant — À quelles conditions un territoire peut-il encore porter un redéploiement industriel, une reconversion partielle ou une nouvelle trajectoire de site ?",
            "chapeau": "Votre contribution permettrait d’éclairer cet angle à partir d’une lecture située, sans exposer de données internes ni de situation confidentielle.",
            "dimensions": [
              {
                "key": "transformation",
                "title": "Transformation en cours / contexte",
                "text": "Qualifier ce qui change réellement : contrainte, trajectoire, marges de manœuvre, intensité de la pression et moment où la décision change de nature."
              },
              {
                "key": "acteurs",
                "title": "Acteurs concernés",
                "text": "Identifier les acteurs directement concernés par la bascule : direction générale, fonctions métiers, équipes terrain, partenaires, financeurs, filière ou territoire."
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
            "momentBascule": "Quand le territoire devient-il le facteur décisif de transformation ou d'échec ?",
            "tensionCentrale": "Reconstruire une trajectoire industrielle sans surestimer les ressources réelles du territoire.",
            "securisation": "L’échange ne suppose pas d’exposer une négociation locale, un site ou une décision confidentielle. Il s’agit de rendre lisibles les conditions territoriales qui soutiennent, limitent ou déplacent la trajectoire industrielle."
          },
          "complementaryCodes": [
            "IND-C4-RSS-01",
            "IND-C4-RSS-02",
            "IND-C4-RSS-03"
          ],
          "complementaryDisplayRule": "Même conversation, même contexte, lecture différente. Liste reconstruite depuis les 48 angles canoniques du programme."
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
          "text": "Chaque position correspond à un angle contextualisé. Une position avec lecture stratégique ne peut être signée qu’une seule fois : lorsqu’un acteur est retenu sur l’angle, les autres prétendants basculent hors de cette position."
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
    "decarbonation-energie-soutenabilite": {
      "cycleCode": "IND",
      "readingType": "ENERGIE_RESSOURCES",
      "title": "Lecture ressources industrielles — Cycle Industrie & transformation des territoires | En Plateau",
      "metaDescription": "Une place précise pour éclairer les arbitrages énergie, eau, carbone, utilités, ressources et soutenabilité physique dans les trajectoires industrielles.",
      "navLabel": "Cycle Industrie · Lecture ressources industrielles",
      "heroTitleHtml": "Votre lecture<br><em>éclaire</em><br>les ressources qui rendent<br>l’industrie possible.",
      "heroLead": "Certaines transformations industrielles ne se jouent pas seulement dans la stratégie, la finance ou l’outil. Elles se jouent dans l’accès à l’énergie, à l’eau, aux utilités, aux réseaux, aux ressources et dans la capacité réelle à décarboner sans fragiliser la continuité industrielle.",
      "heroProfiles": [
        {
          "label": "Énergie · Utilités · Ressources industrielles",
          "text": "Vous éclairez les arbitrages liés à l’énergie, l’eau, les réseaux, les utilités, les ressources physiques, les infrastructures ou la continuité d’exploitation."
        },
        {
          "label": "Décarbonation · Climat · Transformation industrielle",
          "text": "Vous accompagnez ou pilotez des trajectoires carbone, des transformations de process, des arbitrages CAPEX, des stratégies climat ou des reconversions de sites."
        }
      ],
      "valueSection": {
        "title": "Faire reconnaître les ressources industrielles comme conditions réelles de décision",
        "intro": "Une lecture ressources industrielles ne consiste pas à tenir un discours RSE. Elle permet de montrer comment l’énergie, l’eau, le carbone, les utilités, les réseaux et les ressources disponibles deviennent des conditions concrètes de continuité, d’investissement, de compétitivité ou de transformation industrielle.",
        "cards": [
          {
            "label": "Direction industrielle · Site exposé · Industrie intensive",
            "title": "Montrer que la trajectoire industrielle intègre ses limites physiques",
            "text": "Cette prise de parole permet de montrer que l’entreprise ne pilote pas seulement des volumes, des investissements ou des marchés, mais aussi les conditions physiques qui rendent l’activité possible : énergie, eau, chaleur, utilités, réseaux, émissions et ressources critiques. Elle valorise une lecture industrielle capable d’arbitrer entre continuité, compétitivité et transformation, tout en rassurant financeurs, clients, partenaires ou institutions sur la capacité de l’organisation à anticiper ses contraintes réelles."
          },
          {
            "label": "Énergie · Utilités · Infrastructures industrielles",
            "title": "Rendre visibles les ressources qui conditionnent la capacité de production",
            "text": "Cette lecture permet d’éclairer les moments où l’accès à l’énergie, à l’eau, aux utilités ou aux réseaux devient un verrou de croissance, d’adaptation ou de redéploiement. Elle valorise les fonctions qui sécurisent les ressources invisibles de la production, tout en montrant que l’entreprise sait hiérarchiser les dépendances physiques qui peuvent soutenir, limiter ou fragiliser sa trajectoire industrielle."
          },
          {
            "label": "Décarbonation · Climat · ESG industriel",
            "title": "Donner une lecture industrielle crédible de la trajectoire carbone",
            "text": "Cette intervention permet de sortir d’une lecture déclarative de la décarbonation pour montrer les arbitrages concrets qu’elle impose : process, utilités, CAPEX, compétitivité, mix produit, localisation ou vocation industrielle du site. Elle valorise une expertise climat réellement connectée au fonctionnement industriel, tout en renforçant la crédibilité de l’organisation auprès des investisseurs, banques, donneurs d’ordre, partenaires publics ou acteurs de filière."
          },
          {
            "label": "Cabinet spécialisé · Conseil énergie / climat / transformation",
            "title": "Démontrer une compréhension concrète des arbitrages de soutenabilité",
            "text": "Pour un cabinet ou un profil conseil, cette contribution permet de montrer une lecture transversale des contraintes énergie, eau, carbone et ressources observées dans plusieurs environnements industriels. Elle valorise une expertise capable de relier diagnostic physique, trajectoire économique et décision industrielle, sans réduire la transition à une méthode, une offre ou une conformité."
          },
          {
            "label": "Eau · Ressources · Résilience de site",
            "title": "Faire apparaître les conditions matérielles souvent invisibles de la continuité industrielle",
            "text": "Cette prise de parole rend visibles les dépendances hydriques, climatiques, foncières ou ressources qui peuvent conditionner la viabilité d’un site industriel. Elle valorise les profils capables d’éclairer la soutenabilité physique d’une trajectoire, tout en montrant que l’entreprise ou l’écosystème sait anticiper les risques de disponibilité, de coût, de réglementation ou d’acceptabilité liés aux ressources."
          }
        ]
      },
      "copy": {
        "positionsCountNote": "5 positions avec lecture ressources industrielles sont ouvertes dans le cycle Industrie.",
        "rarityBlock": {
          "kicker": "Rareté éditoriale",
          "title": "5 positions avec lecture ressources industrielles sont ouvertes dans le cycle Industrie.",
          "text": "Chaque position correspond à un angle contextualisé. Une position avec lecture ressources industrielles ne peut être signée qu’une seule fois : lorsqu’un acteur est retenu sur l’angle, les autres prétendants basculent hors de cette position."
        },
        "heroNoteHtml": "Aucun plan carbone confidentiel à exposer &nbsp;·&nbsp; Aucun chiffre interne à communiquer &nbsp;·&nbsp; 15 min pour qualifier votre angle<br>Préparation possible avec les équipes communication, juridique, RSE, finance ou corporate de votre organisation",
        "heroCardTitle": "Votre lecture ressources industrielles a-t-elle sa place dans l’une de ces conversations ?",
        "heroCardText": "En 15 minutes, nous vérifions si votre lecture correspond à une position encore disponible — sans exposer de données internes, de plan confidentiel, de site identifiable ou de décision sensible.",
        "audience": {
          "title": "Cette lecture ressources industrielles vous est-elle destinée ?",
          "yesTitle": "Vous portez probablement une lecture pertinente si…",
          "noTitle": "Moins adapté si…",
          "yesItems": [
            "Vous savez relier énergie, eau, utilités, carbone, ressources, réseaux ou contraintes climatiques à des arbitrages industriels réels.",
            "Vous êtes direction énergie, utilités, décarbonation, climat industriel, transformation de process, direction industrielle exposée, conseil énergie / climat ou expert ressources.",
            "Votre lecture porte sur des seuils : ressources qui deviennent verrou, coûts qui limitent l’adaptation, contrainte carbone qui change la compétitivité, site qui doit être transformé ou redéployé.",
            "Vous pouvez éclairer un mécanisme de soutenabilité physique sans exposer de plan interne, de chiffre confidentiel, de site sensible ou de situation identifiable."
          ],
          "noItems": [
            "Votre contribution vise surtout à présenter une démarche RSE, une offre, une technologie ou une méthode.",
            "Votre lecture reste trop générale pour être rattachée à un arbitrage industriel précis.",
            "Vous souhaitez commenter un plan carbone interne, un site identifiable ou une décision confidentielle.",
            "Votre approche ne relie pas les contraintes énergie, eau, carbone ou ressources aux décisions industrielles qui en découlent."
          ],
          "panel": "La lecture ressources industrielles ne consiste pas à raconter une trajectoire RSE. Elle consiste à éclairer les contraintes physiques qui rendent une trajectoire industrielle tenable, fragile ou à réarbitrer."
        },
        "conversations": {
          "title": "Les angles où les ressources industrielles deviennent décisives",
          "intro": "La page met d’abord en avant les angles ressources industrielles ouverts. Les lectures complémentaires ne s’affichent que lorsqu’elles appartiennent à la même conversation et au même contexte.",
          "panel": "Ces positions ne demandent pas de commenter un plan interne ; elles proposent d’éclairer les arbitrages physiques, économiques et industriels qui se répètent dans les trajectoires de transformation."
        },
        "preparation": {
          "titleHtml": "Beaucoup arrivent avec une expertise des ressources industrielles. <em style=\"color:rgba(240,236,230,0.55);\">Ils repartent avec une lecture industrielle défendable.</em>",
          "intro": "La préparation éditoriale transforme une expertise énergie, carbone, ressources, utilités ou transformation de site en lecture située : claire, non intrusive et utile pour d’autres décideurs industriels."
        },
        "dimensions": [
          {
            "num": "01",
            "title": "Transformation en cours / contexte",
            "text": "Qualifier ce qui change concrètement : coût ou disponibilité de l’énergie, accès à l’eau, contrainte carbone, utilités, réseaux, ressources, climat ou vocation industrielle du site."
          },
          {
            "num": "02",
            "title": "Acteurs concernés",
            "text": "Identifier les acteurs impactés : direction industrielle, énergie, utilités, RSE, finance, production, maintenance, clients, fournisseurs, financeurs, territoire ou acteurs publics."
          },
          {
            "num": "03",
            "title": "Arbitrages de soutenabilité",
            "text": "Rendre visibles les choix réels : produire, réduire, investir, électrifier, transformer le process, sécuriser les ressources, relocaliser, redéployer ou changer de trajectoire."
          },
          {
            "num": "04",
            "title": "Défis & opportunités",
            "text": "Mettre en regard ce que la situation fragilise et ce qu’elle peut ouvrir : trajectoire plus robuste, compétitivité rééquilibrée, site mieux sécurisé ou transformation assumée."
          },
          {
            "num": "05",
            "title": "Vision attendue",
            "text": "Formuler une lecture située de ce que votre expérience énergie, climat, ressources ou transformation industrielle permet de reconnaître avant que la contrainte ne devienne bloquante."
          },
          {
            "num": "06",
            "title": "Échelle d’analyse",
            "text": "Situer la lecture à la bonne échelle : process, atelier, site, réseau, bassin de ressources, entreprise, filière, territoire ou trajectoire industrielle."
          }
        ],
        "dimensionsPanel": "Ce travail ne vous demande pas d’exposer votre organisation. Il donne une forme claire à ce que votre position vous a appris à reconnaître dans les contraintes énergie, eau, carbone, ressources et soutenabilité physique.",
        "process": [
          {
            "num": "01",
            "title": "L'échange de qualification",
            "text": "15 minutes pour vérifier si votre lecture correspond à un angle disponible. Aucun plan carbone confidentiel, chiffre interne, site sensible ou dossier identifiable à exposer.",
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
            "text": "En Plateau travaille avec vous, et avec vos équipes communication, juridique, RSE, finance ou corporate si nécessaire, pour transformer votre lecture en position claire, non intrusive et publiquement défendable."
          }
        ],
        "guarantees": [
          {
            "accent": true,
            "title": "Aucun plan interne à exposer",
            "text": "L’échange porte sur les mécanismes d’arbitrage énergie, carbone, eau ou ressources, pas sur un plan confidentiel, un site sensible ou une décision identifiable."
          },
          {
            "accent": true,
            "title": "Aucun engagement avant le dossier de positionnement",
            "text": "Vous ne vous engagez pas lors de l’échange éditorial. La position proposée est qualifiée avant toute validation."
          },
          {
            "title": "Pas de discours RSE ou commercial attendu",
            "text": "La contribution vise une lecture située des contraintes physiques de l’industrie, non une présentation de démarche, d’offre, de technologie ou de solution."
          },
          {
            "title": "Une parole préparée avec vos équipes si nécessaire",
            "text": "La préparation peut intégrer vos contraintes RSE, finance, communication, juridiques, corporate ou de confidentialité."
          }
        ],
        "faq": [
          {
            "question": "Faut-il parler d’un plan carbone ou d’un site identifiable ?",
            "answer": "Non. L’enjeu n’est pas d’exposer une trajectoire interne, mais d’éclairer un mécanisme énergie, eau, carbone, ressources ou soutenabilité à partir de votre expérience."
          },
          {
            "question": "Cette lecture est-elle réservée aux experts décarbonation ?",
            "answer": "Non. Elle peut être portée par des directions industrielles exposées, responsables énergie, utilités, eau, ressources, ESG industriel, climat, transformation de process, conseil spécialisé ou ingénierie industrielle."
          },
          {
            "question": "Peut-on préparer l’intervention avec les équipes communication, finance, RSE ou juridiques ?",
            "answer": "Oui. La prise de parole peut être préparée avec les équipes communication, finance, RSE, juridique ou corporate afin de garantir un niveau d’exposition maîtrisé."
          },
          {
            "question": "Faut-il arriver avec une position déjà formulée ?",
            "answer": "Non. L’échange éditorial sert précisément à vérifier l’angle, puis à transformer votre lecture en position claire, défendable et non intrusive."
          }
        ],
        "cta": {
          "title": "Votre lecture des ressources industrielles peut éclairer ce qui rend une trajectoire industrielle soutenable — ou non.",
          "text": "Un échange de 15 minutes — sans exposer de plan interne, sans site identifiable, sans engagement — pour vérifier si votre angle a une place dans l’une des 5 positions avec lecture ressources industrielles ouvertes.",
          "deadline": "Comité éditorial : 15 juin 2026 · Les échanges précèdent la composition finale",
          "footnote": "Les positions ressources industrielles se ferment au fil de la composition éditoriale · Page non indexée"
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
        "intro": "La prise de parole financière devient utile lorsqu'elle éclaire les mécanismes qui obligent une entreprise industrielle à choisir, tout en renforçant la crédibilité économique de l’organisation auprès de ses investisseurs, banquiers, fournisseurs, partenaires et acteurs institutionnels.",
        "cards": [
          {
            "label": "DAF · CFO · Direction financière",
            "title": "Rendre lisible la qualité du pilotage économique",
            "text": "Cette prise de parole permet de montrer que l’entreprise sait lire ses marges de manœuvre, ses coûts différés, ses besoins d’investissement et ses seuils de soutenabilité. Elle valorise le rôle de la fonction financière dans les arbitrages industriels, tout en donnant aux investisseurs, banquiers, fournisseurs ou partenaires une lecture plus solide de la manière dont la trajectoire est pilotée."
          },
          {
            "label": "ETI · Groupe industriel sous contrainte",
            "title": "Rassurer sur la capacité à arbitrer sans subir",
            "text": "Dans une trajectoire industrielle tendue, une lecture financière bien préparée peut montrer que les choix économiques ne sont pas seulement défensifs, mais hiérarchisés, assumés et reliés à une vision industrielle. Elle valorise la capacité de l’entreprise à expliquer ce qui doit être sécurisé, différé, investi ou transformé, sans exposer de chiffres internes ni de dossier sensible."
          },
          {
            "label": "Conseil finance · Restructuring · Investissement",
            "title": "Démontrer une lecture financière réellement connectée à l’industrie",
            "text": "Pour un cabinet ou un profil conseil, cette contribution montre une capacité à dépasser l’analyse financière abstraite pour éclairer les décisions industrielles concrètes : CAPEX, dette technologique, dépendances, coûts de ressources, compétitivité, transformation ou repositionnement. Elle renforce la crédibilité de l’expertise auprès de dirigeants et partenaires qui cherchent une lecture financière reliée au réel industriel."
          },
          {
            "label": "Profil senior · Gouvernance · Investisseur",
            "title": "Installer une parole financière utile aux décisions de long terme",
            "text": "Cette prise de parole permet de construire une trace publique maîtrisée d’une capacité à relier finance, stratégie industrielle et soutenabilité. Elle sert à la fois l’organisation, en montrant que ses arbitrages économiques peuvent être expliqués sans divulguer d’informations sensibles, et la personne, en valorisant une lecture senior capable de rendre intelligibles les décisions difficiles."
          }
        ]
      },
      "copy": {
        "positionsCountNote": "5 positions avec lecture financière sont ouvertes dans le cycle Industrie.",
        "rarityBlock": {
          "kicker": "Rareté éditoriale",
          "title": "5 positions avec lecture financière sont ouvertes dans le cycle Industrie.",
          "text": "Chaque position correspond à un angle contextualisé. Une position avec lecture financière ne peut être signée qu’une seule fois : lorsqu’un acteur est retenu sur l’angle, les autres prétendants basculent hors de cette position."
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
        "intro": "La lecture juridique devient décisive lorsqu’elle éclaire le moment où le cadre cesse d’être un arrière-plan et devient une condition de la décision industrielle, tout en montrant que l’organisation sait sécuriser ses choix sans exposer de dossier sensible.",
        "cards": [
          {
            "label": "Cabinet d’avocats · Conseil juridique",
            "title": "Montrer une capacité à sécuriser des décisions industrielles complexes",
            "text": "Cette contribution rend visible une lecture juridique utile aux arbitrages industriels : contrats, responsabilités, droit social, environnement, conformité ou réorganisation. Elle valorise l’expertise du cabinet sans exposer de client, de contentieux ou de dossier identifiable, tout en montrant aux dirigeants, investisseurs, partenaires ou institutions que le cadre juridique peut éclairer la décision avant qu’elle ne devienne bloquante."
          },
          {
            "label": "Direction juridique · Groupe industriel · ETI",
            "title": "Faire reconnaître le rôle du juridique en amont des décisions",
            "text": "Cette prise de parole permet de montrer que l’entreprise ne traite pas le juridique comme une validation finale, mais comme une lecture intégrée aux arbitrages industriels. Elle valorise la fonction juridique en amont des décisions sensibles, tout en rassurant partenaires, donneurs d’ordre, financeurs ou acteurs institutionnels sur la capacité de l’organisation à sécuriser sa trajectoire."
          },
          {
            "label": "Compliance · Affaires réglementaires · Normes",
            "title": "Transformer la contrainte en lecture stratégique de trajectoire",
            "text": "Cette lecture permet d’éclairer le moment où normes, autorisations, obligations de conformité ou cadres réglementaires deviennent des paramètres structurants de la transformation industrielle. Elle valorise les fonctions conformité et affaires réglementaires, tout en montrant que l’entreprise sait anticiper les contraintes qui peuvent modifier ses investissements, ses marchés, ses responsabilités ou ses conditions d’exploitation."
          },
          {
            "label": "Profil senior · Juridique · Corporate",
            "title": "Construire une parole publique maîtrisée sur un sujet sensible",
            "text": "Cette intervention permet de formuler une lecture juridique solide sans commenter de dossier, de contentieux ou de situation identifiable. Elle sert l’organisation en montrant que ses décisions peuvent être sécurisées et expliquées à un niveau maîtrisé, et elle valorise la personne en faisant apparaître une capacité à relier droit, risque, responsabilité et décision industrielle."
          }
        ]
      },
      "copy": {
        "positionsCountNote": "10 positions avec lecture juridique sont ouvertes dans le cycle Industrie.",
        "rarityBlock": {
          "kicker": "Rareté éditoriale",
          "title": "10 positions avec lecture juridique sont ouvertes dans le cycle Industrie.",
          "text": "Chaque position correspond à un angle contextualisé. Une position avec lecture juridique ne peut être signée qu’une seule fois : lorsqu’un acteur est retenu sur l’angle, les autres prétendants basculent hors de cette position."
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
          "text": "Un échange de 15 minutes — sans exposer de dossier, sans engagement — pour vérifier si votre angle a une place dans l’une des 10 positions avec lecture juridique ouvertes.",
          "deadline": "Comité éditorial : 15 juin 2026 · Les échanges précèdent la composition finale",
          "footnote": "Les positions juridiques se ferment au fil de la composition éditoriale · Page non indexée"
        }
      }
    },
    "operations": {
      "cycleCode": "IND",
      "readingType": "OPERATIONNELLE",
      "title": "Lecture opérationnelle — Cycle Industrie & transformation des territoires | En Plateau",
      "metaDescription": "Une place précise pour éclairer les arbitrages opérationnels qui rendent une trajectoire industrielle tenable, fragile ou à réarbitrer — sans exposer de situation interne.",
      "navLabel": "Cycle Industrie · Lecture opérationnelle",
      "heroTitleHtml": "Votre lecture<br><em>rend visible</em><br>ce qui fait tenir<br>l'industrie réelle.",
      "heroLead": "Certaines trajectoires industrielles ne se comprennent pas seulement depuis la stratégie, la finance ou le droit. Elles se lisent dans les arbitrages de capacité, de flux, de qualité, de maintenance, de supply chain et d’organisation.",
      "heroProfiles": [
        {
          "label": "Directions industrielles & opérations",
          "text": "Vous pilotez ou avez piloté des arbitrages de capacité, qualité, cadence, maintenance, flux, organisation ou transformation de sites industriels."
        },
        {
          "label": "Conseil & transformation industrielle",
          "text": "Vous accompagnez des industriels sur la performance, l’excellence opérationnelle, la supply chain, la robustesse des organisations ou la transformation de l’outil."
        }
      ],
      "valueSection": {
        "title": "Faire reconnaître ce qui rend une trajectoire industrielle réellement tenable",
        "intro": "Une lecture opérationnelle ne consiste pas à exposer une situation interne. Elle permet de montrer comment une entreprise lit, pilote et sécurise ses contraintes industrielles, tout en donnant aux fonctions opérationnelles une place plus juste dans la compréhension des transformations en cours.",
        "cards": [
          {
            "label": "ETI · Grand groupe industriel",
            "title": "Montrer que l’outil industriel est piloté avec lucidité",
            "text": "Cette prise de parole permet de rendre visibles les arbitrages qui font tenir une trajectoire industrielle : capacité, maintenance, qualité, flux, délais, ressources et organisation. Elle valorise une lecture opérationnelle de haut niveau tout en rassurant partenaires, clients, financeurs ou acteurs institutionnels sur la capacité de l’entreprise à comprendre ses propres tensions industrielles."
          },
          {
            "label": "Supply chain · Achats · Flux",
            "title": "Faire apparaître les dépendances réellement pilotées",
            "text": "Cette lecture permet de montrer comment les dépendances fournisseurs, matières, stocks, délais, transport ou continuité industrielle sont identifiées, hiérarchisées et pilotées. Elle donne de la visibilité à des fonctions souvent décisives dans la robustesse réelle de l’organisation, tout en montrant que les vulnérabilités opérationnelles ne sont pas subies mais analysées avec méthode."
          },
          {
            "label": "Cabinet de conseil · Transformation industrielle",
            "title": "Démontrer une compréhension concrète des arbitrages industriels",
            "text": "Cette intervention permet de montrer une lecture située des contraintes industrielles réelles : soutenabilité opérationnelle, adaptation des outils, tensions de capacité, robustesse des process, organisation sous contrainte. Elle valorise une expertise capable de dépasser les discours généraux de transformation pour éclairer les mécanismes qui se répètent dans les trajectoires industrielles."
          },
          {
            "label": "Excellence opérationnelle · Qualité · Maintenance",
            "title": "Valoriser les fonctions qui sécurisent la transformation dans la durée",
            "text": "Cette lecture montre que la robustesse industrielle ne repose pas uniquement sur la stratégie ou l’investissement, mais aussi sur les standards, la maintenance, la qualité, les routines, la fiabilité de l’outil et la stabilité des organisations. Elle valorise des fonctions qui rendent les transformations réellement tenables, tout en montrant que l’entreprise sait identifier ce qui tient, ce qui dérive et ce qui doit être réarbitré."
          }
        ]
      },
      "copy": {
        "positionsCountNote": "11 positions avec lecture opérationnelle sont ouvertes dans le cycle Industrie.",
        "rarityBlock": {
          "kicker": "Rareté éditoriale",
          "title": "11 positions avec lecture opérationnelle sont ouvertes dans le cycle Industrie.",
          "text": "Chaque position correspond à un angle contextualisé. Une position avec lecture opérationnelle ne peut être signée qu’une seule fois : lorsqu’un acteur est retenu sur l’angle, les autres prétendants basculent hors de cette position."
        },
        "heroNoteHtml": "Aucun chiffre interne à exposer &nbsp;·&nbsp; Aucun dossier sensible à commenter &nbsp;·&nbsp; 15 min pour qualifier votre angle<br>Préparation possible avec les équipes communication, juridique ou corporate de votre organisation",
        "heroCardTitle": "Votre lecture opérationnelle a-t-elle sa place dans l’une de ces conversations ?",
        "heroCardText": "En 15 minutes, nous vérifions si votre lecture correspond à une position encore disponible — sans exposer de situation interne, de chiffre confidentiel ou de dossier identifiable.",
        "audience": {
          "title": "Cette lecture opérationnelle vous est-elle destinée ?",
          "yesTitle": "Vous portez probablement une lecture pertinente si…",
          "noTitle": "Moins adapté si…",
          "yesItems": [
            "Vous savez relier cadence, qualité, maintenance, flux, supply chain, ressources ou organisation à des arbitrages industriels réels.",
            "Vous êtes directeur industriel, directeur des opérations, responsable de site, supply chain, performance industrielle, qualité, maintenance, excellence opérationnelle ou conseil en transformation industrielle.",
            "Votre lecture porte sur des seuils : outil qui sature, flux qui fragilisent, dépendance qui bloque, organisation qui compense, qualité qui devient plus difficile à tenir.",
            "Vous pouvez éclairer un mécanisme industriel sans exposer de chiffre interne, de situation sensible ou de cas identifiable."
          ],
          "noItems": [
            "Votre contribution vise surtout à présenter une méthode, une offre ou une solution.",
            "Votre lecture reste trop générale pour être rattachée à un arbitrage opérationnel précis.",
            "Vous souhaitez commenter une situation interne identifiable ou un dossier confidentiel.",
            "Votre approche ne relie pas les contraintes de terrain aux décisions industrielles qui en découlent."
          ],
          "panel": "La lecture opérationnelle ne consiste pas à raconter le fonctionnement interne d’un site ou d’une entreprise. Elle consiste à éclairer les mécanismes qui rendent une trajectoire industrielle tenable, fragile ou à réarbitrer."
        },
        "conversations": {
          "title": "Les angles où la lecture opérationnelle devient décisive",
          "intro": "La page met d’abord en avant les angles opérationnels ouverts. Les lectures complémentaires ne s’affichent que lorsqu’elles appartiennent à la même conversation et au même contexte.",
          "panel": "Ces positions ne demandent pas de commenter une situation particulière ; elles proposent d’éclairer les arbitrages concrets qui se répètent dans les trajectoires industrielles."
        },
        "preparation": {
          "titleHtml": "Beaucoup arrivent avec une expérience opérationnelle. <em style=\"color:rgba(240,236,230,0.55);\">Ils repartent avec une lecture publiquement défendable.</em>",
          "intro": "La préparation éditoriale transforme une expérience industrielle, une pratique de pilotage ou une expertise de transformation en lecture située : claire, non intrusive et utile pour d’autres décideurs."
        },
        "dimensions": [
          {
            "num": "01",
            "title": "Transformation en cours / contexte",
            "text": "Qualifier ce qui change concrètement : montée en charge, saturation, dépendance, contrainte de ressources, outil à adapter ou organisation qui atteint ses limites."
          },
          {
            "num": "02",
            "title": "Acteurs concernés",
            "text": "Identifier les acteurs impactés : direction industrielle, production, maintenance, qualité, supply chain, achats, équipes terrain, clients, fournisseurs ou partenaires."
          },
          {
            "num": "03",
            "title": "Arbitrages opérationnels",
            "text": "Rendre visibles les choix réels : tenir la cadence, préserver la qualité, sécuriser les flux, investir, différer, standardiser, transformer ou renoncer."
          },
          {
            "num": "04",
            "title": "Défis & opportunités",
            "text": "Mettre en regard ce que la situation fragilise et ce qu’elle peut ouvrir : robustesse accrue, organisation plus lisible, outil mieux sécurisé ou trajectoire mieux assumée."
          },
          {
            "num": "05",
            "title": "Vision attendue",
            "text": "Formuler une lecture située de ce que l’expérience opérationnelle permet de reconnaître avant que la saturation, la dérive ou le blocage ne deviennent évidents."
          },
          {
            "num": "06",
            "title": "Échelle d’analyse",
            "text": "Situer la lecture à la bonne échelle : ligne, site, organisation industrielle, chaîne de valeur, réseau d’usines, fournisseur critique ou trajectoire d’entreprise."
          }
        ],
        "dimensionsPanel": "Ce travail ne vous demande pas d’exposer votre organisation. Il donne une forme claire à ce que votre position vous a appris à reconnaître.",
        "process": [
          {
            "num": "01",
            "title": "L'échange de qualification",
            "text": "15 minutes pour vérifier si votre lecture correspond à un angle disponible. Aucun chiffre interne, dossier sensible ou cas identifiable à exposer.",
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
            "text": "En Plateau travaille avec vous, et avec vos équipes communication, juridique ou corporate si nécessaire, pour transformer votre lecture en position claire, non intrusive et publiquement défendable."
          }
        ],
        "guarantees": [
          {
            "accent": true,
            "title": "Aucune situation interne à exposer",
            "text": "L’échange porte sur les mécanismes d’arbitrage opérationnel, pas sur un site, un client, un fournisseur ou une décision identifiable."
          },
          {
            "accent": true,
            "title": "Aucun engagement avant le dossier de positionnement",
            "text": "Vous ne vous engagez pas lors de l’échange éditorial. La position proposée est qualifiée avant toute validation."
          },
          {
            "title": "Pas de retour d’expérience promotionnel attendu",
            "text": "La contribution vise une lecture située des contraintes industrielles, non une présentation d’entreprise, de méthode ou de solution."
          },
          {
            "title": "Une parole préparée avec vos équipes si nécessaire",
            "text": "La préparation peut intégrer vos contraintes de communication, juridiques, corporate ou de confidentialité."
          }
        ],
        "faq": [
          {
            "question": "Faut-il parler d’un site, d’un client ou d’un fournisseur identifiable ?",
            "answer": "Non. L’enjeu n’est pas d’exposer une situation interne, mais d’éclairer un mécanisme industriel à partir de votre expérience et de votre position d’observation."
          },
          {
            "question": "Cette lecture est-elle réservée aux directeurs industriels ?",
            "answer": "Non. Elle peut être portée par des directions industrielles, opérations, supply chain, qualité, maintenance, excellence opérationnelle, performance industrielle ou par des conseils spécialisés."
          },
          {
            "question": "Peut-on préparer l’intervention avec les équipes communication ou juridiques ?",
            "answer": "Oui. La prise de parole peut être préparée avec les équipes communication, juridique ou corporate afin de garantir un niveau d’exposition maîtrisé."
          },
          {
            "question": "Faut-il arriver avec une position déjà formulée ?",
            "answer": "Non. L’échange éditorial sert précisément à vérifier l’angle, puis à transformer votre lecture opérationnelle en position claire, défendable et non intrusive."
          }
        ],
        "cta": {
          "title": "Votre lecture opérationnelle peut éclairer ce qui fait tenir — ou fragilise — une trajectoire industrielle.",
          "text": "Un échange de 15 minutes — sans exposer de chiffre interne, sans dossier sensible, sans engagement — pour vérifier si votre angle a une place dans l’une des 11 positions avec lecture opérationnelle ouvertes.",
          "deadline": "Comité éditorial : 15 juin 2026 · Les échanges précèdent la composition finale",
          "footnote": "Les positions opérationnelles se ferment au fil de la composition éditoriale · Page non indexée"
        }
      }
    },
    "emploi-competences": {
      "cycleCode": "IND",
      "readingType": "RH_COMPETENCES",
      "title": "Lecture emploi & compétences — Cycle Industrie & transformation des territoires | En Plateau",
      "metaDescription": "Une place précise pour éclairer les tensions d’emploi, de compétences, de transmission, d’organisation du travail et de soutenabilité humaine dans les trajectoires industrielles.",
      "navLabel": "Cycle Industrie · Lecture emploi & compétences",
      "heroTitleHtml": "Votre lecture<br><em>éclaire</em><br>ce qui fait tenir<br>les compétences industrielles.",
      "heroLead": "Certaines trajectoires industrielles ne se jouent pas seulement dans l’outil, l’investissement ou la stratégie. Elles se jouent aussi dans la capacité à recruter, transmettre, adapter les métiers, sécuriser les gestes et faire tenir les collectifs de travail.",
      "heroProfiles": [
        {
          "label": "RH · Compétences · Transformation du travail",
          "text": "Vous éclairez les tensions de recrutement, de transmission, de montée en compétence, d’organisation du travail ou de soutenabilité humaine."
        },
        {
          "label": "Conseil · Formation · Droit social",
          "text": "Vous accompagnez des industriels sur les compétences, les métiers, les transformations sociales, la sécurité, la formation, la certification ou les réorganisations."
        }
      ],
      "valueSection": {
        "title": "Faire reconnaître les compétences comme condition réelle de la trajectoire industrielle",
        "intro": "Une lecture emploi & compétences ne consiste pas à parler de RH de manière générale. Elle permet de montrer comment les tensions de recrutement, de transmission, d’organisation du travail, de sécurité, de formation ou de droit social deviennent des conditions concrètes de décision industrielle.",
        "cards": [
          {
            "label": "DRH · Transformation · Groupe industriel",
            "title": "Montrer que la trajectoire industrielle tient aussi par les compétences",
            "text": "Cette prise de parole permet de montrer que la trajectoire industrielle ne repose pas seulement sur l’outil, l’investissement ou la stratégie, mais aussi sur la capacité à recruter, former, transmettre, organiser et faire tenir les collectifs de travail. Elle valorise le rôle RH ou transformation comme une fonction d’arbitrage industriel à part entière, tout en rassurant partenaires, investisseurs ou institutions sur la capacité de l’entreprise à sécuriser les compétences nécessaires à sa trajectoire."
          },
          {
            "label": "Cabinet RH · Organisation · Transformation",
            "title": "Démontrer une expertise connectée aux contraintes industrielles",
            "text": "Cette lecture permet de montrer une expertise réellement connectée aux contraintes industrielles : montée en charge, adaptation des métiers, organisation sous tension, transmission des savoir-faire, transformation du travail. Elle valorise une capacité de conseil qui ne reste pas théorique, mais éclaire les mécanismes humains qui conditionnent la robustesse industrielle."
          },
          {
            "label": "Formation · QHSE · Certification · Gestes métiers",
            "title": "Rendre visibles les conditions concrètes de montée en compétence",
            "text": "Cette prise de parole permet de rendre visibles les conditions concrètes de montée en compétence : gestes métiers, culture sécurité, qualité, conformité, standards, apprentissage et fiabilisation des pratiques. Elle valorise les fonctions qui sécurisent la transformation dans le réel du travail, tout en montrant que l’entreprise ou l’organisation sait anticiper les risques liés à la compétence, à la sécurité et à la maîtrise opérationnelle."
          },
          {
            "label": "Droit social · Restructuration · Sécurisation",
            "title": "Éclairer les transformations sensibles sans exposer de dossier",
            "text": "Cette lecture permet d’éclairer les moments où la transformation industrielle rencontre les limites du droit social, des collectifs, des réorganisations ou de la soutenabilité humaine. Elle valorise une expertise capable de sécuriser des trajectoires sensibles sans exposer de dossier identifiable, tout en montrant que l’entreprise sait traiter les enjeux humains et sociaux comme des conditions de décision industrielle."
          }
        ]
      },
      "copy": {
        "positionsCountNote": "12 positions avec lecture emploi & compétences sont ouvertes dans le cycle Industrie.",
        "rarityBlock": {
          "kicker": "Rareté éditoriale",
          "title": "12 positions avec lecture emploi & compétences sont ouvertes dans le cycle Industrie.",
          "text": "Chaque position correspond à un angle contextualisé. Une position avec lecture emploi & compétences ne peut être signée qu’une seule fois : lorsqu’un acteur est retenu sur l’angle, les autres prétendants basculent hors de cette position."
        },
        "heroNoteHtml": "Aucun dossier social identifiable à exposer &nbsp;·&nbsp; Aucun chiffre interne à communiquer &nbsp;·&nbsp; 15 min pour qualifier votre angle<br>Préparation possible avec les équipes communication, juridique, RH ou corporate de votre organisation",
        "heroCardTitle": "Votre lecture emploi & compétences a-t-elle sa place dans l’une de ces conversations ?",
        "heroCardText": "En 15 minutes, nous vérifions si votre lecture correspond à une position encore disponible — sans exposer de dossier interne, de situation sociale identifiable ou d’information confidentielle.",
        "audience": {
          "title": "Cette lecture emploi & compétences vous est-elle destinée ?",
          "yesTitle": "Vous portez probablement une lecture pertinente si…",
          "noTitle": "Moins adapté si…",
          "yesItems": [
            "Vous savez relier recrutement, compétences, transmission, formation, organisation du travail ou droit social à des arbitrages industriels réels.",
            "Vous êtes DRH, direction transformation, responsable compétences, QHSE, formation, organisation, conseil RH, conseil en transformation, droit social ou restructuration.",
            "Votre lecture porte sur des seuils : compétences qui manquent, métiers qui évoluent, collectifs qui compensent, organisations qui saturent, sécurité ou qualité qui deviennent plus difficiles à tenir.",
            "Vous pouvez éclairer un mécanisme d’emploi, de compétences ou de travail sans exposer de dossier interne, de situation sociale identifiable ou de chiffre confidentiel."
          ],
          "noItems": [
            "Votre contribution vise surtout à présenter une politique RH, une marque employeur ou une offre de formation.",
            "Votre lecture reste trop générale pour être rattachée à un arbitrage industriel précis.",
            "Vous souhaitez commenter une situation sociale interne, un plan ou un dossier identifiable.",
            "Votre approche ne relie pas les enjeux humains aux décisions industrielles qui en découlent."
          ],
          "panel": "La lecture emploi & compétences ne consiste pas à raconter une politique RH. Elle consiste à éclairer les mécanismes humains, sociaux et organisationnels qui rendent une trajectoire industrielle tenable, fragile ou à réarbitrer."
        },
        "conversations": {
          "title": "Les angles où l’emploi et les compétences deviennent décisifs",
          "intro": "La page met d’abord en avant les angles emploi & compétences ouverts. Les lectures complémentaires ne s’affichent que lorsqu’elles appartiennent à la même conversation et au même contexte.",
          "panel": "Ces positions ne demandent pas de commenter une situation sociale particulière ; elles proposent d’éclairer les arbitrages humains, métiers et organisationnels qui se répètent dans les trajectoires industrielles."
        },
        "preparation": {
          "titleHtml": "Beaucoup arrivent avec une expérience RH, sociale ou organisationnelle. <em style=\"color:rgba(240,236,230,0.55);\">Ils repartent avec une lecture industrielle défendable.</em>",
          "intro": "La préparation éditoriale transforme une expérience de direction RH, de transformation, de formation, de conseil ou de droit social en lecture située : claire, non intrusive et utile pour d’autres décideurs industriels."
        },
        "dimensions": [
          {
            "num": "01",
            "title": "Transformation en cours / contexte",
            "text": "Qualifier ce qui change concrètement : montée en charge, pénurie de compétences, transformation des métiers, transmission difficile, réorganisation ou soutenabilité du travail."
          },
          {
            "num": "02",
            "title": "Acteurs concernés",
            "text": "Identifier les acteurs impactés : salariés, managers, RH, production, maintenance, qualité, QHSE, formation, direction industrielle, partenaires sociaux, fournisseurs ou territoire."
          },
          {
            "num": "03",
            "title": "Arbitrages emploi & compétences",
            "text": "Rendre visibles les choix réels : recruter, former, transmettre, automatiser, réorganiser, externaliser, sécuriser, ralentir, accélérer ou transformer les métiers."
          },
          {
            "num": "04",
            "title": "Défis & opportunités",
            "text": "Mettre en regard ce que la situation fragilise et ce qu’elle peut ouvrir : compétences mieux sécurisées, collectifs plus robustes, métiers mieux adaptés ou trajectoire sociale plus lisible."
          },
          {
            "num": "05",
            "title": "Vision attendue",
            "text": "Formuler une lecture située de ce que l’expérience RH, sociale, formation ou conseil permet de reconnaître avant que la tension humaine ne devienne un blocage industriel."
          },
          {
            "num": "06",
            "title": "Échelle d’analyse",
            "text": "Situer la lecture à la bonne échelle : poste, atelier, site, bassin d’emploi, entreprise, filière, chaîne de sous-traitance, territoire ou trajectoire industrielle."
          }
        ],
        "dimensionsPanel": "Ce travail ne vous demande pas d’exposer votre organisation. Il donne une forme claire à ce que votre position vous a appris à reconnaître dans les tensions d’emploi, de compétences et d’organisation du travail.",
        "process": [
          {
            "num": "01",
            "title": "L'échange de qualification",
            "text": "15 minutes pour vérifier si votre lecture correspond à un angle disponible. Aucun dossier social identifiable, chiffre interne ou situation sensible à exposer.",
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
            "text": "En Plateau travaille avec vous, et avec vos équipes communication, juridique, RH ou corporate si nécessaire, pour transformer votre lecture en position claire, non intrusive et publiquement défendable."
          }
        ],
        "guarantees": [
          {
            "accent": true,
            "title": "Aucun dossier social identifiable à exposer",
            "text": "L’échange porte sur les mécanismes d’emploi, de compétences et d’organisation du travail, pas sur un plan, un site, une négociation ou une situation interne identifiable."
          },
          {
            "accent": true,
            "title": "Aucun engagement avant le dossier de positionnement",
            "text": "Vous ne vous engagez pas lors de l’échange éditorial. La position proposée est qualifiée avant toute validation."
          },
          {
            "title": "Pas de discours marque employeur attendu",
            "text": "La contribution vise une lecture située des contraintes humaines et organisationnelles de l’industrie, non une présentation RH, une méthode ou une offre."
          },
          {
            "title": "Une parole préparée avec vos équipes si nécessaire",
            "text": "La préparation peut intégrer vos contraintes RH, communication, juridiques, corporate ou de confidentialité."
          }
        ],
        "faq": [
          {
            "question": "Faut-il parler d’un plan social, d’un site ou d’une situation interne identifiable ?",
            "answer": "Non. L’enjeu n’est pas d’exposer une situation sensible, mais d’éclairer un mécanisme d’emploi, de compétences ou d’organisation du travail à partir de votre expérience."
          },
          {
            "question": "Cette lecture est-elle réservée aux DRH ?",
            "answer": "Non. Elle peut être portée par des directions RH, transformation, formation, QHSE, compétences, organisation, conseil RH, conseil en transformation, droit social ou restructuration."
          },
          {
            "question": "Peut-on préparer l’intervention avec les équipes communication, RH ou juridiques ?",
            "answer": "Oui. La prise de parole peut être préparée avec les équipes communication, RH, juridique ou corporate afin de garantir un niveau d’exposition maîtrisé."
          },
          {
            "question": "Faut-il arriver avec une position déjà formulée ?",
            "answer": "Non. L’échange éditorial sert précisément à vérifier l’angle, puis à transformer votre lecture en position claire, défendable et non intrusive."
          }
        ],
        "cta": {
          "title": "Votre lecture emploi & compétences peut éclairer ce qui fait tenir — ou fragilise — une trajectoire industrielle.",
          "text": "Un échange de 15 minutes — sans exposer de dossier social, sans situation identifiable, sans engagement — pour vérifier si votre angle a une place dans l’une des 12 positions avec lecture emploi & compétences ouvertes.",
          "deadline": "Comité éditorial : 15 juin 2026 · Les échanges précèdent la composition finale",
          "footnote": "Les positions emploi & compétences se ferment au fil de la composition éditoriale · Page non indexée"
        }
      }
    },
    "technologie-systemes": {
      "cycleCode": "IND",
      "readingType": "TECHNOLOGIQUE",
      "title": "Lecture technologie & systèmes — Cycle Industrie & transformation des territoires | En Plateau",
      "metaDescription": "Une place précise pour éclairer les arbitrages systèmes, automatisation, data, ERP, MES, OT/IT, interfaces, cybersécurité et architecture technique dans les trajectoires industrielles.",
      "navLabel": "Cycle Industrie · Lecture technologie & systèmes",
      "heroTitleHtml": "Votre lecture<br><em>éclaire</em><br>les systèmes qui font tenir<br>l’industrie réelle.",
      "heroLead": "Certaines trajectoires industrielles ne se jouent pas seulement dans l’outil physique, l’investissement ou l’organisation. Elles se jouent dans l’architecture des systèmes, les interfaces, l’automatisation, la donnée, le pilotage, l’OT/IT et la capacité à transformer sans ajouter de complexité.",
      "heroProfiles": [
        {
          "label": "Systèmes industriels · OT/IT · Data",
          "text": "Vous éclairez les arbitrages liés aux interfaces, ERP, MES, automatismes, data industrielle, cybersécurité, pilotage ou architecture de systèmes."
        },
        {
          "label": "Conseil · Ingénierie · Transformation digitale industrielle",
          "text": "Vous accompagnez des industriels sur la transformation des systèmes, l’automatisation, la performance digitale, l’architecture technique ou la refonte de process."
        }
      ],
      "valueSection": {
        "title": "Faire reconnaître les systèmes comme conditions réelles de pilotage industriel",
        "intro": "Une lecture technologie & systèmes ne consiste pas à présenter une solution digitale. Elle permet de montrer comment les systèmes, les interfaces, l’automatisation, la donnée et l’architecture technique deviennent des conditions concrètes de capacité, qualité, fiabilité, continuité et transformation industrielle.",
        "cards": [
          {
            "label": "Cabinet conseil · Ingénierie · Transformation digitale",
            "title": "Démontrer une expertise réellement connectée à l’industrie",
            "text": "Cette prise de parole permet de montrer une lecture qui dépasse la transformation digitale générique pour éclairer les arbitrages concrets des systèmes industriels : interfaces, flux, architecture, automatismes, données, pilotage et continuité. Elle valorise une expertise capable de relier technologie et décision industrielle, tout en renforçant la crédibilité du cabinet auprès de dirigeants qui cherchent des lectures situées, non des discours de solution."
          },
          {
            "label": "Groupe industriel · Systèmes · Transformation",
            "title": "Montrer que la complexité technologique est pilotée",
            "text": "Cette lecture permet à une organisation industrielle de montrer qu’elle sait traiter les systèmes comme des conditions de pilotage, de fiabilité et de transformation, et non comme de simples fonctions support. Elle valorise les équipes systèmes, digital manufacturing, data, OT/IT ou architecture industrielle, tout en rassurant clients, donneurs d’ordre, investisseurs et partenaires sur la capacité de l’entreprise à maîtriser ses dépendances techniques."
          },
          {
            "label": "ETI industrielle · Industrial tech · Automatisation",
            "title": "Rendre visible la technologie quand elle transforme vraiment l’outil",
            "text": "Cette prise de parole permet de montrer comment automatisation, contrôle-commande, capteurs, MES, interfaces ou data peuvent soutenir la capacité, la qualité et la fiabilité — mais aussi créer de nouvelles limites lorsqu’ils sont mal articulés au process. Elle valorise une expertise située, proche de l’outil, des lignes et des flux, tout en montrant que l’entreprise sait distinguer l’ajout technologique utile de la complexité supplémentaire."
          },
          {
            "label": "ERP · MES · Data · OT/IT · Cybersécurité",
            "title": "Faire reconnaître les dépendances invisibles du pilotage industriel",
            "text": "Cette lecture permet d’éclairer les points de bascule où les systèmes deviennent un facteur de continuité, de risque ou de transformation : données fiables, interfaces métiers, architecture OT/IT, cybersécurité, intégration inter-sites, pilotage temps réel. Elle valorise les fonctions techniques qui rendent l’activité lisible et pilotable, tout en montrant que l’entreprise sait sécuriser les dépendances invisibles qui conditionnent sa trajectoire."
          }
        ]
      },
      "copy": {
        "positionsCountNote": "7 positions avec lecture technologie & systèmes sont ouvertes dans le cycle Industrie.",
        "rarityBlock": {
          "kicker": "Rareté éditoriale",
          "title": "7 positions avec lecture technologie & systèmes sont ouvertes dans le cycle Industrie.",
          "text": "Chaque position correspond à un angle contextualisé. Une position avec lecture technologie & systèmes ne peut être signée qu’une seule fois : lorsqu’un acteur est retenu sur l’angle, les autres prétendants basculent hors de cette position."
        },
        "heroNoteHtml": "Aucune architecture interne à exposer &nbsp;·&nbsp; Aucun incident, schéma SI/OT ou dossier sensible à commenter &nbsp;·&nbsp; 15 min pour qualifier votre angle<br>Préparation possible avec les équipes communication, juridique, SI, cybersécurité ou corporate de votre organisation",
        "heroCardTitle": "Votre lecture technologie & systèmes a-t-elle sa place dans l’une de ces conversations ?",
        "heroCardText": "En 15 minutes, nous vérifions si votre lecture correspond à une position encore disponible — sans exposer d’architecture interne, de plan SI/OT, de vulnérabilité, d’incident ou de dossier confidentiel.",
        "audience": {
          "title": "Cette lecture technologie & systèmes vous est-elle destinée ?",
          "yesTitle": "Vous portez probablement une lecture pertinente si…",
          "noTitle": "Moins adapté si…",
          "yesItems": [
            "Vous savez relier systèmes, automatismes, interfaces, data, ERP, MES, OT/IT ou cybersécurité à des arbitrages industriels réels.",
            "Vous êtes direction systèmes industriels, digital manufacturing, architecture industrielle, automatisation, data industrielle, conseil transformation, ingénierie ou cybersécurité industrielle.",
            "Votre lecture porte sur des seuils : architecture qui limite la croissance, interfaces qui fragmentent le pilotage, dette système, refonte nécessaire, automatisation insuffisante ou complexité devenue risquée.",
            "Vous pouvez éclairer un mécanisme technologique sans exposer d’architecture interne, de schéma SI/OT, de vulnérabilité, d’incident ou de chiffre confidentiel."
          ],
          "noItems": [
            "Votre contribution vise surtout à présenter une solution, une plateforme, une méthode ou une offre.",
            "Votre lecture reste trop générale pour être rattachée à un arbitrage industriel précis.",
            "Vous souhaitez commenter une architecture interne, une faille, un incident ou un plan confidentiel.",
            "Votre approche ne relie pas les systèmes aux décisions industrielles qui en découlent."
          ],
          "panel": "La lecture technologie & systèmes ne consiste pas à raconter une transformation digitale. Elle consiste à éclairer les mécanismes techniques, systémiques et organisationnels qui rendent une trajectoire industrielle tenable, fragile ou à réarbitrer."
        },
        "conversations": {
          "title": "Les angles où les systèmes deviennent décisifs",
          "intro": "La page met d’abord en avant les angles technologie & systèmes ouverts. Les lectures complémentaires ne s’affichent que lorsqu’elles appartiennent à la même conversation et au même contexte.",
          "panel": "Ces positions ne demandent pas de commenter une architecture interne ; elles proposent d’éclairer les arbitrages technologiques et systémiques qui se répètent dans les trajectoires industrielles."
        },
        "preparation": {
          "titleHtml": "Beaucoup arrivent avec une expertise systèmes. <em style=\"color:rgba(240,236,230,0.55);\">Ils repartent avec une lecture industrielle défendable.</em>",
          "intro": "La préparation éditoriale transforme une expertise systèmes, data, automatisation, architecture, OT/IT ou transformation digitale industrielle en lecture située : claire, non intrusive et utile pour d’autres décideurs industriels."
        },
        "dimensions": [
          {
            "num": "01",
            "title": "Transformation en cours / contexte",
            "text": "Qualifier ce qui change concrètement : montée en volume, dette système, fragmentation des interfaces, limites d’automatisation, besoin de refonte, cybersécurité ou pilotage insuffisant."
          },
          {
            "num": "02",
            "title": "Acteurs concernés",
            "text": "Identifier les acteurs impactés : direction industrielle, SI, OT, production, maintenance, qualité, supply chain, data, cybersécurité, finance, clients ou partenaires."
          },
          {
            "num": "03",
            "title": "Arbitrages systèmes",
            "text": "Rendre visibles les choix réels : optimiser, intégrer, automatiser, refondre, standardiser, sécuriser, connecter les sites, réorganiser les interfaces ou transformer le process."
          },
          {
            "num": "04",
            "title": "Défis & opportunités",
            "text": "Mettre en regard ce que la situation fragilise et ce qu’elle peut ouvrir : pilotage plus fiable, architecture plus robuste, données mieux exploitables ou transformation mieux sécurisée."
          },
          {
            "num": "05",
            "title": "Vision attendue",
            "text": "Formuler une lecture située de ce que votre expérience systèmes permet de reconnaître avant que la complexité technique ne devienne un verrou industriel."
          },
          {
            "num": "06",
            "title": "Échelle d’analyse",
            "text": "Situer la lecture à la bonne échelle : ligne, atelier, site, SI industriel, réseau d’usines, chaîne de valeur, architecture OT/IT ou trajectoire d’entreprise."
          }
        ],
        "dimensionsPanel": "Ce travail ne vous demande pas d’exposer votre organisation. Il donne une forme claire à ce que votre position vous a appris à reconnaître dans les contraintes de systèmes, interfaces, data, automatisation et architecture industrielle.",
        "process": [
          {
            "num": "01",
            "title": "L'échange de qualification",
            "text": "15 minutes pour vérifier si votre lecture correspond à un angle disponible. Aucun schéma interne, incident, plan SI/OT, vulnérabilité ou dossier sensible à exposer.",
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
            "text": "En Plateau travaille avec vous, et avec vos équipes communication, juridique, SI, cybersécurité ou corporate si nécessaire, pour transformer votre lecture en position claire, non intrusive et publiquement défendable."
          }
        ],
        "guarantees": [
          {
            "accent": true,
            "title": "Aucune architecture interne à exposer",
            "text": "L’échange porte sur les mécanismes technologiques et systémiques, pas sur un schéma SI/OT, un fournisseur, une faille, un incident ou un plan confidentiel."
          },
          {
            "accent": true,
            "title": "Aucun engagement avant le dossier de positionnement",
            "text": "Vous ne vous engagez pas lors de l’échange éditorial. La position proposée est qualifiée avant toute validation."
          },
          {
            "title": "Pas de démonstration de solution attendue",
            "text": "La contribution vise une lecture située des contraintes technologiques de l’industrie, non une présentation d’outil, de plateforme, de méthode ou d’offre."
          },
          {
            "title": "Une parole préparée avec vos équipes si nécessaire",
            "text": "La préparation peut intégrer vos contraintes SI, cybersécurité, communication, juridiques, corporate ou de confidentialité."
          }
        ],
        "faq": [
          {
            "question": "Faut-il parler d’un système, d’une architecture ou d’un incident identifiable ?",
            "answer": "Non. L’enjeu n’est pas d’exposer une architecture interne ou un incident, mais d’éclairer un mécanisme technologique ou systémique à partir de votre expérience."
          },
          {
            "question": "Cette lecture est-elle réservée aux DSI ?",
            "answer": "Non. Elle peut être portée par des directions systèmes industriels, digital manufacturing, automatisation, data industrielle, architecture OT/IT, ingénierie, cybersécurité ou conseil transformation."
          },
          {
            "question": "Peut-on préparer l’intervention avec les équipes communication, SI ou juridiques ?",
            "answer": "Oui. La prise de parole peut être préparée avec les équipes communication, SI, cybersécurité, juridique ou corporate afin de garantir un niveau d’exposition maîtrisé."
          },
          {
            "question": "Faut-il arriver avec une position déjà formulée ?",
            "answer": "Non. L’échange éditorial sert précisément à vérifier l’angle, puis à transformer votre lecture en position claire, défendable et non intrusive."
          }
        ],
        "cta": {
          "title": "Votre lecture des systèmes peut éclairer ce qui rend une trajectoire industrielle pilotable — ou non.",
          "text": "Un échange de 15 minutes — sans exposer d’architecture interne, sans incident identifiable, sans engagement — pour vérifier si votre angle a une place dans l’une des 7 positions avec lecture technologie & systèmes ouvertes.",
          "deadline": "Comité éditorial : 15 juin 2026 · Les échanges précèdent la composition finale",
          "footnote": "Les positions technologie & systèmes se ferment au fil de la composition éditoriale · Page non indexée"
        }
      }
    },
    "technologie": {
      "aliasOf": "technologie-systemes"
    },
    "territorial": {
      "cycleCode": "IND",
      "readingType": "TERRITORIALE",
      "title": "Lecture territoriale — Cycle Industrie & transformation des territoires | En Plateau",
      "metaDescription": "Une place précise pour éclairer les arbitrages d’ancrage industriel, foncier, réseaux, infrastructures, acceptabilité, reconversion et redéploiement de sites.",
      "navLabel": "Cycle Industrie · Lecture territoriale",
      "heroTitleHtml": "Votre lecture<br><em>éclaire</em><br>les conditions d’ancrage<br>de l’industrie.",
      "heroLead": "Certaines trajectoires industrielles ne tiennent pas seulement par l’outil, les compétences ou les ressources. Elles tiennent par un territoire : foncier, réseaux, logistique, bassin d’emploi, acceptabilité, portage local, infrastructures et capacité à accompagner l’activité dans la durée.",
      "heroProfiles": [
        {
          "label": "Territoires · Aménagement · Reconversion",
          "text": "Vous éclairez les conditions d’implantation, de maintien, de redéploiement ou de reconversion industrielle : foncier, réseaux, portage local, acceptabilité, attractivité."
        },
        {
          "label": "Infrastructures · Financeurs · Cadre territorial",
          "text": "Vous accompagnez des trajectoires industrielles où réseaux, eau, énergie, logistique, urbanisme, financement ou droit territorial deviennent déterminants."
        }
      ],
      "valueSection": {
        "title": "Faire reconnaître le territoire comme condition réelle de trajectoire industrielle",
        "intro": "Une lecture territoriale ne consiste pas à parler d’attractivité de manière générale. Elle permet de montrer comment le foncier, les réseaux, les infrastructures, les compétences, les ressources locales, l’acceptabilité ou le portage territorial deviennent des conditions concrètes d’implantation, de maintien ou de transformation industrielle.",
        "cards": [
          {
            "label": "Conseil territorial · Aménagement · Revitalisation",
            "title": "Relier stratégie industrielle et ingénierie territoriale",
            "text": "Cette prise de parole permet de montrer que l’implantation, le maintien ou le redéploiement industriel ne se joue pas seulement dans l’usine, mais dans la qualité des conditions territoriales : foncier, réseaux, logistique, acceptabilité, compétences, portage local. Elle valorise une expertise capable de relier stratégie industrielle et ingénierie territoriale, tout en montrant aux entreprises, financeurs et collectivités qu’une trajectoire industrielle ne tient que si son environnement réel est correctement lu."
          },
          {
            "label": "Opérateurs industriels · Infrastructures · Eau · Énergie · Réseaux",
            "title": "Rendre visibles les dépendances matérielles d’un site",
            "text": "Cette lecture permet à une entreprise ou un opérateur d’infrastructure de montrer que les contraintes territoriales, énergétiques, hydriques, logistiques ou foncières sont pilotées comme des conditions de continuité industrielle. Elle valorise les fonctions qui rendent visibles les dépendances matérielles d’un site, tout en rassurant partenaires, clients, financeurs ou institutions sur la capacité de l’organisation à anticiper les limites physiques de son ancrage."
          },
          {
            "label": "Financeurs · Institutions économiques · Portage parapublic",
            "title": "Montrer comment un territoire sécurise une trajectoire industrielle",
            "text": "Cette prise de parole permet de montrer comment les financeurs, opérateurs publics ou parapublics peuvent sécuriser une trajectoire industrielle sans se limiter à un rôle d’accompagnement général. Elle valorise une lecture capable de relier investissement, foncier, reconversion, attractivité, infrastructures et risque territorial, tout en montrant aux industriels qu’un territoire peut devenir un levier réel de transformation lorsqu’il est porté avec méthode."
          },
          {
            "label": "Juridique · Urbanisme · Risques · Acceptabilité",
            "title": "Sécuriser les conditions territoriales de la décision industrielle",
            "text": "Cette lecture permet d’éclairer les moments où le cadre juridique, foncier, environnemental, urbanistique ou social conditionne réellement l’implantation, le maintien ou la reconversion d’un site. Elle valorise une expertise capable de sécuriser des trajectoires sensibles sans exposer de dossier identifiable, tout en montrant que l’entreprise ou le territoire sait traiter les contraintes réglementaires et d’acceptabilité comme des conditions de décision industrielle."
          }
        ]
      },
      "copy": {
        "positionsCountNote": "7 positions avec lecture territoriale sont ouvertes dans le cycle Industrie.",
        "rarityBlock": {
          "kicker": "Rareté éditoriale",
          "title": "7 positions avec lecture territoriale sont ouvertes dans le cycle Industrie.",
          "text": "Chaque position correspond à un angle contextualisé. Une position avec lecture territoriale ne peut être signée qu’une seule fois : lorsqu’un acteur est retenu sur l’angle, les autres prétendants basculent hors de cette position."
        },
        "heroNoteHtml": "Aucun dossier d’implantation à exposer &nbsp;·&nbsp; Aucun site sensible, arbitrage foncier ou échange confidentiel à commenter &nbsp;·&nbsp; 15 min pour qualifier votre angle<br>Préparation possible avec les équipes communication, juridique, affaires publiques ou corporate de votre organisation",
        "heroCardTitle": "Votre lecture territoriale a-t-elle sa place dans l’une de ces conversations ?",
        "heroCardText": "En 15 minutes, nous vérifions si votre lecture correspond à une position encore disponible — sans exposer de dossier d’implantation, de négociation foncière, de décision publique ou de situation confidentielle.",
        "audience": {
          "title": "Cette lecture territoriale vous est-elle destinée ?",
          "yesTitle": "Vous portez probablement une lecture pertinente si…",
          "noTitle": "Moins adapté si…",
          "yesItems": [
            "Vous savez relier foncier, réseaux, logistique, infrastructures, bassin d’emploi, ressources locales ou acceptabilité à des arbitrages industriels réels.",
            "Vous êtes conseil territorial, opérateur d’infrastructure, financeur, acteur parapublic, expert reconversion, urbanisme, risques, droit territorial ou direction industrielle exposée.",
            "Votre lecture porte sur des seuils : territoire qui accompagne ou limite la croissance, surcoûts d’ancrage, contraintes de localisation, redéploiement, reconversion ou acceptabilité.",
            "Vous pouvez éclairer un mécanisme territorial sans exposer de dossier d’implantation, de site sensible, de décision publique ou de négociation confidentielle."
          ],
          "noItems": [
            "Votre contribution vise surtout à promouvoir un territoire, une politique d’attractivité ou une offre d’accompagnement.",
            "Votre lecture reste trop générale pour être rattachée à un arbitrage industriel précis.",
            "Vous souhaitez commenter un dossier d’implantation, une décision publique, un projet foncier ou un site identifiable.",
            "Votre approche ne relie pas les conditions territoriales aux décisions industrielles qui en découlent."
          ],
          "panel": "La lecture territoriale ne consiste pas à présenter un territoire. Elle consiste à éclairer les conditions d’ancrage qui rendent une trajectoire industrielle tenable, fragile ou à réarbitrer."
        },
        "conversations": {
          "title": "Les angles où le territoire devient décisif",
          "intro": "La page met d’abord en avant les angles territoriaux ouverts. Les lectures complémentaires ne s’affichent que lorsqu’elles appartiennent à la même conversation et au même contexte.",
          "panel": "Ces positions ne demandent pas de commenter un dossier territorial ; elles proposent d’éclairer les arbitrages d’ancrage, de localisation, de maintien ou de redéploiement qui se répètent dans les trajectoires industrielles."
        },
        "preparation": {
          "titleHtml": "Beaucoup arrivent avec une expertise territoriale. <em style=\"color:rgba(240,236,230,0.55);\">Ils repartent avec une lecture industrielle défendable.</em>",
          "intro": "La préparation éditoriale transforme une expertise territoriale, infrastructurelle, financière, juridique ou industrielle en lecture située : claire, non intrusive et utile pour d’autres décideurs industriels."
        },
        "dimensions": [
          {
            "num": "01",
            "title": "Transformation en cours / contexte",
            "text": "Qualifier ce qui change concrètement : montée en capacité, maintien sous contrainte, redéploiement, reconversion, tension foncière, réseaux, ressources, acceptabilité ou infrastructures."
          },
          {
            "num": "02",
            "title": "Acteurs concernés",
            "text": "Identifier les acteurs impactés : entreprise, site, salariés, financeurs, collectivités, aménageurs, opérateurs réseaux, fournisseurs, clients, bassin d’emploi ou riverains."
          },
          {
            "num": "03",
            "title": "Arbitrages territoriaux",
            "text": "Rendre visibles les choix réels : s’ancrer, investir, compenser des surcoûts, redéployer, reconvertir, changer de localisation, sécuriser le foncier ou négocier les conditions locales."
          },
          {
            "num": "04",
            "title": "Défis & opportunités",
            "text": "Mettre en regard ce que la situation fragilise et ce qu’elle peut ouvrir : ancrage mieux sécurisé, territoire plus lisible, trajectoire de site plus crédible ou reconversion mieux portée."
          },
          {
            "num": "05",
            "title": "Vision attendue",
            "text": "Formuler une lecture située de ce que votre expérience territoriale permet de reconnaître avant que les conditions d’ancrage ne deviennent un verrou industriel."
          },
          {
            "num": "06",
            "title": "Échelle d’analyse",
            "text": "Situer la lecture à la bonne échelle : site, foncier, zone d’activité, bassin d’emploi, territoire, réseau d’infrastructures, filière ou trajectoire de redéploiement."
          }
        ],
        "dimensionsPanel": "Ce travail ne vous demande pas d’exposer votre organisation. Il donne une forme claire à ce que votre position vous a appris à reconnaître dans les contraintes d’ancrage, de localisation, de maintien ou de redéploiement industriel.",
        "process": [
          {
            "num": "01",
            "title": "L'échange de qualification",
            "text": "15 minutes pour vérifier si votre lecture correspond à un angle disponible. Aucun dossier d’implantation, site sensible, négociation foncière ou décision publique à exposer.",
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
            "text": "En Plateau travaille avec vous, et avec vos équipes communication, juridique, affaires publiques ou corporate si nécessaire, pour transformer votre lecture en position claire, non intrusive et publiquement défendable."
          }
        ],
        "guarantees": [
          {
            "accent": true,
            "title": "Aucun dossier territorial à exposer",
            "text": "L’échange porte sur les mécanismes d’ancrage et de redéploiement, pas sur un projet foncier, une négociation, une décision publique ou un site identifiable."
          },
          {
            "accent": true,
            "title": "Aucun engagement avant le dossier de positionnement",
            "text": "Vous ne vous engagez pas lors de l’échange éditorial. La position proposée est qualifiée avant toute validation."
          },
          {
            "title": "Pas de discours d’attractivité attendu",
            "text": "La contribution vise une lecture située des conditions territoriales de l’industrie, non une présentation de territoire, de dispositif ou d’offre d’accompagnement."
          },
          {
            "title": "Une parole préparée avec vos équipes si nécessaire",
            "text": "La préparation peut intégrer vos contraintes communication, juridiques, affaires publiques, corporate ou de confidentialité."
          }
        ],
        "faq": [
          {
            "question": "Faut-il parler d’un projet territorial ou d’un site identifiable ?",
            "answer": "Non. L’enjeu n’est pas d’exposer un dossier, mais d’éclairer un mécanisme territorial à partir de votre expérience."
          },
          {
            "question": "Cette lecture est-elle réservée aux acteurs publics ?",
            "answer": "Non. Elle peut être portée par des conseils, opérateurs d’infrastructures, financeurs, acteurs parapublics, experts juridiques, directions industrielles ou spécialistes de la reconversion."
          },
          {
            "question": "Peut-on préparer l’intervention avec les équipes communication, affaires publiques ou juridiques ?",
            "answer": "Oui. La prise de parole peut être préparée avec les équipes communication, affaires publiques, juridique ou corporate afin de garantir un niveau d’exposition maîtrisé."
          },
          {
            "question": "Faut-il arriver avec une position déjà formulée ?",
            "answer": "Non. L’échange éditorial sert précisément à vérifier l’angle, puis à transformer votre lecture en position claire, défendable et non intrusive."
          }
        ],
        "cta": {
          "title": "Votre lecture territoriale peut éclairer ce qui rend une trajectoire industrielle ancrée — ou fragile.",
          "text": "Un échange de 15 minutes — sans exposer de dossier territorial, sans site identifiable, sans engagement — pour vérifier si votre angle a une place dans l’une des 7 positions avec lecture territoriale ouvertes.",
          "deadline": "Comité éditorial : 15 juin 2026 · Les échanges précèdent la composition finale",
          "footnote": "Les positions territoriales se ferment au fil de la composition éditoriale · Page non indexée"
        }
      }
    },
    "territoires-ancrage": {
      "aliasOf": "territorial"
    },
    "territoriale": {
      "aliasOf": "territorial"
    },
    "operationnelle": {
      "aliasOf": "operations"
    },
    "rh": {
      "aliasOf": "emploi-competences"
    },
    "ressources": {
      "aliasOf": "decarbonation-energie-soutenabilite"
    },
    "technologique": {
      "aliasOf": "technologie-systemes"
    }
  }
};


/* En Plateau — Renderer landing courte par code angle — V29 */
(function(data) {
  'use strict';

  if (!data || !data.cycles || !data.cycles.length) return;

  var cycle = data.cycles.find(function(c) { return c.code === 'IND'; }) || data.cycles[0];
  var angles = (cycle && cycle.angles) || [];
  var conversations = (cycle && cycle.conversations) || [];
  var contexts = (cycle && cycle.contexts) || [];
  var readings = data.readingTypes || {};

  var BENEFITS = {
    STRATEGIQUE: [
      { title: 'Installer votre lecture dans un cycle sélectif', short: 'Prendre place parmi les voix identifiées pour éclairer une trajectoire industrielle.', detail: 'La contribution ne vous expose pas comme témoin d’un cas interne : elle installe votre lecture d’un mécanisme que d’autres décideurs doivent comprendre.' },
      { title: 'Transformer une conviction en position', short: 'Passer d’une intuition ou d’une expérience à une formulation publiquement tenable.', detail: 'Le cadrage éditorial aide à clarifier ce que votre position permet de voir, ce que cela oblige à décider et à quelle échelle la lecture devient pertinente.' },
      { title: 'Ne pas subir le récit industriel', short: 'Formuler votre lecture avant qu’elle soit réduite à un discours générique.', detail: 'L’enjeu est de faire apparaître votre compréhension des seuils, arbitrages et trajectoires, sans basculer dans une parole corporate ou promotionnelle.' },
      { title: 'Produire une trace exploitable', short: 'Disposer d’une contribution utile auprès de dirigeants, partenaires, institutions ou investisseurs.', detail: 'L’émission et son prolongement écrit peuvent servir de support de discussion qualifié dans votre écosystème professionnel.' }
    ],
    FINANCIERE: [
      { title: 'Rendre lisible ce qui devient soutenable — ou non', short: 'Éclairer les seuils économiques que les acteurs industriels ne peuvent plus différer.', detail: 'Votre lecture permet de montrer comment marge, CAPEX, dette, risque, coûts ou valeur déplacent la décision industrielle.' },
      { title: 'Déplacer la discussion du chiffre vers l’arbitrage', short: 'Parler de mécanismes économiques sans exposer de données sensibles.', detail: 'La contribution ne demande ni chiffres internes ni dossiers confidentiels : elle porte sur les critères qui rendent une trajectoire défendable ou fragile.' },
      { title: 'Installer une lecture de finance stratégique', short: 'Montrer que la finance ne constate pas seulement : elle oriente la trajectoire.', detail: 'La page permet de formuler une position sur ce qui peut encore être financé, transformé, différé ou réarbitré.' },
      { title: 'Produire un support de dialogue qualifié', short: 'Créer une trace exploitable auprès de dirigeants, investisseurs, partenaires et institutions.', detail: 'Votre position devient plus claire, plus partageable et plus difficile à confondre avec une expertise financière générique.' }
    ],
    JURIDIQUE: [
      { title: 'Montrer quand le cadre devient décisif', short: 'Éclairer les moments où droit, norme, conformité ou responsabilité changent la décision.', detail: 'La contribution permet de montrer que le cadre n’est pas un décor : il peut sécuriser, ralentir, contraindre ou requalifier une trajectoire industrielle.' },
      { title: 'Sécuriser une parole sensible', short: 'Formuler une lecture exigeante sans exposer de dossier confidentiel.', detail: 'Le cadrage permet d’aborder les mécanismes juridiques ou réglementaires à un niveau publiquement tenable.' },
      { title: 'Passer du commentaire juridique à la position', short: 'Faire apparaître ce que votre lecture rend visible pour les décideurs.', detail: 'La contribution ne se limite pas à expliquer une règle : elle éclaire les arbitrages qu’elle rend nécessaires.' },
      { title: 'Produire une trace utile au dialogue public', short: 'Disposer d’un contenu réutilisable auprès de directions, institutions et partenaires.', detail: 'Votre lecture devient identifiable dans un cycle structuré, sans être réduite à une prise de parole technique.' }
    ],
    OPERATIONNELLE: [
      { title: 'Rendre visible ce que le terrain sait avant les tableaux', short: 'Éclairer les seuils de capacité, flux, qualité, maintenance ou organisation.', detail: 'Votre lecture permet de comprendre ce qui tient réellement dans l’exécution — et ce qui se dégrade avant d’être reconnu comme arbitrage.' },
      { title: 'Transformer l’expérience opérationnelle en position', short: 'Passer d’un vécu de production à une lecture publiquement formulable.', detail: 'Le cadrage éditorial aide à faire ressortir les mécanismes utiles à d’autres acteurs de décision.' },
      { title: 'Éviter la parole technique trop étroite', short: 'Relier l’exécution à la trajectoire industrielle d’ensemble.', detail: 'Votre contribution montre comment les contraintes opérationnelles déplacent les arbitrages stratégiques, financiers ou organisationnels.' },
      { title: 'Produire un contenu utile aux décideurs', short: 'Faire circuler une lecture issue du réel industriel.', detail: 'L’émission et le prolongement écrit rendent cette lecture exploitable au-delà du cercle opérationnel immédiat.' }
    ],
    TECHNOLOGIQUE: [
      { title: 'Distinguer la transformation réelle de la simple mise en récit', short: 'Montrer quand systèmes, données, interfaces ou automatisation changent vraiment l’outil.', detail: 'La contribution permet de rendre lisibles les seuils où la technologie devient condition de décision, et non simple solution ajoutée.' },
      { title: 'Nommer les limites avant qu’elles bloquent', short: 'Identifier les architectures, interfaces ou dettes techniques qui conditionnent la trajectoire.', detail: 'Votre lecture aide à reconnaître le moment où l’outil ne peut plus seulement être optimisé.' },
      { title: 'Relier technologie et arbitrage industriel', short: 'Sortir d’un discours d’innovation pour parler de capacité, qualité, pilotage et risque.', detail: 'La position attendue porte sur les mécanismes de décision, pas sur une démonstration produit ou un cas client.' },
      { title: 'Produire une trace crédible', short: 'Installer une lecture technologique compréhensible par des décideurs non spécialistes.', detail: 'Le cadrage permet de tenir une parole précise sans devenir trop technique ou promotionnelle.' }
    ],
    RH_COMPETENCES: [
      { title: 'Rendre visible le temps humain de la transformation', short: 'Éclairer recrutement, transmission, formation, gestes critiques et organisation du travail.', detail: 'Votre lecture montre que la trajectoire industrielle dépend aussi de compétences, de collectifs et de temps d’adaptation.' },
      { title: 'Formuler une position au-delà du sujet RH', short: 'Relier compétences et arbitrages industriels.', detail: 'La contribution évite la parole générique sur l’emploi pour montrer ce qui conditionne réellement la tenue d’une trajectoire.' },
      { title: 'Donner du poids à une lecture souvent sous-estimée', short: 'Faire apparaître les fragilités humaines avant qu’elles deviennent un blocage.', detail: 'Votre position permet d’éclairer les seuils où l’organisation ne peut plus absorber seule les tensions.' },
      { title: 'Produire un support réutilisable', short: 'Créer une trace utile auprès de dirigeants, équipes, partenaires et institutions.', detail: 'L’émission et le prolongement écrit donnent une forme claire à une lecture souvent difficile à objectiver publiquement.' }
    ],
    TERRITORIALE: [
      { title: 'Montrer ce que l’entreprise seule voit mal', short: 'Éclairer foncier, réseaux, logistique, acceptabilité, écosystème et ancrage.', detail: 'Votre contribution situe la trajectoire industrielle dans ses conditions territoriales réelles.' },
      { title: 'Relier industrie et décision publique', short: 'Faire apparaître les arbitrages partagés entre entreprises, territoires et acteurs publics.', detail: 'La lecture territoriale montre ce qui rend une transformation possible, coûteuse, acceptable ou fragile.' },
      { title: 'Éviter le récit hors-sol', short: 'Ancrer la transformation dans les contraintes et ressources locales.', detail: 'La position attendue permet de dépasser les généralités sur l’industrie pour parler de conditions concrètes.' },
      { title: 'Produire une trace utile aux écosystèmes', short: 'Créer un contenu partageable avec collectivités, industriels, financeurs et partenaires.', detail: 'La contribution rend visible la manière dont un territoire porte, limite ou transforme une trajectoire.' }
    ],
    ENERGIE_RESSOURCES: [
      { title: 'Traiter les ressources comme conditions de décision', short: 'Éclairer énergie, eau, carbone, utilités et contraintes physiques de production.', detail: 'Votre lecture montre quand les ressources cessent d’être un sujet périphérique pour devenir un arbitrage industriel central.' },
      { title: 'Sortir du discours RSE générique', short: 'Relier contraintes physiques, compétitivité, outil et trajectoire.', detail: 'La contribution permet de formuler une position industrielle sur la soutenabilité, sans communication décorative.' },
      { title: 'Nommer les seuils matériels', short: 'Identifier quand un site, un process ou une trajectoire doit être réarbitré.', detail: 'Votre position rend lisibles des limites que les décideurs économiques, politiques et financiers doivent comprendre.' },
      { title: 'Produire une trace stratégique', short: 'Installer une lecture exploitable auprès d’acteurs industriels et territoriaux.', detail: 'L’émission et le prolongement écrit donnent une forme publique à une question souvent trop technique ou sensible.' }
    ]
  };

  var READING_ALIASES = {
    STRATEGIQUE: 'Lecture stratégique',
    FINANCIERE: 'Lecture financière',
    JURIDIQUE: 'Lecture juridique / réglementaire',
    OPERATIONNELLE: 'Lecture opérationnelle',
    TECHNOLOGIQUE: 'Lecture technologie & systèmes',
    RH_COMPETENCES: 'Lecture RH / compétences',
    TERRITORIALE: 'Lecture territoriale',
    ENERGIE_RESSOURCES: 'Lecture ressources industrielles'
  };

  function byId(id) { return document.getElementById(id); }
  function setText(id, text) { var el = byId(id); if (el) el.textContent = text || ''; }
  function setHtml(id, html) { var el = byId(id); if (el) el.innerHTML = html || ''; }
  function esc(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
  function params() { return new URLSearchParams(window.location.search); }
  function getAngleCode() { return params().get('angle') || params().get('code') || ''; }
  function findAngle(code) { return angles.find(function(a) { return a.code === code; }); }
  function findConversation(code) { return conversations.find(function(c) { return c.code === code; }) || {}; }
  function findContext(code) { return contexts.find(function(c) { return c.code === code; }) || {}; }
  function readingLabel(code) { return (readings[code] && readings[code].label) || READING_ALIASES[code] || code || 'Lecture'; }
  function readingShort(code) { return (readings[code] && readings[code].shortLabel) || readingLabel(code); }
  function angleTitle(angle) { return (angle.formatCourt && angle.formatCourt.titrePublicCourt) || angle.titreAngle || angle.questionEditoriale || ''; }
  function calUrl(angle, cta) {
    var src = params().get('src') || 'lp-industrie-angle';
    return 'https://cal.com/en-plateau/echange-editorial?src=' + encodeURIComponent(src) + '&cta=' + encodeURIComponent(cta || 'cta') + '&angle=' + encodeURIComponent(angle.code || '');
  }
  function updateCtas(angle) {
    ['heroCta','angleCta','processCta','footerCta'].forEach(function(id) {
      var el = byId(id);
      if (el) el.href = calUrl(angle, id.replace('Cta','').toLowerCase() || 'cta');
    });
  }

  function renderHero(angle, conversation, context) {
    setText('heroKicker', 'Cycle Industrie · ' + (context.label || ''));
    setText('heroTitle', angleTitle(angle));
    setText('heroPromise', 'Vous venez avec une expérience, une conviction ou une lecture. Vous repartez avec une position claire, située et publiquement défendable.');
    setText('heroCardTitle', 'Qualifier cet angle');
    setText('heroCardText', '15 minutes pour vérifier si votre lecture peut prendre place dans le cycle, sans dossier à préparer ni engagement à ce stade.');
    setText('heroDeadline', 'Prochain comité éditorial : 15 juin 2026');
    document.title = angleTitle(angle) + ' | En Plateau';
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Contribution En Plateau — ' + readingLabel(angle.typeLecture) + ' · ' + (context.label || '') + ' · ' + angleTitle(angle));
  }

  function renderWhy(angle) {
    setText('whyIntro', 'Votre profil a été identifié parce que cet angle appelle une lecture située : une manière de voir les seuils, les tensions et les arbitrages que d’autres acteurs rencontrent déjà, sans toujours pouvoir les formuler.');
    var grid = byId('benefitGrid');
    if (!grid) return;
    var list = BENEFITS[angle.typeLecture] || BENEFITS.STRATEGIQUE;
    grid.innerHTML = list.map(function(item) {
      return '<article class="benefit-card" tabindex="0">' +
        '<h3>' + esc(item.title) + '</h3>' +
        '<p class="benefit-short">' + esc(item.short) + '</p>' +
        '<p class="benefit-detail">' + esc(item.detail) + '</p>' +
      '</article>';
    }).join('');
  }

  function renderAngle(angle, conversation, context) {
    setText('angleKicker', readingLabel(angle.typeLecture) + ' · ' + (context.label || '') + ' · ' + (conversation.title || ''));
    setText('angleTitle', angleTitle(angle));
    setText('angleIntro', angle.questionActivation || angle.introMecanisme || '');
    setText('pointBascule', angle.pointBascule || '');
    setText('tensionArbitrage', angle.tensionArbitrage || '');
    setText('angleMeta', readingLabel(angle.typeLecture) + ' · ' + (angle.code || ''));
    setText('angleProfiles', (angle.primaryProfiles || []).slice(0, 6).join(' · '));
  }

  function renderProcess(angle) {
    var steps = [
      { n: '01', title: 'Échange éditorial', text: '15 minutes pour qualifier la pertinence de l’angle et votre niveau de lecture.' },
      { n: '02', title: 'Note de positionnement', text: 'Si la suite a du sens, une note précise l’angle, les supports et les conditions de production.' },
      { n: '03', title: 'Comité éditorial', text: 'La position peut être soumise au prochain comité. L’accord financier ne vaut pas acceptation automatique.' },
      { n: '04', title: 'Préparation & production', text: 'La parole est préparée avec vous, et avec vos équipes communication ou juridiques si nécessaire.' }
    ];
    var row = byId('processRow');
    if (row) {
      row.innerHTML = steps.map(function(s) {
        return '<article class="process-step"><div class="step-num">' + esc(s.n) + '</div><h3>' + esc(s.title) + '</h3><p>' + esc(s.text) + '</p></article>';
      }).join('');
    }
    setText('processDeadline', 'Prochain comité éditorial : 15 juin 2026 · échanges à engager en amont');
  }

  function renderFooter(angle) {
    setText('seasonText', 'Pour sa saison inaugurale, En Plateau compose un cycle Industrie autour de 4 conversations structurantes et 48 angles précis. Chaque contribution vise à éclairer un arbitrage utile au monde économique, politique, financier et territorial.');
    var guarantees = [
      'L’échange ne vaut pas engagement.',
      'Aucun dossier interne ou confidentiel n’est attendu.',
      'La sélection reste éditoriale.',
      'La préparation peut se faire avec vos équipes communication, affaires publiques ou juridiques.'
    ];
    var el = byId('guaranteesGrid');
    if (el) {
      el.innerHTML = guarantees.map(function(g) { return '<article class="guarantee"><p>' + esc(g) + '</p></article>'; }).join('');
    }
    setText('footerCtaText', 'Qualifier cet angle en échange éditorial');
  }

  function renderMissingAngle(code) {
    document.body.classList.add('is-missing-angle');
    setText('heroKicker', 'Cycle Industrie · En Plateau');
    setText('heroTitle', code ? 'Angle introuvable' : 'Aucun angle renseigné');
    setText('heroPromise', code ? 'Le code angle indiqué dans l’URL ne correspond à aucun angle du référentiel.' : 'Merci d’utiliser le lien reçu dans votre invitation ou de demander un échange éditorial.');
    setText('heroCardTitle', 'Demander un échange éditorial');
    setText('heroCardText', 'Nous pouvons vous orienter vers le bon angle si votre invitation ou votre lien est incomplet.');
    var cta = byId('heroCta');
    if (cta) cta.href = 'https://cal.com/en-plateau/echange-editorial?src=lp-industrie&cta=missing-angle';
    ['whySection','angleSection','processSection','bottomSection'].forEach(function(id) {
      var el = byId(id); if (el) el.style.display = 'none';
    });
  }

  function render() {
    var code = getAngleCode();
    var angle = code ? findAngle(code) : null;
    if (!angle) { renderMissingAngle(code); return; }
    var conversation = findConversation(angle.conversationCode);
    var context = findContext(angle.contextCode);
    document.body.classList.add('has-angle');
    renderHero(angle, conversation, context);
    renderWhy(angle);
    renderAngle(angle, conversation, context);
    renderProcess(angle);
    renderFooter(angle);
    updateCtas(angle);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})(window.EN_PLATEAU_EDITORIAL_DATA);
