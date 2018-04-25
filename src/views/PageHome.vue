<template>
<section class="section">
    <div class="container">
      <h1 class="title has-text-centered">A simple Vue.js application using Firebase Realtime Database</h1>
      <div class="has-text-centered">
        <router-link v-if="!auth" :to="{ name: 'PageSignUp' }" class="button is-info is-large">Sign Up</router-link>
        <router-link v-if="!auth" :to="{ name: 'PageSignIn' }" class="button is-success is-large">Sign In</router-link>
        <button v-if="auth" :to="{ name: 'PageSignIn' }" class="button is-success is-large" @click="onLogout()">Sign Out</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    auth () {
      return this.$store.getters.isAuthenticated
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style scoped>
.is-grey {
  background: #c2c2c2;
}
</style>
