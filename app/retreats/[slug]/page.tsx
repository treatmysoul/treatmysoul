import { notFound } from "next/navigation";
import { ContentPage } from "@/components/content-page";
import { createPageMetadata, siteTitle } from "@/lib/metadata";
import { getRetreatCategoryBySlug, retreatCategoryPages } from "@/lib/site-data";

export function generateStaticParams() {
  return retreatCategoryPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata(props: PageProps<"/retreats/[slug]">) {
  const { slug } = await props.params;
  const category = getRetreatCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  return createPageMetadata({
    title: siteTitle(category.pageTitle),
    description: category.pageDescription,
    path: `/retreats/${category.slug}`,
  });
}

export default async function RetreatCategoryPage(
  props: PageProps<"/retreats/[slug]">,
) {
  const { slug } = await props.params;
  const category = getRetreatCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  return (
    <ContentPage
      eyebrow="Retreat Category"
      title={category.pageTitle}
      description={category.pageDescription}
      introduction={category.introduction}
      highlights={category.highlights}
      links={category.links}
      cta={{
        label: "Explore Rishikesh",
        href: "/india/rishikesh",
      }}
      asideTitle="Current focus"
      asideText="TreatMySoul is intentionally starting small with route foundations, curated comparisons and destination context instead of broad generic listicles."
    />
  );
}
