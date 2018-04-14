<template>
  <div>
    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field">
          <label class="label">First Name</label>
          <p class="control">
            <input class="input" type="text" placeholder="Type First Name" v-model="firstName">
          </p>
        </div>
        <div class="field">
          <label class="label">Last Name</label>
          <p class="control">
            <input class="input" type="email" placeholder="Type Last Name" v-model="lastName">
          </p>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field">
          <label class="label">Email</label>
          <p class="control">
            <input class="input" type="text" placeholder="Email" v-model="email">
          </p>
        </div>
        <div class="field">
          <label class="label">Phone</label>
          <p class="control">
            <input class="input" type="text" placeholder="Phone" v-model="phone">
          </p>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field">
          <label class="label">Address</label>
          <p class="control">
            <input class="input" type="text" placeholder="Address" v-model="address">
          </p>
        </div>
        <div class="field">
          <label class="label">City</label>
          <p class="control">
            <input class="input" type="text" placeholder="City" v-model="city">
          </p>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">Country</label>
      <p class="control">
        <input class="input" type="text" placeholder="Country" v-model="country">
      </p>
    </div>

    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field">
          <label class="label">Tax ID</label>
          <p class="control">
            <input class="input" type="text" placeholder="Tax ID" v-model="taxId">
          </p>
        </div>
        <div class="field">
          <label class="label">Profession</label>
          <p class="control">
            <input class="input" type="text" placeholder="Profession" v-model="profession">
          </p>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">Notes</label>
      <p class="control">
        <textarea class="input" placeholder="Notes" v-model="notes"></textarea>
      </p>
    </div>

    <button class="button is-success is-pulled-right">Save Customer</button>
  </div>
</template>

<script>
export default {
  props: {
    customer: {
      type: Object
    }
  },

  data() {
    return {
      firstName: this.customer.firstName,
      lastName: this.customer.lastName,
      email: this.customer.email,
      phone: this.customer.phone,
      address: this.customer.address,
      city: this.customer.city,
      country: this.customer.country,
      taxId: this.customer.taxId,
      profession: this.customer.profession,
      notes: this.customer.notes
    }
  },

  methods: {
    save () {
      this.$emit("saveCustomer", {
        firstName: this.customer.id,
        lastName: this.lastName,
        email: this.email,
        phone: this.phone,
        address: this.address,
        city: this.city,
        country: this.country,
        taxId: this.taxId,
        profession: this.profession,
        notes: this.notes
      })
    }
  }
}
</script>

<style>

</style>
