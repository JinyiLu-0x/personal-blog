import type { SiteLocale } from '@/i18n/ui'

interface TopicSource {
  body?: string
  data: {
    title: string
    description?: string
    summary?: string
    comment?: string | boolean
  }
}

export interface TopicCloudItem {
  word: string
  count: number
  size: number
  x: number
  y: number
  rotate: 0 | 90
  color: number
}

interface WordStats {
  word: string
  count: number
  documents: number
  titleHits: number
}

interface Box {
  left: number
  right: number
  top: number
  bottom: number
}

const stopWords: Record<SiteLocale, Set<string>> = {
  'zh-CN': new Set([
    '一个', '一些', '这个', '那个', '这些', '那些', '什么', '怎么', '为什么', '因为', '所以',
    '但是', '不过', '而且', '然后', '其实', '还是', '已经', '现在', '当时', '后来', '目前',
    '可能', '可以', '能够', '需要', '应该', '没有', '不是', '不会', '如果', '就是', '只是',
    '比较', '非常', '特别', '很多', '这种', '这样', '这里', '里面', '自己', '个人', '感觉',
    '觉得', '看到', '开始', '继续', '直接', '真的', '更加', '一下', '一点', '还有', '已经',
    '他们', '我们', '你们', '的人', '时候', '东西', '内容', '相关', '进行', '使用',
    '通过', '对于', '关于', '以及', '或者', '同时', '最后', '仍然', '并不', '不一定',
    '的话', '来说', '而言', '一遍', '这种', '其中', '主要', '基本', '完全', '原来', '实话',
    '而是', '而不是', '不只是', '出来', '不同', '完成', '完整', '真正', '实现', '是否',
    '结果', '方向', '适合', '工作', '记录', '能力', '理解', '我的', '更像', '一套',
    '具体', '负责', '公开', '发布', '技术', '代码', '开发', '系统', '模型', '工具', '数据', '前端',
    '几个', '重新', '先把', '生成', '范围', '选择', '观察', '时间', '信息', '浏览', '复杂', '不能',
    '起来'
  ]),
  'en-US': new Set([
    'about', 'after', 'again', 'also', 'another', 'because', 'before', 'being', 'between', 'both',
    'could', 'does', 'doing', 'during', 'each', 'even', 'every', 'first', 'from', 'have', 'having',
    'here', 'into', 'itself', 'later', 'more', 'most', 'much', 'need', 'only', 'other', 'really',
    'same', 'should', 'something', 'still', 'than', 'that', 'their', 'them', 'then', 'there', 'these',
    'they', 'thing', 'think', 'this', 'those', 'through', 'under', 'very', 'want', 'what', 'when',
    'where', 'which', 'while', 'with', 'would', 'your', 'actually', 'already', 'around', 'people',
    'person', 'using', 'used', 'make', 'made', 'like', 'look', 'looking', 'felt', 'feels', 'well',
    'work', 'works', 'working', 'part', 'point', 'question', 'different', 'directly', 'current',
    'personal', 'time', 'long', 'build', 'built', 'notes', 'system', 'real', 'complete', 'keep',
    'information', 'result', 'direction', 'whether', 'enough', 'without', 'users', 'useful', 'content',
    'model', 'code', 'engineering', 'tools', 'technical', 'frontend', 'backend', 'browser', 'react',
    'data', 'coding', 'prompt', 'gpt', 'economic', 'someone', 'interesting', 'early', 'case',
    'feel', 'separate', 'full'
  ])
}

