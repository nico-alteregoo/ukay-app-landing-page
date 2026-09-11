import { MisprintHeading } from "@/components/common/MisprintHeading";
import { AuctionCard } from "@/components/common/AuctionCard";
import { CircleMark } from "@/components/common/CircleMark";
import { Button } from "@/components/ui/button";
import { heroAuction, auctions } from "@/data/auctions";

const behindCard = auctions[1]; // adidas samba, a second real item peeking from the rack

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-10 sm:pb-24 sm:pt-16">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
        <div>
          <MisprintHeading className="text-[3rem] leading-[0.92] tracking-tight sm:text-7xl lg:text-[5.5rem]">
            Tara,
            <br />
            mag-ukay
            <br />
            online.
          </MisprintHeading>

          <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-ink/80">
            Bid on one-of-one thrift finds before somebody else grabs them. Real timers, peso
            prices, no markup.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#waitlist">Join the waitlist</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#how-it-works">See how it works</a>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[22rem] py-4 lg:mx-0 lg:ml-auto">
          <div
            aria-hidden
            className="absolute -inset-x-12 -inset-y-14 -z-10 hidden opacity-90 sm:block"
          >
            <CircleMark />
          </div>
          <div
            aria-hidden
            className="absolute -right-10 top-14 hidden w-[16rem] rotate-[6deg] opacity-80 grayscale-[15%] sm:block"
          >
            <AuctionCard auction={behindCard} />
          </div>
          <div className="relative z-10 -translate-x-4">
            <AuctionCard auction={heroAuction} size="large" eagerImage />
          </div>
        </div>
      </div>
    </section>
  );
}
