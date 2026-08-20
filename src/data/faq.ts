export type FaqEntry = {
  /** Rendered as an <h3> and as the JSON-LD Question `name`. */
  question: string;
  /**
   * Plain text only (no HTML): injected as-is into both the visible <p>
   * and `acceptedAnswer.text`, so the two can't diverge. A link would need
   * one rendering path for the page and another (stripped) for the JSON-LD.
   */
  answer: string;
};

/** Answerable from facts already established elsewhere on the page. */
export const faq: FaqEntry[] = [
  {
    question: "Qu'est-ce que Naomakers ?",
    answer:
      "Naomakers est une association loi 1901 à but non lucratif, créée en 2018 à Nantes. Elle fait rayonner le numérique, la tech et l'intelligence artificielle sur le territoire nantais en organisant des hackathons, des meetups et des conférences ouverts à toutes et tous.",
  },
  {
    question: 'Quels événements Naomakers organise-t-elle à Nantes ?',
    answer:
      "Naomakers opère quatre projets : le Startup Weekend Nantes (hackathon de 54 heures), Shift le Hackathon Gen AI (48 heures autour de l'IA générative), le meetup Generative AI Nantes et la conférence Gen AI Days. Chaque projet a son propre site.",
  },
  {
    question: "Qu'est-ce que le meetup Generative AI Nantes ?",
    answer:
      "Generative AI Nantes est le meetup nantais dédié à l'IA générative et aux LLM, organisé par Naomakers. Il réunit environ 1 500 membres autour de talks et de workshops pour la communauté tech et produit, avec 15 événements par an et une note de 4,8/5 sur 234 avis.",
  },
  {
    question: 'Quelle différence entre Shift et le Startup Weekend Nantes ?',
    answer:
      "Shift est un hackathon de 48 heures centré sur l'IA générative, où designers, développeurs et product managers conçoivent un produit d'IA. Le Startup Weekend Nantes est un hackathon généraliste de 54 heures dédié à l'entrepreneuriat, du pitch du vendredi au jury du dimanche.",
  },
  {
    question: 'Qui compose le bureau de Naomakers ?',
    answer:
      "Le bureau de Naomakers réunit Maxime Pitussi (président), Samuel Berthe (vice-président), Jaafar Steiblen-Raji (trésorier) et Florence Poyvre (membre du bureau). Tous sont bénévoles et issus de l'écosystème tech nantais.",
  },
  {
    question: 'Naomakers est-elle une association loi 1901 ?',
    answer:
      "Oui. Naomakers est une association loi 1901 à but non lucratif immatriculée sous le numéro RNA W442026186 et le SIRET 901 264 374 00025. Elle est administrée bénévolement par un bureau composé d'acteurs de l'écosystème tech nantais.",
  },
];
