import Vue from 'vue'
import Vuex from 'vuex'
import customer from './modules/customer'
import user from './modules/user'
import axiosAuth from '@/axios-auth'
import config from '@/config'
import router from '@/router/index'

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
    },

    clearAuthData (state) {
      state.idToken = null
      state.userId = null
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

          router.replace({'name': 'PageCustomers'})
        })
        .catch(error => console.log(error))
    },

    signin ({commit, dispatch}, authData) {
      axiosAuth.post('/verifyPassword?key=' + config.axios.authAPIKey, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => {
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          })

          router.replace({'name': 'PageCustomers'})
        })
        .catch(error => console.log(error))
    },

    logout ({commit}) {
      commit('clearAuthData')

      router.replace({'name': 'PageSignIn'})
    }
  },

  modules: {
    customer,
    user
  }
})
