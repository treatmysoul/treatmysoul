import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata, siteTitle } from "@/lib/metadata";
import { destinationPages } from "@/lib/site-data";

export const metadata = createPageMetadata({
  title: siteTitle("India"),
  description:
    "Discover TreatMySoul's first wellness destination coverage in India, beginning with Rishikesh.",
  path: "/india",
});

export default function IndiaPage() {
  return (
    <main className="page-shell py-16 md:py-24">
      <SectionHeading
        eyebrow="Destinations"
        title="India is the first chapter."
        description="TreatMySoul starts with a practical destination foundation for travellers researching yoga, meditation, Ayurveda and spiritual stays in India."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,0.75fr)]">
        {destinationPages.map((destination) => (
          <Link
            key={destination.slug}
            href={`/india/${destination.slug}`}
            className="rounded-[1.75rem] border border-[var(--line)] bg-[rgba(255,251,246,0.76)] p-7 transition hover:-translate-y-1 hover:border-[var(--line-strong)]"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              {destination.country}
            </p>
            <h2 className="display-font mt-4 text-4xl tracking-[-0.04em] text-[var(--deep-green)]">
              {destination.title}
            </h2>
            <p className="mt-3 text-sm font-medium text-[var(--muted)]">
              {destination.tags.join(" • ")}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
              {destination.summary}
            </p>
          </Link>
        ))}

        <aside className="soft-card rounded-[1.75rem] p-6">
          <p className="section-kicker">Roadmap</p>
          <h2 className="display-font mt-5 text-3xl tracking-[-0.04em] text-[var(--deep-green)]">
            More India destinations can follow once the first destination stack
            is in place.
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
            This first version focuses on a credible Rishikesh foundation
            instead of spreading thin across multiple unfinished destination
            pages.
          </p>
        </aside>
      </div>
    </main>
  );
}
