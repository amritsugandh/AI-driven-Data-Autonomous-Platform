import { memo } from 'react';
import { allIconEntries } from '@/constants/assets';
import { Icon } from '@/components/common/Icon';

export const Footer = memo(function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <strong>FlowPilot AI</strong>
        <p>AI-driven data automation for teams that need speed with accountability.</p>
      </div>
      <div className="asset-strip" aria-label="Provided SVG asset set">
        {allIconEntries.map(([name, src]) => (
          <span key={name} title={name}>
            <Icon src={src} className="size-4" />
          </span>
        ))}
      </div>
    </footer>
  );
});
