// Homelab section: a short intro and the repos behind it.
// Each project gets a page at /homelab/<slug> built from the repo's README (fetched at build time).
// `diagram` is an image file in the repo root, shown above the README; null if the README embeds its own.

export const homelab = {
  intro:
    'A two-node Raspberry Pi 5 cluster at home, running k3s and managed with Flux so Git is the source of truth. Data sits on a NAS, and the apps I use every day run on it.',
  projects: [
    {
      name: 'Homelab',
      slug: 'homelab',
      repo: 'Homelab',
      diagram: 'HomeLab_Architecture.svg',
      detail: 'Raspberry Pi k3s cluster with GitOps, NAS-backed storage and Postgres, reachable over Tailscale and Cloudflare Tunnel.',
    },
    {
      name: 'Study App',
      slug: 'study-app',
      repo: 'Study_App',
      diagram: 'architecture.svg',
      detail: 'Tracks my study sessions and certifications. Self-hosted, with a CI/CD pipeline from commit to cluster.',
    },
    {
      name: 'Cloudlab',
      slug: 'cloudlab',
      repo: 'Cloudlab',
      diagram: null as string | null,
      detail: 'A multi-tenant platform on Azure Kubernetes built with Terraform and Flux, spun up on demand.',
    },
  ],
};

export const githubUser = 'AhsanRahat12';
