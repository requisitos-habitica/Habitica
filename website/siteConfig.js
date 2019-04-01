const contributors = require('./contributors');

const users = [
  {
    caption: 'Habitica',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    infoLink: 'https://habitica.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Habitica', // Title for your website.
  tagline: 'Gamify Your Life',
  url: 'https://requisitos-habitica.github.io', // Your website URL
  baseUrl: '/Habitica/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'Habitica',
  organizationName: 'requisitos-habitica',
  contributors: contributors,
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'preRastreabilidade', label: 'Pré-Rastreabilidade'},
    {doc: 'posRastreabilidade', label: 'Pós-Rastreabilidade'},
    {doc: 'elicitacao', label: 'Elicitação'},
    {doc: 'modelagem', label: 'Modelagem'},
    {doc: 'analise', label: 'Análise'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/habitica-logo.svg',
  heroLogo: 'img/hero-logo.png',
  /*footerIcon: 'img/docusaurus.svg',
  favicon: 'img/favicon.png', */

  /* Colors for website */
  colors: {
    primaryColor: '#4F0075',
    secondaryColor: '#41005E',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Requisitos Habitica`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  //ogImage: 'img/docusaurus.png',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
