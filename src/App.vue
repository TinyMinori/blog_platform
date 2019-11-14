<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import moment from "moment"

export default {
  data() {
    return {
      default_layout: "empty"
    }
  },
  created() {
    moment.locale("fr")
  },
  computed: {
    layout: function() {
      return (this.$route.meta.layout || this.default_layout) + "-layout"
    }
  }
}
</script>

<style lang="scss"></style>
