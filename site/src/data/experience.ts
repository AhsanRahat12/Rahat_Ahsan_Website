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
      'Used SQL and Python to analyze public bond data and internal production data, influencing management to invest in bonds and set a baseline production headcount, which increased cash flow and improved margins per project.',
      'Built ETL/ELT workflows in Excel (Power Query, PivotTables, VBA macros) that automated payroll tracking and data entry, enabling a forward-looking cost model that aligned projected and actual costs.',
      'Tracked manufacturing requirements across all 5 production lines through ad hoc shipment and logistics analysis, helping meet deadlines and comply with amfori/BSCI standards.',
      'Developed KPI-based Power BI dashboards and presented trends to non-technical management.',
      'Introduced AWS (S3 versioning, lifecycle management, access controls) and Postgres to speed up queries, and built reporting scripts tested on synthetic data.',
    ],
  },
  {
    title: 'Financial Reporting & Cost Analysis Contractor',
    org: 'OPCN, MB',
    dates: 'Aug 2024',
    points: [
      'Prepared financial reporting and cost analysis for a Federal Post-Secondary Student Support Program, explaining cost variances to non-technical reviewers; the Federal Government approved all requested funding.',
      'Cross-checked program costs with Excel (VLOOKUPs, PivotTables) and automated repeated entry with VBA macros.',
    ],
  },
  {
    title: 'Green House Assistant',
    org: 'Brandon University',
    dates: 'Apr 2022 – Aug 2022',
    points: [
      'Supported plant-science research, tracking controlled variables and maintaining data-integrity standards across growing cycles.',
      'Kept validated Excel records of biomass, dry mass, moisture and seed mass, and ran secondary analysis in R.',
    ],
  },
];
