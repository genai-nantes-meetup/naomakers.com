import type { ImageMetadata } from 'astro';

import startupWeekend from '../assets/startup-weekend-nantes.jpg';
import shiftHackathon from '../assets/shift-hackathon.webp';
import generativeAiNantes from '../assets/generative-ai-nantes.webp';

export type Project = {
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
};

/** All projects run by the naomakers association, in display order. */
export const projects: Project[] = [
  {
    title: 'Startup Weekend Nantes',
    kind: 'Hackathon · 54h',
    description:
      '54 heures pour transformer une idée en startup, du pitch du vendredi soir au jury du dimanche.',
    url: 'https://startupweekendnantes.fr',
    image: startupWeekend,
  },
  {
    title: 'Shift, le Hackathon Gen AI',
    kind: 'Hackathon · 48h · Gen AI',
    description:
      "48 heures pour concevoir un produit d'IA générative, entre designers, devs et product lovers.",
    url: 'https://shift-hackathon.com',
    image: shiftHackathon,
  },
  {
    title: 'Generative AI Nantes',
    kind: 'Meetup · Communauté',
    description:
      "Le meetup nantais dédié à l'IA générative et aux LLM : talks et workshops pour la communauté tech & produit.",
    url: 'https://www.meetup.com/generative-ai-nantes',
    image: generativeAiNantes,
  },
  {
    title: 'Gen AI Days',
    kind: 'Conférence · À venir',
    description:
      "La future conférence de référence sur l'IA générative à Nantes, actuellement en préparation.",
    wip: true,
  },
];
