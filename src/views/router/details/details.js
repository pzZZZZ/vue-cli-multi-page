import Vue from 'vue'
import VueRouter from 'vue-router'

import Add from './addApp'
import List from './listApp'

import appindex from './app'

const routes = [
  { path: '/', component: Add },
  {
    path: '/list', component: List
  },
  { path: '/app', component: appindex }
]

Vue.use(VueRouter)

const router = new VueRouter({
  routes: routes
})


new Vue({
  router: router
}).$mount('#app')
