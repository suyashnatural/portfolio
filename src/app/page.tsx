import Link from "next/link";

import { Container } from "@/components/container";
import { TrackLink } from "@/components/track-link";
import { Button } from "@/components/ui/button";
import { homeContent } from "@/content/home";
import { experience } from "@/content/experience";
import { projects } from "@/content/projects";
import { skillGroups } from "@/content/skills";
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
                {homeContent.badge}
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
                  <TrackLink
                    href={`mailto:${siteConfig.email}`}
                    event={{ name: "cta_email" }}
                  >
                    Email
                  </TrackLink>
                </Button>
                <Button asChild variant="ghost">
                  <Link href="/experience">Experience</Link>
                </Button>
                <Button asChild variant="ghost">
                  <TrackLink
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    event={{ name: "cta_linkedin" }}
                  >
                    LinkedIn
                  </TrackLink>
                </Button>
              </div>
              <p className="mt-6 max-w-2xl text-sm text-muted-fg">
                Based in {siteConfig.location}. Open to roles focused on test
                platform engineering, developer productivity, and AI‑assisted QA.
              </p>
            </div>
            <div className="md:col-span-4 md:justify-self-end">
              <div className="rounded-[var(--radius-lg)] border border-border bg-card p-5 shadow-sm shadow-[hsl(var(--shadow)/0.18)]">
                <div className="text-sm font-medium tracking-tight">
                  {homeContent.trustCard.title}
                </div>
                <p className="mt-2 text-sm text-muted-fg">
                  {homeContent.trustCard.body}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {homeContent.trustCard.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-muted/60 px-2.5 py-1 text-xs text-muted-fg"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pt-10 sm:pt-14">
        <Container>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {homeContent.proof.map((p) => (
              <ProofChip key={p.label} label={p.label} value={p.value} />
            ))}
          </div>
        </Container>
      </section>

      <section id="case-studies" className="pt-16 sm:pt-24 scroll-mt-24">
        <Container className="space-y-8">
          <SectionTitle
            eyebrow={homeContent.sections.caseStudies.eyebrow}
            title={homeContent.sections.caseStudies.title}
            description={homeContent.sections.caseStudies.description}
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
            eyebrow={homeContent.sections.experience.eyebrow}
            title={homeContent.sections.experience.title}
            description={homeContent.sections.experience.description}
          />
          <div className="grid gap-4">
            {experience.slice(0, 2).map((job) => (
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
                  {job.highlights.slice(0, 3).map((b) => (
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
            eyebrow={homeContent.sections.projects.eyebrow}
            title={homeContent.sections.projects.title}
            description={homeContent.sections.projects.description}
          />
          <div className="flex">
            <Button asChild variant="secondary" size="sm">
              <Link href="/projects">View all projects</Link>
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-12">
            {projects.map((p) => (
              <div
                key={p.href}
                className="md:col-span-6 rounded-[var(--radius-lg)] border border-border bg-card p-6 shadow-sm shadow-[hsl(var(--shadow)/0.12)]"
              >
                <div className="text-sm font-medium tracking-tight">{p.name}</div>
                <p className="mt-1 text-sm text-muted-fg">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-muted/60 px-2.5 py-1 text-xs text-muted-fg"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <Button asChild variant="secondary" size="sm">
                    <a href={p.href} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="skills" className="pt-16 sm:pt-24 scroll-mt-24">
        <Container className="space-y-8">
          <SectionTitle
            eyebrow="Skills"
            title="Systems I build and scale"
            description="A curated view of what I ship end-to-end—platform engineering, AI-assisted workflows, and delivery rigor."
          />
          <div className="flex">
            <Button asChild variant="secondary" size="sm">
              <Link href="/skills">View full skills</Link>
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-12">
            {skillGroups.map((g) => (
              <div
                key={g.title}
                className="md:col-span-4 rounded-[var(--radius-lg)] border border-border bg-card p-6 shadow-sm shadow-[hsl(var(--shadow)/0.12)]"
              >
                <div className="text-sm font-medium tracking-tight">{g.title}</div>
                <p className="mt-1 text-sm text-muted-fg">{g.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-fg">
                  {g.items.map((i) => (
                    <li key={i} className="list-disc ml-4">
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="contact" className="pt-16 sm:pt-24 scroll-mt-24">
        <Container>
          <div className="mb-6 grid gap-4 md:grid-cols-12">
            <div className="md:col-span-7 rounded-[var(--radius-lg)] border border-border bg-card p-6 shadow-sm shadow-[hsl(var(--shadow)/0.12)]">
              <div className="text-sm font-medium tracking-tight">
                What I’m looking for
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted-fg">
                <li className="list-disc ml-4">
                  Lead/Staff SDET or Test Platform roles building frameworks and
                  developer productivity tooling
                </li>
                <li className="list-disc ml-4">
                  Applied AI-in-QA (LLM workflows with evals + guardrails)
                </li>
                <li className="list-disc ml-4">
                  Teams that value reliability, clear engineering standards, and
                  measurable outcomes
                </li>
              </ul>
            </div>
            <div className="md:col-span-5 rounded-[var(--radius-lg)] border border-border bg-muted/50 p-6">
              <div className="text-sm font-medium tracking-tight">How I work</div>
              <ul className="mt-4 space-y-2 text-sm text-muted-fg">
                <li className="list-disc ml-4">Evidence-first decisions</li>
                <li className="list-disc ml-4">Human-in-the-loop by default</li>
                <li className="list-disc ml-4">Operational visibility (dashboards, metrics)</li>
                <li className="list-disc ml-4">Ship iteratively, keep it maintainable</li>
              </ul>
            </div>
          </div>
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
