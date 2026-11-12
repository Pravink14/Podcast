import type { Episode } from "@/content/episodes";

type EpisodeCardProps = {
  episode: Episode;
  featured?: boolean;
};

export function EpisodeCard({ episode, featured = false }: EpisodeCardProps) {
  const date = new Date(`${episode.releaseDate}T00:00:00Z`);
  const displayDate = new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    timeZone: "UTC",
    year: "numeric",
  }).format(date);

  return (
    <article
      className={`episode-card${featured ? " episode-card--featured" : ""}`}
      data-episode-id={episode.id}
      data-featured-episode={featured ? "true" : undefined}
    >
      <div aria-hidden="true" className="episode-card-art">
        <span className="episode-card-art-label">
          Offbeat Index / Field notes
        </span>
        <span className="episode-card-art-number">{episode.id.slice(-3)}</span>
        <span className="episode-card-art-orbit" />
      </div>
      <div className="episode-card-copy">
        <p className="episode-card-meta">
          <time dateTime={episode.releaseDate}>{displayDate}</time>
          <span aria-hidden="true">/</span>
          <span>{episode.duration}</span>
        </p>
        <h3>{episode.title}</h3>
        <p className="episode-card-description">{episode.description}</p>
      </div>
    </article>
  );
}
