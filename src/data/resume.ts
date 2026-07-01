export const resume = {
  summary: [
    'Software developer with hands-on experience building React, Salesforce, and Linux-based systems.',
    'Experienced in using AI-assisted development workflows to accelerate prototyping, debugging, documentation, and workflow automation.'
  ],
  summaryZh: [
    '专注于软件开发，拥有构建 React、Salesforce 和 Linux 系统的实践经验。',
    '熟悉 AI 辅助开发工作流，能够提高原型构建、调试、文档整理和工作流自动化的效率。'
  ],
  workAuthorization: 'Full working rights in Australia until 2030',
  workAuthorizationZh: '持有澳大利亚完整工作权利，有效期至 2030 年',
  location: 'Melbourne, Australia',
  email: 'devgitmoz@gmail.com',
  discord: 'mozzie_jl',
  linkedin: 'https://www.linkedin.com/in/jinyi-lu-b54583382/',
  xiaohongshu: 'DevGitMoz',
  whatsapp: '+61 489 288 931',
  whatsappLink: 'https://wa.me/61489288931',
  skills: [
    {
      title: 'Languages',
      items: ['Python', 'Kotlin', 'C#', 'Apex', 'JavaScript', 'TypeScript', 'Java']
    },
    {
      title: 'Frontend & UI',
      items: ['React', 'Vite', 'HTML/CSS', 'React Flow', 'Zustand', 'Figma']
    },
    {
      title: 'Backend',
      items: ['MySQL', 'SQLite', 'Supabase', 'Node.js']
    },
    {
      title: 'Salesforce',
      items: [
        'Apex',
        'Agent Builder',
        'Prompt Builder',
        'Flow Automation',
        'Omni-Channel',
        'Embedded Service'
      ]
    },
    {
      title: 'Systems',
      items: ['Linux', 'Raspberry Pi', 'Apache', 'PHP', 'Tailscale']
    },
    {
      title: 'AI-assisted Development',
      items: [
        'Codex',
        'Claude Code',
        'Antigravity',
        'Google AI Studio',
        'GitHub Copilot',
        'Cursor',
        'ChatGPT',
        'Claude',
        'Gemini',
        'Replit',
        'Remotion'
      ]
    }
  ]
} as const

export type ResumeSkillGroup = (typeof resume.skills)[number]
