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
    },

    customer: state => id => {
      return state.customers[id]
    }
  },
  mutations: {
    storeCustomer: (state, payload) => {
      payload.id = (Math.random() * 1e32).toString(36)
      Vue.set(state.customers, payload.id, payload)
    },

    updateCustomer: (state, payload) => {
      Vue.set(state.customers, payload.id, payload)
    }
  },
  actions: {
    saveCustomer: ({ commit }, payload) => {
      commit('storeCustomer', payload)
    },

    updateCustomer: ({ commit }, payload) => {
      commit('updateCustomer', payload)
    }
  }
})
