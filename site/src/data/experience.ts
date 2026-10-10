// Work history shown in the Experience section, newest first.
// Each role is a short paragraph about what changed, not a list of duties.

export interface Role {
  title: string;
  org: string;
  dates: string;
  story: string;
}

export const experience: Role[] = [
  {
    title: 'Data Analyst',
    org: '650-person textile operation (Remote)',
    dates: 'Nov 2023 – Present',
    story:
      'I used data to influence stakeholders and cut manual work through automation, saving about 20% of reporting time. The result was better margins and operations, 8% stronger cash flow from redirecting investments, and compliance with amfori/BSCI standards.',
  },
  {
    title: 'Financial Reporting & Cost Analysis Contractor',
    org: 'OPCN, Manitoba',
    dates: 'Aug 2024',
    story:
      'I prepared cost reporting for a federal post-secondary student support program, in the format the client required and explained for non-technical reviewers. All requested funding was approved.',
  },
  {
    title: 'Green House Assistant',
    org: 'Brandon University',
    dates: 'Apr 2022 – Aug 2022',
    story:
      'I supported plant-science research by keeping the experimental data accurate and running further analysis in R.',
  },
];
