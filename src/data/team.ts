export type Member = {
  /** Stable slug used to build this member's schema.org Person `@id`. */
  slug: string;
  /** Full name shown on the card. */
  name: string;
  /** Bureau role (monospace label, e.g. "Président·e"). */
  role: string;
  /** Short French bio / one-liner. */
  bio?: string;
  /** External profile link (LinkedIn, personal site…). */
  url?: string;
};

/** The bureau of the association, matching the footer's "Association loi 1901". */
export const team: Member[] = [
  {
    slug: 'maxime-pitussi',
    name: 'Maxime Pitussi',
    role: 'Président',
    bio: 'Pilote la stratégie et représente Naomakers auprès de l’écosystème nantais.',
  },
  {
    slug: 'samuel-berthe',
    name: 'Samuel Berthe',
    role: 'Vice-président',
    bio: 'Épaule la présidence et coordonne les projets : hackathons, meetups, conférence.',
  },
  {
    slug: 'jaafar-steiblen-raji',
    name: 'Jaafar Steiblen-Raji',
    role: 'Trésorier',
    bio: 'Tient les comptes de l’association et sécurise le budget de chaque événement.',
  },
  {
    slug: 'florence-poyvre',
    name: 'Florence Poyvre',
    role: 'Membre du bureau',
    bio: 'Contribue à la vie associative et à la coordination interne du bureau.',
  },
];
