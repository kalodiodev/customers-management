<template>
  <section class="section">
    <h2 class="title is-3">Add Customer</h2>
    <customer-form @saveCustomer="saveCustomer"></customer-form>
  </section>
</template>

<script>
import CustomerForm from '@/components/CustomerForm'

export default {
  components: {
    CustomerForm
  },

  methods: {
    saveCustomer (customer) {
      this.$store.dispatch('saveCustomer', customer)

      this.$router.push('/customers')
    }
  }
}
</script>

<style>

</style>
