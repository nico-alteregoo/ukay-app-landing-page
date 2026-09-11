import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2, Check, Copy } from "lucide-react";
import { toast } from "sonner";
import { MisprintHeading } from "@/components/common/MisprintHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Add your name so we can greet you properly."),
  email: z
    .string()
    .trim()
    .min(1, "We need an email to send your invite.")
    .email("That email's missing an @ or a domain. Check it?"),
  intent: z.enum(["buy", "sell", "both"], {
    errorMap: () => ({ message: "Pick one so we know what to show you first." }),
  }),
});

type FormValues = z.infer<typeof schema>;

const intentOptions: { value: FormValues["intent"]; label: string }[] = [
  { value: "buy", label: "Mostly buy" },
  { value: "sell", label: "Mostly sell" },
  { value: "both", label: "Both" },
];

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function Waitlist() {
  const [result, setResult] = useState<{ position: number; name: string } | null>(null);
  const reduced = usePrefersReducedMotion();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(values: FormValues) {
    await sleep(1200);
    const hash = Array.from(values.email).reduce((acc, c) => acc + c.charCodeAt(0), 0);
    const position = 200 + (hash % 340);
    setResult({ position, name: values.name.trim().split(" ")[0] });
  }

  async function copyInvite() {
    const line = `I just joined the UKAY waitlist, the live bidding thrift app launching in Manila. Join with me: ukay.app/waitlist`;
    try {
      await navigator.clipboard.writeText(line);
      toast("Copied. Paste it in your group chat.");
    } catch {
      toast("Couldn't copy that automatically. Select and copy it manually.");
    }
  }

  return (
    <section id="waitlist" aria-labelledby="waitlist-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-[640px] px-5 sm:px-8">
        <div className="text-center">
          <MisprintHeading as="h2" id="waitlist-heading" className="text-4xl leading-[0.95] sm:text-5xl">
            Get in before it opens.
          </MisprintHeading>
          <p className="mx-auto mt-4 max-w-[42ch] text-base leading-relaxed text-ink/75">
            Waitlist members get the invite before the app is public, and first pick of the
            opening drop.
          </p>
        </div>

        <div className="relative mt-10 overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            {!result ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                initial={reduced ? false : { opacity: 1, y: 0 }}
                exit={reduced ? { opacity: 0 } : { opacity: 0, y: -18, rotate: -1 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-5 border-2 border-ink bg-white p-6 shadow-[4px_5px_0_0_rgba(43,33,27,0.12)] sm:p-8"
              >
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    autoComplete="name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    {...register("name")}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-sm font-medium text-oxblood">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-sm font-medium text-oxblood">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <Controller
                  control={control}
                  name="intent"
                  render={({ field }) => (
                    <fieldset className="flex flex-col gap-2">
                      <legend className="text-sm font-semibold text-ink">
                        Are you here to buy, sell, or both?
                      </legend>
                      <div
                        role="radiogroup"
                        aria-describedby={errors.intent ? "intent-error" : undefined}
                        className="grid grid-cols-3 gap-2"
                      >
                        {intentOptions.map((opt) => {
                          const checked = field.value === opt.value;
                          return (
                            <label
                              key={opt.value}
                              className={cn(
                                "relative flex h-12 cursor-pointer items-center justify-center border-2 px-2 text-center font-sans text-sm font-semibold transition-colors",
                                checked
                                  ? "border-oxblood bg-oxblood text-paper"
                                  : "border-ink/30 text-ink hover:border-ink",
                              )}
                            >
                              <input
                                type="radio"
                                name="intent"
                                value={opt.value}
                                checked={checked}
                                onChange={() => field.onChange(opt.value)}
                                className="sr-only"
                              />
                              {opt.label}
                            </label>
                          );
                        })}
                      </div>
                      {errors.intent && (
                        <p id="intent-error" className="text-sm font-medium text-oxblood">
                          {errors.intent.message}
                        </p>
                      )}
                    </fieldset>
                  )}
                />

                <Button type="submit" size="lg" disabled={isSubmitting} className="mt-2 w-full">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 motion-safe:animate-spin" aria-hidden />
                      Saving your spot…
                    </>
                  ) : (
                    "Join the waitlist"
                  )}
                </Button>
                <p className="text-center text-xs text-mute">
                  No spam. One email when the app is ready for you.
                </p>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.92, rotate: -2 }}
                animate={reduced ? { opacity: 1 } : { opacity: 1, scale: 1, rotate: -1 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="border-2 border-ink bg-white p-6 text-center shadow-[4px_5px_0_0_rgba(43,33,27,0.12)] sm:p-10"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center bg-live">
                  <Check className="h-6 w-6 text-ink" aria-hidden />
                </span>
                <p className="mt-5 font-display text-3xl font-black leading-none text-ink sm:text-4xl">
                  You're #{result.position} in line.
                </p>
                <p className="mt-3 text-base text-ink/75">
                  Salamat, {result.name}. We'll text you the invite before launch day.
                </p>
                <div className="mt-6 border-t-2 border-ink/15 pt-6">
                  <p className="text-sm text-ink/75">
                    Move up the list: get a friend to join with your name and you both jump 20
                    spots.
                  </p>
                  <Button variant="outline" size="default" onClick={copyInvite} className="mt-4">
                    <Copy className="h-4 w-4" aria-hidden />
                    Copy invite line
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
