<template>
<div class="column is-half is-offset-one-quarter">
  <h1 class="title">Sign In</h1>

  <form @submit.prevent="onSubmit">
    <div class="field">
      <p class="control has-icons-left has-icons-right">
        <input class="input" type="email" placeholder="Email" v-model="email">
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control has-icons-left">
        <input class="input" type="password" placeholder="Password" v-model="password">
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control">
        <button class="button is-success">Sign In</button>
      </p>
    </div>
  </form>
</div>
</template>

<script>
export default {

  data () {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    onSubmit () {
      const userData = {
        email: this.email,
        password: this.password
      }

      this.$store.dispatch('signin', userData)
    }
  }
}
</script>

<style>
</style>
