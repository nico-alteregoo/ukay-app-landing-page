import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const links = [
  { href: "#auctions", label: "Auctions" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#categories", label: "Categories" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-display text-2xl font-black tracking-tight text-oxblood">
          UKAY
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-sans text-sm font-medium text-ink/80 transition-colors hover:text-oxblood"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild size="sm">
            <a href="#waitlist">Join the waitlist</a>
          </Button>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <button
              type="button"
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center border-2 border-ink text-ink lg:hidden"
            >
              <Menu className="h-5 w-5" aria-hidden />
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Menu</DialogTitle>
            <nav aria-label="Mobile" className="flex flex-col gap-1">
              {links.map((l) => (
                <DialogClose key={l.href} asChild>
                  <a
                    href={l.href}
                    className="border-b border-ink/15 py-4 font-display text-2xl font-bold text-ink"
                  >
                    {l.label}
                  </a>
                </DialogClose>
              ))}
            </nav>
            <DialogClose asChild>
              <Button asChild size="lg" className="mt-auto w-full">
                <a href="#waitlist">Join the waitlist</a>
              </Button>
            </DialogClose>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
}
