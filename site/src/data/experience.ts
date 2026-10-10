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
    org: 'Textile manufacturer (Remote)',
    dates: 'Nov 2023 – Present',
    story:
      'I brought operational and financial data into one place and automated the routine reporting, cutting report time by about 20%. From there, I analysed public finance data to redirect investments and improve cash flow by 8%, and set a data-backed headcount baseline that lowered costs, made projects more efficient and raised project margins. I also built forward-looking cost models and dashboards for management, and used production data to help meet amfori/BSCI standards.',
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
