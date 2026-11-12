import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/dm-sans";
import "./globals.css";

import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: {
    default: "Offbeat Index | Culture, work, and ideas",
    template: "%s | Offbeat Index",
  },
  description:
    "A fictional field guide to contemporary culture, creative work, and the ideas shaping what comes next.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
