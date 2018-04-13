<template>
  <section class="section">
    <customer-form></customer-form>
    <button class="button is-success is-pulled-right" @click="save">Save Device</button>
  </section>
</template>

<script>
import CustomerForm from '@/components/CustomerForm'

export default {
  components: {
    CustomerForm
  }
}
</script>

<style>

</style>