// The source frequency remains untouched. These aliases only refine how recurring
// ideas are presented in the cloud, so the site content itself stays original.
const displayAliases: Record<SiteLocale, Record<string, string>> = {
  'zh-CN': {
    agent: 'AI Agent',
    产品: '产品思维',
    项目: '产品实践',
    知识: '知识系统',
    学习: '学习系统',
    用户: '用户导向',
    成本: '成本',
    上下文: 'Context Engineering',
    context: 'Context Engineering',
    体验: '用户体验',
    整理: '知识策展',
    交互: 'Human–AI Interaction',
    场景: '应用场景',
    本地: 'Local-first',
    结构: '系统设计',
    判断: 'Human Judgment',
    想法: '产品洞察',
    笔记: '思考笔记',
    课程: '学习旅程',
    清单: '探索清单',
    路径: 'Learning Path',
    独立: 'Independent Building',
    软件: 'Software Engineering',
    prompt: 'Prompt Engineering',
    增长: '增长闭环',
    工作流: 'Agentic Workflow',
    博客: '知识发布',
    计划: '战略规划',
    规划: '战略规划',
    技能: 'Agent Skills',
    调用: 'Tool Use',
    构建: 'Building in Public',
    云计算: 'Cloud Infrastructure',
    云端: 'Cloud Infrastructure',
    云服务: 'Cloud Infrastructure',
    问题: '问题定义',
    任务: '任务编排',
    chatgpt: 'ChatGPT',
    claude: 'Claude',
    codex: 'Codex',
    obsidian: 'Obsidian',
    antigravity: 'Antigravity',
    workflow: 'Agentic Workflow',
    设计: '设计思维',
    部署: 'Cloud Deployment',
    连接: 'Tool Integration'
  },
  'en-US': {
    agent: 'AI Agent',
    workflow: 'Agentic Workflow',
    knowledge: 'Knowledge System',
    product: 'Product Thinking',
    project: 'Product Building',
    context: 'Context Engineering',
    blog: 'Knowledge Publishing',
    learning: 'Learning System',
    idea: 'Product Insight',
    course: 'Learning Workflow',
    plan: 'Strategic Planning',
    cost: 'Cost',
    skill: 'Agent Skills',
    tool: 'Tool Use',
    building: 'Building in Public',
    growth: 'Growth Loop',
    cloud: 'Cloud Infrastructure',
    markdown: 'Markdown-first',
    software: 'Software Engineering',
    note: 'Reflective Notes',
    user: 'User-centric',
    task: 'Task Orchestration',
    problem: 'Problem Framing',
    chatgpt: 'ChatGPT',
    claude: 'Claude',
    codex: 'Codex',
    obsidian: 'Obsidian',
    antigravity: 'Antigravity',
    rule: 'Guardrails',
    local: 'Local-first',
    study: 'Learning Practice',
    role: 'Human-in-the-loop'
  }
}

const priorityWords = new Set([
  'agentic workflow',
  'chatgpt',
  'claude',
  'codex',
  'obsidian',
  'antigravity'
])

const stableHash = (value: string) =>
  [...value].reduce((hash, character) => ((hash << 5) - hash + character.charCodeAt(0)) | 0, 0)

