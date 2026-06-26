import { memo, useCallback, useEffect, useRef } from 'react';
import { currencyConfig, pricingPlans } from '@/constants/pricing';
import { icons } from '@/constants/assets';
import { calculatePlanPrice } from '@/utils/pricing';
import type { BillingCycle, CurrencyCode } from '@/types/pricing';
import { Icon } from '@/components/common/Icon';
import { getPricingTaxNote, getPricingText } from '@/utils/pricingDom';

const currencies: CurrencyCode[] = ['USD', 'INR', 'EUR'];

const initialPlans = pricingPlans.map((plan) => ({
  ...plan,
  price: calculatePlanPrice(plan, 'monthly', 'USD'),
}));

export const Pricing = memo(function Pricing() {
  const stateRef = useRef<{ billingCycle: BillingCycle; currency: CurrencyCode }>({
    billingCycle: 'monthly',
    currency: 'USD',
  });
  const rootRef = useRef<HTMLElement>(null);

  const syncPricingDom = useCallback(() => {
    const root = rootRef.current;

    if (!root) return;

    const { billingCycle, currency } = stateRef.current;
    const taxNode = root.querySelector<HTMLElement>('[data-pricing-tax-note]');
    const monthlyButton = root.querySelector<HTMLButtonElement>('[data-billing-cycle="monthly"]');
    const annualButton = root.querySelector<HTMLButtonElement>('[data-billing-cycle="annual"]');

    if (taxNode) taxNode.textContent = getPricingTaxNote(currency);

    monthlyButton?.classList.toggle('is-selected', billingCycle === 'monthly');
    monthlyButton?.setAttribute('aria-pressed', String(billingCycle === 'monthly'));
    annualButton?.classList.toggle('is-selected', billingCycle === 'annual');
    annualButton?.setAttribute('aria-pressed', String(billingCycle === 'annual'));

    pricingPlans.forEach((plan) => {
      const text = getPricingText(plan.key, billingCycle, currency);
      const monthlyNode = root.querySelector<HTMLElement>(`[data-price-monthly="${plan.key}"]`);
      const invoiceNode = root.querySelector<HTMLElement>(`[data-price-invoice="${plan.key}"]`);

      if (monthlyNode) monthlyNode.textContent = text.monthly;
      if (invoiceNode) invoiceNode.textContent = text.invoice;
    });
  }, []);

  useEffect(() => {
    syncPricingDom();
  }, [syncPricingDom]);

  const updateBillingCycle = useCallback(
    (billingCycle: BillingCycle) => {
      stateRef.current = { ...stateRef.current, billingCycle };
      syncPricingDom();
    },
    [syncPricingDom],
  );

  const handleCurrency = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    stateRef.current = { ...stateRef.current, currency: event.target.value as CurrencyCode };
    syncPricingDom();
  }, [syncPricingDom]);

  const setMonthly = useCallback(() => updateBillingCycle('monthly'), [updateBillingCycle]);
  const setAnnual = useCallback(() => updateBillingCycle('annual'), [updateBillingCycle]);

  return (
    <section
      className="section-shell pricing-section"
      id="pricing"
      aria-labelledby="pricing-title"
      ref={rootRef}
    >
      <div className="section-heading pricing-heading">
        <span>Dynamic Pricing</span>
        <h2 id="pricing-title">Regional pricing generated from one matrix.</h2>
        <p data-pricing-tax-note>{currencyConfig.USD.taxNote}</p>
      </div>

      <div className="pricing-controls" aria-label="Pricing controls">
        <div className="segmented-control" role="group" aria-label="Billing cycle">
          <button
            type="button"
            className="is-selected"
            data-billing-cycle="monthly"
            aria-pressed="true"
            onClick={setMonthly}
          >
            Monthly
          </button>
          <button
            type="button"
            data-billing-cycle="annual"
            aria-pressed="false"
            onClick={setAnnual}
          >
            Annual -20%
          </button>
        </div>

        <label className="currency-select">
          <span>Currency</span>
          <select defaultValue="USD" onChange={handleCurrency} aria-label="Currency">
            {currencies.map((code) => (
              <option key={code} value={code}>
                {code} - {currencyConfig[code].symbolLabel}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="pricing-grid">
        {initialPlans.map((plan) => (
          <article className={`price-card ${plan.highlighted ? 'is-highlighted' : ''}`} key={plan.key}>
            <div className="price-card-header">
              <Icon src={plan.highlighted ? icons.chevronUpSolid : icons.link} className="price-icon" />
              <h3>{plan.name}</h3>
              <p>{plan.description}</p>
            </div>
            <div className="price-value">
              <strong data-price-monthly={plan.key}>{plan.price.monthlyDisplay}</strong>
              <span>/ month</span>
            </div>
            <p className="invoice-note" data-price-invoice={plan.key}>
              Billed monthly
            </p>
            <dl className="plan-meta">
              <div>
                <dt>Seats</dt>
                <dd>{plan.seats}</dd>
              </div>
              <div>
                <dt>Automation</dt>
                <dd>{plan.automations}</dd>
              </div>
            </dl>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>
                  <Icon src={icons.chevronRight} className="size-4" />
                  {feature}
                </li>
              ))}
            </ul>
            <a href="#cta" className={plan.highlighted ? 'button-primary' : 'button-secondary'}>
              Choose {plan.name}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
});
