import Link from "next/link";
import { siteContent } from "@/content/site";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/episodes/", label: "Episodes" },
  { href: "/about/", label: "About" },
  { href: "/faq/", label: "FAQ" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link
          aria-label={`${siteContent.name} home`}
          className="wordmark"
          href="/"
        >
          <span aria-hidden="true" className="wordmark-symbol">
            OI
          </span>
          <span>{siteContent.name}</span>
        </Link>
        <nav aria-label="Main navigation" className="main-navigation">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <span className="header-edition">
          Independent audio journal <span>·</span> Vol. 01
        </span>
      </div>
    </header>
  );
}
