export const cycleCatalogue = [
  {
    "code": "immobilier",
    "label": "Immobilier & fabrique des territoires",
    "number": 1,
    "programmed": true
  },
  {
    "code": "industrie",
    "label": "Industrie & transformation des territoires",
    "number": 2,
    "programmed": true
  },
  {
    "code": "agriculture",
    "label": "Agriculture, alimentation & filières agricoles",
    "number": 3,
    "programmed": false
  },
  {
    "code": "energie",
    "label": "Énergie, production & réseaux",
    "number": 4,
    "programmed": false
  },
  {
    "code": "eau-ressources",
    "label": "Eau, ressources, déchets & économie circulaire",
    "number": 5,
    "programmed": false
  },
  {
    "code": "mobilites",
    "label": "Mobilités, transports & logistique",
    "number": 6,
    "programmed": false
  },
  {
    "code": "commerce",
    "label": "Commerce, distribution & économie de proximité",
    "number": 7,
    "programmed": false
  },
  {
    "code": "tourisme",
    "label": "Tourisme, hôtellerie & restauration",
    "number": 8,
    "programmed": false
  },
  {
    "code": "services-entreprises",
    "label": "Services aux entreprises & fonctions externalisées",
    "number": 9,
    "programmed": false
  },
  {
    "code": "banque-financement",
    "label": "Banque, financement, investissement & assurance",
    "number": 10,
    "programmed": false
  },
  {
    "code": "sante",
    "label": "Santé, soins & systèmes de santé",
    "number": 11,
    "programmed": false
  },
  {
    "code": "social-medicosocial",
    "label": "Social, médico-social & solidarités",
    "number": 12,
    "programmed": false
  },
  {
    "code": "education-formation",
    "label": "Éducation, enseignement & formation",
    "number": 13,
    "programmed": false
  },
  {
    "code": "emploi-travail",
    "label": "Emploi, travail & compétences",
    "number": 14,
    "programmed": false
  },
  {
    "code": "ess",
    "label": "Économie sociale et solidaire & modèles coopératifs",
    "number": 15,
    "programmed": false
  },
  {
    "code": "action-publique",
    "label": "Action publique, collectivités & services publics",
    "number": 16,
    "programmed": false
  },
  {
    "code": "culture-medias",
    "label": "Culture, médias, création & sport",
    "number": 17,
    "programmed": false
  },
  {
    "code": "numerique",
    "label": "Numérique, télécommunications & données",
    "number": 18,
    "programmed": false
  },
  {
    "code": "recherche-innovation",
    "label": "Recherche, innovation & entrepreneuriat",
    "number": 19,
    "programmed": false
  },
  {
    "code": "internationalisation",
    "label": "Internationalisation, commerce extérieur & chaînes de valeur mondiales",
    "number": 20,
    "programmed": false
  }
] as const;

export const cycleFamilies = [
  {
    "id": 1,
    "label": "Territoires & ressources",
    "codes": [
      "immobilier",
      "energie",
      "eau-ressources",
      "mobilites"
    ]
  },
  {
    "id": 2,
    "label": "Production & échanges",
    "codes": [
      "industrie",
      "agriculture",
      "commerce",
      "tourisme"
    ]
  },
  {
    "id": 3,
    "label": "Économie & entreprises",
    "codes": [
      "services-entreprises",
      "banque-financement",
      "ess",
      "internationalisation"
    ]
  },
  {
    "id": 4,
    "label": "Société & services essentiels",
    "codes": [
      "sante",
      "social-medicosocial",
      "education-formation",
      "emploi-travail"
    ]
  },
  {
    "id": 5,
    "label": "Institutions & vie collective",
    "codes": [
      "action-publique",
      "culture-medias"
    ]
  },
  {
    "id": 6,
    "label": "Technologies & transformations",
    "codes": [
      "numerique",
      "recherche-innovation"
    ]
  }
] as const;

