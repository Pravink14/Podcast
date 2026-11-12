import { FAQList } from "@/components/faq-list";
import { faqItems } from "@/content/site";

export default function FAQPage() {
  return (
    <div className="faq-page page-shell">
      <header className="faq-heading">
        <p className="eyebrow">Before you dive in</p>
        <h1 className="page-heading">A few good questions.</h1>
        <p className="page-intro">
          The short version of what this project is and what it isn’t.
        </p>
      </header>
      <FAQList items={faqItems} />
    </div>
  );
}
