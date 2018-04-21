<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-menu">
      <router-link to="/" class="navbar-item" active-class="is-active" exact>Home</router-link>
      <router-link to="/customers" class="navbar-item" active-class="is-active">Customers</router-link>
      <router-link to="/about" class="navbar-item" active-class="is-active">About</router-link>
      <router-link to="/signin" class="navbar-item" active-class="is-active">Sign in</router-link>
      <router-link to="/signup" class="navbar-item" active-class="is-active">Sign up</router-link>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
</style>
