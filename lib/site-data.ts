type LinkCard = {
  title: string;
  description: string;
  href: string;
};

type RetreatCard = {
  title: string;
  description: string;
  featured: boolean;
  href?: string;
};

type RetreatCategory = {
  title: string;
  slug: string;
  description: string;
  image: string;
  alt: string;
  href: string;
  featured: boolean;
};

type SocialLink = {
  name: "Instagram" | "Facebook" | "X";
  href: string;
  ariaLabel: string;
};

type GuidePage = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  introduction: string;
  highlights: string[];
  links: LinkCard[];
};

type RetreatCategoryPage = {
  slug: string;
  title: string;
  pageTitle: string;
  description: string;
  pageDescription: string;
  featured: boolean;
  href?: string;
  introduction: string;
  highlights: string[];
  links: LinkCard[];
};

type DestinationPage = {
  slug: string;
  country: string;
  title: string;
  location: string;
  summary: string;
  description: string;
  pageDescription: string;
  introduction: string;
  tags: string[];
  highlights: string[];
  links: LinkCard[];
};

export const retreatCategoryPages: RetreatCategoryPage[] = [
  {
    slug: "yoga",
    title: "Yoga",
    pageTitle: "Yoga Retreats",
    description: "Deepen your practice and reconnect.",
    pageDescription:
      "Explore TreatMySoul's early yoga retreat coverage, shaped around practical comparisons and destination context.",
    featured: true,
    href: "/retreats/yoga",
    introduction:
      "Yoga retreats are one of the clearest starting points for TreatMySoul because travellers often need help understanding the difference between style, intensity, setting and overall trip fit.",
    highlights: [
      "Compare who different yoga retreat formats tend to suit best.",
      "Understand how destination context affects the experience, especially in India.",
      "Build toward more detailed pages without filling the site with generic list content.",
    ],
    links: [
      {
        title: "Explore Rishikesh",
        description:
          "Start with the first destination page for yoga-focused research in India.",
        href: "/india/rishikesh",
      },
      {
        title: "Read beginner-focused guides",
        description:
          "Use the first editorial routes to decide what kind of yoga retreat feels right.",
        href: "/guides",
      },
    ],
  },
  {
    slug: "meditation",
    title: "Meditation",
    pageTitle: "Meditation Retreats",
    description: "Slow down, reflect and reset.",
    pageDescription:
      "Discover TreatMySoul's foundation for meditation retreat research, comparison and destination guidance.",
    featured: true,
    href: "/retreats/meditation",
    introduction:
      "Meditation retreats can vary widely in atmosphere, schedule and level of structure, so this category is designed to help travellers orient themselves before they book.",
    highlights: [
      "Clarify how reflective, spiritual and restorative stays can overlap but still feel different.",
      "Connect meditation-focused research to the first destination coverage in Rishikesh.",
      "Lay the groundwork for future guide pages without introducing unnecessary complexity now.",
    ],
    links: [
      {
        title: "See India coverage",
        description:
          "Browse the first country hub and the destination foundation underneath it.",
        href: "/india",
      },
      {
        title: "Find My Retreat preview",
        description:
          "Visit the future matching-tool route that will eventually narrow choices by need and travel style.",
        href: "/find-my-retreat",
      },
    ],
  },
  {
    slug: "ayurveda",
    title: "Ayurveda",
    pageTitle: "Ayurveda Retreats",
    description: "Explore traditional approaches to wellbeing.",
    pageDescription:
      "Review TreatMySoul's early Ayurveda retreat coverage, built to grow into deeper destination and guide content.",
    featured: true,
    href: "/retreats/ayurveda",
    introduction:
      "Ayurveda retreats can be especially difficult for international travellers to evaluate, so this category is positioned to explain the basics before broader destination coverage arrives.",
    highlights: [
      "Introduce Ayurveda in a way that stays practical rather than mystical or vague.",
      "Help travellers understand what kinds of stays may fit their goals and comfort level.",
      "Create a clean route foundation for later destination-specific Ayurveda comparisons.",
    ],
    links: [
      {
        title: "Start with India",
        description:
          "Follow the first country and destination routes while Ayurveda content expands.",
        href: "/india",
      },
      {
        title: "Browse editorial guides",
        description:
          "See the early editorial structure TreatMySoul is using to support decisions.",
        href: "/guides",
      },
    ],
  },
];

