import Vue from 'vue'
import Router from 'vue-router'
import PageHome from '@/views/PageHome'
import PageCustomers from '@/views/PageCustomers'

Vue.use(Router)

const routes = [
  { path: '/', name: 'PageHome', component: PageHome },
  { path: '/customers', name: 'PageCustomers', component: PageCustomers }
]

export default new Router({mode: 'history', routes})
