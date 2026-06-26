import { memo } from 'react';
import { CTA } from '@/components/CTA/CTA';
import { FAQ } from '@/components/FAQ/FAQ';
import { Features } from '@/components/Features/Features';
import { Hero } from '@/components/Hero/Hero';
import { Pricing } from '@/components/Pricing/Pricing';
import { Testimonials } from '@/components/Testimonials/Testimonials';
import { TrustedCompanies } from '@/components/TrustedCompanies/TrustedCompanies';
import { Workflow } from '@/components/Workflow/Workflow';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';

const MemoizedHero = memo(Hero);
const MemoizedTrustedCompanies = memo(TrustedCompanies);
const MemoizedWorkflow = memo(Workflow);
const MemoizedFeatures = memo(Features);
const MemoizedPricing = memo(Pricing);
const MemoizedTestimonials = memo(Testimonials);
const MemoizedFAQ = memo(FAQ);
const MemoizedCTA = memo(CTA);
const MemoizedFooter = memo(Footer);

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <MemoizedHero />
        <MemoizedTrustedCompanies />
        <MemoizedWorkflow />
        <MemoizedFeatures />
        <MemoizedPricing />
        <MemoizedTestimonials />
        <MemoizedFAQ />
        <MemoizedCTA />
      </main>
      <MemoizedFooter />
    </>
  );
}
