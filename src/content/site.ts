export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export const siteContent = {
  name: "Offbeat Index",
  shortName: "OI",
  tagline: "A field guide to culture, creative work, and ideas.",
  description:
    "An independent audio journal about the details that shape how we live, make, and think.",
  about:
    "Offbeat Index is a fictional, replaceable podcast concept about contemporary culture, creative work, and ideas. Each edition follows a question into the people, places, and small details that make it matter.",
};

export const faqItems: FAQItem[] = [
  {
    id: "premise",
    question: "What is Offbeat Index about?",
    answer:
      "It is a fictional show concept exploring contemporary culture, creative work, and the ideas hiding in everyday life.",
  },
  {
    id: "episodes",
    question: "What can I find on the episodes page?",
    answer:
      "The page presents 20 sample episodes with a title, short description, release date, and duration.",
  },
  {
    id: "mock-content",
    question: "Are these real podcast episodes?",
    answer:
      "No. The show and episode details are mock content for this website concept. They are not connected to a live feed and do not include audio playback.",
  },
  {
    id: "featured",
    question: "Why is one episode featured?",
    answer:
      "The landing page highlights one episode from the same 20-item sample catalog. It also appears in the episodes list.",
  },
];
