import { ANNUAL_DISCOUNT, currencyConfig } from '@/constants/pricing';
import type { BillingCycle, CurrencyCode, PricingPlan } from '@/types/pricing';

export function calculatePlanPrice(
  plan: PricingPlan,
  billingCycle: BillingCycle,
  currency: CurrencyCode,
) {
  const config = currencyConfig[currency];
  const monthlyRegionalPrice = plan.baseMonthlyUsd * config.rateFromUsd;
  const discountedMonthly =
    billingCycle === 'annual' ? monthlyRegionalPrice * (1 - ANNUAL_DISCOUNT) : monthlyRegionalPrice;
  const invoiceTotal = billingCycle === 'annual' ? discountedMonthly * 12 : discountedMonthly;

  return {
    monthlyDisplay: formatCurrency(discountedMonthly, currency),
    invoiceDisplay: formatCurrency(invoiceTotal, currency),
  };
}

export function formatCurrency(value: number, currency: CurrencyCode) {
  const maximumFractionDigits = currency === 'INR' ? 0 : 0;

  return new Intl.NumberFormat(currencyConfig[currency].locale, {
    style: 'currency',
    currency,
    maximumFractionDigits,
  }).format(value);
}
