import Vue from 'vue'
import VueRouter from 'vue-router'

import Podcasts from './../components/Podcasts'
import Home from './../components/Home'
import Julianimals from './../components/Julianimals'

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
        },
        {
            path:'/julianimals',
            name: Julianimals.name,
            component: Julianimals
        }
    ]
})
