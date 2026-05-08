/*
  En Plateau — Référentiel éditorial centralisé
  V7 dynamique : cycle Industrie · lectures stratégique et financière · volet angle structuré contextualisé

  Usage prévu :
  - landing page Lecture stratégique
  - landing page Lecture financière
  - base technique réutilisable pour les autres lectures
  - formulaire de qualification / signalement

  Principe :
  Un même angle dispose de plusieurs formulations selon l'usage :
  - questionEditoriale : formulation interne / programme éditorial
  - questionPublique : formulation lisible sur page Conversations
  - questionActivation : formulation rassurante pour landing page / prise de contact
*/

window.EN_PLATEAU_EDITORIAL_DATA = {
  version: "2026-05-08-v7-volet-angle-contextualise",
  status: "test",
  sourceDocument: "programme_editorial_industrie.docx",
  scope: {
    cycle: "IND",
    includedReadings: ["STRATEGIQUE", "FINANCIERE"],
    note: "Référentiel test limité aux lectures stratégique et financière. Cette V7 stabilise le volet de droite : conversation, contexte, lecture, angle court, acteurs pressentis, activation, fiche détaillée visible et lectures complémentaires repliables limitées aux autres angles de la même conversation contextualisée."
  },

  notes: {
    stableCodesRequired: true,
    crmCodesRetained: true,
    programmeAliasesRetained: true,
    oneContextualizedAnglePerRow: true,
    formulationLevels: [
      "questionEditoriale",
      "questionPublique",
      "questionActivation"
    ],
    editorialRule: "Ne jamais demander à l'intervenant d'expliquer sa situation ; lui proposer d'éclairer un mécanisme qu'il a appris à reconnaître."
  },

  readingTypes: {
    STRATEGIQUE: {
      code: "STRATEGIQUE",
      label: "Lecture stratégique",
      slug: "strategie",
      shortLabel: "Stratégique",
      landingSlug: "industrie/strategie",
      calSource: "lp-industrie-strategie",
      positioning: "Identifier les seuils où une trajectoire industrielle change de nature et oblige à arbitrer autrement.",
      activationLine: "Vous n'êtes pas attendu sur un cas interne ou une doctrine générale. Vous êtes attendu sur votre capacité à lire le moment où une trajectoire industrielle change de nature."
    },
    FINANCIERE: {
      code: "FINANCIERE",
      label: "Lecture financière",
      slug: "finance",
      shortLabel: "Financière",
      landingSlug: "industrie/finance",
      calSource: "lp-industrie-finance",
      positioning: "Rendre visibles les arbitrages économiques que l'industrie ne peut plus différer.",
      activationLine: "Vous n'êtes pas attendu sur vos chiffres, vos marges ou vos dossiers internes. Vous êtes attendu sur votre capacité à lire le moment où un équilibre économique oblige l'industrie à arbitrer autrement."
    }
  },

  cycles: [
    {
      code: "IND",
      label: "Industrie & transformation des territoires",
      sourceLabel: "Industrie",
      description: "Ce cycle regarde les transformations industrielles non comme des successions de bonnes pratiques, mais comme des moments d'arbitrage : volumes, dépendances, outil, trajectoire, ressources, compétences et conditions territoriales.",
      contexts: [
        {
          code: "GS",
          programmeCode: "CST",
          label: "Croissance sous tension",
          description: "Quand la demande ou l'activité augmente, mais révèle des limites jusque-là peu visibles."
        },
        {
          code: "AC",
          programmeCode: "ASC",
          label: "Adaptation sous contrainte",
          description: "Quand l'entreprise tient encore, mais au prix de compromis de plus en plus coûteux."
        },
        {
          code: "RC",
          programmeCode: "RSS",
          label: "Réinvention sous crise",
          description: "Quand les ajustements ne suffisent plus et qu'une transformation plus profonde devient nécessaire."
        }
      ],
      conversations: [
        {
          code: "C1",
          title: "À partir de quand produire davantage oblige-t-il à arbitrer autrement ?",
          landingTitle: "Produire davantage : à quel moment la production change-t-elle la nature de l'arbitrage ?",
          tension: "Croissance ou continuité apparente vs soutenabilité réelle de la production",
          description: "Cette conversation interroge le moment où produire davantage cesse d'être seulement un objectif commercial pour devenir un sujet d'arbitrage industriel : marge, qualité, équipes, stocks, maintenance, outil et temps disponible."
        },
        {
          code: "C2",
          title: "Où se situent les dépendances qui deviennent des points de bascule ?",
          landingTitle: "Dépendances industrielles : comment identifier celles qui freinent avant qu'elles ne bloquent ?",
          tension: "Autonomie affichée vs vulnérabilités réelles de la chaîne de valeur",
          description: "Cette conversation cherche à identifier les dépendances qui deviennent des points de bascule : fournisseurs, flux logistiques, filières, règles, marchés, systèmes et infrastructures."
        },
        {
          code: "C3",
          title: "Jusqu'où un outil industriel peut-il évoluer sans se transformer en profondeur ?",
          landingTitle: "Investir, optimiser ou transformer : comment reconnaître le seuil où l'outil doit changer de logique ?",
          tension: "Amélioration incrémentale vs transformation profonde de l'outil",
          description: "Cette conversation interroge la frontière entre amélioration incrémentale et transformation profonde : process, flux, interfaces, compétences, qualité, sécurité, décarbonation et architecture productive."
        },
        {
          code: "C4",
          title: "Qu'est-ce qui fait qu'une trajectoire industrielle tient — ou doit être réarbitrée ?",
          landingTitle: "Trajectoire industrielle : comment savoir ce qui tient encore — et ce qui doit être réarbitré ?",
          tension: "Performance interne vs conditions systémiques de soutenabilité",
          description: "Cette conversation interroge les conditions systémiques de la continuité industrielle : compétences, énergie, eau, utilités, modèle commercial, foncier, infrastructures, acceptabilité et capacité du territoire à accompagner l'activité."
        }
      ],

      angles: [
        /* Lecture stratégique */
        {
          code: "A01",
          crmCode: "IND-C1-GS-A01",
          programmeCode: "IND-C1-CST-01",
          conversationCode: "C1",
          contextCode: "GS",
          typeLecture: "STRATEGIQUE",
          questionEditoriale: "À partir de quand la hausse d'activité met-elle sous tension les conditions de marge, de qualité et d'organisation au point d'obliger à arbitrer autrement ?",
          questionPublique: "Croissance industrielle : à quel moment faut-il arbitrer autrement — et comment ?",
          questionActivation: "La croissance masque les tensions qu'elle crée. Marges comprimées, qualité plus difficile à tenir, organisation saturée : ces signaux apparaissent progressivement, souvent trop tard. Vous n'êtes pas attendu sur les chiffres de votre entreprise ou de vos clients. Vous êtes attendu sur votre lecture du mécanisme — ce que votre position vous a appris à voir, ce qui reste invisible depuis d'autres positions d'observation, et ce que cela oblige à décider.",
          introMecanisme: "Dans l'industrie, la croissance est souvent perçue comme une bonne nouvelle. Mais lorsqu'elle s'accélère, elle peut révéler des tensions moins visibles : marges comprimées, qualité plus difficile à tenir, organisation saturée, investissements à engager plus tôt que prévu.",
          pointBascule: "À partir de quand chaque volume supplémentaire dégrade-t-il plus l'organisation qu'il ne renforce l'activité ?",
          tensionArbitrage: "Croître vite sans dégrader la marge, la qualité, les délais ni l'équilibre organisationnel.",
          primaryProfiles: ["DG industriel", "Directeur stratégie", "Direction industrielle", "Cabinet stratégie industrielle", "Cabinet compétitivité"],
          landingPages: ["strategie"],
          showInConversationPage: true,
          showInForm: true
        },
        {
          code: "A01",
          crmCode: "IND-C1-RC-A01",
          programmeCode: "IND-C1-RSS-01",
          conversationCode: "C1",
          contextCode: "RC",
          typeLecture: "STRATEGIQUE",
          questionEditoriale: "À partir de quand la production révèle-t-elle un écart durable entre le modèle opérationnel existant et les conditions nécessaires à sa soutenabilité ?",
          questionPublique: "À quel moment faut-il arrêter de corriger le modèle et décider de le changer ?",
          questionActivation: "En période de crise, les limites d'un modèle industriel ne se révèlent pas toujours brutalement. Elles apparaissent par écarts répétés : coûts qui ne reviennent pas, délais qui s'allongent, qualité plus difficile à sécuriser, organisation qui compense sans résoudre. Vous n'êtes pas attendu sur un cas de crise. Vous êtes attendu sur votre capacité à reconnaître le moment où la correction de l'existant ne suffit plus.",
          introMecanisme: "En période de crise, les limites d'un modèle industriel apparaissent d'abord par des écarts répétés : coûts, délais, qualité, organisation, investissement ou périmètre.",
          pointBascule: "À partir de quand le modèle existant devient-il irréversible dans ses fragilités ?",
          tensionArbitrage: "Corriger l'existant ou reconnaître que le modèle doit être repensé.",
          primaryProfiles: ["DG industriel", "Direction stratégie", "Turnaround", "Cabinet stratégie industrielle", "Conseil transformation"],
          landingPages: ["strategie"],
          showInConversationPage: true,
          showInForm: true
        },
        {
          code: "A05",
          crmCode: "IND-C2-GS-A05",
          programmeCode: "IND-C2-CST-01",
          conversationCode: "C2",
          contextCode: "GS",
          typeLecture: "STRATEGIQUE",
          questionEditoriale: "À partir de quand l'augmentation des volumes révèle-t-elle une dépendance fournisseur ou logistique que l'organisation ne maîtrise plus pleinement ?",
          questionPublique: "Dépendances industrielles : comment identifier celles qui freinent la croissance avant qu'elles ne la bloquent ?",
          questionActivation: "Les dépendances industrielles restent invisibles tant qu'elles fonctionnent. Ce n'est qu'au moment où elles basculent qu'elles révèlent leur poids réel. Ce qu'on attend de vous, c'est une lecture transversale : les patterns que vous avez vus se répéter, les signaux faibles qui annoncent la bascule, et les arbitrages que les organisations formulent souvent trop tard.",
          introMecanisme: "La croissance teste tout ce dont l'entreprise dépend pour produire : fournisseurs, matières, composants, transport, flux logistiques et capacités de coordination.",
          pointBascule: "À partir de quand un fournisseur ou un flux logistique devient-il un point de blocage de la croissance ?",
          tensionArbitrage: "Croître grâce à des dépendances efficaces sans devenir prisonnier de leur fragilité.",
          primaryProfiles: ["Directeur stratégie", "DG industriel", "Cabinet stratégie industrielle", "Cabinet filière", "Cabinet intelligence économique"],
          landingPages: ["strategie"],
          showInConversationPage: true,
          showInForm: true
        },
        {
          code: "A06",
          crmCode: "IND-C2-AC-A06",
          programmeCode: "IND-C2-ASC-02",
          conversationCode: "C2",
          contextCode: "AC",
          typeLecture: "STRATEGIQUE",
          questionEditoriale: "Quelles dépendances de filière ou de segment limitent la capacité à ajuster l'activité sans fragiliser la position future dans la chaîne de valeur ?",
          questionPublique: "Sous contrainte, comment savoir quelles dépendances protéger, transformer ou abandonner ?",
          questionActivation: "En période de contrainte, les ajustements ne sont jamais neutres. Réduire une activité, changer de segment ou modifier une dépendance peut préserver le court terme tout en affaiblissant une position future. Vous n'êtes pas attendu sur la stratégie interne d'une entreprise. Vous êtes attendu sur votre lecture des dépendances qui changent silencieusement la position dans la chaîne de valeur.",
          introMecanisme: "En période de contrainte, les ajustements peuvent affaiblir une position future : segment, clients, fournisseurs, savoir-faire ou place dans la filière.",
          pointBascule: "À partir de quand l'ajustement fragilise-t-il la position future dans la chaîne de valeur ?",
          tensionArbitrage: "S'adapter sans perdre ce qui fonde la place stratégique dans la filière.",
          primaryProfiles: ["Stratégie industrielle", "Filière", "Compétitivité", "Corporate finance / repositionnement", "Direction générale"],
          landingPages: ["strategie"],
          showInConversationPage: true,
          showInForm: true
        },
        {
          code: "A05",
          crmCode: "IND-C2-RC-A05",
          programmeCode: "IND-C2-RSS-01",
          conversationCode: "C2",
          contextCode: "RC",
          typeLecture: "STRATEGIQUE",
          questionEditoriale: "À partir de quand une dépendance critique impose-t-elle une relocalisation, une substitution ou un changement de modèle d'approvisionnement ?",
          questionPublique: "Quand une dépendance devient-elle un problème stratégique qui ne se résout plus opérationnellement ?",
          questionActivation: "Certaines dépendances peuvent être sécurisées, diversifiées ou mieux pilotées. D'autres finissent par changer la nature même du modèle industriel. Vous n'êtes pas attendu sur une décision de relocalisation ou un dossier d'approvisionnement particulier. Vous êtes attendu sur votre capacité à distinguer une dépendance pilotable d'une dépendance qui oblige à changer de modèle.",
          introMecanisme: "Lorsqu'une dépendance devient critique, l'entreprise ne peut plus seulement chercher à mieux la piloter : elle doit parfois relocaliser, substituer, diversifier ou repenser l'architecture d'approvisionnement.",
          pointBascule: "Quand une dépendance devient-elle inacceptable pour la continuité industrielle ?",
          tensionArbitrage: "Conserver l'efficacité d'un modèle globalisé ou reconstruire une résilience plus coûteuse mais plus maîtrisable.",
          primaryProfiles: ["Supply chain stratégique", "Achats", "Stratégie industrielle", "Site selection", "Redéploiement"],
          landingPages: ["strategie"],
          showInConversationPage: true,
          showInForm: true
        },
        {
          code: "A12",
          crmCode: "IND-C3-GS-A12",
          programmeCode: "IND-C3-CST-04",
          conversationCode: "C3",
          contextCode: "GS",
          typeLecture: "STRATEGIQUE",
          questionEditoriale: "À partir de quand la croissance impose-t-elle de décarboner autrement, non plus à la marge, mais en repensant le process, les utilités ou le mix produit ?",
          questionPublique: "À quel moment la décarbonation oblige-t-elle à repenser l'outil plutôt qu'à l'optimiser ?",
          questionActivation: "La croissance augmente les besoins en énergie, matières, capacités et utilités. Dans certains cas, les gains marginaux ne suffisent plus : la contrainte carbone change la nature même de l'outil ou du process. Vous n'êtes pas attendu sur un plan de décarbonation confidentiel. Vous êtes attendu sur votre lecture du seuil où la décarbonation cesse d'être un chantier périphérique et devient un arbitrage stratégique.",
          introMecanisme: "La croissance industrielle augmente souvent les besoins en énergie, matières et capacités. Dans un contexte de transition climatique, cette croissance ne peut pas toujours être accompagnée par de simples gains marginaux.",
          pointBascule: "À partir de quand la décarbonation impose-t-elle de repenser l'outil plutôt que de l'optimiser ?",
          tensionArbitrage: "Croître industriellement tout en transformant réellement les conditions carbone de la production.",
          primaryProfiles: ["Direction stratégie", "Direction industrielle", "Énergie / décarbonation", "Transformation de process", "Conseil stratégie industrielle"],
          landingPages: ["strategie"],
          showInConversationPage: true,
          showInForm: true
        },
        {
          code: "A12",
          crmCode: "IND-C3-AC-A12",
          programmeCode: "IND-C3-ASC-04",
          conversationCode: "C3",
          contextCode: "AC",
          typeLecture: "STRATEGIQUE",
          questionEditoriale: "À partir de quand la décarbonation rebat-elle les conditions mêmes de compétitivité, d'investissement et de transformation de l'outil ?",
          questionPublique: "Quand la contrainte carbone redéfinit-elle les conditions de compétitivité ?",
          questionActivation: "La décarbonation n'est pas seulement une exigence environnementale. En contexte contraint, elle peut transformer les équilibres économiques de l'outil : compétitivité, CAPEX, process, utilités, trajectoire d'investissement. Vous n'êtes pas attendu sur des chiffres d'investissement. Vous êtes attendu sur votre lecture du moment où la contrainte carbone redéfinit les conditions de décision industrielle.",
          introMecanisme: "En contexte contraint, la décarbonation renforce les tensions entre compétitivité immédiate et transformation nécessaire de l'outil.",
          pointBascule: "À partir de quand la contrainte carbone redéfinit-elle les conditions de compétitivité ?",
          tensionArbitrage: "Rester compétitif aujourd'hui tout en investissant dans une trajectoire carbone soutenable.",
          primaryProfiles: ["Direction stratégie", "Énergie / décarbonation", "Corporate finance / CAPEX", "Transformation de process", "Conseil compétitivité industrielle"],
          landingPages: ["strategie"],
          showInConversationPage: true,
          showInForm: true
        },
        {
          code: "A15",
          crmCode: "IND-C4-GS-A15",
          programmeCode: "IND-C4-CST-03",
          conversationCode: "C4",
          contextCode: "GS",
          typeLecture: "STRATEGIQUE",
          questionEditoriale: "À partir de quand la croissance du carnet révèle-t-elle une fragilité commerciale dans la capacité à sélectionner, répercuter ou défendre ses conditions économiques ?",
          questionPublique: "Comment savoir si l'on grandit dans la bonne direction — ou simplement plus vite vers le même mur ?",
          questionActivation: "Un carnet de commandes qui se remplit peut donner l'impression d'une trajectoire solide. Mais toutes les commandes ne se valent pas : certaines consomment la capacité, fragilisent la marge ou limitent la transformation. Vous n'êtes pas attendu sur vos clients ou votre portefeuille. Vous êtes attendu sur votre capacité à lire les signaux qui distinguent une croissance bien positionnée d'une croissance qui creuse une fragilité structurelle.",
          introMecanisme: "Un carnet de commandes qui progresse peut confirmer une trajectoire, mais aussi masquer une fragilité commerciale : incapacité à sélectionner, répercuter ou défendre les conditions économiques.",
          pointBascule: "À partir de quand la croissance fragilise-t-elle la capacité à défendre ses marges ?",
          tensionArbitrage: "Remplir le carnet sans accepter une croissance qui consomme la marge et la capacité industrielle.",
          primaryProfiles: ["DG industriel", "Direction stratégie", "Direction développement", "Pricing B2B", "Business model industriel"],
          landingPages: ["strategie"],
          showInConversationPage: true,
          showInForm: true
        },
        {
          code: "A15",
          crmCode: "IND-C4-AC-A15",
          programmeCode: "IND-C4-ASC-03",
          conversationCode: "C4",
          contextCode: "AC",
          typeLecture: "STRATEGIQUE",
          questionEditoriale: "À partir de quand la pression des clients ou donneurs d'ordre limite-t-elle la capacité à préserver la marge nécessaire au maintien ou à l'adaptation de l'outil ?",
          questionPublique: "Quand la pression commerciale empêche-t-elle toute adaptation viable ?",
          questionActivation: "Dans certaines chaînes de valeur, la pression des clients ou donneurs d'ordre limite la capacité à préserver les marges nécessaires au maintien de l'outil. Vous n'êtes pas attendu sur une négociation ou un compte client. Vous êtes attendu sur votre lecture du moment où la structure commerciale empêche l'entreprise de financer son adaptation.",
          introMecanisme: "Dans de nombreuses chaînes de valeur, les clients et donneurs d'ordre exercent une pression forte sur les prix, les délais ou les conditions contractuelles.",
          pointBascule: "À partir de quand la pression commerciale empêche-t-elle toute adaptation viable ?",
          tensionArbitrage: "Servir les clients sans perdre la marge nécessaire pour maintenir et transformer l'outil.",
          primaryProfiles: ["Direction générale", "Direction stratégie", "Pricing B2B", "Corporate finance", "Business model industriel"],
          landingPages: ["strategie"],
          showInConversationPage: true,
          showInForm: true
        },
        {
          code: "A15",
          crmCode: "IND-C4-RC-A15",
          programmeCode: "IND-C4-RSS-03",
          conversationCode: "C4",
          contextCode: "RC",
          typeLecture: "STRATEGIQUE",
          questionEditoriale: "À partir de quand la structure commerciale impose-t-elle un changement de marché, de portefeuille, de partenariat ou de position dans la chaîne de valeur ?",
          questionPublique: "Quand le modèle commercial devient-il incompatible avec l'outil ou la trajectoire industrielle ?",
          questionActivation: "Lorsque la structure commerciale devient trop fragile, il ne suffit plus de négocier mieux ou de vendre davantage. Il faut parfois changer de marché, de portefeuille, de partenariat ou de position dans la chaîne de valeur. Vous n'êtes pas attendu sur votre modèle commercial interne. Vous êtes attendu sur votre capacité à lire le moment où une trajectoire industrielle doit changer de position pour rester viable.",
          introMecanisme: "Une crise peut obliger à revoir plus largement la trajectoire commerciale et industrielle : marchés, portefeuille, partenariats ou position dans la chaîne de valeur.",
          pointBascule: "Quand le modèle commercial devient-il incompatible avec l'outil ou la trajectoire industrielle ?",
          tensionArbitrage: "Conserver les marchés existants ou changer de position pour préserver la viabilité industrielle.",
          primaryProfiles: ["Direction générale", "Stratégie industrielle", "Business model", "Corporate finance", "Repositionnement"],
          landingPages: ["strategie"],
          showInConversationPage: true,
          showInForm: true
        },

        /* Lecture financière */
        {
          code: "A01",
          crmCode: "IND-C1-AC-A01",
          programmeCode: "IND-C1-ASC-01",
          conversationCode: "C1",
          contextCode: "AC",
          typeLecture: "FINANCIERE",
          questionEditoriale: "À partir de quand les ajustements sur les volumes, les achats, les équipes ou la maintenance permettent-ils encore de tenir, tout en fragilisant progressivement l'équilibre économique ?",
          questionPublique: "À quel moment les ajustements économiques qui permettent de tenir commencent-ils à fragiliser la trajectoire industrielle ?",
          questionActivation: "Vous n'êtes pas attendu sur vos chiffres, vos marges ou vos arbitrages internes. Vous êtes attendu sur votre capacité à lire le moment où un ajustement économique cesse de préserver l'activité et commence à fragiliser sa soutenabilité future.",
          introMecanisme: "Quand l'activité devient plus difficile à piloter, les entreprises ajustent souvent les volumes, les achats, les investissements, les équipes ou la maintenance. Ces ajustements permettent de tenir, mais peuvent déplacer la contrainte plutôt que la résoudre.",
          pointBascule: "À partir de quand l'adaptation détruit-elle plus de valeur qu'elle n'en préserve ?",
          tensionArbitrage: "Maintenir l'activité aujourd'hui sans affaiblir les conditions de sa soutenabilité future.",
          primaryProfiles: ["DAF / CFO industriel", "Contrôle de gestion industriel", "Corporate finance", "Restructuring", "Direction générale"],
          landingPages: ["finance"],
          showInConversationPage: true,
          showInForm: true
        },
        {
          code: "A03",
          crmCode: "IND-C1-RC-A03",
          programmeCode: "IND-C1-RSS-03",
          conversationCode: "C1",
          contextCode: "RC",
          typeLecture: "FINANCIERE",
          questionEditoriale: "À partir de quand la dette technologique impose-t-elle un saut d'investissement, un changement de périmètre ou une transformation plus profonde de l'outil ?",
          questionPublique: "Quand une dette technologique cesse-t-elle d'être un retard d'investissement pour devenir une décision de transformation ?",
          questionActivation: "Vous n'êtes pas attendu sur le montant d'un CAPEX, un plan d'investissement ou un dossier interne. Vous êtes attendu sur votre capacité à lire le moment où une dette technologique ne peut plus être absorbée par des corrections progressives et oblige à arbitrer : investir, changer de périmètre, transformer ou renoncer.",
          introMecanisme: "La dette technologique s'accumule souvent silencieusement : systèmes hétérogènes, automatismes dépassés, équipements difficiles à maintenir. En crise, elle peut empêcher toute adaptation rapide.",
          pointBascule: "À partir de quand la dette technologique bloque-t-elle toute adaptation crédible ?",
          tensionArbitrage: "Reporter l'investissement ou accepter une rupture technologique devenue nécessaire.",
          primaryProfiles: ["Corporate finance", "CAPEX industriel", "Restructuring", "Turnaround", "Stratégie d'outil industriel"],
          landingPages: ["finance"],
          showInConversationPage: true,
          showInForm: true
        },
        {
          code: "A05",
          crmCode: "IND-C2-AC-A05",
          programmeCode: "IND-C2-ASC-01",
          conversationCode: "C2",
          contextCode: "AC",
          typeLecture: "FINANCIERE",
          questionEditoriale: "À partir de quand la réduction des marges de manœuvre rend-elle une dépendance amont ou logistique trop risquée pour rester pilotée à coût acceptable ?",
          questionPublique: "Quand une dépendance amont ou logistique change-t-elle de nature dans la lecture économique d'une trajectoire industrielle ?",
          questionActivation: "Vous n'êtes pas attendu sur vos fournisseurs, vos contrats ou vos coûts internes. Vous êtes attendu sur votre capacité à lire le moment où une dépendance jusque-là acceptable devient économiquement ou opérationnellement trop risquée pour rester pilotée au même coût.",
          introMecanisme: "Une dépendance peut être acceptable tant que l'entreprise dispose de marges de manœuvre. Lorsque ces marges se réduisent, la même dépendance devient plus coûteuse, plus risquée et plus difficile à piloter.",
          pointBascule: "Quand la dépendance devient-elle financièrement ou opérationnellement intenable ?",
          tensionArbitrage: "Préserver l'efficacité d'une dépendance sans subir son coût croissant.",
          primaryProfiles: ["DAF / CFO industriel", "Supply chain finance", "Achats stratégiques", "Turnaround", "Compétitivité industrielle"],
          landingPages: ["finance"],
          showInConversationPage: true,
          showInForm: true
        },
        {
          code: "A09",
          crmCode: "IND-C3-AC-A09",
          programmeCode: "IND-C3-ASC-01",
          conversationCode: "C3",
          contextCode: "AC",
          typeLecture: "FINANCIERE",
          questionEditoriale: "Dans un contexte de marges serrées, qu'est-ce qui transforme encore réellement l'outil : un investissement technologique ciblé ou une recomposition plus frugale du process ?",
          questionPublique: "Quand transformer avec peu de moyens reste-t-il crédible — et quand l'amélioration frugale ne suffit-elle plus ?",
          questionActivation: "Vous n'êtes pas attendu sur un budget, un plan de transformation ou un arbitrage interne. Vous êtes attendu sur votre lecture du moment où un investissement ciblé, une recomposition frugale ou une transformation plus profonde devient la décision économiquement pertinente.",
          introMecanisme: "Lorsque les marges sont serrées, transformer l'outil industriel ne signifie pas toujours investir massivement. L'entreprise peut chercher des gains ciblés, mais toutes ces options ne produisent pas le même effet.",
          pointBascule: "À partir de quand l'amélioration frugale ne suffit-elle plus ?",
          tensionArbitrage: "Transformer avec peu de moyens sans se limiter à des corrections insuffisantes.",
          primaryProfiles: ["Corporate finance / CAPEX", "DAF industriel", "Performance industrielle", "Investissement ciblé", "Restructuring opérationnel"],
          landingPages: ["finance"],
          showInConversationPage: true,
          showInForm: true
        },
        {
          code: "A14",
          crmCode: "IND-C4-AC-A14",
          programmeCode: "IND-C4-ASC-02",
          conversationCode: "C4",
          contextCode: "AC",
          typeLecture: "FINANCIERE",
          questionEditoriale: "À partir de quand les coûts d'énergie, d'eau ou de conformité environnementale limitent-ils la capacité à ajuster l'activité sans dégrader la compétitivité ?",
          questionPublique: "Quand les coûts de ressources cessent-ils d'être des surcoûts absorbables pour devenir des paramètres de transformation ?",
          questionActivation: "Vous n'êtes pas attendu sur vos coûts d'énergie, d'eau ou de conformité. Vous êtes attendu sur votre capacité à lire le moment où ces coûts cessent d'être de simples variables d'ajustement et deviennent des paramètres structurants de compétitivité, d'investissement ou de transformation industrielle.",
          introMecanisme: "Les coûts de l'énergie, de l'eau et de la conformité environnementale pèsent de plus en plus directement sur les équilibres industriels. En contexte contraint, ils réduisent les marges d'action.",
          pointBascule: "À partir de quand les coûts rendent-ils l'activité difficilement ajustable ?",
          tensionArbitrage: "Absorber les surcoûts pour préserver la compétitivité à court terme ou investir dans la transformation.",
          primaryProfiles: ["DAF / CFO industriel", "Énergie / ressources", "Corporate finance", "Compétitivité industrielle", "Décarbonation / utilités"],
          landingPages: ["finance"],
          showInConversationPage: true,
          showInForm: true
        }
      ]
    }
  ],

  landingPages: {
    strategie: {
      cycleCode: "IND",
      readingType: "STRATEGIQUE",
      title: "Lecture stratégique — Cycle Industrie & transformation des territoires | En Plateau",
      metaDescription: "Une place précise dans une conversation industrielle ouverte — que vous soyez conseil ou décideur industriel. Comité éditorial : 15 juin 2026.",
      navLabel: "Cycle Industrie · Lecture stratégique",
      heroTitleHtml: "Votre lecture<br><em>fait apparaître</em><br>ce que l'industrie<br>ne voit pas seule.",
      heroLead: "Quatre conversations industrielles sont ouvertes. Chacune cherche une lecture stratégique — portée depuis l'expérience au cœur des arbitrages industriels, ou depuis l'accompagnement des acteurs qui les traversent.",
      heroProfiles: [
        {
          label: "Décideur industriel",
          text: "Vous avez piloté des bascules de compétitivité, de filière ou de chaîne de valeur depuis l'intérieur. Votre lecture est une expérience de décision."
        },
        {
          label: "Conseil spécialisé",
          text: "Vous accompagnez des industriels sur la stratégie, la compétitivité ou les dépendances structurelles. Votre lecture est une analyse transversale."
        }
      ],
      valueSection: {
        title: "Être parmi ceux qui fixent le récit — pas parmi ceux qui le subissent",
        intro: "Sur les sujets qui structurent l'industrie, les lectures de référence se constituent maintenant. Ceux qui les portent en premier choisissent leur angle. Les autres commentent.",
        cards: [
          {
            label: "ETI · Grand groupe",
            title: "Démontrer que vous maîtrisez votre trajectoire — pas seulement que vous la vivez",
            text: "Banquiers, fonds, grands donneurs d'ordre, collectivités : vos interlocuteurs cherchent des signaux de solidité, pas de communication institutionnelle. Une lecture publique, préparée, portée dans un cadre éditorial crédible dit autre chose qu'un communiqué."
          },
          {
            label: "ETI sous pression · Reconfiguration",
            title: "Reprendre la main sur la lecture de votre situation avant que les autres ne la construisent à votre place",
            text: "Dans un moment de tension ou de transformation, le silence laisse le champ libre aux interprétations externes. Une prise de parole préparée, structurée sur les bons arbitrages, est d'abord un acte de pilotage — interne et externe."
          },
          {
            label: "Cabinet de conseil",
            title: "Créer le seul type de contenu qui attire des mandats qualifiés sans sollicitation directe",
            text: "Un prospect qui a son problème le reconnaît immédiatement dans une lecture bien cadrée sur sa situation. Ce type de signal entrant, préchauffé, est difficile à produire autrement — et impossible à acheter dans un cadre purement publicitaire."
          },
          {
            label: "Décideur industriel · Profil senior",
            title: "Constituer une trace publique qui travaille pour vous dans la durée",
            text: "Changement de poste, levée de fonds, entrée au board, recrutement de profils seniors : votre lecture sur un sujet précis crée un capital de réputation personnel, transférable, qui existe indépendamment de votre organisation actuelle."
          }
        ]
      },
      copy: {
        heroNoteHtml: "Aucun client ni cas identifiable à exposer &nbsp;·&nbsp; Aucun dossier sensible à commenter &nbsp;·&nbsp; 15 min pour qualifier votre angle<br>Collaboration possible avec services juridique, communication ou corporate de votre organisation",
        audience: {
          title: "Cette lecture stratégique vous est-elle destinée ?",
          yesTitle: "Vous portez probablement une lecture pertinente si…",
          noTitle: "Moins adapté si…",
          yesItems: [
            "Vous savez relier compétitivité, dépendances, trajectoire industrielle et décisions réelles.",
            "Vous êtes DG, directeur stratégie, directeur industriel, conseil en stratégie industrielle, compétitivité, filière ou transformation.",
            "Votre lecture porte sur des seuils : croissance qui fragilise, dépendance qui bascule, outil à transformer, trajectoire à réarbitrer.",
            "Vous pouvez éclairer un mécanisme sans exposer de client, de dossier interne ou de situation confidentielle."
          ],
          noItems: [
            "Votre approche reste trop générale pour être reliée à une bascule industrielle précise.",
            "Vous cherchez d'abord une visibilité promotionnelle plutôt qu'une contribution éditoriale située.",
            "Vous souhaitez présenter une offre, une méthode ou une organisation plutôt qu'éclairer un arbitrage industriel.",
            "Votre lecture ne relie pas les signaux stratégiques à des décisions concrètes : tenir, investir, transformer, repositionner, relocaliser ou renoncer."
          ],
          panel: "La lecture stratégique ne consiste pas à commenter l'industrie en général. Elle consiste à identifier le moment où une trajectoire change de nature et oblige les acteurs à arbitrer autrement."
        },
        conversations: {
          title: "Les angles où la lecture stratégique devient décisive",
          intro: "La lecture stratégique intervient là où une trajectoire industrielle change de nature : croissance qui fragilise, dépendance qui bascule, outil qui ne peut plus seulement être optimisé, modèle commercial ou positionnement qui doit être réarbitré.",
          panel: "Ces positions ne demandent pas de commenter une situation particulière. Elles proposent d'éclairer des seuils, des signaux faibles et des arbitrages qui se répètent dans les trajectoires industrielles."
        },
        preparation: {
          titleHtml: "Beaucoup arrivent avec une lecture stratégique. <em style=\"color:rgba(240,236,230,0.55);\">Ils repartent avec une position.</em>",
          intro: "La préparation éditoriale transforme une expertise, une expérience de décision ou une analyse de filière en lecture située : claire, défendable, utile pour les dirigeants industriels, conseils, investisseurs, équipes internes et partenaires de transformation."
        },
        dimensions: [
          { num: "01", title: "Transformation en cours / contexte", text: "Ancrer votre lecture dans le mouvement réel : ce qui bascule dans l'industrie en ce moment, et pourquoi ce sujet devient décisif maintenant." },
          { num: "02", title: "Acteurs concernés", text: "Préciser qui cette bascule affecte réellement, et depuis quelle position votre lecture éclaire ce que les autres ne peuvent pas voir." },
          { num: "03", title: "Arbitrages", text: "Rendre explicites les choix réels : ce qu'on gagne, ce qu'on cède, et à partir de quand la nature de l'arbitrage change." },
          { num: "04", title: "Défis & opportunités", text: "Articuler les deux faces de la bascule : ce qu'elle menace et ce qu'elle ouvre, pour éviter une lecture à sens unique." },
          { num: "05", title: "Vision", text: "Formuler le parti pris : ce que votre expérience ou votre analyse permet d'affirmer sur la direction juste et les conditions qui la rendent tenable." },
          { num: "06", title: "Échelle d'analyse", text: "Situer votre lecture à la bonne échelle : entreprise, filière, territoire, secteur ou chaîne de valeur." }
        ],
        dimensionsPanel: "Ce travail ne substitue pas votre lecture : il lui donne sa forme la plus utile. L'intervenant reste l'auteur de sa position. En Plateau est l'architecte du cadre qui la rend audible, défendable et durable.",
        process: [
          {
            num: "01",
            title: "L'échange de qualification",
            text: "15 minutes pour vérifier si votre lecture correspond à un angle disponible. Aucun client, cas interne ou dossier sensible à exposer.",
            deadline: "À planifier en amont du comité éditorial"
          },
          {
            num: "02",
            title: "Le dossier de positionnement",
            text: "Si l'angle est retenu, un dossier complet vous est adressé : angle précis, logique de mise en regard, modalités d'intervention, format émission et article associé."
          },
          {
            num: "03",
            title: "Le comité éditorial",
            text: "Le 15 juin, le comité éditorial examine les dossiers de positionnement et valide la composition finale. Vous êtes informé avant tout engagement.",
            deadline: "Comité : 15 juin 2026"
          },
          {
            num: "04",
            title: "La préparation & la production",
            text: "En Plateau travaille avec vous pour transformer votre lecture stratégique en position claire, non intrusive et publiquement défendable."
          }
        ],
        guarantees: [
          {
            accent: true,
            title: "Aucun client ni cas identifiable à exposer",
            text: "L'échange porte sur les mécanismes d'arbitrage stratégique, pas sur un mandat, une entreprise, un client ou une situation confidentielle."
          },
          {
            accent: true,
            title: "Aucun engagement avant le dossier de positionnement",
            text: "Vous ne vous engagez pas lors de l'échange éditorial. L'engagement intervient après réception du dossier et validation par le comité éditorial."
          },
          {
            title: "Pas de doctrine générale attendue",
            text: "La contribution ne consiste pas à produire un discours global sur l'industrie. Elle vise une lecture située, rattachée à un angle et à un contexte précis."
          },
          {
            title: "Une parole préparée avec vos équipes si nécessaire",
            text: "La préparation peut intégrer vos contraintes de communication, juridiques, corporate ou de confidentialité."
          }
        ],
        faq: [
          {
            question: "Dois-je intervenir sur toutes les conversations ?",
            answer: "Non. Une seule conversation suffit, parfois même un seul contexte au sein d'une conversation. L'échange éditorial sert précisément à identifier l'angle où votre lecture est la plus forte."
          },
          {
            question: "Faut-il défendre une doctrine générale sur l'industrie ?",
            answer: "Non. Il s'agit d'une lecture située : ancrée dans des arbitrages réels, utile pour les acteurs qui les traversent. Une lecture trop abstraite ou trop généraliste n'a pas de place naturelle dans la composition."
          },
          {
            question: "Est-ce ouvert aux décideurs industriels comme aux cabinets de conseil ?",
            answer: "Oui. Un décideur industriel apporte une expérience de décision depuis l'intérieur. Un conseil spécialisé apporte une lecture transversale construite auprès de plusieurs situations. Ces deux lectures peuvent être pertinentes, selon l'angle."
          },
          {
            question: "Faut-il arriver avec une position déjà construite ?",
            answer: "Non. La préparation éditoriale sert précisément à transformer une conviction, une expérience ou une expertise en position claire, située et défendable."
          }
        ],
        cta: {
          title: "Votre lecture stratégique peut éclairer ce que les trajectoires industrielles ne disent pas d'elles-mêmes.",
          text: "Un échange de 15 minutes — sans exposer de client, sans engagement — pour vérifier si votre angle a une place dans cette conversation avant la fermeture des positions.",
          deadline: "Comité éditorial : 15 juin 2026 · Les échanges précèdent la composition finale",
          footnote: "Les positions stratégiques se ferment au fil de la composition éditoriale · Page non indexée"
        }
      }
    },

    finance: {
      cycleCode: "IND",
      readingType: "FINANCIERE",
      title: "Lecture financière — Cycle Industrie & transformation des territoires | En Plateau",
      metaDescription: "Une place précise pour éclairer les arbitrages économiques qui rendent une transformation industrielle nécessaire — sans exposer de chiffres confidentiels.",
      navLabel: "Cycle Industrie · Lecture financière",
      heroTitleHtml: "Votre lecture<br><em>rend visibles</em><br>les arbitrages économiques<br>que l'industrie diffère.",
      heroLead: "Certaines décisions industrielles ne changent pas de nature parce qu'un chiffre baisse, mais parce que les équilibres économiques ne permettent plus de maintenir l'activité comme avant. La lecture financière attendue porte sur ces seuils — sans exposer vos chiffres, vos marges ou vos dossiers internes.",
      heroProfiles: [
        {
          label: "DAF · CFO · Direction financière",
          text: "Vous lisez les marges de manœuvre, les investissements, les coûts différés et les conditions de soutenabilité. Votre lecture éclaire le moment où la finance devient arbitrage industriel."
        },
        {
          label: "Conseil finance · Restructuring · Investissement",
          text: "Vous accompagnez des dirigeants dans des situations où CAPEX, dette technologique, dépendances, coûts de ressources ou périmètre obligent à décider autrement."
        }
      ],
      valueSection: {
        title: "Faire reconnaître la finance comme lecture d'arbitrage industriel — pas comme simple commentaire de chiffres",
        intro: "La prise de parole financière devient utile lorsqu'elle éclaire les mécanismes qui obligent une entreprise industrielle à choisir : tenir, investir, différer, transformer, céder, redéployer ou renoncer.",
        cards: [
          {
            label: "DAF · CFO · Direction financière industrielle",
            title: "Faire reconnaître votre rôle dans les arbitrages qui tiennent réellement la trajectoire industrielle",
            text: "Vous ne portez pas seulement une lecture des coûts ou des marges. Vous voyez le moment où un ajustement préserve encore l'activité — et celui où il commence à affaiblir les conditions de sa soutenabilité. Une prise de parole préparée rend visible cette fonction d'arbitrage, sans exposer vos chiffres internes."
          },
          {
            label: "ETI sous contrainte · Reconfiguration",
            title: "Reprendre la maîtrise du récit économique avant qu'il ne soit lu à votre place",
            text: "Dans les moments de tension, les décisions financières sont vite interprétées comme des signaux de fragilité. Une lecture cadrée permet de montrer ce qui relève d'un pilotage assumé : préserver la trésorerie, arbitrer l'investissement, absorber certains coûts, renoncer à d'autres, protéger les conditions de transformation."
          },
          {
            label: "Cabinet finance · Restructuring · Performance",
            title: "Créer un signal éditorial que vos prospects reconnaissent avant même l'échange commercial",
            text: "Un dirigeant ne cherche pas d'abord un cabinet. Il cherche quelqu'un qui comprend exactement le problème qu'il traverse. Une lecture financière bien cadrée — dette technologique, dépendance coûteuse, investissement différé, coûts de ressources — crée une reconnaissance immédiate, sans discours promotionnel."
          },
          {
            label: "Profil senior · Investisseur · Finance stratégique",
            title: "Construire une trace publique de votre capacité à relier finance et décision industrielle",
            text: "Votre valeur ne tient pas seulement à votre maîtrise financière, mais à votre capacité à comprendre ce qu'un chiffre oblige à décider : investir, différer, céder, transformer, renégocier, redéployer. Cette prise de parole crée une trace durable de cette lecture, utile au-delà de votre poste ou de votre organisation actuelle."
          }
        ]
      },
      copy: {
        heroNoteHtml: "Aucun chiffre confidentiel à exposer &nbsp;·&nbsp; Aucun dossier sensible à commenter &nbsp;·&nbsp; 15 min pour qualifier votre angle<br>Collaboration possible avec services juridique, communication ou corporate de votre organisation",
        audience: {
          title: "Cette lecture financière vous est-elle destinée ?",
          yesTitle: "Vous portez probablement une lecture pertinente si…",
          noTitle: "Moins adapté si…",
          yesItems: [
            "Vous savez relier marges de manœuvre, investissement, coûts différés et décisions industrielles réelles.",
            "Vous êtes DAF, CFO, dirigeant, conseil finance, restructuring, corporate finance, investisseur ou responsable exposé aux arbitrages économiques industriels.",
            "Votre lecture porte sur des seuils : dette technologique, dépendance devenue coûteuse, CAPEX différé, coûts énergie/eau/conformité, soutenabilité d'un outil.",
            "Vous pouvez éclairer un mécanisme sans exposer de chiffres, de comptes internes, de clients ou de dossiers confidentiels."
          ],
          noItems: [
            "Votre approche porte surtout sur du reporting, de la conformité comptable ou une lecture financière déconnectée de l'outil industriel.",
            "Vous cherchez d'abord une visibilité promotionnelle plutôt qu'une contribution éditoriale située.",
            "Vous souhaitez présenter des résultats, une méthode propriétaire ou une offre commerciale plutôt qu'éclairer un arbitrage industriel.",
            "Votre lecture ne relie pas les chiffres à des décisions : investir, différer, transformer, redéployer, céder ou renoncer."
          ],
          panel: "La lecture financière ne consiste pas à commenter des chiffres. Elle consiste à identifier le moment où les équilibres économiques obligent l'industrie à arbitrer autrement."
        },
        conversations: {
          title: "Les angles où la lecture financière devient décisive",
          intro: "La lecture financière intervient là où les conditions économiques changent la nature de la décision industrielle : maintenir, investir, différer, transformer, redéployer ou renoncer. Chaque position porte sur un mécanisme à éclairer, sans exposition de chiffres confidentiels ni de dossiers internes.",
          panel: "Ces positions ne demandent pas de commenter une situation particulière. Elles proposent d'éclairer des seuils, des signaux faibles et des arbitrages économiques qui se répètent dans les trajectoires industrielles."
        },
        preparation: {
          titleHtml: "Beaucoup arrivent avec une lecture financière. <em style=\"color:rgba(240,236,230,0.55);\">Ils repartent avec une position.</em>",
          intro: "La préparation éditoriale transforme une expertise souvent technique en lecture située : compréhensible, défendable, utile pour les dirigeants industriels, financeurs, conseils, équipes internes et partenaires de transformation."
        },
        process: [
          {
            num: "01",
            title: "L'échange de qualification",
            text: "15 minutes pour vérifier si votre lecture correspond à un angle disponible. Aucun chiffre ni dossier sensible à exposer.",
            deadline: "À planifier en amont du comité éditorial"
          },
          {
            num: "02",
            title: "Le dossier de positionnement",
            text: "Si l'angle est retenu, un dossier complet vous est adressé : angle précis, logique de mise en regard, modalités d'intervention, format émission et article associé."
          },
          {
            num: "03",
            title: "Le comité éditorial",
            text: "Le 15 juin, le comité éditorial examine les dossiers de positionnement et valide la composition finale. Vous êtes informé avant tout engagement.",
            deadline: "Comité : 15 juin 2026"
          },
          {
            num: "04",
            title: "La préparation & la production",
            text: "En Plateau travaille avec vous pour transformer votre lecture financière en position claire, non intrusive et publiquement défendable."
          }
        ],
        guarantees: [
          {
            accent: true,
            title: "Aucun chiffre confidentiel à exposer",
            text: "L'échange porte sur les mécanismes d'arbitrage économique, pas sur vos comptes, vos marges, vos coûts internes ou vos dossiers de financement."
          },
          {
            accent: true,
            title: "Aucun engagement avant le dossier de positionnement",
            text: "Vous ne vous engagez pas lors de l'échange éditorial. L'engagement intervient après réception du dossier et validation par le comité éditorial."
          },
          {
            title: "Pas de commentaire de situation financière",
            text: "La contribution ne consiste pas à commenter votre entreprise ou un client. Elle vise à rendre lisibles des seuils économiques et industriels."
          },
          {
            title: "Une parole préparée avec vos équipes si nécessaire",
            text: "La préparation peut intégrer vos contraintes de communication, juridiques, corporate ou de confidentialité."
          }
        ],
        faq: [
          {
            question: "Faut-il exposer des chiffres confidentiels ?",
            answer: "Non. La contribution porte sur les mécanismes d'arbitrage : ce qui change dans la décision industrielle lorsque les équilibres économiques ne permettent plus de tenir comme avant."
          },
          {
            question: "La lecture financière doit-elle venir d'un DAF ?",
            answer: "Pas nécessairement. Elle peut venir d'un DAF, d'un dirigeant, d'un conseil, d'un investisseur, d'un profil corporate finance ou d'un acteur industriel capable de relier finance et décision."
          },
          {
            question: "S'agit-il d'une prise de parole sur la performance financière ?",
            answer: "Non. Il ne s'agit pas de présenter une performance, mais d'éclairer les conditions économiques d'un arbitrage industriel : investir, différer, transformer, redéployer, céder ou renoncer."
          },
          {
            question: "Faut-il arriver avec une position déjà construite ?",
            answer: "Non. La préparation éditoriale sert précisément à transformer une conviction ou une expertise en position claire, située et défendable."
          }
        ],
        cta: {
          title: "Votre lecture financière peut éclairer ce que les chiffres seuls ne disent pas.",
          text: "Un échange de 15 minutes — sans exposer de chiffres, sans engagement — pour vérifier si votre angle a une place dans cette conversation avant la fermeture des positions.",
          deadline: "Comité éditorial : 15 juin 2026 · Les échanges précèdent la composition finale",
          footnote: "Les positions financières se ferment au fil de la composition éditoriale · Page non indexée"
        }
      }
    }
  }
};

