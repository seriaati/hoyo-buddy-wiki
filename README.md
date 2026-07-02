# Hoyo Buddy Wiki

Documentation for [Hoyo Buddy](https://hb.seria.moe), built with
[Astro](https://astro.build/) + [Starlight](https://starlight.astro.build/).

It's a static site: every page is pre-rendered to HTML, images are optimized at build time, and
search runs fully in-browser via [Pagefind](https://pagefind.app/) (no external search service).

## Getting started

```bash
npm install
npm run dev      # local dev server at http://localhost:4321 (live reload)
```

The root URL redirects to `/en/intro/`. No `.env` or API keys are needed.

Other commands:

```bash
npm run build    # static build into dist/
npm run preview  # serve the built dist/ locally
```

## Project structure

```txt
src/
  content/docs/        # all documentation, one folder per language
    en/  vi/  es/  zh-Hans/  zh-Hant/
  assets/images/       # images, referenced from docs as ../../../assets/images/...
  styles/custom.css    # brand colors / custom styles
astro.config.mjs       # site config: sidebar, locales, redirects
public/                # files served as-is (favicon, CNAME, .nojekyll)
```

Every language lives in its own folder under `src/content/docs/`, so all locales are symmetric —
English is not special-cased. Because every doc sits at the same depth, image paths are identical
across languages.

## Editing & adding pages

Each page is a Markdown file with a `title` in frontmatter:

```markdown
---
title: Getting Started
---

Your content here. Link to other pages with relative paths: [FAQ](./faq.md).
Images: ![alt](../../../assets/images/example.png)
```

- Admonitions use the `:::note` / `:::tip` / `:::caution` / `:::danger` syntax.
- A new page won't appear in the sidebar until you add it to the `sidebar` array in
  [`astro.config.mjs`](./astro.config.mjs).

## Translations

Translators: copy a file from `src/content/docs/en/` into your language folder
(e.g. `src/content/docs/vi/`), keeping the **same filename**, and translate the content. Translate
the `title` in the frontmatter too.

Then open a pull request.

### Adding a new language

In [`astro.config.mjs`](./astro.config.mjs):

1. Add an entry to `locales` (see [BCP-47 language tags](https://www.w3.org/International/articles/language-tags/)):
   ```js
   locales: {
     // ...
     ja: { label: '日本語', lang: 'ja' },
   }
   ```
2. Add the language code to the `LOCALES` array (so old-URL redirects are generated for it).
3. Create `src/content/docs/ja/` and add the translated pages.

Sidebar group labels (FAQ, About, …) are translated inline via each group's `translations` field in
the same file.

## Deployment

The site deploys on [Vercel](https://vercel.com/) — Astro is auto-detected, no config needed. Pushes
are built and deployed automatically; pull requests get preview deployments.

Old Docusaurus URLs (e.g. `/docs/Getting-Started`, `/es/docs/FAQ`) redirect to their new paths — the
redirect map is generated in `astro.config.mjs`.
