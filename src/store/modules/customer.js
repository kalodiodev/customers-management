import Vue from 'vue'
import axios from '@/axios-firebase'

const state = {
  customers: {}
}

const getters = {
  customers: state => {
    return state.customers
  },

  customer: state => id => {
    return state.customers[id]
  }
}

const mutations = {
  setCustomers: (state, customers) => {
    state.customers = customers
  },

  storeCustomer: (state, {key, customer}) => {
    Vue.set(state.customers, key, customer)
  },

  updateCustomer: (state, {key, customer}) => {
    Vue.set(state.customers, key, customer)
  },

  deleteCustomer: (state, key) => {
    Vue.delete(state.customers, key)
  }
}

const actions = {
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

  updateCustomer: ({ commit }, {key, customer}) => {
    axios.patch('customers/' + key + '.json', customer)
      .then(res => {
        commit('updateCustomer', {key, customer})
      })
      .catch(error => console.log(error))
  },

  deleteCustomer: ({ commit }, key) => {
    axios.delete('customers/' + key + '.json')
      .then(res => {
        commit('deleteCustomer', key)
      })
      .catch(error => console.log(error))
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
