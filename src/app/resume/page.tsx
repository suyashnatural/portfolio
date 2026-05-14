import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export default function ResumePage() {
  return (
    <Container className="py-14 sm:py-20">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Resume
        </h1>
        <p className="max-w-2xl text-sm text-muted-fg sm:text-base">
          Web version is coming soon. For now, download the PDF.
        </p>
      </div>

      <div className="mt-8 rounded-[var(--radius-lg)] border border-border bg-card p-6 shadow-sm shadow-[hsl(var(--shadow)/0.14)]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-medium tracking-tight">
              {siteConfig.name} — Resume (PDF)
            </div>
            <div className="mt-1 text-sm text-muted-fg">{siteConfig.location}</div>
          </div>
          <Button asChild>
            <a href={siteConfig.links.resumePdf}>Download resume</a>
          </Button>
        </div>
        <p className="mt-4 text-sm text-muted-fg">
          If you’d like a tailored version for a specific role, email me and I’ll
          send one.
        </p>
      </div>
    </Container>
  );
}

