import Image from "next/image";
import Link from "next/link";
import { featuredEpisode } from "@/content/episodes";
import { siteContent } from "@/content/site";

export default function HomePage() {
  return (
    <div className="home-page">
      <section aria-labelledby="home-title" className="home-hero page-shell">
        <div className="home-hero-copy">
          <p className="eyebrow">A culture journal in audio / Issue 01</p>
          <h1 className="home-title" id="home-title">
            Follow the
            <br />
            <em>interesting</em>
            <br />
            thread.
          </h1>
          <p className="home-intro">{siteContent.description}</p>
          <div
            className="home-featured"
            data-episode-id={featuredEpisode.id}
            data-featured-episode="true"
          >
            <div className="home-featured-topline">
              <span>Start here</span>
              <span>Episode 020 / 020</span>
            </div>
            <h2>{featuredEpisode.title}</h2>
            <p>{featuredEpisode.description}</p>
            <div className="home-featured-bottomline">
              <span>{featuredEpisode.duration}</span>
              <Link href="/episodes/">
                Browse all episodes <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
        <figure className="home-visual">
          <Image
            alt="An intimate recording studio with a mixing desk and instruments"
            className="home-visual-image"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 52vw"
            src="/images/studio-session.jpg"
          />
          <span className="home-visual-issue">
            THE CREATIVE PRACTICE SERIES
          </span>
          <figcaption className="home-visual-caption">
            <span>FIELD NOTE / 020</span>
            <strong>
              Make a start
              <br />
              before you’re ready.
            </strong>
          </figcaption>
          <span aria-hidden="true" className="home-visual-index">
            OI—01
          </span>
        </figure>
      </section>
      <section
        aria-label="Explore the journal"
        className="home-next page-shell"
      >
        <p>Culture is made in the details.</p>
        <Link href="/about/">
          Get to know the show <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </div>
  );
}
