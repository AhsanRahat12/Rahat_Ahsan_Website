// Tools shown on the site, grouped by category.
// To add a tool, add one object to `tools` with a category from `categories`.
// Categories appear on the page in the order listed here.

export const categories = ['Languages', 'Analysis & BI', 'Cloud', 'Data platforms'] as const;

export type Category = (typeof categories)[number];

export interface Tool {
  name: string;
  area: string;
  category: Category;
}

export const tools: Tool[] = [
  { name: 'SQL', area: 'Querying & modelling', category: 'Languages' },
  { name: 'R', area: 'Statistical analysis', category: 'Languages' },
  { name: 'Python', area: 'Analysis & automation', category: 'Languages' },
  { name: 'Excel', area: 'Power Query, VBA, PivotTables', category: 'Analysis & BI' },
  { name: 'Power BI', area: 'Dashboards', category: 'Analysis & BI' },
  { name: 'AWS', area: 'S3, access controls (SAA in progress)', category: 'Cloud' },
  { name: 'Azure', area: 'Cloud', category: 'Cloud' },
  { name: 'Postgres', area: 'Faster reporting queries', category: 'Data platforms' },
];
