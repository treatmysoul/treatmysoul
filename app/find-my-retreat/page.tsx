import { ContentPage } from "@/components/content-page";
import { createPageMetadata, siteTitle } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: siteTitle("Find My Retreat"),
  description:
    "Preview TreatMySoul's future retreat matching experience without adding a recommendation engine yet.",
  path: "/find-my-retreat",
});

export default function FindMyRetreatPage() {
  return (
    <ContentPage
      eyebrow="Coming Later"
      title="Find My Retreat"
      description="This future tool will help travellers narrow options based on retreat style, trip length and travel preferences."
      introduction="For now, this page acts as a simple preview route so the homepage can point somewhere real while the editorial and destination foundation grows."
      highlights={[
        "Retreat type preferences such as yoga, meditation or Ayurveda.",
        "Time available for a short reset or a longer immersive stay.",
        "Travel style preferences, from simple restorative escapes to more elevated wellness trips.",
      ]}
      links={[
        {
          title: "Start with Rishikesh",
          description:
            "Explore the first live destination page while the matching tool is still in preview.",
          href: "/india/rishikesh",
        },
        {
          title: "Read the early guides",
          description:
            "Use the first editorial comparison pages to get closer to the right choice.",
          href: "/guides",
        },
      ]}
      cta={{
        label: "Explore Retreats",
        href: "/retreats",
      }}
      asideTitle="No booking engine yet"
      asideText="TreatMySoul is not trying to become a marketplace in this first version. The emphasis stays on discovery, context and decision support."
    />
  );
}
