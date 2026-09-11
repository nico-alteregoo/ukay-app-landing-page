import { useState } from "react";
import { X } from "lucide-react";

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="relative flex items-center justify-center gap-3 bg-ink px-10 py-2.5 text-center font-sans text-xs font-medium text-paper sm:text-sm">
      <p>
        UKAY opens in Metro Manila this November.{" "}
        <a href="#waitlist" className="underline underline-offset-2 hover:text-live">
          Join the waitlist
        </a>{" "}
        to bid on day one.
      </p>
      <button
        type="button"
        onClick={() => setDismissed(true)}
        aria-label="Dismiss this announcement"
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-paper/80 transition-colors hover:text-live"
      >
        <X className="h-4 w-4" aria-hidden />
      </button>
    </div>
  );
}
