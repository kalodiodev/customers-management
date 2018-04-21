<template>
<div class="column is-half is-offset-one-quarter">
  <h1 class="title">Sign Up</h1>
  <h2 class="subtitle">Please fill the form to sign up</h2>

  <form @submit.prevent="onSubmit">

    <!-- User name -->
    <div class="field">
      <label class="label">Name</label>
      <p class="control">
        <input
          class="input"
          :class="{'is-danger': $v.name.$error}"
          type="text"
          placeholder="Type your name"
          @blur="$v.name.$touch()"
          v-model="name">
      </p>
      <p v-if="$v.name.$error && !$v.name.required" class="help is-danger">
        This field is required
      <p>
      <p v-if="$v.name.$error && !$v.name.minLength" class="help is-danger">
        This field must be at least {{ $v.name.$params.minLength.min }} characters long.
      </p>
    </div>

    <!-- User email -->
    <div class="field">
      <label class="label">Email</label>
      <p class="control has-icons-left has-icons-right">

        <input
          class="input"
          :class="{'is-danger': $v.email.$error}"
          type="email"
          placeholder="Type your email"
          @blur="$v.email.$touch()"
          v-model="email">

        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-exclamation-triangle"></i>
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
      <label class="label">Password</label>
      <p class="control has-icons-left">
        <input
          class="input"
          :class="{'is-danger': $v.password.$error}"
          type="password"
          placeholder="Type your password"
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

    <!-- User password confirmation -->
    <div class="field">
      <label class="label">Confirm Password</label>
      <p class="control has-icons-left">
        <input
          class="input"
          :class="{'is-danger': $v.confirmPassword.$error}"
          type="password"
          placeholder="Confirm your password"
          @blur="$v.confirmPassword.$touch()"
          v-model="confirmPassword">
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </p>
      <p v-if="$v.confirmPassword.$error && !$v.confirmPassword.sameAs" class="help is-danger">
        Password confirm does not match password
      </p>
    </div>

    <div class="field">
      <p class="control">
        <label class="checkbox">
          <input
            type="checkbox"
            @change="$v.terms.$touch()"
            v-model="terms">I agree to the <a href="#">terms and conditions</a>
        </label>
      </p>
      <p v-if="$v.terms.$error && !$v.terms.required" class="help is-danger">
        You must accept terms and conditions
      </p>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link" :disabled="$v.$invalid" type="submit">Submit</button>
      </div>
    </div>
  </form>

</div>
</template>

<script>
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      terms: false
    }
  },

  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    },
    confirmPassword: {
      sameAs: sameAs(vm => {
        return vm.password
      })
    },
    terms: {
      required
    }
  },

  methods: {
    onSubmit () {
      const userData = {
        name: this.name,
        email: this.email,
        password: this.password
      }

      this.$store.dispatch('signup', userData)
    }
  }
}
</script>

<style>
</style>