export const cycleBriefs: Record<string, { ambition: string; enjeux_et_arbitrages: string; approche_narrative: string }> = {
  "immobilier": {
    "ambition": "Construire, habiter et transformer les territoires. Un projet immobilier oblige à concilier besoins d'habitat, équilibre économique, qualité du cadre de vie, réglementation et sobriété foncière.",
    "enjeux_et_arbitrages": "Les opérations visibles ne disent pas toujours quels compromis, renoncements ou paris ont rendu possibles les bâtiments et les quartiers.",
    "approche_narrative": "Les Scènes sont des fictions économiques documentées : elles mettent en situation des professionnels confrontés à des informations incomplètes, des contraintes et des désaccords. Elles ne reconstituent pas un témoignage réel. Les Regards croisés apportent une analyse sourcée, confrontent plusieurs perspectives et distinguent faits, hypothèses et interprétations. Ensemble, ces formats rendent lisibles les arbitrages quotidiens sans prétendre qu'une décision possède toujours une solution évidente."
  },
  "industrie": {
    "ambition": "Produire, investir et transformer sans rompre. Développer une capacité industrielle engage des choix de production, de recrutement, de financement et d'approvisionnement parfois contradictoires.",
    "enjeux_et_arbitrages": "Nous suivons les décisions de l'atelier jusqu'à la direction pour comprendre leurs conséquences sur l'entreprise et le territoire.",
    "approche_narrative": "Les Scènes sont des fictions économiques documentées : elles mettent en situation des professionnels confrontés à des informations incomplètes, des contraintes et des désaccords. Elles ne reconstituent pas un témoignage réel. Les Regards croisés apportent une analyse sourcée, confrontent plusieurs perspectives et distinguent faits, hypothèses et interprétations. Ensemble, ces formats rendent lisibles les arbitrages quotidiens sans prétendre qu'une décision possède toujours une solution évidente."
  },
  "agriculture": {
    "ambition": "Produire, nourrir et préserver. Les filières agricoles arbitrent entre revenus des producteurs, prix pour les consommateurs, qualité alimentaire, ressources naturelles et travail.",
    "enjeux_et_arbitrages": "Les choix à chaque maillon de la filière transforment la vie des exploitations, l'accès à l'alimentation et les territoires.",
    "approche_narrative": "Les Scènes sont des fictions économiques documentées : elles mettent en situation des professionnels confrontés à des informations incomplètes, des contraintes et des désaccords. Elles ne reconstituent pas un témoignage réel. Les Regards croisés apportent une analyse sourcée, confrontent plusieurs perspectives et distinguent faits, hypothèses et interprétations. Ensemble, ces formats rendent lisibles les arbitrages quotidiens sans prétendre qu'une décision possède toujours une solution évidente."
  },
  "energie": {
    "ambition": "Assurer les besoins et préparer les transitions. Production, réseaux et approvisionnement confrontent les acteurs aux contraintes de coût, de sécurité, d'investissement et de décarbonation.",
    "enjeux_et_arbitrages": "Les choix énergétiques relient des décisions d'infrastructure aux usages quotidiens, souvent sur plusieurs décennies.",
    "approche_narrative": "Les Scènes sont des fictions économiques documentées : elles mettent en situation des professionnels confrontés à des informations incomplètes, des contraintes et des désaccords. Elles ne reconstituent pas un témoignage réel. Les Regards croisés apportent une analyse sourcée, confrontent plusieurs perspectives et distinguent faits, hypothèses et interprétations. Ensemble, ces formats rendent lisibles les arbitrages quotidiens sans prétendre qu'une décision possède toujours une solution évidente."
  },
  "eau-ressources": {
    "ambition": "Répartir, économiser et valoriser. Eau, matières premières et déchets soulèvent des questions de rareté, d'accès, de prix, de qualité et de responsabilité.",
    "enjeux_et_arbitrages": "Nous explorons comment se prennent les décisions de prévention, de partage et de réemploi lorsque les intérêts divergent.",
    "approche_narrative": "Les Scènes sont des fictions économiques documentées : elles mettent en situation des professionnels confrontés à des informations incomplètes, des contraintes et des désaccords. Elles ne reconstituent pas un témoignage réel. Les Regards croisés apportent une analyse sourcée, confrontent plusieurs perspectives et distinguent faits, hypothèses et interprétations. Ensemble, ces formats rendent lisibles les arbitrages quotidiens sans prétendre qu'une décision possède toujours une solution évidente."
  },
  "mobilites": {
    "ambition": "Relier les personnes, les biens et les territoires. Mobilité et logistique doivent concilier accessibilité, rapidité, fiabilité, coûts, conditions de travail et impact environnemental.",
    "enjeux_et_arbitrages": "Chaque ligne, itinéraire, flotte ou plateforme révèle des choix entre service rendu et moyens disponibles.",
    "approche_narrative": "Les Scènes sont des fictions économiques documentées : elles mettent en situation des professionnels confrontés à des informations incomplètes, des contraintes et des désaccords. Elles ne reconstituent pas un témoignage réel. Les Regards croisés apportent une analyse sourcée, confrontent plusieurs perspectives et distinguent faits, hypothèses et interprétations. Ensemble, ces formats rendent lisibles les arbitrages quotidiens sans prétendre qu'une décision possède toujours une solution évidente."
  },
  "commerce": {
    "ambition": "Distribuer, vendre et faire vivre la proximité. Prix, marges, stocks, canaux numériques et évolutions de la consommation exposent les acteurs à des compromis permanents.",
    "enjeux_et_arbitrages": "Les décisions commerciales influencent autant les relations avec les fournisseurs que la vitalité des centres-villes.",
    "approche_narrative": "Les Scènes sont des fictions économiques documentées : elles mettent en situation des professionnels confrontés à des informations incomplètes, des contraintes et des désaccords. Elles ne reconstituent pas un témoignage réel. Les Regards croisés apportent une analyse sourcée, confrontent plusieurs perspectives et distinguent faits, hypothèses et interprétations. Ensemble, ces formats rendent lisibles les arbitrages quotidiens sans prétendre qu'une décision possède toujours une solution évidente."
  },
  "tourisme": {
    "ambition": "Accueillir sans épuiser les ressources. Saisonnalité, emploi, expérience des visiteurs, rentabilité et préservation des lieux mettent les professionnels sous tension.",
    "enjeux_et_arbitrages": "Ce cycle raconte comment les acteurs organisent l'accueil en composant avec des contraintes parfois incompatibles.",
    "approche_narrative": "Les Scènes sont des fictions économiques documentées : elles mettent en situation des professionnels confrontés à des informations incomplètes, des contraintes et des désaccords. Elles ne reconstituent pas un témoignage réel. Les Regards croisés apportent une analyse sourcée, confrontent plusieurs perspectives et distinguent faits, hypothèses et interprétations. Ensemble, ces formats rendent lisibles les arbitrages quotidiens sans prétendre qu'une décision possède toujours une solution évidente."
  },
  "services-entreprises": {
    "ambition": "Accompagner, déléguer et garder la maîtrise. Externaliser un service ou confier une mission exige de choisir entre expertise, coût, qualité, souplesse et contrôle.",
    "enjeux_et_arbitrages": "Derrière chaque contrat, les décisions des clients et prestataires peuvent produire des effets inattendus.",
    "approche_narrative": "Les Scènes sont des fictions économiques documentées : elles mettent en situation des professionnels confrontés à des informations incomplètes, des contraintes et des désaccords. Elles ne reconstituent pas un témoignage réel. Les Regards croisés apportent une analyse sourcée, confrontent plusieurs perspectives et distinguent faits, hypothèses et interprétations. Ensemble, ces formats rendent lisibles les arbitrages quotidiens sans prétendre qu'une décision possède toujours une solution évidente."
  },
  "banque-financement": {
    "ambition": "Financer les projets, mesurer les risques. Prêter, assurer ou investir engage des appréciations du risque, des exigences de rentabilité et des contraintes réglementaires.",
    "enjeux_et_arbitrages": "Nous suivons les arbitrages d'allocation du capital et leurs répercussions sur des projets, des entreprises et des personnes.",
    "approche_narrative": "Les Scènes sont des fictions économiques documentées : elles mettent en situation des professionnels confrontés à des informations incomplètes, des contraintes et des désaccords. Elles ne reconstituent pas un témoignage réel. Les Regards croisés apportent une analyse sourcée, confrontent plusieurs perspectives et distinguent faits, hypothèses et interprétations. Ensemble, ces formats rendent lisibles les arbitrages quotidiens sans prétendre qu'une décision possède toujours une solution évidente."
  },
  "sante": {
    "ambition": "Soigner dans des organisations contraintes. Priorités médicales, moyens humains, budgets, innovation et accès aux soins imposent des décisions difficiles.",
    "enjeux_et_arbitrages": "Nous explorons la tension entre qualité de prise en charge, organisation du travail et ressources disponibles.",
    "approche_narrative": "Les Scènes sont des fictions économiques documentées : elles mettent en situation des professionnels confrontés à des informations incomplètes, des contraintes et des désaccords. Elles ne reconstituent pas un témoignage réel. Les Regards croisés apportent une analyse sourcée, confrontent plusieurs perspectives et distinguent faits, hypothèses et interprétations. Ensemble, ces formats rendent lisibles les arbitrages quotidiens sans prétendre qu'une décision possède toujours une solution évidente."
  },
  "social-medicosocial": {
    "ambition": "Accompagner les personnes et tenir les engagements. L'accompagnement social et médico-social confronte les structures à des besoins singuliers, des moyens limités et des obligations collectives.",
    "enjeux_et_arbitrages": "Les choix de terrain révèlent comment se négocient autonomie, protection, continuité et équité.",
    "approche_narrative": "Les Scènes sont des fictions économiques documentées : elles mettent en situation des professionnels confrontés à des informations incomplètes, des contraintes et des désaccords. Elles ne reconstituent pas un témoignage réel. Les Regards croisés apportent une analyse sourcée, confrontent plusieurs perspectives et distinguent faits, hypothèses et interprétations. Ensemble, ces formats rendent lisibles les arbitrages quotidiens sans prétendre qu'une décision possède toujours une solution évidente."
  },
  "education-formation": {
    "ambition": "Transmettre et préparer les compétences de demain. Programmes, pédagogies, orientation, financement et insertion appellent des choix entre objectifs immédiats et parcours longs.",
    "enjeux_et_arbitrages": "Ce cycle observe les décisions qui façonnent les apprentissages et les possibilités d'avenir.",
    "approche_narrative": "Les Scènes sont des fictions économiques documentées : elles mettent en situation des professionnels confrontés à des informations incomplètes, des contraintes et des désaccords. Elles ne reconstituent pas un témoignage réel. Les Regards croisés apportent une analyse sourcée, confrontent plusieurs perspectives et distinguent faits, hypothèses et interprétations. Ensemble, ces formats rendent lisibles les arbitrages quotidiens sans prétendre qu'une décision possède toujours une solution évidente."
  },
  "emploi-travail": {
    "ambition": "Recruter, travailler et évoluer. Entreprises, travailleurs et institutions arbitrent entre recrutement, rémunération, formation, organisation et qualité de vie.",
    "enjeux_et_arbitrages": "Nous cherchons à comprendre ce que les choix de gestion changent concrètement dans les métiers et les collectifs.",
    "approche_narrative": "Les Scènes sont des fictions économiques documentées : elles mettent en situation des professionnels confrontés à des informations incomplètes, des contraintes et des désaccords. Elles ne reconstituent pas un témoignage réel. Les Regards croisés apportent une analyse sourcée, confrontent plusieurs perspectives et distinguent faits, hypothèses et interprétations. Ensemble, ces formats rendent lisibles les arbitrages quotidiens sans prétendre qu'une décision possède toujours une solution évidente."
  },
  "ess": {
    "ambition": "Faire vivre des modèles économiques solidaires. Les structures de l'économie sociale et solidaire cherchent à concilier mission, gouvernance, financement et continuité d'activité.",
    "enjeux_et_arbitrages": "La finalité sociale ne supprime pas les tensions économiques : elle en change souvent les termes.",
    "approche_narrative": "Les Scènes sont des fictions économiques documentées : elles mettent en situation des professionnels confrontés à des informations incomplètes, des contraintes et des désaccords. Elles ne reconstituent pas un témoignage réel. Les Regards croisés apportent une analyse sourcée, confrontent plusieurs perspectives et distinguent faits, hypothèses et interprétations. Ensemble, ces formats rendent lisibles les arbitrages quotidiens sans prétendre qu'une décision possède toujours une solution évidente."
  },
  "action-publique": {
    "ambition": "Décider pour le collectif. Budgets publics, équipements, services et réglementations nécessitent de hiérarchiser des besoins et des intérêts concurrents.",
    "enjeux_et_arbitrages": "Les décisions collectives se comprennent aussi dans leurs conditions d'exécution et leurs conséquences locales.",
    "approche_narrative": "Les Scènes sont des fictions économiques documentées : elles mettent en situation des professionnels confrontés à des informations incomplètes, des contraintes et des désaccords. Elles ne reconstituent pas un témoignage réel. Les Regards croisés apportent une analyse sourcée, confrontent plusieurs perspectives et distinguent faits, hypothèses et interprétations. Ensemble, ces formats rendent lisibles les arbitrages quotidiens sans prétendre qu'une décision possède toujours une solution évidente."
  },
  "culture-medias": {
    "ambition": "Créer, informer et rendre les projets durables. Création, diffusion, indépendance, audiences et financements obligent artistes, médias et acteurs du sport à arbitrer.",
    "enjeux_et_arbitrages": "Les choix de programmation, de production et de soutien révèlent des tensions entre ambition culturelle et viabilité.",
    "approche_narrative": "Les Scènes sont des fictions économiques documentées : elles mettent en situation des professionnels confrontés à des informations incomplètes, des contraintes et des désaccords. Elles ne reconstituent pas un témoignage réel. Les Regards croisés apportent une analyse sourcée, confrontent plusieurs perspectives et distinguent faits, hypothèses et interprétations. Ensemble, ces formats rendent lisibles les arbitrages quotidiens sans prétendre qu'une décision possède toujours une solution évidente."
  },
  "numerique": {
    "ambition": "Construire les infrastructures et gouverner les données. Systèmes numériques, données et télécommunications obligent à arbitrer entre innovation, coût, cybersécurité, souveraineté et usages.",
    "enjeux_et_arbitrages": "Nous examinons comment des choix techniques deviennent des décisions économiques, sociales et politiques.",
    "approche_narrative": "Les Scènes sont des fictions économiques documentées : elles mettent en situation des professionnels confrontés à des informations incomplètes, des contraintes et des désaccords. Elles ne reconstituent pas un témoignage réel. Les Regards croisés apportent une analyse sourcée, confrontent plusieurs perspectives et distinguent faits, hypothèses et interprétations. Ensemble, ces formats rendent lisibles les arbitrages quotidiens sans prétendre qu'une décision possède toujours une solution évidente."
  },
  "recherche-innovation": {
    "ambition": "Passer de l'idée à l'application. Expérimenter, financer, protéger, développer ou abandonner une innovation implique des paris sous incertitude.",
    "enjeux_et_arbitrages": "Ce cycle suit les arbitrages entre recherche, entrepreneuriat, industrialisation et adoption réelle.",
    "approche_narrative": "Les Scènes sont des fictions économiques documentées : elles mettent en situation des professionnels confrontés à des informations incomplètes, des contraintes et des désaccords. Elles ne reconstituent pas un témoignage réel. Les Regards croisés apportent une analyse sourcée, confrontent plusieurs perspectives et distinguent faits, hypothèses et interprétations. Ensemble, ces formats rendent lisibles les arbitrages quotidiens sans prétendre qu'une décision possède toujours une solution évidente."
  },
  "internationalisation": {
    "ambition": "Se développer au-delà des frontières. L'expansion internationale confronte les organisations à des choix de marchés, partenaires, logistique, risque et adaptation locale.",
    "enjeux_et_arbitrages": "Les décisions prises à l'échelle mondiale ont des conséquences directes sur les chaînes de valeur et les territoires.",
    "approche_narrative": "Les Scènes sont des fictions économiques documentées : elles mettent en situation des professionnels confrontés à des informations incomplètes, des contraintes et des désaccords. Elles ne reconstituent pas un témoignage réel. Les Regards croisés apportent une analyse sourcée, confrontent plusieurs perspectives et distinguent faits, hypothèses et interprétations. Ensemble, ces formats rendent lisibles les arbitrages quotidiens sans prétendre qu'une décision possède toujours une solution évidente."
  }
};

