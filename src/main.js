import Vue from 'vue'
import App from './App.vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import router from './router/index'

Vue.use(Vuetify, {
  theme: {
    primary: '#0F6299',
    secondary: '#3f657e',
    accent: '#0083cb',
    error: ''
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
