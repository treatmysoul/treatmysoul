import Link from "next/link";
import { HomeHeroVisual } from "@/components/home-hero-visual";
import { RetreatCategoryCard } from "@/components/retreat-category-card";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata, siteTitle } from "@/lib/metadata";
import {
  featuredDestination,
  guidePages,
  retreatCategories,
  valuePoints,
} from "@/lib/site-data";

export const metadata = createPageMetadata({
  title: siteTitle(),
  description:
    "Discover thoughtfully researched yoga, meditation, Ayurveda and wellness retreats, starting with India. Compare options and find a retreat that fits you.",
  path: "/",
});

export default function Home() {
  const latestGuides = guidePages.slice(0, 3);

  return (
    <main className="pb-20 md:pb-28">
      <section className="page-shell pt-8 md:pt-10">
        <div className="surface-panel relative overflow-hidden rounded-[2rem] px-6 py-8 md:px-8 md:py-10 lg:px-12 lg:py-12">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--sand)] to-transparent" />
          <div className="absolute -right-20 top-0 h-56 w-56 rounded-full bg-[rgba(214,187,149,0.16)] blur-3xl" />
          <div className="absolute -bottom-12 left-12 h-40 w-40 rounded-full bg-[rgba(134,154,136,0.16)] blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.18fr)_minmax(19rem,0.98fr)] lg:items-center lg:gap-10">
            <div>
              <p className="section-kicker">Wellness Travel, Thoughtfully Curated</p>
              <h1 className="display-font balanced-copy mt-6 max-w-4xl text-5xl leading-[0.95] tracking-[-0.04em] text-[var(--deep-green)] md:text-6xl lg:text-7xl">
                Find a retreat that feels right for you.
              </h1>
              <p className="balanced-copy mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] md:text-xl">
                Discover yoga, meditation, Ayurveda and wellness retreats with
                thoughtful guides and comparisons designed to help you choose
                with confidence.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/india/rishikesh"
                  className="inline-flex items-center justify-center rounded-full bg-[#173F35] px-6 py-3 text-sm font-semibold text-[#F8F4EA] transition hover:bg-[#12342C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173F35]"
                >
                  Explore Rishikesh Retreats
                </Link>
                <Link
                  href="/find-my-retreat"
                  className="inline-flex items-center justify-center rounded-full border border-[rgba(31,59,51,0.18)] bg-[rgba(255,255,255,0.46)] px-6 py-3 text-sm font-medium text-[var(--muted)] transition hover:border-[rgba(31,59,51,0.3)] hover:bg-[rgba(255,255,255,0.62)] hover:text-[var(--foreground)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--deep-green)]"
                >
                  Find My Retreat
                </Link>
              </div>
            </div>

            <aside className="relative">
              <HomeHeroVisual />
            </aside>
          </div>
        </div>
      </section>

      <section className="page-shell mt-20 md:mt-24">
        <SectionHeading
          eyebrow="Retreat Types"
          title="What are you seeking?"
          description="Explore retreats by the kind of experience you're looking for."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {retreatCategories.map((category, index) => (
            <RetreatCategoryCard
              key={category.slug}
              title={category.title}
              description={category.description}
              image={category.image}
              alt={category.alt}
              href={category.href}
              priority={index < 2}
            />
          ))}
        </div>
      </section>

      <section className="page-shell mt-20 md:mt-24">
        <div className="grid gap-8 rounded-[2rem] border border-[var(--line)] bg-[rgba(255,250,244,0.7)] p-6 md:p-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(18rem,0.9fr)] lg:items-center">
          <div>
            <p className="section-kicker">Featured Destination</p>
            <h2 className="display-font mt-5 text-4xl tracking-[-0.04em] text-[var(--deep-green)] md:text-5xl">
              Start with India
            </h2>

            <div className="mt-8 rounded-[1.5rem] border border-[var(--line)] bg-[rgba(255,255,255,0.7)] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                {featuredDestination.location}
              </p>
              <h3 className="display-font mt-3 text-3xl tracking-[-0.04em] text-[var(--deep-green)]">
                {featuredDestination.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-[var(--muted)]">
                {featuredDestination.tags.join(" • ")}
              </p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--muted)]">
                {featuredDestination.description}
              </p>
            </div>
          </div>

          <div className="soft-card rounded-[1.75rem] p-6">
            <p className="text-sm leading-7 text-[var(--muted)]">
              Rishikesh is one of India&apos;s best-known destinations for
              yoga, meditation, ashrams and wellness experiences. It&apos;s a
              practical starting point for the first phase of TreatMySoul.
            </p>
            <Link
              href="/india/rishikesh"
              className="mt-6 inline-flex items-center rounded-full bg-[var(--deep-green)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#173027] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--deep-green)]"
            >
              Explore Rishikesh
            </Link>
          </div>
        </div>
      </section>

      <section className="page-shell mt-20 md:mt-24">
        <SectionHeading
          eyebrow="Decision Guides"
          title="Planning your first retreat? Start here."
          description="Editorial guides designed to reduce decision fatigue and help travellers compare the kinds of choices that actually matter."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {guidePages.map((guide, index) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group rounded-[1.75rem] border border-[var(--line)] bg-[rgba(255,251,246,0.74)] p-6 transition hover:-translate-y-1 hover:border-[var(--line-strong)] hover:bg-white md:p-7"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                Guide {index + 1}
              </p>
              <h3 className="display-font mt-4 text-3xl tracking-[-0.04em] text-[var(--deep-green)]">
                {guide.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                {guide.summary}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="page-shell mt-20 md:mt-24">
        <div className="grid gap-10 rounded-[2rem] bg-[var(--deep-green)] px-6 py-10 text-white md:px-8 md:py-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.1fr)] lg:items-start">
          <div>
            <p className="section-kicker text-[rgba(255,255,255,0.7)]">
              Why TreatMySoul
            </p>
            <h2 className="display-font mt-5 text-4xl tracking-[-0.04em] md:text-5xl">
              Choosing a retreat shouldn&apos;t feel overwhelming.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {valuePoints.map((point) => (
              <article
                key={point.title}
                className="rounded-[1.5rem] border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.08)] p-5"
              >
                <h3 className="text-lg font-semibold">{point.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[rgba(255,255,255,0.78)]">
                  {point.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell mt-20 md:mt-24">
        <div className="relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(135deg,rgba(255,251,246,0.92),rgba(228,220,206,0.72))] px-6 py-10 md:px-10 md:py-12">
          <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-[rgba(31,59,51,0.08)] blur-3xl" />
          <div className="absolute bottom-0 left-10 h-40 w-40 rounded-full bg-[rgba(214,187,149,0.18)] blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div>
              <p className="section-kicker">Find My Retreat</p>
              <h2 className="display-font mt-5 text-4xl tracking-[-0.04em] text-[var(--deep-green)] md:text-5xl">
                Not sure what kind of retreat you need?
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
                Tell us what you&apos;re looking for, how much time you have
                and how you like to travel. TreatMySoul will eventually help
                narrow hundreds of choices into a smaller set that suits you.
              </p>
            </div>

            <Link
              href="/find-my-retreat"
              className="inline-flex items-center justify-center rounded-full border border-[var(--line-strong)] bg-white px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--deep-green)] hover:bg-[var(--background-strong)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--deep-green)]"
            >
              Find My Retreat
            </Link>
          </div>
        </div>
      </section>

      <section className="page-shell mt-20 md:mt-24">
        <SectionHeading
          eyebrow="Latest Guides"
          title="Latest research-led reads from Rishikesh"
          description="A first set of editorial pages focused on the kinds of questions travellers ask before booking a retreat in India."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {latestGuides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group rounded-[1.75rem] border border-[var(--line)] bg-[rgba(255,251,246,0.72)] p-6 transition hover:-translate-y-1 hover:border-[var(--line-strong)]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                {guide.category}
              </p>
              <h3 className="display-font mt-4 text-3xl tracking-[-0.04em] text-[var(--deep-green)]">
                {guide.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                {guide.summary}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
