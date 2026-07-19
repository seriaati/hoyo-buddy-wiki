import { defineRouteMiddleware, type StarlightRouteData } from '@astrojs/starlight/route-data';
import type { ImageMetadata } from 'astro';

type StarlightHead = StarlightRouteData['head'];

import enBanner from './assets/images/branding/en_banner.png';
import viBanner from './assets/images/branding/vi_banner.png';
import zhCnBanner from './assets/images/branding/zh_CN_banner.png';
import zhTwBanner from './assets/images/branding/zh_TW_banner.png';

const SITE_NAME = 'Hoyo Buddy Documentation';

// Spanish has no localized banner, so it falls back to the English one.
const BANNERS: Record<string, ImageMetadata> = {
  en: enBanner,
  es: enBanner,
  vi: viBanner,
  'zh-cn': zhCnBanner,
  'zh-tw': zhTwBanner,
};

const DESCRIPTION_MAX_LENGTH = 160;

export const onRequest = defineRouteMiddleware((context) => {
  const { head, entry, locale } = context.locals.starlightRoute;

  setMeta(head, 'property', 'og:site_name', SITE_NAME);

  const banner = BANNERS[locale ?? 'en'] ?? enBanner;
  const imageUrl = new URL(banner.src, context.site).href;
  setMeta(head, 'property', 'og:image', imageUrl);
  setMeta(head, 'property', 'og:image:width', String(banner.width));
  setMeta(head, 'property', 'og:image:height', String(banner.height));
  setMeta(head, 'name', 'twitter:image', imageUrl);

  // Frontmatter descriptions (and the site-wide default) are already in the
  // head; only fill in a body-derived one when the page has no description
  // of its own.
  if (!entry.data.description) {
    const description = extractDescription(entry.body);
    if (description) {
      setMeta(head, 'name', 'description', description);
      setMeta(head, 'property', 'og:description', description);
    }
  }
});

/** Set the `content` of a `<meta>` tag in the head, adding the tag if missing. */
function setMeta(head: StarlightHead, key: 'name' | 'property', id: string, content: string): void {
  const existing = head.find((tag) => tag.tag === 'meta' && tag.attrs?.[key] === id);
  if (existing) {
    existing.attrs = { ...existing.attrs, content };
  } else {
    head.push({ tag: 'meta', attrs: { [key]: id, content }, content: '' });
  }
}

/** Derive a plain-text description from the first regular paragraph of a page body. */
function extractDescription(body: string | undefined): string | undefined {
  if (!body) return undefined;

  const lines = body.replace(/<!--[\s\S]*?-->/g, '').split('\n');
  let inCodeFence = false;
  let paragraph: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();

    if (/^(```|~~~)/.test(trimmed)) {
      inCodeFence = !inCodeFence;
      paragraph = [];
      continue;
    }
    if (inCodeFence) continue;

    // Blank line ends the current paragraph; use it if we collected one.
    if (trimmed === '') {
      if (paragraph.length > 0) break;
      continue;
    }

    // Skip lines that aren't regular prose: headings, images, lists, tables,
    // aside/directive markers, blockquotes, MDX imports/exports, and HTML tags.
    if (/^(#|!\[|[-*+]\s|\d+\.\s|\||:::|>|import\s|export\s|<)/.test(trimmed)) {
      if (paragraph.length > 0) break;
      continue;
    }

    paragraph.push(trimmed);
  }

  if (paragraph.length === 0) return undefined;
  return truncate(stripInlineMarkdown(paragraph.join(' ')));
}

/** Strip inline Markdown syntax, keeping only the readable text. */
function stripInlineMarkdown(text: string): string {
  return text
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '') // images
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // links -> link text
    .replace(/(\*\*|__)(.*?)\1/g, '$2') // bold
    .replace(/(\*|_)(.*?)\1/g, '$2') // italics
    .replace(/`([^`]*)`/g, '$1') // inline code
    .replace(/\s+/g, ' ')
    .trim();
}

/** Truncate to the description length limit, preferring a word boundary. */
function truncate(text: string): string {
  if (text.length <= DESCRIPTION_MAX_LENGTH) return text;
  let cut = text.slice(0, DESCRIPTION_MAX_LENGTH - 1);
  const lastSpace = cut.lastIndexOf(' ');
  // Only cut at a space when one exists reasonably close to the limit, so
  // CJK text (which has no spaces) still truncates.
  if (lastSpace > DESCRIPTION_MAX_LENGTH / 2) cut = cut.slice(0, lastSpace);
  return `${cut}…`;
}
