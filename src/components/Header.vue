<template>
  <div class="hero-head">
    <div class="navbar is-spaced">
      <div class="container">
        <div class="navbar-brand">
          <span class="navbar-item is-hidden-touch">
            <h1 class="title is-1">{{ title }}</h1>
          </span>
          <span class="navbar-item is-hidden-desktop">
            <h1 class="title is-3">{{ title }}</h1>
          </span>
          <a
            class="navbar-item is-hidden-desktop"
            target="_blank"
            href="https://www.instagram.com/_minorikirakira"
          >
            <span class="icon">
              <i class="fab fa-lg fa-instagram"></i>
            </span>
          </a>
        </div>
        <div id="navbarMenuList" class="navbar-menu">
          <div class="navbar-end">
            <a
              class="navbar-item is-hidden-touch"
              target="_blank"
              href="https://www.instagram.com/_minorikirakira"
            >
              <span class="icon">
                <i class="fab fa-instagram fa-2x"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss"></style>
