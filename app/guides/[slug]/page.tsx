import { notFound } from "next/navigation";
import { ContentPage } from "@/components/content-page";
import { createPageMetadata, siteTitle } from "@/lib/metadata";
import { getGuideBySlug, guidePages } from "@/lib/site-data";

export function generateStaticParams() {
  return guidePages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata(props: PageProps<"/guides/[slug]">) {
  const { slug } = await props.params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  return createPageMetadata({
    title: siteTitle(guide.title),
    description: guide.summary,
    path: `/guides/${guide.slug}`,
  });
}

export default async function GuidePage(props: PageProps<"/guides/[slug]">) {
  const { slug } = await props.params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  return (
    <ContentPage
      eyebrow="Guide"
      title={guide.title}
      description={guide.summary}
      introduction={guide.introduction}
      highlights={guide.highlights}
      links={guide.links}
      cta={{
        label: "Return to Guides",
        href: "/guides",
      }}
      asideTitle="Status"
      asideText="This route is intentionally lightweight for now so TreatMySoul can grow into fully researched editorial pages without overbuilding the first release."
      tags={[guide.category]}
    />
  );
}
