<template>
  <div class="container">
    <div v-for="image of images">
      <display-data :value="image" />
    </div>
    <infinite-loading @infinite="infiniteHandler">
      <loader
        slot="spinner"
        :h-center="true"
        :v-center="firstLaunch"
        :play-backward="true"
      />
      <welcome slot="no-results" />
      <div slot="no-more">No more message</div>
    </infinite-loading>
  </div>
</template>

<script>
import Loader from "@/components/Loader.vue"
import Welcome from "@/components/Welcome.vue"
import DisplayData from "@/components/DisplayData.vue"
import InfiniteLoading from "vue-infinite-loading"
import axios from "axios"

export default {
  components: {
    Loader,
    InfiniteLoading,
    DisplayData,
    Welcome
  },
  data() {
    return {
      loading: true,
      firstLaunch: true,
      page: 1,
      images: []
    }
  },
  methods: {
    infiniteHandler(state) {
      axios
        .get(process.env.API_URL + "gallery/")
        .then(({ data }) => {
          if (data.hits && data.hits.length) {
            this.page += 1
            this.images.push(...data.hits)
            state.loaded()
          } else state.complete()
        })
        .catch(error => {
          console.log(error)
          state.complete()
        })
        .finally(() => {
          if (this.firstLaunch === true) this.firstLaunch = false
        })
    }
  }
}
</script>
