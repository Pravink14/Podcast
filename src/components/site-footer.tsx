import Link from "next/link";
import { siteContent } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <Link className="footer-wordmark" href="/">
          {siteContent.name}
        </Link>
        <p>{siteContent.tagline}</p>
        <span className="footer-note">
          A fictional show with a real point of view.
        </span>
      </div>
    </footer>
  );
}
