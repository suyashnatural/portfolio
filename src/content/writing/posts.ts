export type WritingPost = {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  tags: readonly string[];
};

export const writingPosts: readonly WritingPost[] = [
  {
    slug: "evaluating-llm-assisted-test-generation",
    title: "Evaluating LLM‑Assisted Test Generation (Evidence, Not Vibes)",
    description:
      "A practical framework for making LLM-generated tests reliable: evidence-first prompts, evals, confidence signals, and human-in-the-loop approvals.",
    date: "2026-05-15",
    tags: ["LLM QA", "Evals", "Guardrails", "Cypress/Playwright"] as const,
  },
  {
    slug: "artifact-first-failure-triage",
    title: "Artifact‑First Failure Triage with Confidence Scoring",
    description:
      "How to turn flaky E2E failures into actionable triage: artifact bundles, evidence citations, confidence bands, and safe next actions.",
    date: "2026-05-15",
    tags: ["Triage", "Artifacts", "Reliability", "DX"] as const,
  },
] as const;

