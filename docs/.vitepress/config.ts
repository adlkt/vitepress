import { defineConfig } from "vitepress"

export default defineConfig({
  appearance: true,
  // base:'',
  title: "adlkt的博客",
  // titleTemplate:"",
  description: "前端笔记",
  ignoreDeadLinks: true,
  lastUpdated: true,
  // lang:"zh-cn",
  outDir: '../dist',
  head: [
    ['link', { rel: 'icon', href: '/vite.svg' }]
  ],
  markdown: {
    lineNumbers: true,
  },

  /*  */
  themeConfig: {
    logo: "/favicon.ico",
    // siteTitle:"",
    socialLinks: [
      { icon: 'github', link: 'https://github.com/adlkt' },
    ],
    nav: [
      {
        text: 'code',
        items: [
          { text: 'axios', link: '/code/axios' },
          { text: '小黄鸭', link: '/code/duck' },
        ]
      },
      {
        text: "学习",
        items: [
          { text: '汤质看本质', link: 'https://space.bilibili.com/362588980/' },
          { text: 'YJango', link: 'https://space.bilibili.com/344849038' },
          { text: "modevol.com", link: "https://www.modevol.com/" }
        ]
      }
    ],
    sidebar: [],
    // outline: 2,
    // outlineTitle:''
    // footer: {},
    // editLink: {},
    // lastUpdatedText:'',
    // docFooter: "",
  }
})