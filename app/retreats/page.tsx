import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata, siteTitle } from "@/lib/metadata";
import { retreatCards } from "@/lib/site-data";

export const metadata = createPageMetadata({
  title: siteTitle("Retreats"),
  description:
    "Explore TreatMySoul's first wellness retreat categories, starting with yoga, meditation and Ayurveda.",
  path: "/retreats",
});

export default function RetreatsPage() {
  return (
    <main className="page-shell py-16 md:py-24">
      <SectionHeading
        eyebrow="Retreats"
        title="Retreat styles built for clearer decisions."
        description="TreatMySoul is starting with the retreat types most often researched by first-time wellness travellers."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {retreatCards.map((card) => {
          const inner = (
            <>
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                  {card.featured ? "Available now" : "Planned"}
                </p>
                {!card.href ? (
                  <span className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--muted)]">
                    Coming later
                  </span>
                ) : null}
              </div>
              <h2 className="display-font mt-6 text-3xl tracking-[-0.04em] text-[var(--deep-green)]">
                {card.title}
              </h2>
              <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                {card.description}
              </p>
            </>
          );

          const className =
            "rounded-[1.75rem] border border-[var(--line)] bg-[rgba(255,251,246,0.74)] p-6 transition hover:-translate-y-1 hover:border-[var(--line-strong)] md:p-7";

          if (!card.href) {
            return (
              <article key={card.title} className={className}>
                {inner}
              </article>
            );
          }

          return (
            <Link key={card.title} href={card.href} className={className}>
              {inner}
            </Link>
          );
        })}
      </div>
    </main>
  );
}
