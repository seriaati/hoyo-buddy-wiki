// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  mainSidebar: [
    'intro',
    'Getting-Started',
    'Before-Start',
    {
      type: 'category',
      label: 'FAQ',
      items: [
        'FAQ',
        'captcha-blank-page'
      ]
    },
    'dc-server-ban',
    {
      type: 'category',
      label: 'About',
      items: [
        'features',
        'Why-Hoyo-Buddy'
      ]
    },
    {
      type: 'category',
      label: 'Gacha Log',
      items: [
        'gacha-log',
        'tools'
      ]
    },
    {
      type: 'category',
      label: 'Security',
      items: [
        'Account-Security',
        'account-hacked',
        'too-many-requests'
      ]
    },
    'changelog',
  ],
};

export default sidebars;
