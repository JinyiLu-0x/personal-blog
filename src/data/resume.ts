export const resume = {
  summary: [
    'Software development student with HD-level academic performance and hands-on experience building React, Salesforce, and Linux-based systems.',
    'Experienced in using AI-assisted development workflows to accelerate prototyping, debugging, documentation, and workflow automation.'
  ],
  summaryZh: [
    '软件开发专业学生，拥有优秀的学术表现，以及构建 React、Salesforce 和 Linux 系统的实践经验。',
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
  education: [
    {
      institution: 'Monash University',
      institutionZh: '蒙纳士大学（Monash University）',
      degree: 'Bachelor of IT (Software Development)',
      degreeZh: '信息技术学士（软件开发方向）',
      period: 'Feb. 2026 - Dec. 2027',
      periodZh: '2026 年 2 月－2027 年 12 月',
      location: 'Melbourne, VIC',
      locationZh: '澳大利亚维多利亚州墨尔本',
      details: ['GPA: 6.50 / 7.00', 'WAM: 80'],
      awards: [],
      awardsZh: []
    },
    {
      institution: 'Queensland University of Technology',
      institutionZh: '昆士兰科技大学（QUT）',
      degree: 'Bachelor of IT (Computer Science)',
      degreeZh: '信息技术学士（计算机科学方向）',
      period: 'Feb. 2025 - Dec. 2025',
      periodZh: '2025 年 2 月－2025 年 12 月',
      location: 'Brisbane, QLD',
      locationZh: '澳大利亚昆士兰州布里斯班',
      details: ['GPA: 6.125 / 7.00', 'WAM: 81'],
      awards: [
        "Executive Dean's Commendation for Academic Excellence (2025 S1)",
        'QUT International Merit Scholarship - Science'
      ],
      awardsZh: [
        '执行院长学术卓越嘉奖（2025 年第一学期）',
        'QUT 国际优秀学生奖学金（理科）'
      ]
    }
  ],
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

export type ResumeEducation = (typeof resume.education)[number]
export type ResumeSkillGroup = (typeof resume.skills)[number]
