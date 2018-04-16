<template>
  <div>
    <h2 class="title is-3">Customers</h2>
    <table class="table is-bordered is-striped is-hoverable is-fullwidth" >
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(customer, key) in customers" :key="key">
          <td>{{ key }}</td>
          <td>{{ customer.firstName }}</td>
          <td>{{ customer.lastName }}</td>
          <td><button class="button is-warning">Edit</button></td>
        </tr>
      </tbody>
    </table>

    <div style="clear: both;">
      <button
        class="button is-primary"
        @click="createCustomer"
      >Add Customer</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {

    }
  },

  computed: {
    ...mapGetters ([
      'customers'
    ])
  },

  methods: {
    createCustomer () {
      this.$router.push('/customers/create')
    }
  }
}
</script>

<style>
</style>
