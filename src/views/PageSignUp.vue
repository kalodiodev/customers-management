<template>
<div class="column is-half is-offset-one-quarter">
  <h1 class="title">Sing Up</h1>
  <h2 class="subtitle">Please fill the form to sign up</h2>

  <div class="field">
    <label class="label">Name</label>
    <div class="control">
      <input class="input" type="text" placeholder="Text input">
    </div>
  </div>

  <div class="field">
    <label class="label">Email</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input is-danger" type="email" placeholder="Email input" value="">
      <span class="icon is-small is-left">
        <i class="fas fa-envelope"></i>
      </span>
      <span class="icon is-small is-right">
        <i class="fas fa-exclamation-triangle"></i>
      </span>
    </div>
    <p class="help is-danger">This email is invalid</p>
  </div>

  <div class="field">
    <label class="label">Password</label>
    <p class="control has-icons-left">
      <input class="input" type="password" placeholder="Password">
      <span class="icon is-small is-left">
        <i class="fas fa-lock"></i>
      </span>
    </p>
  </div>

  <div class="field">
    <label class="label">Confirm Password</label>
    <p class="control has-icons-left">
      <input class="input" type="password" placeholder="Password Confirm">
      <span class="icon is-small is-left">
        <i class="fas fa-lock"></i>
      </span>
    </p>
  </div>

  <div class="field">
    <div class="control">
      <label class="checkbox">

    <input type="checkbox">
        I agree to the <a href="#">terms and conditions</a>
      </label>
    </div>
  </div>

  <div class="field is-grouped">
    <div class="control">
      <button class="button is-link">Submit</button>
    </div>
  </div>

</div>
</template>

<script>
export default {

}
</script>

<style>
</style>
