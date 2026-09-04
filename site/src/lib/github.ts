// Build-time-only GitHub data fetching. Nothing here runs in the browser — Astro
// executes this during `astro build` (and per-request in `astro dev`), so there's
// no client-side call, no CORS issue, and it fits a static S3 deploy.

export type Project = {
  slug: string;
  name: string;
  description: string;
  status: string;
  href: string;
  repo: string;
  branch: string;
};

const GITHUB_USERNAME = 'AhsanRahat12';

// Hand-written copy for repos that have it; anything else falls back to the
// repo's own GitHub description/name.
const projectOverrides: Record<string, { name: string; description: string; status: string }> = {
  Homelab: {
    name: 'home_lab',
    description: 'Raspberry Pi k3s cluster, GitOps via Flux — HA Postgres, S3 backups, zero open ports',
    status: 'deployed',
  },
  Cloudlab: {
    name: 'cloud_lab',
    description: 'Multi-tenant GitOps platform on AKS — n8n + PostgreSQL, Flux, Prometheus/Grafana, Telegram alerting',
    status: 'deployed',
  },
  Study_App: {
    name: 'study_app',
    description: 'End-to-end DevOps pipeline — DevPod/Docker dev env, deployed to Kubernetes, Trivy-scanned, shipped via CI/CD',
    status: 'deployed',
  },
  Rahat_Ahsan_Website: {
    name: 'rahat_ahsan_website',
    description: 'this site — Astro + Terraform + a guarded chatbot',
    status: 'in progress',
  },
};

// Repos tagged with the "portfolio" topic on GitHub show up here automatically —
// add the topic to any repo and it appears on the next build, no code change.
export async function fetchGithubProjects(): Promise<Project[]> {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&type=owner`, {
      headers: { Accept: 'application/vnd.github+json' },
    });
    if (!res.ok) return [];
    const repos = await res.json();

    return repos
      .filter((r: any) => !r.fork && !r.archived && r.topics?.includes('portfolio'))
      .sort((a: any, b: any) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
      .map((r: any) => {
        const override = projectOverrides[r.name];
        const slug = override?.name ?? r.name.toLowerCase();
        return {
          slug,
          name: slug,
          description: override?.description ?? r.description ?? 'no description yet',
          status: override?.status ?? 'active',
          href: r.html_url as string,
          repo: `${GITHUB_USERNAME}/${r.name}`,
          branch: r.default_branch as string,
        };
      });
  } catch {
    return [];
  }
}

export async function fetchProjectReadme(repo: string): Promise<string | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}/readme`, {
      headers: { Accept: 'application/vnd.github+json' },
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (!data.content) return null;
    return Buffer.from(data.content, 'base64').toString('utf-8');
  } catch {
    return null;
  }
}

// READMEs link to images/files with paths relative to the repo — rewrite those
// to real URLs so they resolve once the markdown is rendered on our own domain.
export function rewriteRelativeLinks(markdown: string, repo: string, branch: string): string {
  const rawBase = `https://raw.githubusercontent.com/${repo}/${branch}/`;
  const blobBase = `https://github.com/${repo}/blob/${branch}/`;
  const stripLeading = (path: string) => path.replace(/^\.?\//, '');

  let out = markdown.replace(/!\[([^\]]*)\]\((?!https?:\/\/)([^)\s]+)\)/g, (_m, alt, path) => {
    return `![${alt}](${rawBase}${stripLeading(path)})`;
  });

  out = out.replace(/(?<!!)\[([^\]]*)\]\((?!https?:\/\/|#)([^)\s]+)\)/g, (_m, text, path) => {
    return `[${text}](${blobBase}${stripLeading(path)})`;
  });

  return out;
}
