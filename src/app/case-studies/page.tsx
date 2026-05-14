import Link from "next/link";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export default function CaseStudiesPage() {
  return (
    <Container className="py-14 sm:py-20">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Case Studies
        </h1>
        <p className="max-w-2xl text-sm text-muted-fg sm:text-base">
          Deep dives focused on constraints, architecture, adoption, and outcomes.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-12">
        <div className="md:col-span-8 rounded-[var(--radius-lg)] border border-border bg-card p-6 shadow-sm shadow-[hsl(var(--shadow)/0.14)]">
          <div className="text-sm font-medium tracking-tight">
            AI‑driven QA Platform at UHG (Sanitized)
          </div>
          <p className="mt-1 text-sm text-muted-fg">
            LLM-powered test generation, failure triage, and artifact automation.
          </p>
          <div className="mt-6">
            <Button asChild>
              <Link href="/case-studies/uhg-ai-qa-platform">Read</Link>
            </Button>
          </div>
        </div>

        <div className="md:col-span-4 rounded-[var(--radius-lg)] border border-border bg-muted/50 p-6">
          <div className="text-sm font-medium tracking-tight">What’s next</div>
          <p className="mt-2 text-sm text-muted-fg">
            I’m adding 1–2 more case studies and cleaner diagrams in upcoming PRs.
          </p>
        </div>
      </div>
    </Container>
  );
}

