<template>
  <div class="container"></div>
</template>
<script>
export default {
  async mounted() {
    if (this.$route.params.id) {
      await this.$http
        .get(process.env.API_URL + "/card/" + this.$route.params.id)
        .then(() => console.log("found"))
        .catch(error => console.error(error.statusText))
    }
  }
}
</script>
