import Vue from 'vue'
import Vuex from 'vuex'
import customer from './modules/customer'
import user from './modules/user'
import axiosAuth from '@/axios-auth'
import config from '@/config'

Vue.use(Vuex)

export const store = new Vuex.Store({

  state: {
    idToken: null,
    userId: null,
    user: null
  },

  getters: {
    user (state) {
      return state.user
    },

    isAuthenticated (state) {
      return state.idToken !== null
    }
  },

  mutations: {
    authUser (state, userData) {
      state.idToken = userData.token
      state.userId = userData.userId
    }
  },

  actions: {
    signup ({commit, dispatch}, authData) {
      axiosAuth.post('/signupNewUser?key=' + config.axios.authAPIKey, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => {
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          })
        })
        .catch(error => console.log(error))
    }
  },

  modules: {
    customer,
    user
  }
})
