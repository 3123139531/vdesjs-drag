module.exports = {
    base: '/vdesjs/',
    title: 'vdesjs',
    description: '基于vue的可视化拖拽，代码生成工具',
    head: [
        ['link', {
            rel: 'icon',
            href: `/vdesjslogo.png`
        }]
    ],

    themeConfig: {
        repo: 'https://gitee.com/china-bin/vdesjs',
        docsDir: 'docs',
        docsBranch: 'docs',
        editLinks: true,
        editLinkText: '前往Gitee帮助我们改善此页面！',
        lastUpdated: '上次更新与',
        smoothScroll: true,

        nav: [
            { text: '主页', link: '/' },
            { text: '教程', link: '/guide/sxyl' },
            { text: '关于我们', link: '/cooperation/' },
            {text: '在线体验', link: 'http://china-bin.gitee.io/vdesjs/demo/'},
            { text: 'Github', link: 'https://github.com/china-bin/vdesjs' },
            { text: 'Gitee', link: 'https://gitee.com/china-bin/vdesjs' },
        ],
        sidebarDepth: 2,
        sidebar:
        {
            '/guide/': [
                {
                    title: "实现原理",
                    collapsable: true,
                    path: "sxyl",
                },
                {
                    title: "扩展组件",
                    collapsable: true,
                    path: "extend",
                },
                {
                    title: "目录结构",
                    collapsable: true,
                    path: "dir",
                }
            ],
            '/cooperation/': [
                {
                    title: "贡献代码注意",
                    collapsable: true,
                    path: "devote",
                }
            ]
        }

    }

}