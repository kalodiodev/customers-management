<template>
<div class="column is-half is-offset-one-quarter">
  <h1 class="title">Sign In</h1>

  <form @submit.prevent="onSubmit">

    <!-- User email -->
    <div class="field">
      <p class="control has-icons-left has-icons-right">
        <input
          class="input"
          :class="{'is-danger': $v.email.$error}"
          type="email"
          @blur="$v.email.$touch()"
          placeholder="Email"
          v-model="email">
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </p>
      <p v-if="$v.email.$error && !$v.email.email" class="help is-danger">
        This field must be an email
      </p>
      <p v-if="$v.email.$error && !$v.email.required" class="help is-danger">
        This field is required
      </p>
    </div>

    <!-- User password -->
    <div class="field">
      <p class="control has-icons-left">
        <input
          class="input"
          :class="{'is-danger': $v.password.$error}"
          type="password"
          placeholder="Password"
          @blur="$v.password.$touch()"
          v-model="password">
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </p>
      <p v-if="$v.password.$error && !$v.password.required" class="help is-danger">
        This field is required
      </p>
      <p v-if="$v.password.$error && !$v.password.minLength" class="help is-danger">
        Password must be at least {{ $v.password.$params.minLength.min }} characters long.
      </p>
    </div>

    <!-- Submit button -->
    <div class="field">
      <p class="control">
        <button class="button is-success" :disabled="$v.$invalid">Sign In</button>
      </p>
    </div>
  </form>
</div>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'

export default {

  data () {
    return {
      email: '',
      password: ''
    }
  },

  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
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
