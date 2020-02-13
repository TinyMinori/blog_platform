<template>
  <div class="container">
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
    <form @submit.prevent="sendData">
      <div class="columns">
        <div class="column">
          <div class="field">
            <label class="label">Titre</label>
            <div class="control">
              <input class="input" type="text" v-model="currentCard.title" />
            </div>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label class="label">Contenu</label>
            <div class="control">
              <textarea
                class="textarea"
                v-model="currentCard.content"
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="field">
            <div class="file">
              <label class="file-label">
                <input
                  class="file-input"
                  type="file"
                  @change="addImage"
                  accept="image/png,image/bmp,.jpg,.jpeg"
                />
                <span class="file-cta">
                  <span class="file-icon">
                    <i class="fas fa-file-image"></i>
                  </span>
                  <span class="file-label">
                    Ajouter une image
                  </span>
                </span>
              </label>
            </div>
          </div>
        </div>
        <div class="column">
          <div v-for="img of currentCard.images" :key="img">
            <img :src="img.location" />
          </div>
        </div>
      </div>

      <div class="control">
        <button class="button is-primary" :disabled="sending">Submit</button>
      </div>
    </form>
  </div>
</template>
<script>
import Cookies from "cookies-js"

export default {
  data() {
    return {
      currentId: 1,
      currentCard: {
        title: undefined,
        content: undefined,
        images: []
      },
      error: undefined,
      sending: false
    }
  },
  async mounted() {
    if (Cookies.enabled) {
      if (!Cookies.get("token")) this.$router.replace("/NotFound")
    }
    if (this.$route.params.id) {
      await this.$http
        .get(process.env.API_URL + "/card/" + this.$route.params.id)
        .then(data => {
          this.currentCard = data.body
        })
        .catch(error => console.error(error.statusText))
    }
  },
  methods: {
    openFile(file) {
      return new Promise(resolve => {
        var reader = new FileReader()
        reader.onload = function() {
          resolve(reader.result)
        }
        reader.readAsDataURL(file)
      })
    },
    async addImage(event) {
      let fileData = await this.openFile(event.target.files[0])
      this.currentCard.images.push({
        _id: this.currentId,
        file: event.target.files[0],
        location: fileData
      })
      this.currentId++
    },
    async sendData() {
      this.sending = true
      let order = this.currentCard.images.map(item => item._id)
      let formData = new FormData()
      formData.append("title", this.currentCard.title)
      formData.append("content", this.currentCard.content)
      if (order.length > 0) formData.append("order", JSON.stringify(order))
      this.currentCard.images.forEach(item => {
        if (item.file !== undefined)
          formData.append(item._id, item.file, item._id)
      })
      await this.$http
        .post(process.env.API_URL + "/card/", formData, {
          headers: {
            Authorization: Cookies.get("token"),
            "Content-Type": "multipart/form-data"
          }
        })
        .then(() => this.$router.push("/"))
        .catch(error => {
          this.sending = false
          this.error = error.statusText
        })
    }
  }
}
</script>

<style lang="scss">
.textarea {
  resize: none !important;
}
</style>
