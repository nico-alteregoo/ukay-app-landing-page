import { MisprintHeading } from "@/components/common/MisprintHeading";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

const widthClass = {
  narrow: "sm:max-w-[16rem]",
  normal: "sm:max-w-[19rem]",
  wide: "sm:max-w-[22rem]",
} as const;

export function SocialProof() {
  return (
    <section aria-labelledby="proof-heading" className="bg-kraft/60 py-20 sm:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <MisprintHeading as="h2" id="proof-heading" className="text-4xl leading-[0.95] sm:text-5xl">
          Already claimed.
        </MisprintHeading>

        <div className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-10 sm:justify-start">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              style={{ transform: `rotate(${t.rotate}deg)` }}
              className={cn(
                "relative w-full border-2 border-ink/70 bg-paper p-5 shadow-[3px_4px_0_0_rgba(43,33,27,0.12)] transition-transform duration-200 hover:rotate-0",
                widthClass[t.width],
              )}
            >
              <span
                aria-hidden
                className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-ink/70 bg-paper"
              />
              <blockquote className="font-sans text-[0.95rem] leading-snug text-ink">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-4 border-t border-ink/20 pt-3">
                <p className="text-sm font-semibold text-ink">
                  {t.name}, {t.city}
                </p>
                <p className="mt-1 font-mono text-xs text-oxblood">{t.stat}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
