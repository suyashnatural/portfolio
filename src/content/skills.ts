export type SkillGroup = {
  title: string;
  description: string;
  items: readonly string[];
};

export const skillGroups: readonly SkillGroup[] = [
  {
    title: "Test Platform Engineering",
    description: "Frameworks, tooling, and workflows that scale across teams.",
    items: [
      "Cypress / Playwright platform patterns",
      "Framework-aware code generation",
      "Artifact capture: screenshots, video, logs",
      "Flake reduction + reliability strategies",
      "Developer experience and adoption",
    ],
  },
  {
    title: "AI‑Assisted QA",
    description: "LLM workflows that are evaluated, governed, and reviewable.",
    items: [
      "Prompting + RAG pipelines",
      "Evals/validation (DeepEval, RAGAs concepts)",
      "Human-in-the-loop approvals",
      "Failure triage with confidence scoring",
      "Agent tooling (MCP integrations, orchestration)",
    ],
  },
  {
    title: "Delivery + Observability",
    description: "CI/CD, metrics, and dashboards for release readiness.",
    items: [
      "Azure DevOps / GitHub Actions pipelines",
      "Quality gates and reporting",
      "Dashboards for execution visibility",
      "Performance testing (k6/JMeter concepts)",
    ],
  },
] as const;

