export const aiFailureTriage = {
  title: "AI Failure Triage for E2E Automation (Sanitized)",
  summary:
    "I built an artifact-first triage pipeline that turns noisy CI failures into actionable, confidence-scored hypotheses—keeping humans in control while reducing investigation time.",
  myRole:
    "Designed the end-to-end workflow: artifact ingestion, analysis prompts/guardrails, confidence signals, and team adoption.",
  context: [
    "E2E failures often require manual log digging, screenshot/video review, and tribal knowledge.",
    "Teams needed faster, more consistent triage without creating new reliability risks.",
  ],
  constraints: [
    "No silent changes: suggestions are advisory unless a human approves.",
    "Avoid overconfident hallucinations: outputs must show evidence and uncertainty.",
    "Sanitized artifacts and privacy boundaries.",
  ],
  approach: [
    {
      name: "Artifact ingestion",
      body: "Collect screenshots, videos, console logs, network traces, and metadata (spec, build id, environment) into a standardized bundle.",
    },
    {
      name: "Evidence-first analysis",
      body: "Prompts force the model to cite specific evidence (timestamps, selectors, error lines). If evidence is missing, the output must say so.",
    },
    {
      name: "Confidence scoring",
      body: "Assign confidence bands (high/medium/low) based on evidence quality, pattern match, and historical outcomes.",
    },
    {
      name: "Suggested next actions",
      body: "Provide a short playbook: likely root cause, quick verification steps, and the smallest safe remediation.",
    },
  ],
  outcomes: [
    { label: "Investigation time", value: "~70% reduction" },
    { label: "Consistency", value: "Standardized triage format" },
    { label: "Adoption", value: "Used across multiple teams" },
  ],
  guardrails: [
    "Show evidence: link/cite artifacts used to form conclusions.",
    "Prefer minimal changes and reversible fixes.",
    "Fail-safe behavior: if low confidence, recommend gathering more signals rather than guessing.",
  ],
  notes: [
    "This write-up is intentionally sanitized and focuses on engineering design rather than proprietary systems.",
  ],
} as const;
