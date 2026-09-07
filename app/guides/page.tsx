import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata, siteTitle } from "@/lib/metadata";
import { guidePages } from "@/lib/site-data";

export const metadata = createPageMetadata({
  title: siteTitle("Guides"),
  description:
    "Read TreatMySoul's early editorial guide topics for comparing wellness and retreat travel choices.",
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <main className="page-shell py-16 md:py-24">
      <SectionHeading
        eyebrow="Guides"
        title="A calmer way to research your first retreat."
        description="These early guide routes act as placeholders for the practical comparisons and decision support content TreatMySoul will grow over time."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {guidePages.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="rounded-[1.75rem] border border-[var(--line)] bg-[rgba(255,251,246,0.76)] p-7 transition hover:-translate-y-1 hover:border-[var(--line-strong)]"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              {guide.category}
            </p>
            <h2 className="display-font mt-4 text-3xl tracking-[-0.04em] text-[var(--deep-green)]">
              {guide.title}
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              {guide.summary}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
