/**
 * Legal identity and contact facts for the association. Single source of
 * truth for BaseLayout's JSON-LD node and footer titleblock, and for the
 * generated `/llms.txt` (see `src/pages/llms.txt.ts`) — so the SIRET, RNA
 * and founding year can't drift between the three.
 */
export const association = {
  name: 'Naomakers',
  legalName: 'NAOMAKERS',
  email: 'team@naomakers.com',
  description:
    "Naomakers est une association à but non lucratif qui promeut le secteur du numérique sur le territoire nantais et accompagne les personnes et les acteurs de l'écosystème technologique à travers hackathons, meetups et conférences.",
  slogan:
    "L'association qui fait rayonner le numérique, la tech et l'IA, à Nantes.",
  foundingYear: '2018',
  areaServed: 'Nantes',
  addressRegion: 'Pays de la Loire',
  postalCode: '44000',
  legalStatus: 'Association loi 1901 à but non lucratif',
  /** Digits only, as used in the JSON-LD `identifier` values. */
  siren: '901264374',
  siretDigits: '90126437400025',
  /** Grouped display format, for the footer and llms.txt. */
  siretDisplay: '901 264 374 00025',
  rna: 'W442026186',
  knowsAbout: [
    'Intelligence artificielle générative',
    'Grands modèles de langage (LLM)',
    'Hackathons',
    'Meetups tech',
    'Entrepreneuriat tech',
    'Écosystème numérique nantais',
  ],
  statutesUrl:
    'https://drive.google.com/file/d/1cl5sOdBnbweNvQ-F714bRpftWKmOZHVm/view?usp=sharing',
  pappersUrl: 'https://www.pappers.fr/entreprise/naomakers-901264374',
  dataGouvUrl: 'https://annuaire-entreprises.data.gouv.fr/entreprise/901264374',
};
