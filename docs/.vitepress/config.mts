import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "ExplodeNut Wiki",
  description: "ExplodeNut的Wiki网站",
  lang: 'zh-CN',
  cleanUrls: true,
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'ExplodeNut Wiki',
    nav: [
      { text: '首页', link: '/' },
      { text: '游戏 Mod', link: '/game-modding/' },
      { text: '资源', link: '/resources/' },
      { text: '好用的网站', link: '/good-websites/' }
    ],

    sidebar: {
      '/game-modding/': [
        {
          text: '游戏 Mod',
          items: [
            { text: '概览', link: '/game-modding/' },
            { text: 'Half-Life 2 Deathmatch 1.5', link: '/game-modding/hl2dm15' },
            { text: 'Counter-Strike 1.6 Mod', link: '/game-modding/cstrike' },
            { text: 'PvZ RE', link: '/game-modding/pvz-re' }
          ]
        }
      ],

      '/resources/': [
        {
          text: '资源',
          items: [
            { text: '概览', link: '/resources/' },
            { text: 'Office部署工具', link: '/resources/office' },
            { text: 'PvZ.NET源码', link: 'https://github.com/Mewnojs/PlantsVsZombies.NET' },
            { text: 'ReGameDLL_CS', link: 'https://github.com/rehlds/ReGameDLL_CS' }
          ]
        }
      ],

      '/good-websites/': [
        {
          text: '好用的网站',
          items: [
            { text: '概览', link: '/good-websites/' },
            { text: 'GitHub', link: 'https://github.com' },
            { text: 'BiliBili', link: 'https://www.bilibili.com' },
            { text: 'Bing搜索', link: 'https://www.bing.com' },
            { text: 'Bing翻译', link: 'https://www.bing.com/translator' },
            { text: 'Google搜索', link: 'https://www.google.com' },
            { text: 'Google翻译', link: 'https://translate.google.com' },
            { text: '我的MSDN', link: 'https://imsdn.cn' },
            { text: 'MSDN NEXT', link: 'https://next.itellyou.cn' },
            { text: 'Pornhub', link: 'https://www.pornhub.com' },
            { text: 'OnMyoDev', link: 'https://www.onmyodev.com' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/explodenut' }
    ]
  }
})
