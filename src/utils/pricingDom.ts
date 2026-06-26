import { currencyConfig, pricingPlans } from '@/constants/pricing';
import { calculatePlanPrice } from '@/utils/pricing';
import type { BillingCycle, CurrencyCode } from '@/types/pricing';

export function getPricingText(planKey: string, billingCycle: BillingCycle, currency: CurrencyCode) {
  const plan = pricingPlans.find((item) => item.key === planKey);

  if (!plan) {
    throw new Error(`Unknown pricing plan: ${planKey}`);
  }

  const price = calculatePlanPrice(plan, billingCycle, currency);

  return {
    monthly: price.monthlyDisplay,
    invoice:
      billingCycle === 'annual' ? `${price.invoiceDisplay} billed annually` : 'Billed monthly',
  };
}

export function getPricingTaxNote(currency: CurrencyCode) {
  return currencyConfig[currency].taxNote;
}
