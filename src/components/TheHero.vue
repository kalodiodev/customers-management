<template>
  <section class="hero is-primary is-medium">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item" href="/">
                <h1>Customer Management</h1>
              </a>
              <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroA" class="navbar-menu">
              <div class="navbar-end">
                <!-- Here goes main navigation -->
                <slot name="mainNav"></slot>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Customers Management
          </h1>
          <h2 class="subtitle">
            An easy way to manage your customers
          </h2>
        </div>
      </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
</style>
