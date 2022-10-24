export default [
    {
        path: 'dashboard',
        icon: 'dashboard',
        name: 'dashboard',
        label: '仪表盘',
        subs: [
            {
                path: 'dashboard/analysis',
                icon: 'analysis',
                name: 'analysis',
                label: '分析',
                component: './components/analysis'
            }
        ]
    },
    {
        path: 'cms',
        icon: 'cms',
        name: 'cms',
        label: '内容管理',
        subs: [
            {
                path: 'cms/post',
                icon: 'post',
                name: 'post',
                label: '博客管理',
                component: './components/post'
            },
            {
                path: 'tag',
                name: 'tag',
                label: '标签'
            }
        ]
    },
    {
        path: 'authority',
        icon: 'authority',
        name: 'authority',
        label: '权限管理',
        subs: [
            {
                path: 'authority/user',
                name: 'user',
                label: '用户管理',
                component: './components/user'
            }
        ]
    },
    {
        path: '*',
        component: './pages/404'
    }
]