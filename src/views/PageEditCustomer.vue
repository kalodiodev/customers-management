<template>
  <section class="section">
    <h2 class="title is-3">Edit Customer</h2>
    <customer-form @saveCustomer="updateCustomer"></customer-form>
  </section>
</template>

<script>
import CustomerForm from '@/components/CustomerForm'

export default {
  components: {
    CustomerForm
  },

  created: {

  },

  methods: {
    updateCustomer (customer) {
      // TODO: Save updated customer
    }
  }
}
</script>

<style>

</style>
