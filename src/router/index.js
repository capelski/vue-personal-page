import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Projects from '@/components/Projects'
import Places from '@/components/Places'

Vue.use(Router)

export default new Router({
  base: process.env.baseUrl,
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/places',
      name: 'Places',
      component: Places
    }
  ]
})
