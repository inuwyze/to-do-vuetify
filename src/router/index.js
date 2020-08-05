import Vue from 'vue'
import VueRouter from 'vue-router'
import dashboard from '../views/dashboard.vue'
import project from '../views/project.vue'
import team from '../views/team.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: dashboard
  },
  {
    path: '/projects',
    name: 'project',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: project
  },
  {
    path: '/team',
    name: 'team',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: team
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
