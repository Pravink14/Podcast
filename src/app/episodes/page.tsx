import { EpisodeCard } from "@/components/episode-card";
import { episodes, featuredEpisodeId } from "@/content/episodes";

export default function EpisodesPage() {
  return (
    <div className="episodes-page page-shell">
      <header className="episodes-heading">
        <div>
          <p className="eyebrow">The archive / 2026</p>
          <h1 className="page-heading">The Index</h1>
          <p className="page-intro">
            Twenty conversations on culture, creative work, and ideas worth
            following.
          </p>
        </div>
        <p
          aria-label={`${episodes.length} sample episodes`}
          className="episodes-count"
        >
          <strong>{String(episodes.length).padStart(2, "0")}</strong>
          <span>
            field notes
            <br />
            and conversations
          </span>
        </p>
      </header>
      <section aria-label="All episodes" className="episode-grid">
        {episodes.map((episode) => (
          <EpisodeCard
            episode={episode}
            featured={episode.id === featuredEpisodeId}
            key={episode.id}
          />
        ))}
      </section>
    </div>
  );
}
