<template>
  <div
    v-if="loading"
    class="element is-loading"
    :class="{
      'is-vcentered': vCenter,
      'is-centered': hCenter,
      'is-playing-backward': playBackward
    }"
  ></div>
</template>
<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    vCenter: {
      type: Boolean,
      default: false
    },
    hCenter: {
      type: Boolean,
      default: false
    },
    playBackward: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss">
@import "../style.scss";

.element {
  &.is-loading {
    pointer-events: none;
    opacity: 0.5;
    @extend %loader;
    position: absolute;
    border-color: $link;
    border-right-color: transparent;
    border-top-color: transparent;
    width: 5em;
    height: 5em;
    border-width: 0.25em;
    &.is-playing-backward {
      animation-direction: alternate;
      animation-timing-function: ease;
    }
  }
  &.is-centered {
    left: calc(50% - 2.5em);
  }
  &.is-vcentered {
    top: calc(50% - 2.5em);
  }
}
</style>
