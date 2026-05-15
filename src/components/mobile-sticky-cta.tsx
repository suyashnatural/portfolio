"use client";

import { Mail } from "lucide-react";

import { TrackLink } from "@/components/track-link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-bg/85 backdrop-blur supports-[backdrop-filter]:bg-bg/70 md:hidden">
      <div className="mx-auto flex w-full max-w-[1120px] items-center gap-2 px-4 py-3">
        <Button asChild className="flex-1">
          <TrackLink href={`mailto:${siteConfig.email}`} event={{ name: "cta_email" }}>
            <Mail className="size-4" />
            Email
          </TrackLink>
        </Button>
        <Button asChild variant="secondary" className="flex-1">
          <TrackLink href={siteConfig.links.resumePdf} event={{ name: "cta_resume_download" }}>
            Resume
          </TrackLink>
        </Button>
      </div>
    </div>
  );
}

