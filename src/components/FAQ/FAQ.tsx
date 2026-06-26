import { memo, useState } from 'react';
import { faqs } from '@/constants/content';
import { icons } from '@/constants/assets';
import { Icon } from '@/components/common/Icon';

export const FAQ = memo(function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-shell faq-section" id="faq" aria-labelledby="faq-title">
      <div className="section-heading">
        <span>FAQ</span>
        <h2 id="faq-title">Built for challenge requirements and real workflows.</h2>
      </div>
      <div className="faq-list">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <article className="faq-item" key={faq.question}>
              <button
                type="button"
                onClick={() => setOpenIndex(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-${index}`}
              >
                <span>{faq.question}</span>
                <Icon src={isOpen ? icons.chevronUp : icons.chevronDown} className="size-4" />
              </button>
              <p id={`faq-${index}`} hidden={!isOpen}>
                {faq.answer}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
});
