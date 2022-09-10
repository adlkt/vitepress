import { defineConfig } from "vitepress"

export default defineConfig({
  appearance: true,
  // base:'',
  title: "adlkt的博客",
  // titleTemplate:"",
  description: "前端笔记",
  ignoreDeadLinks: true,
  // lastUpdated: true,
  // lang:"zh-cn",
  // lastUpdated:true,
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
      { text: 'axios', link: '/axios' },
      { text: '小黄鸭', link: '/duck' },
    ],
    // sidebar:[],
    // outline: 2,
    // outlineTitle:''
    // footer: {},
    // editLink: {},
    // lastUpdatedText:'',
    // docFooter: "",
  }
})