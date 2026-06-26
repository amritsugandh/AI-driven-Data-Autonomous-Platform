import { memo } from 'react';
import { testimonials } from '@/constants/content';

export const Testimonials = memo(function Testimonials() {
  return (
    <section className="section-shell" aria-labelledby="testimonials-title">
      <div className="section-heading">
        <span>Testimonials</span>
        <h2 id="testimonials-title">Operators trust it because the system stays explainable.</h2>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <figure className="testimonial-card" key={testimonial.name}>
            <blockquote>{testimonial.quote}</blockquote>
            <figcaption>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
});
