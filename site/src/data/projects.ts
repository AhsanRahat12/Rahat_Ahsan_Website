// Projects shown in the Work section. To add one, add an object to the array below:
// that is all. The section grows with the list, in the order given.
//
//   {
//     title: 'Sales dashboard',
//     summary: 'One line on the problem, and one on the outcome.',
//     tools: ['SQL', 'Power BI'],          // names from tools.ts
//     status: 'complete',                  // or 'in progress'
//     image: '/images/projects/sales.jpg', // optional, file in site/public/images/projects/
//     href: 'https://github.com/...',      // optional link for the whole row
//   }
//
// Projects show as cards, three across on desktop, and extra ones add new rows below.
// While the list is empty, the page shows placeholder cards.

export interface Project {
  title: string;
  summary: string;
  tools: string[];
  status: 'in progress' | 'complete';
  image?: string;
  href?: string;
}

// Short line shown under the Projects heading.
export const projectsIntro =
  'Hands-on analysis projects: a real question, messy data, and what it showed. New ones are added as I finish them.';

export const projects: Project[] = [];
