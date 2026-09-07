import { notFound } from "next/navigation";
import { ContentPage } from "@/components/content-page";
import { createPageMetadata, siteTitle } from "@/lib/metadata";
import { destinationPages, getDestinationBySlug } from "@/lib/site-data";

export function generateStaticParams() {
  return destinationPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata(props: PageProps<"/india/[slug]">) {
  const { slug } = await props.params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  return createPageMetadata({
    title: siteTitle(`${destination.title}, ${destination.country}`),
    description: destination.pageDescription,
    path: `/india/${destination.slug}`,
  });
}

export default async function DestinationPage(props: PageProps<"/india/[slug]">) {
  const { slug } = await props.params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  return (
    <ContentPage
      eyebrow="Destination"
      title={`${destination.title}, ${destination.country}`}
      description={destination.pageDescription}
      introduction={destination.introduction}
      highlights={destination.highlights}
      links={destination.links}
      cta={{
        label: "Browse Guides",
        href: "/guides",
      }}
      asideTitle="Why start here"
      asideText="Rishikesh gives TreatMySoul an honest first destination that naturally connects yoga, meditation and spiritual travel without turning the site into a booking marketplace."
      tags={destination.tags}
    />
  );
}
