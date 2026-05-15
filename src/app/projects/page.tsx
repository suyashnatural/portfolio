import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { projects } from "@/content/projects";

export const metadata = {
  title: "Projects",
  description:
    "Selected public repositories that support the portfolio narrative.",
};

export default function ProjectsPage() {
  return (
    <Container className="py-14 sm:py-20">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Projects
        </h1>
        <p className="max-w-2xl text-sm text-muted-fg sm:text-base">
          A small, curated set of public repos. The goal is signal, not volume.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-12">
        {projects.map((p) => (
          <article
            key={p.href}
            className="md:col-span-6 rounded-[var(--radius-lg)] border border-border bg-card p-6 shadow-sm shadow-[hsl(var(--shadow)/0.12)]"
          >
            <div className="text-sm font-medium tracking-tight">{p.name}</div>
            <p className="mt-1 text-sm text-muted-fg">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-muted/60 px-2.5 py-1 text-xs text-muted-fg"
                >
                  {t}
                </span>
              ))}
            </div>
            {p.note ? (
              <div className="mt-4 rounded-[var(--radius-md)] border border-border bg-muted/50 p-3 text-xs text-muted-fg">
                {p.note}
              </div>
            ) : null}
            <div className="mt-6">
              <Button asChild variant="secondary" size="sm">
                <a href={p.href} target="_blank" rel="noreferrer">
                  View on GitHub
                </a>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
}

