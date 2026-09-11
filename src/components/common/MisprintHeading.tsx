import { cn } from "@/lib/utils";
import type { ElementType, ReactNode } from "react";

interface MisprintHeadingProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  id?: string;
}

/**
 * Big Shoulders headline with a faint oxblood duplicate offset by a pixel or two,
 * the way a stall tarpaulin looks when the print registration slips.
 */
export function MisprintHeading({ as: Tag = "h1", className, children, id }: MisprintHeadingProps) {
  return (
    <Tag id={id} className={cn("relative isolate inline-block font-display font-black", className)}>
      <span
        aria-hidden
        className="pointer-events-none absolute -left-[3px] top-[2px] -z-10 hidden text-oxblood/40 sm:block"
      >
        {children}
      </span>
      {children}
    </Tag>
  );
}
