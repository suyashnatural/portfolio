import type { Metadata } from "next";

import { Container } from "@/components/container";
import { Prose } from "@/components/prose";

export const metadata: Metadata = {
  title: "Evaluating LLM‑Assisted Test Generation",
  description:
    "A practical framework for making LLM-generated tests reliable: evidence-first prompts, evals, confidence signals, and human-in-the-loop approvals.",
};

export default function PostEvaluatingLlmTestGen() {
  return (
    <Container className="py-14 sm:py-20">
      <div className="space-y-3">
        <div className="text-xs font-medium tracking-[0.18em] uppercase text-muted-fg">
          Writing
        </div>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Evaluating LLM‑Assisted Test Generation (Evidence, Not Vibes)
        </h1>
        <p className="max-w-2xl text-sm text-muted-fg sm:text-base">
          If the output can’t explain itself with evidence, it can’t be trusted
          in CI.
        </p>
      </div>

      <Prose className="mt-10">
        <h2>The problem</h2>
        <p>
          LLMs can draft tests quickly, but speed isn’t the hard part. The hard
          part is <strong>trust</strong>: do the generated tests reflect the real
          UI/API behavior, and will they stay stable over time?
        </p>

        <h2>Principle #1: Evidence-first prompts</h2>
        <p>
          Don’t ask the model to “write tests”. Ask it to{" "}
          <strong>justify decisions</strong> using concrete inputs: selectors,
          page objects, API contracts, and existing test utilities.
        </p>
        <pre>
          <code>{`Goal: Add a Cypress test for Story X.
Constraints:
- MUST use existing custom commands where possible.
- MUST reference selectors from the selectors registry.
- MUST output: (a) steps, (b) selectors used, (c) assumptions, (d) confidence.`}</code>
        </pre>

        <h2>Principle #2: Treat outputs as suggestions</h2>
        <p>
          Generated code should enter the codebase via the same safety gates as
          any other change: review, CI, and diff-based visibility.{" "}
          <strong>No silent merges.</strong>
        </p>

        <h2>Principle #3: Add evals that match failure modes</h2>
        <p>
          A good eval suite tests what actually breaks:
        </p>
        <ul>
          <li>Selector drift: did it use stable selectors?</li>
          <li>Flakiness risk: did it add unnecessary waits?</li>
          <li>Coverage: does it validate the outcome, not just clicks?</li>
          <li>Policy: does it follow your framework conventions?</li>
        </ul>

        <h2>Principle #4: Confidence is a product feature</h2>
        <p>
          Confidence isn’t just a number—it&apos;s a contract. Require the system to
          explain why it’s confident, and to explicitly say when it{" "}
          <strong>isn’t</strong>.
        </p>

        <h2>What to ship first</h2>
        <ol>
          <li>Framework-aware generation for the “happy path” only.</li>
          <li>Human-in-the-loop approvals for changes.</li>
          <li>Basic evals + lint rules to block obvious mistakes.</li>
          <li>Artifact-first triage for failures (so teams trust the system).</li>
        </ol>

        <hr />
        <p>
          If you want, I can share a lightweight checklist version of this
          framework for recruiters/hiring managers.
        </p>
      </Prose>
    </Container>
  );
}
