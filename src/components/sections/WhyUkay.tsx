import { Tag, Wallet, Gavel, Sparkles, Scale, ShieldCheck } from "lucide-react";
import { MisprintHeading } from "@/components/common/MisprintHeading";
import { sellerProps, buyerProps, type ValueProp } from "@/data/valueProps";

const sellerIcons = [Tag, Wallet, Gavel];
const buyerIcons = [Sparkles, Scale, ShieldCheck];

function PropList({ items, icons }: { items: ValueProp[]; icons: typeof sellerIcons }) {
  return (
    <ul className="flex flex-col gap-6">
      {items.map((p, i) => {
        const Icon = icons[i];
        return (
          <li key={p.title} className="flex gap-4">
            <Icon className="mt-1 h-5 w-5 shrink-0 text-oxblood" aria-hidden />
            <div>
              <p className="font-display text-xl font-bold leading-tight text-ink">{p.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink/75">{p.body}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export function WhyUkay() {
  return (
    <section aria-labelledby="why-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <MisprintHeading as="h2" id="why-heading" className="text-4xl leading-[0.95] sm:text-5xl">
          Why people pick UKAY.
        </MisprintHeading>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-0">
          <div className="lg:pr-14">
            <p className="font-mono text-xs font-semibold uppercase tracking-wide text-mute">
              If you're selling
            </p>
            <div className="mt-5">
              <PropList items={sellerProps} icons={sellerIcons} />
            </div>
          </div>

          <div className="border-t-2 border-ink/15 pt-12 lg:border-l-2 lg:border-t-0 lg:pl-14 lg:pt-0">
            <p className="font-mono text-xs font-semibold uppercase tracking-wide text-mute">
              If you're buying
            </p>
            <div className="mt-5">
              <PropList items={buyerProps} icons={buyerIcons} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
