import { Container } from "@/components/container";
import { experience } from "@/content/experience";

export const metadata = {
  title: "Experience",
  description:
    "Outcomes-first timeline across healthcare, genomics, and energy — platform engineering, automation frameworks, and AI-assisted QA.",
};

export default function ExperiencePage() {
  return (
    <Container className="py-14 sm:py-20">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Experience
        </h1>
        <p className="max-w-2xl text-sm text-muted-fg sm:text-base">
          Outcomes-first timeline focused on platform impact, adoption, and
          engineering execution.
        </p>
      </div>

      <div className="mt-10 grid gap-4">
        {experience.map((job) => (
          <article
            key={`${job.company}-${job.timeframe}`}
            className="rounded-[var(--radius-lg)] border border-border bg-card p-6 shadow-sm shadow-[hsl(var(--shadow)/0.12)]"
          >
            <header className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="text-sm font-medium tracking-tight">
                  {job.company}
                </div>
                <div className="mt-1 text-sm text-muted-fg">
                  {job.role}
                  {job.location ? ` • ${job.location}` : ""}
                </div>
              </div>
              <div className="text-xs text-muted-fg">{job.timeframe}</div>
            </header>

            <ul className="mt-5 space-y-2 text-sm text-muted-fg">
              {job.highlights.map((h) => (
                <li key={h} className="list-disc ml-4">
                  {h}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Container>
  );
}

