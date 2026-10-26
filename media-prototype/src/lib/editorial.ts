export const conversations: Record<string, Record<string, string>> = {
  industrie: {
    C1: 'Croissance industrielle',
    C2: 'Dépendances industrielles',
    C3: 'Outil industriel',
    C4: 'Trajectoire industrielle',
    C5: 'Besoins et proposition de valeur',
    C6: 'Marchés et débouchés',
    C7: 'Implantation industrielle',
  },
  immobilier: {
    C1: 'À quel moment une opération ne tient plus ?',
    C2: 'Jusqu’où peut-on produire ?',
    C3: 'Transformer ou reconstruire ?',
    C4: 'Qui fait réellement avancer — ou basculer — un projet ?',
    C5: 'À quels besoins l’immobilier doit-il encore répondre ?',
    C6: 'Comment préserver la valeur et l’utilité du patrimoine existant ?',
    C7: 'À quelles conditions accéder aux espaces nécessaires ?',
  },
};

export const contexts: Record<string, Record<string, string>> = {
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
    && data.statut_editorial === 'publie'
    && date !== null
    && date.getTime() <= now.getTime()
    && typeof data.summary === 'string'
    && data.summary.trim().length > 0;
};

export const validClassification = (d: any): boolean => Boolean(
  conversations[d.cycle]?.[d.conversation]
  && contexts[d.cycle]?.[d.contexte]
  && readings[d.lecture_principale]
);

export const formattedDate = (date: Date): string =>
  new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: PARIS_TIMEZONE,
  }).format(date);
