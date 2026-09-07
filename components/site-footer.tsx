import Link from "next/link";
import { footerLegal, footerNavigation, socialLinks } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] bg-[rgba(255,249,242,0.7)]">
      <div className="page-shell py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_repeat(3,minmax(0,0.7fr))]">
          <div>
            <Link href="/" className="display-font text-3xl tracking-[-0.04em] text-[var(--deep-green)]">
              TreatMySoul
            </Link>
            <p className="mt-4 max-w-md text-sm leading-7 text-[var(--muted)]">
              Thoughtful destination context, retreat comparisons and wellness
              travel guidance for international travellers starting with India.
            </p>
            <p className="mt-5 max-w-md text-sm leading-7 text-[var(--muted)]">
              TreatMySoul may earn a commission when you book through selected
              links, at no additional cost to you.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
              Navigation
            </p>
            <div className="mt-4 space-y-3 text-sm text-[var(--foreground)]">
              {footerNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block transition hover:text-[var(--deep-green)]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
              Legal
            </p>
            <div className="mt-4 space-y-3 text-sm text-[var(--foreground)]">
              {footerLegal.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block transition hover:text-[var(--deep-green)]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
              Social
            </p>
            <div className="mt-4 space-y-3 text-sm text-[var(--foreground)]">
              {socialLinks.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-3"
                >
                  <span>{item.label}</span>
                  <span className="rounded-full border border-[var(--line)] px-2 py-1 text-[11px] text-[var(--muted)]">
                    Coming later
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
