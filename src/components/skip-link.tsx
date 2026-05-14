import Link from "next/link";

export function SkipLink() {
  return (
    <Link
      href="#content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[var(--radius-md)] focus:border focus:border-border focus:bg-card focus:px-3 focus:py-2 focus:text-sm focus:shadow-sm"
    >
      Skip to content
    </Link>
  );
}

