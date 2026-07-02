// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';

const LOCALES = ['en', 'vi', 'es', 'zh-cn', 'zh-tw'];

// Old Docusaurus doc name -> new lowercase slug.
const NAME_MAP = {
  intro: 'intro',
  'Getting-Started': 'getting-started',
  'Before-Start': 'before-start',
  FAQ: 'faq',
  'captcha-blank-page': 'captcha-blank-page',
  'dc-server-ban': 'dc-server-ban',
  features: 'features',
  'Why-Hoyo-Buddy': 'why-hoyo-buddy',
  'gacha-log': 'gacha-log',
  tools: 'tools',
  'Account-Security': 'account-security',
  'account-hacked': 'account-hacked',
  'too-many-requests': 'too-many-requests',
  changelog: 'changelog',
};

// Preserve SEO: map every old Docusaurus URL (/docs/... and /<locale>/docs/...,
// with the old mixed-case filenames) to the new /<locale>/<slug>/ URL.
const redirects = { '/': '/en/intro/' };
for (const locale of LOCALES) {
  redirects[`/${locale}`] = `/${locale}/intro/`;
  redirects[`/${locale}/`] = `/${locale}/intro/`;

  const oldPrefix = locale === 'en' ? '/docs' : `/${locale}/docs`;
  redirects[oldPrefix] = `/${locale}/intro/`;
  for (const [oldName, newSlug] of Object.entries(NAME_MAP)) {
    redirects[`${oldPrefix}/${oldName}`] = `/${locale}/${newSlug}/`;
  }
}

// Redirect BCP 47 script-subtag variants to the actual locale folders:
//   zh-Hant/* -> zh-tw/*   (Traditional Chinese)
//   zh-Hans/* -> zh-cn/*   (Simplified Chinese)
const ZH_ALIAS_MAP = { 'zh-Hant': 'zh-tw', 'zh-Hans': 'zh-cn' };
for (const [alias, target] of Object.entries(ZH_ALIAS_MAP)) {
  // Bare locale root
  redirects[`/${alias}`] = `/${target}/intro/`;
  redirects[`/${alias}/`] = `/${target}/intro/`;
  // Every known page slug
  for (const newSlug of Object.values(NAME_MAP)) {
    redirects[`/${alias}/${newSlug}`] = `/${target}/${newSlug}/`;
    redirects[`/${alias}/${newSlug}/`] = `/${target}/${newSlug}/`;
  }
}

export default defineConfig({
  site: 'https://docs.hb.seria.moe',

  redirects,

  integrations: [
    starlight({
      // Fails the build on internal links to nonexistent pages or heading
      // anchors. Relative ./page.md links are the site's normal style, so
      // only broken targets are errors.
      plugins: [starlightLinksValidator({ errorOnRelativeLinks: false })],
      title: 'Hoyo Buddy',
      logo: {
        src: './src/assets/logo.svg',
        alt: 'Hoyo Buddy Logo',
      },
      favicon: '/favicon.ico',
      customCss: ['./src/styles/custom.css'],

      // Built-in local search (Pagefind) is on by default — no Algolia.

      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/seriaati/hoyo-buddy' },
        { icon: 'discord', label: 'Discord', href: 'https://link.seria.moe/hb-dc' },
      ],

      // Symmetric i18n: every language is its own folder under src/content/docs/.
      // No "root" locale, so English is not special-cased at the top level.
      defaultLocale: 'en',
      locales: {
        en: { label: 'English', lang: 'en' },
        vi: { label: 'Tiếng Việt', lang: 'vi' },
        es: { label: 'Español', lang: 'es' },
        'zh-cn': { label: '简体中文', lang: 'zh-CN' },
        'zh-tw': { label: '繁體中文', lang: 'zh-TW' },
      },

      sidebar: [
        { slug: 'intro' },
        { slug: 'getting-started' },
        { slug: 'before-start' },
        {
          label: 'FAQ',
          translations: {
            es: 'Preguntas frecuentes',
            vi: 'Câu hỏi thường gặp',
            'zh-CN': '常见问题',
            'zh-TW': '常見問題',
          },
          items: [{ slug: 'faq' }, { slug: 'captcha-blank-page' }],
        },
        { slug: 'dc-server-ban' },
        {
          label: 'About',
          translations: {
            es: 'Acerca de',
            vi: 'Giới thiệu',
            'zh-CN': '关于',
            'zh-TW': '關於',
          },
          items: [{ slug: 'features' }, { slug: 'why-hoyo-buddy' }],
        },
        {
          label: 'Gacha Log',
          translations: {
            es: 'Registro de gacha',
            vi: 'Lịch sử gacha',
            'zh-CN': '抽卡记录',
            'zh-TW': '抽卡記錄',
          },
          items: [{ slug: 'gacha-log' }, { slug: 'tools' }],
        },
        {
          label: 'Security',
          translations: {
            es: 'Seguridad',
            vi: 'Bảo mật',
            'zh-CN': '账号安全',
            'zh-TW': '帳號安全',
          },
          items: [{ slug: 'account-security' }, { slug: 'account-hacked' }, { slug: 'too-many-requests' }],
        },
        { slug: 'changelog' },
      ],
    }),
  ],
});
