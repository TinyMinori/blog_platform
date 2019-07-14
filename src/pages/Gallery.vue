<template>
  <div class="container">
    <loader
      :loading="true"
      :v-center="true"
      :h-center="true"
      :play-backward="true"
    />
  </div>
</template>

<script>
import Loader from "@/components/Loader.vue"
export default {
  components: {
    Loader
  }
}
</script>
