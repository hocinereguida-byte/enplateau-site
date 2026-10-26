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
    lecture_principale: z.string(),
    statut_editorial: z.string().optional(),
    published: z.boolean().optional().default(false),
    publication_date: z.coerce.date().optional().nullable(),
    updated_date: z.coerce.date().optional().nullable(),
    interview_date: z.coerce.date().optional().nullable(),
    format: z.string().optional(),
    hero_image: z.string().optional().nullable(),
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
