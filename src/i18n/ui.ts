export type SiteLocale = 'zh-CN' | 'en-US'

export const defaultLocale: SiteLocale = 'en-US'

const translations = {
  'zh-CN': {
    nav: {
      blog: '博客',
      notes: '笔记',
      projects: '项目',
      about: '关于',
      contact: '联系'
    },
    common: {
      back: '返回',
      search: '搜索',
      tags: '标签',
      viewAll: '查看全部',
      languageHint: 'English 版本已预留',
      theme: '切换浅色 / 深色模式',
      darkTheme: '已切换到深色模式',
      lightTheme: '已切换到浅色模式',
      menu: '菜单'
    },
    home: {
      title: '首页',
      description: 'Moz 的项目、技术文章与学习笔记。',
      role: '软件开发工程师 · 注重产品思维',
      location: '墨尔本，澳大利亚',
      contactMe: '联系我！',
      about: '关于我',
      intro: '这里是我的个人博客与作品集，用来展示项目、发布技术文章，并记录短笔记和学习过程。',
      moreAbout: '了解更多',
      blog: '博客',
      morePosts: '更多文章',
      notes: '笔记',
      moreNotes: '更多笔记',
      projects: '项目',
      moreProjects: '更多项目',
      skills: '技能',
      award: '奖项'
    },
    pages: {
      about: '关于',
      aboutSubtitle: '软件开发、代表项目，以及支持这些工作的实践证据。',
      professionalSummary: '个人简介',
      selectedProjects: '代表项目',
      skills: '技能',
      aboutSite: '关于本站',
      projects: '项目',
      projectsSubtitle: '用背景、角色、技术选择与结果记录项目，为作品集和面试提供可继续展开的实践证据。',
      notes: '笔记',
      notesSubtitle: '短想法、学习片段、外部链接和项目观察。这里保留上下文，但不会镜像第三方文章或公开私人内容。',
      blog: '博客',
      blogSubtitle: '技术文章、项目复盘和结构化学习总结。',
      contact: '联系',
      contactSubtitle: '项目合作、技术交流或作品集相关沟通，都可以从这里联系我。',
      contactIntro: '我目前位于墨尔本。发送邮件时可以简单说明来意，我会在方便时回复。',
      search: '搜索',
      searchSubtitle: '搜索公开的博客、项目和笔记。',
      archives: '归档',
      archivesSubtitle: '按年份浏览所有已发布的博客内容。',
      tags: '标签',
      tagsSubtitle: '博客、项目和笔记共用的基础主题索引。'
    },
    skills: {
      languages: '编程语言',
      frontend: '前端与界面',
      dataCloud: '后端',
      salesforce: 'Salesforce',
      systems: '系统',
      aiWorkflow: 'AI 辅助开发'
    }
  },
  'en-US': {
    nav: {
      blog: 'Blog',
      notes: 'Notes',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact'
    },
    common: {
      back: 'Back',
      search: 'Search',
      tags: 'Tags',
      viewAll: 'View all',
      languageHint: 'Chinese version reserved',
      theme: 'Toggle light / dark mode',
      darkTheme: 'Dark theme',
      lightTheme: 'Light theme',
      menu: 'Menu'
    },
    home: {
      title: 'Home',
      description: 'Projects, technical writing, and learning notes by Moz.',
      role: 'Software Developer · Product-minded builder',
      location: 'Melbourne, Australia',
      contactMe: 'Connect me!',
      about: 'About',
      intro: 'My personal blog and portfolio for projects, technical writing, short notes, and the learning process behind them.',
      moreAbout: 'More about me',
      blog: 'Blog',
      morePosts: 'More posts',
      notes: 'Notes',
      moreNotes: 'More notes',
      projects: 'Projects',
      moreProjects: 'More projects',
      skills: 'Skills',
      award: 'Awards'
    },
    pages: {
      about: 'About',
      aboutSubtitle: 'Software development, selected work, and the evidence behind what I build.',
      professionalSummary: 'Professional Summary',
      selectedProjects: 'Selected Projects',
      skills: 'Skills',
      aboutSite: 'About This Site',
      projects: 'Projects',
      projectsSubtitle: 'Projects documented through context, role, technical decisions, and outcomes as evidence for portfolios and interviews.',
      notes: 'Notes',
      notesSubtitle: 'Short thoughts, learning fragments, useful links, and project observations without mirroring third-party or private content.',
      blog: 'Blog',
      blogSubtitle: 'Technical writing, project write-ups, and structured learning summaries.',
      contact: 'Contact',
      contactSubtitle: 'Get in touch about projects, technical discussions, or portfolio-related opportunities.',
      contactIntro: 'I am currently based in Melbourne. Feel free to include a short introduction when you email me.',
      search: 'Search',
      searchSubtitle: 'Search public blog posts, projects, and notes.',
      archives: 'Archives',
      archivesSubtitle: 'Browse all published blog posts by year.',
      tags: 'Tags',
      tagsSubtitle: 'A shared topic index for Blog, Projects, and Notes.'
    },
    skills: {
      languages: 'Languages',
      frontend: 'Frontend & UI',
      dataCloud: 'Backend',
      salesforce: 'Salesforce',
      systems: 'Systems',
      aiWorkflow: 'AI-assisted Development'
    }
  }
} as const

export function getUi(locale?: string) {
  return translations[locale as SiteLocale] ?? translations[defaultLocale]
}

export const localePrefix = (locale: SiteLocale) => (locale === 'en-US' ? '/en' : '')

export const localizedPath = (path: string, locale: SiteLocale) => {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${localePrefix(locale)}${normalized === '/' ? '' : normalized}` || '/'
}

const tagLabelsZh: Record<string, string> = {
  web: '网站开发',
  learning: '学习',
  tools: '工具',
  ai: 'AI',
  agent: 'Agent',
  markdown: 'Markdown',
  obsidian: 'Obsidian',
  saas: 'SaaS',
  ui: 'UI',
  cloud: '云计算',
  product: '产品',
  'external-link': '外部链接',
  cybersecurity: '网络安全',
  salesforce: 'Salesforce',
  astro: 'Astro'
}

const tagLabelsEn: Record<string, string> = {
  web: 'Web',
  learning: 'Learning',
  tools: 'Tools',
  ai: 'AI',
  agent: 'Agent',
  markdown: 'Markdown',
  obsidian: 'Obsidian',
  saas: 'SaaS',
  ui: 'UI',
  cloud: 'Cloud',
  product: 'Product',
  'external-link': 'External link',
  cybersecurity: 'Cybersecurity',
  salesforce: 'Salesforce',
  astro: 'Astro'
}

export const formatTag = (tag: string, locale: SiteLocale) =>
  (locale === 'zh-CN' ? tagLabelsZh : tagLabelsEn)[tag.trim().toLowerCase()] ?? tag

export const formatReadingTime = (value: unknown, locale: SiteLocale) => {
  const minutes = String(value ?? '').match(/\d+/)?.[0] ?? '1'
  return locale === 'zh-CN' ? `约 ${minutes} 分钟` : `${minutes} min read`
}
