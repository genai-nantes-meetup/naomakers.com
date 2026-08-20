import type { ImageMetadata } from 'astro';

import startupWeekend from '../assets/startup-weekend-nantes.jpg';
import shiftHackathon from '../assets/shift-hackathon.webp';
import generativeAiNantes from '../assets/generative-ai-nantes.webp';
import genAiDays from '../assets/genai-days-nantes.jpg';

/**
 * A citable figure shown on the card and mirrored into JSON-LD as an
 * `additionalProperty` (schema.org PropertyValue). `label` is both the
 * visible caption and the PropertyValue `name`, `value` is rendered as-is
 * and reused as the PropertyValue `value`, so visible and structured data
 * cannot drift apart by construction. `value` accepts a string for
 * approximate or ordinal figures ("~1 500", "3ᵉ en 2026"): PropertyValue.value
 * takes Text or Number.
 */
export type ProjectStat = {
  label: string;
  value: string | number;
};

export type Project = {
  /** Stable slug used to build this project's schema.org `@id`. */
  slug: string;
  /** Displayed project name. */
  title: string;
  /** Monospace category label shown in the card header. */
  kind: string;
  /** Short French description shown on the card. */
  description: string;
  /** External link. When absent, the project is upcoming (no active link). */
  url?: string;
  /** Local cover image. When absent, the card renders a blueprint hatch. */
  image?: ImageMetadata;
  /**
   * Alt text describing what the cover image actually shows (a scene, not
   * a restatement of `title`, which already sits right below it in the
   * card). Falls back to a generic caption when a project has no image.
   */
  imageAlt?: string;
  /** Marks a work-in-progress project (renders a "Bientôt" tag). */
  wip?: boolean;
  /**
   * Schema.org Event subtype layered onto the `EventSeries` JSON-LD `@type`
   * (e.g. `['EventSeries', 'SocialEvent']`) so search/AI engines can tell
   * a recurring meetup apart from a hackathon or a conference.
   */
  eventType?: 'BusinessEvent' | 'SocialEvent' | 'EducationEvent';
  /**
   * Average satisfaction rating out of 5, from a genuine third-party survey.
   * Rendered both as visible text on the card and as JSON-LD
   * `AggregateRating` (structured data must mirror visible content). Kept
   * separate from `stats`: it is the only figure with a first-class
   * schema.org property (and SERP treatment) of its own.
   */
  rating?: { value: number; count: number; bestRating: number };
  /** Cap at 4 entries — the card layout is a 2-column grid. */
  stats?: ProjectStat[];
};

/** All projects run by the naomakers association, in display order. */
export const projects: Project[] = [
  {
    slug: 'startup-weekend-nantes',
    title: 'Startup Weekend Nantes',
    kind: 'Hackathon · 54h',
    description:
      '54 heures pour transformer une idée en startup, du pitch du vendredi soir au jury du dimanche.',
    url: 'https://startupweekendnantes.fr',
    image: startupWeekend,
    imageAlt:
      'Illustration de quatre participants penchés sur un ordinateur portable, badges au cou, en pleine session de travail.',
    eventType: 'EducationEvent',
    stats: [
      { label: 'Projets par édition', value: 14 },
      { label: 'Participants', value: 100 },
    ],
  },
  {
    slug: 'shift-hackathon',
    title: 'Shift, le Hackathon Gen AI',
    kind: 'Hackathon · 48h · Gen AI',
    description:
      "48 heures pour concevoir un produit d'IA générative, entre designers, devs et product lovers.",
    url: 'https://shift-hackathon.com',
    image: shiftHackathon,
    imageAlt:
      'Bannière du hackathon Shift : écran affichant un tableau Notion, silhouettes de participants, dates du 27 au 29 mars 2026.',
    eventType: 'EducationEvent',
    stats: [
      { label: 'NPS', value: 88 },
      { label: 'Édition', value: '3ᵉ en 2026' },
      { label: 'Projets par édition', value: 14 },
      { label: 'Participants', value: 100 },
    ],
  },
  {
    slug: 'generative-ai-nantes',
    title: 'Generative AI Nantes',
    kind: 'Meetup · Communauté',
    description:
      "Le meetup nantais dédié à l'IA générative et aux LLM : talks et workshops pour la communauté tech & produit.",
    url: 'https://www.meetup.com/generative-ai-nantes',
    image: generativeAiNantes,
    imageAlt:
      'Visuel abstrait aux tons sombres avec le sigle « AI » lumineux entouré de particules et de cercles techniques.',
    eventType: 'EducationEvent',
    rating: { value: 4.8, count: 234, bestRating: 5 },
    stats: [
      // U+202F (narrow no-break space): the French thousands separator must
      // never wrap at the end of a line inside a narrow spec-sheet cell.
      { label: 'Membres', value: '~1 500' },
      { label: 'Événements', value: 50 },
    ],
  },
  {
    slug: 'genai-days-nantes',
    title: 'Gen AI Days',
    kind: 'Conférence',
    description:
      "La conférence nationale sur l'IA générative à Nantes : talks et rencontres pour la communauté tech, produit et business autour des LLM et de la Gen AI.",
    url: 'https://genai-days-nantes.com',
    image: genAiDays,
    imageAlt:
      "Illustration futuriste d'un immense bâtiment en forme de tête d'éléphant dominant la skyline de Nantes au crépuscule.",
    eventType: 'EducationEvent',
  },
];