const cleanMarkdown = (value: string) => value
  .replace(/---[\s\S]*?---/g, ' ')
  .replace(/```[\s\S]*?```/g, ' ')
  .replace(/https?:\/\/\S+/g, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/[`*_>#\[\](){}|~=:+/\\-]/g, ' ')

const normalizeEnglish = (word: string) => {
  const lower = word.toLowerCase().replace(/[’']s$/, '')
  if (lower.length >= 5 && lower.endsWith('ies')) return `${lower.slice(0, -3)}y`
  if (lower.length >= 5 && lower.endsWith('s') && !/(ss|us|is)$/.test(lower)) return lower.slice(0, -1)
  return lower
}

const extractWords = (value: string, locale: SiteLocale) => {
  const segmenter = new Intl.Segmenter(locale, { granularity: 'word' })
  const words: Array<{ key: string; display: string }> = []

  for (const segment of segmenter.segment(cleanMarkdown(value))) {
    if (!segment.isWordLike) continue
    const display = segment.segment.trim()
    const containsHan = /\p{Script=Han}/u.test(display)
    const isAcronym = /^[A-Z][A-Z0-9+#.-]{1,7}$/.test(display)
    const key = locale === 'en-US'
      ? normalizeEnglish(display)
      : display.toLocaleLowerCase(locale)

    if (/^\d+(?:\.\d+)*$/.test(key)) continue
    if (containsHan ? [...display].length < 2 : key.length < (isAcronym ? 2 : 4)) continue
    if (stopWords[locale].has(key)) continue
    words.push({ key, display: locale === 'en-US' && !isAcronym ? key : display })
  }

  return words
}

const intersects = (candidate: Box, placed: Box[]) => placed.some((box) =>
  candidate.left < box.right &&
  candidate.right > box.left &&
  candidate.top < box.bottom &&
  candidate.bottom > box.top
)

const measureWord = (word: string, size: number, rotate: 0 | 90) => {
  const hanCount = [...word].filter((character) => /\p{Script=Han}/u.test(character)).length
  const latinCount = [...word].length - hanCount
  const width = hanCount * size + latinCount * size * 0.58 + 8
  const height = size * 1.08 + 6
  return rotate === 90 ? { width: height, height: width } : { width, height }
}

const placeWords = (words: Array<WordStats & { size: number }>): TopicCloudItem[] => {
  const width = 1000
  const height = 420
  const centreX = width / 2
  const centreY = height / 2
  const boxes: Box[] = []
  const placed: TopicCloudItem[] = []

  words.forEach((item, index) => {
    const hash = Math.abs(stableHash(item.word))
    const rotate: 0 | 90 = index > 6 && hash % 7 === 0 && [...item.word].length <= 11 ? 90 : 0
    let size = item.size
    let position: { x: number; y: number; box: Box } | undefined

    for (let shrink = 0; shrink < 3 && !position; shrink += 1) {
      const dimensions = measureWord(item.word, size, rotate)
      for (let step = 0; step < 4200; step += 1) {
        const angle = step * 0.37 + (hash % 19) * 0.03
        const radius = 2.15 * Math.sqrt(step)
        const x = centreX + Math.cos(angle) * radius * 3.25
        const y = centreY + Math.sin(angle) * radius * 1.08
        const box = {
          left: x - dimensions.width / 2 - 3,
          right: x + dimensions.width / 2 + 3,
          top: y - dimensions.height / 2 - 2,
          bottom: y + dimensions.height / 2 + 2
        }
        const inside = box.left >= 10 && box.right <= width - 10 && box.top >= 10 && box.bottom <= height - 10
        if (inside && !intersects(box, boxes)) {
          position = { x, y, box }
          break
        }
      }
      if (!position) size *= 0.88
    }

    if (position) {
      boxes.push(position.box)
      placed.push({
        word: item.word,
        count: item.count,
        size: Math.round(size * 10) / 10,
        x: Math.round(position.x * 10) / 10,
        y: Math.round(position.y * 10) / 10,
        rotate,
        color: hash % 6
      })
    }
  })

  return placed
}

export const buildTopicCloud = (
  entries: TopicSource[],
  locale: SiteLocale,
  limit = 52
): TopicCloudItem[] => {
  const stats = new Map<string, WordStats>()

  for (const entry of entries) {
    const titleWords = extractWords(entry.data.title, locale)
    const bodyWords = extractWords([
      entry.data.title,
      entry.data.description,
      entry.data.summary,
      typeof entry.data.comment === 'string' ? entry.data.comment : '',
      entry.body
    ].filter(Boolean).join('\n'), locale)
    const documentCounts = new Map<string, { display: string; count: number }>()

    for (const word of bodyWords) {
      const current = documentCounts.get(word.key) ?? { display: word.display, count: 0 }
      current.count += 1
      documentCounts.set(word.key, current)
    }

    const titleKeys = new Set(titleWords.map(({ key }) => key))
    for (const [key, value] of documentCounts) {
      const current = stats.get(key) ?? { word: value.display, count: 0, documents: 0, titleHits: 0 }
      current.count += Math.min(value.count, 5)
      current.documents += 1
      if (titleKeys.has(key)) current.titleHits += 1
      stats.set(key, current)
    }
  }

  const refinedStats = new Map<string, WordStats>()
  for (const [key, item] of stats) {
    const word = displayAliases[locale][key] ?? item.word
    const refinedKey = word.toLocaleLowerCase(locale)
    const current = refinedStats.get(refinedKey)
    if (current) {
      current.count += item.count
      current.documents = Math.max(current.documents, item.documents)
      current.titleHits += item.titleHits
    } else {
      refinedStats.set(refinedKey, { ...item, word })
    }
  }

  const ranked = [...refinedStats.values()]
    .filter(({ word, documents, titleHits, count }) =>
      documents >= 2 ||
      (titleHits >= 1 && count >= 2) ||
      priorityWords.has(word.toLowerCase())
    )
    .map((item) => ({
      ...item,
      score: item.count + item.documents * 1.5 + item.titleHits * 11 +
        (priorityWords.has(item.word.toLowerCase()) ? 42 : 0)
    }))
    .sort((a, b) => b.score - a.score || b.documents - a.documents || a.word.localeCompare(b.word, locale))
    .slice(0, limit)

  const scores = ranked.map(({ score }) => score)
  const minimum = Math.min(...scores, 0)
  const maximum = Math.max(...scores, 1)
  const range = Math.max(maximum - minimum, 1)

  return placeWords(ranked.map((item) => ({
    ...item,
    size: 13 + Math.pow((item.score - minimum) / range, 0.7) * 39
  })))
}
