import type { Metadata } from "next";

import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Short notes on test platform engineering, AI-assisted QA, and developer productivity.",
};

export default function WritingPage() {
  return (
    <Container className="py-14 sm:py-20">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Writing
        </h1>
        <p className="max-w-2xl text-sm text-muted-fg sm:text-base">
          I’m publishing a few concise posts on platform quality, LLM evals, and
          automation systems. First posts coming soon.
        </p>
      </div>

      <div className="mt-10 rounded-[var(--radius-lg)] border border-border bg-muted/50 p-6">
        <div className="text-sm font-medium tracking-tight">
          Suggested topics
        </div>
        <ul className="mt-3 space-y-2 text-sm text-muted-fg">
          <li className="list-disc ml-4">
            How to evaluate LLM-assisted test generation (beyond “it worked once”)
          </li>
          <li className="list-disc ml-4">
            Practical guardrails for AI-in-QA in regulated domains
          </li>
          <li className="list-disc ml-4">
            Designing failure triage systems with confidence scoring
          </li>
        </ul>
      </div>
    </Container>
  );
}
