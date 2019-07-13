<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
export default {
  data() {
    return {
      default_layout: "default"
    }
  },
  computed: {
    layout: function() {
      return (this.$route.meta.layout || this.default_layout) + "-layout"
    }
  }
}
</script>

<style lang="scss"></style>
