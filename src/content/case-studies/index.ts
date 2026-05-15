import { uhgAiQaPlatform } from "@/content/case-studies/uhg-ai-qa-platform";
import { aiFailureTriage } from "@/content/case-studies/ai-failure-triage";

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
  {
    slug: "ai-failure-triage",
    title: aiFailureTriage.title,
    summary: aiFailureTriage.summary,
    tags: ["Triage", "Artifacts", "LLM", "Guardrails", "DX"] as const,
  },
] as const;
