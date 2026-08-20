import type { APIRoute } from 'astro';
import { association } from '../data/association';
import { projects, type Project } from '../data/projects';
import { team, type Member } from '../data/team';
import { faq, type FaqEntry } from '../data/faq';
import { SITE } from '../data/site';

// Generates /llms.txt at build time from the same src/data/*.ts modules the
// page itself renders from, so this file can't drift out of sync with the
// page the way a hand-maintained public/llms.txt inevitably does.
export const prerender = true;

/** "Note : 4,8/5 (234 avis). Membres : ~1 500. Événements : 50." */
function statsSentence(project: Project): string {
  const parts: string[] = [];
  if (project.rating) {
    const value = project.rating.value.toString().replace('.', ',');
    parts.push(
      `Note : ${value}/${project.rating.bestRating} (${project.rating.count} avis)`,
    );
  }
  for (const stat of project.stats ?? []) {
    parts.push(`${stat.label} : ${stat.value}`);
  }
  return parts.length ? ` ${parts.join('. ')}.` : '';
}

function projectLine(project: Project): string {
  const label = project.url
    ? `[${project.title}](${project.url})`
    : project.title;
  return `- ${label}: ${project.description}${statsSentence(project)}`;
}

function memberLine(member: Member): string {
  return `- ${member.name}, ${member.role}${member.bio ? `: ${member.bio}` : ''}`;
}

function faqLine(entry: FaqEntry): string {
  return `- ${entry.question} ${entry.answer}`;
}

const body =
  [
    `# ${association.name}`,
    '',
    `> ${association.description}`,
    '',
    `Site: ${SITE}`,
    '',
    '## Association',
    '',
    `- Statut: ${association.legalStatus}`,
    `- Fondée en: ${association.foundingYear}, à ${association.areaServed}`,
    `- SIRET: ${association.siretDisplay}`,
    `- RNA: ${association.rna}`,
    '',
    '## Projets',
    '',
    ...projects.map(projectLine),
    '',
    '## Équipe',
    '',
    "Le bureau de l'association, tenu bénévolement par des acteurs de l'écosystème tech nantais:",
    '',
    ...team.map(memberLine),
    '',
    '## Questions fréquentes',
    '',
    ...faq.map(faqLine),
    '',
    '## Contact',
    '',
    `- Email: ${association.email}`,
  ].join('\n') + '\n';

export const GET: APIRoute = () =>
  new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
