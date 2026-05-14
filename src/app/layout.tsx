import type { Metadata } from "next";
import "./globals.css";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SkipLink } from "@/components/skip-link";
import { ThemeProvider } from "@/components/theme-provider";
import { seo, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: seo.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: seo.description,
  metadataBase: new URL(siteConfig.url || siteConfig.defaultUrl),
  openGraph: {
    title: seo.title,
    description: seo.description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    email: `mailto:${siteConfig.email}`,
    url: siteConfig.url || undefined,
    sameAs: [siteConfig.links.linkedin, siteConfig.links.github],
    jobTitle: "Lead SDET / Test Platform Engineer",
  };

  return (
    <html
      lang="en"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full">
        <ThemeProvider>
          <div className="min-h-full flex flex-col">
            <SiteHeader />
            <SkipLink />
            <main id="content" className="flex-1">
              {children}
            </main>
            <SiteFooter />
          </div>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
      </body>
    </html>
  );
}
