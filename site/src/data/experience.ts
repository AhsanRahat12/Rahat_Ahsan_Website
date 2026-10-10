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
    org: 'Green World Fashions Ltd. (Remote)',
    dates: 'Nov 2023 – Present',
    story:
      'Using data to influence stakeholders at a 650-person textile operation, I automated manual report generation and sped up reporting by 20%. I also influenced management to divert investments, increasing cash flow by 8%. A data-backed headcount and production baseline improved margins per project while keeping us compliant with amfori/BSCI standards.',
  },
  {
    title: 'Financial Reporting & Cost Analysis Contractor',
    org: 'OPCN, Manitoba',
    dates: 'Aug 2024',
    story:
      'I prepared cost reporting for a federal post-secondary student support program, in the format the client required. All requested funding was approved by the Federal Government.',
  },
  {
    title: 'Green House Assistant',
    org: 'Brandon University',
    dates: 'Apr 2022 – Aug 2022',
    story:
      'I supported plant-science research by keeping the experimental data accurate and running further analysis in R.',
  },
];
