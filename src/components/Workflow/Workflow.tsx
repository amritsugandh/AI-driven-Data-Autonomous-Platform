import { memo } from 'react';
import { workflowSteps } from '@/constants/content';
import { Icon } from '@/components/common/Icon';

export const Workflow = memo(function Workflow() {
  return (
    <section className="section-shell" id="workflow" aria-labelledby="workflow-title">
      <div className="section-heading">
        <span>AI Workflow</span>
        <h2 id="workflow-title">From raw inputs to trusted systems of record.</h2>
      </div>
      <div className="workflow-grid">
        {workflowSteps.map((step, index) => (
          <article className="workflow-card" key={step.title}>
            <Icon src={step.icon} className="workflow-icon" />
            <span className="step-index">0{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
});
