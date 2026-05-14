import type { Metadata } from "next";
import "./globals.css";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { seo, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: seo.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: seo.description,
  ...(siteConfig.url ? { metadataBase: new URL(siteConfig.url) } : {}),
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
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
