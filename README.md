# Sequoia

![App Preview](https://imgix.cosmicjs.com/b6b95910-b82f-11f1-94bf-7719e1524648-image.png?w=1200&h=630&fit=crop&auto=format,compress)

A venture capital firm website styled closely after sequoiacap.com, built entirely from your existing Cosmic content: Articles (perspectives), Companies (portfolio), Founders, People (team), and Podcasts.

## Features

- 🌲 Editorial, warm-cream design with hand-drawn green accent highlights
- 📰 Mixed homepage feed of latest Podcasts, Articles, Founders & Companies
- 👥 Dedicated Founders and Team portrait grids
- 🏢 Portfolio grid for Companies
- 🎙️ Podcast listen grid with overlay titles
- ✍️ Markdown-rendered rich content on every detail page
- 📱 Fully responsive with collapsible mobile navigation
- 🔍 SEO metadata driven by `seo_title` / `seo_description`

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=6ab54541ebf2e3b18dbe6339&clone_repository=6ab548b3ebf2e3b18dbe6348)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> No content model prompt provided - app built from existing content structure

### Code Generation Prompt

> Build a Next.js application for a company website called "Sequoia". The content is managed in Cosmic CMS with the following object types: founder, people, article, company, podcast. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
>
> User instructions: A venture capital firm website styled closely after sequoiacap.com, built from the existing Cosmic content types: Articles (stories/perspectives), Companies (portfolio), Founders, People (team), and Podcasts.
>
> DESIGN (match sequoiacap.com):
> - Warm off-white/cream background (#FBF8F3 or similar), near-black text (#1A1A1A), with a single green accent (#0F9D6B-ish) used sparingly for hand-drawn underline/circle highlights.
> - Typography: elegant serif (e.g. Source Serif / Tiempos-like, use "Source Serif 4" or "Newsreader" from Google Fonts) for headlines; monospace uppercase with wide letter-spacing (e.g. "IBM Plex Mono" or "JetBrains Mono") for nav links, labels, and category tags.
> - Header: wordmark "SEQUOIA" in bold geometric sans with a small striped logo mark on the left; right-aligned uppercase monospace nav: OUR FOUNDERS, OUR COMPANIES, OUR TEAM, STORIES, PODCASTS, plus a search icon. Thin horizontal rule under the header.
> - Homepage hero: large centered serif statement "We help the daring build legendary companies." with an SVG hand-drawn green underline beneath "help the daring" and a hand-drawn green circle around "daring".
> - Below hero: a two-column editorial card grid mixing content types. Each card has a thin top border, a full-bleed image, and an overlaid top-left label with a small white dot + uppercase monospace type tag (PODCAST, PERSPECTIVE/STORY, FOUNDER, COMPANY). Podcast cards show a "LISTEN" label top-right and a large white sans title overlaid on the bottom of the image. Generous whitespace, thin 1px dividers, minimal rounded corners.
> - Subtle hover states (image slight zoom, underline on titles). Fully responsive; mobile nav collapses into a menu.
> - Footer: minimal, cream background, monospace links, thin divider.
>
> PAGES:
> - / Home: hero + mixed featured grid of latest podcasts, articles, founders, companies.
> - /founders and /founders/[slug]
> - /companies and /companies/[slug] (portfolio grid of company cards)
> - /team and /team/[slug] (People type; grid of portraits with names)
> - /stories and /stories/[slug] (Article type; show published_at, featured_image, rich-text content; use seo_title/seo_description for metadata)
> - /podcasts and /podcasts/[slug]
> Render rich-text content fields as markdown. Use featured_image for card images and page headers. Use seo_description for meta descriptions and card excerpts.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Cosmic](https://www.cosmicjs.com) headless CMS via [@cosmicjs/sdk](https://www.cosmicjs.com/docs)
- [react-markdown](https://github.com/remarkjs/react-markdown) for rich text rendering

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed
- A Cosmic bucket with `founder`, `people`, `article`, `company`, and `podcast` object types

### Installation

```bash
bun install
```

Set the following environment variables (see the Environment Variables panel in your dashboard):

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

Run the development server:

```bash
bun run dev
```

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all companies
const { objects: companies } = await cosmic.objects
  .find({ type: 'company' })
  .props(['id', 'slug', 'title', 'metadata'])
  .depth(1)

// Fetch a single article by slug
const { object: article } = await cosmic.objects
  .findOne({ type: 'article', slug: 'my-story' })
  .props(['id', 'slug', 'title', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This app reads directly from your Cosmic bucket's `founder`, `people`, `article`, `company`, and `podcast` object types. Each object's `metadata.featured_image` powers card and header imagery, `metadata.content` is rendered as markdown, and Article's `metadata.seo_title` / `metadata.seo_description` drive page metadata. Learn more in the [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment Options

### Vercel

1. Push this repository to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add the `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, and `COSMIC_WRITE_KEY` environment variables
4. Deploy

### Netlify

1. Push this repository to GitHub
2. Import the project in [Netlify](https://netlify.com)
3. Set build command to `bun run build` and publish directory to `.next`
4. Add the same environment variables
5. Deploy

<!-- README_END -->