export const retreatCategories: RetreatCategory[] = [
  {
    title: "Yoga",
    slug: "yoga",
    image: "/images/wellness/yoga-retreat.png",
    alt: "Guests practicing yoga at a peaceful mountain retreat",
    description: "Deepen your practice and reconnect.",
    href: "/retreats/yoga",
    featured: true,
  },
  {
    title: "Meditation",
    slug: "meditation",
    image: "/images/wellness/meditation-retreat.png",
    alt: "Traveller meditating in a quiet retreat overlooking a mountain valley",
    description: "Slow down, reflect and reset.",
    href: "/retreats/meditation",
    featured: true,
  },
  {
    title: "Ayurveda",
    slug: "ayurveda",
    image: "/images/wellness/ayurveda-retreat.png",
    alt: "Traditional Ayurveda wellness treatment room with herbs and oils",
    description: "Explore traditional approaches to wellbeing.",
    href: "/retreats/ayurveda",
    featured: true,
  },
  {
    title: "Spiritual",
    slug: "spiritual",
    image: "/images/wellness/spiritual-retreat.png",
    alt: "Traveller walking through a peaceful Himalayan retreat landscape",
    description: "Make space for reflection and inner exploration.",
    href: "/retreats",
    featured: false,
  },
  {
    title: "Self-Care",
    slug: "self-care",
    image: "/images/wellness/self-care-retreat.png",
    alt: "Quiet wellness retreat room overlooking mountains",
    description: "Rest, recharge and step away from everyday life.",
    href: "/retreats",
    featured: false,
  },
  {
    title: "Luxury Wellness",
    slug: "luxury-wellness",
    image: "/images/wellness/luxury-wellness.png",
    alt: "Luxury wellness retreat with pool overlooking a mountain landscape",
    description: "Elevated stays designed around wellbeing.",
    href: "/retreats",
    featured: false,
  },
];

export const retreatCards: RetreatCard[] = retreatCategories.map(
  ({ title, description, featured, href }) => ({
    title,
    description,
    featured,
    href,
  }),
);

export const guidePages: GuidePage[] = [
  {
    slug: "best-yoga-retreats-rishikesh-beginners",
    title: "Best Yoga Retreats in Rishikesh for Beginners",
    category: "Rishikesh",
    summary:
      "A starter guide route for understanding what first-time yoga retreat travellers should compare before choosing Rishikesh.",
    introduction:
      "This placeholder guide is designed to grow into a practical comparison page that helps beginners think through setting, structure, teaching style and comfort level before choosing a yoga retreat in Rishikesh.",
    highlights: [
      "What makes a retreat feel beginner-friendly in practical terms.",
      "Which questions matter more than broad marketing language.",
      "How a destination like Rishikesh may suit some travellers better than others.",
    ],
    links: [
      {
        title: "Explore Rishikesh",
        description:
          "Read the first destination page that this guide will eventually support.",
        href: "/india/rishikesh",
      },
      {
        title: "Browse yoga retreats",
        description:
          "Return to the main yoga retreat category while this guide grows.",
        href: "/retreats/yoga",
      },
    ],
  },
  {
    slug: "ashram-vs-yoga-retreat",
    title: "Ashram vs Yoga Retreat: What's the Difference?",
    category: "Planning Basics",
    summary:
      "An early guide route for travellers deciding between a more traditional ashram environment and a retreat-style stay.",
    introduction:
      "This guide exists to help TreatMySoul explain an important decision point clearly: an ashram and a yoga retreat may overlap, but the experience, expectations and atmosphere can feel quite different.",
    highlights: [
      "Differences in structure, comfort level and day-to-day rhythm.",
      "How expectations around spirituality and community may vary.",
      "Why the right fit depends on the traveller, not a universal hierarchy.",
    ],
    links: [
      {
        title: "Read about Rishikesh",
        description:
          "See the destination context where this question often matters most.",
        href: "/india/rishikesh",
      },
      {
        title: "Visit the guides hub",
        description:
          "Return to the wider editorial foundation for first-time retreat planning.",
        href: "/guides",
      },
    ],
  },
  {
    slug: "3-day-vs-7-day-retreat",
    title: "3-Day vs 7-Day Retreat: Which Is Right for You?",
    category: "Trip Length",
    summary:
      "A framework page for comparing shorter and longer retreat formats without turning the decision into a generic checklist.",
    introduction:
      "This placeholder guide is intended to help travellers think honestly about energy, time, budget and what kind of reset they actually want before choosing a retreat length.",
    highlights: [
      "Why shorter stays can still be valuable when expectations are realistic.",
      "How longer retreat formats may change depth, pace and recovery time.",
      "What tradeoffs are worth understanding before committing to a trip length.",
    ],
    links: [
      {
        title: "Preview Find My Retreat",
        description:
          "See the future route that could eventually help with this kind of filtering.",
        href: "/find-my-retreat",
      },
      {
        title: "Explore meditation retreats",
        description:
          "Compare one of the retreat categories where length can strongly shape the experience.",
        href: "/retreats/meditation",
      },
    ],
  },
  {
    slug: "how-to-choose-your-first-wellness-retreat",
    title: "How to Choose Your First Wellness Retreat",
    category: "First-Time Planning",
    summary:
      "A foundational guide route for the questions that matter before choosing a first wellness retreat.",
    introduction:
      "This guide is set up to become a practical entry point for first-time wellness travellers, helping them sort through retreat type, destination, trip length and overall fit in a calm, editorial way.",
    highlights: [
      "How to match retreat type to what you actually need from the trip.",
      "Why destination, schedule and atmosphere matter as much as branding.",
      "How TreatMySoul can gradually connect guides, destinations and categories into one decision flow.",
    ],
    links: [
      {
        title: "Explore all retreat categories",
        description:
          "Move back to the main retreat collection to compare the starting categories.",
        href: "/retreats",
      },
      {
        title: "See the India hub",
        description:
          "Browse the first country route that anchors the initial site structure.",
        href: "/india",
      },
    ],
  },
];

