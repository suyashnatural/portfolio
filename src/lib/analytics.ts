export type AnalyticsEvent =
  | { name: "cta_resume_download" }
  | { name: "cta_email" }
  | { name: "cta_linkedin" }
  | { name: "cta_case_study_open"; slug: string };

export function track(event: AnalyticsEvent) {
  if (process.env.NODE_ENV === "development") return;
  // Placeholder hook: wire to Vercel Analytics, Plausible, PostHog, etc.
  console.log("[analytics]", event);
}
