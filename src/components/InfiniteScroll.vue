<template>
  <div>
    <div v-if="loading">
      <loader :h-center="true" :v-center="firstLaunch" :play-backward="true" />
    </div>
  </div>
</template>
<script>
import Loader from "@/components/Loader.vue"

export default {
  components: {
    Loader
  },
  data() {
    return {
      firstLaunch: true,
      loading: true,
      totalHeight: 0,
      timeout: 300
    }
  },
  mounted() {
    window.onscroll = this.triggerScroll
    setInterval(this.triggerScroll, this.timeout)
  },
  methods: {
    async completed() {
      this.loading = false
      if (this.firstLaunch) this.firstLaunch = false
    },
    triggerScroll() {
      let offsetHeight = document.documentElement.offsetHeight
      if (
        offsetHeight !== this.totalHeight &&
        document.documentElement.scrollTop + window.innerHeight === offsetHeight
      ) {
        this.totalHeight = offsetHeight
        this.$emit("scroll", { complete: this.completed })
      }
    }
  }
}
</script>
