// Work history shown in the Experience section, newest first.

export interface Role {
  title: string;
  org: string;
  dates: string;
  points: string[];
}

export const experience: Role[] = [
  {
    title: 'Data Analyst',
    org: 'Apparel manufacturer (Remote)',
    dates: 'Nov 2023 – Present',
    points: [
      'Used data to bring operations and finances into line, increasing cash flow by 8%.',
      'Set a data-backed baseline for headcount, helping the business run leaner and increasing margins per project.',
      'Solved a data management problem by introducing AWS cloud storage and a Postgres database, giving the business one centralised, controlled source of data and much faster queries.',
      'Automated reporting on top of it, cutting the time it takes by about 15% and freeing time for forward-looking analysis.',
      'Used the automated, centralised data to build a forward-looking cost model and dashboards that turned trends into decisions for management.',
    ],
  },
  {
    title: 'Financial Reporting & Cost Analysis Contractor',
    org: 'OPCN, MB',
    dates: 'Aug 2024',
    points: [
      'Delivered cost reporting for a federal student support program, and all requested funding was approved.',
    ],
  },
  {
    title: 'Green House Assistant',
    org: 'Brandon University',
    dates: 'Apr 2022 – Aug 2022',
    points: [
      'Kept research data accurate and validated, and ran the analysis in R.',
    ],
  },
];
