<template>
  <section class="hero is-fullheight">
    <Header />
    <div class="hero-body">
      <slot />
    </div>
    <Footer />
  </section>
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
.hero-body {
  padding-top: 0 !important;
}
</style>
