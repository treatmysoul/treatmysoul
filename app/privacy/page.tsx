import { ContentPage } from "@/components/content-page";
import { createPageMetadata, siteTitle } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: siteTitle("Privacy Policy"),
  description:
    "Read the first-pass privacy policy placeholder for TreatMySoul's early site structure.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <ContentPage
      eyebrow="Privacy"
      title="Privacy foundations are in place for the first release."
      description="This page is a lightweight placeholder for TreatMySoul's privacy policy while the site remains focused on editorial foundations rather than accounts, forms or personalized tools."
      introduction="A fuller policy should be added before launch if analytics, forms, newsletters, advertising tools or third-party embeds expand the data footprint."
      highlights={[
        "This first version does not introduce accounts or a booking system.",
        "Future integrations such as forms, analytics or newsletters should be documented here before public rollout.",
        "The route exists now so site navigation and footer structure are ready to grow.",
      ]}
      links={[
        {
          title: "Affiliate disclosure",
          description: "Review how commercial links are introduced on the site.",
          href: "/affiliate-disclosure",
        },
        {
          title: "Terms",
          description: "Read the matching early terms page.",
          href: "/terms",
        },
      ]}
      cta={{
        label: "Return Home",
        href: "/",
      }}
      asideTitle="Practical note"
      asideText="This is a structural placeholder and not a substitute for a finalized legal policy before a public launch."
    />
  );
}
