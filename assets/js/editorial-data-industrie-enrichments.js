/*
  Scènes d'Arbitrage — editorial-data-industrie-enrichments.js
  Version 20260525-crm-secure-v1

  Rôle :
  - enrichissements publics, publiables cast par cast ;
  - formulations "pourquoi cette personne / organisation" ;
  - angle LinkedIn public.

  Ce fichier ne porte pas la vérité CRM opérationnelle :
  - les statuts actif / réserve / invitation envoyée sont contrôlés par activation-crm-industrie.js ;
  - les appuis internes, liens de contrôle et règles de prospection restent hors de ce fichier public ;
  - ne jamais ajouter ici de notes internes, rangs CRM, commentaires de remplacement ou vigilances sensibles.

  Ordre de chargement recommandé :
  1. editorial-data-industrie-v67.js
  2. editorial-data-industrie-enrichments.js
  3. activation-crm-industrie.js
  4. render-core.js
  5. render-landing.js
*/
window.INDUSTRIE_ENRICHMENTS_VERSION = "20260525-crm-secure-v1";
window.INDUSTRIE_ENRICHMENTS = [
  {
    publicRef: "CR2R38L",
    enrichment: {
      actorType: "cabinet",
      whyPersonPublic: "Votre position de Head of Deals au sein de PwC permet d’apporter une lecture financière sur les choix d’investissement, l’évaluation des risques et les conditions économiques qui rendent une trajectoire industrielle soutenable.",
      whyOrganisationPublic: "PwC apporte à cette conversation une lecture financière de référence, nourrie par son expertise des transactions, des due diligences et des arbitrages d’investissement.",
      linkedinAngle: "Votre parcours chez PwC autour des deals nous semble particulièrement pertinent pour éclairer l’articulation entre choix d’investissement industriel et équilibres financiers."
    }
  },
  {
    publicRef: "CEBWERN",
    enrichment: {
      actorType: "cabinet",
      whyPersonPublic: "Votre rôle de Directeur Général Délégué en Transformation Finance, associé à un parcours industriel, permet d’apporter une lecture financière reliée au pilotage du cash et de la transformation de l’outil de production.",
      whyOrganisationPublic: "Eight Advisory apporte une lecture financière issue de son expertise en transformation des fonctions finance, optimisation du cash et accompagnement opérationnel des entreprises.",
      linkedinAngle: "Votre double expérience en transformation finance et au sein de groupes industriels est idéale pour éclairer les arbitrages financiers liés à l’évolution de l’outil de production."
    }
  },
  {
    publicRef: "CPK5B39",
    enrichment: {
      actorType: "entreprise",
      whyPersonPublic: "Votre rôle de Directeur Industriel du Groupe SERAP permet d’apporter une lecture opérationnelle sur les arbitrages de flux, de qualité, de capacité et de continuité industrielle.",
      whyOrganisationPublic: "Le Groupe SERAP apporte à cette conversation une lecture opérationnelle issue d’un industriel confronté aux enjeux de performance, de qualité, de continuité et d’évolution de ses capacités de production.",
      linkedinAngle: "Votre regard de Directeur Industriel sur les flux, la qualité et la capacité de production nous semble particulièrement pertinent pour éclairer les arbitrages opérationnels qui accompagnent l’évolution d’un outil industriel."
    }
  },
  {
    publicRef: "CPJJT8K",
    enrichment: {
      actorType: "entreprise",
      whyPersonPublic: "Votre rôle de Directeur Industriel Groupe chez ACOME permet d’apporter une lecture opérationnelle sur les arbitrages de capacité, la performance industrielle et le pilotage des flux d’usine.",
      whyOrganisationPublic: "ACOME apporte à cette conversation une lecture opérationnelle issue d’un acteur industriel de référence, confronté aux enjeux de gestion des flux complexes et d’évolution de l’outil de production.",
      linkedinAngle: "Votre regard de Directeur Industriel Groupe chez ACOME nous semble particulièrement pertinent pour éclairer les arbitrages opérationnels et capacitaires qui accompagnent les trajectoires de croissance."
    }
  },
  {
    publicRef: "CA24C4G",
    enrichment: {
      actorType: "cabinet",
      whyPersonPublic: "Votre position de Partner chez Argon & Co permet d’apporter une lecture stratégique des interdépendances qui conditionnent la tenue d’une trajectoire industrielle : fournisseurs critiques, choix de sourcing, coopérations, capacités disponibles et arbitrages de compétitivité.",
      whyOrganisationPublic: "Argon & Co apporte à cette conversation une lecture comparative nourrie par ses interventions en stratégie des opérations, supply chain, achats, performance industrielle et transformation des chaînes de valeur.",
      linkedinAngle: "Votre parcours en operations strategy, procurement performance et transformation des relations fournisseurs nous semble particulièrement pertinent pour éclairer les interdépendances qui deviennent décisives dans une trajectoire industrielle."
    }
  },
  {
    publicRef: "C9RMFBV",
    enrichment: {
      actorType: "cabinet",
      whyPersonPublic: "Votre position d’Associate Partner chez Argon & Co permet d’apporter une lecture opérationnelle de la reconfiguration de l’outil industriel, à partir des systèmes de pilotage, des processus supply chain, des données, des interfaces et des conditions concrètes d’exécution.",
      whyOrganisationPublic: "Argon & Co apporte à cette conversation une lecture issue de ses interventions en excellence opérationnelle, supply chain, transformation des processus et pilotage de la performance industrielle.",
      linkedinAngle: "Votre expérience en transformation opérationnelle et supply chain nous semble particulièrement pertinente pour éclairer le moment où le pilotage industriel appelle une reconfiguration plus profonde de l’outil."
    }
  },
  {
    publicRef: "CL0RY6U",
    enrichment: {
      actorType: "cabinet",
      whyPersonPublic: "Votre expérience en stratégie des opérations, achats, sourcing et transformation des relations fournisseurs peut éclairer cet angle lorsque l’évolution de l’outil industriel est abordée par les systèmes achats, la donnée fournisseurs, les interfaces de pilotage et le procurement digital.",
      whyOrganisationPublic: "Argon & Co apporte ici une lecture utile sur la façon dont les systèmes, les données et les interfaces entre achats, supply chain et opérations peuvent rendre une trajectoire industrielle plus lisible et plus pilotable.",
      linkedinAngle: "Votre parcours permettrait d’aborder cet angle par les systèmes achats, la donnée fournisseurs et les interfaces de pilotage qui structurent la transformation industrielle."
    }
  },
  {
    publicRef: "CHB8CZF",
    enrichment: {
      actorType: "cabinet",
      whyPersonPublic: "Votre position chez Argon & Co permet d’éclairer une trajectoire industrielle à partir des choix de sourcing, des coopérations fournisseurs, des conditions de compétitivité et des réarbitrages qui apparaissent lorsque la chaîne de valeur se déplace.",
      whyOrganisationPublic: "Argon & Co apporte une lecture stratégique et comparative des trajectoires industrielles, nourrie par ses interventions sur les opérations, la supply chain, les achats et les conditions de compétitivité.",
      linkedinAngle: "Votre expérience sur les opérations, le sourcing et les relations fournisseurs permettrait d’éclairer les réarbitrages qui conditionnent la tenue d’une trajectoire industrielle."
    }
  },
  {
    publicRef: "CCNY2JE",
    enrichment: {
      actorType: "cabinet",
      whyPersonPublic: "Votre expérience permet d’éclairer les effets économiques des interdépendances industrielles : choix de sourcing, exposition fournisseurs, conditions de compétitivité, arbitrages de coûts, de continuité et de capacité dans la chaîne de valeur.",
      whyOrganisationPublic: "Argon & Co apporte une lecture reliant performance opérationnelle, supply chain, achats et soutenabilité économique des trajectoires industrielles.",
      linkedinAngle: "Votre regard sur les achats, le sourcing et la performance opérationnelle peut éclairer les conséquences économiques des interdépendances qui pèsent sur une trajectoire industrielle."
    }
  },
  {
    publicRef: "C28DB0E",
    enrichment: {
      actorType: "cabinet",
      whyPersonPublic: "Votre position d’Associate Partner chez Argon & Co permet d’apporter une lecture opérationnelle des interdépendances qui se déplacent sous l’effet des cadres commerciaux, douaniers ou réglementaires : flux, supply chain, organisation, continuité et adaptation des processus.",
      whyOrganisationPublic: "Argon & Co apporte ici une lecture issue de ses interventions en opérations et supply chain, utile pour comprendre comment des cadres externes peuvent transformer les conditions concrètes de pilotage industriel.",
      linkedinAngle: "Votre expérience opérationnelle et supply chain nous semble pertinente pour éclairer la manière dont les cadres commerciaux, douaniers ou réglementaires transforment les interdépendances industrielles."
    }
  },
  {
    publicRef: "CZACFBV",
    enrichment: {
      actorType: "cabinet",
      whyPersonPublic: "Votre expérience en opérations et supply chain permet d’éclairer les arbitrages économiques qui apparaissent lorsque certaines interdépendances deviennent plus décisives : coûts de continuité, choix de flux, capacité, sourcing et performance opérationnelle.",
      whyOrganisationPublic: "Argon & Co apporte une lecture reliant excellence opérationnelle, supply chain et conditions économiques de transformation industrielle.",
      linkedinAngle: "Votre regard opérationnel et supply chain peut éclairer les arbitrages économiques liés aux interdépendances qui pèsent sur les trajectoires industrielles."
    }
  },
  {
    publicRef: "CHLZU3H",
    enrichment: {
      actorType: "cabinet",
      whyPersonPublic: "Votre position chez Argon & Co permet d’éclairer une trajectoire de croissance par les conditions opérationnelles qui la rendent tenable : processus, supply chain, organisation des flux, interfaces de pilotage et capacité à faire évoluer l’exécution.",
      whyOrganisationPublic: "Argon & Co apporte une lecture comparative des trajectoires industrielles, nourrie par ses interventions sur les opérations, la supply chain et la transformation des processus.",
      linkedinAngle: "Votre expérience en opérations et supply chain permettrait d’éclairer les conditions concrètes qui rendent une trajectoire de croissance industrielle réellement pilotable."
    }
  }
];


window.INDUSTRIE_ENRICHMENTS_BY_REF = (window.INDUSTRIE_ENRICHMENTS || []).reduce(function(index, item) {
  var ref = item && (item.publicRef || item.cast || item.ref);
  if (ref) index[String(ref).trim()] = item.enrichment || {};
  return index;
}, {});
