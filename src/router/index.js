import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Projects from '@/components/Projects'
import Places from '@/components/Places'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/carles-capellas/home'
    },
    {
      path: '/carles-capellas',
      redirect: '/carles-capellas/home'
    },
    {
      path: '/carles-capellas/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/carles-capellas/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/carles-capellas/places',
      name: 'Places',
      component: Places
    }
  ]
})
