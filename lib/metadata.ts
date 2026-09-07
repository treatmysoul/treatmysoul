import type { Metadata } from "next";

const SITE_NAME = "TreatMySoul";
const SITE_URL = "https://www.treatmysoul.com";
const HOME_TITLE = "TreatMySoul | Wellness Retreats, Yoga, Meditation & Ayurveda";
const DEFAULT_DESCRIPTION =
  "Discover thoughtfully researched yoga, meditation, Ayurveda and wellness retreats. Compare experiences and find a retreat that feels right for you.";

export function siteTitle(section?: string) {
  if (!section) {
    return HOME_TITLE;
  }

  return section;
}

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const socialTitle = title === HOME_TITLE ? title : `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
    },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Travel",
  openGraph: {
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};
