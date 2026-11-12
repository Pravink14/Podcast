import { siteContent } from "@/content/site";

export default function AboutPage() {
  return (
    <div className="about-page page-shell">
      <header className="about-heading">
        <p className="eyebrow">A note on the premise</p>
        <h1 className="page-heading">Curiosity is a way in.</h1>
      </header>
      <section aria-labelledby="about-copy-title" className="about-copy">
        <p className="about-index">01 / THE IDEA</p>
        <div>
          <h2 id="about-copy-title">A field guide, not a final word.</h2>
          <p>{siteContent.about}</p>
        </div>
      </section>
      <section aria-label="Editorial approach" className="about-method">
        <p className="eyebrow">How we follow a thread</p>
        <div className="about-method-grid">
          <article>
            <span>01</span>
            <h2>Notice</h2>
            <p>
              Start with something small enough to overlook and strange enough
              to keep.
            </p>
          </article>
          <article>
            <span>02</span>
            <h2>Ask</h2>
            <p>
              Stay with the question long enough to hear more than one good
              answer.
            </p>
          </article>
          <article>
            <span>03</span>
            <h2>Connect</h2>
            <p>
              Find the larger pattern without losing the human detail that
              revealed it.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
