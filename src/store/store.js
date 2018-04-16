import Vue from 'vue'
import Vuex from 'vuex'
import sourceData from '@/data'

Vue.use(Vuex)

export const store = new Vuex.Store({

  state: {
    customers: sourceData.customers
  },
  getters: {
    customers: state => {
      return state.customers
    }
  },
  mutations: {
    storeCustomer: (state, payload) => {
      payload.id = (Math.random() * 1e32).toString(36)
      Vue.set(state.customers, payload.id, payload)
    }
  },
  actions: {
    saveCustomer: ({ commit }, payload) => {
      commit('storeCustomer', payload)
    }
  }
})
