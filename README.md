# Earnest Gumiho

The website for **Gumiho LLC** and its brand **Earnest Gumiho**: premium Korean ginseng powders from Geumsan, Korea. The site presents the products, links to them on Amazon, and shares ginseng recipes and articles.

Live site: [gumihollc.com](https://gumihollc.com)

Built with [Astro](https://astro.build/), [Tailwind CSS](https://tailwindcss.com/), and [Preline UI](https://preline.co/), starting from the open-source [ScrewFast](https://github.com/mearashadowfax/ScrewFast) template (see [Credits](#credits)).

**Pages**

| Page      | URL         | What's on it                                                                                    |
| --------- | ----------- | ----------------------------------------------------------------------------------------------- |
| Home      | `/`         | Hero, ginseng benefits, "From Geumsan to your table" tabs, customer reviews, FAQ, Amazon banner |
| Products  | `/products` | Ginseng Powder and Lululala Ginseng Powder, each with its own page and Amazon link              |
| Our Story | `/about`    | Company mission, Geumsan, manufacturing                                                         |
| Recipes   | `/blog`     | Latte, iced latte, and slush recipes, plus articles about Korean ginseng                        |
| FAQ       | `/faq`      | Common questions                                                                                |
| Contact   | `/contact`  | Email, KakaoTalk, and Instagram (no contact form)                                               |

---

## Table of Contents

- [Getting Started](#getting-started)
- [Editing the Site](#editing-the-site)
  - [Page text](#page-text)
  - [Contact details and Amazon links](#contact-details-and-amazon-links)
  - [Products](#products)
  - [Recipes and articles](#recipes-and-articles)
  - [FAQ and ginseng benefits](#faq-and-ginseng-benefits)
  - [Customer reviews](#customer-reviews)
  - [Images](#images)
  - [Navigation and footer](#navigation-and-footer)
  - [Brand colors and logo](#brand-colors-and-logo)
- [Korean Translation](#korean-translation)
- [Building, Testing, and Deploying](#building-testing-and-deploying)
- [Project Structure](#project-structure)
- [Under the Hood](#under-the-hood)
- [Credits](#credits)

---

## Getting Started

You need **Node.js 22** and **pnpm** (CI uses pnpm 9; newer versions also work).

```bash
pnpm install
pnpm dev
```

Open <http://localhost:4321>. The page reloads whenever you save a file.

> [!NOTE]
> **pnpm 10 or newer** may stop the install with `Ignored build scripts: esbuild`. Create a `pnpm-workspace.yaml` in the project root with:
>
> ```yaml
> allowBuilds:
>   esbuild: false
> ```

> [!WARNING]
> **Windows + WSL:** keep the project inside the Linux file system (for example `~/gumihollc`), not in a Windows or OneDrive folder under `/mnt/c/`. `pnpm install` fails there with `ERR_PNPM_CMD_SHIM_CHMOD`, and OneDrive tries to sync `node_modules`.

---

## Editing the Site

Almost everything you'd want to change is text or data. You rarely need to touch components.

### Page text

All page and navigation text lives in one file: [`src/copy/en.ts`](src/copy/en.ts). It's organized by page (`home`, `about`, `contact`, `faq`, `blogIndex`, `productsIndex`, …) plus shared pieces (`nav`, `footer`, `notFound`).

Headings that contain `<span class="text-pink-500 …">` highlight part of the heading in brand pink. Keep the tag if you want the highlight.

Site-wide SEO text (the default description and the social-sharing title) is in the `site` block at the top of the same file.

### Contact details and Amazon links

[`src/data_files/constants.ts`](src/data_files/constants.ts):

- `SITE`: brand name, legal company name, and domain
- `CONTACT`: email, KakaoTalk ID, Instagram handle and URL (used by the contact page and footer)
- `SHOP.amazonUrl`: the Amazon link used by the home-page banner and the footer's "Buy on Amazon"

Each product's own Amazon button is set in its product file (`btnURL`, see below).

> [!TIP]
> Use the short form of Amazon links, `https://www.amazon.com/dp/<ASIN>`. Share links copied from Amazon include tracking parameters that can stop working.

### Products

One Markdown file per product in [`src/content/products/en/`](src/content/products/en/). The file name becomes the URL (`ginseng-powder.md` → `/products/ginseng-powder`).

Each file is front matter only. The fields:

| Field                                         | What it controls                                                                      |
| --------------------------------------------- | ------------------------------------------------------------------------------------- |
| `title`, `description`                        | Product name and one-line subtitle                                                    |
| `main.id`                                     | Sort order on the products page                                                       |
| `main.content`                                | Intro sentence at the top of the product page                                         |
| `main.imgCard`, `main.imgMain`, `main.imgAlt` | Product image (card and page) and its description                                     |
| `tabs`                                        | Tab titles; include the third tab only if the product has `blueprints` photos         |
| `longDescription`                             | Main description, plus the button (`btnTitle`, `btnURL`, the Amazon link)             |
| `descriptionList`                             | The three highlights beside the description                                           |
| `specificationsLeft`, `tableData`             | The **Details** tab                                                                   |
| `blueprints`                                  | Two photos for the optional third tab (with `firstAlt`/`secondAlt`), or `{}` for none |

To add a product, copy an existing file, rename it, and edit it. The schema is in [`src/content.config.ts`](src/content.config.ts); a missing or misspelled field fails the build.

### Recipes and articles

- **Recipes:** [`src/content/blog/en/`](src/content/blog/en/), shown on `/blog` newest first by `pubDate`
- **Articles** ("Learn About Korean Ginseng"): [`src/content/insights/en/`](src/content/insights/en/)

Both are Markdown with front matter and a body. A recipe:

```md
---
title: 'Hot Ginseng Latte'
description: 'A warm, creamy 12oz latte made with Earnest Gumiho ginseng powder.'
author: 'Earnest Gumiho'
role: 'Recipe'
authorImage: '@/images/gumiho/transparent gumihollc logo.png'
authorImageAlt: 'Earnest Gumiho logo'
pubDate: 2026-09-22
cardImage: '@/images/gumiho/hot latte.jpg'
cardImageAlt: 'A hot ginseng latte in a cup'
readTime: 2
tags: ['recipe', 'latte', 'hot']
---

## Ingredients

- Gumiho's Ginseng Powder (10g)
- ...
```

Articles use `##` headings; they become the article's table of contents automatically.

### FAQ and ginseng benefits

- **FAQ:** [`src/data_files/faqs.json`](src/data_files/faqs.json), shown on `/faq` and on the home page
- **Benefits** (the six items under "Benefits of Korean Ginseng"): [`src/data_files/features.json`](src/data_files/features.json). `svg` is an icon name from [`icons.ts`](src/components/ui/icons/icons.ts).

### Customer reviews

Reviews live in `home.testimonials.quotes` in [`src/copy/en.ts`](src/copy/en.ts). The same list appears on the home page and the products page. Each review has `content`, `author`, and an optional `role` (for example "Verified Amazon Buyer"). Reviews don't show photos.

### Images

Put images in [`src/images/gumiho/`](src/images/gumiho/). Astro resizes and converts them at build time, so full-size originals are fine.

- **In Markdown:** reference them as `'@/images/gumiho/<file name>'`
- **In a page:** import them in the view, for example [`src/views/HomeView.astro`](src/views/HomeView.astro)

The home-page hero crops the image to a wide frame. Use `imagePosition` on `<HeroSection>` to choose which part stays visible (for example `"50% 75%"` keeps the lower part).

Always write alt text that describes what's in the photo.

### Navigation and footer

- **Links:** [`src/data_files/navigation.ts`](src/data_files/navigation.ts) holds the link structure (ids and paths).
- **Labels:** the visible text is in the `nav` block of [`src/copy/en.ts`](src/copy/en.ts).

### Brand colors and logo

- **Colors:** the brand pink scale (`pink-50` … `pink-950`) is defined in the `@theme` block of [`src/assets/styles/global.css`](src/assets/styles/global.css). It's sampled from the logo. Change the values there and the whole site follows.
- **Logo:** `src/images/gumiho/transparent gumihollc logo.png` is used in the navbar, the footer, the favicon, and the app icons.
  - [`BrandLogo.astro`](src/components/BrandLogo.astro) pairs it with the "Earnest Gumiho" name as text, because the lettering inside the round logo is too small to read at navbar size.

---

## Korean Translation

A full Korean translation exists but is **not published yet**. The files:

- [`src/copy/ko.ts`](src/copy/ko.ts): page text
- [`src/data_files/ko/`](src/data_files/ko/): FAQ and benefits
- `src/content/{blog,insights,products}/ko/`: recipes, articles, and products (same file names as English)
- [`src/pages/_ko/`](src/pages/_ko/): the Korean routes. Astro ignores folders starting with `_`, so nothing is built.

While Korean is off:

- **The language picker is hidden.**
- **Missing translations don't break the build.** Anything missing from `ko.ts` falls back to English, so you can add English text without translating it right away.
- **Typos still fail the build.** A misspelled key in `ko.ts` is caught.

**To publish Korean:**

1. Add `'ko'` to `MARKETING_LOCALES` in [`src/utils/locale.ts`](src/utils/locale.ts).
2. Rename `src/pages/_ko/` to `src/pages/ko/`.
3. Uncomment `ko: 'ko'` in the sitemap `locales` in [`astro.config.mjs`](astro.config.mjs).
4. Add `'/ko'` to `LOCALE_PREFIXES` in [`scripts/smoke.mjs`](scripts/smoke.mjs).
5. Add this rewrite to [`vercel.json`](vercel.json) so missing Korean pages show the Korean 404:

   ```json
   "rewrites": [{ "source": "/ko/:path*", "destination": "/ko/404" }]
   ```

6. Compare `en.ts` with `ko.ts` and translate anything added since.
7. Have a native speaker review the text, especially the health-related wording.

Korean pages will live under `/ko` (for example `/ko/products`). The language picker links each page to its twin in the other language.

---

## Building, Testing, and Deploying

| Command                                 | What it does                                                                                   |
| --------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `pnpm dev`                              | Local dev server at <http://localhost:4321>                                                    |
| `pnpm build`                            | Type-checks everything (`astro check`), builds the site into `dist/`, and minifies the HTML    |
| `pnpm preview`                          | Serves the built `dist/` locally                                                               |
| `pnpm test:smoke`                       | Serves `dist/` and checks that every page loads and shows key content (run after `pnpm build`) |
| `pnpm format:check` / `pnpm format:fix` | Checks or fixes code formatting with Prettier                                                  |

**CI:** [`.github/workflows/ci.yml`](.github/workflows/ci.yml) runs install, `format:check`, `build`, and `test:smoke` on every push and pull request. Run the same commands locally before pushing.

**Deploying:** `pnpm build` produces a static site in `dist/` that any static host can serve. [`vercel.json`](vercel.json) adds security headers (including a Content Security Policy) and caching rules on Vercel. If you add third-party scripts, fonts, or image hosts, allow them in the CSP there.

---

## Project Structure

```
src/
├── assets/
│   ├── scripts/            # Lenis smooth scrolling
│   └── styles/             # global.css (brand colors), lenis.css
├── components/
│   ├── BrandLogo.astro     # Logo + "Earnest Gumiho" wordmark
│   ├── Meta.astro          # Renders the <head> from utils/metadata.ts
│   ├── sections/           # Page sections: hero, features, products, testimonials, FAQ, navbar & footer, ...
│   └── ui/                 # Buttons, cards, banners, icons, ...
├── content/
│   ├── blog/               # Recipes (en/, ko/)
│   ├── insights/           # Ginseng articles (en/, ko/)
│   └── products/           # Products (en/, ko/)
├── copy/                   # en.ts (all site text), ko.ts (Korean), index.ts
├── data_files/             # constants.ts (site, contact, Amazon), navigation.ts, faqs/features JSON (+ ko/)
├── images/gumiho/          # All site images
├── layouts/MainLayout.astro
├── middleware.ts           # Resolves the language for each request
├── pages/                  # One file per route; _ko/ holds the unpublished Korean routes
├── utils/                  # locale.ts (languages), content.ts, metadata.ts (SEO)
├── views/                  # One view per page, shared by every language
└── content.config.ts       # Product, recipe, and article schemas

scripts/smoke.mjs           # Post-build page checks
process-html.mjs            # Post-build HTML minifier
vercel.json                 # Security headers and caching
ABOUTGUMIHO.md              # Original copy from the previous gumihollc.com site
```

Path aliases (`@components/*`, `@data/*`, `@images/*`, `@utils/*`, `@views/*`, `@/*`, …) are defined in [`tsconfig.json`](tsconfig.json).

Pages are thin: each file in `src/pages/` renders a view from `src/views/` for its language. Views pull text from `src/copy/` and pass it to section components. To change what a page says, edit the copy. To change which sections a page shows, edit its view.

---

## Under the Hood

- **SEO:** each page tells `MainLayout` its `title`, `description`, and `kind`. [`src/utils/metadata.ts`](src/utils/metadata.ts) then builds the rest:
  - the title with the " | Earnest Gumiho" suffix
  - Open Graph and Twitter tags
  - the canonical URL
  - `hreflang` links
  - schema.org JSON-LD data (products are marked up as `Product`, recipes as `BlogPosting`)
- **Sitemap and robots.txt:** both are generated at build time from `site` in [`astro.config.mjs`](astro.config.mjs).
- **Smooth scrolling:** [Lenis](https://lenis.dev/) is loaded in `MainLayout.astro`. Remove its `<script>` import there to go back to native scrolling.
- **Animations:** [GSAP](https://gsap.com/) animates product and article pages on load. The code is in the `<script>` blocks of `ProductDetail.astro` and `InsightDetail.astro`.
- **Hidden scrollbar:** the page scrollbar is hidden by the `scrollbar-hide` class on `<html>` in `MainLayout.astro`. Remove the class to show it.
- **Dark mode:** there's a toggle in the navbar, and every section has dark styles.
- **Icons:** SVG icons are defined in [`icons.ts`](src/components/ui/icons/icons.ts) and rendered with `<Icon name="..." class="h-6 w-6" />`. Icon names are typed, so a typo fails the build.
- **Image pasting:** with the included [`.vscode/settings.json`](.vscode/settings.json), you can paste or drop an image into a Markdown file in VS Code while holding <kbd>Shift</kbd>. VS Code copies the file into the project and inserts the link.

---

## Credits

This site is built on [ScrewFast](https://github.com/mearashadowfax/ScrewFast) by Emil Gulamov, used under the MIT License. The original copyright and license notice is kept in [LICENSE](LICENSE), as the license requires.

Earnest Gumiho, Gumiho LLC, the logo, product photos, and site content belong to Gumiho LLC.
