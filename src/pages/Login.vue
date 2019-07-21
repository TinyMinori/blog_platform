<template>
  <div class="container">
    <div class="columns is-mobile">
      <div class="column is-half is-offset-one-quarter">
        <div class="card">
          <div class="card-content">
            <p class="card-header-title subtitle is-3 is-centered">
              Login
            </p>

            <form @submit.prevent="sendForm">
              <div class="field">
                <label class="label">Nom d'utilisateur</label>
                <div class="control">
                  <input
                    v-model="username"
                    class="input is-rounded"
                    type="text"
                    placeholder="Nom d'utilisateur"
                  />
                </div>
              </div>

              <div class="field">
                <label class="label">Mot de passe</label>
                <div class="control">
                  <input
                    v-model="password"
                    class="input is-rounded"
                    type="password"
                    placeholder="Mot de passe"
                  />
                </div>
              </div>

              <div class="field is-grouped is-grouped-centered">
                <div class="control">
                  <button class="button is-link">Login</button>
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
export default {
  data() {
    return {
      username: undefined,
      password: undefined
    }
  },
  methods: {
    sendForm() {
      if (!this.username || !this.password) return
      alert("Logged In")
    }
  }
}
</script>
