# Writing

## Markdown

### Markdown Extensions

VitePress 带有内置的 Markdown 扩展

### 标题锚点

标头会自动地应用锚链接，可以使用 markdown.anchor 选项配置锚的渲染。

### 链接

内部和外部链接都会特殊处理

- 内部链接

内部链接转换为 SPA 导航的路由器连接。并且，每个子目录中包含的每个 index.md 都会自动转换为 index.html, 带有相应的 URL /

- 页面后缀

默认情况下，会生成带有 .html 后缀的页面和内部链接。

- 外部链接

出站链接自动获取 target="_blank" rel="noreferrer"

### Frontmatter

开箱即用地支持 YAML frontmatter

### Github-Style Tables

### Emoji

### Table of Contents

### Custom Containers

- Default Title
- Custom Title

### raw

### Syntax Highlighting in Code Blocks

### Line Highlighting in Code Blocks

### Import Code Snippets

### Markdown File Inclusion

### Advanced Configuration

## 资源处理

所有的 Markdown 文件都编译成 Vue 组件，由 Vite 处理。你可以使用 URL 引用让你和资源。

你可以在 md 文件中引用静态资源。你的 *.vue 组件在 theme,style 和纯 css
文件中使用决定路径或相对路径。

所有引用的资源，包括那些使用绝对路径的资源，都将被复制到 dist 文件夹中，并在生产构建中使用散列文件名。不会复制从未引用的资产。

所有的静态资源路径，包括绝对路径，都应该基于你的工作目录结构。

### Public Files

有时您可能需要提供任何 Markdown 或主题组件中未直接引用的静态资产。项目根目录的公共目录可用作逃生舱口，以提供源代码中从未引用的静态资源。或必须保留相同的文件名。
公开放置的资源将原样复制到 dist 目录的根目录。
请注意，你应该使用根据对路径引用公共样式放置的文件。

### Base URL

如果你的站点部署到非根 URL, 你需要在 ./vitepress/config.js 中设置 base 选项。
你的所有静态资源路径都会自动处理以适应不同的基本配置值。
在这种情况下，当你更改 base 设置时，你不需要更新它。
但是，如果你正在创作一个动态链接到资源的主题组件。在这种情况下，建议使用 VitePress 提供的 withBase hepler 来包装路径

## Frontmatter

任何包含 YAML frontmatter 块的 Markdown 文件都将由 gray-matter 处理。frontmatter 必须位于 Markdown 文件的顶部，并且必须采用在三点划线之间设置的有效 YAML 的形式。

在三点虚线之间，你可以设置预定义变量，甚至创建你自己的 predefined variables。这些变量通过特殊的 $frontmatter 变量使用。

### Alternative Frontmatter Formats

VitePress 还支持 JSON frontmatter 语法，以花括号开头和结尾。

## 在 Markdown 中使用 Vue

在 VitePress 中，每个 markdown 文件都被编译成 HTML，然后作为 Vue 单文件组件处理。这意味着你可以在 md 中使用任何 Vue 功能。包括动态模板，使用 Vue 组件，或通过添加`<script>`标签的任意页面内 Vue 组件逻辑。

同样重要的是 VitePress 利用 Vue3 的编译器来自动检测和优化 md 文件的纯静态部分。静态内容被优化未单个占位符节点，并从页面的 JavaScript 负载中消除。
在客户端注水期间也跳过，简而言之，只有页面动态部分有性能开销。

### 模板

- 插值
- 指令
- 访问网站和页面数据
- Escaping
- 使用组件
  - 在 md 文件中使用 components
  - 在主题中注册全局组件
  - 在标头中使用组件⚡
- 使用 css 预处理器
- 脚本与风格提升
- 内置组件
- 浏览器 API 访问限制

## API 参考

VitePress 提供了几个内置 API 让你访问应用程序数据，还附带了一些可以在全局范围内使用的内置组件。
辅助方法可以从 vitepress 全局导入，通常用于自定义主题 Vue 组件。但是，它们也可以在。md 页面中使用，因为 md 文件被编译成 Vue 单文件组件。
以 use* 开头的方法表示它是一个 Vue3 组合式 API 函数，只能在 setup() 或 `<script setup>`中使用

### useData

返回特定于页面的数据

### useRoute

返回具有以下类型的当前路由对象

### useRouter

返回 VitePress 路由器实例，以便您可以以编程方式导航到另一个页面。

### withBase

将配置的基础附加到给定的 URL 路径

### <Content/>

`<Content />` 组件显示渲染的 markdown 内容，在创建自己的主题时很有用。

### <ClientOnly />

`<ClientOnly />` 组件仅在客户端呈现其插槽。因为 VitePress 应用程序在生成静态构建时都在 Node.js 中进行服务器渲染，因此任何 Vue 使用都必须符合通用代码要求。简而言之，确保只在 beforeMount 或 mounted 钩子中访问浏览器 /DOM API

如果你正在使用或演示对 SSR 不友好的组件（例如，包含自定义指令）, 你可以将它们包装在 ClientOnly 组件中。
