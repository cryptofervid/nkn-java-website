const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'NKN Java SDK',
  tagline: 'Java SDK for NKN',
  url: 'https://cryptofervid.github.io/',
  baseUrl: '/nkn-java-website/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/nkn_logo.png',
  organizationName: 'cryptofervid', // Usually your GitHub org/user name.
  projectName: 'nkn-java-website', // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./environment_sidebar.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: true
      },
      navbar: {
        style: 'primary',
        title: 'NKN Java SDK',
        logo: {
          alt: 'My Site Logo',
          src: 'img/nkn_logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'prerequisites',
            position: 'left',
            label: 'Setup',
          },
          {
            type: 'doc',
            docId: 'client',
            position: 'left',
            label: 'API Reference',
          },
          {
            type: 'doc',
            docId: 'wallet_example',
            position: 'left',
            label: 'Examples',
          },
          {
            href: 'https://github.com/nknorg/nkn-java-sdk',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Forum',
                href: 'http://forum.nkn.org/',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/hrZvrVa',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/nknorg',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/nknorg/nkn-java-sdk',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