export const conversations: Record<string, Record<string, string>> = {
  agriculture: {
    C1: 'Que faut-il encore cultiver ?',
  },
  'eau-ressources': {
    C1: 'Partager l’eau entre usages concurrents',
  },
  industrie: {
    C1: 'Quand l’usine grandit plus vite que ses moyens',
    C2: 'Dépendances industrielles',
    C3: 'Outil industriel',
    C4: 'Trajectoire industrielle',
    C5: 'Besoins et proposition de valeur',
    C6: 'Marchés et débouchés',
    C7: 'Implantation industrielle',
  },
  immobilier: {
    C1: 'Une seconde vie pour les bâtiments. Mais à quel prix ?',
    C2: 'Jusqu’où peut-on produire ?',
    C3: 'Transformer ou reconstruire ?',
    C4: 'Qui fait réellement avancer — ou basculer — un projet ?',
    C5: 'À quels besoins l’immobilier doit-il encore répondre ?',
    C6: 'Comment préserver la valeur et l’utilité du patrimoine existant ?',
    C7: 'À quelles conditions accéder aux espaces nécessaires ?',
  },
};

export const contexts: Record<string, Record<string, string>> = {
  'eau-ressources': {
    'C1-U1': 'Bassin agricole soumis à des restrictions d’eau',
    'C1-U2': 'Ville touristique en haute saison',
  },
  agriculture: {
    'engagement-productif-longue-duree': 'Engagement productif de longue durée',
    'arboriculture-sous-revue-strategique': 'Arboriculture — exploitation rentable sous revue stratégique',
    'maraichage-debouches-concurrents': 'Maraîchage — débouchés concurrents',
    'cereales-recolte-excedentaire': 'Céréales — récolte exceptionnelle',
  },
  industrie: {
    CST: 'Croissance sous tension',
    ASC: 'Adaptation sous contrainte',
    RSS: 'Réinvention sous crise',
  },
  immobilier: {
    'zone-tendue': 'Zone tendue',
    'zone-croissance': 'Zone en croissance',
    'territoire-reconversion': 'Territoire en reconversion',
  },
};

