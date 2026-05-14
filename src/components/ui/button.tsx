import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "sm";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] text-sm font-medium whitespace-nowrap transition-colors duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-fg hover:bg-accent/90 shadow-sm shadow-[hsl(var(--shadow)/0.25)]",
  secondary:
    "bg-muted text-fg hover:bg-muted/70 border border-border shadow-sm shadow-[hsl(var(--shadow)/0.15)]",
  ghost: "text-fg hover:bg-muted/70",
};

const sizes: Record<ButtonSize, string> = {
  md: "h-10 px-4",
  sm: "h-9 px-3",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, asChild, variant = "primary", size = "md", ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

