import * as React from "react";

import { cn } from "@/lib/utils";

export function Prose({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "prose prose-invert max-w-none prose-headings:tracking-tight prose-p:text-muted-fg prose-li:text-muted-fg prose-strong:text-fg",
        "prose-a:text-fg prose-a:underline-offset-4 hover:prose-a:text-fg/90",
        "prose-code:rounded prose-code:bg-muted/60 prose-code:px-1 prose-code:py-0.5 prose-code:text-fg",
        "prose-pre:rounded-[var(--radius-lg)] prose-pre:border prose-pre:border-border prose-pre:bg-card",
        "prose-hr:border-border",
        className,
      )}
      {...props}
    />
  );
}

