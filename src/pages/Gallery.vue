<template>
  <div class="container">
    <div v-for="item of data">
      <display-data :value="item" />
    </div>
    <infinite-scroll @scroll="loadMore"></infinite-scroll>
  </div>
</template>

<script>
import Welcome from "@/components/Welcome.vue"
import DisplayData from "@/components/DisplayData.vue"
import InfiniteScroll from "@/components/InfiniteScroll.vue"

export default {
  components: {
    DisplayData,
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
          console.log(ctx.body)
          this.data = [...this.data, ...ctx.body.images]
          state.complete()
          /*if (ctx.hits && body.hits.length) {
            this.page += 1
            this.images.push(...body.hits)
            state.loaded()
          } else */
        })
        .catch(error => {
          console.error(error)
          state.complete()
        })
    }
  }
}
</script>
