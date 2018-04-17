<template>
<div class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">
        <slot name="title">Modal title</slot>
      </p>
      <button
        class="delete"
        aria-label="close"
        @click="cancel">
      </button>
    </header>
    <section class="modal-card-body">
      <slot></slot>
    </section>
    <footer class="modal-card-foot">
      <button
        class="button"
        :class="confirmButtonClass"
        @click="confirm"
      >
        <slot name="confirm">Save changes</slot>
      </button>
      <button
        class="button"
        @click="cancel"
      >
        <slot name="cancel">Cancel</slot>
      </button>
    </footer>
  </div>
</div>
</template>

<script>
export default {
  props: {
    confirmButtonClass: {
      type: String,
      required: true
    }
  },

  methods: {
    confirm () {
      this.$emit('confirm')
    },

    cancel () {
      this.$emit('cancel')
    },

    close () {
      this.$emit('close')
    }
  }
}
</script>

<style>

</style>
