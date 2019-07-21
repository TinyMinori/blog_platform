<template>
  <div class="container">
    <div class="columns is-centered is-hidden-touch">
      <div class="column is-narrow">
        <h1 class="title is-1">
          {{ $s.notFound.code }}
        </h1>
      </div>
      <div class="column is-narrow">
        <div class="is-divider-vertical"></div>
      </div>
      <div class="column is-narrow">
        <span class="subtitle is-1">{{ $s.notFound.text }}</span>
      </div>
    </div>
    <div class="is-hidden-desktop multiline">
      <div class="column is-12">
        <h1 class="title is-1">
          {{ $s.notFound.code }}
        </h1>
      </div>
      <div class="column is-12">
        <span class="subtitle is-1">{{ $s.notFound.text }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    document.title = "Not Found"
  }
}
</script>
