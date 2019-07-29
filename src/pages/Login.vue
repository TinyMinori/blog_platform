<template>
  <div class="container">
    <div class="columns">
      <div
        class="column is-full-touch is-half-desktop is-offset-one-quarter-desktop"
      >
        <div class="card">
          <div class="card-content">
            <p class="card-header-title subtitle is-3 is-centered">
              {{ $s.login.title }}
            </p>
            <div v-if="error" class="notification is-danger">
              {{ error }}
            </div>
            <form @submit.prevent="sendForm">
              <div class="field">
                <label class="label">{{ $s.login.username }}</label>
                <div class="control">
                  <input
                    v-model="username"
                    class="input is-rounded"
                    type="text"
                    :placeholder="$s.login.username"
                  />
                </div>
              </div>

              <div class="field">
                <label class="label">{{ $s.login.password }}</label>
                <div class="control">
                  <input
                    v-model="password"
                    class="input is-rounded"
                    type="password"
                    :placeholder="$s.login.password"
                  />
                </div>
              </div>

              <div class="field is-grouped is-grouped-centered">
                <div class="control">
                  <button class="button is-link">
                    {{ $s.login.login_action }}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Cookies from "cookies-js"

export default {
  data() {
    return {
      username: undefined,
      password: undefined,
      error: undefined
    }
  },
  methods: {
    sendForm() {
      this.error = undefined
      if (!this.username || !this.password) return
      this.$http
        .post(process.env.API_URL + "/login", {
          username: this.username,
          password: this.password
        })
        .then(ctx => {
          if (Cookies.enabled) {
            Cookies.set("token", ctx.body.token)
            this.$router.push({ name: "Gallery" })
          } else
            this.error =
              "Your browser doesn't allow cookies. Enable them to connect properly."
        })
        .catch(error => {
          this.error = error.body.message
        })
    }
  }
}
</script>
