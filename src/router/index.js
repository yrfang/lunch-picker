import Vue from 'vue'
import Router from 'vue-router'

import Homepage from '@/components/Homepage'
import FeedbackPage from '@/components/FeedbackPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Homepage
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: FeedbackPage
    }
  ]
})
