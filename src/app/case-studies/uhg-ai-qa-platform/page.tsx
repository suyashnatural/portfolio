import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { uhgAiQaPlatform } from "@/content/case-studies/uhg-ai-qa-platform";

export default function UhgAiQaPlatformCaseStudy() {
  return (
    <Container className="py-14 sm:py-20">
      <div className="space-y-3">
        <div className="text-xs font-medium tracking-[0.18em] uppercase text-muted-fg">
          Case study (sanitized)
        </div>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {uhgAiQaPlatform.title}
        </h1>
        <p className="max-w-2xl text-sm text-muted-fg sm:text-base">
          {uhgAiQaPlatform.summary}
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-12">
        <div className="md:col-span-8 space-y-4">
          <div className="rounded-[var(--radius-lg)] border border-border bg-card p-6 shadow-sm shadow-[hsl(var(--shadow)/0.14)]">
            <div className="text-sm font-medium tracking-tight">Context</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-fg">
              {uhgAiQaPlatform.context.map((t) => (
                <li key={t} className="list-disc ml-4">
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[var(--radius-lg)] border border-border bg-card p-6 shadow-sm shadow-[hsl(var(--shadow)/0.14)]">
            <div className="text-sm font-medium tracking-tight">Goals</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-fg">
              {uhgAiQaPlatform.goals.map((t) => (
                <li key={t} className="list-disc ml-4">
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[var(--radius-lg)] border border-border bg-card p-6 shadow-sm shadow-[hsl(var(--shadow)/0.14)]">
            <div className="text-sm font-medium tracking-tight">
              System overview
            </div>
            <div className="mt-4 grid gap-3">
              {uhgAiQaPlatform.system.map((s) => (
                <div
                  key={s.name}
                  className="rounded-[var(--radius-md)] border border-border bg-muted/40 p-4"
                >
                  <div className="text-sm font-medium tracking-tight">
                    {s.name}
                  </div>
                  <p className="mt-1 text-sm text-muted-fg">{s.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[var(--radius-lg)] border border-border bg-card p-6 shadow-sm shadow-[hsl(var(--shadow)/0.14)]">
            <div className="text-sm font-medium tracking-tight">Outcomes</div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {uhgAiQaPlatform.outcomes.map((o) => (
                <div
                  key={o.label}
                  className="rounded-[var(--radius-md)] border border-border bg-muted/40 px-4 py-3"
                >
                  <div className="text-sm font-medium tracking-tight">
                    {o.value}
                  </div>
                  <div className="text-xs text-muted-fg">{o.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="md:col-span-4 space-y-4">
          <div className="rounded-[var(--radius-lg)] border border-border bg-muted/50 p-6">
            <div className="text-sm font-medium tracking-tight">Sanitization</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-fg">
              {uhgAiQaPlatform.notes.map((t) => (
                <li key={t} className="list-disc ml-4">
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <Button asChild variant="secondary" className="w-full">
            <a href="/case-studies">Back to case studies</a>
          </Button>
        </aside>
      </div>
    </Container>
  );
}
