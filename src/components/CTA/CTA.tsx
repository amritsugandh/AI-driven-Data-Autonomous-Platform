import { memo } from 'react';
import { icons } from '@/constants/assets';
import { Icon } from '@/components/common/Icon';

export const CTA = memo(function CTA() {
  return (
    <section className="cta-section" id="cta" aria-labelledby="cta-title">
      <div>
        <span>Ready</span>
        <h2 id="cta-title">Launch your first governed AI workflow this week.</h2>
      </div>
      <a href="mailto:hello@flowpilot.example" className="button-primary">
        Talk to sales
        <Icon src={icons.chevronRight} className="button-icon" />
      </a>
    </section>
  );
});
