import { defineConfig } from "vitepress"

export default defineConfig({
  title: "VitePress",
  description: 'Just playing around',
  ignoreDeadLinks: true,
  markdown: {
    lineNumbers: true,
    toc: { level: [1, 2] }
  },
  themeConfig: {
    logo: "/favicon.ico",
    siteTitle: 'VitePress',
    nav: [
      { text: 'Guide', link: '/guide' },
      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present Evan You"
    }
  }
})