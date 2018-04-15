import Vue from 'vue'
import Vuex from 'vuex'
import sourceData from '@/data'

Vue.use(Vuex)

export const store = new Vuex.Store({

  state: {
    customers: sourceData.customers
  }
})
