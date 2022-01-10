import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const getPage = (path: string) => () => import(`~/pages/${path}.vue`).then(m => m.default || m)
const routes = [
  {
    path: '/',
    redirect: process.env.DEFAULT_LOCALE
  },
  {
    path: '/:locale',
    name: 'home',
    component: getPage('booking'),
    children: [
      {
        path: 'booking',
        component: getPage('booking')
      }
    ]
  }
]

export function createRouter() {
  console.log('routerrrr')
  return new Router({
    mode: 'history',
    routes
  })
}
