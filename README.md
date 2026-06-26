# FlowPilot AI

FlowPilot AI is a responsive Vite + React landing page for an AI-driven data automation platform. It presents workflow automation, governed AI handoffs, dynamic regional pricing, testimonials, and FAQ content in a clean, production-ready single-page website.

🚀 Live Demo: https://ai-driven-data-autonomous-platform-h6aa1rwpb.vercel.app

## ✨ Features

- Responsive layout for desktop, tablet, and small mobile screens
- Minimal entrance and interface animations with reduced-motion support
- Sticky navigation with mobile menu
- Workflow, features, pricing, testimonials, FAQ, and CTA sections
- Dynamic pricing controls for billing cycle and currency
- Accessible semantic sections, labels, and keyboard-friendly controls
- Optimized Vite production build

## 🧰 Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- ESLint
- Prettier

## ⚙️ Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the local URL shown in the terminal. By default, the app runs on:

```text
http://127.0.0.1:5173/
```

## 📜 Available Scripts

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Runs TypeScript build checks and creates a production build in `dist/`.

```bash
npm run preview
```

Serves the production build locally.

```bash
npm run lint
```

Runs ESLint across the project.

```bash
npm run format
```

Formats the project with Prettier.

## 📁 Project Structure

```text
src/
  assets/
  components/
  constants/
  hooks/
  styles/
  types/
  utils/
```

Important files:

- `src/App.tsx` - page composition
- `src/styles/global.css` - global layout, responsive styling, and animations
- `src/constants/content.ts` - navigation, workflow, features, testimonials, and FAQ content
- `src/constants/pricing.ts` - pricing plans and currency configuration
- `src/components/Pricing/Pricing.tsx` - interactive pricing UI

## 🌐 Deployment

Live site:

```text
https://ai-driven-data-autonomous-platform-h6aa1rwpb.vercel.app
```

Vercel project dashboard:

```text
https://vercel.com/amritsugandhs-projects/ai-driven-data-autonomous-platform/DycgwpZ1B4u6j1WVCxxEes2CeL3X
```

Use these settings when importing the GitHub repository:

- Framework Preset: `Vite`
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: `dist`

## 🔗 GitHub Repository

Repository:

```text
https://github.com/amritsugandh/AI-driven-Data-Autonomous-Platform.git
```

## ✅ Next Steps

1. Update `public/sitemap.xml` and `public/robots.txt` with the final production domain.
2. Add a custom domain in Vercel if needed.
