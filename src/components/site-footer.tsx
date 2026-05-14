import Link from "next/link";

import { Container } from "@/components/container";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 py-10">
      <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="space-y-1">
          <div className="font-medium tracking-tight">{siteConfig.name}</div>
          <div className="text-sm text-muted-fg">{siteConfig.roleHeadline}</div>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <a
            className="text-muted-fg hover:text-fg"
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="text-muted-fg hover:text-fg"
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <Link className="text-muted-fg hover:text-fg" href="/resume">
            Resume
          </Link>
          <a className="text-muted-fg hover:text-fg" href={`mailto:${siteConfig.email}`}>
            Email
          </a>
        </div>
      </Container>
    </footer>
  );
}

