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
          <td>
            <button class="button is-warning" @click="editCustomer(key)">Edit</button>
            <button class="button is-danger" @click="requireDeleteCustomer(key)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div style="clear: both;">
      <button
        class="button is-primary"
        @click="createCustomer"
      >Add Customer</button>
    </div>

    <confirmation-modal
        v-if="showConfirm"
        :confirmButtonClass="'is-danger'"
        @confirm="performDelete"
        @cancel="closeConfirmation"
        @close="closeConfirmation"
      >
        <template slot="title">Delete Customer</template>
        <template>Are you sure you want to delete customer ?</template>
        <template slot="confirm">Delete</template>
      </confirmation-modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ConfirmationModal from '@/components/ConfirmationModal'

export default {
  components: {
    ConfirmationModal
  },

  data () {
    return {
      customerIdOnDeletion: '',
      showConfirm: false
    }
  },

  created () {
    this.$store.dispatch('fetchCustomers')
  },

  computed: {
    ...mapGetters([
      'customers'
    ])
  },

  methods: {
    ...mapActions([
      'deleteCustomer'
    ]),

    createCustomer () {
      this.$router.push('/customers/create')
    },

    editCustomer (key) {
      this.$router.push({ path: `/customer/${key}/edit` })
    },

    requireDeleteCustomer (key) {
      this.customerIdOnDeletion = key
      this.showConfirmation()
    },

    showConfirmation () {
      this.showConfirm = true
    },

    closeConfirmation () {
      this.customerIdOnDeletion = ''
      this.showConfirm = false
    },

    performDelete () {
      this.deleteCustomer(this.customerIdOnDeletion)
      this.closeConfirmation()
    }
  }
}
</script>

<style>
</style>
