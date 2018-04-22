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
    userId: null
  },

  getters: {
    isAuthenticated (state) {
      return state.idToken !== null
    },

    userId (state) {
      return state.userId
    },

    // User authentication token
    idToken (state) {
      return state.idToken
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
          dispatch('localPersistAuth', res)

          dispatch('storeUser', {
            'id': res.data.localId,
            'name': authData.name,
            'email': authData.email
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
          dispatch('localPersistAuth', res)

          router.replace({'name': 'PageCustomers'})
        })
        .catch(error => console.log(error))
    },

    logout ({commit, dispatch}) {
      commit('clearAuthData')
      dispatch('clearAuthLocalPersist')

      router.replace({'name': 'PageSignIn'})
    },

    localPersistAuth ({commit, dispatch}, res) {
      const now = new Date()
      const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
      localStorage.setItem('token', res.data.idToken)
      localStorage.setItem('userId', res.data.localId)
      localStorage.setItem('expirationDate', expirationDate)

      commit('authUser', {
        token: res.data.idToken,
        userId: res.data.localId
      })

      dispatch('setLogoutTimer', res.data.expiresIn)
    },

    clearAuthLocalPersist () {
      localStorage.removeItem('expirationDate')
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
    },

    tryAutoLogin ({commit}) {
      // Token
      const token = localStorage.getItem('token')
      if (!token) {
        return
      }

      // Expiration Date
      const expirationDate = localStorage.getItem('expirationDate')
      const now = new Date()
      if (now >= expirationDate) {
        return
      }

      // User Id
      const userId = localStorage.getItem('userId')
      commit('authUser', {
        token: token,
        userId: userId
      })

      router.replace({ name: 'PageCustomers' })
    },

    setLogoutTimer ({commit}, expirationTime) {
      setTimeout(() => {
        commit('clearAuthData')
      }, expirationTime * 1000)
    }
  },

  modules: {
    customer,
    user
  }
})
