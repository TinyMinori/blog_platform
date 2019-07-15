<template>
  <div class="container">
    <loader
      :loading="loading"
      :v-center="true"
      :h-center="true"
      :play-backward="true"
    />
    <welcome v-if="!loading" />
  </div>
</template>

<script>
import Loader from "@/components/Loader.vue"
import Welcome from "@/components/Welcome.vue"

export default {
  components: {
    Loader,
    Welcome
  },
  data() {
    return {
      loading: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 1000)
  }
}
</script>
