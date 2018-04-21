import axios from '@/axios-firebase'

const state = {
  user: null
}

const getters = {
  user (state) {
    return state.user
  }
}

const mutations = {
  storeUser (state, user) {
    state.user = user
  }
}

const actions = {
  storeUser ({commit, state, getters}, user) {
    if (!getters.idToken) {
      return
    }

    axios.post('/users/' + getters.userId + '.json?auth=' + getters.idToken, user)
      .then(res => console.log(res))
      .catch(error => console.log(error))
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
