import { icons } from '@/constants/assets';
import type { FeatureItem } from '@/types/features';

export const navItems = ['Workflow', 'Features', 'Pricing', 'FAQ'];

export const trustedCompanies = ['Northstar Labs', 'Kitebank', 'Aster Grid', 'BluePeak', 'OrbitOps'];

export const workflowSteps = [
  {
    title: 'Ingest',
    copy: 'Connect PDFs, sheets, CRMs, and shared inboxes to one monitored automation queue.',
    icon: icons.search,
  },
  {
    title: 'Reason',
    copy: 'AI recipes classify, validate, and enrich records with confidence and change history.',
    icon: icons.cog,
  },
  {
    title: 'Sync',
    copy: 'Approved outputs land in downstream systems with traceable retries and alerts.',
    icon: icons.arrowPath,
  },
];

export const features: FeatureItem[] = [
  {
    title: 'Live Ops Board',
    copy: 'A dense command center for queue health, exceptions, owners, and recovery actions.',
    icon: icons.chartPie,
    metric: '99.98%',
  },
  {
    title: 'Adaptive Recipes',
    copy: 'Reusable prompts, validation rules, and transformations that stay versioned as data changes.',
    icon: icons.cube,
    metric: '4.8x',
  },
  {
    title: 'Governed Handoffs',
    copy: 'Human approvals stay attached to every AI decision with exports for security reviews.',
    icon: icons.linkSolid,
    metric: 'SOC2',
  },
  {
    title: 'Revenue Signals',
    copy: 'Spot delayed invoices, churn risk, and regional pricing anomalies before they compound.',
    icon: icons.arrowTrendingUp,
    metric: '31%',
  },
];

export const testimonials = [
  {
    quote: 'FlowPilot replaced eight brittle scripts with one workflow our analysts can actually own.',
    name: 'Mira Shah',
    role: 'VP Operations, Kitebank',
  },
  {
    quote: 'The pricing model alone saved our finance team a full review cycle every month.',
    name: 'Theo Martin',
    role: 'RevOps Lead, Northstar Labs',
  },
  {
    quote: 'It feels fast, accountable, and calm even when our data sources are anything but.',
    name: 'Anika Rao',
    role: 'Data Platform Director, Aster Grid',
  },
];

export const faqs = [
  {
    question: 'Can pricing change without redeploying the page?',
    answer:
      'Yes. Prices are generated from a pricing matrix and regional currency configuration, so billing and currency updates are isolated.',
  },
  {
    question: 'Can teams audit AI decisions?',
    answer:
      'Every workflow step stores recipe version, confidence, reviewer, and destination metadata for clean audit trails.',
  },
];
