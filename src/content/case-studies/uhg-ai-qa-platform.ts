export const uhgAiQaPlatform = {
  title: "AI‑driven QA Platform at UHG (Sanitized)",
  summary:
    "I architected an AI-assisted test automation platform that scaled across teams: LLM-powered test generation, artifact-driven failure triage, and automated delivery artifacts—built with guardrails for reliability and adoption.",
  context: [
    "Large surface area: many flows, integrations, and frequent releases.",
    "Quality signal needed to be fast, trustworthy, and easy for teams to adopt.",
    "Any AI assistance had to be auditable and safe (no silent changes, no magic).",
  ],
  goals: [
    "Reduce manual QA load while improving coverage.",
    "Shorten feedback loops for engineers and QA.",
    "Standardize quality reporting and release readiness across teams.",
  ],
  system: [
    {
      name: "Framework-aware code generation",
      body: "A codegen layer that knew the framework conventions (Page Objects, selectors, custom commands) and could translate structured requirements into executable Cypress tests.",
    },
    {
      name: "Artifact-first failure triage",
      body: "Pipelines that ingest screenshots/videos/logs and produce confidence-scored hypotheses and repair suggestions, keeping humans in the loop for approvals.",
    },
    {
      name: "Self-healing test environments",
      body: "Service emulators and recovery automation to remove recurring environment blockers and stabilize CI.",
    },
    {
      name: "Observability + governance",
      body: "Dashboards and metrics for visibility, plus evaluation/guardrails so AI outputs remained reliable and reviewable.",
    },
  ],
  outcomes: [
    { label: "Manual QA effort", value: "~80% → 20%" },
    { label: "Release velocity", value: "~4× faster" },
    { label: "Investigation time", value: "~70% reduction" },
    { label: "Environment uptime", value: "~95%" },
  ],
  notes: [
    "This write-up is intentionally sanitized: it focuses on engineering approach, not proprietary product details.",
  ],
} as const;

