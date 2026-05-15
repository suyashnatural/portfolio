import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/content/case-studies";
import { TrackLink } from "@/components/track-link";

export default function CaseStudiesPage() {
  return (
    <Container className="py-14 sm:py-20">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Case Studies
        </h1>
        <p className="max-w-2xl text-sm text-muted-fg sm:text-base">
          Deep dives focused on constraints, architecture, adoption, and outcomes.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-12">
        <div className="md:col-span-8 grid gap-4">
          {caseStudies.map((cs) => (
            <div
              key={cs.slug}
              className="rounded-[var(--radius-lg)] border border-border bg-card p-6 shadow-sm shadow-[hsl(var(--shadow)/0.14)]"
            >
              <div className="text-sm font-medium tracking-tight">{cs.title}</div>
              <p className="mt-1 text-sm text-muted-fg">{cs.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {cs.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-muted/60 px-2.5 py-1 text-xs text-muted-fg"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <Button asChild>
                  <TrackLink
                    href={`/case-studies/${cs.slug}`}
                    event={{ name: "cta_case_study_open", slug: cs.slug }}
                  >
                    Read
                  </TrackLink>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="md:col-span-4 rounded-[var(--radius-lg)] border border-border bg-muted/50 p-6">
          <div className="text-sm font-medium tracking-tight">What’s next</div>
          <p className="mt-2 text-sm text-muted-fg">
            Next: 1–2 more case studies, sharper diagrams, and tighter storytelling.
          </p>
        </div>
      </div>
    </Container>
  );
}
