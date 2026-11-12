export type Episode = {
  id: string;
  title: string;
  description: string;
  releaseDate: string;
  duration: string;
};

export const episodes: Episode[] = [
  {
    id: "ep-020",
    title: "The Art of Starting Before You’re Ready",
    description:
      "Why the first draft is less a beginning than a way of finding the question.",
    releaseDate: "2026-10-28",
    duration: "38 min",
  },
  {
    id: "ep-019",
    title: "Who Gets to Call It Design?",
    description:
      "A conversation about taste, access, and the quiet politics of everyday objects.",
    releaseDate: "2026-10-21",
    duration: "42 min",
  },
  {
    id: "ep-018",
    title: "A Useful Kind of Attention",
    description:
      "On noticing more, collecting less, and making room for the unexpected.",
    releaseDate: "2026-10-14",
    duration: "31 min",
  },
  {
    id: "ep-017",
    title: "The Rooms We Make Things In",
    description:
      "How the spaces around us shape collaboration, concentration, and care.",
    releaseDate: "2026-10-07",
    duration: "46 min",
  },
  {
    id: "ep-016",
    title: "Small Rituals, Large Ideas",
    description:
      "The ordinary routines that help creative work find its own rhythm.",
    releaseDate: "2026-09-30",
    duration: "35 min",
  },
  {
    id: "ep-015",
    title: "The Case for the Side Project",
    description:
      "What happens when curiosity gets a little time without a business plan.",
    releaseDate: "2026-09-23",
    duration: "40 min",
  },
  {
    id: "ep-014",
    title: "Making Peace with the Middle",
    description:
      "A field guide to the awkward, necessary stretch between idea and finish.",
    releaseDate: "2026-09-16",
    duration: "37 min",
  },
  {
    id: "ep-013",
    title: "A Future Built from Repairs",
    description:
      "Designers and neighbors rethink progress through maintenance and reuse.",
    releaseDate: "2026-09-09",
    duration: "44 min",
  },
  {
    id: "ep-012",
    title: "The Sound of a City Thinking",
    description:
      "Listening to the signs, voices, and small negotiations of public space.",
    releaseDate: "2026-09-02",
    duration: "33 min",
  },
  {
    id: "ep-011",
    title: "When Work Becomes a Place",
    description:
      "What our changing workplaces reveal about identity and belonging.",
    releaseDate: "2026-08-26",
    duration: "41 min",
  },
  {
    id: "ep-010",
    title: "The Generous Edit",
    description:
      "Why cutting an idea down can be an act of respect rather than restraint.",
    releaseDate: "2026-08-19",
    duration: "29 min",
  },
  {
    id: "ep-009",
    title: "A Table for More Than One",
    description:
      "Food, hospitality, and the design of conversations that make space.",
    releaseDate: "2026-08-12",
    duration: "39 min",
  },
  {
    id: "ep-008",
    title: "Objects with a Second Life",
    description:
      "The makers turning overlooked materials into things worth keeping.",
    releaseDate: "2026-08-05",
    duration: "36 min",
  },
  {
    id: "ep-007",
    title: "The Shape of a Good Question",
    description:
      "Researchers on asking with care, listening without an agenda, and staying curious.",
    releaseDate: "2026-07-29",
    duration: "43 min",
  },
  {
    id: "ep-006",
    title: "Notes from a Slower Internet",
    description:
      "Finding thoughtful corners of a culture built to keep us scrolling.",
    releaseDate: "2026-07-22",
    duration: "34 min",
  },
  {
    id: "ep-005",
    title: "The People Behind the Pattern",
    description:
      "A closer look at the overlooked labor inside familiar visual languages.",
    releaseDate: "2026-07-15",
    duration: "47 min",
  },
  {
    id: "ep-004",
    title: "Permission to Change Your Mind",
    description:
      "How creative practice makes room for doubt, revision, and better answers.",
    releaseDate: "2026-07-08",
    duration: "32 min",
  },
  {
    id: "ep-003",
    title: "A Place for the Unfinished",
    description:
      "Studios and communities that treat works in progress as something to share.",
    releaseDate: "2026-07-01",
    duration: "45 min",
  },
  {
    id: "ep-002",
    title: "The Everyday Radical",
    description:
      "Small choices that quietly change how a neighborhood feels and functions.",
    releaseDate: "2026-06-24",
    duration: "30 min",
  },
  {
    id: "ep-001",
    title: "What We Mean by Making",
    description:
      "A first conversation about craft, culture, and the value of paying attention.",
    releaseDate: "2026-06-17",
    duration: "40 min",
  },
];

export const featuredEpisodeId = "ep-020";

const selectedFeaturedEpisode = episodes.find(
  (episode) => episode.id === featuredEpisodeId,
);

if (!selectedFeaturedEpisode) {
  throw new Error(
    `Featured episode "${featuredEpisodeId}" is missing from the catalog.`,
  );
}

export const featuredEpisode: Episode = selectedFeaturedEpisode;
