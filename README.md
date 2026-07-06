# EcoWise Water Management — Website

Utah water conservation consulting website. Built with Next.js (App Router), TypeScript, and Tailwind CSS v4.

Replaces the previous Google Sites page with a fast, SEO-solid site: real metadata and structured data, a working lead-capture form for free water savings assessments, and a design system built around the EcoWise brand (leaf green + water blue).

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3300](http://localhost:3300) (dev server runs on port 3300 — see `package.json`).

## Project Structure

- `app/` — routes (`/`, `/services`, `/about`, `/contact`, `/project-history`), and SEO files (`sitemap.ts`, `robots.ts`, `opengraph-image.tsx`)
- `components/ui/` — design system primitives (Button, Card, Container, SectionHeading)
- `components/layout/` — Header, Footer
- `components/sections/` — homepage/page sections (Hero, ServicesGrid, WhoWeHelp, WhyItMatters, ProcessSteps, CtaBand, NoCostAssessment)
- `components/forms/` — the Free Assessment lead form, which submits directly to Formspree
- `content/` — site copy and structured data (services, audiences, process steps, project history), pulled from EcoWise's existing assessment PDF and live site copy
- `lib/` — SEO helpers, `cn()` utility

## Content Editing

All editable copy lives in `content/*.ts` as plain TypeScript objects. Update `content/site.ts` for contact info/nav, `content/services.ts` for services, audiences served, and the process steps.

Replace the placeholder brand mark in `components/layout/Header.tsx` / `Footer.tsx` (currently a generated icon) with the real EcoWise logo once you have a clean image asset — the current logo only exists embedded in a business-card screenshot.

## Forms & Lead Delivery

The Free Assessment form (`components/forms/AssessmentForm.tsx`) POSTs directly to [Formspree](https://formspree.io) (endpoint id `maqgkqzg`), which emails submissions straight to the inbox connected to that Formspree form. No API keys or environment variables needed — manage the notification email and spam filtering from the Formspree dashboard.

## SEO

- Per-page metadata via `lib/seo.ts#buildMetadata()`
- `LocalBusiness` JSON-LD in the root layout via `lib/seo.ts#organizationJsonLd()`
- `app/sitemap.ts` / `app/robots.ts` (Next.js Metadata Route conventions)
- Dynamic OG image at `app/opengraph-image.tsx`

## Deployment

Deployed on [Vercel](https://vercel.com/new), live at `ecowisewater.com`. No environment variables are required.
