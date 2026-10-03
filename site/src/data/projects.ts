// Projects shown in the Work section.
// Add an entry as each project is finished. Until then the page shows placeholder cards.
// `tools` should match `name` values in tools.ts so they stay consistent.

export interface Project {
  title: string;
  summary: string;
  tools: string[];
  status: 'in progress' | 'complete';
  href?: string;
}

export const projects: Project[] = [];
