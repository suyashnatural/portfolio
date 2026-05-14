export const siteConfig = {
  name: "Suyash Nande",
  roleHeadline: "Lead SDET • Test Platform Engineer",
  thesis:
    "I build test automation platforms that scale across teams—and now I’m applying LLM/agent systems to make QA faster, smarter, and more reliable.",
  location: "Sunnyvale, CA",
  email: "suyashn02@gmail.com",
  defaultUrl: "https://suyashnande.com",
  url: process.env.NEXT_PUBLIC_SITE_URL,
  links: {
    github: "https://github.com/suyashnatural",
    linkedin: "https://linkedin.com/in/suyashnande",
    resumePdf: "/resume.pdf",
  },
} as const;

export const seo = {
  title: "Suyash Nande — Lead SDET & Test Platform Engineer",
  description:
    "Lead SDET and Test Platform Engineer specializing in AI-powered QA automation, Cypress/Playwright frameworks, and engineering productivity. Built org-wide platforms with measurable release and quality impact.",
} as const;
