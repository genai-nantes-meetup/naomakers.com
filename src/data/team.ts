import type { ImageMetadata } from 'astro';

import dorian from '../assets/team/dorian.jpeg';
import remi from '../assets/team/remi.jpeg';
import guillaumeParthenay from '../assets/team/guillaume-parthenay.jpg';
import simonTimssale from '../assets/team/simon-timssale.webp';
import maximePitussi from '../assets/team/maxime-pitussi.webp';
import samuelBerthe from '../assets/team/samuel-berthe.webp';
import florencePoyvre from '../assets/team/florence-poyvre.webp';
import jaafarSteiblenRaji from '../assets/team/jaafar-steiblen-raji.webp';

// New Startup Weekend Nantes organizers — photos to be added by the user
import robinGoutard from '../assets/team/robin-goutard.webp';
import florianHerveou from '../assets/team/florian-herveou.webp';
import louisAmmonique from '../assets/team/louis-ammonique.webp';
import claraGarnier from '../assets/team/clara-garnier.webp';
import anaPascaud from '../assets/team/ana-pascaud.webp';
import gregoryThibord from '../assets/team/gregory-thibord.webp';
import judieBoulissiere from '../assets/team/judie-boulissiere.webp';
import emilieBlum from '../assets/team/emilie-blum.webp';

/** A team member. */
export type Member = {
  /** Stable slug, also used as lookup key. */
  slug: string;
  /** Full name. */
  name: string;
  /** Role (bureau or event organizer). */
  role: string;
  /** Short bio for bureau members. */
  bio?: string;
  /** Short bio for event organizers. */
  orgaBio?: string;
  /** External profile link (LinkedIn…). */
  url: string;
  /** Profile photo. Optional — the user adds images manually. */
  photo?: ImageMetadata;
};

/** All team members, keyed by slug — single source of truth for name, role, photo, and URL. */
export const members: Record<string, Member> = {
  maximePitussi: {
    slug: 'maxime-pitussi',
    name: 'Maxime Pitussi',
    role: 'Président',
    orgaBio: 'Pilote la stratégie et représente Naomakers auprès de l\'écosystème nantais.',
    bio: 'Growth Outbound Freelance',
    url: 'https://www.linkedin.com/in/maximepitussi',
    photo: maximePitussi,
  },
  samuelBerthe: {
    slug: 'samuel-berthe',
    name: 'Samuel Berthe',
    role: 'Vice-président',
    orgaBio: 'Épaule la présidence et coordonne les projets : hackathons, meetups, conférence.',
    bio: 'Open-source developer',
    url: 'https://www.linkedin.com/in/samuelberthe',
    photo: samuelBerthe,
  },
  florencePoyvre: {
    slug: 'florence-poyvre',
    name: 'Florence Poyvre',
    role: 'Membre du bureau',
    orgaBio: 'Contribue à la vie associative et à la coordination interne du bureau.',
    bio: 'Associée @ Fly the Nest',
    url: 'https://www.linkedin.com/in/florence-poyvre-b83063111',
    photo: florencePoyvre,
  },
  jaafarSteiblenRaji: {
    slug: 'jaafar-steiblen-raji',
    name: 'Jaafar Steiblen-Raji',
    role: 'Trésorier',
    orgaBio: 'Tient les comptes de l\'association et sécurise le budget de chaque événement.',
    bio: 'Founder @ Les Grandes Épopées',
    url: 'https://www.linkedin.com/in/jaafar-raji',
    photo: jaafarSteiblenRaji,
  },
  simonTimssale: {
    slug: 'simon-timssale',
    name: 'Simon Timssale',
    role: 'Organisateur',
    bio: 'Consultant IA & fondateur @ ExploreTheVault',
    url: 'https://www.linkedin.com/in/simon-timssale-bourrioux-746a1aa5',
    photo: simonTimssale,
  },
  dorianOuvrard: {
    slug: 'dorian-ouvrard',
    name: 'Dorian Ouvrard',
    role: 'Organisateur',
    url: 'https://www.linkedin.com/in/dorian-ouvrard',
    photo: dorian,
  },
  remiWetteren: {
    slug: 'remi-wetteren',
    name: 'Rémi Wetteren',
    role: 'Organisateur',
    bio: 'Co-founder @ Coraye',
    url: 'https://www.linkedin.com/in/wetterenremi',
    photo: remi,
  },
  guillaumeParthenay: {
    slug: 'guillaume-parthenay',
    name: 'Guillaume Parthenay',
    role: 'Directeur associé',
    url: 'https://www.linkedin.com/in/guillaume-parthenay',
    bio: 'Responsable commercial & marketing @ Jujotte',
    photo: guillaumeParthenay,
  },
  robinGoutard: {
    slug: 'robin-goutard',
    name: 'Robin Goutard',
    role: 'Ingénieur partenariat',
    bio: 'Ingénieur partenariat @ Université Gustave Eiffel',
    url: 'https://www.linkedin.com/in/robin-goutard/',
    photo: robinGoutard,
  },
  florianHerveou: {
    slug: 'florian-herveou',
    name: 'Florian Hervéou',
    role: 'Head of Startup Programs',
    bio: 'Head of Startup Programs @Startup Palace',
    url: 'https://www.linkedin.com/in/florianherveou/',
    photo: florianHerveou,
  },
  louisAmmonique: {
    slug: 'louis-ammonique',
    name: 'Louis Ammonique',
    role: 'Growth',
    bio: 'Growth @ Clever Cloud',
    url: 'https://www.linkedin.com/in/louis-ammonique/',
    photo: louisAmmonique,
  },
  claraGarnier: {
    slug: 'clara-garnier',
    name: 'Clara Garnier',
    role: 'Fondatrice',
    bio: 'Fondatrice @ Kidefeel',
    url: 'https://www.linkedin.com/in/clara-garnier-54648b254/',
    photo: claraGarnier,
  },
  anaPascaud: {
    slug: 'ana-pascaud',
    name: 'Ana Pascaud',
    role: 'Fondatrice',
    bio: 'Fondatrice @ SAWA',
    url: 'https://www.linkedin.com/in/ana-pascaud/',
    photo: anaPascaud,
  },
  judieBoulissiere: {
    slug: 'judie-boulissiere',
    name: 'Judie Boulissière',
    role: 'Organisatrice',
    bio: 'Hackeuse GenAI',
    url: 'https://www.linkedin.com/in/judie-boulissiere/',
    photo: judieBoulissiere,
  },
  emilieBlum: {
    slug: 'emilie-blum',
    name: 'Emilie Blum',
    role: 'Organisatrice',
    bio: 'Head of Community Experience @ dotConferences',
    url: 'https://www.linkedin.com/in/emilie-blum-eb11/',
    photo: emilieBlum,
  },
  gregoryThibord: {
    slug: 'gregory-thibord',
    name: 'Grégory Thibord',
    role: 'CEO',
    bio: 'CEO @ _icilundi',
    url: 'https://www.linkedin.com/in/gregorythibord/',
    photo: gregoryThibord,
  },
};

/** Bureau members (subset of `members`). */
export const team: Member[] = [members.maximePitussi, members.samuelBerthe, members.florencePoyvre, members.jaafarSteiblenRaji];
