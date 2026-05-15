import type { Metadata } from "next";

import { Container } from "@/components/container";
import { TriageDiagram } from "@/components/diagrams/triage-diagram";
import { Button } from "@/components/ui/button";
import { aiFailureTriage } from "@/content/case-studies/ai-failure-triage";

export const metadata: Metadata = {
  title: "AI Failure Triage (Sanitized)",
  description: aiFailureTriage.summary,
};

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-[var(--radius-md)] border border-border bg-muted/40 p-4">
      <div className="text-sm font-medium tracking-tight">{title}</div>
      <p className="mt-1 text-sm text-muted-fg">{body}</p>
    </div>
  );
}

export default function AiFailureTriageCaseStudy() {
  return (
    <Container className="py-14 sm:py-20">
      <div className="space-y-3">
        <div className="text-xs font-medium tracking-[0.18em] uppercase text-muted-fg">
          Case study (sanitized)
        </div>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {aiFailureTriage.title}
        </h1>
        <p className="max-w-2xl text-sm text-muted-fg sm:text-base">
          {aiFailureTriage.summary}
        </p>
        <div className="max-w-2xl text-sm text-muted-fg">
          <span className="font-medium text-fg">My role:</span>{" "}
          {aiFailureTriage.myRole}
        </div>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-12">
        <div className="md:col-span-8 space-y-4">
          <div className="rounded-[var(--radius-lg)] border border-border bg-card p-6 shadow-sm shadow-[hsl(var(--shadow)/0.14)]">
            <div className="text-sm font-medium tracking-tight">Context</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-fg">
              {aiFailureTriage.context.map((t) => (
                <li key={t} className="list-disc ml-4">
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[var(--radius-lg)] border border-border bg-card p-6 shadow-sm shadow-[hsl(var(--shadow)/0.14)]">
            <div className="text-sm font-medium tracking-tight">
              Constraints & guardrails
            </div>
            <ul className="mt-4 space-y-2 text-sm text-muted-fg">
              {aiFailureTriage.constraints.map((t) => (
                <li key={t} className="list-disc ml-4">
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-[var(--radius-md)] border border-border bg-muted/40 p-4">
              <div className="text-sm font-medium tracking-tight">
                Guardrails that matter
              </div>
              <ul className="mt-3 space-y-2 text-sm text-muted-fg">
                {aiFailureTriage.guardrails.map((t) => (
                  <li key={t} className="list-disc ml-4">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-[var(--radius-lg)] border border-border bg-card p-6 shadow-sm shadow-[hsl(var(--shadow)/0.14)]">
            <div className="text-sm font-medium tracking-tight">Approach</div>
            <div className="mt-4 grid gap-3">
              {aiFailureTriage.approach.map((s) => (
                <Card key={s.name} title={s.name} body={s.body} />
              ))}
            </div>
          </div>

          <div className="rounded-[var(--radius-lg)] border border-border bg-card p-6 shadow-sm shadow-[hsl(var(--shadow)/0.14)]">
            <div className="text-sm font-medium tracking-tight">
              Pipeline diagram (sanitized)
            </div>
            <p className="mt-2 text-sm text-muted-fg">
              The flow is intentionally generic; the goal is to show the shape
              of the system and where confidence + guardrails live.
            </p>
            <div className="mt-5 overflow-hidden rounded-[var(--radius-lg)] border border-border bg-muted/20 p-4">
              <TriageDiagram />
            </div>
          </div>

          <div className="rounded-[var(--radius-lg)] border border-border bg-card p-6 shadow-sm shadow-[hsl(var(--shadow)/0.14)]">
            <div className="text-sm font-medium tracking-tight">Outcomes</div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {aiFailureTriage.outcomes.map((o) => (
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
              {aiFailureTriage.notes.map((t) => (
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
