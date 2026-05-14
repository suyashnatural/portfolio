import Link from "next/link";

import { Container } from "@/components/container";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

const nav = [
  { href: "#case-studies", label: "Case Studies" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-bg/75 backdrop-blur supports-[backdrop-filter]:bg-bg/60">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="font-semibold tracking-tight hover:opacity-90"
          >
            {siteConfig.name}
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-[var(--radius-sm)] px-3 py-2 text-sm text-muted-fg transition-colors hover:bg-muted/70 hover:text-fg"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="secondary" size="sm" className="hidden sm:flex">
            <a href={siteConfig.links.resumePdf}>Resume</a>
          </Button>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}

