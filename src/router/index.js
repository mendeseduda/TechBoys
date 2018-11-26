import Vue from 'vue'
import VueRouter from 'vue-router'


import Podcasts from './../components/Podcasts'
import Home from './../components/Home'
import Julianimals from './../components/Julianimals'
import About from './../components/About'
import Luk from './../components/Luk'

import Wagner from './../components/shhhhh/Wagner'
import John from './../components/shhhhh/John'
import Secreto from './../components/shhhhh/Secreto'

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
        },
        {
            path:'/about',
            name: About.name,
            component: About
        },
        {
            path: '/wagner',
            name: Wagner.name,
            component: Wagner
        },
        {
            path: '/john',
            name: John.name,
            component: John
        },
        {
            path: '/secreto',
            name: Secreto.name,
            component: Secreto
        },
        {
            path: '/luk',
            name: Luk.name,
            component: Luk
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
        } else {
          return { x: 0, y: 0 }
        }
      }
})
