import Vue from 'vue'
import Router from 'vue-router'
import PageHome from '@/views/PageHome'
import PageCustomers from '@/views/PageCustomers'
import PageAddCustomer from '@/views/PageAddCustomer'
import PageAbout from '@/views/PageAbout'
import PageNotFound from '@/views/PageNotFound'
import PageSignIn from '@/views/PageSignIn'
import PageSignUp from '@/views/PageSignUp'

Vue.use(Router)

const routes = [
  { path: '/', name: 'PageHome', component: PageHome },
  { path: '/customers', name: 'PageCustomers', component: PageCustomers },
  { path: '/customers/add', name: 'PageAddCustomer', component: PageAddCustomer },
  { path: '/about', name: 'PageAbout', component: PageAbout },
  { path: '/signin', name: 'PageSignIn', component: PageSignIn },
  { path: '/signup', name: 'PageSignUp', component: PageSignUp },
  { path: '*', name: 'PageNotFound', component: PageNotFound }
]

export default new Router({mode: 'history', routes})