/* ═══════════════════════════════════════════════════════════════════════
   Helpers de lecture — utilisables par landing pages, page Conversations,
   formulaire ou scripts de génération HTML.
═══════════════════════════════════════════════════════════════════════ */
window.EN_PLATEAU_EDITORIAL = (function(data) {
  function getCycle(cycleCode) {
    return data.cycles.find(function(cycle) {
      return cycle.code === cycleCode;
    }) || null;
  }

  function getContext(cycleCode, contextCode) {
    var cycle = getCycle(cycleCode);
    if (!cycle) return null;
    return cycle.contexts.find(function(context) {
      return context.code === contextCode;
    }) || null;
  }

  function getConversation(cycleCode, conversationCode) {
    var cycle = getCycle(cycleCode);
    if (!cycle) return null;
    return cycle.conversations.find(function(conversation) {
      return conversation.code === conversationCode;
    }) || null;
  }

  function getAngles(cycleCode) {
    var cycle = getCycle(cycleCode);
    return cycle && cycle.angles ? cycle.angles.slice() : [];
  }

  function getAnglesByReading(cycleCode, readingType) {
    return getAngles(cycleCode).filter(function(angle) {
      return angle.typeLecture === readingType;
    });
  }

  function getAnglesByLanding(slug) {
    var config = data.landingPages[slug];
    if (!config) return [];
    return getAnglesByReading(config.cycleCode, config.readingType).filter(function(angle) {
      return !angle.landingPages || angle.landingPages.indexOf(slug) !== -1;
    });
  }

  function getAnglesByConversation(cycleCode, conversationCode, readingType) {
    return getAngles(cycleCode).filter(function(angle) {
      return angle.conversationCode === conversationCode && (!readingType || angle.typeLecture === readingType);
    });
  }

  function getLandingConversationPanels(slug) {
    var config = data.landingPages[slug];
    if (!config) return [];

    var cycle = getCycle(config.cycleCode);
    if (!cycle) return [];

    var angles = getAnglesByLanding(slug);

    return cycle.conversations.map(function(conversation) {
      var conversationAngles = angles.filter(function(angle) {
        return angle.conversationCode === conversation.code;
      });

      return {
        conversation: conversation,
        angles: conversationAngles.map(function(angle) {
          return {
            angle: angle,
            context: getContext(config.cycleCode, angle.contextCode)
          };
        })
      };
    }).filter(function(panel) {
      return panel.angles.length > 0;
    });
  }

  function getFormOptions(cycleCode, readingType) {
    return getAngles(cycleCode)
      .filter(function(angle) {
        return angle.showInForm && (!readingType || angle.typeLecture === readingType);
      })
      .map(function(angle) {
        var conversation = getConversation(cycleCode, angle.conversationCode);
        var context = getContext(cycleCode, angle.contextCode);
        var reading = data.readingTypes[angle.typeLecture];

        return {
          value: angle.crmCode,
          label: angle.crmCode + " · " + (reading ? reading.shortLabel : angle.typeLecture) + " · " + (conversation ? conversation.title : angle.conversationCode) + " · " + (context ? context.label : angle.contextCode),
          question: angle.questionPublique,
          typeLecture: angle.typeLecture,
          conversationCode: angle.conversationCode,
          contextCode: angle.contextCode,
          programmeCode: angle.programmeCode
        };
      });
  }

  return {
    data: data,
    getCycle: getCycle,
    getContext: getContext,
    getConversation: getConversation,
    getAngles: getAngles,
    getAnglesByReading: getAnglesByReading,
    getAnglesByLanding: getAnglesByLanding,
    getAnglesByConversation: getAnglesByConversation,
    getLandingConversationPanels: getLandingConversationPanels,
    getFormOptions: getFormOptions
  };
})(window.EN_PLATEAU_EDITORIAL_DATA);


