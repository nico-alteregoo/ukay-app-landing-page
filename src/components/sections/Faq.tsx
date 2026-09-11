import { MisprintHeading } from "@/components/common/MisprintHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";

export function Faq() {
  return (
    <section aria-labelledby="faq-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-[760px] px-5 sm:px-8">
        <MisprintHeading as="h2" id="faq-heading" className="text-4xl leading-[0.95] sm:text-5xl">
          Questions before you bid.
        </MisprintHeading>

        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f) => (
            <AccordionItem key={f.id} value={f.id}>
              <AccordionTrigger>{f.question}</AccordionTrigger>
              <AccordionContent>{f.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
