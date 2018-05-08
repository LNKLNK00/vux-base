import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

Vue.use(Router)

// 路由配置
const RouterConfig = {
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      meta: {
        title: 'index'
      },
      component: (resolve) => require(['@/views/Index'], resolve)
    }
  ]
}

const router = new Router(RouterConfig)

router.beforeEach(function (to, from, next) {
  store.dispatch('UpdateLoadingStatus', true)
  next()
})

router.afterEach(function () {
  store.dispatch('UpdateLoadingStatus', false)
})

export default router
