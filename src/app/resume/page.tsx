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

      <div className="mt-6 grid gap-4 md:grid-cols-12">
        <div className="md:col-span-8 rounded-[var(--radius-lg)] border border-border bg-muted/50 p-6">
          <div className="text-sm font-medium tracking-tight">Highlights</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-fg">
            <li className="list-disc ml-4">
              Built an AI-driven test automation platform with org-wide adoption;
              reduced manual QA effort (~80% → 20%) and accelerated releases (~4×).
            </li>
            <li className="list-disc ml-4">
              Shipped LLM-based failure triage using execution artifacts (screenshots/videos)
              with confidence scoring; reduced investigation time ~70%.
            </li>
            <li className="list-disc ml-4">
              Deep expertise in Cypress, Playwright, Selenium, REST APIs, CI/CD, and cloud
              (Azure/AWS) in healthcare and genomics domains.
            </li>
          </ul>
        </div>
        <div className="md:col-span-4 rounded-[var(--radius-lg)] border border-border bg-card p-6 shadow-sm shadow-[hsl(var(--shadow)/0.12)]">
          <div className="text-sm font-medium tracking-tight">Certifications</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-fg">
            <li className="list-disc ml-4">PSM-I (Scrum.org)</li>
            <li className="list-disc ml-4">ISTQB Foundation</li>
          </ul>
          <div className="mt-5 text-xs text-muted-fg">
            Full details in the PDF.
          </div>
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-[var(--radius-lg)] border border-border bg-card shadow-sm shadow-[hsl(var(--shadow)/0.14)]">
        <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
          <div className="text-sm font-medium tracking-tight">Preview</div>
          <a
            className="text-sm text-muted-fg hover:text-fg"
            href={siteConfig.links.resumePdf}
            target="_blank"
            rel="noreferrer"
          >
            Open in new tab
          </a>
        </div>
        <object
          data={siteConfig.links.resumePdf}
          type="application/pdf"
          className="h-[70vh] w-full bg-muted"
        >
          <div className="p-6 text-sm text-muted-fg">
            PDF preview isn’t supported in this browser.{" "}
            <a className="underline" href={siteConfig.links.resumePdf}>
              Download the resume
            </a>
            .
          </div>
        </object>
      </div>
    </Container>
  );
}