export const destinationPages: DestinationPage[] = [
  {
    slug: "rishikesh",
    country: "India",
    title: "Rishikesh",
    location: "India",
    summary:
      "Rishikesh is one of India's best-known destinations for yoga, meditation, ashrams and wellness experiences.",
    description:
      "One of India's best-known destinations for yoga, meditation, ashrams and wellness experiences.",
    pageDescription:
      "Discover TreatMySoul's first destination page for Rishikesh, India, with a research-led foundation for yoga, meditation and wellness travel.",
    introduction:
      "Rishikesh offers a clear and credible first destination for TreatMySoul because it sits naturally at the intersection of yoga, meditation, spiritual travel and broader wellness curiosity for international travellers.",
    tags: ["Yoga", "Meditation", "Spirituality"],
    highlights: [
      "Establish Rishikesh as the first destination layer in the site's information architecture.",
      "Connect destination context directly to retreat categories and editorial decision guides.",
      "Keep the copy honest and useful without inventing statistics, ratings or booking claims.",
    ],
    links: [
      {
        title: "Read the beginner yoga guide",
        description:
          "Follow one of the first editorial routes connected to Rishikesh research.",
        href: "/guides/best-yoga-retreats-rishikesh-beginners",
      },
      {
        title: "Explore retreat categories",
        description:
          "See how yoga, meditation and Ayurveda route back to the destination foundation.",
        href: "/retreats",
      },
    ],
  },
];

export const featuredDestination = destinationPages[0];

export const valuePoints = [
  {
    title: "Thoughtful comparisons",
    description:
      "Understand who a retreat is best suited for instead of relying on generic ranking pages.",
  },
  {
    title: "Practical details",
    description:
      "Focus on the questions travellers actually need answered before choosing a retreat.",
  },
  {
    title: "Independent research",
    description:
      "Build decisions from structured destination and category research rather than vague list content.",
  },
  {
    title: "Built for international travellers",
    description:
      "Help visitors understand what to expect before travelling to a new wellness destination.",
  },
];

export const primaryNav = [
  {
    label: "Retreats",
    children: [
      {
        label: "Yoga",
        href: "/retreats/yoga",
        description: "Deepen your practice and reconnect.",
      },
      {
        label: "Meditation",
        href: "/retreats/meditation",
        description: "Slow down, reflect and reset.",
      },
      {
        label: "Ayurveda",
        href: "/retreats/ayurveda",
        description: "Explore traditional approaches to wellbeing.",
      },
      {
        label: "Spiritual",
        description: "Make space for reflection and inner exploration.",
        comingSoon: true,
      },
      {
        label: "Wellness",
        description: "Broader restorative trips and self-care escapes.",
        comingSoon: true,
      },
      {
        label: "Luxury Wellness",
        description: "Elevated stays built around wellbeing.",
        comingSoon: true,
      },
    ],
  },
  {
    label: "Destinations",
    children: [
      {
        label: "India",
        href: "/india",
        description: "The first country hub for TreatMySoul.",
      },
      {
        label: "Rishikesh",
        href: "/india/rishikesh",
        description: "The first live destination page.",
      },
    ],
  },
  {
    label: "Guides",
    href: "/guides",
  },
  {
    label: "Find My Retreat",
    href: "/find-my-retreat",
  },
];

export const footerNavigation = [
  { label: "Retreats", href: "/retreats" },
  { label: "Destinations", href: "/india" },
  { label: "Guides", href: "/guides" },
  { label: "About", href: "/about" },
];

export const footerLegal = [
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/treatmysoulgo",
    ariaLabel: "TreatMySoul on Instagram",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/people/Treatmysoul/61594019374496",
    ariaLabel: "TreatMySoul on Facebook",
  },
  {
    name: "X",
    href: "https://x.com/treatmysoulgo",
    ariaLabel: "TreatMySoul on X",
  },
];

export function getRetreatCategoryBySlug(slug: string) {
  return retreatCategoryPages.find((page) => page.slug === slug);
}

export function getGuideBySlug(slug: string) {
  return guidePages.find((guide) => guide.slug === slug);
}

export function getDestinationBySlug(slug: string) {
  return destinationPages.find((destination) => destination.slug === slug);
}
