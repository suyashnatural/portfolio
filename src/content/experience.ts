export type ExperienceItem = {
  company: string;
  role: string;
  location?: string;
  timeframe: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "UnitedHealth Group (Optum)",
    role: "Lead SDET",
    location: "Remote, USA",
    timeframe: "Jun 2022 — Present",
    highlights: [
      "Architected an AI-driven test automation platform adopted org-wide; reduced manual QA effort from ~80% to ~20% and accelerated releases ~4×.",
      "Built framework-aware code generation (Page Objects + selectors + custom commands) and a Rally-to-Cypress pipeline; cut test creation from hours to minutes.",
      "Implemented AI failure triage analyzing screenshots/videos with confidence-scored repair suggestions; reduced investigation time ~70% across 5 product teams.",
      "Built self-healing service emulators with automatic recovery; achieved ~95% test environment uptime.",
    ],
  },
  {
    company: "Guardant Health",
    role: "Staff Software Engineer in Test",
    location: "Redwood City, CA",
    timeframe: "Aug 2021 — Jun 2022",
    highlights: [
      "Led end-to-end QA automation for a genomics platform with 8+ integration points; reduced production defect leakage ~35%.",
      "Designed automation strategy by mapping system data flows and defining test boundaries; achieved full regression coverage for critical clinical workflows.",
      "Built reusable test infrastructure and simulators; cut environment setup from days to hours.",
    ],
  },
  {
    company: "Engie Storage",
    role: "Senior QA Automation Lead",
    location: "Santa Clara, CA",
    timeframe: "Oct 2018 — Aug 2021",
    highlights: [
      "Established the QA automation practice from scratch; reduced regression cycles from weeks to days.",
      "Built a tool-agnostic framework (UI + API) and prioritized scenarios by business risk; delivered 12 consecutive releases with zero critical defects.",
    ],
  },
] as const;