export const readings: Record<string, string> = {
  'strategie-gouvernance': 'Stratégie & gouvernance',
  'finance-investissement': 'Finance & investissement',
  'droit-regulation': 'Droit & régulation',
  'operations-organisation': 'Opérations & organisation',
  'technologie-innovation': 'Technologie & innovation',
  'ressources-humaines-competences': 'Ressources humaines & compétences',
  'energie-ressources': 'Énergie & ressources',
  'territoires-politiques-publiques': 'Territoires & politiques publiques',
};

// V6 : Perspectives éditoriales. Conserver les identifiants historiques pour la stabilité des URL.
export const perspectives = readings;
export const narrativeGenres: Record<string, string> = {
  'grand-entretien': 'Grand Entretien',
  recit: 'Récit',
  chronique: 'Chronique',
};
export const perspectiveOf = (data: any): string =>
  data.format === 'regard-croise' ? '' : (data.perspective_principale || data.lecture_principale || '');
export const genreOf = (data: any): string | null =>
  data.format === 'regard-croise' ? null : (data.genre_narratif || (data.format === 'entretien' ? 'grand-entretien' : null));

export const urlOf = (id: string) => '/media/articles/' + id + '/';

const PARIS_TIMEZONE = 'Europe/Paris';

function parisOffsetMinutes(instant: number): number {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: PARIS_TIMEZONE,
    timeZoneName: 'shortOffset',
  }).formatToParts(new Date(instant));
  const zone = parts.find((part) => part.type === 'timeZoneName')?.value ?? 'GMT';
  if (zone === 'GMT') return 0;
  const match = zone.match(/^GMT([+-])(\d{1,2})(?::(\d{2}))?$/);
  if (!match) throw new Error(`Décalage horaire non reconnu : ${zone}`);
  const magnitude = Number(match[2]) * 60 + Number(match[3] ?? 0);
  return (match[1] === '+' ? 1 : -1) * magnitude;
}

