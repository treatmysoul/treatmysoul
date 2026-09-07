import { ContentPage } from "@/components/content-page";
import { createPageMetadata, siteTitle } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: siteTitle("Affiliate Disclosure"),
  description:
    "Read TreatMySoul's current affiliate disclosure for wellness travel recommendations and partner links.",
  path: "/affiliate-disclosure",
});

export default function AffiliateDisclosurePage() {
  return (
    <ContentPage
      eyebrow="Affiliate Disclosure"
      title="TreatMySoul may earn a commission from selected links."
      description="When TreatMySoul links to selected booking or travel partners, the site may earn a commission at no additional cost to the traveller."
      introduction="This early disclosure page exists so the structure is honest from the start. It can be expanded later with fuller policy language as affiliate relationships and site features grow."
      highlights={[
        "Affiliate links do not change the price a traveller pays.",
        "TreatMySoul is being positioned as an independent research and recommendation site, not a booking marketplace.",
        "Recommendations should be shaped by structured research and fit, not by invented ratings or unsupported claims.",
      ]}
      links={[
        {
          title: "Return to the homepage",
          description: "See where this disclosure is surfaced across the site.",
          href: "/",
        },
        {
          title: "View privacy foundations",
          description: "Read the placeholder privacy page for the first release.",
          href: "/privacy",
        },
      ]}
      cta={{
        label: "Explore Guides",
        href: "/guides",
      }}
      asideTitle="Scope"
      asideText="This is a starter disclosure page, not a full legal review. It provides honest user-facing context while the project foundation is still being built."
    />
  );
}
