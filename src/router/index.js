import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
    {
        path: '/',
        component: () => import('@/views/home/index.vue'),
        meta: {title: '首页'}
    },
    {
        path: '/expanding-cards',
        component: () => import('@/views/expanding-cards/index.vue'),
        meta: {title: '开屏'}
    },
    {
        path: '/increment-counter',
        component: () => import('@/views/increment-counter/index.vue'),
        meta: {title: '计数'}
    },
    {
        path: '/content-placeholder',
        component: () => import('@/views/content-placeholder/index.vue'),
        meta: {title: '骨架屏'}
    },
    {
        path: '/pokedex',
        component: () => import('@/views/pokedex/index.vue'),
        meta: {title: '宝可梦'}
    },
]

export const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
})
