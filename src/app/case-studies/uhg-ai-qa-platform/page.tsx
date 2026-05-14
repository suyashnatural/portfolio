import Link from "next/link";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export default function UhgAiQaPlatformCaseStudy() {
  return (
    <Container className="py-14 sm:py-20">
      <div className="space-y-3">
        <div className="text-xs font-medium tracking-[0.18em] uppercase text-muted-fg">
          Case study (sanitized)
        </div>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          AI‑driven QA Platform at UHG
        </h1>
        <p className="max-w-2xl text-sm text-muted-fg sm:text-base">
          This page is a foundation placeholder. Next PRs will add the full
          narrative: constraints, system architecture, adoption mechanics,
          evaluation strategy, and measurable outcomes.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-12">
        <div className="md:col-span-8 rounded-[var(--radius-lg)] border border-border bg-card p-6 shadow-sm shadow-[hsl(var(--shadow)/0.14)]">
          <div className="text-sm font-medium tracking-tight">
            Planned sections
          </div>
          <ul className="mt-4 space-y-2 text-sm text-muted-fg">
            <li className="list-disc ml-4">Context + problem statement</li>
            <li className="list-disc ml-4">Constraints and safety boundaries</li>
            <li className="list-disc ml-4">Architecture diagram + data flow</li>
            <li className="list-disc ml-4">LLM workflows + evals/guardrails</li>
            <li className="list-disc ml-4">Adoption, ops, and outcomes</li>
          </ul>
          <div className="mt-6 flex items-center gap-3">
            <Button asChild variant="secondary">
              <Link href="/case-studies">Back to case studies</Link>
            </Button>
          </div>
        </div>
        <div className="md:col-span-4 rounded-[var(--radius-lg)] border border-border bg-muted/50 p-6">
          <div className="text-sm font-medium tracking-tight">Note</div>
          <p className="mt-2 text-sm text-muted-fg">
            All details will stay sanitized and focused on engineering approach,
            not sensitive product specifics.
          </p>
        </div>
      </div>
    </Container>
  );
}

