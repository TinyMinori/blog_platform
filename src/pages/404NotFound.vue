<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <div class="multiline">
          <div class="column">
            <h1 class="title is-1">
              {{ $s.notFound.code }}
            </h1>
          </div>
          <div class="column">
            <span class="subtitle is-1">{{ $s.notFound.text }}</span>
          </div>
        </div>
      </div>
      <div class="column">
        <img src="/images/void.svg" />
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
