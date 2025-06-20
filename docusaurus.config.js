// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hoyo Buddy',
  tagline: 'Elevate your Hoyo experience',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://hb-docs.seria.moe',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'seriaati', // Usually your GitHub org/user name.
  projectName: 'hoyo-buddy', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vi', 'zh-Hant', 'zh-Hans', 'es'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en',
        calendar: 'gregorian',
        path: 'en',
      },
      vi: {
        label: 'Tiếng Việt',
        direction: 'ltr',
        htmlLang: 'vi',
        calendar: 'gregorian',
        path: 'vi',
      },
      'es': {
        label: 'Español',
        direction: 'ltr',
        htmlLang: 'es',
        calendar: 'gregorian',
        path: 'es',
      },
      'zh-Hans': {
        label: '简体中文',
        direction: 'ltr',
        htmlLang: 'zh-Hans',
        calendar: 'gregorian',
        path: 'zh-Hans',
      },
      'zh-Hant': {
        label: '繁體中文',
        direction: 'ltr',
        htmlLang: 'zh-Hant',
        calendar: 'gregorian',
        path: 'zh-Hant',
      },

    }
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      colorMode: {
        respectPrefersColorScheme: true,
      },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Hoyo Buddy',
        logo: {
          alt: 'Hoyo Buddy Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'mainSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/seriaati/hoyo-buddy',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://link.seria.moe/hb-dc',
            label: 'Discord',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Seria Ati. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['powershell'],
      },
      algolia: {
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        appId: process.env.ALGOLIA_APP_ID, // Optional, if you have an Algolia App ID
        contextualSearch: true,
        searchParameters: {}, // Optional, if you want to pass additional search parameters
      }
    }),
};

export default config;
