<template>
  <div id="app">
    <the-hero></the-hero>

    <div class="container view">
      <router-view/>
    </div>
  </div>
</template>

<script>
import TheHero from '@/components/TheHero.vue'

export default {
  name: 'App',
  components: {
    TheHero
  }
}
</script>

<style>

</style>
