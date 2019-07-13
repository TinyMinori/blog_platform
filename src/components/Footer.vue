<template>
  <div class="hero-foot">
    <div class="container has-text-centered">
      <span class="is-6">
        Made with
        <span @mousedown="onClickHeart"
          ><i class="fas fa-heart heart"></i
        ></span>
        by
        <a
          href="https://github.com/Mynori"
          target="_blank"
          class="is-text is-italic"
        >
          Mynori</a
        >
      </span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickHeart(event) {
      event.target.parentNode.classList.add("active")
      setTimeout(() => {
        event.target.parentNode.classList.remove("active")
      })
    }
  }
}
</script>

<style lang="scss">
@mixin animation($animation) {
  -webkit-animation: $animation;
  animation: $animation;
}

@-webkit-keyframes spin {
  0% {
    top: 0px;
  }
  20% {
    top: -10px;
  }
  25% {
    -webkit-transform: scale(1.7);
    color: rgb(255, 50, 50);
  }
  35% {
    -webkit-transform: scale(1);
    color: red;
  }
  60% {
    -webkit-transform: scale(1.4);
    color: rgb(255, 40, 40);
  }
  70% {
    -webkit-transform: scale(1);
    color: red;
  }
  80% {
    top: -10px;
  }
  100% {
    top: 0px;
  }
}

@keyframes spin {
  0% {
    top: 0px;
  }
  20% {
    top: -10px;
  }
  25% {
    transform: scale(1.7);
    color: rgb(255, 50, 50);
  }
  35% {
    transform: scale(1);
    color: red;
  }
  60% {
    transform: scale(1.4);
    color: rgb(255, 40, 40);
  }
  70% {
    transform: scale(1);
    color: red;
  }
  75% {
    top: -10px;
  }
  100% {
    top: 0px;
  }
}

.heart {
  transition: color 0.5s cubic-bezier(0.08, 0.82, 0.17, 1);
  &.active {
    position: relative;
    @include animation(spin 1s linear);
    animation-play-state: running;
  }
}
</style>
