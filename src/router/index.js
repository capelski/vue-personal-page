import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Projects from '@/components/Projects'
import Places from '@/components/Places'
import Blog from '@/components/Blog'

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
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/places',
      name: 'Places',
      component: Places
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    // The following route is necessary to resolve the home component at carlescapellas.xyz/vue-personal-page
    {
      path: '/vue-personal-page',
      name: 'Home',
      component: Home
    }
  ]
})
