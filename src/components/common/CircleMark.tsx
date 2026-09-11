import { cn } from "@/lib/utils";

/**
 * The mark a thrifter draws around the one listing in the classifieds worth calling about.
 * A hand-wobbled circle, not a perfect ring, so it reads as a scribble, not a UI shape.
 */
export function CircleMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 420"
      fill="none"
      aria-hidden
      className={cn("pointer-events-none block h-full w-full", className)}
      preserveAspectRatio="none"
    >
      <path
        d="M 208 18 C 96 14, 22 84, 20 196 C 18 302, 78 388, 202 400 C 320 411, 398 336, 402 214 C 405 104, 336 26, 214 20"
        stroke="#7A1F1A"
        strokeWidth="5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
