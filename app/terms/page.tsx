import { ContentPage } from "@/components/content-page";
import { createPageMetadata, siteTitle } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: siteTitle("Terms"),
  description:
    "Read the first-pass terms placeholder for TreatMySoul's editorial and affiliate website foundation.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <ContentPage
      eyebrow="Terms"
      title="Foundational terms page for the first TreatMySoul release."
      description="This route creates space for future terms covering editorial content, affiliate links and general website use."
      introduction="At this stage, TreatMySoul is still a lean content foundation. A fuller terms page should follow before public launch, especially if user submissions, newsletters or additional third-party services are introduced."
      highlights={[
        "TreatMySoul is being built as an informational and discovery-focused website.",
        "External bookings would take place with third-party partners, not directly on TreatMySoul.",
        "The current page is a structural placeholder rather than finalized legal copy.",
      ]}
      links={[
        {
          title: "Privacy",
          description: "Review the matching privacy placeholder page.",
          href: "/privacy",
        },
        {
          title: "About TreatMySoul",
          description: "See the intent behind the site's editorial direction.",
          href: "/about",
        },
      ]}
      cta={{
        label: "Back to Home",
        href: "/",
      }}
      asideTitle="Before launch"
      asideText="A production site should replace this starter page with reviewed terms tailored to the business model and any third-party tools in use."
    />
  );
}
