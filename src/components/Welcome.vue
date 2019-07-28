<template>
  <div class="container is-centered has-text-centered">
    <div class="is-hidden-touch">
      <h1 class="title is-1">{{ $s.welcome.title }}</h1>
      <span class="subtitle is-3">
        {{ $s.welcome.subtitle }}
      </span>
    </div>
    <div class="is-hidden-desktop">
      <h1 class="title is-3">{{ $s.welcome.title }}</h1>
      <span class="subtitle is-5">{{ $s.welcome.subtitle }}</span>
    </div>
  </div>
</template>

<script>
export default {}
</script>
