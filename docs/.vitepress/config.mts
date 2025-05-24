import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-Hans',
  title: "游玩",
  description: "久在樊笼里，复得返自然。 ",
  base: "/travel/",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    outline: {
      level: [2,3],
      label: '页面导航'
    },
    footer: {
      message: '江山风月本无常主，闲者便是主人。',
      copyright: `Copyright © 2025-${new Date().getFullYear()} ♥贺丰宝♥`
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    nav: [
      { text: '图集', link: '/list/', activeMatch: '/list/*' },
      { text: '攻略', link: '/guide/', activeMatch: '/guide/*' },
    ],

    sidebar: [
      
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hefengbao' }
    ]
  }
})
