import type { CurrencyCode, CurrencyConfig, PricingPlan } from '@/types/pricing';

export const ANNUAL_DISCOUNT = 0.2;

export const currencyConfig: Record<CurrencyCode, CurrencyConfig> = {
  USD: {
    code: 'USD',
    locale: 'en-US',
    rateFromUsd: 1,
    symbolLabel: 'US dollar',
    taxNote: 'Billed in USD before local taxes.',
  },
  INR: {
    code: 'INR',
    locale: 'en-IN',
    rateFromUsd: 83,
    symbolLabel: 'Indian rupee',
    taxNote: 'Localized for India with GST handled at checkout.',
  },
  EUR: {
    code: 'EUR',
    locale: 'de-DE',
    rateFromUsd: 0.92,
    symbolLabel: 'Euro',
    taxNote: 'Localized for EU teams before VAT.',
  },
};

export const pricingPlans: PricingPlan[] = [
  {
    key: 'starter',
    name: 'Starter',
    description: 'For lean teams replacing spreadsheet handoffs.',
    baseMonthlyUsd: 29,
    seats: '3 seats',
    automations: '25 workflows',
    features: ['AI extraction runs', 'Versioned recipes', 'Email support'],
  },
  {
    key: 'scale',
    name: 'Scale',
    description: 'For operators running live automations every day.',
    baseMonthlyUsd: 89,
    seats: '12 seats',
    automations: '250 workflows',
    highlighted: true,
    features: ['Approval routing', 'Anomaly monitors', 'Priority support', 'Audit exports'],
  },
  {
    key: 'enterprise',
    name: 'Enterprise',
    description: 'For governed automation across business units.',
    baseMonthlyUsd: 249,
    seats: 'Unlimited seats',
    automations: 'Custom volume',
    features: ['Private deployment', 'SAML and SCIM', 'Dedicated success', 'Custom SLAs'],
  },
];
