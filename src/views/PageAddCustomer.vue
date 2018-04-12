<template>
  <section class="section">
    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field">
          <label class="label">First Name</label>
          <p class="control">
            <input class="input" type="text" placeholder="Type First Name">
          </p>
        </div>
        <div class="field">
          <label class="label">Last Name</label>
          <p class="control">
            <input class="input" type="email" placeholder="Type Last Name">
          </p>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field">
          <label class="label">Email</label>
          <p class="control">
            <input class="input" type="text" placeholder="Email">
          </p>
        </div>
        <div class="field">
          <label class="label">Phone</label>
          <p class="control">
            <input class="input" type="text" placeholder="Phone">
          </p>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field">
          <label class="label">Address</label>
          <p class="control">
            <input class="input" type="text" placeholder="Address">
          </p>
        </div>
        <div class="field">
          <label class="label">City</label>
          <p class="control">
            <input class="input" type="text" placeholder="City">
          </p>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">Country</label>
      <p class="control">
        <input class="input" type="text" placeholder="City">
      </p>
    </div>

    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field">
          <label class="label">Tax ID</label>
          <p class="control">
            <input class="input" type="text" placeholder="Tax ID">
          </p>
        </div>
        <div class="field">
          <label class="label">Profession</label>
          <p class="control">
            <input class="input" type="text" placeholder="Profession">
          </p>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">Notes</label>
      <p class="control">
        <textarea class="input" placeholder="Notes"></textarea>
      </p>
    </div>

    <button class="button is-success is-pulled-right" @click="save">Save Device</button>
  </section>
</template>

<script>
export default {
}
</script>

<style>

</style>
