import Link from "next/link";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-2">
      <div className="text-xs font-medium tracking-[0.18em] uppercase text-muted-fg">
        {eyebrow}
      </div>
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      <p className="max-w-2xl text-sm text-muted-fg sm:text-base">
        {description}
      </p>
    </div>
  );
}

function ProofChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[var(--radius-md)] border border-border bg-card px-4 py-3 shadow-sm shadow-[hsl(var(--shadow)/0.12)]">
      <div className="text-sm font-medium tracking-tight">{value}</div>
      <div className="text-xs text-muted-fg">{label}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="pb-16">
      <section className="pt-16 sm:pt-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3 py-1 text-xs text-muted-fg">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Open to Lead SDET / Test Platform roles
              </div>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                {siteConfig.roleHeadline}
              </h1>
              <p className="mt-4 max-w-2xl text-base text-muted-fg sm:text-lg">
                {siteConfig.thesis}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button asChild>
                  <Link href="#case-studies">View case studies</Link>
                </Button>
                <Button asChild variant="secondary">
                  <a href={`mailto:${siteConfig.email}`}>Email</a>
                </Button>
                <Button asChild variant="ghost">
                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
            <div className="md:col-span-4 md:justify-self-end">
              <div className="rounded-[var(--radius-lg)] border border-border bg-card p-5 shadow-sm shadow-[hsl(var(--shadow)/0.18)]">
                <div className="text-sm font-medium tracking-tight">
                  Trusted in high-stakes domains
                </div>
                <p className="mt-2 text-sm text-muted-fg">
                  Healthcare, genomics, energy — platform quality, reliability,
                  and release velocity.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Cypress", "Playwright", "LLM QA", "RAG/Evals", "CI/CD"].map(
                    (t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-muted/60 px-2.5 py-1 text-xs text-muted-fg"
                      >
                        {t}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pt-10 sm:pt-14">
        <Container>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <ProofChip label="Years in test platform engineering" value="13+ years" />
            <ProofChip label="Manual QA reduction (UHG)" value="~80% → 20%" />
            <ProofChip label="Release acceleration (UHG)" value="~4× faster" />
            <ProofChip label="Domains" value="Healthcare • Genomics • Energy" />
          </div>
        </Container>
      </section>

      <section id="case-studies" className="pt-16 sm:pt-24 scroll-mt-24">
        <Container className="space-y-8">
          <SectionTitle
            eyebrow="Case studies"
            title="Automation platforms built like products"
            description="Deep dives that focus on constraints, architecture, adoption, and measurable outcomes—without leaking proprietary details."
          />
          <div className="grid gap-4 md:grid-cols-12">
            <div className="md:col-span-8">
              <div className="rounded-[var(--radius-lg)] border border-border bg-card p-6 shadow-sm shadow-[hsl(var(--shadow)/0.16)]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-medium tracking-tight">
                      AI‑driven QA Platform at UHG (Sanitized)
                    </div>
                    <p className="mt-1 text-sm text-muted-fg">
                      LLM-powered test generation, failure triage, and artifact
                      automation adopted org-wide.
                    </p>
                  </div>
                  <span className="rounded-full border border-border bg-muted/60 px-2.5 py-1 text-xs text-muted-fg">
                    Featured
                  </span>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <ProofChip label="Adoption" value="Org-wide" />
                  <ProofChip label="Workflows shipped" value="17 CLI tools" />
                  <ProofChip label="Investigation time" value="~70% ↓" />
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Button asChild>
                    <Link href="/case-studies/uhg-ai-qa-platform">
                      Read case study
                    </Link>
                  </Button>
                  <Button asChild variant="ghost">
                    <Link href="/case-studies">All case studies</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="md:col-span-4">
              <div className="rounded-[var(--radius-lg)] border border-border bg-muted/50 p-6">
                <div className="text-sm font-medium tracking-tight">
                  How I approach platform quality
                </div>
                <ul className="mt-3 space-y-2 text-sm text-muted-fg">
                  <li>Outcome-first: adoption + ROI + reliability</li>
                  <li>Evals & guardrails for LLM workflows</li>
                  <li>Developer experience: fast feedback loops</li>
                  <li>Observability: artifacts, dashboards, metrics</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="experience" className="pt-16 sm:pt-24 scroll-mt-24">
        <Container className="space-y-8">
          <SectionTitle
            eyebrow="Experience"
            title="Leadership with measurable outcomes"
            description="I lead automation strategy, build platforms, and drive adoption across teams—optimized for fast delivery without compromising quality."
          />
          <div className="grid gap-4">
            {[
              {
                company: "UnitedHealth Group (Optum)",
                role: "Lead SDET",
                timeframe: "2022 — Present",
                bullets: [
                  "Architected an AI-driven test automation platform adopted org-wide; reduced manual QA effort ~80%.",
                  "Built framework-aware codegen + Rally pipelines; cut test creation time from hours to minutes.",
                  "Shipped LLM triage workflows analyzing artifacts (screenshots/videos) with confidence-scored suggestions.",
                ],
              },
              {
                company: "Guardant Health",
                role: "Staff Software Engineer in Test",
                timeframe: "2021 — 2022",
                bullets: [
                  "Led end-to-end automation for complex genomics workflows with multiple integration points.",
                  "Established testing strategy by mapping system boundaries and critical-path risk.",
                ],
              },
            ].map((job) => (
              <div
                key={job.company}
                className="rounded-[var(--radius-lg)] border border-border bg-card p-6 shadow-sm shadow-[hsl(var(--shadow)/0.12)]"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-sm font-medium tracking-tight">
                    {job.company}
                  </div>
                  <div className="text-xs text-muted-fg">{job.timeframe}</div>
                </div>
                <div className="mt-1 text-sm text-muted-fg">{job.role}</div>
                <ul className="mt-4 space-y-2 text-sm text-muted-fg">
                  {job.bullets.map((b) => (
                    <li key={b} className="list-disc ml-4">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="projects" className="pt-16 sm:pt-24 scroll-mt-24">
        <Container className="space-y-8">
          <SectionTitle
            eyebrow="Projects"
            title="Selected public work"
            description="A small set of repos that reinforce the story. More will be curated as case studies land."
          />
          <div className="grid gap-4 md:grid-cols-12">
            <div className="md:col-span-6 rounded-[var(--radius-lg)] border border-border bg-card p-6 shadow-sm shadow-[hsl(var(--shadow)/0.12)]">
              <div className="text-sm font-medium tracking-tight">
                ApplyFlow (LinkedIn automation)
              </div>
              <p className="mt-1 text-sm text-muted-fg">
                Multi-service system with web UI + worker automation. Included as
                a systems example.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Button asChild variant="secondary" size="sm">
                  <a
                    href="https://github.com/suyashnatural/applyflow-linkedin"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
            <div className="md:col-span-6 rounded-[var(--radius-lg)] border border-border bg-card p-6 shadow-sm shadow-[hsl(var(--shadow)/0.12)]">
              <div className="text-sm font-medium tracking-tight">
                Cypress automation practice
              </div>
              <p className="mt-1 text-sm text-muted-fg">
                Page-object patterns and reporting for a UI automation suite.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Button asChild variant="secondary" size="sm">
                  <a
                    href="https://github.com/suyashnatural/automationpracticecypress"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="contact" className="pt-16 sm:pt-24 scroll-mt-24">
        <Container>
          <div className="rounded-[var(--radius-lg)] border border-border bg-muted/50 p-8 sm:p-10">
            <div className="text-sm font-medium tracking-tight">
              Recruiting for test platform / AI‑in‑QA leadership?
            </div>
            <p className="mt-2 max-w-2xl text-sm text-muted-fg sm:text-base">
              The fastest way to reach me is email. I’m happy to share deeper
              architecture details under NDA.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button asChild>
                <a href={`mailto:${siteConfig.email}`}>
                  Email {siteConfig.name}
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href={siteConfig.links.resumePdf}>Download resume</a>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

