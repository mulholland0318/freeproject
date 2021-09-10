module.exports = {
    debug: false,
    port: 9000,
    open: true,
    base: '/',
    head: [['link', { rel: 'icon', href: '/images/hero.png' }]],
    // dest: `${sourceDir}/.vuepress/dist`,
    // temp: `${sourceDir}/.vuepress/.temp`,
    // cache: `${sourceDir}/.vuepress/.cache`,
    // public: `${sourceDir}/.vuepress/public`,

    lang: 'zh-CN',
    title: '你好，VuePress !',
    description: '这是我的第一个VuePress 站点',
    themeConfig: {
        // logo: 'https://vuejs.org/images/logo.png',
        logo: '/images/hero.png',
        sidebarDepth: 2,
        lastUpdatedText: '最后一次更新内容',
        lastUpdated: true,
        // 侧边栏数组
    // 所有页面会使用相同的侧边栏
        sidebar: "auto",
        locales: {
            '/': {
                selectLanguageName: '简体中文',
            },
            'en': {
                selectLanguageName: 'English',
            }
        },
        navbar: [
            {
                text: '二级菜单',
                children: [
                  {
                    text: 'SubGroup1',
                    children: ['/group/sub/foo.md', '/group/sub/bar.md'],
                  },
                  {
                    text: 'SubGroup3',
                    children: ['/group/sub/foo.md', '/group/sub/bar.md'],
                  },
                ],
            },
            {
                text: '首页',
                link: '/',
            },
            {
                text: '单页面项目',
                children: [
                    {
                        text: 'vue2项目',
                        link: '/vue2/',
                        activeMatch: '^/vue2/',
                    },
                    {
                        text: 'vue3项目',
                        link: '/vue3/',
                        activeMatch: '^/vue3/',
                    }
                ]
            },
            {
                text: 'springboot项目',
                link: '/springboot/'
            },
            {
                text: 'springcloud项目',
                link: '/springcloud/'
            }
            
        ]
    },


    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'VuePress123',
            description: 'Vue 驱动的静态网站生成器',
        },
        'en': {
            lang: 'en-US',
            title: 'VuePress',
            description: 'Vue-powered Static Site Generator',
        }
    }
}