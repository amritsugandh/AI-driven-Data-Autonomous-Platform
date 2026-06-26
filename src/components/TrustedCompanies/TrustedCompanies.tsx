import { memo } from 'react';
import { trustedCompanies } from '@/constants/content';

export const TrustedCompanies = memo(function TrustedCompanies() {
  return (
    <section className="trusted-section" aria-label="Trusted companies">
      <p>Trusted by data, finance, and operations teams</p>
      <div className="logo-row">
        {trustedCompanies.map((company) => (
          <span key={company}>{company}</span>
        ))}
      </div>
    </section>
  );
});
