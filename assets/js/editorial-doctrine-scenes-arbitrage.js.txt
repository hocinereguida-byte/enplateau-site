/*
  Scènes d’Arbitrage — Doctrine éditoriale centrale
  Version : 2026-05-26-v1
  Rôle :
  - Source éditoriale permanente, accessible et éditable côté projet.
  - À charger avant les fichiers render-* lorsque les pages doivent appliquer la doctrine.
  - Les autres fichiers ne doivent pas redéfinir ces règles : ils doivent s’appuyer sur cet objet.
*/

(function () {
  "use strict";

  const DOCTRINE = {
    version: "2026-05-26-v1",
    name: "Doctrine éditoriale — Scènes d’Arbitrage",
    positioning:
      "Scènes d’Arbitrage ne vend pas une prise de parole. Le dispositif permet à des acteurs qui accompagnent, pilotent ou éclairent des décisions de formuler une position utile, préparée et exploitable sur des arbitrages réels.",
    valuePrinciple:
      "La valeur ne vient pas de la mise en avant d’une personne ou d’une organisation. Elle vient de ce que sa position permet de rendre compréhensible : une décision, un seuil, une coordination, un changement de méthode, une capacité à faire tenir une trajectoire.",
    principles: [
      { key: "utile", label: "Utile", text: "Éclaire un arbitrage que d’autres dirigeants, clients, partenaires ou pairs peuvent reconnaître." },
      { key: "situee", label: "Située", text: "Part d’une fonction, d’une responsabilité, d’une expérience ou d’un point d’observation réel." },
      { key: "preparee", label: "Préparée", text: "Est cadrée avant toute production pour clarifier ce qui peut être dit, ce qui doit rester hors champ et ce qui doit être rendu intelligible." },
      { key: "non_promotionnelle", label: "Non promotionnelle", text: "Ne présente ni une offre, ni une méthode, ni une organisation comme sujet central." },
      { key: "non_exposante", label: "Non exposante", text: "N’oblige pas à révéler un cas client, une difficulté interne, une donnée sensible ou une situation fragile." },
      { key: "non_anxiogene", label: "Non anxiogène", text: "Ne dramatise pas les transformations et ne laisse pas entendre que l’organisation est en difficulté." },
      { key: "publiquement_tenable", label: "Publiquement tenable", text: "Peut être préparée avec les équipes communication, juridiques ou affaires publiques." },
      { key: "exploitable", label: "Exploitable", text: "Produit un actif éditorial réutilisable dans un écosystème professionnel." }
    ],
    method: [
      { label: "Préparer", text: "Qualifier la pertinence, cadrer la parole, sécuriser le périmètre." },
      { label: "Produire", text: "Transformer cette position en format éditorial ou audiovisuel clair, tenu et média-compatible." },
      { label: "Activer", text: "Réutiliser l’actif dans l’écosystème professionnel de l’organisation ou de l’intervenant : partenaires, prospects, clients, LinkedIn, événements, relances qualifiées." }
    ],
    scarcity: {
      principle: "La rareté est une exigence éditoriale, pas une technique de vente.",
      explanation: "Une position n’est pas un espace vendu. Elle est proposée parce qu’une lecture est jugée pertinente dans une conversation donnée.",
      preferred: "Une position est proposée lorsqu’une lecture apporte une contribution utile à la conversation.",
      avoid: "Il ne reste qu’une place disponible, profitez-en vite."
    },
    tone: {
      valoriser: [
        "intelligence de situation",
        "discernement",
        "créativité dans l’arbitrage",
        "résilience",
        "capacité à rendre lisible une décision complexe",
        "lecture située depuis une responsabilité réelle",
        "expérience utile à d’autres acteurs"
      ],
      eviter: [
        "héroïsation narcissique",
        "flatterie hiérarchique",
        "discours de visibilité",
        "dramatisation",
        "formulation accusatoire",
        "impression que l’organisation expose une difficulté ou une fragilité",
        "promesse commerciale déguisée",
        "survalorisation du média comme bénéfice principal"
      ]
    },
    lexicon: {
      banned: [
        "sous tension",
        "sous contrainte",
        "sous crise",
        "crise",
        "rupture",
        "fragilité",
        "fragiliser",
        "vulnérabilité",
        "dégradation",
        "blocage",
        "rogner la marge",
        "impacter la qualité",
        "mettre les équipes en tension",
        "plan social",
        "restructuration",
        "risque de désorganisation"
      ],
      replacements: [
        ["sous tension", "à piloter"],
        ["sous contrainte", "sous conditions"],
        ["sous crise", "en redéfinition"],
        ["crise", "moment de redéfinition"],
        ["rupture", "changement de nature"],
        ["fragilité", "point de vigilance"],
        ["fragiliser", "rendre plus sensible"],
        ["contrainte", "condition"],
        ["tension", "point d’attention"],
        ["vulnérabilité", "point sensible"],
        ["blocage", "limite"],
        ["restructuration", "transformation sociale et organisationnelle"]
      ]
    },
    contextLabels: {
      CST: "Croissance organisée",
      GS: "Croissance organisée",
      ASC: "Adaptation coordonnée",
      AC: "Adaptation coordonnée",
      RSS: "Reconfiguration industrielle",
      RC: "Reconfiguration industrielle"
    },
    visibleControl: [
      { key: "clarte", label: "Clarté", question: "Comprend-on en moins de 30 secondes ce qui est proposé ?" },
      { key: "desirabilite", label: "Désirabilité", question: "La proposition donne-t-elle envie par sa valeur éditoriale, et non par une promesse de visibilité ?" },
      { key: "non_commercialite", label: "Non-commercialité", question: "Le contenu ressemble-t-il à une proposition éditoriale, et non à une offre commerciale déguisée ?" },
      { key: "non_exposition", label: "Non-exposition", question: "La personne comprend-elle qu’elle ne devra pas exposer de situation sensible ?" },
      { key: "ton_non_anxiogene", label: "Ton non anxiogène", question: "Les mots donnent-ils envie de participer sans dramatiser ?" },
      { key: "rarete_editoriale", label: "Rareté éditoriale", question: "La rareté est-elle présentée comme une exigence de cohérence éditoriale ?" }
    ],
    castingRules: {
      maxActivePositionsPerOrganisation: 5,
      oneActiveDealPerPerson: true,
      noSameOrganisationSameAngle: true,
      noSameOrganisationSameConversationContext: true,
      sameConversationAllowedOnlyDifferentContexts: true,
      roleActivationPriority: true,
      roleActivation: {
        "Intervenant principal": "intervenant",
        "Appui DG/PDG": "appui_direction",
        "Appui Communication": "appui_communication",
        "Appui Affaires publiques": "appui_affaires_publiques",
        "Appui COMEX / Direction": "appui_comex_conditionnel"
      },
      executiveSpeakerException: "Un président, PDG ou DG peut être à la fois intervenant et dirigeant-intervenant."
    },
    exchangeScript: {
      purpose: "Qualifier une pertinence en 15 minutes, pas vendre ni figer une note complète.",
      structure: [
        "phrase d’ouverture",
        "phrase de positionnement non promotionnel",
        "six questions : transformation/contexte, acteurs impactés, arbitrages/décisions, défis/opportunités, vision, échelle",
        "reformulation",
        "décision : Go fort / Go prudent / No go"
      ],
      pivot: "Je ne cherche pas à vous faire parler de votre cabinet ou de votre organisation. Je cherche à vérifier si votre position vous permet d’éclairer un arbitrage que vos clients, partenaires ou pairs rencontrent réellement, sans les exposer."
    },
    governance: [
      "Pipedrive décide qui est actif.",
      "Le référentiel éditorial décide du contenu de référence.",
      "Cette doctrine décide du ton et des limites.",
      "Les enrichissements personnalisent publiquement sans contredire la doctrine.",
      "Le miroir CRM reflète l’état opérationnel.",
      "Les règles éditoriales sécurisent l’affichage.",
      "Les fichiers de rendu affichent et contrôlent.",
      "Le HTML charge.",
      "Le CSS habille."
    ],
    finalPrinciple: "Doctrine courte d’abord. Contrôle visible ensuite. CRM ensuite. Fichiers à la fin."
  };

  function normalize(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
  }

  function applyLexicon(value) {
    let output = String(value || "");
    for (const [from, to] of DOCTRINE.lexicon.replacements) {
      const escaped = String(from).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      output = output.replace(new RegExp(escaped, "gi"), to);
    }
    return output;
  }

  function hasBannedTerms(value) {
    const text = normalize(value);
    return DOCTRINE.lexicon.banned.filter(term => text.includes(normalize(term)));
  }

  function getContextLabel(codeOrLabel) {
    const raw = String(codeOrLabel || "").trim();
    const key = raw.toUpperCase();
    if (DOCTRINE.contextLabels[key]) return DOCTRINE.contextLabels[key];
    return applyLexicon(raw);
  }

  window.SDA_EDITORIAL_DOCTRINE = DOCTRINE;
  window.SDAEditorialDoctrine = { data: DOCTRINE, applyLexicon, hasBannedTerms, getContextLabel };
})();
