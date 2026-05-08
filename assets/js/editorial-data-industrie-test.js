/*
  En Plateau — Référentiel éditorial centralisé
  V2 dynamique : cycle Industrie · lectures stratégique et financière

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
  version: "2026-05-08-v2-landing-dynamique",
  status: "test",
  sourceDocument: "programme_editorial_industrie.docx",
  scope: {
    cycle: "IND",
    includedReadings: ["STRATEGIQUE", "FINANCIERE"],
    note: "Référentiel test limité aux lectures stratégique et financière. Les autres lectures seront ajoutées après validation du modèle."
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
