import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect:'/home'
    },
    {
        path: '/aboutus',
        component: () => import('../page/AboutUs.vue'),
    },
    {
        path: '/home',
        component: () => import('../page/HomePage.vue'),
    },
    {
        path: '/news',
        component: () => import('../page/NewsPage.vue'),
    },
    {
        path: '/courses',
        component: () => import('../page/CoursePage.vue'),
    },
    {
        path: '/profile',
        component: () => import('../page/UserSpace.vue'),
    },
    {
        path: '/purchase',
        component: () => import('../page/ShopPage.vue'),
    },
    {
        path: '/online-flower-arranging',
        component: () => import('../page/FlowerPage.vue'),
    },
]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})

export default router