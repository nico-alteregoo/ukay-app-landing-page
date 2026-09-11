import { MisprintHeading } from "@/components/common/MisprintHeading";
import { AuctionCard } from "@/components/common/AuctionCard";
import { auctions } from "@/data/auctions";

export function AuctionShowcase() {
  return (
    <section id="auctions" aria-labelledby="auctions-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_2.2fr] lg:gap-10">
          <div>
            <MisprintHeading
              as="h2"
              id="auctions-heading"
              className="text-4xl leading-[0.95] sm:text-5xl"
            >
              The rack is
              <br />
              live right now.
            </MisprintHeading>
            <p className="mt-4 max-w-[34ch] text-base leading-relaxed text-ink/75">
              Four finds on the block. The timers are real, not a demo loop, so what you see is
              what's about to sell.
            </p>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute -top-4 left-0 right-0 hidden h-px bg-ink/25 sm:block"
            />
            <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 pt-6 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 xl:grid-cols-4">
              {auctions.map((a) => (
                <div key={a.id} className="w-[80vw] shrink-0 snap-start sm:w-auto">
                  <AuctionCard auction={a} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start gap-3 border-t-2 border-ink/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-xl font-bold text-ink">
            Get outbid and the app doesn't let you miss it.
          </p>
          <span className="inline-flex items-center gap-2 border-2 border-live px-3 py-1.5 font-mono text-xs font-semibold text-ink">
            OUTBID · Trish just bid {"₱"}1,300
          </span>
        </div>
      </div>
    </section>
  );
}
