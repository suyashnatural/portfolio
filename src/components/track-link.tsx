"use client";

import * as React from "react";

import { track, type AnalyticsEvent } from "@/lib/analytics";

export function TrackLink({
  event,
  onClick,
  ...props
}: React.ComponentPropsWithoutRef<"a"> & { event: AnalyticsEvent }) {
  return (
    <a
      {...props}
      onClick={(e) => {
        track(event);
        onClick?.(e);
      }}
    />
  );
}

