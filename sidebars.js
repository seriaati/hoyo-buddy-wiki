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
  // By default, Docusaurus generates a sidebar from the docs folder structure
  mainSidebar: [
    'intro',
    'Before-Start',
    'Getting-Started',
    'FAQ',
    {
      type: 'doc',
      id: 'dc-server-ban',
      label: 'Usage in Discord Servers'
    },
    {
      type: 'category',
      label: 'About',
      items: [
        {
          type: 'doc',
          id: 'features',
        },
        {
          type: 'doc',
          id: 'Why-Hoyo-Buddy',
        }
      ]
    },
    'gacha-log',
    {
      type: 'category',
      label: 'Security',
      items: [
        {
          type: 'doc',
          id: 'Account-Security',
        },
        {
          type: 'doc',
          id: 'account-hacked',
          label: 'Account got Hacked'
        },
        {
          type: 'doc',
          id: 'too-many-requests',
          label: 'Too Many Requests Error'
        },
        {
          type: 'doc',
          id: 'Login-Workflow',
        }
      ]
    },
    'changelog',
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
