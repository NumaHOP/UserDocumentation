// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faBook, faGlobe, faSearch, faInfoCircle, faNewspaper } from '@fortawesome/free-solid-svg-icons';

/** @type {import('@docusaurus/types').Config} */
const config = {
  // Champs obligatoires
  title: 'NumaHOP',
  tagline: 'Logiciel open source de gestion de collections numérisées porté par une communauté active.',
  favicon: '/img/favicon.ico',

  // Configuration pour GitHub Pages
  url: 'https://numahop.github.io',
  baseUrl: '/UserDocumentation/',

  // Organisation et nom du projet
  organizationName: 'NumaHOP',
  projectName: 'UserDocumentation',

  // Configuration pour GitHub Pages - trailingSlash activé
  trailingSlash: true,

  // Gestion des liens brisés
  onBrokenLinks: 'throw',

  // Internationalisation (i18n)
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    localeConfigs: {
      fr: { label: 'Français', direction: 'ltr' },
      en: { label: 'English', direction: 'ltr' },
    },
  },

  // Configuration pour Mermaid
  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  // Presets classiques (docs, blog, theme)
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          showLastUpdateTime: true,
          editUrl: 'https://github.com/NumaHOP/UserDocumentation/edit/main/',
        },
        blog: {
          showReadingTime: false,
          editUrl: 'https://github.com/NumaHOP/UserDocumentation/edit/main/',
          blogSidebarTitle: 'Dernières actualités',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-YQ7G1PJKRW',
          anonymizeIP: false,
        },
      }),
    ],
  ],

  // Configuration du thème
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Image pour les réseaux sociaux
      image: '/img/logo.png',

      lastUpdate: {
        text: 'Dernière mise à jour le {date} par {author}',
      },

      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },

      // Barre de navigation
      navbar: {
        title: 'NumaHOP',
        logo: {
          alt: 'Logo NumaHOP',
          src: '/img/logo.svg',
        },
        items: [
          {
            to: '/presentation',
            label: 'Présentation',
            position: 'left',
          },
          {
            to: '/communaute',
            sidebarId: 'comuSidebar',
            label: 'Communauté',
          },
          {
            to: 'blog',
            sidebarId: 'workSidebar',
            label: '@NumaWork',
            position: 'left',
          },
          // --- NOUVEAU : Un seul bouton "Documentation" ---
          {
            to: '/docs/introduction', // ou '/docs' si tu veux une page d'accueil
            label: 'Documentation',
            position: 'left',
          },
          // --------------------------------------------
          {
            type: 'search',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/NumaHOP/',
            className: 'navbar-github-link',
            position: 'right',
          },
        ],
      },

      // Pied de page
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Association NumaHOP`,
      },
    }),

  // Plugins (recherche locale)
  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['fr', 'en'],
      },
    ],
  ],
};

module.exports = config;
