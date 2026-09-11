import { useState } from "react";
import { cn } from "@/lib/utils";

interface FigureProps {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
}

/** An image with a real, on-brand error state instead of a broken-icon square. */
export function Figure({ src, alt, className, eager = false }: FigureProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          "grid place-items-center bg-kraft p-4 text-center",
          className,
        )}
        role="img"
        aria-label={alt}
      >
        <span className="font-mono text-xs leading-snug text-mute">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      onError={() => setFailed(true)}
      className={cn("h-full w-full object-cover", className)}
    />
  );
}
