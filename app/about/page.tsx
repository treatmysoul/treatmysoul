import { ContentPage } from "@/components/content-page";
import { createPageMetadata, siteTitle } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: siteTitle("About"),
  description:
    "Learn how TreatMySoul approaches wellness retreat discovery, destination research and traveller-first comparisons.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <ContentPage
      eyebrow="About TreatMySoul"
      title="A calmer way to choose a wellness retreat."
      description="TreatMySoul is being built as an independent discovery, research and comparison website for travellers looking for wellness and retreat experiences."
      introduction="The goal is to make retreat planning feel more grounded and less overwhelming, especially for international travellers comparing unfamiliar destinations, formats and expectations."
      highlights={[
        "Structured comparisons that explain who a retreat style is best suited for.",
        "Destination context that helps travellers understand what to expect before they travel.",
        "Editorial guidance that prioritizes practical decision-making over generic travel content.",
      ]}
      links={[
        {
          title: "Explore the first destination",
          description: "See how the site begins with an India-first destination strategy.",
          href: "/india",
        },
        {
          title: "Read the first guides",
          description: "Browse early editorial topics shaping the decision-support approach.",
          href: "/guides",
        },
      ]}
      cta={{
        label: "Explore Retreats",
        href: "/retreats",
      }}
      asideTitle="Positioning"
      asideText="TreatMySoul is intentionally being shaped more like a modern wellness travel publication and curator than an online travel agency."
    />
  );
}
