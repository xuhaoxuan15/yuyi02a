import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/one',
    name:"one",
    component:()=> import('@/views/one')
  },
  {
    path:'/site',
    name:'site',
    component:()=> import('@/views/site.vue')
  },
  {
    path:'/details',
    name:'details',
    component:()=> import('@/views/details')
  },
  {
    path:'/action',
    name:'action',
    component:()=> import('@/views/action')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
