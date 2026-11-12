import type { FAQItem } from "@/content/site";

type FAQListProps = {
  items: FAQItem[];
};

export function FAQList({ items }: FAQListProps) {
  return (
    <section aria-label="Frequently asked questions" className="faq-list">
      {items.map((item, index) => (
        <details className="faq-item" key={item.id}>
          <summary>
            <span className="faq-item-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="faq-item-question">{item.question}</span>
            <span aria-hidden="true" className="faq-item-toggle" />
          </summary>
          <div className="faq-item-answer">
            <p>{item.answer}</p>
          </div>
        </details>
      ))}
    </section>
  );
}
