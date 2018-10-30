import Vue from 'vue'
import VueRouter from 'vue-router'

import Podcasts from './../components/Podcasts'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/podcasts',
            name: Podcasts.name,
            component: Podcasts
        }
    ]
})
