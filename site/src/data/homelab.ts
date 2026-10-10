// Homelab section: a short intro and the repos behind it.

export const homelab = {
  intro:
    'A two-node Raspberry Pi 5 cluster at home, running k3s and managed with Flux so Git is the source of truth. Data sits on a NAS, and the apps I use every day run on it.',
  projects: [
    {
      name: 'Homelab',
      detail: 'Raspberry Pi k3s cluster with GitOps, NAS-backed storage and Postgres, reachable over Tailscale and Cloudflare Tunnel.',
      href: 'https://github.com/AhsanRahat12/Homelab',
    },
    {
      name: 'Study App',
      detail: 'Tracks my study sessions and certifications. Self-hosted, with a CI/CD pipeline from commit to cluster.',
      href: 'https://github.com/AhsanRahat12/Study_App',
    },
    {
      name: 'Cloudlab',
      detail: 'A multi-tenant platform on Azure Kubernetes built with Terraform and Flux, spun up on demand.',
      href: 'https://github.com/AhsanRahat12/Cloudlab',
    },
  ],
};
