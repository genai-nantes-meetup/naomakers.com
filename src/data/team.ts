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
    name: '[À compléter]',
    role: 'Président·e',
    bio: 'Pilote la stratégie et représente Naomakers auprès de l’écosystème nantais.',
  },
  {
    name: '[À compléter]',
    role: 'Vice-président·e',
    bio: 'Épaule la présidence et coordonne les projets — hackathons, meetups, conférence.',
  },
  {
    name: '[À compléter]',
    role: 'Trésorier·ère',
    bio: 'Tient les comptes de l’association et sécurise le budget de chaque événement.',
  },
  {
    name: '[À compléter]',
    role: 'Secrétaire',
    bio: 'Gère la vie associative : PV, adhésions et coordination interne du bureau.',
  },
];
