# Michael Olawale Personal Website

A GitHub-inspired static SvelteKit personal site for Michael Olawale: founder, builder, and product-minded technologist. The site is designed as a calm central hub for products, apps, subdomains, impact, writing, and collaboration.

## Stack

- SvelteKit 2 with Svelte 5 runes
- TypeScript
- Tailwind CSS v4
- Netlify adapter
- Geist Mono UI typography, Instrument Serif headings, and GitHub-like panels, labels, repository cards, and activity surfaces
- `@lucide/svelte` icons

## Project Structure

```txt
src/lib/site.ts                 # Editable content, navigation, products, metrics, writing
src/lib/components/             # Reusable UI and SEO components
src/routes/+page.svelte         # GitHub-like profile dashboard
src/routes/about/+page.svelte   # Profile README, timeline, expertise, philosophy
src/routes/work/+page.svelte    # Repository-style product/app/project grid
src/routes/impact/+page.svelte  # Organization insights, metrics, testimonials, logos
src/routes/writing/+page.svelte # Discussions-style notes index with MDX/MDsveX-ready shape
src/routes/contact/+page.svelte # New-issue style Netlify-ready contact form and links
src/routes/sitemap.xml/+server.ts
static/og.svg
static/portrait-placeholder.svg
```

## Editing Content

Most copy, products, links, metrics, testimonials, and writing entries live in [src/lib/site.ts](src/lib/site.ts). Replace placeholder project links, app store URLs, metrics, testimonials, and the portrait asset when real content is available.

## Development

```sh
pnpm install
pnpm dev
```

## Quality Checks

```sh
pnpm check
pnpm lint
pnpm build
```

## Netlify Deployment

The project already uses `@sveltejs/adapter-netlify`. In Netlify, set:

- Build command: `pnpm build`
- Publish directory: `build`
- Node version: current LTS

The contact page uses Netlify Forms attributes, and the site is prerendered for strong performance and SEO.

## SEO

SEO is handled by reusable metadata in [src/lib/components/Seo.svelte](src/lib/components/Seo.svelte), global person structured data in the root layout, a generated sitemap at `/sitemap.xml`, and Open Graph imagery in [static/og.svg](static/og.svg).