/* ═══════════════════════════════════════════════════════════════════════
   V7 — Formats courts et fiches longues intervenants
   Ces contenus enrichissent les angles existants sans modifier les codes CRM.
═══════════════════════════════════════════════════════════════════════ */
(function(data) {
  if (!data || !data.cycles) return;

  var angleContentExtensions = {
  "IND-C1-GS-A01": {
    "formatCourt": {
      "titrePublicCourt": "Quand produire plus commence-t-il à fragiliser la marge, la qualité et l’organisation ?",
      "usage": "Titre court pour landing page, page Conversations et sélection d’angle."
    },
    "formatLongIntervenant": {
      "titre": "Fiche intervenant — Croissance, marge, qualité et organisation",
      "chapeau": "Votre intervention permettrait d’analyser le moment où la hausse d’activité cesse d’être seulement une opportunité commerciale pour devenir un sujet d’arbitrage industriel. Le cœur de l’échange porte sur les tensions qui apparaissent entre volumes, marge, qualité, délais, organisation, investissements et capacité réelle de montée en charge.",
      "dimensions": [
        {
          "key": "transformation",
          "title": "Transformation en cours / contexte",
          "text": "Identifier ce que la hausse d’activité transforme réellement : volumes, délais, qualité attendue, coûts, organisation et besoins d’investissement."
        },
        {
          "key": "acteurs",
          "title": "Acteurs impactés",
          "text": "Montrer comment la croissance affecte la production, la qualité, la maintenance, les achats, la supply chain, la direction financière, les clients et parfois le territoire."
        },
        {
          "key": "arbitrages",
          "title": "Arbitrages & décisions",
          "text": "Éclairer les choix à faire : accepter ou sélectionner les commandes, préserver la marge, investir, renforcer les équipes, augmenter les cadences ou ralentir volontairement la croissance."
        },
        {
          "key": "defis",
          "title": "Défis & opportunités",
          "text": "Distinguer le risque d’une croissance subie — qualité dégradée, délais tendus, équipes saturées — et l’opportunité de structurer plus solidement le modèle industriel."
        },
        {
          "key": "vision",
          "title": "Vision attendue",
          "text": "Apporter une grille de lecture sur les signaux qui indiquent qu’une croissance cesse de renforcer l’activité et commence à la fragiliser."
        },
        {
          "key": "echelle",
          "title": "Échelle pertinente",
          "text": "Situer le verrou au bon niveau : site, entreprise, chaîne de valeur, bassin d’emploi, marché ou conditions territoriales."
        }
      ],
      "momentBascule": "Le basculement intervient lorsque chaque volume supplémentaire commence à dégrader la marge, la qualité, les délais ou l’équilibre organisationnel plus qu’il ne renforce l’activité.",
      "tensionCentrale": "Croître vite sans dégrader la marge, la qualité, les délais ni l’équilibre organisationnel.",
      "securisation": "L’échange ne suppose pas de commenter une situation interne, un client, un mandat ou une décision confidentielle. Il s’agit d’éclairer un mécanisme industriel à partir de votre expérience et de votre position d’observation."
    }
  },
  "IND-C1-RC-A01": {
    "formatCourt": {
      "titrePublicCourt": "Quand faut-il arrêter de corriger le modèle et décider de le changer ?",
      "usage": "Titre court pour landing page, page Conversations et sélection d’angle."
    },
    "formatLongIntervenant": {
      "titre": "Fiche intervenant — Modèle opérationnel devenu non soutenable",
      "chapeau": "Votre intervention viserait à éclairer le moment où les écarts répétés de coûts, délais, qualité, capacité ou organisation révèlent une limite plus profonde du modèle opérationnel. La discussion ne porte pas sur une crise particulière, mais sur la manière de reconnaître qu’un modèle ne peut plus être seulement corrigé.",
      "dimensions": [
        {
          "key": "transformation",
          "title": "Transformation en cours / contexte",
          "text": "Qualifier ce qui a changé : crise de coûts, délais qui dérivent, qualité plus difficile à tenir, organisation qui compense, outil qui n’absorbe plus."
        },
        {
          "key": "acteurs",
          "title": "Acteurs impactés",
          "text": "Identifier les acteurs concernés : direction générale, production, finance, équipes terrain, clients, fournisseurs, partenaires sociaux, financeurs ou territoire."
        },
        {
          "key": "arbitrages",
          "title": "Arbitrages & décisions",
          "text": "Éclairer les décisions possibles : corriger, investir, changer de périmètre, transformer l’outil, repositionner l’activité ou renoncer à certains équilibres passés."
        },
        {
          "key": "defis",
          "title": "Défis & opportunités",
          "text": "Montrer les risques d’une correction permanente et l’opportunité d’un réarbitrage plus lisible, plus assumé et plus soutenable."
        },
        {
          "key": "vision",
          "title": "Vision attendue",
          "text": "Apporter une lecture sur les signaux qui distinguent une difficulté conjoncturelle d’une fragilité structurelle du modèle."
        },
        {
          "key": "echelle",
          "title": "Échelle pertinente",
          "text": "Situer l’analyse à l’échelle du site, de l’entreprise, du modèle opérationnel, de la filière ou du territoire qui porte encore la trajectoire."
        }
      ],
      "momentBascule": "Le basculement intervient lorsque les écarts répétés ne relèvent plus d’un réglage, mais révèlent que le modèle existant produit lui-même ses fragilités.",
      "tensionCentrale": "Corriger l’existant ou reconnaître que le modèle doit être repensé.",
      "securisation": "L’échange ne suppose pas de commenter une situation interne, un client, un mandat ou une décision confidentielle. Il s’agit d’éclairer un mécanisme industriel à partir de votre expérience et de votre position d’observation."
    }
  },
  "IND-C2-GS-A05": {
    "formatCourt": {
      "titrePublicCourt": "Comment repérer les dépendances qui freinent la croissance avant qu’elles ne la bloquent ?",
      "usage": "Titre court pour landing page, page Conversations et sélection d’angle."
    },
    "formatLongIntervenant": {
      "titre": "Fiche intervenant — Dépendance fournisseur ou logistique révélée par la croissance",
      "chapeau": "Votre intervention permettrait d’éclairer comment l’augmentation des volumes révèle des dépendances fournisseurs, matières, composants ou logistiques qui restaient peu visibles tant que l’activité était stable. Le sujet consiste à comprendre quand une dépendance efficace devient une vulnérabilité stratégique.",
      "dimensions": [
        {
          "key": "transformation",
          "title": "Transformation en cours / contexte",
          "text": "Décrire le passage d’une dépendance invisible à une dépendance structurante lorsque les volumes augmentent et que les flux sont testés."
        },
        {
          "key": "acteurs",
          "title": "Acteurs impactés",
          "text": "Identifier les acteurs touchés : achats, fournisseurs critiques, logisticiens, supply chain, production, clients, direction industrielle et parfois filière territoriale."
        },
        {
          "key": "arbitrages",
          "title": "Arbitrages & décisions",
          "text": "Éclairer les arbitrages : sécuriser, diversifier, internaliser, relocaliser, contractualiser différemment ou accepter un coût plus élevé de maîtrise."
        },
        {
          "key": "defis",
          "title": "Défis & opportunités",
          "text": "Mettre en regard les risques de blocage, de coût ou de délai et l’opportunité de renforcer la résilience avant la rupture."
        },
        {
          "key": "vision",
          "title": "Vision attendue",
          "text": "Apporter une lecture des signaux faibles : dépendance unique, délai d’approvisionnement, fragilité logistique, absence d’alternative ou pouvoir de négociation réduit."
        },
        {
          "key": "echelle",
          "title": "Échelle pertinente",
          "text": "Situer le sujet à l’échelle du fournisseur, de la chaîne de valeur, de la filière, du site ou du territoire logistique."
        }
      ],
      "momentBascule": "Le basculement intervient lorsque la dépendance ne se contente plus d’accompagner la croissance, mais commence à déterminer ce qu’il est réellement possible de produire, livrer ou promettre.",
      "tensionCentrale": "Croître grâce à des dépendances efficaces sans devenir prisonnier de leur fragilité.",
      "securisation": "L’échange ne suppose pas de commenter une situation interne, un client, un mandat ou une décision confidentielle. Il s’agit d’éclairer un mécanisme industriel à partir de votre expérience et de votre position d’observation."
    }
  },
  "IND-C2-AC-A06": {
    "formatCourt": {
      "titrePublicCourt": "Sous contrainte, quelles dépendances faut-il protéger, transformer ou abandonner ?",
      "usage": "Titre court pour landing page, page Conversations et sélection d’angle."
    },
    "formatLongIntervenant": {
      "titre": "Fiche intervenant — Dépendances de filière et position future dans la chaîne de valeur",
      "chapeau": "Votre intervention permettrait d’analyser comment certaines dépendances de filière ou de segment limitent la capacité à ajuster l’activité sans fragiliser la position future dans la chaîne de valeur. L’enjeu est de distinguer l’adaptation utile du court terme et l’affaiblissement stratégique de long terme.",
      "dimensions": [
        {
          "key": "transformation",
          "title": "Transformation en cours / contexte",
          "text": "Qualifier le contexte de contrainte : marges réduites, ajustements de volumes, dépendances de segment, choix de clients ou de partenaires."
        },
        {
          "key": "acteurs",
          "title": "Acteurs impactés",
          "text": "Identifier les acteurs impactés : direction stratégie, commerce, production, achats, clients donneurs d’ordre, partenaires de filière et investisseurs."
        },
        {
          "key": "arbitrages",
          "title": "Arbitrages & décisions",
          "text": "Éclairer les décisions : réduire, maintenir, diversifier, repositionner, préserver un savoir-faire ou abandonner une dépendance devenue trop coûteuse."
        },
        {
          "key": "defis",
          "title": "Défis & opportunités",
          "text": "Montrer le risque de perdre une position future et l’opportunité de réarbitrer plus tôt la place dans la chaîne de valeur."
        },
        {
          "key": "vision",
          "title": "Vision attendue",
          "text": "Apporter une lecture sur ce qui fonde réellement la position stratégique : segment, expertise, accès marché, relation donneur d’ordre, capacité industrielle ou territoire."
        },
        {
          "key": "echelle",
          "title": "Échelle pertinente",
          "text": "Situer la décision à l’échelle de l’entreprise, de la filière, du portefeuille d’activités, du segment ou de la chaîne de valeur."
        }
      ],
      "momentBascule": "Le basculement intervient lorsque l’ajustement qui protège le court terme commence à affaiblir la position future dans la filière.",
      "tensionCentrale": "S’adapter sans perdre ce qui fonde la place stratégique dans la filière.",
      "securisation": "L’échange ne suppose pas de commenter une situation interne, un client, un mandat ou une décision confidentielle. Il s’agit d’éclairer un mécanisme industriel à partir de votre expérience et de votre position d’observation."
    }
  },
  "IND-C2-RC-A05": {
    "formatCourt": {
      "titrePublicCourt": "Quand une dépendance oblige-t-elle à changer de modèle plutôt qu’à mieux la piloter ?",
      "usage": "Titre court pour landing page, page Conversations et sélection d’angle."
    },
    "formatLongIntervenant": {
      "titre": "Fiche intervenant — Dépendance critique et changement de modèle d’approvisionnement",
      "chapeau": "Votre intervention viserait à éclairer le moment où une dépendance critique ne peut plus seulement être sécurisée ou diversifiée, mais impose une relocalisation, une substitution ou un changement de modèle d’approvisionnement. La discussion porte sur la frontière entre pilotage du risque et transformation du modèle.",
      "dimensions": [
        {
          "key": "transformation",
          "title": "Transformation en cours / contexte",
          "text": "Décrire la transformation de la dépendance : d’un levier d’efficacité à un risque de continuité industrielle."
        },
        {
          "key": "acteurs",
          "title": "Acteurs impactés",
          "text": "Identifier les acteurs concernés : achats, supply chain, production, fournisseurs, clients, direction générale, financeurs, acteurs publics ou filière."
        },
        {
          "key": "arbitrages",
          "title": "Arbitrages & décisions",
          "text": "Éclairer les arbitrages : conserver un modèle globalisé, diversifier, substituer, relocaliser, constituer des stocks ou accepter un surcoût de résilience."
        },
        {
          "key": "defis",
          "title": "Défis & opportunités",
          "text": "Montrer les risques de rupture et l’opportunité de reconstruire une maîtrise plus robuste de l’approvisionnement."
        },
        {
          "key": "vision",
          "title": "Vision attendue",
          "text": "Apporter une lecture permettant de distinguer une dépendance encore pilotable d’une dépendance devenue incompatible avec la continuité industrielle."
        },
        {
          "key": "echelle",
          "title": "Échelle pertinente",
          "text": "Situer la décision au niveau du site, du groupe, du réseau fournisseurs, de la filière ou de la géographie productive."
        }
      ],
      "momentBascule": "Le basculement intervient lorsque le coût, le délai ou le risque d’une dépendance rend insuffisante toute simple optimisation du pilotage.",
      "tensionCentrale": "Conserver l’efficacité d’un modèle globalisé ou reconstruire une résilience plus coûteuse mais plus maîtrisable.",
      "securisation": "L’échange ne suppose pas de commenter une situation interne, un client, un mandat ou une décision confidentielle. Il s’agit d’éclairer un mécanisme industriel à partir de votre expérience et de votre position d’observation."
    }
  },
  "IND-C3-GS-A12": {
    "formatCourt": {
      "titrePublicCourt": "Quand la croissance impose-t-elle de repenser l’outil plutôt que de seulement le décarboner à la marge ?",
      "usage": "Titre court pour landing page, page Conversations et sélection d’angle."
    },
    "formatLongIntervenant": {
      "titre": "Fiche intervenant — Croissance industrielle et décarbonation de l’outil",
      "chapeau": "Votre intervention permettrait d’analyser le moment où la croissance industrielle rend insuffisants les gains marginaux de décarbonation. Le sujet porte sur la manière dont les volumes, l’énergie, les matières, les utilités ou le mix produit obligent parfois à repenser le process ou l’outil lui-même.",
      "dimensions": [
        {
          "key": "transformation",
          "title": "Transformation en cours / contexte",
          "text": "Qualifier la croissance sous contrainte carbone : besoins accrus en énergie, matières, utilités, capacités et contraintes de trajectoire climat."
        },
        {
          "key": "acteurs",
          "title": "Acteurs impactés",
          "text": "Identifier les acteurs impactés : direction industrielle, énergie, process, finance, clients, fournisseurs, régulateurs, investisseurs et territoire."
        },
        {
          "key": "arbitrages",
          "title": "Arbitrages & décisions",
          "text": "Éclairer les décisions : optimiser, électrifier, changer d’énergie, redessiner le process, modifier le mix produit ou transformer l’outil."
        },
        {
          "key": "defis",
          "title": "Défis & opportunités",
          "text": "Mettre en regard les risques de croissance incompatible avec la trajectoire carbone et l’opportunité de repositionner l’outil sur une base plus soutenable."
        },
        {
          "key": "vision",
          "title": "Vision attendue",
          "text": "Apporter une lecture sur les seuils où la décarbonation devient une condition de croissance plutôt qu’un chantier périphérique."
        },
        {
          "key": "echelle",
          "title": "Échelle pertinente",
          "text": "Situer l’analyse à l’échelle du site, du process, de l’entreprise, de la filière énergétique ou du territoire industriel."
        }
      ],
      "momentBascule": "Le basculement intervient lorsque les gains marginaux ne suffisent plus à accompagner la croissance sans remettre en cause la trajectoire carbone ou la compétitivité future.",
      "tensionCentrale": "Croître industriellement tout en transformant réellement les conditions carbone de la production.",
      "securisation": "L’échange ne suppose pas de commenter une situation interne, un client, un mandat ou une décision confidentielle. Il s’agit d’éclairer un mécanisme industriel à partir de votre expérience et de votre position d’observation."
    }
  },
  "IND-C3-AC-A12": {
    "formatCourt": {
      "titrePublicCourt": "Quand la contrainte carbone redéfinit-elle les conditions de compétitivité ?",
      "usage": "Titre court pour landing page, page Conversations et sélection d’angle."
    },
    "formatLongIntervenant": {
      "titre": "Fiche intervenant — Décarbonation, compétitivité et investissement",
      "chapeau": "Votre intervention permettrait d’éclairer comment la décarbonation peut rebattre les conditions de compétitivité, d’investissement et de transformation de l’outil. L’échange porte sur le moment où le carbone cesse d’être un coût additionnel et devient un paramètre central de décision industrielle.",
      "dimensions": [
        {
          "key": "transformation",
          "title": "Transformation en cours / contexte",
          "text": "Qualifier le contexte : marges serrées, exigences carbone, CAPEX, utilités, coûts d’énergie, pression client ou réglementaire."
        },
        {
          "key": "acteurs",
          "title": "Acteurs impactés",
          "text": "Identifier les acteurs impactés : direction générale, finance, industrie, énergie, clients, investisseurs, équipes process et territoire."
        },
        {
          "key": "arbitrages",
          "title": "Arbitrages & décisions",
          "text": "Éclairer les arbitrages : différer, investir, prioriser certains sites, transformer le process, changer de mix produit ou accepter une rupture de compétitivité à court terme."
        },
        {
          "key": "defis",
          "title": "Défis & opportunités",
          "text": "Distinguer les risques de perte de compétitivité et les opportunités de différenciation, d’accès marché ou de soutenabilité future."
        },
        {
          "key": "vision",
          "title": "Vision attendue",
          "text": "Apporter une lecture des critères qui permettent de dire quand la décarbonation devient une décision stratégique plutôt qu’une contrainte de conformité."
        },
        {
          "key": "echelle",
          "title": "Échelle pertinente",
          "text": "Situer la décision à l’échelle du site, du portefeuille industriel, de la filière, du marché client ou de la chaîne de valeur."
        }
      ],
      "momentBascule": "Le basculement intervient lorsque la contrainte carbone modifie les conditions mêmes de compétitivité et rend insuffisants les arbitrages habituels de coût ou d’investissement.",
      "tensionCentrale": "Rester compétitif aujourd’hui tout en investissant dans une trajectoire carbone soutenable.",
      "securisation": "L’échange ne suppose pas de commenter une situation interne, un client, un mandat ou une décision confidentielle. Il s’agit d’éclairer un mécanisme industriel à partir de votre expérience et de votre position d’observation."
    }
  },
  "IND-C4-GS-A15": {
    "formatCourt": {
      "titrePublicCourt": "Comment savoir si l’on grandit dans la bonne direction — ou plus vite vers la fragilité ?",
      "usage": "Titre court pour landing page, page Conversations et sélection d’angle."
    },
    "formatLongIntervenant": {
      "titre": "Fiche intervenant — Carnet de commandes, marge et qualité de croissance",
      "chapeau": "Votre intervention permettrait d’éclairer comment un carnet de commandes en croissance peut masquer une fragilité commerciale : commandes qui consomment la capacité, marges difficiles à défendre, coûts insuffisamment répercutés ou trajectoire de transformation retardée.",
      "dimensions": [
        {
          "key": "transformation",
          "title": "Transformation en cours / contexte",
          "text": "Qualifier ce que révèle la croissance commerciale : volumes, mix de commandes, conditions économiques, pression délai, marge et capacité industrielle mobilisée."
        },
        {
          "key": "acteurs",
          "title": "Acteurs impactés",
          "text": "Identifier les acteurs concernés : direction commerciale, direction générale, production, finance, clients, donneurs d’ordre, supply chain et équipes de pilotage."
        },
        {
          "key": "arbitrages",
          "title": "Arbitrages & décisions",
          "text": "Éclairer les décisions : sélectionner certaines commandes, répercuter les coûts, défendre les conditions économiques, refuser une croissance destructrice ou repositionner l’offre."
        },
        {
          "key": "defis",
          "title": "Défis & opportunités",
          "text": "Montrer le risque d’un carnet rempli mais destructeur de marge et l’opportunité de construire une croissance plus sélective et plus robuste."
        },
        {
          "key": "vision",
          "title": "Vision attendue",
          "text": "Apporter une lecture des signaux qui distinguent une croissance bien positionnée d’une croissance qui fragilise la trajectoire."
        },
        {
          "key": "echelle",
          "title": "Échelle pertinente",
          "text": "Situer l’analyse au niveau du carnet, du portefeuille clients, de l’outil industriel, du modèle économique ou de la chaîne de valeur."
        }
      ],
      "momentBascule": "Le basculement intervient lorsque la croissance du carnet commence à consommer plus de marge, de capacité ou de souplesse qu’elle n’en crée.",
      "tensionCentrale": "Remplir le carnet sans accepter une croissance qui consomme la marge et la capacité industrielle.",
      "securisation": "L’échange ne suppose pas de commenter une situation interne, un client, un mandat ou une décision confidentielle. Il s’agit d’éclairer un mécanisme industriel à partir de votre expérience et de votre position d’observation."
    }
  },
  "IND-C4-AC-A15": {
    "formatCourt": {
      "titrePublicCourt": "Quand la pression commerciale empêche-t-elle toute adaptation viable ?",
      "usage": "Titre court pour landing page, page Conversations et sélection d’angle."
    },
    "formatLongIntervenant": {
      "titre": "Fiche intervenant — Pression donneurs d’ordre et capacité d’adaptation",
      "chapeau": "Votre intervention permettrait d’analyser comment la pression des clients ou donneurs d’ordre sur les prix, les délais ou les conditions contractuelles peut limiter la marge nécessaire au maintien ou à l’adaptation de l’outil. Le sujet porte sur la capacité à financer l’adaptation lorsque la relation commerciale absorbe les marges de manœuvre.",
      "dimensions": [
        {
          "key": "transformation",
          "title": "Transformation en cours / contexte",
          "text": "Qualifier le contexte de pression commerciale : prix, délais, exigences contractuelles, dépendance client, coûts non répercutés ou volumes contraints."
        },
        {
          "key": "acteurs",
          "title": "Acteurs impactés",
          "text": "Identifier les acteurs touchés : clients, donneurs d’ordre, direction commerciale, finance, production, achats, direction générale et filière."
        },
        {
          "key": "arbitrages",
          "title": "Arbitrages & décisions",
          "text": "Éclairer les arbitrages : servir le client, renégocier, sélectionner, réduire le périmètre, investir malgré tout ou changer de position dans la chaîne de valeur."
        },
        {
          "key": "defis",
          "title": "Défis & opportunités",
          "text": "Montrer les risques d’une adaptation impossible faute de marge et les opportunités d’une relation commerciale mieux rééquilibrée."
        },
        {
          "key": "vision",
          "title": "Vision attendue",
          "text": "Apporter une lecture sur le moment où la pression client cesse d’être une contrainte commerciale et devient un obstacle industriel."
        },
        {
          "key": "echelle",
          "title": "Échelle pertinente",
          "text": "Situer l’analyse à l’échelle du client, du portefeuille, de la filière, du site industriel ou de la chaîne de valeur."
        }
      ],
      "momentBascule": "Le basculement intervient lorsque la pression commerciale empêche de préserver la marge nécessaire pour maintenir, investir ou transformer l’outil.",
      "tensionCentrale": "Servir les clients sans perdre la marge nécessaire pour maintenir et transformer l’outil.",
      "securisation": "L’échange ne suppose pas de commenter une situation interne, un client, un mandat ou une décision confidentielle. Il s’agit d’éclairer un mécanisme industriel à partir de votre expérience et de votre position d’observation."
    }
  },
  "IND-C4-RC-A15": {
    "formatCourt": {
      "titrePublicCourt": "Quand le modèle commercial devient-il incompatible avec l’outil ou la trajectoire industrielle ?",
      "usage": "Titre court pour landing page, page Conversations et sélection d’angle."
    },
    "formatLongIntervenant": {
      "titre": "Fiche intervenant — Structure commerciale et repositionnement industriel",
      "chapeau": "Votre intervention permettrait d’éclairer le moment où la structure commerciale impose un changement de marché, de portefeuille, de partenariat ou de position dans la chaîne de valeur. L’échange porte sur les situations où mieux vendre ou mieux négocier ne suffit plus : c’est la place même de l’entreprise ou du site qui doit être réinterrogée.",
      "dimensions": [
        {
          "key": "transformation",
          "title": "Transformation en cours / contexte",
          "text": "Qualifier la crise de positionnement : marchés moins porteurs, portefeuille trop fragile, pression clients, inadéquation entre offre, outil et marge."
        },
        {
          "key": "acteurs",
          "title": "Acteurs impactés",
          "text": "Identifier les acteurs impactés : direction générale, commerce, finance, production, partenaires, clients, investisseurs, filière et territoire."
        },
        {
          "key": "arbitrages",
          "title": "Arbitrages & décisions",
          "text": "Éclairer les décisions : changer de marché, modifier le portefeuille, nouer un partenariat, céder, intégrer, spécialiser ou repositionner l’activité."
        },
        {
          "key": "defis",
          "title": "Défis & opportunités",
          "text": "Mettre en regard le risque de rester prisonnier de marchés non viables et l’opportunité de reconstruire une trajectoire plus soutenable."
        },
        {
          "key": "vision",
          "title": "Vision attendue",
          "text": "Apporter une lecture du moment où la question n’est plus commerciale, mais stratégique et industrielle."
        },
        {
          "key": "echelle",
          "title": "Échelle pertinente",
          "text": "Situer la décision à l’échelle de l’entreprise, du site, du portefeuille, de la filière, du marché ou de la chaîne de valeur."
        }
      ],
      "momentBascule": "Le basculement intervient lorsque le modèle commercial existant devient incompatible avec la capacité industrielle, la marge ou la trajectoire future.",
      "tensionCentrale": "Conserver les marchés existants ou changer de position pour préserver la viabilité industrielle.",
      "securisation": "L’échange ne suppose pas de commenter une situation interne, un client, un mandat ou une décision confidentielle. Il s’agit d’éclairer un mécanisme industriel à partir de votre expérience et de votre position d’observation."
    }
  },
  "IND-C1-AC-A01": {
    "formatCourt": {
      "titrePublicCourt": "Quand les ajustements économiques qui permettent de tenir commencent-ils à fragiliser l’avenir ?",
      "usage": "Titre court pour landing page, page Conversations et sélection d’angle."
    },
    "formatLongIntervenant": {
      "titre": "Fiche intervenant — Ajustements économiques et soutenabilité future",
      "chapeau": "Votre intervention permettrait d’éclairer comment les ajustements sur volumes, achats, investissements, équipes ou maintenance permettent de tenir l’activité tout en fragilisant progressivement l’équilibre économique. La discussion porte sur la frontière entre adaptation utile et destruction différée de valeur.",
      "dimensions": [
        {
          "key": "transformation",
          "title": "Transformation en cours / contexte",
          "text": "Qualifier le contexte économique : marges réduites, coûts à absorber, investissements différés, activité maintenue au prix d’ajustements répétés."
        },
        {
          "key": "acteurs",
          "title": "Acteurs impactés",
          "text": "Identifier les acteurs concernés : direction financière, direction industrielle, achats, maintenance, production, équipes, clients, financeurs ou actionnaires."
        },
        {
          "key": "arbitrages",
          "title": "Arbitrages & décisions",
          "text": "Éclairer les décisions : différer, réduire, préserver la trésorerie, maintenir la capacité, arbitrer un CAPEX ou accepter une transformation plus coûteuse."
        },
        {
          "key": "defis",
          "title": "Défis & opportunités",
          "text": "Distinguer le risque de déplacer la contrainte et l’opportunité de rendre visibles les conditions économiques réelles de la soutenabilité."
        },
        {
          "key": "vision",
          "title": "Vision attendue",
          "text": "Apporter une lecture du seuil où l’ajustement cesse de protéger l’activité et commence à affaiblir sa trajectoire future."
        },
        {
          "key": "echelle",
          "title": "Échelle pertinente",
          "text": "Situer l’analyse à l’échelle du site, du compte d’exploitation industriel, de l’entreprise, du portefeuille ou de la trajectoire d’investissement."
        }
      ],
      "momentBascule": "Le basculement intervient lorsque les économies ou reports qui permettent de tenir détruisent davantage de valeur future qu’ils n’en préservent à court terme.",
      "tensionCentrale": "Maintenir l’activité aujourd’hui sans affaiblir les conditions de sa soutenabilité future.",
      "securisation": "L’échange ne suppose pas de livrer des chiffres, marges, budgets, contrats, coûts internes ou dossiers confidentiels. Il s’agit d’éclairer les mécanismes économiques qui rendent certains arbitrages industriels nécessaires."
    }
  },
  "IND-C1-RC-A03": {
    "formatCourt": {
      "titrePublicCourt": "Quand une dette technologique devient-elle une décision de transformation ?",
      "usage": "Titre court pour landing page, page Conversations et sélection d’angle."
    },
    "formatLongIntervenant": {
      "titre": "Fiche intervenant — Dette technologique et saut d’investissement",
      "chapeau": "Votre intervention viserait à analyser comment une dette technologique accumulée — systèmes hétérogènes, automatismes dépassés, équipements difficiles à maintenir — peut finir par imposer un saut d’investissement, un changement de périmètre ou une transformation profonde de l’outil.",
      "dimensions": [
        {
          "key": "transformation",
          "title": "Transformation en cours / contexte",
          "text": "Qualifier la dette accumulée : obsolescence, interfaces fragiles, maintenance coûteuse, systèmes hétérogènes, CAPEX différé ou perte d’adaptabilité."
        },
        {
          "key": "acteurs",
          "title": "Acteurs impactés",
          "text": "Identifier les acteurs impactés : finance, industrie, maintenance, systèmes, production, direction générale, investisseurs, clients et équipes terrain."
        },
        {
          "key": "arbitrages",
          "title": "Arbitrages & décisions",
          "text": "Éclairer les arbitrages : reporter, investir, transformer, céder, changer de périmètre ou accepter une rupture technologique."
        },
        {
          "key": "defis",
          "title": "Défis & opportunités",
          "text": "Mettre en regard le risque de blocage progressif et l’opportunité de transformer l’outil avant que l’adaptation ne devienne impossible."
        },
        {
          "key": "vision",
          "title": "Vision attendue",
          "text": "Apporter une lecture du moment où un retard d’investissement cesse d’être gérable et devient un verrou stratégique."
        },
        {
          "key": "echelle",
          "title": "Échelle pertinente",
          "text": "Situer la décision à l’échelle de l’équipement, du système, du site, du portefeuille industriel ou de la trajectoire CAPEX."
        }
      ],
      "momentBascule": "Le basculement intervient lorsque la dette technologique bloque toute adaptation crédible ou rend le coût du maintien supérieur à celui d’une transformation assumée.",
      "tensionCentrale": "Reporter l’investissement ou accepter une rupture technologique devenue nécessaire.",
      "securisation": "L’échange ne suppose pas de livrer des chiffres, marges, budgets, contrats, coûts internes ou dossiers confidentiels. Il s’agit d’éclairer les mécanismes économiques qui rendent certains arbitrages industriels nécessaires."
    }
  },
  "IND-C2-AC-A05": {
    "formatCourt": {
      "titrePublicCourt": "Quand une dépendance amont ou logistique devient-elle économiquement intenable ?",
      "usage": "Titre court pour landing page, page Conversations et sélection d’angle."
    },
    "formatLongIntervenant": {
      "titre": "Fiche intervenant — Dépendance amont/logistique devenue trop coûteuse",
      "chapeau": "Votre intervention permettrait d’éclairer comment une dépendance amont ou logistique reste acceptable tant que les marges de manœuvre existent, puis devient trop risquée ou trop coûteuse lorsque ces marges se réduisent. Le sujet porte sur le coût réel de pilotage d’une dépendance.",
      "dimensions": [
        {
          "key": "transformation",
          "title": "Transformation en cours / contexte",
          "text": "Qualifier la dépendance : fournisseur, matière, composant, transport, flux, stock, délai, volatilité ou pouvoir de négociation."
        },
        {
          "key": "acteurs",
          "title": "Acteurs impactés",
          "text": "Identifier les acteurs touchés : achats, supply chain, finance, production, fournisseurs, clients, direction industrielle et logistique."
        },
        {
          "key": "arbitrages",
          "title": "Arbitrages & décisions",
          "text": "Éclairer les arbitrages : sécuriser, diversifier, stocker, renégocier, internaliser, substituer ou accepter un coût de maîtrise plus élevé."
        },
        {
          "key": "defis",
          "title": "Défis & opportunités",
          "text": "Montrer le risque d’une dépendance devenue trop coûteuse et l’opportunité de reconstruire une résilience économiquement défendable."
        },
        {
          "key": "vision",
          "title": "Vision attendue",
          "text": "Apporter une lecture du seuil où une dépendance cesse d’être un levier d’efficacité et devient un risque économique."
        },
        {
          "key": "echelle",
          "title": "Échelle pertinente",
          "text": "Situer l’analyse à l’échelle du fournisseur, de la supply chain, du site, de la filière ou du compte d’exploitation industriel."
        }
      ],
      "momentBascule": "Le basculement intervient lorsque le coût de pilotage, de sécurisation ou de contournement d’une dépendance devient incompatible avec l’équilibre économique de l’activité.",
      "tensionCentrale": "Préserver l’efficacité d’une dépendance sans subir son coût croissant.",
      "securisation": "L’échange ne suppose pas de livrer des chiffres, marges, budgets, contrats, coûts internes ou dossiers confidentiels. Il s’agit d’éclairer les mécanismes économiques qui rendent certains arbitrages industriels nécessaires."
    }
  },
  "IND-C3-AC-A09": {
    "formatCourt": {
      "titrePublicCourt": "Quand transformer avec peu de moyens reste-t-il crédible — et quand cela ne suffit-il plus ?",
      "usage": "Titre court pour landing page, page Conversations et sélection d’angle."
    },
    "formatLongIntervenant": {
      "titre": "Fiche intervenant — Transformer l’outil avec des marges serrées",
      "chapeau": "Votre intervention permettrait d’analyser ce qui transforme réellement un outil industriel lorsque les marges sont serrées : investissement ciblé, recomposition frugale du process, simplification, priorisation ou transformation plus profonde. L’enjeu est de distinguer l’amélioration utile de la correction insuffisante.",
      "dimensions": [
        {
          "key": "transformation",
          "title": "Transformation en cours / contexte",
          "text": "Qualifier le contexte : marges contraintes, CAPEX limité, outil à faire évoluer, process à simplifier, performance à maintenir."
        },
        {
          "key": "acteurs",
          "title": "Acteurs impactés",
          "text": "Identifier les acteurs concernés : finance, direction industrielle, production, maintenance, process, qualité, équipes opérationnelles et direction générale."
        },
        {
          "key": "arbitrages",
          "title": "Arbitrages & décisions",
          "text": "Éclairer les arbitrages : investir peu mais juste, recomposer le process, prioriser un équipement, reporter, transformer plus fortement ou renoncer à certains objectifs."
        },
        {
          "key": "defis",
          "title": "Défis & opportunités",
          "text": "Mettre en regard le risque de petits ajustements insuffisants et l’opportunité d’une transformation ciblée, frugale mais réellement structurante."
        },
        {
          "key": "vision",
          "title": "Vision attendue",
          "text": "Apporter une lecture du moment où l’amélioration frugale ne suffit plus à changer la trajectoire industrielle."
        },
        {
          "key": "echelle",
          "title": "Échelle pertinente",
          "text": "Situer la décision à l’échelle de l’atelier, du process, de l’outil, du site ou de la trajectoire d’investissement."
        }
      ],
      "momentBascule": "Le basculement intervient lorsque les améliorations ciblées ne modifient plus la capacité réelle de l’outil à tenir ou à évoluer.",
      "tensionCentrale": "Transformer avec peu de moyens sans se limiter à des corrections insuffisantes.",
      "securisation": "L’échange ne suppose pas de livrer des chiffres, marges, budgets, contrats, coûts internes ou dossiers confidentiels. Il s’agit d’éclairer les mécanismes économiques qui rendent certains arbitrages industriels nécessaires."
    }
  },
  "IND-C4-AC-A14": {
    "formatCourt": {
      "titrePublicCourt": "Quand les coûts de ressources deviennent-ils des paramètres de transformation industrielle ?",
      "usage": "Titre court pour landing page, page Conversations et sélection d’angle."
    },
    "formatLongIntervenant": {
      "titre": "Fiche intervenant — Coûts énergie, eau, conformité et compétitivité",
      "chapeau": "Votre intervention permettrait d’éclairer comment les coûts d’énergie, d’eau ou de conformité environnementale cessent d’être de simples surcoûts absorbables et deviennent des paramètres structurants de compétitivité, d’investissement ou de transformation industrielle.",
      "dimensions": [
        {
          "key": "transformation",
          "title": "Transformation en cours / contexte",
          "text": "Qualifier le contexte : hausse des coûts de ressources, exigences de conformité, accès à l’eau ou à l’énergie, compétitivité sous contrainte."
        },
        {
          "key": "acteurs",
          "title": "Acteurs impactés",
          "text": "Identifier les acteurs impactés : finance, industrie, énergie, environnement, production, clients, régulateurs, territoire et investisseurs."
        },
        {
          "key": "arbitrages",
          "title": "Arbitrages & décisions",
          "text": "Éclairer les décisions : absorber, répercuter, investir, réduire l’activité, transformer l’outil, changer de process ou réarbitrer la localisation."
        },
        {
          "key": "defis",
          "title": "Défis & opportunités",
          "text": "Montrer le risque d’une compétitivité dégradée et l’opportunité de faire des ressources un levier de transformation plus robuste."
        },
        {
          "key": "vision",
          "title": "Vision attendue",
          "text": "Apporter une lecture du seuil où les coûts de ressources changent la nature de la décision industrielle."
        },
        {
          "key": "echelle",
          "title": "Échelle pertinente",
          "text": "Situer l’analyse à l’échelle du site, du process, de la facture énergétique, du territoire, de la filière ou de la trajectoire d’investissement."
        }
      ],
      "momentBascule": "Le basculement intervient lorsque les coûts de ressources ou de conformité ne peuvent plus être absorbés sans dégrader la compétitivité ou retarder la transformation.",
      "tensionCentrale": "Absorber les surcoûts pour préserver la compétitivité à court terme ou investir dans la transformation.",
      "securisation": "L’échange ne suppose pas de livrer des chiffres, marges, budgets, contrats, coûts internes ou dossiers confidentiels. Il s’agit d’éclairer les mécanismes économiques qui rendent certains arbitrages industriels nécessaires."
    }
  }
};

  data.notes.formulationLevels = [
    "questionEditoriale",
    "questionPublique",
    "questionActivation",
    "formatCourt",
    "formatLongIntervenant"
  ];
  data.notes.intervenantLongFormat = "Chaque angle peut maintenant contenir un formatCourt et un formatLongIntervenant avec chapeau, 6 dimensions, moment de bascule, tension centrale et phrase de sécurisation.";

  data.cycles.forEach(function(cycle) {
    if (!cycle.angles) return;
    cycle.angles.forEach(function(angle) {
      var extension = angleContentExtensions[angle.crmCode];
      if (!extension) return;
      angle.formatCourt = extension.formatCourt;
      angle.formatLongIntervenant = extension.formatLongIntervenant;
    });
  });
})(window.EN_PLATEAU_EDITORIAL_DATA);


