<template>
  <div id="app">
    <the-hero>
      <template slot="mainNav"><the-header/></template>
    </the-hero>

    <div class="container view">
      <router-view/>
    </div>

    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHero from '@/components/TheHero.vue'
import TheFooter from '@/components/TheFooter.vue'
import TheHeader from '@/components/TheHeader.vue'

export default {
  name: 'App',
  components: {
    TheHero,
    TheFooter,
    TheHeader
  }
}
</script>

<style scoped>
.container {
  min-height: 350px;
}
</style>
