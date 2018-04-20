import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios-firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({

  state: {
    customers: {}
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
    setCustomers: (state, customers) => {
      state.customers = customers
    },

    storeCustomer: (state, {key, customer}) => {
      Vue.set(state.customers, key, customer)
    },

    updateCustomer: (state, payload) => {
      Vue.set(state.customers, payload.id, payload)
    },

    deleteCustomer: (state, payload) => {
      Vue.delete(state.customers, payload)
    }
  },

  actions: {
    fetchCustomers: ({commit}) => {
      axios.get('customers.json')
        .then(res => {
          commit('setCustomers', res.data)
        })
        .catch(error => console.log(error))
    },

    saveCustomer: ({ commit }, customer) => {
      axios.post('customers.json', customer)
        .then(res => {
          commit('storeCustomer', {'key': res.data.name, 'customer': customer})
        })
        .catch(error => console.log(error))
    },

    updateCustomer: ({ commit }, payload) => {
      commit('updateCustomer', payload)
    },

    deleteCustomer: ({ commit }, payload) => {
      commit('deleteCustomer', payload)
    }
  }
})
