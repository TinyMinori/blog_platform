<template>
  <div class="hero-head has-background-white">
    <div class="navbar is-spaced">
      <div class="container">
        <div class="navbar-brand">
          <span class="navbar-item">
            <h1 class="title">{{ $s.title }}</h1>
          </span>
          <a v-if="loggedIn" class="navbar-item is-hidden-desktop" href="/card">
            <span class="icon">
              <i class="far fa-plus-square fa-2x"></i>
            </span>
          </a>
          <a
            class="navbar-item is-hidden-desktop"
            target="_blank"
            href="https://www.instagram.com/_minorikirakira"
          >
            <span class="icon">
              <i class="fab fa-instagram fa-2x"></i>
            </span>
          </a>
          <a
            v-if="loggedIn"
            class="navbar-item is-hidden-desktop"
            href="/logout"
          >
            <span class="icon">
              <i class="fas fa-sign-out-alt fa-2x"></i>
            </span>
          </a>
        </div>
        <div id="navbarMenuList" class="navbar-menu">
          <div class="navbar-end">
            <a v-if="loggedIn" class="navbar-item" href="/card">
              <span class="icon">
                <i class="far fa-plus-square fa-2x"></i>
              </span>
            </a>
            <a
              class="navbar-item"
              target="_blank"
              href="https://www.instagram.com/_minorikirakira"
            >
              <span class="icon">
                <i class="fab fa-instagram fa-2x"></i>
              </span>
            </a>
            <a v-if="loggedIn" class="navbar-item" href="/logout">
              <span class="icon">
                <i class="fas fa-sign-out-alt fa-2x"></i>
              </span>
            </a>
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
      loggedIn: false
    }
  },
  mounted() {
    if (Cookies.enabled && Cookies.get("token") !== undefined)
      this.loggedIn = true
    else this.loggedIn = false
  }
}
</script>

<style lang="scss"></style>