/**
 * Les dates sans fuseau saisies dans Pages CMS représentent l'heure de Paris.
 * Certains schémas Astro transforment préalablement cette chaîne en objet Date
 * interprété en UTC : on récupère alors ses composantes UTC comme heure murale.
 * Les chaînes avec Z ou un décalage explicite conservent leur instant exact.
 */
export function publicationInstant(value: unknown): Date | null {
  if (value == null || value === '') return null;

  if (typeof value === 'string' && /(?:Z|[+-]\d{2}:?\d{2})$/i.test(value)) {
    const explicit = new Date(value);
    return Number.isNaN(explicit.getTime()) ? null : explicit;
  }

  const wall = value instanceof Date
    ? value.toISOString().slice(0, 19)
    : typeof value === 'string' ? value : '';
  const match = wall.match(/^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2})(?::(\d{2}))?)?$/);
  if (!match) return null;

  const [, year, month, day, hours = '00', minutes = '00', seconds = '00'] = match;
  const naiveUtc = Date.UTC(+year, +month - 1, +day, +hours, +minutes, +seconds);
  // Calcul en deux passes pour couvrir aussi le changement d'heure hiver/été.
  let instant = naiveUtc - parisOffsetMinutes(naiveUtc) * 60_000;
  instant = naiveUtc - parisOffsetMinutes(instant) * 60_000;
  return new Date(instant);
}

export const isPublic = (data: any, now = new Date()): boolean => {
  const date = publicationInstant(data.publication_date);
  return data.published === true
    && (data.statut_editorial === 'publie' || data.statut_editorial === 'prepublication')
    && date !== null
    && date.getTime() <= now.getTime()
    && typeof data.summary === 'string'
    && data.summary.trim().length > 0;
};

export const validClassification = (d: any): boolean => Boolean(
  conversations[d.cycle]?.[d.conversation]
  && contexts[d.cycle]?.[d.contexte]
  // Un Regard croisé est une analyse autonome, sans perspective principale obligatoire.
  && (d.format === 'regard-croise' || readings[perspectiveOf(d)])
);

export const formattedDate = (date: Date): string =>
  new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: PARIS_TIMEZONE,
  }).format(date);
