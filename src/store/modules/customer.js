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
  fetchCustomers: ({commit, getters}) => {
    // get customers: /customers/userId.json?auth=token
    axios.get('customers/' + getters.userId + '.json?auth=' + getters.idToken)
      .then(res => {
        if (res.data != null) {
          commit('setCustomers', res.data)
        }
      })
      .catch(error => console.log(error))
  },

  saveCustomer: ({ commit, getters }, customer) => {
    // save customer: /customers/userId.json?auth=token
    axios.post('/customers/' + getters.userId + '.json?auth=' + getters.idToken, customer)
      .then(res => {
        commit('storeCustomer', {'key': res.data.name, 'customer': customer})
      })
      .catch(error => console.log(error))
  },

  updateCustomer: ({ commit, getters }, {key, customer}) => {
    // update customer: /customers/userId.json?auth=token
    axios.patch('customers/' + getters.userId + '/' + key + '.json?auth=' + getters.idToken, customer)
      .then(res => {
        commit('updateCustomer', {key, customer})
      })
      .catch(error => console.log(error))
  },

  deleteCustomer: ({ commit, getters }, key) => {
    // delete customer: /customers/userId.json?auth=token
    axios.delete('customers/' + key + '.json?auth=' + getters.idToken)
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
