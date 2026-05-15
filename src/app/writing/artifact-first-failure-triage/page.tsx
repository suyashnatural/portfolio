import type { Metadata } from "next";

import { Container } from "@/components/container";
import { Prose } from "@/components/prose";

export const metadata: Metadata = {
  title: "Artifact‑First Failure Triage",
  description:
    "How to turn flaky E2E failures into actionable triage: artifact bundles, evidence citations, confidence bands, and safe next actions.",
};

export default function PostArtifactFirstTriage() {
  return (
    <Container className="py-14 sm:py-20">
      <div className="space-y-3">
        <div className="text-xs font-medium tracking-[0.18em] uppercase text-muted-fg">
          Writing
        </div>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Artifact‑First Failure Triage with Confidence Scoring
        </h1>
        <p className="max-w-2xl text-sm text-muted-fg sm:text-base">
          Fast triage isn’t about being clever—it’s about evidence and safe next
          actions.
        </p>
      </div>

      <Prose className="mt-10">
        <h2>Why most triage is slow</h2>
        <p>
          When an E2E test fails, people chase symptoms: they scroll logs, rerun
          jobs, and ask “did it happen to you too?” The missing piece is a
          standardized, evidence-rich bundle.
        </p>

        <h2>Step 1: Build an artifact bundle</h2>
        <ul>
          <li>Screenshot(s) at failure</li>
          <li>Video clip</li>
          <li>Console logs + network failures</li>
          <li>Test metadata (spec, commit, env, browser)</li>
        </ul>

        <h2>Step 2: Force evidence citations</h2>
        <p>
          Any automated analysis (human or LLM) should cite evidence. A useful
          format is:
        </p>
        <pre>
          <code>{`Finding:
- Hypothesis: ...
- Evidence: (artifact link + timestamp / log line)
- Confidence: High/Medium/Low
- Next actions: (smallest safe verification steps)`}</code>
        </pre>

        <h2>Step 3: Confidence scoring (the honest kind)</h2>
        <p>
          Confidence bands should be based on evidence quality, not vibes:
        </p>
        <ul>
          <li>
            <strong>High</strong>: clear error signature + consistent artifact
            evidence
          </li>
          <li>
            <strong>Medium</strong>: plausible pattern match, but missing one key
            signal
          </li>
          <li>
            <strong>Low</strong>: ambiguous, recommend gathering more signals
          </li>
        </ul>

        <h2>Step 4: Suggested next actions</h2>
        <p>
          The best automation doesn’t just label failures; it reduces the time
          to resolution by providing a safe playbook:
        </p>
        <ol>
          <li>Verify with a minimal repro (fastest path).</li>
          <li>Check environment health signals (avoid wasted time).</li>
          <li>Propose the smallest reversible fix.</li>
        </ol>

        <h2>What this unlocks</h2>
        <ul>
          <li>Lower MTTR for flaky failures</li>
          <li>More consistent on-call and release readiness</li>
          <li>Faster onboarding (less tribal knowledge)</li>
        </ul>
      </Prose>
    </Container>
  );
}

