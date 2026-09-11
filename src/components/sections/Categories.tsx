import { MisprintHeading } from "@/components/common/MisprintHeading";
import { Figure } from "@/components/common/Figure";
import { categories } from "@/data/categories";
import { cn } from "@/lib/utils";

export function Categories() {
  return (
    <section id="categories" aria-labelledby="categories-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <MisprintHeading as="h2" id="categories-heading" className="text-4xl leading-[0.95] sm:text-5xl">
          The staples, on the rack.
        </MisprintHeading>
        <p className="mt-4 max-w-[46ch] text-base leading-relaxed text-ink/75">
          Six categories carry the bulk of every drop. Start wherever your closet already leans.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {categories.map((c) => (
            <a
              key={c.id}
              href="#waitlist"
              className={cn(
                "group relative block overflow-hidden border-2 border-ink/70",
                c.span === "wide" ? "col-span-2" : "col-span-1",
              )}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Figure
                  src={c.image}
                  alt={c.alt}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span
                style={{ transform: `rotate(${c.rotate}deg)` }}
                className="absolute -top-2 left-3 bg-paper px-2.5 py-1 shadow-[2px_2px_0_0_rgba(43,33,27,0.18)] transition-transform duration-200 group-hover:-translate-y-0.5"
              >
                <span className="block font-display text-lg font-bold leading-none text-ink sm:text-xl">
                  {c.name}
                </span>
                <span className="mt-0.5 block font-mono text-[0.65rem] text-mute">
                  {c.liveCount} live
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
