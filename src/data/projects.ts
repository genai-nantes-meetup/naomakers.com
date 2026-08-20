import type { ImageMetadata } from 'astro';

import startupWeekend from '../assets/startup-weekend-nantes.jpg';
import shiftHackathon from '../assets/shift-hackathon.webp';
import generativeAiNantes from '../assets/generative-ai-nantes.webp';
import genAiDays from '../assets/genai-days-nantes.jpg';

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
   * `AggregateRating` (structured data must mirror visible content).
   */
  rating?: { value: number; count: number; bestRating: number };
  /**
   * Net Promoter Score (-100 to 100). Not a schema.org `AggregateRating`
   * (that property expects a rating scale, not an NPS) — exposed as a
   * generic `additionalProperty` (PropertyValue) instead.
   */
  nps?: number;
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
    eventType: 'EducationEvent',
  },
  {
    slug: 'shift-hackathon',
    title: 'Shift, le Hackathon Gen AI',
    kind: 'Hackathon · 48h · Gen AI',
    description:
      "48 heures pour concevoir un produit d'IA générative, entre designers, devs et product lovers.",
    url: 'https://shift-hackathon.com',
    image: shiftHackathon,
    eventType: 'EducationEvent',
    nps: 88,
  },
  {
    slug: 'generative-ai-nantes',
    title: 'Generative AI Nantes',
    kind: 'Meetup · Communauté',
    description:
      "Le meetup nantais dédié à l'IA générative et aux LLM : talks et workshops pour la communauté tech & produit.",
    url: 'https://www.meetup.com/generative-ai-nantes',
    image: generativeAiNantes,
    eventType: 'EducationEvent',
    rating: { value: 4.8, count: 234, bestRating: 5 },
  },
  {
    slug: 'genai-days-nantes',
    title: 'Gen AI Days',
    kind: 'Conférence',
    description:
      "La conférence nationale sur l'IA générative à Nantes : talks et rencontres pour la communauté tech, produit et business autour des LLM et de la Gen AI.",
    url: 'https://genai-days-nantes.com',
    image: genAiDays,
    eventType: 'EducationEvent',
  },
];
