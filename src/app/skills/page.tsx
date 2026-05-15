import type { Metadata } from "next";

import { Container } from "@/components/container";
import { skillGroups } from "@/content/skills";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Core strengths in test platform engineering, AI-assisted QA, and delivery/observability.",
};

export default function SkillsPage() {
  return (
    <Container className="py-14 sm:py-20">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Skills
        </h1>
        <p className="max-w-2xl text-sm text-muted-fg sm:text-base">
          A curated view of what I build end-to-end. The portfolio focuses on
          outcomes; this page makes the keywords explicit for fast scanning.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-12">
        {skillGroups.map((g) => (
          <section
            key={g.title}
            className="md:col-span-4 rounded-[var(--radius-lg)] border border-border bg-card p-6 shadow-sm shadow-[hsl(var(--shadow)/0.12)]"
          >
            <h2 className="text-sm font-medium tracking-tight">{g.title}</h2>
            <p className="mt-1 text-sm text-muted-fg">{g.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-fg">
              {g.items.map((i) => (
                <li key={i} className="list-disc ml-4">
                  {i}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Container>
  );
}

