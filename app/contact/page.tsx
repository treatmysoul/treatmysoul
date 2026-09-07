import { ContentPage } from "@/components/content-page";
import { createPageMetadata, siteTitle } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: siteTitle("Contact"),
  description:
    "Visit TreatMySoul's contact page for future partnership, editorial and general enquiry details.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <ContentPage
      eyebrow="Contact"
      title="Contact details will be added as TreatMySoul grows."
      description="This route is in place now so the site structure is ready for partnerships, editorial enquiries and general contact details."
      introduction="For this first release, the emphasis is on building a credible destination and guide foundation. A dedicated contact workflow can be added once the site is ready for public outreach."
      highlights={[
        "Partnership and affiliate conversations.",
        "Editorial questions and feedback.",
        "General website enquiries.",
      ]}
      links={[
        {
          title: "Read the affiliate disclosure",
          description: "See how TreatMySoul frames affiliate relationships at this stage.",
          href: "/affiliate-disclosure",
        },
        {
          title: "Learn about the site",
          description: "Understand the current editorial and product direction.",
          href: "/about",
        },
      ]}
      cta={{
        label: "Back to Home",
        href: "/",
      }}
      asideTitle="Next step"
      asideText="A simple form or dedicated email address can plug into this page later without needing to rework the route structure."
    />
  );
}
