import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Les collections Pages CMS demeurent à la racine du dépôt.
// Le prototype Astro est placé dans media-prototype/ et lit ces fichiers sans les déplacer.
const articles = defineCollection({
  loader: glob({ base: '../content/articles', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    summary: z.string().optional().nullable(),
    cycle: z.enum(['industrie', 'immobilier']),
    conversation: z.string(),
    contexte: z.string(),
    // V6 : le champ historique reste accepté pour préserver les articles existants.
    lecture_principale: z.string().optional(),
    perspective_principale: z.string().optional(),
    perspectives_secondaires: z.array(z.string()).optional(),
    unite_programmation: z.string().optional(),
    famille_decisionnelle: z.string().optional(),
    angle: z.string().optional(),
    genre_narratif: z.enum(['grand-entretien', 'recit', 'chronique']).optional(),
    signature_auteur: z.string().optional(),
    signature_biographie: z.string().optional(),
    signature_tonalite: z.string().optional(),
    signature_portrait: z.string().optional(),
    statut_editorial: z.string().optional(),
    published: z.boolean().optional().default(false),
    publication_date: z.coerce.date().optional().nullable(),
    updated_date: z.coerce.date().optional().nullable(),
    interview_date: z.coerce.date().optional().nullable(),
    format: z.string().optional(),
    hero_image: z.string().optional().nullable(),
    mise_en_avant: z.enum(['une','secondaire','standard']).optional().default('standard'),
    affichage_accueil: z.enum(['automatique','photo','titre']).optional().default('automatique'),
    affichage_rubrique: z.enum(['automatique','photo','titre']).optional().default('automatique'),
    source_profile: z.record(z.string(), z.unknown()).optional(),
    source_notice: z.string().optional(),
    methodology_specific: z.string().optional(),
    tag_1: z.string().optional(),
    tag_2: z.string().optional(),
    tag_3: z.string().optional(),
    tag_4: z.string().optional(),
    tag_5: z.string().optional(),
    seo: z.record(z.string(), z.unknown()).optional(),
  }).passthrough(),
});
export const collections = { articles };
