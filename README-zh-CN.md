# Moz — 个人博客与作品集

[English](./README.md)

这是一个支持中英文的个人作品集与知识发布网站，用于展示项目、发布技术文章、记录学习笔记，以及呈现构建过程。

## 主要功能

- 以作品集为核心的首页，展示代表项目、最新文章、笔记、教育经历与技能。
- 独立的 Blog、Projects、Notes、About、Contact、Tags、Archives 与 Search 页面。
- 默认英语的双语路由，切换语言后全站保持用户选择。
- 使用 Astro Content Collections 和类型化 frontmatter 管理文件内容。
- 基于 Pagefind 的中英文独立搜索索引、内容范围控制和分页结果。
- Waline 评论、Reaction 与基于有效阅读行为的浏览量统计，不继承模板历史数据。
- 统一的灰蓝视觉、响应式布局、深色模式、Hover 语言和减少动态效果支持。
- 支持 RSS、Sitemap、SEO、Open Graph、Markdown/MDX、代码高亮、数学公式和目录。

## 技术栈

- [Astro](https://astro.build/) 6 与 TypeScript
- [Astro Theme Pure](https://github.com/cworld1/astro-theme-pure)
- [Bun](https://bun.sh/)
- [Pagefind](https://pagefind.app/)
- [Waline](https://waline.js.org/)
- Netlify 静态部署配置

## 项目结构

```text
src/
├── components/       UI、导航、评论、搜索和内容卡片
├── content/          博客、项目、笔记和保留的主题文档
├── data/             简历与作品集数据
├── i18n/             中英文界面文本
├── layouts/          公共页面与内容布局
├── pages/            页面路由，包括 /en 双语结构
└── utils/            内容与 Waline 工具函数
```

## 本地开发

环境要求：

- Node.js 22.12 或更高版本
- Bun

```shell
git clone https://github.com/JinyiLu-0x/personal-blog.git
cd personal-blog
bun install
bun run dev
```

开发服务器不会生成 Pagefind 索引。如需在本地测试完整搜索功能：

```shell
bun run build
bun run preview
```

常用验证命令：

```shell
bun run check
bun run build
```

## 发布内容

内容使用本地文件管理，不依赖 CMS 或数据库：

- Blog：`src/content/blog/`
- Notes：`src/content/notes/`
- Projects：`src/content/projects/`

Markdown 与 MDX frontmatter 用于设置标题、日期、标签、可见性、项目状态、外部链接、语言和翻译关联。列表、详情、标签、RSS、Sitemap 与搜索索引会在构建时自动生成。

## 部署

仓库已经包含 `netlify.toml`，构建产物位于 `dist/`：

```shell
bun run build
```

正式部署时，应将 `SITE_URL` 设置为公开域名，并在长期保存评论前配置自己管理的 Waline 服务。

## 范围与隐私

公开版本不包含私有 Dashboard、CMS、微信爬虫、运行时 AI 翻译、Todo 或 Timeline。学习经历与 AI 工作流只做适度概括，并默认建立在课程规则和资料权限允许的前提下。

## 许可证与来源说明

这是一个独立的个人仓库，基于 **CWorld（`cworld1`）及其贡献者**创建和维护的 [Astro Theme Pure](https://github.com/cworld1/astro-theme-pure) 定制。感谢原项目为本网站提供设计与代码基础。

Astro Theme Pure 使用 Apache License 2.0。必要的许可证和来源说明保留在 [LICENSE](./LICENSE) 与 [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md) 中。原作者不对本个人网站提供背书。

如果本站公开的内容、图片或署名涉及版权、隐私或其他权利问题，请通过 [lujinyi2006@gmail.com](mailto:lujinyi2006@gmail.com) 联系我。我会核实相关情况，并在适当情况下删除或更正内容。
