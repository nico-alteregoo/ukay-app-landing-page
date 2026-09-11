import { MisprintHeading } from "@/components/common/MisprintHeading";
import { AuctionCard } from "@/components/common/AuctionCard";
import { Button } from "@/components/ui/button";
import { heroAuction } from "@/data/auctions";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-10 sm:pb-24 sm:pt-16">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-8">
        <div>
          <MisprintHeading className="text-[2.75rem] leading-[0.92] tracking-tight sm:text-6xl lg:text-[5.5rem]">
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

        <div className="relative mx-auto w-full max-w-[19rem] lg:mx-0 lg:ml-auto lg:mr-8">
          <div
            aria-hidden
            className="absolute -right-4 top-6 hidden h-[26rem] w-44 rotate-3 border-2 border-ink/25 bg-white p-2 shadow-[4px_5px_0_0_rgba(43,33,27,0.1)] sm:block"
          >
            <div className="h-full w-full bg-kraft" />
          </div>
          <div className="relative">
            <AuctionCard auction={heroAuction} size="large" eagerImage />
          </div>
        </div>
      </div>
    </section>
  );
}
