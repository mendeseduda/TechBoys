import Vue from 'vue'
import App from './App.vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import router from './router/index'

Vue.use(Vuetify, {
  theme: {
    primary: '#0059B2',
    secondary: '#3f657e',
    accent: '#CFECFF',
    error: ''
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
