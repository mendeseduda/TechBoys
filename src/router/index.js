import Vue from 'vue'
import VueRouter from 'vue-router'

import Podcasts from './../components/Podcasts'
import Home from './../components/Home'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: Home.name,
            component: Home
        },
        {
            path: '/podcasts',
            name: Podcasts.name,
            component: Podcasts
        }
    ]
})
