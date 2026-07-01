import type { CardListData, Config, IntegrationUserConfig, ThemeUserConfig } from 'astro-pure/types'
import { defaultLocale, getUi } from './i18n/ui'

const ui = getUi(defaultLocale)

export const profile = {
  displayName: 'Moz',
  github: 'https://github.com/JinyiLu-0x/',
  role: 'Software Developer · Product-minded builder',
  focus: ['Web Development', 'Product Thinking', 'Learning Systems']
} as const

export const theme: ThemeUserConfig = {
  // [Basic]
  /** Title for your website. Will be used in metadata and as browser tab title. */
  title: 'Moz',
  /** Will be used in index page & copyright declaration */
  author: 'Moz',
  /** Description metadata for your website. Can be used in page metadata. */
  description:
    'Projects, technical writing, learning notes, and a public record of building things.',
  /** The default favicon for your site which should be a path to an image in the `public/` directory. */
  favicon: '/favicon/favicon-32x32.png',
  /** The default social card image for your site which should be a path to an image in the `public/` directory. */
  socialCard: '/images/social-card.png',
  /** Specify the default language for this site. */
  locale: {
    lang: 'en-US',
    attrs: 'en_US',
    // Date locale
    dateLocale: 'en-US',
    dateOptions: {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }
  },
  /** Set a logo image to show in the homepage. */
  logo: {
    src: '/src/assets/avatar.png',
    alt: 'Moz avatar'
  },

  titleDelimiter: '•',
  prerender: true, // pagefind search is not supported with prerendering disabled
  npmCDN: 'https://cdn.jsdelivr.net/npm',

  // Still in test
  head: [
    /* Telegram channel */
    // {
    //   tag: 'meta',
    //   attrs: { name: 'telegram:channel', content: '@cworld0_cn' },
    //   content: ''
    // }
  ],
  customCss: [],

  /** Configure the header of your site. */
  header: {
    menu: [
      { title: ui.nav.blog, link: '/blog' },
      { title: ui.nav.notes, link: '/notes' },
      { title: ui.nav.projects, link: '/projects' },
      { title: ui.nav.about, link: '/about' },
      { title: ui.nav.contact, link: '/contact' }
    ]
  },

  /** Configure the footer of your site. */
  footer: {
    // Year format
    year: `© ${new Date().getFullYear()}`,
    // year: `© 2019 - ${new Date().getFullYear()}`,
    links: [
      // Privacy Policy link
      {
        title: defaultLocale === 'zh-CN' ? '网站政策' : 'Site Policy',
        link: '/terms',
        pos: 2 // position set to 2 will be appended to copyright line
      }
    ],
    /** Enable displaying a “Astro & Pure theme powered” link in your site’s footer. */
    credits: true,
    /** Optional details about the social media accounts for this site. */
    social: [
      { icon: 'github', label: 'GitHub', href: profile.github },
      { icon: 'rss', label: 'RSS', href: '/rss.xml' }
    ]
  },

  // [Content]
  content: {
    /** External links configuration */
    externalLinks: {
      content: ' ↗',
      /** Properties for the external links element */
      properties: { style: 'user-select:none' }
    },
    /** Blog page size for pagination (optional) */
    blogPageSize: 8,
    /** Share buttons to show */
    // Currently support weibo, x, bluesky
    share: []
    /** Enable image captions (default false) */
    // imageCaption: true
  }
}

export const integ: IntegrationUserConfig = {
  // [Links]
  // https://astro-pure.js.org/docs/integrations/links
  links: {
    // Friend logbook
    logbook: [],
    // Yourself link info
    applyTip: [
      { name: 'Name', val: theme.title },
      { name: 'Desc', val: theme.description || 'Null' },
      { name: 'Link', val: 'https://example.com/' },
      { name: 'Avatar', val: 'https://example.com/favicon/favicon.ico' }
    ],
    // Cache avatars in `public/avatars/` to improve user experience.
    cacheAvatar: false
  },
  // [Search]
  pagefind: true,
  // Kept for the integration schema; the remote quote component is not rendered.
  quote: {
    server: 'https://example.com/quote.json',
    target: `(data) => data.quote || ''`
  },
  // [Typography]
  // https://unocss.dev/presets/typography
  typography: {
    class: 'prose text-base',
    // The style of blockquote font `normal` / `italic` (default to italic in typography)
    blockquoteStyle: 'italic',
    // The style of inline code block `code` / `modern` (default to code in typography)
    inlineCodeBlockStyle: 'modern'
  },
  // [Lightbox]
  // A lightbox library that can add zoom effect
  // https://astro-pure.js.org/docs/integrations/others#medium-zoom
  mediumZoom: {
    enable: true, // disable it will not load the whole library
    selector: '.prose .zoomable',
    options: {
      className: 'zoomable'
    }
  },
  // Comment system
  waline: {
    enable: true,
    // Astro Theme Pure's original Waline service.
    server: 'https://astro-theme-pure-waline.arthals.ink/',
    // Show meta info for comments
    showMeta: false,
    // Refer https://waline.js.org/en/guide/features/emoji.html
    emoji: ['bmoji', 'weibo'],
    // Refer https://waline.js.org/en/reference/client/props.html
    additionalConfigs: {
      // search: false,
      // Views are counted by the local engagement tracker instead of every refresh.
      pageview: false,
      comment: true,
      locale: {
        reaction0: 'Like',
        nick: 'Nickname',
        mail: 'Email',
        link: 'Website',
        placeholder: 'Join the discussion. Add your email to receive replies; no login required.',
        submit: 'Submit comment'
      },
      imageUploader: false
    }
  }
}

export const terms: CardListData = {
  title: defaultLocale === 'zh-CN' ? '网站政策' : 'Terms content',
  list: [
    {
      title: defaultLocale === 'zh-CN' ? '隐私政策' : 'Privacy Policy',
      link: '/terms/privacy-policy'
    },
    {
      title: defaultLocale === 'zh-CN' ? '使用条款' : 'Terms and Conditions',
      link: '/terms/terms-and-conditions'
    },
    {
      title: defaultLocale === 'zh-CN' ? '版权说明' : 'Copyright',
      link: '/terms/copyright'
    },
    {
      title: defaultLocale === 'zh-CN' ? '免责声明' : 'Disclaimer',
      link: '/terms/disclaimer'
    }
  ]
}

const config = { ...theme, integ } as Config
export default config
