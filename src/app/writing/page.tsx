import type { Metadata } from "next";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { writingPosts } from "@/content/writing/posts";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Short notes on test platform engineering, AI-assisted QA, and developer productivity.",
};

export default function WritingPage() {
  return (
    <Container className="py-14 sm:py-20">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Writing
        </h1>
        <p className="max-w-2xl text-sm text-muted-fg sm:text-base">
          Short notes on platform quality, LLM evals, and automation systems —
          optimized for clarity and practical takeaways.
        </p>
      </div>

      <div className="mt-10 grid gap-4">
        {writingPosts.map((p) => (
          <article
            key={p.slug}
            className="rounded-[var(--radius-lg)] border border-border bg-card p-6 shadow-sm shadow-[hsl(var(--shadow)/0.12)]"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-base font-medium tracking-tight">{p.title}</h2>
                <p className="mt-1 text-sm text-muted-fg">{p.description}</p>
              </div>
              <div className="text-xs text-muted-fg">{p.date}</div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-muted/60 px-2.5 py-1 text-xs text-muted-fg"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <Button asChild variant="secondary" size="sm">
                <a href={`/writing/${p.slug}`}>Read</a>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
}
