// Tools shown on the site, grouped by category.
// To add a tool, add one object to `tools` with a category from `categories`.
// Categories appear on the page in the order listed here.

export const categories = ['Analysis', 'Cloud & data'] as const;

export type Category = (typeof categories)[number];

export interface Tool {
  name: string;
  category: Category;
}

export const tools: Tool[] = [
  { name: 'SQL', category: 'Analysis' },
  { name: 'Python', category: 'Analysis' },
  { name: 'R', category: 'Analysis' },
  { name: 'Excel', category: 'Analysis' },
  { name: 'Power BI', category: 'Analysis' },
  { name: 'AWS', category: 'Cloud & data' },
  { name: 'Azure', category: 'Cloud & data' },
  { name: 'Postgres', category: 'Cloud & data' },
];
