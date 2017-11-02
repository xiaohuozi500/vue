import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/topic/topic'
import Details from '@/components/details/details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/topic/:tab',
      component: homePage
    },
    {
      path: '/topic/:tab/:id',
      component: Details
    },
    {
      path: '/*',
      redirect: '/topic/all'
    }
  ]
})
