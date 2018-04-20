<template>
  <section class="section">
    <h2 class="title is-3">Edit Customer</h2>
    <customer-form :customer="customer" @saveCustomer="updateCustomer"></customer-form>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import CustomerForm from '@/components/CustomerForm'

export default {
  components: {
    CustomerForm
  },

  computed: {
    ...mapGetters({
      getCustomer: 'customer'
    }),

    customer () {
      return this.getCustomer(this.$route.params.id)
    }
  },

  methods: {
    updateCustomer (customer) {
      this.$store.dispatch('updateCustomer', {
        'key': this.$route.params.id,
        'customer': customer
      })

      this.$router.push('/customers')
    }
  }
}
</script>

<style>

</style>
