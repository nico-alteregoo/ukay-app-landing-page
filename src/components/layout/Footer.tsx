import { Instagram, Facebook, Music2, Apple, PlayCircle } from "lucide-react";

const company = [
  { label: "About us", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Press", href: "#" },
  { label: "Contact", href: "#" },
];

const policies = [
  { label: "Privacy policy", href: "#" },
  { label: "Terms of use", href: "#" },
  { label: "Buyer protection", href: "#" },
];

const socials = [
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "TikTok", href: "#", Icon: Music2 },
  { label: "Facebook", href: "#", Icon: Facebook },
];

export function Footer() {
  return (
    <footer className="on-dark bg-footer text-paper">
      <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2">
            <p className="font-display text-3xl font-black tracking-tight">UKAY</p>
            <p className="mt-3 max-w-[32ch] text-sm leading-relaxed text-footer-mute">
              The live bidding marketplace for pre-owned finds, built for the way Filipinos
              already thrift: fast, competitive, and worth the dig.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="flex items-center gap-2 border border-footer-mute/50 px-3 py-2 text-xs text-footer-mute">
                <Apple className="h-4 w-4" aria-hidden />
                Coming soon to the App Store
              </span>
              <span className="flex items-center gap-2 border border-footer-mute/50 px-3 py-2 text-xs text-footer-mute">
                <PlayCircle className="h-4 w-4" aria-hidden />
                Coming soon to Google Play
              </span>
            </div>
          </div>

          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-wide text-footer-mute">
              Company
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {company.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-paper/90 hover:text-live">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-wide text-footer-mute">
              Policies
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {policies.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-paper/90 hover:text-live">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-footer-mute/30 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-footer-mute">
            © 2026 Ukay Technologies Inc. Made in the Philippines.
          </p>
          <div className="flex gap-4">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center border border-footer-mute/50 text-paper/90 transition-colors hover:border-live hover:text-live"
              >
                <Icon className="h-4 w-4" aria-hidden />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
