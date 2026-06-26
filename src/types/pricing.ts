export type BillingCycle = 'monthly' | 'annual';

export type CurrencyCode = 'INR' | 'USD' | 'EUR';

export type PlanKey = 'starter' | 'scale' | 'enterprise';

export interface PricingPlan {
  key: PlanKey;
  name: string;
  description: string;
  baseMonthlyUsd: number;
  seats: string;
  automations: string;
  features: string[];
  highlighted?: boolean;
}

export interface CurrencyConfig {
  code: CurrencyCode;
  locale: string;
  rateFromUsd: number;
  symbolLabel: string;
  taxNote: string;
}
