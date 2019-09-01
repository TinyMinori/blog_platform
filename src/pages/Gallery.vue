<template>
  <div class="container">
    <div v-for="item of data" class="card-img">
      <display-image :value="item" v-if="item.images.length !== 0" />
      <display-text :value="item" v-else />
    </div>
    <infinite-scroll @scroll="loadMore"></infinite-scroll>
  </div>
</template>

<script>
import Welcome from "@/components/Welcome.vue"
import DisplayImage from "@/components/DisplayImage.vue"
import DisplayText from "@/components/DisplayText.vue"
import InfiniteScroll from "@/components/InfiniteScroll.vue"

export default {
  components: {
    DisplayImage,
    DisplayText,
    Welcome,
    InfiniteScroll
  },
  data() {
    return {
      page: 1,
      data: []
    }
  },
  methods: {
    loadMore(state) {
      this.$http
        .get(process.env.API_URL + "/gallery", { params: { page: this.page } })
        .then(ctx => {
          this.data = [...this.data, ...ctx.body.data]
          this.page += 1
          state.complete()
        })
        .catch(() => {
          state.complete()
        })
    }
  }
}
</script>

<style scoped lang="scss">
.card-img {
  padding: 30px;
}
</style>
