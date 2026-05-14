"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Container } from "@/components/container";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

const nav = [
  { href: "#case-studies", label: "Case Studies" },
  { href: "/experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-bg/75 backdrop-blur supports-[backdrop-filter]:bg-bg/60">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="font-semibold tracking-tight hover:opacity-90"
            onClick={() => setOpen(false)}
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
          <Button
            aria-label={open ? "Close menu" : "Open menu"}
            className="w-10 px-0 md:hidden"
            variant="ghost"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
          <ThemeToggle />
        </div>
      </Container>
      {open ? (
        <div className="border-t border-border/70 bg-bg/80 backdrop-blur supports-[backdrop-filter]:bg-bg/70 md:hidden">
          <Container className="py-3">
            <nav className="grid gap-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-[var(--radius-md)] px-3 py-2 text-sm text-muted-fg transition-colors hover:bg-muted/70 hover:text-fg"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={siteConfig.links.resumePdf}
                className="rounded-[var(--radius-md)] px-3 py-2 text-sm text-muted-fg transition-colors hover:bg-muted/70 hover:text-fg"
              >
                Resume (PDF)
              </a>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
