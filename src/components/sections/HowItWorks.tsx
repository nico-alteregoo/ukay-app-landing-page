import { MisprintHeading } from "@/components/common/MisprintHeading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { sellingSteps, buyingSteps, type Step } from "@/data/steps";

function StepRow({ steps }: { steps: Step[] }) {
  return (
    <ol className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s) => (
        <li key={s.n} className="relative border-t-2 border-ink pt-4">
          <span className="font-mono text-sm font-semibold text-oxblood">
            {String(s.n).padStart(2, "0")}
          </span>
          <h3 className="mt-2 font-display text-2xl font-bold leading-tight text-ink">
            {s.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink/75">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}

export function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-heading" className="bg-kraft/60 py-20 sm:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <MisprintHeading as="h2" id="how-heading" className="text-4xl leading-[0.95] sm:text-5xl">
          How it works.
        </MisprintHeading>

        <Tabs defaultValue="selling" className="mt-10">
          <TabsList>
            <TabsTrigger value="selling">Selling</TabsTrigger>
            <TabsTrigger value="buying">Buying</TabsTrigger>
          </TabsList>

          <TabsContent value="selling">
            <StepRow steps={sellingSteps} />
          </TabsContent>
          <TabsContent value="buying">
            <StepRow steps={buyingSteps} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
