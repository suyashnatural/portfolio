import { uhgAiQaPlatform } from "@/content/case-studies/uhg-ai-qa-platform";

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  tags: readonly string[];
};

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "uhg-ai-qa-platform",
    title: uhgAiQaPlatform.title,
    summary: uhgAiQaPlatform.summary,
    tags: ["AI QA", "Cypress", "Platform", "Triage", "Evals"] as const,
  },
] as const;

