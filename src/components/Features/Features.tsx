import { memo, useCallback, useState } from 'react';
import { features } from '@/constants/content';
import { icons } from '@/constants/assets';
import { Icon } from '@/components/common/Icon';

export const Features = memo(function Features() {
  const [activeFeature, setActiveFeature] = useState(0);
  const selectFeature = useCallback((index: number) => setActiveFeature(index), []);

  return (
    <section className="section-shell" id="features" aria-labelledby="features-title">
      <div className="section-heading">
        <span>Features</span>
        <h2 id="features-title">A focused workspace for governed AI automation.</h2>
      </div>

      <div className="bento-grid" aria-label="Feature bento grid">
        {features.map((feature, index) => (
          <button
            key={feature.title}
            type="button"
            className={`bento-card bento-card-${index} ${activeFeature === index ? 'is-active' : ''}`}
            onClick={() => selectFeature(index)}
            onFocus={() => selectFeature(index)}
            onMouseEnter={() => selectFeature(index)}
            aria-pressed={activeFeature === index}
          >
            <span className="bento-card-top">
              <Icon src={feature.icon} className="feature-icon" />
              <span>{feature.metric}</span>
            </span>
            <strong>{feature.title}</strong>
            <span>{feature.copy}</span>
          </button>
        ))}
      </div>

      <div className="mobile-accordion" aria-label="Feature details">
        {features.map((feature, index) => {
          const isActive = activeFeature === index;
          return (
            <article className={`accordion-item ${isActive ? 'is-active' : ''}`} key={feature.title}>
              <button
                type="button"
                onClick={() => selectFeature(index)}
                aria-expanded={isActive}
                aria-controls={`feature-panel-${index}`}
              >
                <span>
                  <Icon src={feature.icon} className="feature-icon" />
                  {feature.title}
                </span>
                <Icon src={isActive ? icons.chevronUp : icons.chevronDown} className="size-4" />
              </button>
              <div id={`feature-panel-${index}`} hidden={!isActive}>
                <strong>{feature.metric}</strong>
                <p>{feature.copy}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
});
