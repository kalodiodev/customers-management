<template>
  <form @submit.prevent="onSubmit">
    <div class="field is-horizontal">
      <div class="field-body">

        <!-- Customer First Name -->
        <div class="field">
          <label class="label">First Name</label>
          <p class="control">
            <input
              class="input"
              :class="{'is-danger': $v.customer.firstName.$error}"
              type="text"
              placeholder="Type First Name"
              @blur="$v.customer.firstName.$touch()"
              v-model="customer.firstName">
          </p>
          <p v-if="$v.customer.firstName.$error && !$v.customer.firstName.required" class="help is-danger">
            This field is required
          </p>
          <p v-if="$v.customer.firstName.$error && !$v.customer.firstName.minLength" class="help is-danger">
            This field must be at least {{ $v.customer.firstName.$params.minLength.min}} characters long.
          </p>
        </div>

        <!-- Customer Last Name -->
        <div class="field">
          <label class="label">Last Name</label>
          <p class="control">
            <input
              class="input"
              :class="{'is-danger': $v.customer.lastName.$error}"
              type="text"
              placeholder="Type Last Name"
              @blur="$v.customer.lastName.$touch()"
              v-model="customer.lastName">
          </p>
          <p v-if="$v.customer.lastName.$error && !$v.customer.lastName.required" class="help is-danger">
            This field is required
          </p>
          <p v-if="$v.customer.lastName.$error && !$v.customer.lastName.minLength" class="help is-danger">
            This field must be at least {{ $v.customer.lastName.$params.minLength.min}} characters long.
          </p>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-body">

        <!-- Customer Email -->
        <div class="field">
          <label class="label">Email</label>
          <p class="control">
            <input
              class="input"
              :class="{'is-danger': $v.customer.email.$error}"
              type="text"
              placeholder="Email"
              @blur="$v.customer.email.$touch()"
              v-model="customer.email">
          </p>
          <p v-if="$v.customer.email.$error && !$v.customer.email.email" class="help is-danger">
            This field must be an email
          </p>
        </div>

        <!-- Customer Phone -->
        <div class="field">
          <label class="label">Phone</label>
          <p class="control">
            <input
              class="input"
              :class="{'is-danger': $v.customer.phone.$error}"
              type="text"
              placeholder="Phone"
              @blur="$v.customer.phone.$touch()"
              v-model="customer.phone">
          </p>
          <p v-if="$v.customer.phone.$error && !$v.customer.phone.numeric" class="help is-danger">
            This field must be a phone number
          </p>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-body">

        <!-- Customer Address -->
        <div class="field">
          <label class="label">Address</label>
          <p class="control">
            <input class="input" type="text" placeholder="Address" v-model="customer.address">
          </p>
        </div>

        <!-- Customer City -->
        <div class="field">
          <label class="label">City</label>
          <p class="control">
            <input class="input" type="text" placeholder="City" v-model="customer.city">
          </p>
        </div>
      </div>
    </div>

    <!-- Customer Country -->
    <div class="field">
      <label class="label">Country</label>
      <p class="control">
        <input class="input" type="text" placeholder="Country" v-model="customer.country">
      </p>
    </div>

    <div class="field is-horizontal">
      <div class="field-body">

        <!-- Customer Tax ID -->
        <div class="field">
          <label class="label">Tax ID</label>
          <p class="control">
            <input class="input" type="text" placeholder="Tax ID" v-model="customer.taxId">
          </p>
        </div>

        <!-- Customer Profession -->
        <div class="field">
          <label class="label">Profession</label>
          <p class="control">
            <input class="input" type="text" placeholder="Profession" v-model="customer.profession">
          </p>
        </div>
      </div>
    </div>

    <!-- Customer Notes -->
    <div class="field">
      <label class="label">Notes</label>
      <p class="control">
        <textarea class="input" placeholder="Notes" v-model="customer.notes"></textarea>
      </p>
    </div>

    <button class="button is-success is-pulled-right" type="submit">Save Customer</button>
  </form>
</template>

<script>
import { required, minLength, email, numeric } from 'vuelidate/lib/validators'

export default {
  props: {
    customer: {
      type: Object,
      default () {
        return {
          id: '',
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          country: '',
          taxId: '',
          profession: '',
          notes: ''
        }
      }
    }
  },

  validations: {
    customer: {
      firstName: {
        required,
        minLength: minLength(3)
      },
      lastName: {
        required,
        minLength: minLength(3)
      },
      email: {
        email
      },
      phone: {
        numeric
      }
    }
  },

  methods: {
    onSubmit () {
      this.$emit('saveCustomer', this.customer)
    }
  }
}
</script>

<style>

</style>
