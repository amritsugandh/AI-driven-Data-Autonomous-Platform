import { memo, useEffect, useRef } from 'react';
import { icons } from '@/constants/assets';
import { Icon } from '@/components/common/Icon';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export const Hero = memo(function Hero() {
  const visualRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!visualRef.current || prefersReducedMotion) return;

    const animation = visualRef.current.animate(
      [
        { transform: 'translate3d(0, 10px, 0)', opacity: 0.92 },
        { transform: 'translate3d(0, 0, 0)', opacity: 1 },
      ],
      { duration: 420, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'both' },
    );

    return () => animation.cancel();
  }, [prefersReducedMotion]);

  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            <Icon src={icons.arrowTrendingUp} className="eyebrow-icon" />
            AI data automation for teams that ship outcomes
          </p>
          <h1 id="hero-title">FlowPilot AI</h1>
          <p className="hero-lede">
            Convert messy documents, sheets, and operational queues into governed AI workflows
            with live monitoring, regional pricing, and human approval built in.
          </p>
          <div className="hero-actions">
            <a href="#pricing" className="button-primary">
              Start automating
            </a>
            <a href="#workflow" className="button-secondary">
              View workflow
              <Icon src={icons.chevronRight} className="button-icon" />
            </a>
          </div>
        </div>

        <div className="hero-visual" ref={visualRef} aria-label="Automation workflow preview">
          <div className="hero-panel hero-panel-main">
            <div className="panel-topline">
              <span>Queue Health</span>
              <strong>99.98%</strong>
            </div>
            <div className="data-rail">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="flow-card">
              <Icon src={icons.search} className="flow-icon" />
              <div className="flow-card-copy">
                <strong>Invoice PDF batch</strong>
                <span>Classified, validated, ready for sync</span>
              </div>
            </div>
            <div className="flow-card is-warm">
              <Icon src={icons.cog} className="flow-icon" />
              <div className="flow-card-copy">
                <strong>Recipe confidence</strong>
                <span>Human approval threshold met</span>
              </div>
            </div>
          </div>
          <div className="hero-panel hero-panel-side">
            <Icon src={icons.chartPie} className="side-icon" />
            <strong>31%</strong>
            <span>fewer revenue exceptions</span>
          </div>
        </div>
      </div>
    </section>
  );
});
