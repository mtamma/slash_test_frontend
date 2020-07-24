import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import dashboard from '@/components/dashboard/dashboard.vue'
import login from '@/components/account/login/login.vue'

Vue.use(VueRouter)

function validateRoute(to: any, from: any, next: Function) {
    if (!localStorage.login) {
        next({
            name: 'login'
        })
    }
    next();
}

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'dashboard',
        component: dashboard,
        beforeEnter: validateRoute
    },
    {
        path: '/login',
        name: 'login',
        component: login,
        meta: {
            layout: 'authentication'
        }
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
