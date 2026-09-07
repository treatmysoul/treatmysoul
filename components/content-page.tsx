import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";

type ContentLink = {
  title: string;
  description: string;
  href: string;
};

type ContentPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  introduction: string;
  highlights: string[];
  links: ContentLink[];
  cta: {
    label: string;
    href: string;
  };
  asideTitle: string;
  asideText: string;
  tags?: string[];
};

export function ContentPage({
  eyebrow,
  title,
  description,
  introduction,
  highlights,
  links,
  cta,
  asideTitle,
  asideText,
  tags,
}: ContentPageProps) {
  return (
    <main className="page-shell py-16 md:py-24">
      <section className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.82fr)] lg:items-start">
        <div>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />

          <p className="mt-8 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
            {introduction}
          </p>

          {tags?.length ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--line)] bg-[rgba(255,255,255,0.68)] px-4 py-2 text-sm text-[var(--muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}

          <div className="mt-10 rounded-[1.75rem] border border-[var(--line)] bg-[rgba(255,251,246,0.76)] p-6 md:p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
              What this page is shaping
            </p>
            <ul className="mt-5 space-y-4 text-base leading-7 text-[var(--muted)]">
              {highlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--sand)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="soft-card rounded-[1.75rem] p-6 md:p-7">
          <p className="section-kicker">{asideTitle}</p>
          <p className="mt-5 text-base leading-8 text-[var(--muted)]">
            {asideText}
          </p>
          <Link
            href={cta.href}
            className="mt-8 inline-flex items-center rounded-full bg-[var(--deep-green)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#173027] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--deep-green)]"
          >
            {cta.label}
          </Link>
        </aside>
      </section>

      <section className="mt-14 md:mt-16">
        <div className="grid gap-5 lg:grid-cols-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-[1.75rem] border border-[var(--line)] bg-[rgba(255,251,246,0.72)] p-6 transition hover:-translate-y-1 hover:border-[var(--line-strong)]"
            >
              <h2 className="display-font text-3xl tracking-[-0.04em] text-[var(--deep-green)]">
                {link.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                {link.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
