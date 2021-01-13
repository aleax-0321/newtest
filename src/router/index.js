import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/login/Login.vue'
// import Regsiter from '../views/regsiter/Regsiter.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: Login
  },
  // {
  //   path: '/regsiter',
  //   name: 'RegsiterPage',
  //   component: Regsiter
  // },
  {
    path: '/regsiter',
    name: 'RegsiterPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/regsiter/Regsiter.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
