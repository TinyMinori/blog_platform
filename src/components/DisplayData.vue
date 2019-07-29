<template>
  <div id="image">
    <span>{{ value.content }}</span>
    <img :src="value.content" />
  </div>
</template>

<script>
export default {
  props: {
    value: Object
  }
}
</script>
