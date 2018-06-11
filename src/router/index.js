import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from '@/containers/HomeContainer/HomeContainer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomeContainer
    }
  ]
})
