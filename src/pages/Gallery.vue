<template>
  <div class="container">
    <div v-for="item of data" class="card-img" :key="item">
      <display-image :value="item" v-if="item.images.length !== 0" />
      <display-text :value="item" v-else />
    </div>
    <div class="notification is-danger" v-if="error !== undefined">
      <h1 class="title">Erreur</h1>
      <h3 class="subtitle is-6">{{ error }}</h3>
      <br />
      <span class="subtitle is-5">
        Si cette erreur se reproduit, veuillez contacter le support
        développement à l'aide de cet e-mail :
        <a href="mailto:support@letmetravel.fr " class="is-underline is-italic">
          support@letmetravel.fr
        </a>
      </span>
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
      error: undefined,
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
        .catch(error => {
          if (error.ok === false)
            this.error = "Connexion au serveur impossible."
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
