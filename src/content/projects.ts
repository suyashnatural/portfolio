export type ProjectItem = {
  name: string;
  description: string;
  href: string;
  stack: string[];
  proves: readonly string[];
  note?: string;
};

export const projects: ProjectItem[] = [
  {
    name: "ApplyFlow (LinkedIn automation)",
    description:
      "Multi-service system with a human-in-the-loop UI and Playwright worker automation. Included as a systems example.",
    href: "https://github.com/suyashnatural/applyflow-linkedin",
    stack: ["TypeScript", "Next.js", "Playwright", "Workers/Queues"],
    proves: [
      "Distributed workflow orchestration (API/web/worker separation)",
      "Practical automation reliability (retries, idempotency, artifacts)",
      "Product-grade DX: review/approval UI for human-in-the-loop",
    ],
    note:
      "Polarity risk: can be interpreted as automation misuse. Keep framing strictly as engineering systems work.",
  },
  {
    name: "AutomationPracticeCypress",
    description:
      "UI automation suite demonstrating page-object patterns, cross-browser runs, and reporting.",
    href: "https://github.com/suyashnatural/automationpracticecypress",
    stack: ["JavaScript", "Cypress", "Reporting"],
    proves: [
      "Maintainable test architecture (page objects + reusable utilities)",
      "Cross-browser stability + reporting pipeline basics",
    ],
  },
] as const;
