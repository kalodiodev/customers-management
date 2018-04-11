import Vue from 'vue'
import Router from 'vue-router'
import PageHome from '@/views/PageHome'
import PageCustomers from '@/views/PageCustomers'
import PageAbout from '@/views/PageAbout'
import PageNotFound from '@/views/PageNotFound'
import PageSignIn from '@/views/PageSignIn'

Vue.use(Router)

const routes = [
  { path: '/', name: 'PageHome', component: PageHome },
  { path: '/customers', name: 'PageCustomers', component: PageCustomers },
  { path: '/about', name: 'PageAbout', component: PageAbout },
  { path: '/signin', name: 'PageSignIn', component: PageSignIn },
  { path: '*', name: 'PageNotFound', component: PageNotFound }
]

export default new Router({mode: 'history', routes})
