<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-menu">
      <router-link to="/" class="navbar-item" active-class="is-active" exact>Home</router-link>
      <router-link v-if="auth" to="/customers" class="navbar-item" active-class="is-active">Customers</router-link>
      <router-link to="/about" class="navbar-item" active-class="is-active">About</router-link>
      <router-link v-if="!auth" to="/signin" class="navbar-item" active-class="is-active">Sign in</router-link>
      <router-link v-if="!auth" to="/signup" class="navbar-item" active-class="is-active">Sign up</router-link>
      <a v-if="auth" class="navbar-item" @click="onLogout">Logout</a>
    </div>
  </nav>
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
      
    }
  }
}
</script>

<style>
</style>
