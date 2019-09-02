<template>
  <div v-else class="container">
    <form @submit.prevent="">
      <div class="columns">
        <div class="column">
          <div class="field">
            <label class="label">Titre</label>
            <div class="control">
              <input class="input" type="text" />
            </div>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label class="label">Contenu</label>
            <div class="control">
              <textarea class="textarea"></textarea>
            </div>
          </div>
        </div>
      </div>

      <div class="field">
        <div class="file">
          <label class="file-label">
            <input
              class="file-input"
              type="file"
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

      <div class="control">
        <button class="button is-primary">Submit</button>
      </div>
    </form>
  </div>
</template>
<script>
import Cookies from "cookies-js"

export default {
  async mounted() {
    if (Cookies.enabled) {
      if (!Cookies.get("token")) this.$router.replace("/NotFound")
    }
    if (this.$route.params.id) {
      await this.$http
        .get(process.env.API_URL + "/card/" + this.$route.params.id)
        .then(() => console.log("found"))
        .catch(error => console.error(error.statusText))
    }
  }
}
</script>

<style lang="scss">
.textarea {
  resize: none !important;
}
</style>