/* ═══════════════════════════════════════════════════════════════════════
   V9 — Angles complémentaires complets issus du programme éditorial source

   Règle éditoriale corrigée :
   - les lectures complémentaires affichées sous un angle cible appartiennent à la même conversation ET au même contexte ;
   - elles correspondent donc aux 3 autres angles de la conversation contextualisée ;
   - le libellé « Vous » n’est jamais ajouté aux acteurs pressentis des lectures complémentaires.
═══════════════════════════════════════════════════════════════════════ */
(function(data) {
  if (!data || !data.cycles) return;

  var extraReadingTypes = {
  "OPERATIONNELLE": {
    "code": "OPERATIONNELLE",
    "label": "Lecture opérationnelle",
    "slug": "operationnelle",
    "shortLabel": "Opérationnelle"
  },
  "TECHNOLOGIQUE_SYSTEMES": {
    "code": "TECHNOLOGIQUE_SYSTEMES",
    "label": "Lecture technologique / systèmes",
    "slug": "technologie-systemes",
    "shortLabel": "Technologique / systèmes"
  },
  "RH_COMPETENCES": {
    "code": "RH_COMPETENCES",
    "label": "Lecture RH / compétences",
    "slug": "rh-competences",
    "shortLabel": "RH / compétences"
  },
  "TERRITORIALE": {
    "code": "TERRITORIALE",
    "label": "Lecture territoriale",
    "slug": "territoriale",
    "shortLabel": "Territoriale"
  },
  "JURIDIQUE_REGLEMENTAIRE": {
    "code": "JURIDIQUE_REGLEMENTAIRE",
    "label": "Lecture juridique / réglementaire",
    "slug": "juridique-reglementaire",
    "shortLabel": "Juridique / réglementaire"
  },
  "ENERGIE_RESSOURCES_DECARBONATION": {
    "code": "ENERGIE_RESSOURCES_DECARBONATION",
    "label": "Lecture énergie / ressources / décarbonation",
    "slug": "energie-ressources-decarbonation",
    "shortLabel": "Énergie / ressources / décarbonation"
  }
};
  Object.keys(extraReadingTypes).forEach(function(key) {
    if (!data.readingTypes[key]) data.readingTypes[key] = extraReadingTypes[key];
  });

  var sourceAngles = [
  {
    "code": "A01",
    "crmCode": "IND-C1-GS-A01",
    "programmeCode": "IND-C1-CST-01",
    "conversationCode": "C1",
    "contextCode": "GS",
    "typeLecture": "STRATEGIQUE",
    "questionEditoriale": "À partir de quand la hausse d'activité met-elle sous tension les conditions de marge, de qualité et d'organisation au point d'obliger à arbitrer autrement ?",
    "questionPublique": "À partir de quand chaque volume supplémentaire dégrade-t-il plus l'organisation qu'il ne renforce l'activité ?",
    "questionActivation": "Dans l'industrie, la croissance est souvent perçue comme une bonne nouvelle. Mais lorsqu'elle s'accélère, elle peut révéler des tensions moins visibles : marges comprimées, qualité plus difficile à tenir, organisation saturée, investissements à engager plus tôt que prévu.",
    "introMecanisme": "Dans l'industrie, la croissance est souvent perçue comme une bonne nouvelle. Mais lorsqu'elle s'accélère, elle peut révéler des tensions moins visibles : marges comprimées, qualité plus difficile à tenir, organisation saturée, investissements à engager plus tôt que prévu.",
    "pointBascule": "À partir de quand chaque volume supplémentaire dégrade-t-il plus l'organisation qu'il ne renforce l'activité ?",
    "tensionArbitrage": "Croître vite sans dégrader la marge, la qualité, les délais ni l'équilibre organisationnel.",
    "primaryProfiles": [
      "Direction générale",
      "Direction stratégie",
      "Direction industrielle",
      "Conseil stratégie industrielle",
      "Compétitivité"
    ],
    "formatCourt": {
      "titrePublicCourt": "À partir de quand chaque volume supplémentaire dégrade-t-il plus l'organisation qu'il ne renforce l'activité ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 1,
    "landingPages": [
      "strategie"
    ]
  },
  {
    "code": "A02",
    "crmCode": "IND-C1-GS-A02",
    "programmeCode": "IND-C1-CST-02",
    "conversationCode": "C1",
    "contextCode": "GS",
    "typeLecture": "OPERATIONNELLE",
    "questionEditoriale": "Quels arbitrages de cadence, de stocks, de maintenance ou de qualité permettent d'absorber la demande tout en mettant sous tension l'organisation industrielle à moyen terme ?",
    "questionPublique": "À partir de quand produire plus dégrade-t-il durablement la performance industrielle ?",
    "questionActivation": "Lorsque la demande augmente, l'entreprise peut absorber une partie de la croissance en jouant sur les cadences, les stocks, les plannings, la maintenance ou les contrôles qualité. Ces leviers permettent de répondre rapidement au marché, mais chacun porte un coût différé.",
    "introMecanisme": "Lorsque la demande augmente, l'entreprise peut absorber une partie de la croissance en jouant sur les cadences, les stocks, les plannings, la maintenance ou les contrôles qualité. Ces leviers permettent de répondre rapidement au marché, mais chacun porte un coût différé.",
    "pointBascule": "À partir de quand produire plus dégrade-t-il durablement la performance industrielle ?",
    "tensionArbitrage": "Absorber la demande immédiate sans user l'outil, les équipes et les standards de qualité.",
    "primaryProfiles": [
      "Direction industrielle",
      "Responsable opérations",
      "Excellence opérationnelle",
      "Supply chain",
      "Direction de site"
    ],
    "formatCourt": {
      "titrePublicCourt": "À partir de quand produire plus dégrade-t-il durablement la performance industrielle ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 2
  },
  {
    "code": "A03",
    "crmCode": "IND-C1-GS-A03",
    "programmeCode": "IND-C1-CST-03",
    "conversationCode": "C1",
    "contextCode": "GS",
    "typeLecture": "TECHNOLOGIQUE_SYSTEMES",
    "questionEditoriale": "À partir de quand l'architecture de l'outil limite-t-elle la capacité à franchir un cap de volume, de qualité ou de fiabilité ?",
    "questionPublique": "À partir de quand l'outil existant empêche-t-il de passer un cap de volume, de qualité ou de fiabilité ?",
    "questionActivation": "Un outil industriel peut accompagner une croissance pendant un certain temps. Mais l'architecture initiale finit parfois par imposer ses limites : organisation des lignes, capacité des machines, interfaces numériques, contraintes de maintenance ou standards de qualité.",
    "introMecanisme": "Un outil industriel peut accompagner une croissance pendant un certain temps. Mais l'architecture initiale finit parfois par imposer ses limites : organisation des lignes, capacité des machines, interfaces numériques, contraintes de maintenance ou standards de qualité.",
    "pointBascule": "À partir de quand l'outil existant empêche-t-il de passer un cap de volume, de qualité ou de fiabilité ?",
    "tensionArbitrage": "Optimiser l'outil existant ou accepter qu'il faille le transformer plus profondément.",
    "primaryProfiles": [
      "Direction technique",
      "OT / IT industriel",
      "Automatisation",
      "Intégration systèmes",
      "Maintenance industrielle"
    ],
    "formatCourt": {
      "titrePublicCourt": "À partir de quand l'outil existant empêche-t-il de passer un cap de volume, de qualité ou de fiabilité ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 3
  },
  {
    "code": "A04",
    "crmCode": "IND-C1-GS-A04",
    "programmeCode": "IND-C1-CST-04",
    "conversationCode": "C1",
    "contextCode": "GS",
    "typeLecture": "RH_COMPETENCES",
    "questionEditoriale": "À partir de quand le délai nécessaire pour recruter, équiper, industrialiser ou sécuriser la montée en capacité devient-il incompatible avec le rythme de la demande ?",
    "questionPublique": "À partir de quand le temps nécessaire pour monter en capacité devient-il incompatible avec l'opportunité commerciale ?",
    "questionActivation": "La croissance industrielle dépend aussi du temps nécessaire pour recruter, former, équiper, qualifier, industrialiser et sécuriser la montée en capacité. Or le marché peut accélérer plus vite que l'organisation ne sait se transformer.",
    "introMecanisme": "La croissance industrielle dépend aussi du temps nécessaire pour recruter, former, équiper, qualifier, industrialiser et sécuriser la montée en capacité. Or le marché peut accélérer plus vite que l'organisation ne sait se transformer.",
    "pointBascule": "À partir de quand le temps nécessaire pour monter en capacité devient-il incompatible avec l'opportunité commerciale ?",
    "tensionArbitrage": "Répondre vite au marché sans brûler les étapes humaines, techniques et industrielles.",
    "primaryProfiles": [
      "DRH industriel",
      "Responsable compétences",
      "Formation industrielle",
      "Organisation du travail",
      "Direction de site"
    ],
    "formatCourt": {
      "titrePublicCourt": "À partir de quand le temps nécessaire pour monter en capacité devient-il incompatible avec l'opportunité commerciale ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 4
  },
  {
    "code": "A01",
    "crmCode": "IND-C1-AC-A01",
    "programmeCode": "IND-C1-ASC-01",
    "conversationCode": "C1",
    "contextCode": "AC",
    "typeLecture": "FINANCIERE",
    "questionEditoriale": "À partir de quand les ajustements sur les volumes, les achats, les équipes ou la maintenance permettent-ils encore de tenir, tout en fragilisant progressivement l'équilibre économique ?",
    "questionPublique": "À partir de quand l'adaptation détruit-elle plus de valeur qu'elle n'en préserve ?",
    "questionActivation": "Quand l'activité devient plus difficile à piloter, les entreprises commencent souvent par ajuster : volumes, achats, investissements, équipes ou maintenance. Ces ajustements permettent de tenir, parfois longtemps. Mais ils peuvent aussi déplacer la contrainte plutôt que la résoudre.",
    "introMecanisme": "Quand l'activité devient plus difficile à piloter, les entreprises commencent souvent par ajuster : volumes, achats, investissements, équipes ou maintenance. Ces ajustements permettent de tenir, parfois longtemps. Mais ils peuvent aussi déplacer la contrainte plutôt que la résoudre.",
    "pointBascule": "À partir de quand l'adaptation détruit-elle plus de valeur qu'elle n'en préserve ?",
    "tensionArbitrage": "Maintenir l'activité aujourd'hui sans affaiblir les conditions de sa soutenabilité future.",
    "primaryProfiles": [
      "DAF / CFO industriel",
      "Contrôle de gestion industriel",
      "Corporate finance",
      "Restructuring",
      "Direction générale"
    ],
    "formatCourt": {
      "titrePublicCourt": "À partir de quand l'adaptation détruit-elle plus de valeur qu'elle n'en préserve ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 1,
    "landingPages": [
      "finance"
    ]
  },
  {
    "code": "A02",
    "crmCode": "IND-C1-AC-A02",
    "programmeCode": "IND-C1-ASC-02",
    "conversationCode": "C1",
    "contextCode": "AC",
    "typeLecture": "OPERATIONNELLE",
    "questionEditoriale": "Quels arbitrages permettent de maintenir l'activité lorsque les marges de manœuvre sur volumes, qualité, maintenance ou périmètre se resserrent ?",
    "questionPublique": "À partir de quand les compromis opérationnels deviennent-ils structurels ?",
    "questionActivation": "Dans un contexte contraint, maintenir l'activité suppose souvent de choisir entre des options imparfaites. Réduire certains volumes peut préserver la marge mais fragiliser la relation client. Reporter la maintenance peut libérer de la capacité mais accroître le risque industriel.",
    "introMecanisme": "Dans un contexte contraint, maintenir l'activité suppose souvent de choisir entre des options imparfaites. Réduire certains volumes peut préserver la marge mais fragiliser la relation client. Reporter la maintenance peut libérer de la capacité mais accroître le risque industriel.",
    "pointBascule": "À partir de quand les compromis opérationnels deviennent-ils structurels ?",
    "tensionArbitrage": "Tenir l'activité sans transformer les ajustements temporaires en fragilité durable.",
    "primaryProfiles": [
      "Direction industrielle",
      "Responsable opérations",
      "Excellence opérationnelle",
      "Supply chain",
      "Direction de site"
    ],
    "formatCourt": {
      "titrePublicCourt": "À partir de quand les compromis opérationnels deviennent-ils structurels ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 2
  },
  {
    "code": "A03",
    "crmCode": "IND-C1-AC-A03",
    "programmeCode": "IND-C1-ASC-03",
    "conversationCode": "C1",
    "contextCode": "AC",
    "typeLecture": "TECHNOLOGIQUE_SYSTEMES",
    "questionEditoriale": "À partir de quand le vieillissement de l'outil impose-t-il des compromis de plus en plus coûteux pour maintenir la production ?",
    "questionPublique": "À partir de quand l'outil ancien devient-il un risque plus qu'un actif ?",
    "questionActivation": "Un outil vieillissant peut rester productif lorsqu'il est bien entretenu. Mais en contexte de contrainte, ce vieillissement devient plus difficile à absorber : les pannes coûtent davantage, les pièces se raréfient, la maintenance prend plus de place.",
    "introMecanisme": "Un outil vieillissant peut rester productif lorsqu'il est bien entretenu. Mais en contexte de contrainte, ce vieillissement devient plus difficile à absorber : les pannes coûtent davantage, les pièces se raréfient, la maintenance prend plus de place.",
    "pointBascule": "À partir de quand l'outil ancien devient-il un risque plus qu'un actif ?",
    "tensionArbitrage": "Prolonger l'existant pour tenir ou investir pour sortir d'une dette industrielle croissante.",
    "primaryProfiles": [
      "Direction technique",
      "OT / IT industriel",
      "Automatisation",
      "Intégration systèmes",
      "Maintenance industrielle"
    ],
    "formatCourt": {
      "titrePublicCourt": "À partir de quand l'outil ancien devient-il un risque plus qu'un actif ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 3
  },
  {
    "code": "A04",
    "crmCode": "IND-C1-AC-A04",
    "programmeCode": "IND-C1-ASC-04",
    "conversationCode": "C1",
    "contextCode": "AC",
    "typeLecture": "RH_COMPETENCES",
    "questionEditoriale": "À partir de quand le temps nécessaire pour adapter l'outil ou réorganiser la production dépasse-t-il la capacité réelle de l'activité à tenir ?",
    "questionPublique": "À partir de quand le temps nécessaire pour s'adapter dépasse-t-il le temps disponible pour survivre ?",
    "questionActivation": "S'adapter prend du temps : reconfigurer un atelier, redéployer des équipes, qualifier un nouveau process. Mais lorsque les contraintes s'intensifient, l'entreprise ne dispose pas toujours de ce temps.",
    "introMecanisme": "S'adapter prend du temps : reconfigurer un atelier, redéployer des équipes, qualifier un nouveau process. Mais lorsque les contraintes s'intensifient, l'entreprise ne dispose pas toujours de ce temps.",
    "pointBascule": "À partir de quand le temps nécessaire pour s'adapter dépasse-t-il le temps disponible pour survivre ?",
    "tensionArbitrage": "Transformer assez vite sans déstabiliser l'activité qui doit continuer à fonctionner.",
    "primaryProfiles": [
      "DRH industriel",
      "Responsable compétences",
      "Formation industrielle",
      "Organisation du travail",
      "Direction de site"
    ],
    "formatCourt": {
      "titrePublicCourt": "À partir de quand le temps nécessaire pour s'adapter dépasse-t-il le temps disponible pour survivre ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 4
  },
  {
    "code": "A01",
    "crmCode": "IND-C1-RC-A01",
    "programmeCode": "IND-C1-RSS-01",
    "conversationCode": "C1",
    "contextCode": "RC",
    "typeLecture": "STRATEGIQUE",
    "questionEditoriale": "À partir de quand la production révèle-t-elle un écart durable entre le modèle opérationnel existant et les conditions nécessaires à sa soutenabilité ?",
    "questionPublique": "À partir de quand le modèle existant devient-il irréversible dans ses fragilités ?",
    "questionActivation": "En période de crise, les limites d'un modèle industriel apparaissent rarement d'un seul coup. Elles se manifestent d'abord par des écarts répétés : coûts qui ne reviennent pas au niveau attendu, délais qui s'allongent, qualité plus difficile à sécuriser.",
    "introMecanisme": "En période de crise, les limites d'un modèle industriel apparaissent rarement d'un seul coup. Elles se manifestent d'abord par des écarts répétés : coûts qui ne reviennent pas au niveau attendu, délais qui s'allongent, qualité plus difficile à sécuriser.",
    "pointBascule": "À partir de quand le modèle existant devient-il irréversible dans ses fragilités ?",
    "tensionArbitrage": "Corriger l'existant ou reconnaître que le modèle doit être repensé.",
    "primaryProfiles": [
      "Direction générale",
      "Direction stratégie",
      "Direction industrielle",
      "Conseil stratégie industrielle",
      "Compétitivité"
    ],
    "formatCourt": {
      "titrePublicCourt": "À partir de quand le modèle existant devient-il irréversible dans ses fragilités ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 1,
    "landingPages": [
      "strategie"
    ]
  },
  {
    "code": "A02",
    "crmCode": "IND-C1-RC-A02",
    "programmeCode": "IND-C1-RSS-02",
    "conversationCode": "C1",
    "contextCode": "RC",
    "typeLecture": "OPERATIONNELLE",
    "questionEditoriale": "À partir de quand le maintien de l'activité appelle-t-il une décision de transformation plutôt qu'une simple adaptation opérationnelle ?",
    "questionPublique": "À partir de quand la continuité devient-elle elle-même un risque ?",
    "questionActivation": "En situation de crise, continuer à produire peut donner l'impression que l'activité tient encore. Pourtant, ce maintien apparent peut masquer une perte de rationalité : coûts excessifs, efforts disproportionnés, désorganisation chronique.",
    "introMecanisme": "En situation de crise, continuer à produire peut donner l'impression que l'activité tient encore. Pourtant, ce maintien apparent peut masquer une perte de rationalité : coûts excessifs, efforts disproportionnés, désorganisation chronique.",
    "pointBascule": "À partir de quand la continuité devient-elle elle-même un risque ?",
    "tensionArbitrage": "Maintenir ce qui fonctionne encore ou transformer avant que le système ne se dégrade davantage.",
    "primaryProfiles": [
      "Direction industrielle",
      "Responsable opérations",
      "Excellence opérationnelle",
      "Supply chain",
      "Direction de site"
    ],
    "formatCourt": {
      "titrePublicCourt": "À partir de quand la continuité devient-elle elle-même un risque ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 2
  },
  {
    "code": "A03",
    "crmCode": "IND-C1-RC-A03",
    "programmeCode": "IND-C1-RSS-03",
    "conversationCode": "C1",
    "contextCode": "RC",
    "typeLecture": "FINANCIERE",
    "questionEditoriale": "À partir de quand la dette technologique impose-t-elle un saut d'investissement, un changement de périmètre ou une transformation plus profonde de l'outil ?",
    "questionPublique": "À partir de quand la dette technologique bloque-t-elle toute adaptation crédible ?",
    "questionActivation": "La dette technologique s'accumule souvent silencieusement : systèmes hétérogènes, automatismes dépassés, équipements difficiles à maintenir. En crise, elle peut empêcher toute adaptation rapide.",
    "introMecanisme": "La dette technologique s'accumule souvent silencieusement : systèmes hétérogènes, automatismes dépassés, équipements difficiles à maintenir. En crise, elle peut empêcher toute adaptation rapide.",
    "pointBascule": "À partir de quand la dette technologique bloque-t-elle toute adaptation crédible ?",
    "tensionArbitrage": "Reporter l'investissement ou accepter une rupture technologique devenue nécessaire.",
    "primaryProfiles": [
      "DAF / CFO industriel",
      "Contrôle de gestion industriel",
      "Corporate finance",
      "Restructuring",
      "Direction générale"
    ],
    "formatCourt": {
      "titrePublicCourt": "À partir de quand la dette technologique bloque-t-elle toute adaptation crédible ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 3,
    "landingPages": [
      "finance"
    ]
  },
  {
    "code": "A04",
    "crmCode": "IND-C1-RC-A04",
    "programmeCode": "IND-C1-RSS-04",
    "conversationCode": "C1",
    "contextCode": "RC",
    "typeLecture": "TERRITORIALE",
    "questionEditoriale": "À partir de quand le délai requis pour redéployer, reconvertir ou refonder l'outil dépasse-t-il le temps économique, social ou financier encore disponible ?",
    "questionPublique": "À partir de quand le temps économique est-il déjà dépassé par rapport au temps industriel et social nécessaire ?",
    "questionActivation": "Réinventer un outil industriel suppose du temps : diagnostiquer, investir, reconvertir, former, négocier, sécuriser les financements et accompagner les impacts sociaux. Mais en période de crise, ce temps peut manquer.",
    "introMecanisme": "Réinventer un outil industriel suppose du temps : diagnostiquer, investir, reconvertir, former, négocier, sécuriser les financements et accompagner les impacts sociaux. Mais en période de crise, ce temps peut manquer.",
    "pointBascule": "À partir de quand le temps économique est-il déjà dépassé par rapport au temps industriel et social nécessaire ?",
    "tensionArbitrage": "Transformer dans l'urgence sans perdre les ressources humaines, financières et territoriales indispensables.",
    "primaryProfiles": [
      "Développement économique territorial",
      "Site selection",
      "Affaires publiques territoriales",
      "Collectivité / agence économique",
      "Direction implantation"
    ],
    "formatCourt": {
      "titrePublicCourt": "À partir de quand le temps économique est-il déjà dépassé par rapport au temps industriel et social nécessaire ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 4
  },
  {
    "code": "A05",
    "crmCode": "IND-C2-GS-A05",
    "programmeCode": "IND-C2-CST-01",
    "conversationCode": "C2",
    "contextCode": "GS",
    "typeLecture": "STRATEGIQUE",
    "questionEditoriale": "À partir de quand l'augmentation des volumes révèle-t-elle une dépendance fournisseur ou logistique que l'organisation ne maîtrise plus pleinement ?",
    "questionPublique": "À partir de quand un fournisseur ou un flux logistique devient-il un point de blocage de la croissance ?",
    "questionActivation": "La croissance teste aussi tout ce dont l'entreprise dépend pour produire. Fournisseurs, matières, composants, transport ou capacités logistiques peuvent devenir décisifs lorsque l'activité accélère.",
    "introMecanisme": "La croissance teste aussi tout ce dont l'entreprise dépend pour produire. Fournisseurs, matières, composants, transport ou capacités logistiques peuvent devenir décisifs lorsque l'activité accélère.",
    "pointBascule": "À partir de quand un fournisseur ou un flux logistique devient-il un point de blocage de la croissance ?",
    "tensionArbitrage": "Croître grâce à des dépendances efficaces sans devenir prisonnier de leur fragilité.",
    "primaryProfiles": [
      "Direction générale",
      "Direction stratégie",
      "Direction industrielle",
      "Conseil stratégie industrielle",
      "Compétitivité"
    ],
    "formatCourt": {
      "titrePublicCourt": "À partir de quand un fournisseur ou un flux logistique devient-il un point de blocage de la croissance ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 1,
    "landingPages": [
      "strategie"
    ]
  },
  {
    "code": "A06",
    "crmCode": "IND-C2-GS-A06",
    "programmeCode": "IND-C2-CST-02",
    "conversationCode": "C2",
    "contextCode": "GS",
    "typeLecture": "TERRITORIALE",
    "questionEditoriale": "À partir de quand une spécialisation de filière ou de segment limite-t-elle la capacité à capter durablement la croissance ?",
    "questionPublique": "À partir de quand la spécialisation devient-elle un verrou de croissance ?",
    "questionActivation": "La spécialisation peut constituer un avantage puissant. Mais elle peut aussi devenir une dépendance lorsque la croissance exige de changer d'échelle, de diversifier les débouchés ou de répondre à des attentes nouvelles.",
    "introMecanisme": "La spécialisation peut constituer un avantage puissant. Mais elle peut aussi devenir une dépendance lorsque la croissance exige de changer d'échelle, de diversifier les débouchés ou de répondre à des attentes nouvelles.",
    "pointBascule": "À partir de quand la spécialisation devient-elle un verrou de croissance ?",
    "tensionArbitrage": "Exploiter une spécialisation forte sans s'enfermer dans un segment trop étroit.",
    "primaryProfiles": [
      "Développement économique territorial",
      "Site selection",
      "Affaires publiques territoriales",
      "Collectivité / agence économique",
      "Direction implantation"
    ],
    "formatCourt": {
      "titrePublicCourt": "À partir de quand la spécialisation devient-elle un verrou de croissance ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 2
  },
  {
    "code": "A07",
    "crmCode": "IND-C2-GS-A07",
    "programmeCode": "IND-C2-CST-03",
    "conversationCode": "C2",
    "contextCode": "GS",
    "typeLecture": "JURIDIQUE_REGLEMENTAIRE",
    "questionEditoriale": "À partir de quand l'ouverture commerciale, les normes ou les contraintes export deviennent-elles un facteur structurant de continuité industrielle ?",
    "questionPublique": "À partir de quand la règle devient-elle un facteur de continuité ou de rupture ?",
    "questionActivation": "La croissance industrielle passe souvent par de nouveaux marchés. Mais cette ouverture introduit aussi des règles : normes, douanes, certifications, contrôles export, contraintes géopolitiques.",
    "introMecanisme": "La croissance industrielle passe souvent par de nouveaux marchés. Mais cette ouverture introduit aussi des règles : normes, douanes, certifications, contrôles export, contraintes géopolitiques.",
    "pointBascule": "À partir de quand la règle devient-elle un facteur de continuité ou de rupture ?",
    "tensionArbitrage": "S'ouvrir à de nouveaux marchés sans exposer la continuité industrielle à des cadres mal maîtrisés.",
    "primaryProfiles": [
      "Juridique industriel",
      "Conformité",
      "Affaires publiques",
      "Commerce international",
      "Réglementation industrielle"
    ],
    "formatCourt": {
      "titrePublicCourt": "À partir de quand la règle devient-elle un facteur de continuité ou de rupture ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 3
  },
  {
    "code": "A08",
    "crmCode": "IND-C2-GS-A08",
    "programmeCode": "IND-C2-CST-04",
    "conversationCode": "C2",
    "contextCode": "GS",
    "typeLecture": "TECHNOLOGIQUE_SYSTEMES",
    "questionEditoriale": "À partir de quand la montée en charge révèle-t-elle que l'architecture des systèmes, automatismes ou intégrations n'est plus à l'échelle de l'activité ?",
    "questionPublique": "À partir de quand l'architecture technique empêche-t-elle de suivre la croissance ?",
    "questionActivation": "La croissance industrielle repose de plus en plus sur des systèmes. Tant que l'activité reste stable, une architecture imparfaite peut fonctionner. Mais lorsque les volumes augmentent, les limites apparaissent.",
    "introMecanisme": "La croissance industrielle repose de plus en plus sur des systèmes. Tant que l'activité reste stable, une architecture imparfaite peut fonctionner. Mais lorsque les volumes augmentent, les limites apparaissent.",
    "pointBascule": "À partir de quand l'architecture technique empêche-t-elle de suivre la croissance ?",
    "tensionArbitrage": "Accroître l'activité sans que les systèmes deviennent le facteur limitant du pilotage.",
    "primaryProfiles": [
      "Direction technique",
      "OT / IT industriel",
      "Automatisation",
      "Intégration systèmes",
      "Maintenance industrielle"
    ],
    "formatCourt": {
      "titrePublicCourt": "À partir de quand l'architecture technique empêche-t-elle de suivre la croissance ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 4
  },
  {
    "code": "A05",
    "crmCode": "IND-C2-AC-A05",
    "programmeCode": "IND-C2-ASC-01",
    "conversationCode": "C2",
    "contextCode": "AC",
    "typeLecture": "FINANCIERE",
    "questionEditoriale": "À partir de quand la réduction des marges de manœuvre rend-elle une dépendance amont ou logistique trop risquée pour rester pilotée à coût acceptable ?",
    "questionPublique": "Quand la dépendance devient-elle financièrement ou opérationnellement intenable ?",
    "questionActivation": "Une dépendance peut être acceptable tant que l'entreprise dispose de marges de manœuvre. Mais lorsque ces marges se réduisent, la même dépendance devient plus coûteuse, plus risquée et plus difficile à piloter.",
    "introMecanisme": "Une dépendance peut être acceptable tant que l'entreprise dispose de marges de manœuvre. Mais lorsque ces marges se réduisent, la même dépendance devient plus coûteuse, plus risquée et plus difficile à piloter.",
    "pointBascule": "Quand la dépendance devient-elle financièrement ou opérationnellement intenable ?",
    "tensionArbitrage": "Préserver l'efficacité d'une dépendance sans subir son coût croissant.",
    "primaryProfiles": [
      "DAF / CFO industriel",
      "Contrôle de gestion industriel",
      "Corporate finance",
      "Restructuring",
      "Direction générale"
    ],
    "formatCourt": {
      "titrePublicCourt": "Quand la dépendance devient-elle financièrement ou opérationnellement intenable ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 1,
    "landingPages": [
      "finance"
    ]
  },
  {
    "code": "A06",
    "crmCode": "IND-C2-AC-A06",
    "programmeCode": "IND-C2-ASC-02",
    "conversationCode": "C2",
    "contextCode": "AC",
    "typeLecture": "STRATEGIQUE",
    "questionEditoriale": "Quelles dépendances de filière ou de segment limitent la capacité à ajuster l'activité sans fragiliser la position future dans la chaîne de valeur ?",
    "questionPublique": "À partir de quand l'ajustement fragilise-t-il la position future dans la chaîne de valeur ?",
    "questionActivation": "En période de contrainte, les ajustements ne sont jamais neutres. Réduire une activité peut affaiblir une position future ; changer de segment peut rompre des équilibres commerciaux ou industriels.",
    "introMecanisme": "En période de contrainte, les ajustements ne sont jamais neutres. Réduire une activité peut affaiblir une position future ; changer de segment peut rompre des équilibres commerciaux ou industriels.",
    "pointBascule": "À partir de quand l'ajustement fragilise-t-il la position future dans la chaîne de valeur ?",
    "tensionArbitrage": "S'adapter sans perdre ce qui fonde la place stratégique dans la filière.",
    "primaryProfiles": [
      "Direction générale",
      "Direction stratégie",
      "Direction industrielle",
      "Conseil stratégie industrielle",
      "Compétitivité"
    ],
    "formatCourt": {
      "titrePublicCourt": "À partir de quand l'ajustement fragilise-t-il la position future dans la chaîne de valeur ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 2,
    "landingPages": [
      "strategie"
    ]
  },
  {
    "code": "A07",
    "crmCode": "IND-C2-AC-A07",
    "programmeCode": "IND-C2-ASC-03",
    "conversationCode": "C2",
    "contextCode": "AC",
    "typeLecture": "JURIDIQUE_REGLEMENTAIRE",
    "questionEditoriale": "Quand les règles commerciales, sociales, douanières ou réglementaires limitent-elles la capacité à ajuster l'activité sans rupture de continuité ?",
    "questionPublique": "Quand la règle empêche-t-elle d'ajuster sans rupture ?",
    "questionActivation": "Lorsqu'une entreprise doit s'adapter, elle ne le fait jamais dans un espace totalement libre. Les règles encadrent les décisions possibles et peuvent rendre certains ajustements trop longs, trop coûteux ou trop risqués.",
    "introMecanisme": "Lorsqu'une entreprise doit s'adapter, elle ne le fait jamais dans un espace totalement libre. Les règles encadrent les décisions possibles et peuvent rendre certains ajustements trop longs, trop coûteux ou trop risqués.",
    "pointBascule": "Quand la règle empêche-t-elle d'ajuster sans rupture ?",
    "tensionArbitrage": "Adapter vite l'activité sans sortir du cadre réglementaire ni rompre la continuité.",
    "primaryProfiles": [
      "Juridique industriel",
      "Conformité",
      "Affaires publiques",
      "Commerce international",
      "Réglementation industrielle"
    ],
    "formatCourt": {
      "titrePublicCourt": "Quand la règle empêche-t-elle d'ajuster sans rupture ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 3
  },
  {
    "code": "A08",
    "crmCode": "IND-C2-AC-A08",
    "programmeCode": "IND-C2-ASC-04",
    "conversationCode": "C2",
    "contextCode": "AC",
    "typeLecture": "TECHNOLOGIQUE_SYSTEMES",
    "questionEditoriale": "À partir de quand les interfaces entre systèmes, sites ou métiers deviennent-elles un facteur déterminant de performance et de pilotage ?",
    "questionPublique": "Quand les interfaces deviennent-elles le principal facteur de risque opérationnel ?",
    "questionActivation": "En contexte contraint, la performance dépend moins de la puissance de chaque outil que de la qualité des interfaces entre eux. Lorsque ces interfaces sont fragmentées, l'entreprise perd du temps, de la visibilité et de la capacité d'arbitrage.",
    "introMecanisme": "En contexte contraint, la performance dépend moins de la puissance de chaque outil que de la qualité des interfaces entre eux. Lorsque ces interfaces sont fragmentées, l'entreprise perd du temps, de la visibilité et de la capacité d'arbitrage.",
    "pointBascule": "Quand les interfaces deviennent-elles le principal facteur de risque opérationnel ?",
    "tensionArbitrage": "Adapter l'activité sans que la fragmentation des systèmes ralentisse ou fausse le pilotage.",
    "primaryProfiles": [
      "Direction technique",
      "OT / IT industriel",
      "Automatisation",
      "Intégration systèmes",
      "Maintenance industrielle"
    ],
    "formatCourt": {
      "titrePublicCourt": "Quand les interfaces deviennent-elles le principal facteur de risque opérationnel ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 4
  },
  {
    "code": "A05",
    "crmCode": "IND-C2-RC-A05",
    "programmeCode": "IND-C2-RSS-01",
    "conversationCode": "C2",
    "contextCode": "RC",
    "typeLecture": "STRATEGIQUE",
    "questionEditoriale": "À partir de quand une dépendance critique impose-t-elle une relocalisation, une substitution ou un changement de modèle d'approvisionnement ?",
    "questionPublique": "Quand une dépendance devient-elle inacceptable pour la continuité industrielle ?",
    "questionActivation": "Lorsqu'une dépendance devient critique, l'entreprise ne peut plus seulement chercher à mieux la piloter. Elle doit parfois changer de logique : relocaliser, substituer, diversifier les sources ou repenser l'architecture d'approvisionnement.",
    "introMecanisme": "Lorsqu'une dépendance devient critique, l'entreprise ne peut plus seulement chercher à mieux la piloter. Elle doit parfois changer de logique : relocaliser, substituer, diversifier les sources ou repenser l'architecture d'approvisionnement.",
    "pointBascule": "Quand une dépendance devient-elle inacceptable pour la continuité industrielle ?",
    "tensionArbitrage": "Conserver l'efficacité d'un modèle globalisé ou reconstruire une résilience plus coûteuse mais plus maîtrisable.",
    "primaryProfiles": [
      "Direction générale",
      "Direction stratégie",
      "Direction industrielle",
      "Conseil stratégie industrielle",
      "Compétitivité"
    ],
    "formatCourt": {
      "titrePublicCourt": "Quand une dépendance devient-elle inacceptable pour la continuité industrielle ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 1,
    "landingPages": [
      "strategie"
    ]
  },
  {
    "code": "A06",
    "crmCode": "IND-C2-RC-A06",
    "programmeCode": "IND-C2-RSS-02",
    "conversationCode": "C2",
    "contextCode": "RC",
    "typeLecture": "TERRITORIALE",
    "questionEditoriale": "À partir de quand la dépendance à une filière, une spécialisation ou un segment impose-t-elle un repositionnement plutôt qu'une adaptation partielle ?",
    "questionPublique": "Quand la spécialisation devient-elle un verrou de survie plutôt qu'un avantage ?",
    "questionActivation": "Certaines entreprises tiennent leur trajectoire d'une spécialisation forte. Mais lorsque cette base se fragilise, il faut envisager un repositionnement plus profond : nouveaux marchés, nouveaux partenaires, nouvelle place dans l'écosystème.",
    "introMecanisme": "Certaines entreprises tiennent leur trajectoire d'une spécialisation forte. Mais lorsque cette base se fragilise, il faut envisager un repositionnement plus profond : nouveaux marchés, nouveaux partenaires, nouvelle place dans l'écosystème.",
    "pointBascule": "Quand la spécialisation devient-elle un verrou de survie plutôt qu'un avantage ?",
    "tensionArbitrage": "Se repositionner sans perdre la valeur construite par la spécialisation.",
    "primaryProfiles": [
      "Développement économique territorial",
      "Site selection",
      "Affaires publiques territoriales",
      "Collectivité / agence économique",
      "Direction implantation"
    ],
    "formatCourt": {
      "titrePublicCourt": "Quand la spécialisation devient-elle un verrou de survie plutôt qu'un avantage ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 2
  },
  {
    "code": "A07",
    "crmCode": "IND-C2-RC-A07",
    "programmeCode": "IND-C2-RSS-03",
    "conversationCode": "C2",
    "contextCode": "RC",
    "typeLecture": "JURIDIQUE_REGLEMENTAIRE",
    "questionEditoriale": "À partir de quand un changement de cadre géopolitique ou réglementaire oblige-t-il à réinterroger le modèle industriel ou la géographie productive ?",
    "questionPublique": "Quand le cadre externe rend-il le modèle industriel obsolète ?",
    "questionActivation": "Un modèle industriel repose sur une certaine stabilité du cadre dans lequel il opère. Lorsqu'un choc géopolitique ou réglementaire modifie ce cadre, c'est parfois la géographie de la production qui doit être repensée.",
    "introMecanisme": "Un modèle industriel repose sur une certaine stabilité du cadre dans lequel il opère. Lorsqu'un choc géopolitique ou réglementaire modifie ce cadre, c'est parfois la géographie de la production qui doit être repensée.",
    "pointBascule": "Quand le cadre externe rend-il le modèle industriel obsolète ?",
    "tensionArbitrage": "Préserver la continuité industrielle tout en changeant de géographie ou de cadre d'opération.",
    "primaryProfiles": [
      "Juridique industriel",
      "Conformité",
      "Affaires publiques",
      "Commerce international",
      "Réglementation industrielle"
    ],
    "formatCourt": {
      "titrePublicCourt": "Quand le cadre externe rend-il le modèle industriel obsolète ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 3
  },
  {
    "code": "A08",
    "crmCode": "IND-C2-RC-A08",
    "programmeCode": "IND-C2-RSS-04",
    "conversationCode": "C2",
    "contextCode": "RC",
    "typeLecture": "TECHNOLOGIQUE_SYSTEMES",
    "questionEditoriale": "À partir de quand l'architecture des systèmes oblige-t-elle à arbitrer entre adaptation progressive et refonte plus structurante ?",
    "questionPublique": "Quand l'architecture empêche-t-elle toute adaptation crédible ?",
    "questionActivation": "Quand l'architecture des systèmes devient trop fragmentée, les adaptations par petites touches peuvent finir par complexifier encore davantage le système. En période de crise, la question devient plus radicale.",
    "introMecanisme": "Quand l'architecture des systèmes devient trop fragmentée, les adaptations par petites touches peuvent finir par complexifier encore davantage le système. En période de crise, la question devient plus radicale.",
    "pointBascule": "Quand l'architecture empêche-t-elle toute adaptation crédible ?",
    "tensionArbitrage": "Continuer à corriger l'existant ou accepter une refonte plus coûteuse mais plus structurante.",
    "primaryProfiles": [
      "Direction technique",
      "OT / IT industriel",
      "Automatisation",
      "Intégration systèmes",
      "Maintenance industrielle"
    ],
    "formatCourt": {
      "titrePublicCourt": "Quand l'architecture empêche-t-elle toute adaptation crédible ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 4
  },
  {
    "code": "A09",
    "crmCode": "IND-C3-GS-A09",
    "programmeCode": "IND-C3-CST-01",
    "conversationCode": "C3",
    "contextCode": "GS",
    "typeLecture": "TECHNOLOGIQUE_SYSTEMES",
    "questionEditoriale": "Qu'est-ce qui permet réellement de franchir un cap de volume ou de qualité : automatiser, digitaliser davantage ou redessiner le process ?",
    "questionPublique": "À partir de quand ajouter de la technologie ne permet-il plus de franchir un cap ?",
    "questionActivation": "Face à la croissance, l'investissement technologique apparaît souvent comme une réponse naturelle. Mais la technologie ne règle pas toujours les limites profondes d'un outil industriel. Dans certains cas, le vrai sujet réside dans le process lui-même.",
    "introMecanisme": "Face à la croissance, l'investissement technologique apparaît souvent comme une réponse naturelle. Mais la technologie ne règle pas toujours les limites profondes d'un outil industriel. Dans certains cas, le vrai sujet réside dans le process lui-même.",
    "pointBascule": "À partir de quand ajouter de la technologie ne permet-il plus de franchir un cap ?",
    "tensionArbitrage": "Automatiser pour accélérer ou redessiner le process pour transformer réellement la capacité.",
    "primaryProfiles": [
      "Direction technique",
      "OT / IT industriel",
      "Automatisation",
      "Intégration systèmes",
      "Maintenance industrielle"
    ],
    "formatCourt": {
      "titrePublicCourt": "À partir de quand ajouter de la technologie ne permet-il plus de franchir un cap ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 1
  },
  {
    "code": "A10",
    "crmCode": "IND-C3-GS-A10",
    "programmeCode": "IND-C3-CST-02",
    "conversationCode": "C3",
    "contextCode": "GS",
    "typeLecture": "OPERATIONNELLE",
    "questionEditoriale": "À partir de quand la vraie limite n'est-elle plus technologique, mais opératoire : coordination des flux, séquencement, pilotage et interfaces ?",
    "questionPublique": "À partir de quand la limite n'est-elle plus la machine mais l'organisation des flux ?",
    "questionActivation": "Dans une phase de croissance, on cherche souvent la limite du côté des machines. Pourtant, le blocage peut venir d'ailleurs : coordination des flux, séquencement, pilotage des priorités, interfaces entre métiers.",
    "introMecanisme": "Dans une phase de croissance, on cherche souvent la limite du côté des machines. Pourtant, le blocage peut venir d'ailleurs : coordination des flux, séquencement, pilotage des priorités, interfaces entre métiers.",
    "pointBascule": "À partir de quand la limite n'est-elle plus la machine mais l'organisation des flux ?",
    "tensionArbitrage": "Ajouter de la capacité technique ou refonder la manière dont l'activité est pilotée.",
    "primaryProfiles": [
      "Direction industrielle",
      "Responsable opérations",
      "Excellence opérationnelle",
      "Supply chain",
      "Direction de site"
    ],
    "formatCourt": {
      "titrePublicCourt": "À partir de quand la limite n'est-elle plus la machine mais l'organisation des flux ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 2
  },
  {
    "code": "A11",
    "crmCode": "IND-C3-GS-A11",
    "programmeCode": "IND-C3-CST-03",
    "conversationCode": "C3",
    "contextCode": "GS",
    "typeLecture": "RH_COMPETENCES",
    "questionEditoriale": "À partir de quand la montée en capacité bute-t-elle moins sur la machine que sur la qualité, la sécurité, la formation et la maîtrise des gestes critiques ?",
    "questionPublique": "À partir de quand la performance dépend-elle davantage des compétences que des équipements ?",
    "questionActivation": "Produire davantage ne consiste pas seulement à augmenter les cadences. Il faut préserver la qualité, maîtriser les gestes critiques, former les équipes, sécuriser les opérations et garantir la conformité.",
    "introMecanisme": "Produire davantage ne consiste pas seulement à augmenter les cadences. Il faut préserver la qualité, maîtriser les gestes critiques, former les équipes, sécuriser les opérations et garantir la conformité.",
    "pointBascule": "À partir de quand la performance dépend-elle davantage des compétences que des équipements ?",
    "tensionArbitrage": "Monter en capacité sans dégrader la maîtrise des gestes, la qualité et la sécurité.",
    "primaryProfiles": [
      "DRH industriel",
      "Responsable compétences",
      "Formation industrielle",
      "Organisation du travail",
      "Direction de site"
    ],
    "formatCourt": {
      "titrePublicCourt": "À partir de quand la performance dépend-elle davantage des compétences que des équipements ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 3
  },
  {
    "code": "A12",
    "crmCode": "IND-C3-GS-A12",
    "programmeCode": "IND-C3-CST-04",
    "conversationCode": "C3",
    "contextCode": "GS",
    "typeLecture": "STRATEGIQUE",
    "questionEditoriale": "À partir de quand la croissance impose-t-elle de décarboner autrement, non plus à la marge, mais en repensant le process, les utilités ou le mix produit ?",
    "questionPublique": "À partir de quand la décarbonation impose-t-elle de repenser l'outil plutôt que de l'optimiser ?",
    "questionActivation": "La croissance industrielle augmente souvent les besoins en énergie, en matières et en capacités de production. Dans un contexte de transition climatique, cette croissance ne peut plus toujours être accompagnée par de simples gains marginaux.",
    "introMecanisme": "La croissance industrielle augmente souvent les besoins en énergie, en matières et en capacités de production. Dans un contexte de transition climatique, cette croissance ne peut plus toujours être accompagnée par de simples gains marginaux.",
    "pointBascule": "À partir de quand la décarbonation impose-t-elle de repenser l'outil plutôt que de l'optimiser ?",
    "tensionArbitrage": "Croître industriellement tout en transformant réellement les conditions carbone de la production.",
    "primaryProfiles": [
      "Direction générale",
      "Direction stratégie",
      "Direction industrielle",
      "Conseil stratégie industrielle",
      "Compétitivité"
    ],
    "formatCourt": {
      "titrePublicCourt": "À partir de quand la décarbonation impose-t-elle de repenser l'outil plutôt que de l'optimiser ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 4,
    "landingPages": [
      "strategie"
    ]
  },
  {
    "code": "A09",
    "crmCode": "IND-C3-AC-A09",
    "programmeCode": "IND-C3-ASC-01",
    "conversationCode": "C3",
    "contextCode": "AC",
    "typeLecture": "FINANCIERE",
    "questionEditoriale": "Dans un contexte de marges serrées, qu'est-ce qui transforme encore réellement l'outil : un investissement technologique ciblé ou une recomposition plus frugale du process ?",
    "questionPublique": "À partir de quand l'amélioration frugale ne suffit-elle plus ?",
    "questionActivation": "Lorsque les marges sont serrées, transformer l'outil industriel ne signifie pas toujours investir massivement. L'entreprise peut chercher des gains ciblés. Mais toutes ces options ne produisent pas le même effet.",
    "introMecanisme": "Lorsque les marges sont serrées, transformer l'outil industriel ne signifie pas toujours investir massivement. L'entreprise peut chercher des gains ciblés. Mais toutes ces options ne produisent pas le même effet.",
    "pointBascule": "À partir de quand l'amélioration frugale ne suffit-elle plus ?",
    "tensionArbitrage": "Transformer avec peu de moyens sans se limiter à des corrections insuffisantes.",
    "primaryProfiles": [
      "DAF / CFO industriel",
      "Contrôle de gestion industriel",
      "Corporate finance",
      "Restructuring",
      "Direction générale"
    ],
    "formatCourt": {
      "titrePublicCourt": "À partir de quand l'amélioration frugale ne suffit-elle plus ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 1,
    "landingPages": [
      "finance"
    ]
  },
  {
    "code": "A10",
    "crmCode": "IND-C3-AC-A10",
    "programmeCode": "IND-C3-ASC-02",
    "conversationCode": "C3",
    "contextCode": "AC",
    "typeLecture": "OPERATIONNELLE",
    "questionEditoriale": "À partir de quand de nouveaux outils ne compensent-ils plus une architecture opératoire devenue trop rigide, fragmentée ou lente ?",
    "questionPublique": "À partir de quand les outils ne compensent-ils plus une organisation défaillante ?",
    "questionActivation": "Ajouter un nouvel outil peut donner l'impression de résoudre une difficulté. Mais lorsque l'architecture opératoire est trop rigide ou fragmentée, ces ajouts peuvent simplement déplacer la complexité.",
    "introMecanisme": "Ajouter un nouvel outil peut donner l'impression de résoudre une difficulté. Mais lorsque l'architecture opératoire est trop rigide ou fragmentée, ces ajouts peuvent simplement déplacer la complexité.",
    "pointBascule": "À partir de quand les outils ne compensent-ils plus une organisation défaillante ?",
    "tensionArbitrage": "Ajouter des solutions ou traiter la rigidité structurelle du système opératoire.",
    "primaryProfiles": [
      "Direction industrielle",
      "Responsable opérations",
      "Excellence opérationnelle",
      "Supply chain",
      "Direction de site"
    ],
    "formatCourt": {
      "titrePublicCourt": "À partir de quand les outils ne compensent-ils plus une organisation défaillante ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 2
  },
  {
    "code": "A11",
    "crmCode": "IND-C3-AC-A11",
    "programmeCode": "IND-C3-ASC-03",
    "conversationCode": "C3",
    "contextCode": "AC",
    "typeLecture": "JURIDIQUE_REGLEMENTAIRE",
    "questionEditoriale": "À partir de quand les exigences de qualité, sécurité ou conformité limitent-elles la capacité à ajuster l'outil sans réinterroger la tenue de l'activité ?",
    "questionPublique": "À partir de quand les exigences empêchent-elles toute adaptation simple ?",
    "questionActivation": "En contexte contraint, toutes les marges d'adaptation ne sont pas disponibles lorsque les exigences de qualité, de sécurité ou de conformité sont fortes. Ces exigences protègent l'activité mais peuvent aussi limiter les ajustements possibles.",
    "introMecanisme": "En contexte contraint, toutes les marges d'adaptation ne sont pas disponibles lorsque les exigences de qualité, de sécurité ou de conformité sont fortes. Ces exigences protègent l'activité mais peuvent aussi limiter les ajustements possibles.",
    "pointBascule": "À partir de quand les exigences empêchent-elles toute adaptation simple ?",
    "tensionArbitrage": "Ajuster l'outil sans compromettre la qualité, la sécurité ou la conformité.",
    "primaryProfiles": [
      "Juridique industriel",
      "Conformité",
      "Affaires publiques",
      "Commerce international",
      "Réglementation industrielle"
    ],
    "formatCourt": {
      "titrePublicCourt": "À partir de quand les exigences empêchent-elles toute adaptation simple ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 3
  },
  {
    "code": "A12",
    "crmCode": "IND-C3-AC-A12",
    "programmeCode": "IND-C3-ASC-04",
    "conversationCode": "C3",
    "contextCode": "AC",
    "typeLecture": "STRATEGIQUE",
    "questionEditoriale": "À partir de quand la décarbonation rebat-elle les conditions mêmes de compétitivité, d'investissement et de transformation de l'outil ?",
    "questionPublique": "À partir de quand la contrainte carbone redéfinit-elle les conditions de compétitivité ?",
    "questionActivation": "La décarbonation n'est pas seulement une exigence environnementale ; elle transforme les équilibres économiques de l'industrie. En contexte contraint, elle renforce les tensions entre compétitivité immédiate et transformation nécessaire.",
    "introMecanisme": "La décarbonation n'est pas seulement une exigence environnementale ; elle transforme les équilibres économiques de l'industrie. En contexte contraint, elle renforce les tensions entre compétitivité immédiate et transformation nécessaire.",
    "pointBascule": "À partir de quand la contrainte carbone redéfinit-elle les conditions de compétitivité ?",
    "tensionArbitrage": "Rester compétitif aujourd'hui tout en investissant dans une trajectoire carbone soutenable.",
    "primaryProfiles": [
      "Direction générale",
      "Direction stratégie",
      "Direction industrielle",
      "Conseil stratégie industrielle",
      "Compétitivité"
    ],
    "formatCourt": {
      "titrePublicCourt": "À partir de quand la contrainte carbone redéfinit-elle les conditions de compétitivité ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 4,
    "landingPages": [
      "strategie"
    ]
  },
  {
    "code": "A09",
    "crmCode": "IND-C3-RC-A09",
    "programmeCode": "IND-C3-RSS-01",
    "conversationCode": "C3",
    "contextCode": "RC",
    "typeLecture": "TECHNOLOGIQUE_SYSTEMES",
    "questionEditoriale": "À partir de quand la transformation de l'outil ne passe-t-elle plus par l'amélioration incrémentale, mais par une rupture de process ou de système de production ?",
    "questionPublique": "À partir de quand seule une rupture permet-elle de survivre ?",
    "questionActivation": "L'amélioration incrémentale permet souvent de prolonger la performance d'un outil. Mais certaines crises révèlent que l'outil doit changer de logique. Les process, les flux, les équipements ou même le modèle de production peuvent devoir être repensés.",
    "introMecanisme": "L'amélioration incrémentale permet souvent de prolonger la performance d'un outil. Mais certaines crises révèlent que l'outil doit changer de logique. Les process, les flux, les équipements ou même le modèle de production peuvent devoir être repensés.",
    "pointBascule": "À partir de quand seule une rupture permet-elle de survivre ?",
    "tensionArbitrage": "Continuer à améliorer l'existant ou accepter une transformation de rupture.",
    "primaryProfiles": [
      "Direction technique",
      "OT / IT industriel",
      "Automatisation",
      "Intégration systèmes",
      "Maintenance industrielle"
    ],
    "formatCourt": {
      "titrePublicCourt": "À partir de quand seule une rupture permet-elle de survivre ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 1
  },
  {
    "code": "A10",
    "crmCode": "IND-C3-RC-A10",
    "programmeCode": "IND-C3-RSS-02",
    "conversationCode": "C3",
    "contextCode": "RC",
    "typeLecture": "OPERATIONNELLE",
    "questionEditoriale": "À partir de quand la crise révèle-t-elle que le vrai sujet n'est plus l'outil, mais l'architecture même du système productif et de son pilotage ?",
    "questionPublique": "À partir de quand l'architecture devient-elle le vrai sujet plutôt que l'outil ?",
    "questionActivation": "Une crise industrielle révèle parfois un problème plus profond : l'architecture du système productif, la manière dont les décisions sont prises, dont les flux sont pilotés, dont les métiers coopèrent.",
    "introMecanisme": "Une crise industrielle révèle parfois un problème plus profond : l'architecture du système productif, la manière dont les décisions sont prises, dont les flux sont pilotés, dont les métiers coopèrent.",
    "pointBascule": "À partir de quand l'architecture devient-elle le vrai sujet plutôt que l'outil ?",
    "tensionArbitrage": "Traiter les symptômes visibles ou reconstruire le système de décision qui les produit.",
    "primaryProfiles": [
      "Direction industrielle",
      "Responsable opérations",
      "Excellence opérationnelle",
      "Supply chain",
      "Direction de site"
    ],
    "formatCourt": {
      "titrePublicCourt": "À partir de quand l'architecture devient-elle le vrai sujet plutôt que l'outil ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 2
  },
  {
    "code": "A11",
    "crmCode": "IND-C3-RC-A11",
    "programmeCode": "IND-C3-RSS-03",
    "conversationCode": "C3",
    "contextCode": "RC",
    "typeLecture": "RH_COMPETENCES",
    "questionEditoriale": "À partir de quand l'écart entre compétences disponibles, exigences de sûreté et standards de production impose-t-il une transformation plus profonde ?",
    "questionPublique": "Quand l'activité n'est-elle plus tenable humainement ou réglementairement ?",
    "questionActivation": "Une crise peut révéler un écart difficile à combler entre ce que l'activité exige et ce que l'organisation peut mobiliser. Lorsque cet écart devient trop important, il faut repenser l'organisation, les standards ou le périmètre de l'activité.",
    "introMecanisme": "Une crise peut révéler un écart difficile à combler entre ce que l'activité exige et ce que l'organisation peut mobiliser. Lorsque cet écart devient trop important, il faut repenser l'organisation, les standards ou le périmètre de l'activité.",
    "pointBascule": "Quand l'activité n'est-elle plus tenable humainement ou réglementairement ?",
    "tensionArbitrage": "Maintenir l'activité sans dépasser les limites de compétence, sûreté et conformité.",
    "primaryProfiles": [
      "DRH industriel",
      "Responsable compétences",
      "Formation industrielle",
      "Organisation du travail",
      "Direction de site"
    ],
    "formatCourt": {
      "titrePublicCourt": "Quand l'activité n'est-elle plus tenable humainement ou réglementairement ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 3
  },
  {
    "code": "A12",
    "crmCode": "IND-C3-RC-A12",
    "programmeCode": "IND-C3-RSS-04",
    "conversationCode": "C3",
    "contextCode": "RC",
    "typeLecture": "ENERGIE_RESSOURCES_DECARBONATION",
    "questionEditoriale": "À partir de quand la contrainte carbone impose-t-elle une réécriture du process, de l'outil, de l'offre ou de la vocation industrielle du site ?",
    "questionPublique": "Quand la contrainte carbone remet-elle en cause la vocation industrielle du site ?",
    "questionActivation": "Lorsqu'elle devient critique, la contrainte carbone ne se limite plus à la réduction progressive des émissions. Elle peut remettre en cause le process, l'outil, l'offre ou même la vocation industrielle d'un site.",
    "introMecanisme": "Lorsqu'elle devient critique, la contrainte carbone ne se limite plus à la réduction progressive des émissions. Elle peut remettre en cause le process, l'outil, l'offre ou même la vocation industrielle d'un site.",
    "pointBascule": "Quand la contrainte carbone remet-elle en cause la vocation industrielle du site ?",
    "tensionArbitrage": "Décarboner l'activité existante ou redéfinir ce que le site doit produire et représenter.",
    "primaryProfiles": [
      "Énergie / utilités",
      "Décarbonation industrielle",
      "Environnement industriel",
      "Stratégie de site",
      "Direction industrielle"
    ],
    "formatCourt": {
      "titrePublicCourt": "Quand la contrainte carbone remet-elle en cause la vocation industrielle du site ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 4
  },
  {
    "code": "A13",
    "crmCode": "IND-C4-GS-A13",
    "programmeCode": "IND-C4-CST-01",
    "conversationCode": "C4",
    "contextCode": "GS",
    "typeLecture": "RH_COMPETENCES",
    "questionEditoriale": "À partir de quand la croissance révèle-t-elle un seuil critique en matière de recrutement, transmission, stabilisation ou montée en compétence ?",
    "questionPublique": "À partir de quand le facteur humain devient-il le principal verrou de la trajectoire industrielle ?",
    "questionActivation": "Une trajectoire industrielle tient aussi par les personnes capables de faire fonctionner, transmettre, stabiliser et faire évoluer l'activité. Lorsque la croissance accélère, les besoins humains deviennent plus visibles.",
    "introMecanisme": "Une trajectoire industrielle tient aussi par les personnes capables de faire fonctionner, transmettre, stabiliser et faire évoluer l'activité. Lorsque la croissance accélère, les besoins humains deviennent plus visibles.",
    "pointBascule": "À partir de quand le facteur humain devient-il le principal verrou de la trajectoire industrielle ?",
    "tensionArbitrage": "Monter en capacité sans dépasser les capacités de recrutement, de formation et de transmission.",
    "primaryProfiles": [
      "DRH industriel",
      "Responsable compétences",
      "Formation industrielle",
      "Organisation du travail",
      "Direction de site"
    ],
    "formatCourt": {
      "titrePublicCourt": "À partir de quand le facteur humain devient-il le principal verrou de la trajectoire industrielle ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 1
  },
  {
    "code": "A14",
    "crmCode": "IND-C4-GS-A14",
    "programmeCode": "IND-C4-CST-02",
    "conversationCode": "C4",
    "contextCode": "GS",
    "typeLecture": "OPERATIONNELLE",
    "questionEditoriale": "À partir de quand l'accès à l'énergie, à l'eau, aux utilités ou aux capacités réseaux devient-il le véritable verrou d'une montée en capacité ?",
    "questionPublique": "À partir de quand les ressources deviennent-elles le verrou principal de la croissance ?",
    "questionActivation": "La croissance industrielle suppose des ressources physiques : énergie, eau, chaleur, raccordements, capacités réseaux. Ces ressources peuvent devenir le premier verrou de développement lorsque l'activité augmente.",
    "introMecanisme": "La croissance industrielle suppose des ressources physiques : énergie, eau, chaleur, raccordements, capacités réseaux. Ces ressources peuvent devenir le premier verrou de développement lorsque l'activité augmente.",
    "pointBascule": "À partir de quand les ressources deviennent-elles le verrou principal de la croissance ?",
    "tensionArbitrage": "Développer l'activité tout en sécurisant les ressources physiques nécessaires pour produire.",
    "primaryProfiles": [
      "Direction industrielle",
      "Responsable opérations",
      "Excellence opérationnelle",
      "Supply chain",
      "Direction de site"
    ],
    "formatCourt": {
      "titrePublicCourt": "À partir de quand les ressources deviennent-elles le verrou principal de la croissance ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 2
  },
  {
    "code": "A15",
    "crmCode": "IND-C4-GS-A15",
    "programmeCode": "IND-C4-CST-03",
    "conversationCode": "C4",
    "contextCode": "GS",
    "typeLecture": "STRATEGIQUE",
    "questionEditoriale": "À partir de quand la croissance du carnet révèle-t-elle une fragilité commerciale dans la capacité à sélectionner, répercuter ou défendre ses conditions économiques ?",
    "questionPublique": "À partir de quand la croissance fragilise-t-elle la capacité à défendre ses marges ?",
    "questionActivation": "Un carnet de commandes qui se remplit peut sembler confirmer la solidité d'une trajectoire industrielle. Mais toutes les commandes ne se valent pas. Certaines mobilisent fortement les capacités sans préserver la marge.",
    "introMecanisme": "Un carnet de commandes qui se remplit peut sembler confirmer la solidité d'une trajectoire industrielle. Mais toutes les commandes ne se valent pas. Certaines mobilisent fortement les capacités sans préserver la marge.",
    "pointBascule": "À partir de quand la croissance fragilise-t-elle la capacité à défendre ses marges ?",
    "tensionArbitrage": "Remplir le carnet sans accepter une croissance qui consomme la marge et la capacité industrielle.",
    "primaryProfiles": [
      "Direction générale",
      "Direction stratégie",
      "Direction industrielle",
      "Conseil stratégie industrielle",
      "Compétitivité"
    ],
    "formatCourt": {
      "titrePublicCourt": "À partir de quand la croissance fragilise-t-elle la capacité à défendre ses marges ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 3,
    "landingPages": [
      "strategie"
    ]
  },
  {
    "code": "A16",
    "crmCode": "IND-C4-GS-A16",
    "programmeCode": "IND-C4-CST-04",
    "conversationCode": "C4",
    "contextCode": "GS",
    "typeLecture": "TERRITORIALE",
    "questionEditoriale": "À quelles conditions un territoire permet-il encore d'accompagner une montée en capacité : foncier, réseaux, logistique, main-d'œuvre, acceptabilité ?",
    "questionPublique": "À partir de quand le territoire limite-t-il la croissance industrielle ?",
    "questionActivation": "Une entreprise industrielle ne croît jamais seule : elle dépend d'un territoire, de ses infrastructures, de son foncier, de ses réseaux et de son bassin d'emploi. Lorsque la croissance s'accélère, ces conditions territoriales deviennent déterminantes.",
    "introMecanisme": "Une entreprise industrielle ne croît jamais seule : elle dépend d'un territoire, de ses infrastructures, de son foncier, de ses réseaux et de son bassin d'emploi. Lorsque la croissance s'accélère, ces conditions territoriales deviennent déterminantes.",
    "pointBascule": "À partir de quand le territoire limite-t-il la croissance industrielle ?",
    "tensionArbitrage": "Développer l'activité sans dépasser les capacités foncières, sociales, logistiques et infrastructurelles du territoire.",
    "primaryProfiles": [
      "Développement économique territorial",
      "Site selection",
      "Affaires publiques territoriales",
      "Collectivité / agence économique",
      "Direction implantation"
    ],
    "formatCourt": {
      "titrePublicCourt": "À partir de quand le territoire limite-t-il la croissance industrielle ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 4
  },
  {
    "code": "A13",
    "crmCode": "IND-C4-AC-A13",
    "programmeCode": "IND-C4-ASC-01",
    "conversationCode": "C4",
    "contextCode": "AC",
    "typeLecture": "RH_COMPETENCES",
    "questionEditoriale": "À partir de quand les tensions sur les effectifs, les savoir-faire, les conditions de travail ou l'organisation limitent-elles la capacité à ajuster l'activité ?",
    "questionPublique": "À partir de quand l'organisation humaine ne tient-elle plus ?",
    "questionActivation": "En contexte contraint, les organisations industrielles demandent souvent beaucoup aux équipes. Mais lorsque les effectifs, les compétences ou les conditions de travail sont trop tendus, l'activité ne peut plus s'adapter sans fragiliser ceux qui la portent.",
    "introMecanisme": "En contexte contraint, les organisations industrielles demandent souvent beaucoup aux équipes. Mais lorsque les effectifs, les compétences ou les conditions de travail sont trop tendus, l'activité ne peut plus s'adapter sans fragiliser ceux qui la portent.",
    "pointBascule": "À partir de quand l'organisation humaine ne tient-elle plus ?",
    "tensionArbitrage": "Maintenir l'activité sans épuiser les équipes ni perdre les savoir-faire.",
    "primaryProfiles": [
      "DRH industriel",
      "Responsable compétences",
      "Formation industrielle",
      "Organisation du travail",
      "Direction de site"
    ],
    "formatCourt": {
      "titrePublicCourt": "À partir de quand l'organisation humaine ne tient-elle plus ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 1
  },
  {
    "code": "A14",
    "crmCode": "IND-C4-AC-A14",
    "programmeCode": "IND-C4-ASC-02",
    "conversationCode": "C4",
    "contextCode": "AC",
    "typeLecture": "FINANCIERE",
    "questionEditoriale": "À partir de quand les coûts d'énergie, d'eau ou de conformité environnementale limitent-ils la capacité à ajuster l'activité sans dégrader la compétitivité ?",
    "questionPublique": "À partir de quand les coûts rendent-ils l'activité difficilement ajustable ?",
    "questionActivation": "Les coûts de l'énergie, de l'eau et de la conformité environnementale pèsent de plus en plus directement sur les équilibres industriels. En contexte contraint, ils réduisent les marges d'action.",
    "introMecanisme": "Les coûts de l'énergie, de l'eau et de la conformité environnementale pèsent de plus en plus directement sur les équilibres industriels. En contexte contraint, ils réduisent les marges d'action.",
    "pointBascule": "À partir de quand les coûts rendent-ils l'activité difficilement ajustable ?",
    "tensionArbitrage": "Absorber les surcoûts pour préserver la compétitivité à court terme ou investir dans la transformation.",
    "primaryProfiles": [
      "DAF / CFO industriel",
      "Contrôle de gestion industriel",
      "Corporate finance",
      "Restructuring",
      "Direction générale"
    ],
    "formatCourt": {
      "titrePublicCourt": "À partir de quand les coûts rendent-ils l'activité difficilement ajustable ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 2,
    "landingPages": [
      "finance"
    ]
  },
  {
    "code": "A15",
    "crmCode": "IND-C4-AC-A15",
    "programmeCode": "IND-C4-ASC-03",
    "conversationCode": "C4",
    "contextCode": "AC",
    "typeLecture": "STRATEGIQUE",
    "questionEditoriale": "À partir de quand la pression des clients ou donneurs d'ordre limite-t-elle la capacité à préserver la marge nécessaire au maintien ou à l'adaptation de l'outil ?",
    "questionPublique": "À partir de quand la pression commerciale empêche-t-elle toute adaptation viable ?",
    "questionActivation": "Dans de nombreuses chaînes de valeur, les clients et donneurs d'ordre exercent une pression forte sur les prix, les délais ou les conditions contractuelles. Cette pression peut limiter la capacité à préserver les marges nécessaires.",
    "introMecanisme": "Dans de nombreuses chaînes de valeur, les clients et donneurs d'ordre exercent une pression forte sur les prix, les délais ou les conditions contractuelles. Cette pression peut limiter la capacité à préserver les marges nécessaires.",
    "pointBascule": "À partir de quand la pression commerciale empêche-t-elle toute adaptation viable ?",
    "tensionArbitrage": "Servir les clients sans perdre la marge nécessaire pour maintenir et transformer l'outil.",
    "primaryProfiles": [
      "Direction générale",
      "Direction stratégie",
      "Direction industrielle",
      "Conseil stratégie industrielle",
      "Compétitivité"
    ],
    "formatCourt": {
      "titrePublicCourt": "À partir de quand la pression commerciale empêche-t-elle toute adaptation viable ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 3,
    "landingPages": [
      "strategie"
    ]
  },
  {
    "code": "A16",
    "crmCode": "IND-C4-AC-A16",
    "programmeCode": "IND-C4-ASC-04",
    "conversationCode": "C4",
    "contextCode": "AC",
    "typeLecture": "TERRITORIALE",
    "questionEditoriale": "À partir de quand un territoire n'offre-t-il plus les conditions suffisantes pour maintenir ou ajuster une activité sans surcoûts croissants ?",
    "questionPublique": "À partir de quand le territoire devient-il un handicap économique ?",
    "questionActivation": "Un territoire peut soutenir une activité industrielle par ses infrastructures, ses compétences, ses réseaux, ses services. Mais lorsque les contraintes s'accumulent, il peut aussi devenir plus coûteux d'y maintenir l'activité.",
    "introMecanisme": "Un territoire peut soutenir une activité industrielle par ses infrastructures, ses compétences, ses réseaux, ses services. Mais lorsque les contraintes s'accumulent, il peut aussi devenir plus coûteux d'y maintenir l'activité.",
    "pointBascule": "À partir de quand le territoire devient-il un handicap économique ?",
    "tensionArbitrage": "Préserver l'ancrage territorial sans supporter des surcoûts qui rendent l'activité fragile.",
    "primaryProfiles": [
      "Développement économique territorial",
      "Site selection",
      "Affaires publiques territoriales",
      "Collectivité / agence économique",
      "Direction implantation"
    ],
    "formatCourt": {
      "titrePublicCourt": "À partir de quand le territoire devient-il un handicap économique ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 4
  },
  {
    "code": "A13",
    "crmCode": "IND-C4-RC-A13",
    "programmeCode": "IND-C4-RSS-01",
    "conversationCode": "C4",
    "contextCode": "RC",
    "typeLecture": "RH_COMPETENCES",
    "questionEditoriale": "À partir de quand les compétences critiques, les conditions de travail ou l'organisation deviennent-elles un facteur de bascule dans une trajectoire de transformation ?",
    "questionPublique": "Quand les compétences conditionnent-elles la survie du modèle ?",
    "questionActivation": "Transformer une trajectoire industrielle suppose de mobiliser des compétences, de faire évoluer les organisations et de maintenir l'engagement des équipes. En situation de crise, ces dimensions peuvent devenir décisives.",
    "introMecanisme": "Transformer une trajectoire industrielle suppose de mobiliser des compétences, de faire évoluer les organisations et de maintenir l'engagement des équipes. En situation de crise, ces dimensions peuvent devenir décisives.",
    "pointBascule": "Quand les compétences conditionnent-elles la survie du modèle ?",
    "tensionArbitrage": "Transformer l'activité sans perdre les savoir-faire et les collectifs nécessaires à la nouvelle trajectoire.",
    "primaryProfiles": [
      "DRH industriel",
      "Responsable compétences",
      "Formation industrielle",
      "Organisation du travail",
      "Direction de site"
    ],
    "formatCourt": {
      "titrePublicCourt": "Quand les compétences conditionnent-elles la survie du modèle ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 1
  },
  {
    "code": "A14",
    "crmCode": "IND-C4-RC-A14",
    "programmeCode": "IND-C4-RSS-02",
    "conversationCode": "C4",
    "contextCode": "RC",
    "typeLecture": "ENERGIE_RESSOURCES_DECARBONATION",
    "questionEditoriale": "À partir de quand les contraintes énergétiques, hydriques ou climatiques imposent-elles un arbitrage de localisation, de transformation ou de redéploiement du site ?",
    "questionPublique": "Quand les contraintes rendent-elles le site non viable dans sa configuration actuelle ?",
    "questionActivation": "Lorsque l'énergie devient trop coûteuse ou indisponible, lorsque l'eau manque ou que les risques climatiques augmentent, la question peut devenir existentielle pour un site industriel. Il ne s'agit plus seulement d'adapter l'outil.",
    "introMecanisme": "Lorsque l'énergie devient trop coûteuse ou indisponible, lorsque l'eau manque ou que les risques climatiques augmentent, la question peut devenir existentielle pour un site industriel. Il ne s'agit plus seulement d'adapter l'outil.",
    "pointBascule": "Quand les contraintes rendent-elles le site non viable dans sa configuration actuelle ?",
    "tensionArbitrage": "Préserver l'ancrage industriel ou déplacer/transformer l'activité pour répondre aux contraintes physiques.",
    "primaryProfiles": [
      "Énergie / utilités",
      "Décarbonation industrielle",
      "Environnement industriel",
      "Stratégie de site",
      "Direction industrielle"
    ],
    "formatCourt": {
      "titrePublicCourt": "Quand les contraintes rendent-elles le site non viable dans sa configuration actuelle ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 2
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
    "questionActivation": "Lorsque la structure commerciale devient trop fragile, la crise peut obliger à revoir plus largement la trajectoire. Il ne suffit plus de négocier mieux ou de vendre davantage.",
    "introMecanisme": "Lorsque la structure commerciale devient trop fragile, la crise peut obliger à revoir plus largement la trajectoire. Il ne suffit plus de négocier mieux ou de vendre davantage.",
    "pointBascule": "Quand le modèle commercial devient-il incompatible avec l'outil ou la trajectoire industrielle ?",
    "tensionArbitrage": "Conserver les marchés existants ou changer de position pour préserver la viabilité industrielle.",
    "primaryProfiles": [
      "Direction générale",
      "Direction stratégie",
      "Direction industrielle",
      "Conseil stratégie industrielle",
      "Compétitivité"
    ],
    "formatCourt": {
      "titrePublicCourt": "Quand le modèle commercial devient-il incompatible avec l'outil ou la trajectoire industrielle ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 3,
    "landingPages": [
      "strategie"
    ]
  },
  {
    "code": "A16",
    "crmCode": "IND-C4-RC-A16",
    "programmeCode": "IND-C4-RSS-04",
    "conversationCode": "C4",
    "contextCode": "RC",
    "typeLecture": "TERRITORIALE",
    "questionEditoriale": "À quelles conditions un territoire peut-il encore porter un redéploiement industriel, une reconversion partielle ou une nouvelle trajectoire de site ?",
    "questionPublique": "Quand le territoire devient-il le facteur décisif de transformation ou d'échec ?",
    "questionActivation": "Lorsqu'un site industriel doit se transformer, le territoire devient un acteur décisif. Il peut faciliter un redéploiement, accompagner une reconversion ou attirer de nouveaux investisseurs. Mais il peut aussi manquer de foncier, d'infrastructures ou de moyens.",
    "introMecanisme": "Lorsqu'un site industriel doit se transformer, le territoire devient un acteur décisif. Il peut faciliter un redéploiement, accompagner une reconversion ou attirer de nouveaux investisseurs. Mais il peut aussi manquer de foncier, d'infrastructures ou de moyens.",
    "pointBascule": "Quand le territoire devient-il le facteur décisif de transformation ou d'échec ?",
    "tensionArbitrage": "Reconstruire une trajectoire industrielle sans surestimer les ressources réelles du territoire.",
    "primaryProfiles": [
      "Développement économique territorial",
      "Site selection",
      "Affaires publiques territoriales",
      "Collectivité / agence économique",
      "Direction implantation"
    ],
    "formatCourt": {
      "titrePublicCourt": "Quand le territoire devient-il le facteur décisif de transformation ou d'échec ?",
      "usage": "Titre court issu du programme éditorial source pour affichage en lecture complémentaire."
    },
    "showInConversationPage": true,
    "showInForm": false,
    "isProgrammeSourceAngle": true,
    "sourceLocalAngle": 4
  }
];

  var cycle = data.cycles.find(function(item) { return item.code === 'IND'; });
  if (!cycle) return;
  if (!cycle.angles) cycle.angles = [];

  var existingByCrm = {};
  cycle.angles.forEach(function(angle) { existingByCrm[angle.crmCode] = angle; });

  sourceAngles.forEach(function(sourceAngle) {
    var existing = existingByCrm[sourceAngle.crmCode];
    if (existing) {
      existing.programmeCode = existing.programmeCode || sourceAngle.programmeCode;
      existing.sourceLocalAngle = sourceAngle.sourceLocalAngle;
      existing.isProgrammeSourceAngle = true;
      existing.questionEditoriale = existing.questionEditoriale || sourceAngle.questionEditoriale;
      existing.introMecanisme = existing.introMecanisme || sourceAngle.introMecanisme;
      existing.pointBascule = existing.pointBascule || sourceAngle.pointBascule;
      existing.tensionArbitrage = existing.tensionArbitrage || sourceAngle.tensionArbitrage;
      existing.formatCourt = existing.formatCourt || sourceAngle.formatCourt;
      existing.primaryProfiles = existing.primaryProfiles && existing.primaryProfiles.length ? existing.primaryProfiles : sourceAngle.primaryProfiles;
      return;
    }
    cycle.angles.push(sourceAngle);
  });

  data.version = '2026-05-08-v9-complementaires-meme-contexte';
  data.notes.complementaryRule = 'Les lectures complémentaires d’une fiche angle sont les 3 autres angles de la même conversation contextualisée : même conversationCode, même contextCode, crmCode différent.';
  data.notes.noVousInComplementaryActors = true;
})(window.EN_PLATEAU_EDITORIAL_DATA);

/* ═══════════════════════════════════════════════════════════════════════
   Renderer landing pages — V8 lisibilité des angles

   Objectif :
   - clarifier la fonction de la colonne de gauche et de la colonne de droite ;
   - rendre explicites le titre de conversation, l’angle attendu et le rôle
     des blocs éditoriaux ;
   - alléger la lecture sans casser l’automatisation.
═══════════════════════════════════════════════════════════════════════ */
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
    return String(value || '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
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

  function getCycleAngles(cycleCode) {
    var cycle = api.getCycle(cycleCode);
    return cycle && cycle.angles ? cycle.angles.slice() : [];
  }

  function getLandingAngles(slug) {
    var config = data.landingPages[slug];
    if (!config) return [];
    return api.getAnglesByLanding(slug).map(function(angle) {
      return {
        angle: angle,
        conversation: api.getConversation(config.cycleCode, angle.conversationCode),
        context: api.getContext(config.cycleCode, angle.contextCode)
      };
    });
  }

  function getComplementaryAngles(config, currentAngle) {
    if (!currentAngle) return [];

    return getCycleAngles(config.cycleCode).filter(function(angle) {
      return angle.conversationCode === currentAngle.conversationCode &&
        angle.contextCode === currentAngle.contextCode &&
        angle.crmCode !== currentAngle.crmCode;
    }).sort(function(a, b) {
      return (a.sourceLocalAngle || 99) - (b.sourceLocalAngle || 99);
    });
  }

  function contextTag(config, contextCode) {
    var context = api.getContext(config.cycleCode, contextCode);
    return context ? context.label : contextCode;
  }

  function angleTitle(angle) {
    return (angle.formatCourt && angle.formatCourt.titrePublicCourt) || angle.questionPublique || 'Angle éditorial';
  }

  function paragraph(text) {
    return text ? '<p>' + esc(text) + '</p>' : '';
  }

  function cleanLongTitle(value) {
    return String(value || '').replace(/^Fiche intervenant\s*[—-]\s*/i, '').trim();
  }

  function mergedGuidanceText() {
    return 'Votre intervention n’a pas pour objet de commenter une situation interne, un client, un mandat ou une décision confidentielle. Elle vise à éclairer, à partir de votre expérience et de votre position d’observation, des seuils, des signaux faibles et des arbitrages qui se répètent dans les trajectoires industrielles.';
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

  function renderValueSection(config) {
    if (!config.valueSection) return;
    setText('valeur-titre', config.valueSection.title);
    setText('valueIntro', config.valueSection.intro);
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
      el.innerHTML = '<div class="audience-card"><h3>' + esc(copy.yesTitle) + '</h3><ul class="audience-list">' +
        (copy.yesItems || []).map(function(item) { return '<li>' + esc(item) + '</li>'; }).join('') +
      '</ul></div>' +
      '<div class="audience-card audience-card--no"><h3>' + esc(copy.noTitle) + '</h3><ul class="audience-list audience-list--no">' +
        (copy.noItems || []).map(function(item) { return '<li>' + esc(item) + '</li>'; }).join('') +
      '</ul></div>';
    }
    setHtml('audiencePanel', paragraph(copy.panel));
  }

  function renderComplementaryReadings(config, currentAngle) {
    var complementaries = getComplementaryAngles(config, currentAngle);
    if (!complementaries.length) return '';

    var items = complementaries.map(function(angle) {
      var profiles = (angle.primaryProfiles || []).join(', ');
      return '<div class="angle-complementary-item">' +
        '<div class="angle-meta-label">' + esc(contextTag(config, angle.contextCode) + ' · ' + getReadingLabel(angle.typeLecture)) + '</div>' +
        '<div class="angle-complementary-title">' + esc(angleTitle(angle)) + '</div>' +
        (profiles ? '<div class="angle-meta-text"><strong>Acteurs pressentis :</strong> ' + esc(profiles) + '</div>' : '') +
      '</div>';
    }).join('');

    return '<details class="angle-complementary-details">' +
      '<summary>Voir les 3 autres angles de cette conversation contextualisée</summary>' +
      '<div class="angle-complementary-body">' +
        '<div class="angle-meta-label">Les 3 autres angles prévus dans cette même conversation et ce même contexte</div>' +
        '<p class="angle-meta-text angle-complementary-intro">Ces angles sont indiqués pour situer la composition éditoriale du même contexte, sans concurrencer l’angle présenté ici.</p>' +
        items +
      '</div>' +
    '</details>';
  }

  function renderLongDetails(angle) {
    var long = angle.formatLongIntervenant || {};
    var dimensions = long.dimensions || [];
    var bascule = long.momentBascule || angle.pointBascule || '';
    var tension = long.tensionCentrale || angle.tensionArbitrage || '';
    var cleanTitle = cleanLongTitle(long.titre || '');

    var activationHtml = angle.questionActivation ? '<p class="finance-angle-desc angle-main-copy">' + esc(angle.questionActivation) + '</p>' : '';
    var chapeauHtml = long.chapeau ? '<p class="finance-angle-desc angle-main-copy">' + esc(long.chapeau) + '</p>' : (angle.introMecanisme ? '<p class="finance-angle-desc angle-main-copy">' + esc(angle.introMecanisme) + '</p>' : '');

    var pointTensionHtml = (bascule || tension) ? '<div class="angle-pair-grid">' +
      '<div class="angle-meta-card"><div class="angle-meta-label">Point de bascule</div><div class="angle-meta-text">' + esc(bascule) + '</div></div>' +
      '<div class="angle-meta-card"><div class="angle-meta-label">Tension / arbitrage</div><div class="angle-meta-text">' + esc(tension) + '</div></div>' +
    '</div>' : '';

    var dimsHtml = dimensions.length ? '<div class="angle-dimensions-grid">' + dimensions.map(function(dim) {
      return '<div class="angle-meta-card"><div class="angle-meta-label">' + esc(dim.title) + '</div><div class="angle-meta-text">' + esc(dim.text) + '</div></div>';
    }).join('') + '</div>' : '';

    return '<div class="angle-long-details">' +
      '<div class="angle-section">' +
        '<div class="angle-section-label">Ce que votre intervention permettra d’éclairer</div>' +
        (cleanTitle ? '<div class="angle-section-title">' + esc(cleanTitle) + '</div>' : '') +
        activationHtml +
        chapeauHtml +
      '</div>' +
      ((bascule || tension) ? '<div class="angle-section">' +
        '<div class="angle-section-label">Ce que cet angle cherche à faire apparaître</div>' +
        pointTensionHtml +
      '</div>' : '') +
      (dimensions.length ? '<div class="angle-section">' +
        '<div class="angle-section-label">Votre intervention sera préparée autour de 6 dimensions</div>' +
        '<p class="angle-section-intro">En Plateau vous accompagne pour clarifier votre position sur ce sujet et l’exprimer publiquement, sans exposer de situation confidentielle.</p>' +
        dimsHtml +
      '</div>' : '') +
      '<div class="panel angle-security-panel"><p>' + esc(mergedGuidanceText()) + '</p></div>' +
    '</div>';
  }

  function renderAnglePanel(item, index, config, reading) {
    var angle = item.angle;
    var conversation = item.conversation || { code: angle.conversationCode, title: angle.conversationCode };
    var context = item.context || { label: angle.contextCode };
    var active = index === 0 ? ' is-active' : '';
    var panelId = 'angle-' + safeId(angle.crmCode || String(index));
    var cnum = String(conversation.code || 'C1').replace('C', '');
    var profiles = (angle.primaryProfiles || []).join(', ');

    return '<div class="conv-panel' + active + '" id="' + panelId + '">' +
      '<div class="conv-panel-header" style="border-top:3px solid var(--c' + esc(cnum) + ');">' +
        '<div class="conv-panel-overline">Conversation</div>' +
        '<h3 class="conv-panel-title">' + esc(conversation.landingTitle || conversation.title || '') + '</h3>' +
        '<p class="conv-panel-desc"><strong>Contexte :</strong> ' + esc(context.label) + ' &nbsp;·&nbsp; <strong>Lecture attendue :</strong> ' + esc(reading.label) + '</p>' +
      '</div>' +
      '<div class="finance-angle">' +
        '<div class="finance-angle-label finance-angle-label--accent">Voici l’angle sur lequel votre lecture est attendue</div>' +
        '<div class="finance-angle-q">' + esc(angleTitle(angle)) + '</div>' +
        (profiles ? '<p class="angle-profiles"><strong>Acteurs pressentis :</strong> Vous, ' + esc(profiles) + '</p>' : '') +
        renderLongDetails(angle) +
        renderComplementaryReadings(config, angle) +
      '</div>' +
    '</div>';
  }

  function renderAngleNavItem(item, index) {
    var angle = item.angle;
    var conversation = item.conversation || { code: angle.conversationCode, title: angle.conversationCode };
    var context = item.context || { label: angle.contextCode };
    var active = index === 0 ? ' is-active' : '';
    var panelId = 'angle-' + safeId(angle.crmCode || String(index));

    return '<button class="conv-nav-item' + active + '" data-conv="' + esc(panelId) + '" aria-selected="' + (index === 0 ? 'true' : 'false') + '">' +
      '<div class="conv-nav-color"></div>' +
      '<div class="conv-nav-body">' +
        '<div class="conv-nav-num">' + esc((conversation.code || '') + ' · ' + context.label) + '</div>' +
        '<div class="conv-nav-title">' + esc(angleTitle(angle)) + '</div>' +
      '</div>' +
    '</button>';
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
        panels.forEach(function(p) { p.classList.remove('is-active'); });
        this.classList.add('is-active');
        this.setAttribute('aria-selected', 'true');
        var targetPanel = document.getElementById(target);
        if (targetPanel) targetPanel.classList.add('is-active');
      });
    });
  }

  function renderConversations(slug, config, reading) {
    var angles = getLandingAngles(slug);
    var convCopy = (config.copy && config.copy.conversations) || {};

    setText('conversations-titre', convCopy.title || ('Les angles où la ' + readingName(reading) + ' devient décisive'));
    setText('conversationsIntro', convCopy.intro || 'Chaque angle présenté ci-dessous correspond à une position éditoriale précise de cette lecture dans le cycle.');

    var nav = byId('convNav');
    if (nav) nav.innerHTML = angles.map(renderAngleNavItem).join('');

    var content = byId('convContent');
    if (content) content.innerHTML = angles.map(function(item, index) {
      return renderAnglePanel(item, index, config, reading);
    }).join('');

    var panel = byId('conversationsPanel');
    if (panel) {
      if (convCopy.panel) {
        panel.style.display = '';
        panel.innerHTML = paragraph(convCopy.panel);
      } else {
        panel.style.display = 'none';
        panel.innerHTML = '';
      }
    }

    attachConversationSwitch();
  }

  function renderPreparationDimensions(config) {
    var copy = config.copy || {};
    var dimensions = copy.dimensions || [];
    var grid = byId('dimensionsGrid');

    if (grid && dimensions.length) {
      grid.className = 'dims-grid';
      grid.innerHTML = dimensions.map(function(dim) {
        return '<div class="dim-card">' +
          '<div class="dim-num">' + esc(dim.num || '') + '</div>' +
          '<div class="dim-text"><strong>' + esc(dim.title || '') + '</strong>' + esc(dim.text || '') + '</div>' +
        '</div>';
      }).join('');
    }

    var panel = byId('dimensionsPanel');
    if (panel && copy.dimensionsPanel) {
      panel.style.display = '';
      panel.innerHTML = paragraph(copy.dimensionsPanel);
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
    if (!slug || !data.landingPages || !data.landingPages[slug]) return false;

    var config = data.landingPages[slug];
    var reading = data.readingTypes[config.readingType];
    var cycle = api.getCycle(config.cycleCode);
    var copy = config.copy || {};

    document.title = config.title || document.title;
    var meta = document.querySelector('meta[name="description"]');
    if (meta && config.metaDescription) meta.setAttribute('content', config.metaDescription);

    setText('navCycle', config.navLabel || ((cycle && cycle.label ? cycle.label : '') + ' · ' + (reading ? reading.label : '')));
    setHtml('hero-title', config.heroTitleHtml || '');
    setText('heroLead', config.heroLead || (reading && reading.positioning) || '');
    setHtml('heroNote', copy.heroNoteHtml || '');
    setText('heroCardTitle', copy.heroCardTitle || ('Votre ' + readingName(reading) + ' a-t-elle sa place dans l’une de ces conversations ?'));
    setText('heroCardText', copy.heroCardText || 'En 15 minutes, nous vérifions si votre angle correspond à une position encore disponible — en toute confidentialité.');

    setCtas(reading);
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
    if (slug) renderLanding(slug);
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
