export type Member = {
  /** Full name shown on the card. */
  name: string;
  /** Bureau role (monospace label, e.g. "Président·e"). */
  role: string;
  /** Short French bio / one-liner. */
  bio?: string;
  /** External profile link (LinkedIn, personal site…). */
  url?: string;
};

/**
 * Placeholder scaffold — replace names, bios and urls with the real bureau
 * before shipping. The four roles below are the standard "loi 1901" bureau
 * for a non-profit association, matching the footer's "Association loi 1901".
 */
export const team: Member[] = [
  {
    name: 'Maxime Pitussi',
    role: 'Président',
    bio: 'Pilote la stratégie et représente Naomakers auprès de l’écosystème nantais.',
  },
  {
    name: 'Samuel Berthe',
    role: 'Vice-président',
    bio: 'Épaule la présidence et coordonne les projets — hackathons, meetups, conférence.',
  },
  {
    name: 'Jaafar Steiblen-Raji',
    role: 'Trésorier',
    bio: 'Tient les comptes de l’association et sécurise le budget de chaque événement.',
  },
  {
    name: 'Florence Poyvre',
    role: 'Membre du bureau',
    bio: 'Contribue à la vie associative et à la coordination interne du bureau.',
  },
];
