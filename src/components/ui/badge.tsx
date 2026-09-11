import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 px-2.5 py-1 font-mono text-xs font-semibold tabular-nums",
  {
    variants: {
      variant: {
        live: "bg-live text-ink",
        ink: "border-2 border-ink text-ink",
        paper: "bg-paper text-ink border-2 border-ink/30",
        outline: "border-2 border-live/70 text-ink",
      },
    },
    defaultVariants: { variant: "ink" },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
