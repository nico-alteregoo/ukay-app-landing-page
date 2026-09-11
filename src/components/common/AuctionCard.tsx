import { Eye, Gavel } from "lucide-react";
import type { Auction } from "@/data/auctions";
import { useCountdown } from "@/hooks/useCountdown";
import { useLiveBid } from "@/hooks/useLiveBid";
import { peso, clock } from "@/lib/format";
import { Figure } from "./Figure";
import { cn } from "@/lib/utils";

interface AuctionCardProps {
  auction: Auction;
  size?: "default" | "large";
  eagerImage?: boolean;
}

export function AuctionCard({ auction, size = "default", eagerImage = false }: AuctionCardProps) {
  const countdown = useCountdown(auction.endsInSeconds);
  const isTicking = auction.state !== "sold";
  const { bid, count, flash } = useLiveBid(auction.currentBid, auction.bidCount, isTicking);

  return (
    <article
      style={{ transform: `rotate(${auction.rotate}deg)` }}
      className={cn(
        "w-full shrink-0 border border-ink/15 bg-white p-2.5 shadow-[3px_4px_0_0_rgba(43,33,27,0.12)] transition-transform duration-200 hover:rotate-0 hover:shadow-[4px_6px_0_0_rgba(43,33,27,0.18)]",
        size === "large" ? "max-w-[22rem]" : "max-w-[18rem]",
      )}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-kraft">
        <Figure
          src={auction.image}
          alt={auction.alt}
          eager={eagerImage}
          className={cn(
            "transition-[filter,opacity] duration-300",
            auction.state === "sold" && "grayscale opacity-70",
          )}
        />
        {auction.state === "sold" && (
          <span
            aria-hidden
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 border-4 border-ink px-3 py-1 font-display text-2xl font-black tracking-wide text-ink/90"
          >
            SOLD
          </span>
        )}
        {auction.state === "live" && (
          <span className="absolute left-2 top-2 bg-live px-2 py-1 font-mono text-[0.7rem] font-bold text-ink">
            LIVE
          </span>
        )}
        {auction.state === "ending" && (
          <span className="absolute left-2 top-2 bg-live px-2 py-1 font-mono text-[0.7rem] font-bold text-ink">
            ENDING SOON
          </span>
        )}
      </div>

      <div className="px-1 pb-1 pt-3">
        <p className="font-mono text-[0.7rem] uppercase tracking-wide text-mute">
          {auction.brand} · {auction.city}
        </p>
        <h3 className="mt-0.5 font-display text-xl font-bold leading-tight text-ink">
          {auction.title}
        </h3>
        <p className="mt-0.5 text-sm text-ink/70">{auction.detail}</p>

        {auction.state !== "sold" ? (
          <>
            <div className="mt-3 flex items-baseline justify-between gap-2">
              <span
                className={cn(
                  "bg-live px-1.5 py-0.5 font-mono text-lg font-semibold tabular-nums text-ink",
                  flash && "motion-safe:animate-flash-live",
                )}
              >
                {peso(bid)}
              </span>
              <span aria-hidden className="font-mono text-sm tabular-nums text-ink">
                {isTicking ? clock(countdown.totalSeconds) : "00:00"}
              </span>
            </div>
            <p className="sr-only" aria-live="off">
              Ends in about {Math.max(1, Math.round(countdown.totalSeconds / 60))} minutes.
            </p>
            <div className="mt-2 flex items-center justify-between font-mono text-xs text-mute">
              <span className="flex items-center gap-1">
                <Gavel className="h-3.5 w-3.5" aria-hidden /> {count} bids
              </span>
              <span className="flex items-center gap-1">
                <Eye className="h-3.5 w-3.5" aria-hidden /> {auction.watcherCount} watching
              </span>
            </div>
          </>
        ) : (
          <>
            <div className="mt-3 flex items-baseline justify-between gap-2">
              <span className="font-mono text-lg font-semibold tabular-nums text-ink">
                {peso(auction.currentBid)} final
              </span>
              <span className="font-mono text-xs text-mute">{auction.bidCount} bids</span>
            </div>
            <p className="mt-2 font-mono text-xs text-mute">
              Won by {auction.winnerName} · {auction.winnerCity} · {auction.soldAgo}
            </p>
          </>
        )}
      </div>
    </article>
  );
}
