import Link from "next/link";
import { footerLegal, footerNavigation, socialLinks } from "@/lib/site-data";

function SocialIcon({ name }: { name: "Instagram" | "Facebook" | "X" }) {
  if (name === "Instagram") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px]"
        fill="currentColor"
      >
        <rect
          x="3.75"
          y="3.75"
          width="16.5"
          height="16.5"
          rx="5"
          stroke="currentColor"
          strokeWidth="1.75"
          fill="none"
        />
        <circle
          cx="12"
          cy="12"
          r="3.75"
          stroke="currentColor"
          strokeWidth="1.75"
          fill="none"
        />
        <circle cx="17.25" cy="6.75" r="1.1" fill="currentColor" />
      </svg>
    );
  }

  if (name === "Facebook") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px]"
        fill="currentColor"
      >
        <path
          d="M13.615 20V12.702H16.063L16.43 9.858H13.615V8.041C13.615 7.218 13.844 6.657 15.025 6.657H16.53V4.113C15.799 4.036 15.064 3.999 14.329 4.003C12.149 4.003 10.657 5.334 10.657 7.777V9.853H8.2V12.697H10.657V20H13.615Z"
        />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-[18px] w-[18px]"
      fill="currentColor"
    >
      <path
        d="M14.315 10.158L20.54 3H19.065L13.66 9.213L9.342 3H4.36L10.889 12.396L4.36 19.905H5.835L11.544 13.341L16.107 19.905H21.089L14.315 10.158ZM12.292 12.484L11.631 11.559L6.37 4.196H8.637L12.882 10.135L13.543 11.06L19.065 18.786H16.798L12.292 12.484Z"
      />
    </svg>
  );
}

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
              Follow TreatMySoul
            </p>
            <div className="mt-4 flex flex-col items-start gap-3 text-sm text-[var(--foreground)] min-[430px]:flex-row min-[430px]:items-center min-[430px]:gap-3 min-[430px]:flex-nowrap">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.ariaLabel}
                  className="inline-flex min-h-10 shrink-0 items-center gap-2 rounded-full border border-[var(--line)] bg-[rgba(255,255,255,0.52)] px-3.5 py-2 text-[var(--deep-green)] transition hover:border-[var(--line-strong)] hover:bg-[rgba(255,255,255,0.78)] hover:text-[#173027] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--deep-green)]"
                >
                  <SocialIcon name={item.name} />
                  <span className="text-sm font-medium leading-none">{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
