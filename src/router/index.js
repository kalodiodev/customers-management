import Vue from 'vue'
import Router from 'vue-router'
import {store} from '@/store/store'
import PageHome from '@/views/PageHome'
import PageCustomers from '@/views/PageCustomers'
import PageAddCustomer from '@/views/PageAddCustomer'
import PageEditCustomer from '@/views/PageEditCustomer'
import PageAbout from '@/views/PageAbout'
import PageNotFound from '@/views/PageNotFound'
import PageSignIn from '@/views/PageSignIn'
import PageSignUp from '@/views/PageSignUp'

Vue.use(Router)

const routes = [
  { path: '/', name: 'PageHome', component: PageHome },
  { path: '/customers', name: 'PageCustomers', component: PageCustomers, meta: { requiresAuth: true } },
  { path: '/customers/create', name: 'PageAddCustomer', component: PageAddCustomer },
  { path: '/customer/:id/edit', name: 'PageEditCustomer', component: PageEditCustomer },
  { path: '/about', name: 'PageAbout', component: PageAbout },
  { path: '/signin', name: 'PageSignIn', component: PageSignIn },
  { path: '/signup', name: 'PageSignUp', component: PageSignUp },
  { path: '*', name: 'PageNotFound', component: PageNotFound }
]

const router = new Router({mode: 'history', routes})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (store.getters.isAuthenticated) {
      next()
    } else {
      next('/signin')
    }
  } else {
    next()
  }
})

export default router
