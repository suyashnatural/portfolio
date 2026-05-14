export type ProjectItem = {
  name: string;
  description: string;
  href: string;
  stack: string[];
  note?: string;
};

export const projects: ProjectItem[] = [
  {
    name: "ApplyFlow (LinkedIn automation)",
    description:
      "Multi-service system with a human-in-the-loop UI and Playwright worker automation. Included as a systems example.",
    href: "https://github.com/suyashnatural/applyflow-linkedin",
    stack: ["TypeScript", "Next.js", "Playwright", "Workers/Queues"],
    note:
      "Polarity risk: can be interpreted as automation misuse. Keep framing strictly as engineering systems work.",
  },
  {
    name: "AutomationPracticeCypress",
    description:
      "UI automation suite demonstrating page-object patterns, cross-browser runs, and reporting.",
    href: "https://github.com/suyashnatural/automationpracticecypress",
    stack: ["JavaScript", "Cypress", "Reporting"],
  },
] as const;

